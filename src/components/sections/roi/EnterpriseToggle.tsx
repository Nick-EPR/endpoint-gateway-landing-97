
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface EnterpriseToggleProps {
  isEnterprise: boolean;
  onEnterpriseChange: (checked: boolean) => void;
  disabled?: boolean;
}

export const EnterpriseToggle = ({ isEnterprise, onEnterpriseChange, disabled }: EnterpriseToggleProps) => {
  return (
    <div className="flex items-center space-x-3 p-2 rounded-lg">
      <Label htmlFor="enterprise-mode" className="text-sm font-medium cursor-pointer select-none text-neutral-600 dark:text-neutral-300">
        Enterprise Mode
      </Label>
      <Switch
        id="enterprise-mode"
        checked={isEnterprise}
        onCheckedChange={onEnterpriseChange}
        disabled={disabled}
      />
    </div>
  );
};

export default EnterpriseToggle;
