
import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchFeaturesProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchFeatures = ({ value, onChange }: SearchFeaturesProps) => {
  return (
    <div className="max-w-md mx-auto mb-10 animate-fade-up">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
        <Input
          type="text"
          placeholder="Search features (e.g., repair, RDP, shipping)"
          value={value}
          onChange={onChange}
          className="pl-10 bg-white/80 border-neutral-200 shadow-sm hover:border-neutral-300 transition-colors"
        />
      </div>
      {value && (
        <p className="text-sm text-neutral-500 mt-2 text-center">
          Showing results for "{value}"
        </p>
      )}
    </div>
  );
};
