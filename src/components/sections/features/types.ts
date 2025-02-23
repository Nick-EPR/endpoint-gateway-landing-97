
import { LucideIcon } from "lucide-react";

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: {
    to: string;
    text: string;
  };
  isHighlighted?: boolean;
  comingSoon?: boolean;
  keywords?: string[];
}

export interface DetailedFeature {
  category: string;
  features: string[];
}
