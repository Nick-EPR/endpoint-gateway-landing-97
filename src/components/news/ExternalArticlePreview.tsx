import { NewsArticle } from "@/utils/newsUtils";
import { Calendar, User, Eye, ExternalLink } from "lucide-react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ExternalArticlePreviewProps {
  article: NewsArticle;
}

export const ExternalArticlePreview = ({ article }: ExternalArticlePreviewProps) => {
  const formattedDate = format(new Date(article.published_at), "MMMM d, yyyy");

  return (
    <article className="max-w-4xl mx-auto">
      {/* Featured Image */}
      {article.featured_image_url && (
        <div className="relative h-96 rounded-xl overflow-hidden mb-8">
          <img
            src={article.featured_image_url}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Category and Source Badge */}
      <div className="flex items-center gap-2 mb-4">
        <Badge variant="outline" className="capitalize">
          {article.category}
        </Badge>
        {article.source_publication && (
          <Badge variant="secondary" className="gap-1">
            <ExternalLink className="w-3 h-3" />
            {article.source_publication}
          </Badge>
        )}
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
        {article.title}
      </h1>

      {/* Meta Information */}
      <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-border pb-6 mb-8">
        <div className="flex items-center gap-2">
          <User className="w-5 h-5" />
          <div>
            <div className="font-medium text-foreground">{article.author_name}</div>
            <div className="text-xs">{article.author_title}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          <span>{formattedDate}</span>
        </div>
        {article.view_count > 0 && (
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5" />
            <span>{article.view_count} views</span>
          </div>
        )}
      </div>

      {/* Excerpt */}
      <div className="bg-muted/50 border border-border rounded-lg p-8 mb-8">
        <p className="text-lg text-foreground leading-relaxed mb-6">
          {article.excerpt}
        </p>
        
        {/* CTA to External Article */}
        <a 
          href={article.external_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button size="lg" className="gap-2">
            Read Full Article on {article.source_publication || 'External Site'}
            <ExternalLink className="w-4 h-4" />
          </Button>
        </a>
      </div>

      {/* External Article Notice */}
      <div className="bg-accent/50 border border-border rounded-lg p-4 text-sm text-muted-foreground">
        <p>
          This article was originally published on {article.source_publication || 'an external site'}. 
          Click the button above to read the full article on their website.
        </p>
      </div>
    </article>
  );
};
