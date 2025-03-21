
import { GitFork, Unlink, DollarSign, RotateCcw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const DisconnectedSystems = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="p-3 bg-red-100 rounded-full mb-2 animate-float">
              <GitFork className="h-8 w-8 text-red-500" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            The Challenge of Disconnected Systems
          </h2>
          <p className="text-lg text-muted-foreground">
            Many businesses struggle with a patchwork of IT asset management tools, 
            leading to inefficiencies, data silos, and increased costs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col space-y-6">
            <Card className="border-l-4 border-l-red-500">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-red-100 rounded-md mr-4">
                    <Unlink className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Fragmented Tool Landscape</h3>
                    <p className="text-muted-foreground">
                      Typical IT departments use different tools for help desk/CMDB (like Freshservice), 
                      UEM/MDM solutions (like ManageEngine), backup tools, and physical asset tracking.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
                
            <Card className="border-l-4 border-l-red-500">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-red-100 rounded-md mr-4">
                    <DollarSign className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Integration Costs</h3>
                    <p className="text-muted-foreground">
                      Building integrations between these disparate systems requires specialized 
                      expertise and significant upfront investment, often costing tens of thousands of dollars.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col space-y-6">
            <Card className="border-l-4 border-l-red-500">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-red-100 rounded-md mr-4">
                    <RotateCcw className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ongoing Maintenance Burden</h3>
                    <p className="text-muted-foreground">
                      API changes and evolving standards require constant maintenance of 
                      integrations, potentially requiring costly rewrites and consuming IT resources.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-red-500">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-red-100 rounded-md mr-4">
                    <Box className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Incomplete Data Picture</h3>
                    <p className="text-muted-foreground">
                      Despite significant investments in integrations, most organizations still struggle to 
                      achieve a unified view of their IT assets throughout the entire lifecycle.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisconnectedSystems;
