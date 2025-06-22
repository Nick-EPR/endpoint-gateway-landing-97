
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

// Input validation and sanitization
const validateAndSanitizeInput = (data: WhitepaperRequest): WhitepaperRequest => {
  // Validate required fields
  if (!data.name?.trim() || !data.email?.trim() || !data.company?.trim()) {
    throw new Error("All fields are required");
  }

  // Validate lengths
  if (data.name.length > 100) throw new Error("Name too long");
  if (data.email.length > 255) throw new Error("Email too long");
  if (data.company.length > 200) throw new Error("Company name too long");

  // Validate email format
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!emailRegex.test(data.email)) {
    throw new Error("Invalid email format");
  }

  // Validate name format (letters, spaces, hyphens, apostrophes only)
  const nameRegex = /^[a-zA-Z\s'-]+$/;
  if (!nameRegex.test(data.name)) {
    throw new Error("Invalid name format");
  }

  // Validate company format
  const companyRegex = /^[a-zA-Z0-9\s&.,-]+$/;
  if (!companyRegex.test(data.company)) {
    throw new Error("Invalid company name format");
  }

  // Sanitize and return
  return {
    name: data.name.trim(),
    email: data.email.toLowerCase().trim(),
    company: data.company.trim()
  };
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const rawData: WhitepaperRequest = await req.json();
    console.log("Received whitepaper download request");

    // Validate and sanitize input
    const { name, email, company } = validateAndSanitizeInput(rawData);
    console.log("Input validation passed");

    // HTML escape function to prevent XSS
    const escapeHtml = (text: string): string => {
      const map: { [key: string]: string } = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      };
      return text.replace(/[&<>"']/g, (m) => map[m]);
    };

    const emailResponse = await resend.emails.send({
      from: "Security Team <onboarding@resend.dev>",
      to: [email],
      subject: "Your Security Whitepaper Download",
      html: `
        <h1>Thank you for your interest in our Security Whitepaper, ${escapeHtml(name)}!</h1>
        <p>As requested, here is your copy of our comprehensive security whitepaper.</p>
        <p>You can download the whitepaper using this link: [Your whitepaper download link]</p>
        <p>If you have any questions about our security measures or would like to discuss how we can help ${escapeHtml(company)} with IT asset management, please don't hesitate to reach out.</p>
        <p>Best regards,<br>The Security Team</p>
        <hr>
        <p><small>This email was automatically generated from your whitepaper download request.</small></p>
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
    
    // Return different status codes based on error type
    const statusCode = error.message.includes("Invalid") || 
                      error.message.includes("required") || 
                      error.message.includes("too long") ? 400 : 500;
    
    return new Response(
      JSON.stringify({ error: "Failed to process whitepaper request" }),
      {
        status: statusCode,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
