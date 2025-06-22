
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  message: string;
}

// Input validation and sanitization
const validateAndSanitizeInput = (data: ContactFormData): ContactFormData => {
  // Validate required fields
  if (!data.name?.trim() || !data.company?.trim() || !data.email?.trim() || !data.message?.trim()) {
    throw new Error("All fields are required");
  }

  // Validate lengths
  if (data.name.length > 100) throw new Error("Name too long");
  if (data.company.length > 200) throw new Error("Company name too long");
  if (data.email.length > 255) throw new Error("Email too long");
  if (data.message.length > 5000) throw new Error("Message too long");

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

  // Basic message validation (alphanumeric + common punctuation)
  const messageRegex = /^[a-zA-Z0-9\s.,!?'"()-]+$/;
  if (!messageRegex.test(data.message)) {
    throw new Error("Invalid message format");
  }

  // Sanitize and return
  return {
    name: data.name.trim(),
    company: data.company.trim(),
    email: data.email.toLowerCase().trim(),
    message: data.message.trim()
  };
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const rawData: ContactFormData = await req.json();
    console.log("Received contact form submission");

    // Validate and sanitize input
    const formData = validateAndSanitizeInput(rawData);
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
      from: "Lifetime EPR <onboarding@resend.dev>",
      to: "nick@lifetimeepr.com",
      subject: `New Contact Form Submission from ${escapeHtml(formData.name)}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${escapeHtml(formData.name)}</p>
        <p><strong>Company:</strong> ${escapeHtml(formData.company)}</p>
        <p><strong>Email:</strong> ${escapeHtml(formData.email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(formData.message)}</p>
        <hr>
        <p><small>This email was automatically generated from the contact form submission.</small></p>
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
    console.error("Error in send-contact-notification function:", error);
    
    // Return different status codes based on error type
    const statusCode = error.message.includes("Invalid") || 
                      error.message.includes("required") || 
                      error.message.includes("too long") ? 400 : 500;
    
    return new Response(
      JSON.stringify({ error: "Failed to process contact form submission" }),
      {
        status: statusCode,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
