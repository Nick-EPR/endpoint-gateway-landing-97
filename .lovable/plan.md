

# Update Contact Form Email Sender Address

## Change
Update `supabase/functions/send-contact-notification/index.ts` to change the `from` address from the Resend sandbox to the verified domain, matching the RSVP function:

```
from: "Lifetime EPR <onboarding@resend.dev>"
→
from: "Lifetime EPR <noreply@notify.lifetimeepr.app>"
```

Single-line change on line 83, then redeploy.

