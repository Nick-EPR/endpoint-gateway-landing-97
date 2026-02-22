

# RSVP Modal with Email Collection

## Overview
Replace the mailto link on the "RSVP Now" button with a responsive modal/drawer that collects the user's name, email, and company, then forwards the RSVP to sales@lifetimeepr.com via a new edge function.

## Changes

### 1. New Edge Function: `supabase/functions/send-rsvp-notification/index.ts`
- Accepts `name`, `email`, and `company` fields
- Validates and sanitizes input (similar pattern to existing `send-contact-notification`)
- Sends a formatted email to `sales@lifetimeepr.com` via Resend (RESEND_API_KEY secret already exists)
- Subject: "LegalWeek 2026 RSVP from [Name]"
- HTML body with name, email, company details

### 2. Update `supabase/config.toml`
- Add `[functions.send-rsvp-notification]` with `verify_jwt = false`

### 3. Update `src/pages/LegalWeek2026.tsx`
- Add state for modal open/close, form fields, loading, and success
- Use `Drawer` (from vaul, already installed) on mobile and `Dialog` on desktop for best UX -- leverage the existing `use-mobile` hook to detect screen size
- Form fields: Name, Email, Company (all required)
- Client-side validation with basic checks before submission
- On submit, call `supabase.functions.invoke("send-rsvp-notification", { body: { name, email, company } })`
- Show success state with a checkmark and "You're on the list!" message
- Replace the current `<a href="mailto:...">` button with an `onClick` handler that opens the modal
- Add imports: `Dialog`, `DialogContent`, `DialogHeader`, `DialogTitle`, `DialogDescription` from UI components; `Drawer`, `DrawerContent`, `DrawerHeader`, `DrawerTitle`, `DrawerDescription` from UI components; `Input`, `Label` from UI; `useIsMobile` hook; `supabase` client; `useState`; `CheckCircle` icon

### Technical Details

**Edge function email template:**
```
Subject: LegalWeek 2026 RSVP from {name}
Body:
- Name
- Email  
- Company
- Timestamp
- Note that it's for the March 10th Happy Hour at Refinery Hotel
```

**Mobile UX:** The Drawer component (vaul) slides up from the bottom on mobile, which is more natural for touch devices. On desktop, a centered Dialog is used.

**Form validation:**
- Name: required, max 100 chars, letters/spaces/hyphens only
- Email: required, valid email format
- Company: required, max 200 chars

