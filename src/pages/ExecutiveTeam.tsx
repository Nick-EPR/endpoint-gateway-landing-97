
import { Users } from "lucide-react";

const ExecutiveTeam = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Header Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Users className="w-12 h-12 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Leadership Team</h1>
            <p className="text-lg text-neutral">
              Meet the experienced professionals leading our mission to transform IT asset management.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Leadership Cards */}
            <div className="glass-card rounded-xl overflow-hidden hover-lift">
              <img 
                src="/lovable-uploads/b2341ac3-771a-4393-be7c-4147f249071d.png" 
                alt="Leadership Team Member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Leadership Role</h3>
                <p className="text-primary font-medium mb-4">Chief Executive Officer</p>
                <p className="text-neutral">
                  Experienced leader with expertise in IT asset management and enterprise solutions.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-xl overflow-hidden hover-lift">
              <img 
                src="/lovable-uploads/b2341ac3-771a-4393-be7c-4147f249071d.png" 
                alt="Leadership Team Member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Leadership Role</h3>
                <p className="text-primary font-medium mb-4">Chief Technology Officer</p>
                <p className="text-neutral">
                  Technology visionary driving innovation in endpoint management solutions.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-xl overflow-hidden hover-lift">
              <img 
                src="/lovable-uploads/b2341ac3-771a-4393-be7c-4147f249071d.png" 
                alt="Leadership Team Member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Leadership Role</h3>
                <p className="text-primary font-medium mb-4">Chief Operations Officer</p>
                <p className="text-neutral">
                  Operations expert ensuring excellent service delivery and client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Leadership Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-neutral-light rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-neutral">
                  Driving technological advancement in IT asset management
                </p>
              </div>
              <div className="p-6 bg-neutral-light rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-neutral">
                  Delivering exceptional service and solutions
                </p>
              </div>
              <div className="p-6 bg-neutral-light rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                <p className="text-neutral">
                  Building trust through transparent leadership
                </p>
              </div>
              <div className="p-6 bg-neutral-light rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Client Focus</h3>
                <p className="text-neutral">
                  Prioritizing client success in everything we do
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExecutiveTeam;
