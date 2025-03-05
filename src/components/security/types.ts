
import { ReactNode } from "react";

export interface Certification {
  name: string;
  logo: string;
  alt: string;
}

export interface SecurityFeature {
  icon: ReactNode;
  title: string;
  description: string;
  certification?: Certification;
}
