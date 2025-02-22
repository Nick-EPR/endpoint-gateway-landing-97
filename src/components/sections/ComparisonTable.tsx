
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";

interface ComparisonItem {
  aspect: string;
  servicenow: boolean;
  freshservice: boolean;
  evercycle: boolean;
  epr: boolean;
}

const ComparisonTable = () => {
  const comparisons: ComparisonItem[] = [
    {
      aspect: "ITSM Software",
      servicenow: true,
      freshservice: true,
      evercycle: false,
      epr: true
    },
    {
      aspect: "Hardware Inventory",
      servicenow: true,
      freshservice: false,
      evercycle: true,
      epr: true
    },
    {
      aspect: "Device Deployment",
      servicenow: false,
      freshservice: false,
      evercycle: true,
      epr: true
    },
    {
      aspect: "Hardware Support",
      servicenow: false,
      freshservice: true,
      evercycle: true,
      epr: true
    },
    {
      aspect: "Repair Services",
      servicenow: false,
      freshservice: false,
      evercycle: true,
      epr: true
    },
    {
      aspect: "Asset Recovery",
      servicenow: false,
      freshservice: false,
      evercycle: true,
      epr: true
    },
    {
      aspect: "Device Warehousing",
      servicenow: false,
      freshservice: false,
      evercycle: true,
      epr: true
    },
    {
      aspect: "Automated CMDB",
      servicenow: true,
      freshservice: false,
      evercycle: false,
      epr: true
    },
    {
      aspect: "IT Service Desk",
      servicenow: true,
      freshservice: true,
      evercycle: false,
      epr: true
    },
    {
      aspect: "Lifecycle Tracking",
      servicenow: true,
      freshservice: false,
      evercycle: true,
      epr: true
    },
    {
      aspect: "Device Configuration",
      servicenow: false,
      freshservice: false,
      evercycle: true,
      epr: true
    },
    {
      aspect: "Integrated Warranty",
      servicenow: false,
      freshservice: false,
      evercycle: true,
      epr: true
    },
    {
      aspect: "ITAD Services",
      servicenow: false,
      freshservice: false,
      evercycle: true,
      epr: true
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
          ITAM Solution Comparison
        </h2>
        <p className="text-center text-base md:text-lg mb-10 max-w-2xl mx-auto text-neutral-600">
          See how Lifetime EPR's integrated platform compares to individual solutions
        </p>
        
        <Card className="overflow-hidden border-primary/10">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-neutral-50">
                  <TableHead className="w-[30%]">Feature</TableHead>
                  <TableHead className="w-[17.5%]">ServiceNow</TableHead>
                  <TableHead className="w-[17.5%]">FreshService</TableHead>
                  <TableHead className="w-[17.5%]">Evercycle</TableHead>
                  <TableHead className="w-[17.5%] text-primary">Lifetime EPR</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisons.map((item, index) => (
                  <TableRow key={index} className="hover:bg-neutral-50">
                    <TableCell className="font-medium">{item.aspect}</TableCell>
                    <TableCell>
                      {item.servicenow ? 
                        <Check className="h-5 w-5 text-green-500" /> : 
                        <X className="h-5 w-5 text-red-500" />}
                    </TableCell>
                    <TableCell>
                      {item.freshservice ? 
                        <Check className="h-5 w-5 text-green-500" /> : 
                        <X className="h-5 w-5 text-red-500" />}
                    </TableCell>
                    <TableCell>
                      {item.evercycle ? 
                        <Check className="h-5 w-5 text-green-500" /> : 
                        <X className="h-5 w-5 text-red-500" />}
                    </TableCell>
                    <TableCell className="text-primary">
                      <Check className="h-5 w-5 text-primary" />
                    </TableCell>
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
