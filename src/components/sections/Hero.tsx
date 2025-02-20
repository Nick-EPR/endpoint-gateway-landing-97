
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source 
            src="https://static.videezy.com/system/resources/previews/000/038/601/original/data_01.mp4" 
            type="video/mp4" 
          />
          {/* Fallback image in case video fails to load */}
          <img 
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
            alt="IT Asset Management Background"
            className="w-full h-full object-cover"
          />
        </video>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up text-white bg-gradient-to-r from-white to-white/80 bg-clip-text">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-up text-white/90" style={{ animationDelay: "0.2s" }}>
            {subtitle}
          </p>
          <button 
            className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg hover:scale-105 transform transition-all duration-300 animate-fade-up" 
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
