
import { cn } from "@/lib/utils";
import { Building, HardHat, Wrench } from "lucide-react";

const About = () => {
  // Calculate current years of experience
  const yearsOfExperience = new Date().getFullYear() - 2015;
  
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80"
                alt="The Brothers"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-terracotta text-white p-6 rounded-lg shadow-lg md:max-w-[200px] hidden md:block">
              <p className="font-bold text-xl">Family Owned Since 2015</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-4 text-navy">
              <span className="text-terracotta">Our Story: </span>
              Brothers United in Craftsmanship
            </h2>
            
            <p className="text-gray-700 mb-6">
              Brothers Built was founded in 2015 by siblings Mike and John Thompson, who shared a passion for construction passed down from their father. What started as a small residential renovation business has grown into one of the region's most trusted construction companies.
            </p>
            
            <p className="text-gray-700 mb-8">
              Our success is built on a simple philosophy: treat every project as if we're building it for our own family. This means uncompromising quality, transparent communication, and a commitment to delivering on time and on budget.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-offwhite p-5 rounded-lg">
                <div className="bg-navy w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <HardHat className="text-gold w-6 h-6" />
                </div>
                <h3 className="font-bold text-navy">Expert Team</h3>
                <p className="text-gray-600 text-sm">Skilled professionals with {yearsOfExperience}+ years of experience</p>
              </div>
              
              <div className="bg-offwhite p-5 rounded-lg">
                <div className="bg-navy w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Wrench className="text-gold w-6 h-6" />
                </div>
                <h3 className="font-bold text-navy">Quality Work</h3>
                <p className="text-gray-600 text-sm">Attention to detail on every project</p>
              </div>
              
              <div className="bg-offwhite p-5 rounded-lg">
                <div className="bg-navy w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Building className="text-gold w-6 h-6" />
                </div>
                <h3 className="font-bold text-navy">Family Values</h3>
                <p className="text-gray-600 text-sm">Integrity and trust in every interaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
