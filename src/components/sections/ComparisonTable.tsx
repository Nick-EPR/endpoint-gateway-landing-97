
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { 
  Table2, 
  Server, 
  Cog, 
  Shield, 
  Database, 
  Box, 
  Truck, 
  Users, 
  UserMinus, 
  Wrench, 
  Trash2, 
  TreePine, 
  DollarSign, 
  Network,
  Check,
  X
} from "lucide-react";

interface ComparisonItem {
  aspect: string;
  icon: React.ReactNode;
  diy: string;
  epr: string;
  isDIYPain: boolean;
  eprProduct: string;
}

const ComparisonTable = () => {
  const comparisons: ComparisonItem[] = [
    {
      aspect: "Software",
      icon: <Server className="h-5 w-5" />,
      diy: "Multiple software purchases required: ITAM software plus separate asset agent software",
      epr: "All-in-one platform with integrated HeliAM, Toolbox, and management tools within the Lifetime EPR portal",
      isDIYPain: true,
      eprProduct: "/lovable-uploads/64b90815-7ab9-4ac6-b29f-29d4adb4537e.png" // HeliAM logo
    },
    {
      aspect: "Services",
      icon: <Cog className="h-5 w-5" />,
      diy: "Separate MSP contracts for deployment, support, and management",
      epr: "Comprehensive device management including deployment, support, repair, and offboarding",
      isDIYPain: true,
      eprProduct: "/lovable-uploads/a353927e-954d-4f2b-8485-dc70088f7f43.png" // Toolbox logo
    },
    {
      aspect: "Warranty",
      icon: <Shield className="h-5 w-5" />,
      diy: "Extended warranties purchased separately per device",
      epr: "Integrated warranty management across all devices",
      isDIYPain: true,
      eprProduct: "/lovable-uploads/64b90815-7ab9-4ac6-b29f-29d4adb4537e.png" // HeliAM logo
    },
    {
      aspect: "IT Asset Management",
      icon: <Database className="h-5 w-5" />,
      diy: "Separate ITAM and agent software licenses",
      epr: "Complete lifecycle management through HeliAM within the Lifetime EPR platform",
      isDIYPain: true,
      eprProduct: "/lovable-uploads/64b90815-7ab9-4ac6-b29f-29d4adb4537e.png" // HeliAM logo
    },
    {
      aspect: "CMDB",
      icon: <Box className="h-5 w-5" />,
      diy: "Complex manual CMDB creation and maintenance",
      epr: "Automated CMDB updates with real-time inventory tracking",
      isDIYPain: true,
      eprProduct: "/lovable-uploads/64b90815-7ab9-4ac6-b29f-29d4adb4537e.png" // HeliAM logo
    },
    {
      aspect: "Logistics/Warehousing",
      icon: <Truck className="h-5 w-5" />,
      diy: "Additional costs for secure storage facilities",
      epr: "Included secure warehousing with 24/7 surveillance",
      isDIYPain: true,
      eprProduct: "/lovable-uploads/a353927e-954d-4f2b-8485-dc70088f7f43.png" // Toolbox logo
    },
    {
      aspect: "Deployment",
      icon: <Users className="h-5 w-5" />,
      diy: "Complex coordination of imaging, configuration, and deployment",
      epr: "Streamlined staging and automated configuration process",
      isDIYPain: true,
      eprProduct: "/lovable-uploads/a353927e-954d-4f2b-8485-dc70088f7f43.png" // Toolbox logo
    },
    {
      aspect: "Offboarding/Collection",
      icon: <UserMinus className="h-5 w-5" />,
      diy: "Manual process establishment and execution",
      epr: "Integrated device collection and offboarding services",
      isDIYPain: true,
      eprProduct: "/lovable-uploads/a353927e-954d-4f2b-8485-dc70088f7f43.png" // Toolbox logo
    },
    {
      aspect: "Repair & Refurbishment",
      icon: <Wrench className="h-5 w-5" />,
      diy: "Third-party repair service management",
      epr: "In-house repair and refurbishment with value retention focus",
      isDIYPain: true,
      eprProduct: "/lovable-uploads/a353927e-954d-4f2b-8485-dc70088f7f43.png" // Toolbox logo
    },
    {
      aspect: "Secure Disposition",
      icon: <Trash2 className="h-5 w-5" />,
      diy: "Separate certified recycling and ITAD services",
      epr: "Certified recycling with secure data handling throughout lifecycle",
      isDIYPain: true,
      eprProduct: "/lovable-uploads/a353927e-954d-4f2b-8485-dc70088f7f43.png" // Toolbox logo
    },
    {
      aspect: "Environmental Compliance",
      icon: <TreePine className="h-5 w-5" />,
      diy: "Manual tracking of regulations and certifications",
      epr: "Built-in compliance with environmental and security standards",
      isDIYPain: true,
      eprProduct: "/lovable-uploads/64b90815-7ab9-4ac6-b29f-29d4adb4537e.png" // HeliAM logo
    },
    {
      aspect: "Cost",
      icon: <DollarSign className="h-5 w-5" />,
      diy: "Multiple separate costs: licenses, MSP fees, warranties, storage",
      epr: "Single subscription-based pricing with predictable costs",
      isDIYPain: true,
      eprProduct: "/lovable-uploads/64b90815-7ab9-4ac6-b29f-29d4adb4537e.png" // HeliAM logo
    },
    {
      aspect: "Complexity",
      icon: <Network className="h-5 w-5" />,
      diy: "Managing multiple vendors, contracts, and processes",
      epr: "Single point of contact for all IT lifecycle services",
      isDIYPain: true,
      eprProduct: "/lovable-uploads/64b90815-7ab9-4ac6-b29f-29d4adb4537e.png" // HeliAM logo
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 flex items-center justify-center gap-2">
          <Table2 className="h-8 w-8" />
          ITAM Solution Comparison
        </h2>
        <p className="text-center text-base md:text-lg mb-10 max-w-2xl mx-auto text-neutral-600">
          Compare traditional IT Asset Management approaches with Lifetime EPR's integrated solution
        </p>
        
        <Card className="overflow-hidden border-primary/10">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-neutral-50">
                  <TableHead className="w-1/4">Aspect</TableHead>
                  <TableHead className="w-[37.5%]">Do-It-Yourself ITAM</TableHead>
                  <TableHead className="w-[37.5%] text-primary">Lifetime EPR</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisons.map((item, index) => (
                  <TableRow key={index} className="hover:bg-neutral-50">
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        {item.icon}
                        {item.aspect}
                      </div>
                    </TableCell>
                    <TableCell className="text-neutral-600">
                      <div className="flex items-center gap-2">
                        {item.isDIYPain ? 
                          <X className="h-5 w-5 text-red-500 flex-shrink-0" /> : 
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        }
                        {item.diy}
                      </div>
                    </TableCell>
                    <TableCell className="text-primary-900">
                      <div className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <div className="flex items-center gap-2">
                          <img 
                            src={item.eprProduct} 
                            alt="EPR Product Logo" 
                            className="h-4 w-auto object-contain"
                          />
                          {item.epr}
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-lg md:text-xl font-semibold text-primary">
            Why piece together your IT asset management when you can have it all with Lifetime EPR?
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
