
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

    if (!response.ok) {
      throw new Error(`Cronitor API error: ${response.status}`)
    }

    const data = await response.json()
    console.log("Raw Cronitor response:", JSON.stringify(data, null, 2))

    if (!data.monitors) {
      throw new Error('No monitors found in Cronitor response')
    }

    // Transform the response to match our expected format
    const monitors = data.monitors.map(monitor => {
      // Get metrics for the last 30 days
      const today = new Date()
      const metrics = Array.from({ length: 30 }, (_, i) => {
        const date = new Date(today)
        date.setDate(date.getDate() - (29 - i)) // Start from oldest to newest
        return {
          date: date.toISOString().split('T')[0],
          uptime: 99.9 + (Math.random() * 0.1), // Placeholder: 99.9-100%
          latency: 150 + Math.floor(Math.random() * 100) // Placeholder: 150-250ms
        }
      })

      return {
        name: monitor.name,
        status: monitor.state || monitor.status || 'unknown',
        latest_ping: {
          timestamp: new Date().toISOString()
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
    })

    console.log("Transformed monitors:", JSON.stringify({ monitors }, null, 2))

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
