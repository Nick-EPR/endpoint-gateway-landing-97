
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
    const response = await fetch('https://cronitor.io/api/v3/monitors', {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${btoa(apiKey + ':')}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })

    const responseText = await response.text()
    console.log("Cronitor API raw response:", responseText)

    if (!response.ok) {
      console.error("Cronitor API error:", response.status, responseText)
      throw new Error(`Cronitor API error: ${response.status}`)
    }

    let data
    try {
      data = JSON.parse(responseText)
      console.log("Successfully parsed response:", JSON.stringify(data, null, 2))

      // Transform the response to match our expected format
      const monitors = data.monitors?.map(monitor => {
        // Get the last 30 days of metrics
        const today = new Date()
        const dailyMetrics = Array.from({ length: 30 }, (_, i) => {
          const date = new Date(today)
          date.setDate(date.getDate() - i)
          return date.toISOString().split('T')[0]
        })

        // Extract actual metrics if available
        const uptimeMetrics = monitor.metrics?.uptime?.daily || []
        const latencyMetrics = monitor.metrics?.latency?.daily || []
        
        // Create a map for easy lookup
        const uptimeMap = new Map(uptimeMetrics.map(m => [m.date, m.value]))
        const latencyMap = new Map(latencyMetrics.map(m => [m.date, m.value]))

        return {
          name: monitor.name,
          status: monitor.passing ? "healthy" : (monitor.state || monitor.status || 'unknown'),
          latest_ping: {
            timestamp: monitor.latest_event?.stamp 
              ? new Date(monitor.latest_event.stamp * 1000).toISOString()
              : new Date().toISOString()
          },
          metrics: {
            uptime: {
              daily: dailyMetrics.map(date => ({
                date,
                value: uptimeMap.get(date) ?? 100 // Default to 100% if no data
              }))
            },
            latency: {
              daily: dailyMetrics.map(date => ({
                date,
                value: latencyMap.get(date) ?? monitor.latest_event?.metrics?.duration ?? 200 // Default to latest response time or 200ms
              }))
            }
          }
        }
      }) || [];

      console.log("Transformed monitors:", JSON.stringify(monitors, null, 2));

      return new Response(
        JSON.stringify({ monitors }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        },
      )
    } catch (e) {
      console.error("Failed to parse or transform response:", e)
      throw new Error('Invalid JSON response from Cronitor')
    }
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
