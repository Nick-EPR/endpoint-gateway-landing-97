
import { MapPin } from "lucide-react";

interface LocationCardProps {
  name: string;
  address: string;
  isComingSoon?: boolean;
}

const LocationCard = ({ name, address, isComingSoon = false }: LocationCardProps) => {
  return (
    <div className="p-6 bg-white/95 dark:bg-neutral-900/50 rounded-xl">
      <MapPin className={`w-6 h-6 ${isComingSoon ? 'text-neutral-400' : 'text-primary'} mx-auto mb-4`} />
      <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">{name}</h3>
      {isComingSoon ? (
        <p className="text-primary">{address}</p>
      ) : (
        <p className="text-neutral dark:text-neutral-300">{address}</p>
      )}
    </div>
  );
};

export default LocationCard;
