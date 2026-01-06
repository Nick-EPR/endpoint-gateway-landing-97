import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from '../_shared/cors.ts'

console.log("Get Mapbox Token function up and running!")

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Get the Mapbox token directly from environment variables
    const token = Deno.env.get('MAPBOX_PUBLIC_TOKEN')

    if (!token) {
      throw new Error('MAPBOX_PUBLIC_TOKEN is not configured')
    }

    console.log('Successfully retrieved Mapbox token')

    return new Response(
      JSON.stringify({ token }),
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