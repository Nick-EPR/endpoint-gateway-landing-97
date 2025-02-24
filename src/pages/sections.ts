
import { lazy, ComponentType } from 'react';

const withErrorBoundary = (Component: ComponentType) => Component;

// Lazy load sections with better error handling
export const Features = withErrorBoundary(lazy(() => 
  import("../components/sections/Features").then(module => ({ default: module.default }))
));

export const Products = withErrorBoundary(lazy(() => 
  import("../components/sections/Products").then(module => ({ default: module.default }))
));

export const TMobileBusiness = withErrorBoundary(lazy(() => 
  import("../components/sections/TMobileBusiness").then(module => ({ default: module.default }))
));

export const Partners = withErrorBoundary(lazy(() => 
  import("../components/sections/Partners").then(module => ({ default: module.default }))
));

export const Partnership = withErrorBoundary(lazy(() => 
  import("../components/sections/Partnership").then(module => ({ default: module.default }))
));

export const ROICalculator = withErrorBoundary(lazy(() => 
  import("../components/sections/ROICalculator").then(module => ({ default: module.default }))
));

export const Contact = withErrorBoundary(lazy(() => 
  import("../components/sections/Contact").then(module => ({ default: module.default }))
));

export const ComparisonTable = withErrorBoundary(lazy(() => 
  import("../components/sections/ComparisonTable").then(module => ({ default: module.default }))
));
