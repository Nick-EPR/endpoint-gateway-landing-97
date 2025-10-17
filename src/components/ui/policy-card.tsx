
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface PolicyCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function PolicyCard({ icon: Icon, title, description, className }: PolicyCardProps) {
  return (
    <Card className={cn("transition-all hover:shadow-md bg-card border-border", className)}>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5 text-primary" />
          <CardTitle className="text-neutral-900 dark:text-white">{title}</CardTitle>
        </div>
        <CardDescription className="text-neutral-700 dark:text-neutral-300">{description}</CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
    </Card>
  );
}
