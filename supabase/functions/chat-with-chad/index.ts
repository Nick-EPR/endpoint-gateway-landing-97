
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const systemPrompt = `You are Chad, an AI assistant for Lifetime EPR. You help users with questions about Lifetime EPR's IT asset lifecycle management solutions, including recovery, repair, refurbishment, and data lifecycle management.

Key points to remember:
- Be polite, helpful, and informative
- For technical support issues, suggest emailing support@lifetimeepr.com
- For customer success inquiries, suggest emailing success@lifetimeepr.com
- Focus on IT asset management, device lifecycle, and enterprise solutions
- Be concise but thorough in your responses
- If you're unsure about something, acknowledge it and suggest contacting support

About Lifetime EPR:
- Provides comprehensive IT asset lifecycle solutions
- Offers device recovery, repair, and refurbishment services
- Specializes in secure data management and wiping
- Partners with T-Mobile for enterprise connectivity solutions
- SOC 2 Type II Certified and ISO27001:2022 Compliant`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();

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
      }),
    });

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
