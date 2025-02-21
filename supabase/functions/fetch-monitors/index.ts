
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { corsHeaders } from '../_shared/cors.ts'

console.log("Hello from Fetch Monitors!")

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { data: secretData, error: secretError } = await req.supabaseClient
      .rpc('get_secret', { secret_name: 'CRONITOR_API_KEY' })

    if (secretError) {
      throw new Error('Failed to fetch API key')
    }

    const response = await fetch('https://cronitor.io/api/v2/monitors', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${secretData}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })

    const data = await response.json()

    return new Response(
      JSON.stringify(data),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})
