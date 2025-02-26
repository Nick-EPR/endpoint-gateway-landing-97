
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const DownloadForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error: dbError } = await supabase
        .from('whitepaper_downloads')
        .insert({
          name: formData.name,
          email: formData.email,
          company: formData.company,
        });

      if (dbError) throw dbError;

      const { error: emailError } = await supabase.functions.invoke('send-whitepaper', {
        body: formData
      });

      if (emailError) throw emailError;

      toast({
        title: "Success!",
        description: "The whitepaper has been sent to your email.",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was a problem sending the whitepaper. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto bg-neutral-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-center mb-6">
            Download the Complete Whitepaper
          </h2>
          <p className="text-neutral-600 text-center mb-8">
            Get detailed insights into our security measures, compliance standards, and commitment to protecting your data.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                disabled={isLoading}
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Work Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                disabled={isLoading}
              />
            </div>
            <div>
              <Input
                type="text"
                placeholder="Company Name"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                required
                disabled={isLoading}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Download Whitepaper"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DownloadForm;
