
import React from 'react';
import { Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const EmailContact = () => {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5" />
          Email Us
        </CardTitle>
        <CardDescription>
          Send us a message anytime
        </CardDescription>
      </CardHeader>
      <CardContent>
        <a 
          href="mailto:info@example.com" 
          className="text-primary hover:underline"
        >
          info@example.com
        </a>
      </CardContent>
    </Card>
  );
};

export default EmailContact;
