
# Add "Get Started" Button to FeaturesSection

## Overview
Add a centered "Get Started" call-to-action button at the bottom of the FeaturesSection on the Core Platform page.

## Change Required

### File: `src/pages/coreplatform/FeaturesSection.tsx`

Add a new div after the capabilities grid (after line 163, before the closing `</div>` of the container) containing:
- A centered container with appropriate top margin
- A "Get Started" button using the existing Button component
- Link to the contact page using react-router-dom's Link component
- Include an arrow icon for visual interest
- Apply the same fade-in animation pattern used in other elements

## Code Addition

```tsx
{/* CTA Button */}
<div className={`mt-16 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "1300ms" }}>
  <Button asChild size="lg" className="gap-2">
    <Link to="/contact">
      Get Started
      <ArrowRight className="w-4 h-4" />
    </Link>
  </Button>
</div>
```

## Additional Changes
- Import `Button` from `@/components/ui/button`
- Import `Link` from `react-router-dom`
- Import `ArrowRight` from `lucide-react`
