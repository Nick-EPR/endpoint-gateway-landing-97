
import { Wrench, Clock } from 'lucide-react';

export const StatsCards = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-8">
      <div className="glass-card p-6 text-center animate-fade-up delay-200 hover:scale-105 transition-transform duration-300">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
          <Wrench className="w-6 h-6 text-primary" />
        </div>
        <div className="text-primary text-xl font-bold mb-2">60%</div>
        <p className="text-neutral">Average savings repair vs. replacement</p>
      </div>
      <div className="glass-card p-6 text-center animate-fade-up delay-300 hover:scale-105 transition-transform duration-300">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
          <Clock className="w-6 h-6 text-primary" />
        </div>
        <div className="text-primary text-xl font-bold mb-2">2 Years</div>
        <p className="text-neutral">Average life extension of devices</p>
      </div>
    </div>
  );
};
