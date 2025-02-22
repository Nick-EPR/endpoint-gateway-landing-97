
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";

interface ComparisonItem {
  aspect: string;
  competitors: string;
  epr: string;
}

const ComparisonTable = () => {
  const comparisons: ComparisonItem[] = [
    {
      aspect: "Software",
      competitors: "Multiple software purchases required across different providers (ServiceNow for ITSM, Freshworks for helpdesk, etc.)",
      epr: "All-in-one platform with integrated tools including HeliAM and Toolbox"
    },
    {
      aspect: "Services",
      competitors: "Multiple service contracts needed: Evercycle for lifecycle, ServiceNow for ITSM",
      epr: "Comprehensive device management including deployment, support, repair, and offboarding"
    },
    {
      aspect: "Warranty",
      competitors: "Extended warranties purchased separately per device through OEMs or third parties",
      epr: "Integrated warranty management across all devices"
    },
    {
      aspect: "IT Asset Management",
      competitors: "Separate software licenses for ITAM and agent software (ServiceNow + agent)",
      epr: "Complete lifecycle management through the Lifetime EPR portal, powered by HeliAM"
    },
    {
      aspect: "CMDB",
      competitors: "Manual CMDB creation and updates through ServiceNow or similar platforms",
      epr: "Automated CMDB updates with real-time inventory tracking"
    },
    {
      aspect: "Logistics/Warehousing",
      competitors: "Additional costs for secure storage facilities or third-party warehousing",
      epr: "Included secure warehousing with 24/7 surveillance"
    },
    {
      aspect: "Deployment",
      competitors: "Complex coordination between multiple vendors (Evercycle, ServiceNow, etc.)",
      epr: "Streamlined staging and automated configuration process"
    },
    {
      aspect: "Offboarding/Collection",
      competitors: "Separate contracts for device collection and processing",
      epr: "Integrated device collection and offboarding services"
    },
    {
      aspect: "Repair & Refurbishment",
      competitors: "Third-party repair services with varying quality standards",
      epr: "In-house repair and refurbishment with value retention focus"
    },
    {
      aspect: "Secure Disposition",
      competitors: "Additional ITAD vendor relationships required",
      epr: "Certified recycling with secure data handling throughout lifecycle"
    },
    {
      aspect: "Environmental Compliance",
      competitors: "Manual tracking across multiple vendor certifications",
      epr: "Built-in compliance with environmental and security standards"
    },
    {
      aspect: "Cost",
      competitors: "Multiple subscriptions: ServiceNow license, Freshworks, Evercycle services",
      epr: "Single subscription-based pricing with predictable costs"
    },
    {
      aspect: "Complexity",
      competitors: "Managing relationships with multiple vendors (ServiceNow, Freshworks, Evercycle)",
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
          Compare leading IT Asset Management solutions with Lifetime EPR's integrated platform
        </p>
        
        <Card className="overflow-hidden border-primary/10">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-neutral-50">
                  <TableHead className="w-1/4">Aspect</TableHead>
                  <TableHead className="w-[37.5%]">Industry Solutions</TableHead>
                  <TableHead className="w-[37.5%] text-primary">Lifetime EPR</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisons.map((item, index) => (
                  <TableRow key={index} className="hover:bg-neutral-50">
                    <TableCell className="font-medium">{item.aspect}</TableCell>
                    <TableCell className="text-neutral-600">{item.competitors}</TableCell>
                    <TableCell className="text-primary-900">{item.epr}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-lg md:text-xl font-semibold text-primary">
            Why manage multiple vendors when you can have it all with Lifetime EPR?
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
