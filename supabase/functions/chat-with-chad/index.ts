
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const systemPrompt = `You are Chad, a concise and helpful customer support representative for Lifetime EPR. Keep responses brief and to-the-point while remaining friendly and professional. Aim for 1-3 sentences per response unless more detail is specifically requested.

Key Information About Lifetime EPR:

Products:
- HeliAM: IT asset lifecycle management platform
- Toolbox: Asset tracking and security suite
- Luemin: Upcoming UEM solution

Core Services:
- Asset lifecycle management (procurement, deployment, recovery)
- 24/7 device management and support
- Security and compliance (SOC 2 Type II, ISO27001:2022)
- Automated workflows and real-time tracking

Contact Information:
- Technical support: support@lifetimeepr.com
- Sales: sales@lifetimeepr.com
- Customer success: success@lifetimeepr.com

Guidelines:
- Keep responses short and direct
- Focus on immediate solutions
- Use bullet points for multiple items
- Provide contact emails when needed
- If unsure, briefly acknowledge and direct to appropriate team`;

console.log('Edge function initialized');

serve(async (req) => {
  console.log('Received request:', req.method);
  
  if (req.method === 'OPTIONS') {
    console.log('Handling OPTIONS request');
    return new Response(null, { 
      headers: corsHeaders
    });
  }

  if (!openAIApiKey) {
    console.error('OpenAI API key not found');
    return new Response(
      JSON.stringify({ error: 'OpenAI API key not configured' }), 
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }

  try {
    console.log('Parsing request body');
    const { messages } = await req.json();
    console.log('Received messages:', messages);

    console.log('Making request to OpenAI');
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 150, // Limit response length
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('OpenAI API error:', errorData);
      throw new Error(`OpenAI API error: ${response.status} ${errorData}`);
    }

    const data = await response.json();
    console.log('OpenAI response:', data);
    
    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in chat function:', error);
    return new Response(
      JSON.stringify({ error: error.message }), 
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
