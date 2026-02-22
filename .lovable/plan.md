

# Legal Week 2026 Page Content

## Overview
Replace the placeholder "Coming Soon" page with full event content based on the uploaded invitation image. The image is a reference design -- we will recreate the content in code, not embed the image.

## Event Details (from the image)
- **Event**: Lifetime EPR Happy Hour
- **Tagline**: Serving Up the Always Connected Solution
- **Date**: Tuesday, March 10th
- **Time**: 5:30 PM - 8:30 PM
- **Venue**: Refinery Hotel, New York City
- **Description**: Discover how Lifetime EPR's PCaaS delivers the 5G Connected Laptop solution for the mobile-first legal workforce
- **Features**: 24/7 Support, Advanced Exchange, Predictable Monthly Cost, Remote Lock/Data Wipe, Secure Connectivity, Certified Data Destruction
- **CTA**: Cocktails, Conversations, & Cost Savings | RSVP: sales@lifetimeepr.com
- **Partner**: T-Mobile for Business Premiere Partner

## Changes

### File: `src/pages/LegalWeek2026.tsx`
Complete rewrite with the following sections:

1. **Hero Section** -- Dark gradient background with:
   - "LEGALWEEK 2026" label
   - "Lifetime EPR Happy Hour" heading
   - "Serving Up the Always Connected Solution" subtitle
   - Event date/time/location details in a styled card layout

2. **Description Section** -- White/light background:
   - Main copy about PCaaS and 5G Connected Laptop for legal workforce
   - Two-column grid of 6 feature highlights with icons (Clock, RefreshCw, DollarSign, Lock, ShieldCheck, Trash2 from lucide-react)

3. **CTA Section** -- Styled bottom section:
   - "Cocktails, Conversations, & Cost Savings" tagline
   - RSVP call-to-action with mailto link to sales@lifetimeepr.com
   - Partner logos: Lifetime EPR logo (existing asset) and T-Mobile Premiere Partner badge (existing asset at `/lovable-uploads/tmo-premiere-dark.png`)

### Imports needed
- Additional lucide-react icons: `MapPin`, `Clock`, `DollarSign`, `RefreshCw`, `Lock`, `ShieldCheck`, `Trash2`, `Mail`, `Wifi`
- `Link` from react-router-dom (for internal navigation if needed)

## Technical Details
- Follows existing page patterns (Navbar, Footer, NavigationProgress)
- Uses existing Tailwind classes and color scheme (primary green, dark backgrounds)
- Responsive grid layouts for features (1 col mobile, 2 col desktop)
- Fade-up animations consistent with other pages
- No new dependencies required

