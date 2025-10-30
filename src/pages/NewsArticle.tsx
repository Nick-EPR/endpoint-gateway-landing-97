
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import { NewsArticleContent } from "@/components/news/NewsArticleContent";
import { fetchArticleBySlug } from "@/utils/newsUtils";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const NewsArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { data: article, isLoading, isError } = useQuery({
    queryKey: ["article", slug],
    queryFn: () => fetchArticleBySlug(slug!),
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar scrolled={scrolled} onMouseEnter={() => {}} />
        <LoadingSpinner />
        <Footer />
      </div>
    );
  }

  if (isError || !article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar scrolled={scrolled} onMouseEnter={() => {}} />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold mb-4 text-foreground">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Button onClick={() => navigate("/news")} variant="outline" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to News
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{article.seo_title || article.title} | Lifetime EPR</title>
        <meta name="description" content={article.seo_description || article.excerpt} />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar scrolled={scrolled} onMouseEnter={() => {}} />
        
        <section className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container mx-auto px-4">
            <Link to="/news">
              <Button variant="ghost" className="gap-2 mb-8 -ml-2">
                <ArrowLeft className="w-4 h-4" />
                Back to News
              </Button>
            </Link>
            
            <NewsArticleContent article={article} />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default NewsArticle;
