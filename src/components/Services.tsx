
import { Button } from "@/components/ui/button";
import { Building, Construction, Hammer, Layers, Truck } from "lucide-react";

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  bgClass 
}: { 
  title: string; 
  description: string; 
  icon: any; 
  bgClass: string; 
}) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <div className={`${bgClass} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
      <Icon className="text-white w-7 h-7" />
    </div>
    <h3 className="text-xl font-bold mb-2 text-navy">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Button variant="link" className="text-terracotta p-0 hover:text-navy">
      Learn more →
    </Button>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Residential Construction",
      description: "Custom homes built to your specifications with premium materials and expert craftsmanship.",
      icon: Building,
      bgClass: "bg-terracotta"
    },
    {
      title: "Commercial Projects",
      description: "Office buildings, retail spaces, and institutional facilities built to the highest standards.",
      icon: Layers,
      bgClass: "bg-navy"
    },
    {
      title: "Renovations",
      description: "Transform your existing space with our comprehensive renovation and remodeling services.",
      icon: Hammer,
      bgClass: "bg-gold"
    },
    {
      title: "Site Development",
      description: "Full-service site preparation, utilities installation, and infrastructure development.",
      icon: Construction,
      bgClass: "bg-navy"
    },
    {
      title: "Design-Build",
      description: "Streamlined project delivery with a single point of contact from concept to completion.",
      icon: Building,
      bgClass: "bg-terracotta"
    },
    {
      title: "Material Supply",
      description: "Quality construction materials delivered on time for your project needs.",
      icon: Truck,
      bgClass: "bg-gold"
    }
  ];

  return (
    <section id="services" className="section-padding bg-sandstone/50">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">
            Our <span className="text-terracotta">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From residential to commercial construction, our comprehensive services
            are delivered with expertise and attention to detail.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              bgClass={service.bgClass}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button className="bg-navy hover:bg-navy/90 text-white px-8 py-6 text-lg">
            Request a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
