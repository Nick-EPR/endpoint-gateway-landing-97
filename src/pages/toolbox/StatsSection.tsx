
import { 
  Timer, 
  CheckCircle2, 
  BarChart3, 
  CircleDollarSign 
} from "lucide-react";
import { ToolboxStat } from "./types";

const StatsSection = () => {
  const stats: ToolboxStat[] = [
    {
      icon: <Timer className="w-8 h-8 text-primary" />,
      value: "24-48h",
      label: "Average repair turnaround time"
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
      value: "95%+",
      label: "First-time repair success rate"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      value: "40%",
      label: "Reduction in repair costs"
    },
    {
      icon: <CircleDollarSign className="w-8 h-8 text-primary" />,
      value: "2.5x",
      label: "ROI in first year"
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">Proven Results</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">
              Our customers achieve significant improvements in their repair operations
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
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
