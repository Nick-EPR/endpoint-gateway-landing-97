
import { Mail, Phone } from "lucide-react";

interface LeadershipCardProps {
  name: string;
  title: string;
  image: string;
  bio: string;
  email?: string;
  phone?: string;
}

const LeadershipCard = ({ name, title, image, bio, email, phone }: LeadershipCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col h-full">
        <div className="relative h-[200px] w-full">
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
          <p className="text-primary font-medium mb-4">{title}</p>
          <p className="text-neutral mb-4">{bio}</p>
          {email && phone && name !== "Michael DeJoy" && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-neutral">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${email}`} className="hover:text-primary transition-colors">
                  {email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-neutral">
                <Phone className="w-4 h-4" />
                <a href={`tel:${phone}`} className="hover:text-primary transition-colors">
                  {phone}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadershipCard;
