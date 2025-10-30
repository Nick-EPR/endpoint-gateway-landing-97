
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import { NewsHero } from "@/components/news/NewsHero";
import { NewsGrid } from "@/components/news/NewsGrid";
import { CategoryFilter } from "@/components/news/CategoryFilter";
import { fetchNewsArticles } from "@/utils/newsUtils";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ARTICLES_PER_PAGE = 9;

const News = () => {
  const [scrolled, setScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { pathname } = useLocation();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Handle scroll state for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch news articles
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["news", selectedCategory, currentPage],
    queryFn: () =>
      fetchNewsArticles({
        limit: ARTICLES_PER_PAGE,
        offset: (currentPage - 1) * ARTICLES_PER_PAGE,
        category: selectedCategory || undefined,
      }),
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
  });

  // Extract unique categories
  const categories = data?.success 
    ? [...new Set(data.data.map((article) => article.category))].sort()
    : [];

  const totalPages = data?.meta 
    ? Math.ceil(data.meta.total / ARTICLES_PER_PAGE)
    : 0;

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo({ top: 400, behavior: "smooth" });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo({ top: 400, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar scrolled={scrolled} onMouseEnter={() => {}} />
      <NewsHero />
      
      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          {categories.length > 0 && (
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategoryChange}
            />
          )}

          {/* Articles Grid */}
          <NewsGrid
            articles={data?.success ? data.data : []}
            isLoading={isLoading}
            isError={isError}
            onRetry={refetch}
          />

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-12">
              <Button
                variant="outline"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>
              <span className="text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                variant="outline"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="gap-2"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
