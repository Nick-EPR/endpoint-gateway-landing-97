
import { Card } from "@/components/ui/card";
import { Check, Trophy, X } from "lucide-react";
import { ComparisonItem } from "./types";

export const ComparisonCard = ({ item, index }: { item: ComparisonItem; index: number }) => {
  return (
    <Card key={index} className="p-4 dark:bg-neutral-800/50 dark:border-neutral-700">
      <div className="flex items-center gap-2 mb-3 font-medium border-b pb-2 dark:border-neutral-700 dark:text-neutral-300">
        {item.icon}
        {item.aspect}
      </div>
      <div className="space-y-4">
        <div className="space-y-2 opacity-75">
          <div className="flex items-center gap-2 text-sm font-medium text-neutral-500 dark:text-neutral-400">
            <span className="text-xl">😫</span> Do-It-Yourself ITAM
          </div>
          <div className="flex items-start gap-2 pl-2">
            {item.isDIYPain ? 
              <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" /> : 
              <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
            }
            <p className="text-neutral-600 dark:text-neutral-400">{item.diy}</p>
          </div>
        </div>
        <div className="space-y-2 bg-primary/10 dark:bg-primary/5 p-6 rounded-lg shadow-xl">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 text-primary">
              <Trophy className="h-5 w-5" />
              <span className="font-bold text-lg dark:text-white">Lifetime EPR</span>
            </div>
          </div>
          <div className="flex items-start gap-2 pl-2">
            <img 
              src="/lovable-uploads/5b533a40-f625-444d-8a90-0c95ba14a528.png" 
              alt="EPR Emblem" 
              className="h-5 w-5 flex-shrink-0 mt-0.5"
            />
            <p className="text-primary-900 font-medium dark:text-neutral-200">{item.epr}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
