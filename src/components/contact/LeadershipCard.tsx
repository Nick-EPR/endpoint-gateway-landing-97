
import { Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LeadershipCardProps {
  name: string;
  title: string;
  image: string;
  bio: string;
  email?: string;
  phone?: string;
  linkedin?: string;
}

const LeadershipCard = ({ name, title, image, bio, email, phone, linkedin }: LeadershipCardProps) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-border">
      <div className="flex flex-col h-full">
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0">
            <img 
              src={image}
              alt={name}
              className="w-24 h-24 object-cover rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2 text-foreground">{name}</h3>
            <p className="text-primary font-medium">{title}</p>
          </div>
        </div>
        <p className="text-muted-foreground mb-4">{bio}</p>
        <div className="space-y-2">
          {email && phone && name !== "Michael DeJoy" && (
            <>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${email}`} className="hover:text-primary transition-colors">
                  {email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <a href={`tel:${phone}`} className="hover:text-primary transition-colors">
                  {phone}
                </a>
              </div>
            </>
          )}
          {linkedin && (
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center gap-2 mt-2"
              onClick={() => window.open(linkedin, '_blank')}
            >
              <Linkedin className="w-4 h-4" />
              Connect on LinkedIn
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadershipCard;
