
import { MapPin } from "lucide-react";

interface LocationCardProps {
  name: string;
  address: string;
  isComingSoon?: boolean;
}

const LocationCard = ({ name, address, isComingSoon = false }: LocationCardProps) => {
  return (
    <div className="p-6 bg-white/95 rounded-xl">
      <MapPin className={`w-6 h-6 ${isComingSoon ? 'text-neutral-400' : 'text-primary'} mx-auto mb-4`} />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      {isComingSoon ? (
        <p className="text-primary font-medium">{address}</p>
      ) : (
        <p className="text-neutral">{address}</p>
      )}
    </div>
  );
};

export default LocationCard;
