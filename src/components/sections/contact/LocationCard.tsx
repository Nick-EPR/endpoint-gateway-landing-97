
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

interface LocationCardProps {
  name: string;
  address: string;
  phone: string;
  email: string;
}

const LocationCard = ({ name, address, phone, email }: LocationCardProps) => {
  return (
    <div className="p-4 bg-white/80 rounded-lg">
      <h3 className="font-semibold mb-2">{name}</h3>
      <div className="space-y-2 text-sm">
        <div className="flex items-start gap-2">
          <MapPin className="h-4 w-4 mt-1 shrink-0" />
          <span>{address}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 shrink-0" />
          <a href={`tel:${phone}`} className="hover:text-primary">{phone}</a>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 shrink-0" />
          <a href={`mailto:${email}`} className="hover:text-primary">{email}</a>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
