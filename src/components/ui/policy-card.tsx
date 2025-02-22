
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
    <Card className={cn("transition-all hover:shadow-md", className)}>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5 text-primary" />
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
    </Card>
  );
}
