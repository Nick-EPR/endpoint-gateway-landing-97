
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Check, Trophy, X } from "lucide-react";
import { ComparisonItem } from "./types";

export const ComparisonTableDesktop = ({ comparisons }: { comparisons: ComparisonItem[] }) => {
  return (
    <Card className="overflow-hidden border-primary/10 relative dark:bg-neutral-800/50 dark:border-neutral-700">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-neutral-50 dark:bg-neutral-800">
              <TableHead className="w-1/4 dark:text-neutral-300">Aspect</TableHead>
              <TableHead className="w-[37.5%]">
                <div className="flex items-center gap-2 opacity-75 dark:text-neutral-300">
                  <span className="text-2xl">😫</span> Do-It-Yourself ITAM
                </div>
              </TableHead>
              <TableHead className="w-[37.5%] text-primary relative">
                <div className="absolute inset-0 bg-primary/10 shadow-[0_4px_24px_rgba(147,200,81,0.25)] dark:bg-primary/5"></div>
                <div className="relative flex items-center gap-2">
                  <Trophy className="h-6 w-6 text-primary" />
                  <span className="font-bold text-lg dark:text-white">Lifetime EPR</span>
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {comparisons.map((item, index) => (
              <TableRow key={index} className="hover:bg-neutral-50 dark:hover:bg-neutral-800/50 group">
                <TableCell className="font-medium dark:text-neutral-300">
                  <div className="flex items-center gap-2">
                    {item.icon}
                    {item.aspect}
                  </div>
                </TableCell>
                <TableCell className="text-neutral-600 dark:text-neutral-400">
                  <div className="flex items-center gap-2">
                    {item.isDIYPain ? 
                      <X className="h-5 w-5 text-red-500 flex-shrink-0" /> : 
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    }
                    <span className="opacity-75">{item.diy}</span>
                  </div>
                </TableCell>
                <TableCell className="text-primary-900 relative bg-primary/5 dark:bg-primary/5">
                  <div className="absolute inset-0 bg-primary/5 dark:bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative flex items-start gap-2">
                    <img 
                      src="/lovable-uploads/5b533a40-f625-444d-8a90-0c95ba14a528.png" 
                      alt="EPR Emblem" 
                      className="h-5 w-5 flex-shrink-0 mt-1"
                    />
                    <span className="font-medium dark:text-neutral-200">{item.epr}</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};
