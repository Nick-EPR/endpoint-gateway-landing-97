
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Table2, Server, Cog, Shield, Database, Box, Truck, Users, UserMinus, Wrench, Trash2, TreePine, DollarSign, Network, Check, X, Trophy } from "lucide-react";

interface ComparisonItem {
  aspect: string;
  icon: React.ReactNode;
  diy: string;
  epr: string;
  isDIYPain: boolean;
}

const ComparisonTable = () => {
  const comparisons: ComparisonItem[] = [
    {
      aspect: "Software",
      icon: <Server className="h-5 w-5" />,
      diy: "Multiple software purchases required: ITAM software plus separate asset agent software",
      epr: "All-in-one platform with integrated HeliAM, Toolbox, and management tools within the Lifetime EPR portal",
      isDIYPain: true
    }, {
      aspect: "Services",
      icon: <Cog className="h-5 w-5" />,
      diy: "Separate MSP contracts for deployment, support, and management",
      epr: "Comprehensive device management including deployment, support, repair, and offboarding",
      isDIYPain: true
    }, {
      aspect: "Warranty",
      icon: <Shield className="h-5 w-5" />,
      diy: "Extended warranties purchased separately per device",
      epr: "Integrated warranty management across all devices",
      isDIYPain: true
    }, {
      aspect: "IT Asset Management",
      icon: <Database className="h-5 w-5" />,
      diy: "Separate ITAM and agent software licenses",
      epr: "Complete lifecycle management through HeliAM within the Lifetime EPR platform",
      isDIYPain: true
    }, {
      aspect: "CMDB",
      icon: <Box className="h-5 w-5" />,
      diy: "Complex manual CMDB creation and maintenance",
      epr: "Automated CMDB updates with real-time inventory tracking",
      isDIYPain: true
    }, {
      aspect: "Logistics/Warehousing",
      icon: <Truck className="h-5 w-5" />,
      diy: "Additional costs for secure storage facilities",
      epr: "Included secure warehousing with 24/7 surveillance",
      isDIYPain: true
    }, {
      aspect: "Deployment",
      icon: <Users className="h-5 w-5" />,
      diy: "Complex coordination of imaging, configuration, and deployment",
      epr: "Streamlined staging and automated configuration process",
      isDIYPain: true
    }, {
      aspect: "Offboarding/Collection",
      icon: <UserMinus className="h-5 w-5" />,
      diy: "Manual process establishment and execution",
      epr: "Integrated device collection and offboarding services",
      isDIYPain: true
    }, {
      aspect: "Repair & Refurbishment",
      icon: <Wrench className="h-5 w-5" />,
      diy: "Third-party repair service management",
      epr: "In-house repair and refurbishment with value retention focus",
      isDIYPain: true
    }, {
      aspect: "Secure Disposition",
      icon: <Trash2 className="h-5 w-5" />,
      diy: "Separate certified recycling and ITAD services",
      epr: "Certified recycling with secure data handling throughout lifecycle",
      isDIYPain: true
    }, {
      aspect: "Environmental Compliance",
      icon: <TreePine className="h-5 w-5" />,
      diy: "Manual tracking of regulations and certifications",
      epr: "Built-in compliance with environmental and security standards",
      isDIYPain: true
    }, {
      aspect: "Cost",
      icon: <DollarSign className="h-5 w-5" />,
      diy: "Multiple separate costs: licenses, MSP fees, warranties, storage",
      epr: "Single subscription-based pricing with predictable costs",
      isDIYPain: true
    }, {
      aspect: "Complexity",
      icon: <Network className="h-5 w-5" />,
      diy: "Managing multiple vendors, contracts, and processes",
      epr: "Single point of contact for all IT lifecycle services",
      isDIYPain: true
    }
  ];

  return <section className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 flex items-center justify-center gap-2 dark:text-white">
          <Table2 className="h-8 w-8 dark:text-neutral-300" />
          ITAM Solution Comparison
        </h2>
        <p className="text-center text-base md:text-lg mb-10 max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400">
          Compare traditional IT Asset Management approaches with Lifetime EPR's integrated solution
        </p>
        
        <div className="hidden md:block">
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
                          {item.isDIYPain ? <X className="h-5 w-5 text-red-500 flex-shrink-0" /> : <Check className="h-5 w-5 text-green-500 flex-shrink-0" />}
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
        </div>

        <div className="space-y-6 md:hidden">
          {comparisons.map((item, index) => (
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
                    {item.isDIYPain ? <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" /> : <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />}
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
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg md:text-xl font-semibold text-primary dark:text-primary/90">
            Why pay more for fragmented solutions when you can save with Lifetime EPR's all-in-one platform?
          </p>
        </div>
      </div>
    </section>;
};

export default ComparisonTable;
