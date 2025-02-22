
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";

interface ComparisonItem {
  aspect: string;
  diy: string;
  epr: string;
}

const ComparisonTable = () => {
  const comparisons: ComparisonItem[] = [
    {
      aspect: "Software",
      diy: "Multiple software purchases required: ITAM software plus separate asset agent software",
      epr: "All-in-one HeliAM platform with integrated Toolbox and management tools"
    },
    {
      aspect: "Services",
      diy: "Separate MSP contracts for deployment, support, and management",
      epr: "Comprehensive device management including deployment, support, repair, and offboarding"
    },
    {
      aspect: "Warranty",
      diy: "Extended warranties purchased separately per device",
      epr: "Integrated warranty management across all devices"
    },
    {
      aspect: "IT Asset Management",
      diy: "Separate ITAM and agent software licenses",
      epr: "Enterprise ITAM solution (HeliAM) with complete lifecycle management"
    },
    {
      aspect: "CMDB",
      diy: "Complex manual CMDB creation and maintenance",
      epr: "Automated CMDB updates with real-time inventory tracking"
    },
    {
      aspect: "Logistics/Warehousing",
      diy: "Additional costs for secure storage facilities",
      epr: "Included secure warehousing with 24/7 surveillance"
    },
    {
      aspect: "Deployment",
      diy: "Complex coordination of imaging, configuration, and deployment",
      epr: "Streamlined staging and automated configuration process"
    },
    {
      aspect: "Offboarding/Collection",
      diy: "Manual process establishment and execution",
      epr: "Integrated device collection and offboarding services"
    },
    {
      aspect: "Repair & Refurbishment",
      diy: "Third-party repair service management",
      epr: "In-house repair and refurbishment with value retention focus"
    },
    {
      aspect: "Secure Disposition",
      diy: "Separate certified recycling and ITAD services",
      epr: "Certified recycling with secure data handling throughout lifecycle"
    },
    {
      aspect: "Environmental Compliance",
      diy: "Manual tracking of regulations and certifications",
      epr: "Built-in compliance with environmental and security standards"
    },
    {
      aspect: "Cost",
      diy: "Multiple separate costs: licenses, MSP fees, warranties, storage",
      epr: "Single subscription-based pricing with predictable costs"
    },
    {
      aspect: "Complexity",
      diy: "Managing multiple vendors, contracts, and processes",
      epr: "Single point of contact for all IT lifecycle services"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
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
                    <TableCell className="font-medium">{item.aspect}</TableCell>
                    <TableCell className="text-neutral-600">{item.diy}</TableCell>
                    <TableCell className="text-primary-900">{item.epr}</TableCell>
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
