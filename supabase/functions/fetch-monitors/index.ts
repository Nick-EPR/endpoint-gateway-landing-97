
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4'
import { corsHeaders } from '../_shared/cors.ts'

console.log("Starting Fetch Monitors Edge Function")

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    console.log("Fetching CRONITOR_API_KEY from secrets...")
    const { data: apiKey, error: secretError } = await supabaseClient
      .rpc('get_secret', { secret_name: 'CRONITOR_API_KEY' })

    if (secretError) {
      console.error("Error fetching API key:", secretError)
      throw new Error('Failed to fetch API key')
    }

    if (!apiKey) {
      console.error("No API key found")
      throw new Error('No API key found')
    }

    console.log("Making request to Cronitor API...")
    const response = await fetch('https://cronitor.io/api/v2/monitors', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })

    if (!response.ok) {
      console.error("Cronitor API error:", response.status, await response.text())
      throw new Error(`Cronitor API error: ${response.status}`)
    }

    const cronitorData = await response.json()
    console.log("Successfully fetched Cronitor data:", cronitorData)

    // Transform the data to match our expected format
    const monitors = Array.isArray(cronitorData.monitors) ? cronitorData.monitors : [];
    
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
