import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { fetchNewsArticles } from "@/utils/newsUtils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink, X, Newspaper } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const FeaturedNewsBanner = () => {
  const [isDismissed, setIsDismissed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('featuredNewsBanner_dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  useEffect(() => {
    // Delay the slide-down animation for smooth UX after page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const { data: featuredNews, isLoading } = useQuery({
    queryKey: ["featured-news"],
    queryFn: () => fetchNewsArticles({ featured: true, limit: 10 }),
    refetchInterval: 5 * 60 * 1000, // Refresh every 5 minutes
    staleTime: 2 * 60 * 1000, // Consider stale after 2 minutes
  });

  const articles = featuredNews?.data || [];

  const handleClose = () => {
    setIsDismissed(true);
    sessionStorage.setItem('featuredNewsBanner_dismissed', 'true');
  };

  // Don't render if no featured articles or still loading or dismissed
  if (isLoading || articles.length === 0 || isDismissed) {
    return null;
  }

  return (
    <div className={cn(
      "sticky top-[72px] w-full bg-background/95 backdrop-blur-sm border-b border-border z-40 relative",
      "transition-all duration-700 ease-out",
      isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
    )}>
      <div className="container mx-auto px-4 py-2">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 6000,
              stopOnInteraction: true,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-semibold text-foreground">
                Featured News
              </span>
            </div>
            <div className="flex gap-1">
              <CarouselPrevious className="relative left-0 top-0 translate-y-0 h-7 w-7" />
              <CarouselNext className="relative right-0 top-0 translate-y-0 h-7 w-7" />
            </div>
          </div>

          <CarouselContent className="-ml-4">
            {articles.map((article) => {
              const isExternal = article.article_type === 'external';
              const CardContent = (
                <div className="flex gap-2 p-2 rounded-lg bg-card hover:bg-accent/50 transition-colors border border-border">
                  <div className="flex-shrink-0 w-12 h-12 rounded overflow-hidden">
                    {article.featured_image_url ? (
                      <img
                        src={article.featured_image_url}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <Newspaper className="w-6 h-6 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="secondary" className="text-xs capitalize rounded-md px-2 py-1">
                        {article.category}
                      </Badge>
                      {isExternal && article.source_publication && (
                        <Badge variant="outline" className="text-xs gap-1 rounded-md px-2 py-1">
                          <ExternalLink className="w-2 h-2" />
                          {article.source_publication}
                        </Badge>
                      )}
                      {article.published_at && (
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {format(new Date(article.published_at), "MMM d")}
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                  </div>
                </div>
              );
              
              return (
                <CarouselItem
                  key={article.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  {isExternal ? (
                    <a
                      href={article.external_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group hover:opacity-80 transition-opacity"
                    >
                      {CardContent}
                    </a>
                  ) : (
                    <Link
                      to={`/news/${article.slug}`}
                      className="block group hover:opacity-80 transition-opacity"
                    >
                      {CardContent}
                    </Link>
                  )}
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
      
      <button
        onClick={handleClose}
        className="absolute bottom-2 right-2 h-6 w-6 rounded-full bg-background/80 hover:bg-accent border border-border flex items-center justify-center transition-colors"
        aria-label="Close featured news banner"
      >
        <X className="h-3 w-3" />
      </button>
    </div>
  );
};

export default FeaturedNewsBanner;
