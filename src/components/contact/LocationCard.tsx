
import { MapPin } from "lucide-react";

interface LocationCardProps {
  name: string;
  address: string;
  isComingSoon?: boolean;
}

const LocationCard = ({ name, address, isComingSoon = false }: LocationCardProps) => {
  return (
    <div className="p-6 bg-card/95 dark:bg-card/50 backdrop-blur-sm rounded-xl border border-border">
      <MapPin className={`w-6 h-6 ${isComingSoon ? 'text-muted-foreground' : 'text-primary'} mx-auto mb-4`} />
      <h3 className="text-xl font-semibold mb-2 text-foreground">{name}</h3>
      {isComingSoon ? (
        <p className="text-primary">{address}</p>
      ) : (
        <p className="text-muted-foreground">{address}</p>
      )}
    </div>
  );
};

export default LocationCard;
