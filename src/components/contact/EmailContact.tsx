
import { Mail } from "lucide-react";

const EmailContact = () => {
  return (
    <div className="p-6 bg-white/95 rounded-xl md:col-span-3">
      <Mail className="w-6 h-6 text-primary mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">Email Us</h3>
      <a 
        href="mailto:contact@lifetimeepr.com" 
        className="text-neutral hover:text-primary transition-colors"
      >
        contact@lifetimeepr.com
      </a>
    </div>
  );
};

export default EmailContact;
