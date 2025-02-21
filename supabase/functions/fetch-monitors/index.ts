
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
    const response = await fetch('https://cronitor.io/api/monitors', {
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
      const monitors = data.monitors?.map(monitor => ({
        name: monitor.name,
        status: monitor.state || monitor.status || 'unknown',
        latest_ping: {
          timestamp: monitor.latest_event?.timestamp || new Date().toISOString()
        },
        metrics: {
          uptime: {
            daily: Array.from({ length: 30 }, (_, i) => ({
              date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
              value: monitor.attributes?.uptime || 99.9
            }))
          },
          latency: {
            daily: Array.from({ length: 30 }, (_, i) => ({
              date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
              value: monitor.attributes?.latency || 200
            }))
          }
        }
      })) || [];

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
