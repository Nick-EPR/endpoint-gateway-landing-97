
import React from 'react';
import { Mail } from 'lucide-react';

const ContactHero = () => {
  return (
    <div className="text-center mb-12">
      <Mail className="h-12 w-12 mx-auto mb-4 text-primary" />
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-muted-foreground">
        We'd love to hear from you. Get in touch with our team.
      </p>
    </div>
  );
};

export default ContactHero;
