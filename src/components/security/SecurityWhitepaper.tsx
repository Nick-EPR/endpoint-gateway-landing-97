
import { Download, FileText, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import GuideImage from "../sections/tmobile/GuideImage";

export const SecurityWhitepaper = () => {
  return (
    <section className="py-24 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">
                  Secure IT Asset Management Whitepaper
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6">
                Our comprehensive security whitepaper details how we protect your data throughout the IT asset lifecycle, ensuring compliance with industry standards and regulatory requirements.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <Card className="bg-card/50 border border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">Data Protection</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Learn about our DoD-standard data wiping and physical destruction processes.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 border border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Lock className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">Compliance</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Discover how we maintain ISO27001:2023 and R2v3 certification standards.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/security/whitepaper">
                  <Button className="w-full sm:w-auto space-x-2">
                    <Download className="h-4 w-4" />
                    <span>Download Whitepaper</span>
                  </Button>
                </Link>
                
                <Link to="/contact">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Schedule Security Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="max-w-md mx-auto">
              <GuideImage 
                src="/lovable-uploads/5771aed6-61b2-492e-953a-49f8f45d74a6.png" 
                alt="Security Whitepaper Cover" 
                fileName="security-whitepaper.png"
                pages={[
                  {
                    src: "/lovable-uploads/5771aed6-61b2-492e-953a-49f8f45d74a6.png",
                    alt: "Security Whitepaper Cover",
                    fileName: "security-whitepaper-cover.png"
                  },
                  {
                    src: "/lovable-uploads/5f7f3800-f00c-4dc9-831d-dc17898e36d3.png",
                    alt: "Security Whitepaper Page 1",
                    fileName: "security-whitepaper-page1.png"
                  }
                ]}
              />
              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Authors:</span> Security Team at Lifetime EPR 
                  <span className="mx-2">•</span>
                  <span className="font-medium">Published:</span> 2023
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-center mb-6">What Readers Are Saying</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card/50 border border-border">
              <CardContent className="p-6">
                <p className="italic text-muted-foreground mb-4">
                  "The whitepaper provides clear, actionable guidance on secure IT asset management. It's become our go-to resource for compliance."
                </p>
                <div className="font-medium">John Smith, CIO</div>
                <div className="text-sm text-muted-foreground">Enterprise Healthcare</div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border border-border">
              <CardContent className="p-6">
                <p className="italic text-muted-foreground mb-4">
                  "Comprehensive coverage of security standards with practical implementation steps. Essential reading for IT security professionals."
                </p>
                <div className="font-medium">Sarah Johnson, CISO</div>
                <div className="text-sm text-muted-foreground">Financial Services</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
