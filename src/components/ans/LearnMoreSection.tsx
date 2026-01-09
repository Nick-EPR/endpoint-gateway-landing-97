import { ExternalLink, Heart, Stethoscope, Wifi } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "Boston Children's Hospital Case Study",
    description: "Discover how Boston Children's Hospital transformed patient care with T-Mobile's advanced network solutions.",
    source: "T-Mobile Business",
    url: "https://www.t-mobile.com/business/enterprise/boston-childrens-hospital",
    icon: Heart,
    thumbnail: "/lovable-uploads/boston-childrens.webp",
  },
  {
    title: "Healthcare Industry Solutions",
    description: "Explore T-Mobile's comprehensive healthcare solutions designed for modern medical facilities.",
    source: "T-Mobile Business",
    url: "https://www.t-mobile.com/business/industry-solutions/healthcare",
    icon: Stethoscope,
    thumbnail: "/lovable-uploads/t-mobile-emblem.webp",
  },
  {
    title: "5G Investment Boosts Connections Beyond Hospital",
    description: "Learn how 5G technology is revolutionizing healthcare connectivity and patient outcomes.",
    source: "HFM Magazine",
    url: "https://www.hfmmagazine.com/articles/4950-5g-investment-boosts-connections-beyond-hospital",
    icon: Wifi,
    thumbnail: "/images/5g-cell-tower.jpg",
  },
];

const LearnMoreSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-primary/10 dark:bg-primary/20 text-primary rounded-full px-6 py-3 mb-6">
            <ExternalLink className="w-8 h-8" />
            <span className="text-xl font-medium">Learn More</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Related Resources
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore additional case studies and insights on healthcare connectivity solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {articles.map((article, index) => {
            const Icon = article.icon;
            return (
              <a
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={article.thumbnail} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {article.source}
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {article.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    Read Article
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LearnMoreSection;
