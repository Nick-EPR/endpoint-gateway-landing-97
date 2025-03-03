
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { InfoCircle } from "lucide-react";

interface EnterpriseToggleProps {
  isEnterprise: boolean;
  onEnterpriseChange: (checked: boolean) => void;
  disabled?: boolean;
}

export const EnterpriseToggle = ({ isEnterprise, onEnterpriseChange, disabled }: EnterpriseToggleProps) => {
  return (
    <div className="flex items-center space-x-3 p-2 rounded-lg bg-indigo-50/50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/50">
      <div className="flex items-center">
        <InfoCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400 mr-2" />
        <Label htmlFor="enterprise-mode" className="text-sm font-medium cursor-pointer select-none text-indigo-700 dark:text-indigo-300">
          Enterprise Mode {isEnterprise ? "(Active)" : "(Inactive)"}
        </Label>
      </div>
      <Switch
        id="enterprise-mode"
        checked={isEnterprise}
        onCheckedChange={onEnterpriseChange}
        disabled={disabled}
        className="data-[state=checked]:bg-indigo-600"
      />
    </div>
  );
};

export default EnterpriseToggle;
