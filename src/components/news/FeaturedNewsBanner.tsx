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
import { Calendar } from "lucide-react";
import { format } from "date-fns";

const FeaturedNewsBanner = () => {
  const { data: featuredNews, isLoading } = useQuery({
    queryKey: ["featured-news"],
    queryFn: () => fetchNewsArticles({ featured: true, limit: 10 }),
    refetchInterval: 5 * 60 * 1000, // Refresh every 5 minutes
    staleTime: 2 * 60 * 1000, // Consider stale after 2 minutes
  });

  const articles = featuredNews?.data || [];

  // Don't render if no featured articles or still loading
  if (isLoading || articles.length === 0) {
    return null;
  }

  return (
    <div className="sticky top-[72px] w-full bg-background/95 backdrop-blur-sm border-b border-border z-40">
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
            {articles.map((article) => (
              <CarouselItem
                key={article.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Link
                  to={`/news/${article.slug}`}
                  className="block group hover:opacity-80 transition-opacity"
                >
                  <div className="flex gap-2 p-2 rounded-lg bg-card hover:bg-accent/50 transition-colors border border-border">
                    {article.featured_image_url && (
                      <div className="flex-shrink-0 w-12 h-12 rounded overflow-hidden">
                        <img
                          src={article.featured_image_url}
                          alt={article.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="secondary" className="text-xs">
                          {article.category}
                        </Badge>
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
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default FeaturedNewsBanner;
