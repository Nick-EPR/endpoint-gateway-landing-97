

# Create /legal-week-2026 Page

## Overview
Add a new "Legal Week 2026" page with a simple "Coming Soon" message, following existing page patterns.

## Changes Required

### 1. New File: `src/pages/LegalWeek2026.tsx`
- Simple page with Navbar, a centered "Coming Soon" message, and Footer
- Follow the same layout pattern as other pages (e.g., Terms, Privacy)
- Include a heading "Legal Week 2026" and a "Coming Soon" subtext
- Dark hero-style section with gradient background for visual consistency

### 2. Update: `src/App.tsx`
- Import the new `LegalWeek2026` component
- Add route: `<Route path="/legal-week-2026" element={<LegalWeek2026 />} />`

## Technical Details

The page component will:
- Import and render Navbar (with `scrolled={true}` for white background) and Footer
- Display a centered section with the title and coming soon message
- Use existing Tailwind classes consistent with other pages
- Include NavigationProgress for consistency

