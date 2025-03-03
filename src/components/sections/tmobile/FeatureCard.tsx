
import { Check, LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
}

const FeatureCard = ({ title, description, icon: Icon, benefits }: FeatureCardProps) => {
  return (
    <div className="glass-card p-6 md:p-8 rounded-xl hover:shadow-lg transition-shadow dark:bg-neutral-900/50">
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <Icon className="w-6 md:w-8 h-6 md:h-8 text-[#E30074] mr-3" />
          <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white">{title}</h3>
        </div>
        <p className="text-sm md:text-base text-neutral mb-6 dark:text-neutral-300">
          {description}
        </p>
        <div className="space-y-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <Check className="w-5 h-5 text-[#E30074] mt-1 mr-2 flex-shrink-0" />
              <p className="text-xs md:text-sm text-neutral dark:text-neutral-300">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
