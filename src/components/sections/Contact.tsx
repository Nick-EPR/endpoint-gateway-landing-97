
const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
              Get in Touch
            </h2>
            <p className="text-lg text-neutral mb-8 animate-on-scroll">
              Let's discuss how we can help transform your IT asset management
            </p>
          </div>

          <div className="glass-card p-8 rounded-xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-neutral/20 focus:outline-none focus:border-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 rounded-lg border border-neutral/20 focus:outline-none focus:border-primary"
                    placeholder="Your company"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-neutral/20 focus:outline-none focus:border-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-neutral/20 focus:outline-none focus:border-primary"
                  placeholder="Tell us about your needs"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button type="submit" className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity">
                  Schedule a Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
