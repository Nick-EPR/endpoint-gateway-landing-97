
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

    console.log("Making request to Cronitor API with key length:", apiKey.length)
    const encodedAuth = btoa(apiKey + ':')
    console.log("Using Basic auth header with encoded length:", encodedAuth.length)

    const url = 'https://cronitor.io/api/monitors'
    console.log("Making request to:", url)

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${encodedAuth}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })

    console.log("Response status:", response.status)
    console.log("Response headers:", Object.fromEntries(response.headers.entries()))

    const responseText = await response.text()
    console.log("Cronitor API raw response:", responseText)

    if (!response.ok) {
      console.error("Cronitor API error:", response.status, responseText)
      throw new Error(`Cronitor API error: ${response.status} - ${responseText}`)
    }

    let cronitorData
    try {
      cronitorData = JSON.parse(responseText)
      console.log("Successfully parsed response:", JSON.stringify(cronitorData, null, 2))
    } catch (e) {
      console.error("Failed to parse Cronitor response:", e)
      throw new Error('Invalid JSON response from Cronitor')
    }

    // Transform the data to match our expected format
    const monitors = Array.isArray(cronitorData.monitors) ? cronitorData.monitors : [];
    console.log("Transformed monitors count:", monitors.length)
    
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
      JSON.stringify({ 
        error: error.message,
        details: error.stack
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})
