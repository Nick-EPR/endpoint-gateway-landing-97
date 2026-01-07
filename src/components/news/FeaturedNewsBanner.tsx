import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { fetchNewsArticles } from "@/utils/newsUtils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ExternalLink, Newspaper, X } from "lucide-react";
import { cn } from "@/lib/utils";

const FeaturedNewsBanner = () => {
  const [isDismissed, setIsDismissed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

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

  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    onSelect();
    
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const { data: newsData, isLoading } = useQuery({
    queryKey: ["all-news-banner"],
    queryFn: () => fetchNewsArticles({ limit: 15 }),
    refetchInterval: 5 * 60 * 1000,
    staleTime: 2 * 60 * 1000,
  });

  const articles = newsData?.data || [];
  const currentArticle = articles[currentIndex];
  const isCurrentFeatured = currentArticle?.is_featured ?? false;

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
          <div 
            className={cn(
              "flex items-center gap-2 flex-shrink-0 overflow-hidden transition-all duration-300 ease-out",
              isCurrentFeatured ? "w-[70px]" : "w-0"
            )}
          >
            <span 
              className={cn(
                "text-xs font-medium uppercase tracking-wide whitespace-nowrap transition-opacity duration-300",
                isCurrentFeatured ? "opacity-100" : "opacity-0"
              )}
              style={{ color: '#93C852' }}
            >
              Featured
            </span>
          </div>
          
          <div className={cn(
            "flex-1 min-w-0 overflow-hidden transition-all duration-300 ease-out",
            !isCurrentFeatured && "-ml-3"
          )}>
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
                axis: "y",
              }}
              orientation="vertical"
              plugins={[
                Autoplay({
                  delay: 5000,
                  stopOnInteraction: true,
                  stopOnMouseEnter: true,
                }),
              ]}
              className="w-full h-6 overflow-hidden"
            >
              <CarouselContent className="!-mt-0 h-6">
                {articles.map((article) => {
                  const isExternal = article.article_type === 'external';
                  const sourceLabel = isExternal && article.source_publication 
                    ? article.source_publication 
                    : article.category;
                  
                  const content = (
                    <span className="flex items-center gap-2 text-sm">
                      {!article.is_featured && (
                        <Newspaper className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                      )}
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
                    <CarouselItem key={article.id} className="!pt-0 basis-full h-6 flex items-center">
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
