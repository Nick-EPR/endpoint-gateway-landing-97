

# Center RSVP Button

The button is inside a `max-w-4xl mx-auto text-center` container, so it should already be text-centered. However, the `inline-flex` on the event details card above it may be affecting layout. The fix is simple: ensure the button is on its own block-level line.

## Change in `src/pages/LegalWeek2026.tsx`

On line 150, update the Button to add `mx-auto` and wrap or ensure it displays as a block-level centered element:

```tsx
<Button size="lg" className="mt-6 gap-2 animate-fade-up mx-auto" style={{ animationDelay: "0.3s" }} onClick={() => setOpen(true)}>
```

The parent div already has `text-center`, but since Button renders as `inline-flex`, adding `mx-auto` alone won't work without also making it `flex`. The simplest fix: the parent `<div>` at line 126 already has `text-center`, so the button just needs to be a block-level element. Change to:

```tsx
<div className="mt-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
  <Button size="lg" className="gap-2" onClick={() => setOpen(true)}>
    <Mail className="w-5 h-5" />
    RSVP Now
  </Button>
</div>
```

This wraps the button in a div that inherits `text-center` from the parent, centering the inline button properly.

