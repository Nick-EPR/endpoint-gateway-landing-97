
import { Quote } from "lucide-react";

const RealWorldChallenges = () => {
  return (
    <section className="py-16 md:py-24 bg-neutral-light dark:bg-neutral-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Real-World Challenges, Real Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            Our market research findings show that even large companies often have 
            surprisingly rudimentary ITAM processes. We've designed our solution to address these real-world challenges.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-neutral-900 rounded-xl p-8 md:p-10 shadow-lg">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80" 
                  alt="Business professional" 
                  className="rounded-lg w-full max-w-[200px] object-cover aspect-square"
                />
              </div>
              <div className="md:w-2/3">
                <div className="mb-6">
                  <Quote className="h-12 w-12 text-primary/20" />
                </div>
                <p className="text-lg mb-6 text-foreground italic">
                  We've seen firsthand how even a Fortune 500 insurance company struggled with basic asset tracking, 
                  relying on departing employees to simply return their laptops without a formal process. This created 
                  significant security risks and led to thousands of dollars in lost assets each month.
                </p>
                <div>
                  <p className="font-semibold text-foreground">IT Director</p>
                  <p className="text-sm text-muted-foreground">Enterprise Financial Services Company</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-md">
              <div className="font-bold text-3xl text-primary mb-2">89%</div>
              <p className="text-muted-foreground">of companies use 3+ disconnected tools for IT asset management</p>
            </div>
            <div className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-md">
              <div className="font-bold text-3xl text-primary mb-2">62%</div>
              <p className="text-muted-foreground">report significant challenges maintaining integrations between systems</p>
            </div>
            <div className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-md">
              <div className="font-bold text-3xl text-primary mb-2">45%</div>
              <p className="text-muted-foreground">of IT assets are underutilized due to poor visibility across tools</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealWorldChallenges;
