
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Michael Johnson",
      role: "Homeowner",
      content: "The Brothers Built team turned our dream home into reality. Their attention to detail and quality craftsmanship exceeded all our expectations. They were communicative throughout the entire process and finished on schedule.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Business Owner",
      content: "As a business owner, I needed a construction company I could trust to build our new retail location. Brothers Built delivered exceptional quality work and handled all city permits and regulations smoothly.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      name: "Robert Chen",
      role: "Property Developer",
      content: "I've worked with many construction firms over my 20-year career in property development, and Brothers Built stands above the rest. Their team's technical expertise and problem-solving abilities make them my go-to partner.",
      image: "https://randomuser.me/api/portraits/men/76.jpg"
    }
  ];
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <section id="testimonials" className="section-padding bg-navy text-white">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-gold">Clients Say</span>
          </h2>
          <p className="text-sandstone max-w-2xl mx-auto">
            Don't just take our word for it. Hear what our satisfied clients have to say about working with Brothers Built.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <Quote className="absolute text-gold/20 w-24 h-24 -left-4 -top-10" />
          
          <div className="relative z-10">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={cn(
                  "transition-all duration-500 ease-in-out",
                  activeIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute top-0 left-0"
                )}
              >
                {activeIndex === index && (
                  <div className="flex flex-col items-center">
                    <p className="text-lg md:text-xl text-center mb-8 italic">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-gold"
                      />
                      <div className="ml-4 text-left">
                        <p className="font-bold text-gold">{testimonial.name}</p>
                        <p className="text-sandstone">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12 space-x-4">
            <Button 
              onClick={prevTestimonial} 
              variant="outline"
              size="icon"
              className="border-sandstone text-sandstone hover:bg-sandstone/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-colors",
                    activeIndex === index ? "bg-gold" : "bg-sandstone/50 hover:bg-sandstone/80"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button 
              onClick={nextTestimonial} 
              variant="outline"
              size="icon"
              className="border-sandstone text-sandstone hover:bg-sandstone/10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
