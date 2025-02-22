
import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface LeadershipCardProps {
  name: string;
  title: string;
  email: string;
  phone: string;
}

const LeadershipCard = ({ name, title, email, phone }: LeadershipCardProps) => {
  return (
    <Card className="glass-card">
      <CardContent className="pt-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-primary mb-4">{title}</p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <a href={`mailto:${email}`} className="hover:text-primary">{email}</a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <a href={`tel:${phone}`} className="hover:text-primary">{phone}</a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadershipCard;
