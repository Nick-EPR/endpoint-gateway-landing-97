
import { NewsArticle } from "@/utils/newsUtils";
import { Calendar, User, Eye, Tag } from "lucide-react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import ReactMarkdown from "react-markdown";

interface NewsArticleContentProps {
  article: NewsArticle;
}

export const NewsArticleContent = ({ article }: NewsArticleContentProps) => {
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

      {/* Category Badge */}
      <Badge variant="outline" className="mb-4 capitalize">
        {article.category}
      </Badge>

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

      {/* Article Content (Markdown) */}
      <div className="prose prose-lg dark:prose-invert max-w-none mb-8 prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground prose-a:text-primary">
        <ReactMarkdown>{article.content}</ReactMarkdown>
      </div>

      {/* Tags */}
      {article.tags.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap pt-8 border-t border-border">
          <Tag className="w-5 h-5 text-muted-foreground" />
          {article.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="capitalize">
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </article>
  );
};
