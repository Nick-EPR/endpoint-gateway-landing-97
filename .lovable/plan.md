

# Enable Mobile Autofill for RSVP Form

## Problem
Mobile browsers (especially Safari on iPhone) rely on `name` and `autoComplete` attributes to trigger autofill suggestions. The current inputs lack these attributes, so iOS won't offer autofill.

## Change

**`src/pages/LegalWeek2026.tsx`** — Add `name` and `autoComplete` attributes to the three input fields:

| Field | `name` | `autoComplete` |
|-------|--------|----------------|
| Name | `name` | `name` |
| Email | `email` | `email` |
| Company | `organization` | `organization` |

Three single-line additions to existing `<Input>` elements.

