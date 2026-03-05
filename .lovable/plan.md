

# Update RSVP Edge Function Sender Address

## Change
Update `supabase/functions/send-rsvp-notification/index.ts` line 62 to change the `from` address from the Resend sandbox to the verified domain:

```
from: "Lifetime EPR <onboarding@resend.dev>"
→
from: "Lifetime EPR <notify@lifetimeepr.app>"
```

Single-line change, then redeploy.

