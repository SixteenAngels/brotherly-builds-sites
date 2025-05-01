
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import MaintenanceSlider from "@/components/MaintenanceSlider";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-navy text-white min-h-[90vh] flex items-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(20, 33, 61, 0.85), rgba(20, 33, 61, 0.85)), url("https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/70"></div>
      
      <div className="container relative z-10 px-4 md:px-0 py-20 md:py-32">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Building Your Vision <br />
            <span className="text-gold">Brothers United</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-sandstone">
            Expert construction services built on trust, skill, and family values.
            From residential to commercial projects, we build with excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-terracotta hover:bg-terracotta/90 text-white font-semibold px-8"
            >
              Our Services
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              View Projects
            </Button>
          </div>
          <div className="mt-12 flex gap-8">
            <div>
              <p className="text-4xl font-bold text-gold">25+</p>
              <p className="text-sandstone">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gold">500+</p>
              <p className="text-sandstone">Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gold">100%</p>
              <p className="text-sandstone">Client Satisfaction</p>
            </div>
          </div>
          
          <MaintenanceSlider />
        </div>
      </div>
    </section>
  );
};

export default Hero;
