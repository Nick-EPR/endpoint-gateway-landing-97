
export interface NewsArticle {
  id: string;
  article_type: 'internal' | 'external';
  title: string;
  slug: string;
  excerpt: string;
  url: string;
  content?: string; // Only for internal articles
  external_url?: string; // Only for external articles
  source_publication?: string; // e.g., "CRN", "TechCrunch"
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
  type?: 'internal' | 'external';
  source?: string;
}

const API_BASE_URL = 'https://9b091317-c2bd-4966-af66-a6e93877dc0a.lovableproject.com/docs/api/news';

export const fetchNewsArticles = async (params?: FetchNewsParams): Promise<NewsApiResponse> => {
  const searchParams = new URLSearchParams();
  
  if (params?.limit) searchParams.append('limit', params.limit.toString());
  if (params?.offset) searchParams.append('offset', params.offset.toString());
  if (params?.category) searchParams.append('category', params.category);
  if (params?.featured) searchParams.append('featured', 'true');
  if (params?.slug) searchParams.append('slug', params.slug);
  if (params?.tag) searchParams.append('tag', params.tag);
  if (params?.type) searchParams.append('type', params.type);
  if (params?.source) searchParams.append('source', params.source);

  const url = `${API_BASE_URL}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
  
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error('Failed to fetch news articles');
  }
  
  return response.json();
};

export const fetchArticleBySlug = async (slug: string): Promise<NewsArticle | null> => {
  const response = await fetchNewsArticles({ slug });
  
  if (!response.success) {
    return null;
  }
  
  // Handle both array and single object responses
  if (Array.isArray(response.data)) {
    return response.data.length > 0 ? response.data[0] : null;
  }
  
  // If data is a single object, return it directly
  return response.data as NewsArticle;
};
