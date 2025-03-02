
import { BarChart3, CheckCircle2, Database } from "lucide-react";
import { Stat } from "./types";

const StatsSection = () => {
  const stats: Stat[] = [
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      value: "30%",
      label: "Average cost reduction"
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
      value: "99.9%",
      label: "Asset visibility"
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      value: "1M+",
      label: "Assets managed"
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-neutral-50 dark:bg-neutral-800/50">
                <div className="inline-flex p-3 rounded-lg bg-primary/5 dark:bg-primary/10 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <p className="text-neutral-600 dark:text-neutral-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
