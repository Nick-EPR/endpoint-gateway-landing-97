

# Fix Mobile RSVP Form Interaction Issues

## Problem
The Vaul `Drawer` component on mobile interferes with form input interactions. The drawer's drag-to-dismiss gesture conflicts with tapping/focusing on input fields, making it difficult or impossible to fill out the form on iPhone.

## Solution
Replace the mobile Drawer with a full-screen Dialog on mobile. The Dialog component doesn't have drag gestures that conflict with form inputs, providing a reliable interaction experience.

## Changes

**`src/pages/LegalWeek2026.tsx`**
- Remove the conditional `isMobile` rendering that switches between Drawer and Dialog
- Use Dialog for all screen sizes
- On mobile, make the Dialog content full-width with proper padding for comfortable touch interactions
- Remove the `useIsMobile` hook import and Drawer-related imports since they'll no longer be needed

This is a straightforward change: remove the Drawer branch entirely and keep only the Dialog, which works reliably on all devices.

