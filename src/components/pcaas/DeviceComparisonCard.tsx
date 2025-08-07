import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X, TrendingUp, Plus, Laptop, ChevronDown, ChevronUp } from "lucide-react";

interface DeviceSpec {
  category: string;
  essential: string | boolean;
  professional: string | boolean;
  hasUpgrade?: boolean;
  isNew?: boolean;
}

export const DeviceComparisonCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const deviceSpecs: DeviceSpec[] = [
    {
      category: "Model",
      essential: "Lenovo ThinkPad T14 Gen 6 R5 Pro 340",
      professional: "Lenovo ThinkPad T14 Gen 6 R7 Pro 350"
    },
    {
      category: "Preloaded Operating System",
      essential: "Windows 11 Pro",
      professional: "Windows 11 Pro"
    },
    {
      category: "Processor",
      essential: "AMD Ryzen AI 5 PRO 340",
      professional: "AMD Ryzen AI 7 PRO 350",
      hasUpgrade: true
    },
    {
      category: "Color",
      essential: "Black",
      professional: "Black"
    },
    {
      category: "Human Presence Detection",
      essential: false,
      professional: true,
      isNew: true
    },
    {
      category: "Display Size",
      essential: "14\"",
      professional: "14\""
    },
    {
      category: "Anti-Glare",
      essential: false,
      professional: true,
      isNew: true
    },
    {
      category: "Touchscreen",
      essential: false,
      professional: true,
      isNew: true
    },
    {
      category: "Camera",
      essential: "5MP RGB+IR with Microphone",
      professional: "5MP RGB+IR with Microphone"
    },
    {
      category: "Fingerprint Reader",
      essential: true,
      professional: true
    },
    {
      category: "Memory",
      essential: "16GB DDR5 5600",
      professional: "32GB DDR5 5600",
      hasUpgrade: true
    },
    {
      category: "Storage",
      essential: "512GB SSD M.2",
      professional: "512GB SSD M.2"
    },
    {
      category: "Battery",
      essential: "4 Cell 57 WH Li-Ion",
      professional: "4 Cell 57 WH Li-Polymer",
      hasUpgrade: true
    }
  ];

  // Basic specs to show when collapsed (first 3 items)
  const basicSpecs = deviceSpecs.slice(0, 3);
  const detailedSpecs = deviceSpecs.slice(3);

  const renderSpecValue = (value: string | boolean, isEssential: boolean = true, spec?: DeviceSpec) => {
    if (value === false) {
      return (
        <div className="flex items-center justify-center">
          <X className="w-4 h-4 text-red-500" />
        </div>
      );
    }
    if (value === true) {
      return (
        <div className="flex items-center justify-center">
          <Check className="w-4 h-4 text-green-500" />
        </div>
      );
    }

    // Show indicators for Professional tier
    if (!isEssential && spec) {
      // Handle memory upgrade
      if (spec.category === "Memory" && spec.hasUpgrade) {
        return (
          <div className="text-sm text-neutral-700 dark:text-neutral-300">
            <span className="text-green-600 dark:text-green-400 font-semibold">+16GB </span>
            {value}
          </div>
        );
      }

      // Handle upgrades
      if (spec.hasUpgrade && spec.essential !== false) {
        return (
          <div className="text-sm text-neutral-700 dark:text-neutral-300">
            <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold text-xs mr-2">
              <TrendingUp className="w-3 h-3" />
              UPGRADE
            </span>
            {value}
          </div>
        );
      }

      // Handle new features
      if (spec.isNew && spec.essential === false) {
        return (
          <div className="text-sm text-neutral-700 dark:text-neutral-300">
            <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold text-xs mr-2">
              <Plus className="w-3 h-3" />
              ADDED
            </span>
            {value}
          </div>
        );
      }
    }

    return <span className="text-sm text-neutral-700 dark:text-neutral-300">{value}</span>;
  };

  return (
    <Card className="hover:shadow-md transition-all duration-200 border border-neutral-200 dark:border-neutral-700">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Feature Name with Toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Laptop className="w-4 h-4 text-primary" />
              </div>
              <div>
                <span className="font-semibold text-neutral-900 dark:text-white">
                  Device Specifications
                </span>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  {isExpanded ? "Detailed hardware comparison" : "Click to view detailed specs"}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400 hover:text-primary"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  Hide Details
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  Show Details
                </>
              )}
            </Button>
          </div>

          {/* Essential Specs */}
          <div className="md:text-center">
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 font-medium uppercase tracking-wide">
              Essential
            </div>
            <div className="space-y-3">
              {/* Always show basic specs */}
              {basicSpecs.map((spec, index) => (
                <div key={index} className="border-b border-neutral-100 dark:border-neutral-700 last:border-b-0 pb-2 last:pb-0">
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 mb-1 font-medium">
                    {spec.category}
                  </div>
                  <div className="min-h-[1.5rem] flex items-center md:justify-center">
                    {renderSpecValue(spec.essential, true, spec)}
                  </div>
                </div>
              ))}
              {/* Show detailed specs when expanded */}
              {isExpanded && detailedSpecs.map((spec, index) => (
                <div key={`detailed-${index}`} className="border-b border-neutral-100 dark:border-neutral-700 last:border-b-0 pb-2 last:pb-0 animate-fade-in">
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 mb-1 font-medium">
                    {spec.category}
                  </div>
                  <div className="min-h-[1.5rem] flex items-center md:justify-center">
                    {renderSpecValue(spec.essential, true, spec)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Specs */}
          <div className="md:text-center">
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 font-medium uppercase tracking-wide">
              Professional
            </div>
            <div className="space-y-3">
              {/* Always show basic specs */}
              {basicSpecs.map((spec, index) => (
                <div key={index} className="border-b border-neutral-100 dark:border-neutral-700 last:border-b-0 pb-2 last:pb-0">
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 mb-1 font-medium">
                    {spec.category}
                  </div>
                  <div className="min-h-[1.5rem] flex items-center md:justify-center">
                    {renderSpecValue(spec.professional, false, spec)}
                  </div>
                </div>
              ))}
              {/* Show detailed specs when expanded */}
              {isExpanded && detailedSpecs.map((spec, index) => (
                <div key={`detailed-${index}`} className="border-b border-neutral-100 dark:border-neutral-700 last:border-b-0 pb-2 last:pb-0 animate-fade-in">
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 mb-1 font-medium">
                    {spec.category}
                  </div>
                  <div className="min-h-[1.5rem] flex items-center md:justify-center">
                    {renderSpecValue(spec.professional, false, spec)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeviceComparisonCard;