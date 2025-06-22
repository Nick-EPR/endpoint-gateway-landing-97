
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const whitepaperFormSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Name can only contain letters, spaces, hyphens, and apostrophes"),
  email: z.string()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  company: z.string()
    .min(2, "Company name must be at least 2 characters")
    .max(200, "Company name must be less than 200 characters")
    .regex(/^[a-zA-Z0-9\s&.,-]+$/, "Company name contains invalid characters")
});

type WhitepaperFormData = z.infer<typeof whitepaperFormSchema>;

const DownloadForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<WhitepaperFormData>({
    resolver: zodResolver(whitepaperFormSchema)
  });

  const onSubmit = async (data: WhitepaperFormData) => {
    setIsLoading(true);

    try {
      // Sanitize input data
      const sanitizedData = {
        name: data.name.trim(),
        email: data.email.toLowerCase().trim(),
        company: data.company.trim()
      };

      console.log('Submitting whitepaper download with data:', sanitizedData);

      const { error: dbError } = await supabase
        .from('whitepaper_downloads')
        .insert({
          name: sanitizedData.name,
          email: sanitizedData.email,
          company: sanitizedData.company,
        });

      if (dbError) {
        console.error('Database error:', dbError);
        throw dbError;
      }

      const { error: emailError } = await supabase.functions.invoke('send-whitepaper', {
        body: sanitizedData
      });

      if (emailError) {
        console.error('Email error:', emailError);
        // Don't throw email error as form was successfully submitted to database
        console.warn('Email sending failed but download was recorded successfully');
      }

      toast({
        title: "Success!",
        description: "The whitepaper has been sent to your email.",
      });

      reset();

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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input
                {...register('name')}
                type="text"
                placeholder="Full Name"
                maxLength={100}
                disabled={isLoading}
                className={errors.name ? 'border-red-500' : ''}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div>
              <Input
                {...register('email')}
                type="email"
                placeholder="Work Email"
                maxLength={255}
                disabled={isLoading}
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div>
              <Input
                {...register('company')}
                type="text"
                placeholder="Company Name"
                maxLength={200}
                disabled={isLoading}
                className={errors.company ? 'border-red-500' : ''}
              />
              {errors.company && (
                <p className="mt-1 text-sm text-red-500">{errors.company.message}</p>
              )}
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
