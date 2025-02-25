
import React from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchFeaturesProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}

export const SearchFeatures = ({ value, onChange, onClear }: SearchFeaturesProps) => {
  return (
    <div className="max-w-md mx-auto mb-10 animate-fade-up">
      <div className="relative flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search features (e.g., repair, RDP, shipping)"
            value={value}
            onChange={onChange}
            className="pl-10 bg-background/80 dark:bg-neutral-800/50 border-border hover:border-primary/50 dark:hover:border-primary/50 transition-colors backdrop-blur-sm"
          />
        </div>
        {value && (
          <Button 
            variant="outline" 
            size="icon"
            onClick={onClear}
            className="shrink-0 bg-background/80 dark:bg-neutral-800/50 border-border hover:bg-background dark:hover:bg-neutral-800 backdrop-blur-sm"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      {value && (
        <p className="text-sm text-muted-foreground mt-2 text-center">
          Showing results for "{value}"
        </p>
      )}
    </div>
  );
};
