
import { Mail } from "lucide-react";

const EmailContact = () => {
  return (
    <div className="p-6 bg-card/95 dark:bg-card/50 backdrop-blur-sm rounded-xl md:col-span-3 border border-border">
      <Mail className="w-6 h-6 text-primary mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-foreground">Email Us</h3>
      <a 
        href="mailto:contact@lifetimeepr.com" 
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        contact@lifetimeepr.com
      </a>
    </div>
  );
};

export default EmailContact;
