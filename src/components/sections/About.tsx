
import { Shield, Award, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
            About Lifetime EPR
          </h2>
          <p className="text-lg text-neutral mb-12 animate-on-scroll">
            Transforming IT asset management with a focus on security, sustainability, and efficiency
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div className="glass-card p-8 rounded-xl hover:shadow-lg transition-shadow">
            <div className="mb-6 flex justify-center">
              <Shield className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Security First</h3>
            <p className="text-neutral text-center">
              ISO 27001 certified with comprehensive security measures to protect your IT assets
            </p>
          </div>

          <div className="glass-card p-8 rounded-xl hover:shadow-lg transition-shadow">
            <div className="mb-6 flex justify-center">
              <Award className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Certifications</h3>
            <p className="text-neutral text-center">
              SOC 2 Type II compliant and ITAD certified for secure asset disposition
            </p>
          </div>

          <div className="glass-card p-8 rounded-xl hover:shadow-lg transition-shadow">
            <div className="mb-6 flex justify-center">
              <Users className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Leadership</h3>
            <p className="text-neutral text-center">
              Experienced team with decades of expertise in IT asset management
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
