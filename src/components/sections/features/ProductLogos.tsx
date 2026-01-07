import React from "react";

interface ProductLogosProps {
  heliamLogo: string;
  toolboxLogo: string;
  lueminLogo: string;
}

export const ProductLogos = ({ heliamLogo, toolboxLogo, lueminLogo }: ProductLogosProps) => {
  const darkModeToolboxLogo = "/lovable-uploads/8dd82be9-672a-44e1-ad3e-e474a8ef097a.png";

  return (
    <div className="grid md:grid-cols-3 gap-8 mb-12">
      <div className="text-center">
        <img src={heliamLogo} alt="HeliAM" className="mx-auto h-10 block dark:hidden" />
        <img src={heliamLogo} alt="HeliAM" className="mx-auto h-10 hidden dark:block" />
      </div>
      <div className="text-center">
        <img src={toolboxLogo} alt="Toolbox" className="mx-auto h-8 block dark:hidden" />
        <img src={darkModeToolboxLogo} alt="Toolbox" className="mx-auto h-8 hidden dark:block" />
      </div>
      <div className="text-center">
        <img src={lueminLogo} alt="Luemin" className="mx-auto h-8 block dark:hidden" />
        <img src={lueminLogo} alt="Luemin" className="mx-auto h-8 hidden dark:block" />
      </div>
    </div>
  );
};
