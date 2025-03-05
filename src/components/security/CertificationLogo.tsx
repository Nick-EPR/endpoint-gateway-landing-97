
import React from 'react';

interface CertificationLogoProps {
  name: string;
  logo: string;
  alt: string;
}

export const CertificationLogo: React.FC<CertificationLogoProps> = ({ 
  name,
  logo,
  alt
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 mb-2 flex items-center justify-center">
        <img src={logo} alt={alt} className="max-w-full max-h-full object-contain" />
      </div>
      <span className="text-xs font-medium text-muted-foreground">{name}</span>
    </div>
  );
}
