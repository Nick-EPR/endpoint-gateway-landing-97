
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { corsHeaders } from '../_shared/cors.ts'

console.log("Starting Fetch Monitors Edge Function")

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const apiKey = Deno.env.get('CRONITOR_API_KEY')
    if (!apiKey) {
      console.error("No CRONITOR_API_KEY found in environment variables")
      throw new Error('CRONITOR_API_KEY not configured')
    }

    console.log("Making request to Cronitor API...")

    // First, get the list of monitors
    const monitorsResponse = await fetch('https://cronitor.io/api/v3/monitors', {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${btoa(apiKey + ':')}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })

    if (!monitorsResponse.ok) {
      const errorText = await monitorsResponse.text()
      console.error("Monitors API error:", monitorsResponse.status, errorText)
      throw new Error(`Cronitor API error: ${monitorsResponse.status}`)
    }

    const monitorsData = await monitorsResponse.json()
    console.log("Monitors response:", JSON.stringify(monitorsData, null, 2))

    if (!monitorsData.monitors) {
      throw new Error('No monitors found in Cronitor response')
    }

    // For each monitor, fetch its detailed telemetry
    const monitorPromises = monitorsData.monitors.map(async (monitor: any) => {
      try {
        const telemetryResponse = await fetch(`https://cronitor.io/api/v3/monitors/${monitor.code}/telemetry`, {
          headers: {
            'Authorization': `Basic ${btoa(apiKey + ':')}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        })

        if (!telemetryResponse.ok) {
          console.error(`Error fetching telemetry for monitor ${monitor.code}:`, telemetryResponse.status)
          return null
        }

        const telemetryData = await telemetryResponse.json()
        console.log(`Telemetry for ${monitor.code}:`, JSON.stringify(telemetryData, null, 2))

        // Get the last 30 days of metrics
        const today = new Date()
        const metrics = Array.from({ length: 30 }, (_, i) => {
          const date = new Date(today)
          date.setDate(date.getDate() - (29 - i))
          
          // Try to find matching telemetry data, otherwise use defaults
          const dateStr = date.toISOString().split('T')[0]
          const telemetry = telemetryData.daily?.find((t: any) => t.date === dateStr)

          return {
            date: dateStr,
            uptime: telemetry?.uptime ?? 99.9,
            latency: telemetry?.latency ?? 200
          }
        })

        return {
          name: monitor.name,
          status: monitor.state || 'unknown',
          latest_ping: {
            timestamp: monitor.latest_ping || new Date().toISOString()
          },
          metrics: {
            uptime: {
              daily: metrics.map(m => ({
                date: m.date,
                value: m.uptime
              }))
            },
            latency: {
              daily: metrics.map(m => ({
                date: m.date,
                value: m.latency
              }))
            }
          }
        }
      } catch (error) {
        console.error(`Error processing monitor ${monitor.code}:`, error)
        return null
      }
    })

    const monitors = (await Promise.all(monitorPromises)).filter(Boolean)
    console.log("Final processed monitors:", JSON.stringify(monitors, null, 2))

    if (monitors.length === 0) {
      throw new Error('No valid monitors found')
    }

    return new Response(
      JSON.stringify({ monitors }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error("Edge function error:", error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})
