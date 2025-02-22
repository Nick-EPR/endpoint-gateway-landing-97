
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters")
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
      // Save to Supabase
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert([
          {
            full_name: data.name,
            company: data.company,
            email: data.email,
            message: data.message
          }
        ]);

      if (dbError) throw dbError;

      // Send email notification
      const { error: emailError } = await supabase.functions.invoke('send-contact-notification', {
        body: data
      });

      if (emailError) throw emailError;

      toast({
        title: "Thanks for reaching out!",
        description: "We'll get back to you as soon as possible.",
        variant: "default"
      });

      reset(); // Clear the form
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
    <section id="contact" className="section-padding bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
              Get in Touch
            </h2>
            <p className="text-lg text-neutral mb-8 animate-on-scroll">
              Let's discuss how we can help transform your IT asset management
            </p>
          </div>

          <div className="glass-card p-8 rounded-xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    {...register('name')}
                    type="text"
                    id="name"
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.name ? 'border-red-500' : 'border-neutral/20'
                    } focus:outline-none focus:border-primary`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                  <input
                    {...register('company')}
                    type="text"
                    id="company"
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.company ? 'border-red-500' : 'border-neutral/20'
                    } focus:outline-none focus:border-primary`}
                    placeholder="Your company"
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-500">{errors.company.message}</p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.email ? 'border-red-500' : 'border-neutral/20'
                  } focus:outline-none focus:border-primary`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={4}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.message ? 'border-red-500' : 'border-neutral/20'
                  } focus:outline-none focus:border-primary`}
                  placeholder="Tell us about your needs"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>
              <div className="flex justify-center">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
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
