
import { LucideIcon } from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
}
