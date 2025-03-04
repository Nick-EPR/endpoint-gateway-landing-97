
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PricingFAQ = () => {
  const faqs = [
    {
      question: "How do I know which plan is right for my organization?",
      answer: "The best plan depends on your organization's size and needs. The Essentials plan works well for small businesses with basic IT asset management needs. The Professional plan is ideal for growing organizations requiring more advanced features. For large enterprises with complex requirements, our Enterprise plan offers customized solutions."
    },
    {
      question: "Can I upgrade or downgrade my plan later?",
      answer: "Yes, you can easily upgrade or downgrade your plan at any time. When upgrading, you'll immediately gain access to additional features. If you downgrade, the changes will take effect at the start of your next billing cycle."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial of our Professional plan so you can experience all the features before making a commitment. No credit card is required to start your trial."
    },
    {
      question: "Do you offer discounts for annual payments?",
      answer: "Yes, we offer a 15% discount when you choose annual billing instead of monthly billing. This discount is applied to all plans."
    },
    {
      question: "What kind of support is included with each plan?",
      answer: "The Essentials plan includes email support during business hours. The Professional plan adds priority support with faster response times. Enterprise plans include 24/7 support and a dedicated account manager."
    },
    {
      question: "Are there any setup fees?",
      answer: "There are no setup fees for our Essentials and Professional plans. For Enterprise customers, setup fees may apply depending on the complexity of your implementation and customization needs."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Frequently Asked Questions</h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
          Everything you need to know about our pricing and plans
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium dark:text-white">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-neutral-600 dark:text-neutral-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default PricingFAQ;
