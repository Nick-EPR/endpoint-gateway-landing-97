
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MessageSquare } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

const contactFormSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Name can only contain letters, spaces, hyphens, and apostrophes"),
  company: z.string()
    .min(2, "Company name must be at least 2 characters")
    .max(200, "Company name must be less than 200 characters")
    .regex(/^[a-zA-Z0-9\s&.,-]+$/, "Company name contains invalid characters"),
  email: z.string()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be less than 5000 characters")
    .regex(/^[a-zA-Z0-9\s.,!?'"()-]+$/, "Message contains invalid characters")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Sanitize input data
      const sanitizedData = {
        name: data.name.trim(),
        company: data.company.trim(),
        email: data.email.toLowerCase().trim(),
        message: data.message.trim()
      };

      console.log('Submitting contact form with data:', sanitizedData);

      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert([
          {
            full_name: sanitizedData.name,
            company: sanitizedData.company,
            email: sanitizedData.email,
            message: sanitizedData.message
          }
        ]);

      if (dbError) {
        console.error('Database error:', dbError);
        throw dbError;
      }

      const { error: emailError } = await supabase.functions.invoke('send-contact-notification', {
        body: sanitizedData
      });

      if (emailError) {
        console.error('Email error:', emailError);
        // Don't throw email error as form was successfully submitted to database
        console.warn('Email notification failed but form was submitted successfully');
      }

      toast({
        title: "Thanks for reaching out!",
        description: "We'll get back to you as soon as possible.",
        variant: "default"
      });

      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 md:py-40 bg-neutral-light dark:bg-neutral-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll flex items-center justify-center gap-3 text-neutral-900 dark:text-white">
              <MessageSquare className="w-8 h-8 text-primary dark:text-primary-foreground" />
              Get in Touch
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 animate-on-scroll">
              Let's discuss how we can help transform your IT asset management
            </p>
          </div>

          <div className={cn(
            "glass-card p-8 rounded-xl",
            "bg-white/95 dark:bg-neutral-800/50",
            "backdrop-blur-sm",
            "border border-neutral-100 dark:border-neutral-700/50",
            "shadow-md hover:shadow-lg"
          )}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 dark:text-neutral-200">Full Name</label>
                  <input
                    {...register('name')}
                    type="text"
                    id="name"
                    maxLength={100}
                    className={cn(
                      "w-full px-4 py-2 rounded-lg",
                      "bg-white dark:bg-neutral-900",
                      "border",
                      errors.name ? 'border-red-500' : 'border-neutral-200 dark:border-neutral-700',
                      "focus:outline-none focus:border-primary dark:focus:border-primary",
                      "text-neutral-900 dark:text-white",
                      "placeholder-neutral-400 dark:placeholder-neutral-500"
                    )}
                    placeholder="Your name"
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2 dark:text-neutral-200">Company</label>
                  <input
                    {...register('company')}
                    type="text"
                    id="company"
                    maxLength={200}
                    className={cn(
                      "w-full px-4 py-2 rounded-lg",
                      "bg-white dark:bg-neutral-900",
                      "border",
                      errors.company ? 'border-red-500' : 'border-neutral-200 dark:border-neutral-700',
                      "focus:outline-none focus:border-primary dark:focus:border-primary",
                      "text-neutral-900 dark:text-white",
                      "placeholder-neutral-400 dark:placeholder-neutral-500"
                    )}
                    placeholder="Your company"
                    disabled={isSubmitting}
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-500">{errors.company.message}</p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 dark:text-neutral-200">Email</label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  maxLength={255}
                  className={cn(
                    "w-full px-4 py-2 rounded-lg",
                    "bg-white dark:bg-neutral-900",
                    "border",
                    errors.email ? 'border-red-500' : 'border-neutral-200 dark:border-neutral-700',
                    "focus:outline-none focus:border-primary dark:focus:border-primary",
                    "text-neutral-900 dark:text-white",
                    "placeholder-neutral-400 dark:placeholder-neutral-500"
                  )}
                  placeholder="your@email.com"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 dark:text-neutral-200">Message</label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={4}
                  maxLength={5000}
                  className={cn(
                    "w-full px-4 py-2 rounded-lg",
                    "bg-white dark:bg-neutral-900",
                    "border",
                    errors.message ? 'border-red-500' : 'border-neutral-200 dark:border-neutral-700',
                    "focus:outline-none focus:border-primary dark:focus:border-primary",
                    "text-neutral-900 dark:text-white",
                    "placeholder-neutral-400 dark:placeholder-neutral-500",
                    "resize-vertical"
                  )}
                  placeholder="Tell us about your needs"
                  disabled={isSubmitting}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>
              <div className="flex justify-center">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#93C851] text-white px-8 py-4 rounded-lg hover:bg-[#84b449] transition-colors duration-200 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Schedule a Consultation"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
