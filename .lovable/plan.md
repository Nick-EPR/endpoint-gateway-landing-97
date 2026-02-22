

# Add Background Image to Legal Week 2026 Hero

## Overview
Use the uploaded rooftop bar photo as the background image for the hero section on the Legal Week 2026 page.

## Changes

### 1. Copy the image into the project
- Copy `user-uploads://xob5s5quv4qsoc6osepx.jpg` to `public/images/refinery-rooftop.jpg` (public folder since it will be referenced as a URL in the component)

### 2. Update `src/pages/LegalWeek2026.tsx`
- Add an `<img>` tag inside the hero section's background container, similar to how the main Hero component does it
- The image will sit behind the existing gradient overlays with `object-cover` to fill the section
- Adjust the gradient overlay to ensure text remains readable over the photo (keep the `from-black/95 to-black/80` gradient)

The hero section's background div currently only has gradient divs. We will add:
```tsx
<img
  src="/images/refinery-rooftop.jpg"
  alt="Refinery Hotel Rooftop"
  className="w-full h-full object-cover"
/>
```

No other changes needed -- the existing dark gradient overlays will ensure text contrast.

