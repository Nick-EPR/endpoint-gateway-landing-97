
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface WhitepaperRequest {
  name: string;
  email: string;
  company: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company }: WhitepaperRequest = await req.json();

    const emailResponse = await resend.emails.send({
      from: "Security Team <onboarding@resend.dev>",
      to: [email],
      subject: "Your Security Whitepaper Download",
      html: `
        <h1>Thank you for your interest in our Security Whitepaper, ${name}!</h1>
        <p>As requested, here is your copy of our comprehensive security whitepaper.</p>
        <p>You can download the whitepaper using this link: [Your whitepaper download link]</p>
        <p>If you have any questions about our security measures or would like to discuss how we can help ${company} with IT asset management, please don't hesitate to reach out.</p>
        <p>Best regards,<br>The Security Team</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-whitepaper function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
