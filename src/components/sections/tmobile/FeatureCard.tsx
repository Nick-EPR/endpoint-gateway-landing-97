
import { Check, LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
}

const FeatureCard = ({ title, description, icon: Icon, benefits }: FeatureCardProps) => {
  return (
    <div className="bg-card p-6 md:p-8 rounded-xl hover:shadow-lg transition-shadow">
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <Icon className="w-6 md:w-8 h-6 md:h-8 text-[#E30074] mr-3" />
          <h3 className="text-xl md:text-2xl font-semibold text-card-foreground">{title}</h3>
        </div>
        <p className="text-sm md:text-base text-muted-foreground mb-6">
          {description}
        </p>
        <div className="space-y-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <Check className="w-5 h-5 text-[#E30074] mt-1 mr-2 flex-shrink-0" />
              <p className="text-xs md:text-sm text-muted-foreground">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
