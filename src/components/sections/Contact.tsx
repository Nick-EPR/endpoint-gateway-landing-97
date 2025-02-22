import React from 'react';
import { Building, Mail, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import LocationMap from '../LocationMap';
import EmailContact from './contact/EmailContact';
import LocationCard from './contact/LocationCard';
import LeadershipCard from './contact/LeadershipCard';
import ContactHero from './contact/ContactHero';
const locations = [{
  name: 'Headquarters',
  address: '123 Main Street, Anytown, USA',
  phone: '+1 (555) 123-4567',
  email: 'info@example.com'
}, {
  name: 'Branch Office',
  address: '456 Elm Avenue, Anytown, USA',
  phone: '+1 (555) 234-5678',
  email: 'sales@example.com'
}];
const Contact = () => {
  return;
};
export default Contact;