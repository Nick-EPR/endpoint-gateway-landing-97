
import { NewsCard } from "./NewsCard";
import { NewsArticle } from "@/utils/newsUtils";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NewsGridProps {
  articles: NewsArticle[];
  isLoading: boolean;
  isError: boolean;
  onRetry?: () => void;
}

export const NewsGrid = ({ articles, isLoading, isError, onRetry }: NewsGridProps) => {
  // Loading State
  if (isLoading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-card rounded-xl shadow-lg border border-border overflow-hidden">
            <Skeleton className="h-48 w-full" />
            <div className="p-6 space-y-4">
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-full" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Error State
  if (isError) {
    return (
      <div className="text-center py-16">
        <AlertCircle className="w-16 h-16 text-destructive mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-foreground">Failed to Load Articles</h3>
        <p className="text-muted-foreground mb-6">
          We couldn't fetch the latest news. Please try again.
        </p>
        {onRetry && (
          <Button onClick={onRetry} variant="outline">
            Try Again
          </Button>
        )}
      </div>
    );
  }

  // Empty State
  if (articles.length === 0) {
    return (
      <div className="text-center py-16">
        <Newspaper className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-foreground">No Articles Found</h3>
        <p className="text-muted-foreground">
          No news articles available yet. Check back soon!
        </p>
      </div>
    );
  }

  // Grid Display
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article, index) => (
        <div
          key={article.id}
          className="animate-fade-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <NewsCard article={article} />
        </div>
      ))}
    </div>
  );
};
