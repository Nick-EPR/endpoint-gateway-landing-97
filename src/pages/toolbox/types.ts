
import { ReactNode } from "react";

export interface ToolboxFeature {
  icon: ReactNode;
  title: string;
  description: string;
  category: 'repair' | 'warehouse' | 'logistics';
}

export interface ToolboxStat {
  icon: ReactNode;
  value: string;
  label: string;
}

export type FeatureCategory = 'repair' | 'warehouse' | 'logistics';

export interface CategoryTab {
  value: FeatureCategory;
  label: string;
  icon: ReactNode;
  description: string;
}
