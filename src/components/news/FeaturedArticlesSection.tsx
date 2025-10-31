import { Link } from "react-router-dom";
import { Calendar, User, ExternalLink, Sparkles } from "lucide-react";
import { NewsArticle } from "@/utils/newsUtils";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";

interface FeaturedArticlesSectionProps {
  articles: NewsArticle[];
}

export const FeaturedArticlesSection = ({ articles }: FeaturedArticlesSectionProps) => {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="py-12 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-8">
          <Sparkles className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">Featured Articles</h2>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => {
            const formattedDate = format(new Date(article.published_at), "MMMM d, yyyy");
            const isExternal = article.article_type === 'external';
            
            const CardContent = (
              <div className="group bg-card rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-primary/20 hover:border-primary/40 overflow-hidden h-full flex flex-col">
                {/* Featured Image */}
                {article.featured_image_url && (
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={article.featured_image_url} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-primary-foreground shadow-lg">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  </div>
                )}
                
                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Category and Source Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="w-fit capitalize">
                      {article.category}
                    </Badge>
                    {isExternal && article.source_publication && (
                      <Badge variant="secondary" className="w-fit text-xs gap-1">
                        <ExternalLink className="w-3 h-3" />
                        {article.source_publication}
                      </Badge>
                    )}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-muted-foreground mb-4 line-clamp-2 flex-1">
                    {article.excerpt}
                  </p>
                  
                  {/* Meta Information */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-4 mt-auto">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formattedDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span className="truncate">{article.author_name}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
            
            return isExternal ? (
              <a 
                key={article.id}
                href={article.external_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full"
              >
                {CardContent}
              </a>
            ) : (
              <Link 
                key={article.id}
                to={`/news/${article.slug}`} 
                className="block h-full"
              >
                {CardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
