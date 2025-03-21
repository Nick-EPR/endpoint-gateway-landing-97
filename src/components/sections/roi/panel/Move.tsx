
import { Move as LucideMove } from 'lucide-react';
import { cn } from "@/lib/utils";

interface MoveProps {
  className?: string;
}

const Move = ({ className }: MoveProps) => {
  return <LucideMove className={cn("h-4 w-4 text-neutral-500", className)} />;
};

export default Move;
