import { corsHeaders } from "../_shared/cors.ts";

interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author_name: string;
  author_title: string;
  featured_image_url: string;
  category: string;
  tags: string[];
  published_at: string;
  is_featured: boolean;
  seo_title: string;
  seo_description: string;
  view_count: number;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const params = url.searchParams;

    // Extract query parameters
    const limit = Math.min(parseInt(params.get("limit") || "10"), 100);
    const offset = parseInt(params.get("offset") || "0");
    const category = params.get("category");
    const featured = params.get("featured") === "true";
    const slug = params.get("slug");
    const tag = params.get("tag");

    console.log("News API request:", { limit, offset, category, featured, slug, tag });

    // Import Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    const { createClient } = await import("https://esm.sh/@supabase/supabase-js@2");
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Build query
    let query = supabase
      .from("news_articles")
      .select("*", { count: "exact" })
      .eq("published", true)
      .lte("published_at", new Date().toISOString())
      .order("published_at", { ascending: false });

    // Apply filters
    if (slug) {
      query = query.eq("slug", slug);
    }
    if (category) {
      query = query.eq("category", category);
    }
    if (featured) {
      query = query.eq("is_featured", true);
    }
    if (tag) {
      query = query.contains("tags", [tag]);
    }

    // Apply pagination
    query = query.range(offset, offset + limit - 1);

    const { data, error, count } = await query;

    if (error) {
      console.error("Database error:", error);
      return new Response(
        JSON.stringify({ success: false, error: error.message }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // If searching by slug and no article found, return 404
    if (slug && (!data || data.length === 0)) {
      console.log("Article not found for slug:", slug);
      return new Response(
        JSON.stringify({ success: false, error: "Article not found" }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Return response
    return new Response(
      JSON.stringify({
        success: true,
        data: data || [],
        meta: {
          total: count || 0,
          limit,
          offset,
        },
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
