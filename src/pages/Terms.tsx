
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Terms = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrolled={true} onMouseEnter={() => {}} />
      
      <main className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using Lifetime EPR's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>

            <h2>2. Service Description</h2>
            <p>Lifetime EPR provides IT asset management solutions, including but not limited to device lifecycle management, security services, and related consulting services.</p>

            <h2>3. User Obligations</h2>
            <p>Users must maintain accurate account information and ensure the security of their login credentials. Users are responsible for all activities conducted under their account.</p>

            <h2>4. Data Privacy</h2>
            <p>We collect and process data in accordance with our Privacy Policy. By using our services, you consent to such processing and warrant that all data provided by you is accurate.</p>

            <h2>5. Service Level Agreement</h2>
            <p>Our service availability and support response times are governed by the Service Level Agreement specific to your subscription tier.</p>

            <h2>6. Intellectual Property</h2>
            <p>All content, features, and functionality of our services are owned by Lifetime EPR and are protected by international copyright, trademark, and other intellectual property laws.</p>

            <h2>7. Limitation of Liability</h2>
            <p>Lifetime EPR shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.</p>

            <h2>8. Termination</h2>
            <p>We reserve the right to terminate or suspend access to our services immediately, without prior notice or liability, for any reason.</p>

            <h2>9. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our services.</p>

            <h2>10. Contact Information</h2>
            <p>For any questions about these Terms of Service, please contact us at legal@lifetimeepr.com.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
