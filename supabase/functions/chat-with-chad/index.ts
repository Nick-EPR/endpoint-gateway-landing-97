
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const systemPrompt = `You are Chad, a customer support representative for Lifetime EPR. You help users understand Lifetime EPR's IT asset lifecycle management solutions and services. Be friendly, professional, and helpful.

Key Information About Lifetime EPR:

Products & Solutions:
- HeliAM: Core IT asset management platform for comprehensive lifecycle management
- Toolbox: Integrated suite for asset tracking, security, and management
- Luemin: Upcoming unified endpoint management (UEM) solution (coming soon)

Core Services:
1. Asset Lifecycle Management:
   - Device procurement and deployment
   - Equipment recovery and reassignment
   - End-of-life asset disposition
   - Role-based equipment packages

2. Device Management:
   - 24-hour device replacement nationwide
   - OEM-certified repair services
   - Remote device control and monitoring
   - Secure storage facilities

3. Security & Compliance:
   - SOC 2 Type II Certified
   - ISO27001:2022 Compliant
   - Enterprise-grade security controls
   - Secure data handling and destruction

4. Platform Features:
   - Unified asset database
   - Cross-product integration
   - AI/ML-powered predictive maintenance
   - Real-time inventory tracking
   - Automated workflows

Target Audience:
- Enterprise organizations
- SMBs
- Healthcare institutions
- Educational organizations
- Managed Service Providers (MSPs)
- Value-Added Resellers (VARs)

Key Benefits:
- Reduced IT costs
- Improved asset utilization
- Enhanced security compliance
- Streamlined operations
- 24/7 support availability
- Nationwide coverage

For specific inquiries:
- Technical support: support@lifetimeepr.com
- Sales: sales@lifetimeepr.com
- Customer success: success@lifetimeepr.com

Guidelines:
- Be friendly and professional
- Provide specific, accurate information
- Direct users to appropriate email contacts when needed
- Focus on business value and solutions
- Highlight relevant features based on user's needs
- If unsure about specific details, acknowledge it and suggest contacting the appropriate team`;

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
