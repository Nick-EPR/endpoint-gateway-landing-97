
import { ReactNode } from "react";

export interface ToolboxFeature {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ToolboxStat {
  icon: ReactNode;
  value: string;
  label: string;
}
