

# Redirect /omnia to External URL

## Overview
Add a redirect so that visiting `/omnia` sends the user to `https://lifetimeepr.app/pcaas/omnia`.

## Change Required

### File: `src/App.tsx`
- Add a new route for `/omnia` that performs an external redirect
- Use a small helper component that calls `window.location.replace()` on mount to navigate to the external URL
- Place the route before the catch-all `*` route

### Implementation
Create an inline redirect component directly in `App.tsx`:

```tsx
const ExternalRedirect = ({ to }: { to: string }) => {
  window.location.replace(to);
  return null;
};
```

Then add the route:
```tsx
<Route path="/omnia" element={<ExternalRedirect to="https://lifetimeepr.app/pcaas/omnia" />} />
```

No new files needed -- just a small addition to the existing routing setup.

