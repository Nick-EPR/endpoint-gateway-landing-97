
import { lazy } from 'react';

// Lazy load non-critical components
export const Features = lazy(() => import("../components/sections/Features"));
export const Products = lazy(() => import("../components/sections/Products"));
export const TMobileBusiness = lazy(() => import("../components/sections/TMobileBusiness"));
export const Partners = lazy(() => import("../components/sections/Partners"));
export const Partnership = lazy(() => import("../components/sections/Partnership"));
export const ROICalculator = lazy(() => import("../components/sections/ROICalculator"));
export const Contact = lazy(() => import("../components/sections/Contact"));
export const ComparisonTable = lazy(() => import("../components/sections/ComparisonTable"));
