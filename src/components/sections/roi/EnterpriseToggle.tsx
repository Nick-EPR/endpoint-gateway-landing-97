
import { Building2 } from 'lucide-react';
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface EnterpriseToggleProps {
  isEnterprise: boolean;
  onEnterpriseChange: (checked: boolean) => void;
  disabled?: boolean;
}

export const EnterpriseToggle = ({ isEnterprise, onEnterpriseChange, disabled }: EnterpriseToggleProps) => {
  return (
    <div className="flex items-center space-x-3 bg-white/50 p-2 rounded-lg">
      <Building2 className={`w-5 h-5 ${!isEnterprise ? 'text-primary' : 'text-neutral'}`} />
      <Switch 
        id="enterprise-toggle" 
        checked={isEnterprise} 
        onCheckedChange={onEnterpriseChange} 
        disabled={disabled} 
        className="data-[state=checked]:bg-primary" 
      />
      <Label htmlFor="enterprise-toggle" className="text-sm font-medium ml-2">
        Enterprise
      </Label>
    </div>
  );
};
