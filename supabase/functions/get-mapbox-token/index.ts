import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from '../_shared/cors.ts'

console.log("Get Mapbox Token function up and running!")

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Get the Mapbox token from Supabase secrets
    const { data, error } = await fetch(
      `${Deno.env.get('SUPABASE_URL')}/rest/v1/rpc/get_secret`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ secret_name: 'MAPBOX_PUBLIC_TOKEN' })
      }
    ).then(res => res.text())

    if (!data) {
      throw new Error('Failed to retrieve Mapbox token')
    }

    return new Response(
      JSON.stringify({ token: data.replace(/"/g, '') }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )
  }
})