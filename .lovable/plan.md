
# Move "Get in Touch" Form to Top of Contact Page

## Overview
Reorder the Contact page layout so the "Get in Touch" form appears immediately after the navbar, before the map hero section.

## Current Order
1. Navbar
2. ContactHero (map with office locations)
3. ContactForm ("Get in Touch")
4. Leadership Profiles
5. Values Section
6. Footer

## New Order
1. Navbar
2. ContactForm ("Get in Touch")
3. ContactHero (map with office locations)
4. Leadership Profiles
5. Values Section
6. Footer

## Changes Required

### File: `src/pages/Contact.tsx`
- Move `<ContactForm />` component above `<ContactHero />`
- Add top padding to ContactForm to account for navbar since it will now be the first section

### File: `src/components/sections/Contact.tsx`
- Adjust padding from `py-32 md:py-40` to include additional top padding (e.g., `pt-32 pb-16 md:pt-40 md:pb-24`) to ensure proper spacing below the fixed navbar
