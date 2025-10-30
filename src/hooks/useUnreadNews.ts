import { useQuery } from "@tanstack/react-query";
import { fetchNewsArticles } from "@/utils/newsUtils";

export const useUnreadNews = () => {
  return useQuery({
    queryKey: ["unread-news-count"],
    queryFn: async () => {
      const lastVisit = localStorage.getItem('lastNewsVisit');
      
      // If never visited, don't show badge
      if (!lastVisit) return 0;
      
      const lastVisitDate = new Date(lastVisit);
      
      // Fetch latest articles
      const response = await fetchNewsArticles({ limit: 5 });
      
      if (!response.success) return 0;
      
      // Count articles published after last visit
      const unreadCount = response.data.filter(article => {
        const publishedDate = new Date(article.published_at);
        return publishedDate > lastVisitDate;
      }).length;
      
      return unreadCount;
    },
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
  });
};
