
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Eye, ExternalLink } from "lucide-react";
import { NewsArticle } from "@/utils/newsUtils";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";

interface NewsCardProps {
  article: NewsArticle;
}

export const NewsCard = ({ article }: NewsCardProps) => {
  const formattedDate = format(new Date(article.published_at), "MMMM d, yyyy");
  const isExternal = article.article_type === 'external';
  
  const CardContent = (
    <>
      <div className="group bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border overflow-hidden h-full flex flex-col">
        {/* Featured Image */}
        {article.featured_image_url && (
          <div className="relative h-48 overflow-hidden">
            <img 
              src={article.featured_image_url} 
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {article.is_featured && (
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary text-white">Featured</Badge>
              </div>
            )}
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
          <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
            {article.title}
          </h3>
          
          {/* Excerpt */}
          <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
            {article.excerpt}
          </p>
          
          {/* Meta Information */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{article.author_name}</span>
            </div>
            {article.view_count > 0 && (
              <div className="flex items-center gap-1 ml-auto">
                <Eye className="w-4 h-4" />
                <span>{article.view_count}</span>
              </div>
            )}
          </div>
          
          {/* Read More Link */}
          <div className="flex items-center gap-2 text-primary font-medium mt-4 group-hover:gap-3 transition-all">
            {isExternal ? (
              <>
                Read on {article.source_publication || 'External Site'}
                <ExternalLink className="w-4 h-4" />
              </>
            ) : (
              <>
                Read More
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
  
  return isExternal ? (
    <a 
      href={article.external_url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block h-full"
    >
      {CardContent}
    </a>
  ) : (
    <Link to={`/news/${article.slug}`} className="block h-full">
      {CardContent}
    </Link>
  );
};
