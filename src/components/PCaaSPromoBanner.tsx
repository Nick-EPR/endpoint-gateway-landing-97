import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight, Laptop, Zap, Shield, Users, TrendingUp, Wifi } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const PCaaSPromoBanner = () => {
  const essentialPrice = useCountUp(99, 2000);
  const professionalPrice = useCountUp(175, 2000);

  const quickSpecs = [
    {
      icon: Laptop,
      title: "Lenovo ThinkPad T14 Gen 6",
      description: "AMD Ryzen AI processors with 5G"
    },
    {
      icon: Wifi,
      title: "75-125GB 5G Data",
      description: "High-speed connectivity included"
    },
    {
      icon: Zap,
      title: "Microsoft Copilot AI",
      description: "Enterprise-grade AI capabilities"
    },
    {
      icon: Shield,
      title: "24/7/365 Support",
      description: "Complete managed service"
    }
  ];

  return (
    <section className="bg-white dark:bg-neutral-900 parallelogram-section relative z-20" style={{ marginTop: '0', padding: '6rem 0 8rem 0' }}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Apple-style Product Announcement */}
        <div className="text-center mb-16 space-y-6">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Badge variant="outline" className="bg-gradient-to-r from-[#e20074] to-[#b8005a] text-white border-none px-6 py-2 text-sm font-semibold">
              <Sparkles className="h-4 w-4 mr-2" />
              Now Available
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-900 dark:text-white max-w-5xl mx-auto leading-tight">
            Simplify Your IT.
            <span className="block bg-gradient-to-r from-[#e20074] to-[#b8005a] bg-clip-text text-transparent">
              Mobilize Your Workforce.
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl text-neutral-600 dark:text-neutral-400 mt-2">
              Cut CapEx.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            A fully managed device solution combining 5G connectivity with white-glove IT services for SMBs.
          </p>
        </div>

        {/* Pricing Tiers - Apple Style */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Essential Tier */}
          <Card className="relative overflow-hidden border-2 border-neutral-200 dark:border-neutral-700 hover:border-[#e20074] transition-all duration-300 hover:shadow-xl">
            <div className="absolute top-4 right-4">
              <Badge className="bg-emerald-500 text-white">Most Popular</Badge>
            </div>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">Essential</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-[#e20074]">${essentialPrice}</span>
                  <span className="text-neutral-500 dark:text-neutral-400">/month</span>
                </div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Laptop className="h-4 w-4 text-[#e20074]" />
                  <span>Lenovo ThinkPad T14 Gen 6 R5</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-[#e20074]" />
                  <span>16GB DDR5 Memory</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wifi className="h-4 w-4 text-[#e20074]" />
                  <span>75GB 5G Data</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[#e20074]" />
                  <span>Microsoft Copilot Bing Chat</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Tier */}
          <Card className="relative overflow-hidden border-2 border-neutral-200 dark:border-neutral-700 hover:border-[#e20074] transition-all duration-300 hover:shadow-xl">
            <div className="absolute top-4 right-4 z-10">
              <Badge className="bg-orange-500 text-white">Coming Soon</Badge>
            </div>
            <CardContent className="p-8 blur-sm opacity-75">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">Professional</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-[#e20074]">${professionalPrice}</span>
                  <span className="text-neutral-500 dark:text-neutral-400">/month</span>
                </div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Laptop className="h-4 w-4 text-[#e20074]" />
                  <span>Lenovo ThinkPad T14 Gen 6 R7</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-[#e20074]" />
                  <span>32GB DDR5 Memory</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wifi className="h-4 w-4 text-[#e20074]" />
                  <span>125GB 5G Data</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[#e20074]" />
                  <span>Microsoft Copilot Enterprise</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Specs Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {quickSpecs.map((spec, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#e20074] to-[#b8005a] rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-200">
                <spec.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">{spec.title}</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{spec.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link to="/pcaas">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#e20074] to-[#b8005a] hover:from-[#b8005a] hover:to-[#e20074] !text-white font-semibold transition-all duration-300 text-lg px-12 py-4 group shadow-lg hover:shadow-xl"
            >
              Learn more
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
            Join businesses transforming their IT infrastructure
          </p>
        </div>
      </div>
    </section>
  );
};

export default PCaaSPromoBanner;