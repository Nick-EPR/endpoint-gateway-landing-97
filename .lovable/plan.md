
# Update Contact Hero Section

## Overview
Simplify the ContactHero section by removing the envelope icon, changing the title, removing the description text, and removing the Email Us card.

## Changes Required

### File: `src/components/contact/ContactHero.tsx`

1. **Remove Mail icon import** - Remove `Mail` from lucide-react imports
2. **Remove EmailContact import** - No longer needed
3. **Remove Mail icon element** - Delete line 39: `<Mail className="w-12 h-12 text-primary mx-auto mb-6" />`
4. **Change heading text** - Change "Contact Us" to "Our Locations"
5. **Remove description paragraph** - Delete the `<p>` element with "Get in touch with our team..."
6. **Remove EmailContact component** - Delete `<EmailContact />` from the grid
7. **Update grid layout** - Change from `md:grid-cols-3` to keep the 3 location cards properly laid out (since we're removing the 4th card that spanned all 3 columns)

## Technical Details

The grid currently has:
- 3 LocationCard components (East Coast, West Coast, Jacksonville)
- 1 EmailContact component with `md:col-span-3`

After removing EmailContact, the 3 location cards will display in a row on medium+ screens, which is the desired layout.
