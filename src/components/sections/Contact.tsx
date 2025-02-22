
import React from 'react';
import { Building, Mail, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LocationMap from '../LocationMap';
import EmailContact from './contact/EmailContact';
import LocationCard from './contact/LocationCard';
import LeadershipCard from './contact/LeadershipCard';
import ContactHero from './contact/ContactHero';

const locations = [
  {
    name: 'Headquarters',
    address: '123 Main Street, Anytown, USA',
    phone: '+1 (555) 123-4567',
    email: 'info@example.com',
  },
  {
    name: 'Branch Office',
    address: '456 Elm Avenue, Anytown, USA',
    phone: '+1 (555) 234-5678',
    email: 'sales@example.com',
  },
];

const Contact = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                Visit Our Office
              </CardTitle>
              <CardDescription>
                Come say hello at our office HQ
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {locations.map((location, index) => (
                <LocationCard key={index} {...location} />
              ))}
            </CardContent>
          </Card>

          <EmailContact />
        </div>

        <div className="mb-12">
          <LocationMap />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <LeadershipCard
            name="John Smith"
            title="CEO"
            email="john@example.com"
            phone="+1 (555) 123-4567"
          />
          <LeadershipCard
            name="Jane Doe"
            title="COO"
            email="jane@example.com"
            phone="+1 (555) 234-5678"
          />
          <LeadershipCard
            name="Mike Johnson"
            title="CTO"
            email="mike@example.com"
            phone="+1 (555) 345-6789"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
