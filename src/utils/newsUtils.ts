
export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // Markdown supported
  author_name: string;
  author_title: string;
  featured_image_url: string;
  category: string;
  tags: string[];
  published_at: string; // ISO 8601 timestamp
  is_featured: boolean;
  seo_title: string;
  seo_description: string;
  view_count: number;
}

export interface NewsApiResponse {
  success: boolean;
  data: NewsArticle[];
  meta: {
    total: number;
    limit: number;
    offset: number;
  };
}

export interface FetchNewsParams {
  limit?: number;
  offset?: number;
  category?: string;
  featured?: boolean;
  slug?: string;
  tag?: string;
}

const API_BASE_URL = 'https://enqatyvjcztoicadviix.supabase.co/functions/v1/api-v1-news';

export const fetchNewsArticles = async (params?: FetchNewsParams): Promise<NewsApiResponse> => {
  const searchParams = new URLSearchParams();
  
  if (params?.limit) searchParams.append('limit', params.limit.toString());
  if (params?.offset) searchParams.append('offset', params.offset.toString());
  if (params?.category) searchParams.append('category', params.category);
  if (params?.featured) searchParams.append('featured', 'true');
  if (params?.slug) searchParams.append('slug', params.slug);
  if (params?.tag) searchParams.append('tag', params.tag);

  const url = `${API_BASE_URL}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
  
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error('Failed to fetch news articles');
  }
  
  return response.json();
};

export const fetchArticleBySlug = async (slug: string): Promise<NewsArticle | null> => {
  const response = await fetchNewsArticles({ slug });
  return response.success && response.data.length > 0 ? response.data[0] : null;
};
