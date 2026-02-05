

# Reduce "Our Locations" Map Section Height

## Overview
Make the map background section shorter by changing from full-screen height to a more compact layout.

## Current State
The section uses `min-h-screen` which makes it take up the full viewport height.

## Change Required

### File: `src/components/sections/contact/ContactHero.tsx`
- Change `min-h-screen` to a fixed height like `min-h-[70vh]` or `min-h-[600px]` to reduce the section height while still providing enough space for the map and location cards

## Technical Details
- Line 17: Change `className="relative min-h-screen bg-background overflow-hidden"` to `className="relative min-h-[70vh] bg-background overflow-hidden"`
- This reduces the section from 100vh to 70vh, making it noticeably shorter while maintaining the visual impact of the map background

