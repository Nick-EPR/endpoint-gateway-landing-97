import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface RSVPFormData {
  name: string;
  email: string;
  company: string;
}

const validateInput = (data: RSVPFormData): RSVPFormData => {
  if (!data.name?.trim() || !data.email?.trim() || !data.company?.trim()) {
    throw new Error("All fields are required");
  }
  if (data.name.length > 100) throw new Error("Name too long");
  if (data.email.length > 255) throw new Error("Email too long");
  if (data.company.length > 200) throw new Error("Company name too long");

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!emailRegex.test(data.email)) throw new Error("Invalid email format");

  const nameRegex = /^[a-zA-Z\s'\-]+$/;
  if (!nameRegex.test(data.name)) throw new Error("Invalid name format");

  return {
    name: data.name.trim(),
    email: data.email.toLowerCase().trim(),
    company: data.company.trim(),
  };
};

const escapeHtml = (text: string): string => {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const rawData: RSVPFormData = await req.json();
    const data = validateInput(rawData);

    const emailResponse = await resend.emails.send({
      from: "Lifetime EPR <onboarding@resend.dev>",
      to: "sales@lifetimeepr.com",
      subject: `LegalWeek 2026 RSVP from ${escapeHtml(data.name)}`,
      html: `
        <h1>New LegalWeek 2026 RSVP</h1>
        <p><strong>Event:</strong> Lifetime EPR Happy Hour – March 10th, 5:30–8:30 PM at Refinery Hotel, NYC</p>
        <hr>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(data.company)}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })} ET</p>
        <hr>
        <p><small>Automatically generated from the LegalWeek 2026 RSVP form.</small></p>
      `,
    });

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-rsvp-notification:", error);
    const statusCode =
      error.message.includes("Invalid") ||
      error.message.includes("required") ||
      error.message.includes("too long")
        ? 400
        : 500;
    return new Response(
      JSON.stringify({ error: "Failed to process RSVP" }),
      { status: statusCode, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
