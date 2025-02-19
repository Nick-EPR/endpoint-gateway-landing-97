
interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const Hero = ({ title, subtitle, buttonText, onButtonClick }: HeroProps) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/lovable-uploads/server-room.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up text-white">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-up text-white/90" style={{ animationDelay: "0.2s" }}>
            {subtitle}
          </p>
          <button 
            className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover-lift animate-fade-up" 
            style={{ animationDelay: "0.4s" }}
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
