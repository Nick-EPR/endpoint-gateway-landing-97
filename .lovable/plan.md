

# Add RSVP Button Below Hero Event Details

## Change
Add an RSVP button directly beneath the date/time/location card in the hero section (line ~148 in `src/pages/LegalWeek2026.tsx`).

## Implementation
Insert a `Button` after the closing `</div>` of the event details card (after line 148), styled to match the hero:

```tsx
<Button size="lg" className="mt-6 gap-2 animate-fade-up" style={{ animationDelay: "0.3s" }} onClick={() => setOpen(true)}>
  <Mail className="w-5 h-5" />
  RSVP Now
</Button>
```

This reuses the existing `setOpen` state and `Mail` icon already imported -- clicking it opens the same RSVP modal/drawer. Single line addition, no other changes needed.

