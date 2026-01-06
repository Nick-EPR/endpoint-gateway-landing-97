import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { fetchNewsArticles } from "@/utils/newsUtils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ExternalLink, X } from "lucide-react";
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
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const { data: featuredNews, isLoading } = useQuery({
    queryKey: ["featured-news"],
    queryFn: () => fetchNewsArticles({ featured: true, limit: 10 }),
    refetchInterval: 5 * 60 * 1000,
    staleTime: 2 * 60 * 1000,
  });

  const articles = featuredNews?.data || [];

  const handleClose = () => {
    setIsDismissed(true);
    sessionStorage.setItem('featuredNewsBanner_dismissed', 'true');
  };

  if (isLoading || articles.length === 0 || isDismissed) {
    return null;
  }

  return (
    <div className={cn(
      "sticky top-[72px] w-full bg-background/95 backdrop-blur-sm border-b border-border/50 z-40",
      "transition-all duration-700 ease-out",
      isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center h-10 gap-3">
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Featured
            </span>
          </div>
          
          <div className="flex-1 min-w-0 overflow-hidden">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 5000,
                  stopOnInteraction: true,
                  stopOnMouseEnter: true,
                }),
              ]}
              className="w-full [&_.embla__slide]:transition-opacity [&_.embla__slide]:duration-500"
            >
              <CarouselContent className="ml-0">
                {articles.map((article) => {
                  const isExternal = article.article_type === 'external';
                  const sourceLabel = isExternal && article.source_publication 
                    ? article.source_publication 
                    : article.category;
                  
                  const content = (
                    <span className="flex items-center gap-2 text-sm">
                      <span className="truncate text-foreground group-hover:text-primary transition-colors">
                        {article.title}
                      </span>
                      <span className="text-muted-foreground text-xs flex-shrink-0 hidden sm:inline">
                        — {sourceLabel}
                      </span>
                      {isExternal && (
                        <ExternalLink className="w-3 h-3 text-muted-foreground flex-shrink-0" />
                      )}
                    </span>
                  );
                  
                  return (
                    <CarouselItem key={article.id} className="pl-0 basis-full">
                      {isExternal ? (
                        <a
                          href={article.external_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block group"
                        >
                          {content}
                        </a>
                      ) : (
                        <Link
                          to={`/news/${article.slug}`}
                          className="block group"
                        >
                          {content}
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
            className="flex-shrink-0 p-1 rounded hover:bg-accent/50 transition-colors"
            aria-label="Close featured news banner"
          >
            <X className="h-3.5 w-3.5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNewsBanner;
