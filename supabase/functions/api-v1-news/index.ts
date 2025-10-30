import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Extract query parameters from the incoming request
    const url = new URL(req.url);
    const searchParams = url.searchParams;
    
    // Build the external API URL
    const externalApiUrl = new URL('https://9b091317-c2bd-4966-af66-a6e93877dc0a.lovableproject.com/docs/api/news');
    
    // Forward all query parameters
    searchParams.forEach((value, key) => {
      externalApiUrl.searchParams.append(key, value);
    });

    console.log('Proxying request to:', externalApiUrl.toString());

    // Make the server-side request to the external API
    const response = await fetch(externalApiUrl.toString());
    
    if (!response.ok) {
      console.error('External API error:', response.status, response.statusText);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: `External API returned ${response.status}` 
        }),
        { 
          status: response.status,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Get the data from the external API
    const data = await response.json();
    
    // Return it to the frontend with CORS headers
    return new Response(
      JSON.stringify(data),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Proxy error:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});
