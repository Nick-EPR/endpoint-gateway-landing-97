
import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const BenefitCard = ({ title, description, icon: Icon }: BenefitCardProps) => {
  return (
    <div className="p-4 md:p-6 glass-card rounded-xl hover:shadow-lg transition-shadow dark:bg-neutral-900/50">
      <div className="mb-4 flex justify-center">
        <Icon className="w-10 md:w-12 h-10 md:h-12 text-[#E30074]" />
      </div>
      <h4 className="text-lg md:text-xl font-semibold mb-3 text-center text-neutral-900 dark:text-white">{title}</h4>
      <p className="text-xs md:text-sm text-neutral dark:text-neutral-300 text-center">
        {description}
      </p>
    </div>
  );
};

export default BenefitCard;
