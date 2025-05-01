
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filters = [
    { id: "all", name: "All Projects" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
    { id: "renovation", name: "Renovations" }
  ];
  
  const projects = [
    {
      id: 1,
      title: "Modern Family Home",
      category: "residential",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=800&q=80",
      description: "A 3,500 sq ft custom family home with modern amenities and energy-efficient design."
    },
    {
      id: 2,
      title: "Downtown Office Tower",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=800&q=80",
      description: "A 12-story office complex featuring sustainable design and state-of-the-art facilities."
    },
    {
      id: 3,
      title: "Historic Home Renovation",
      category: "renovation",
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=800&q=80",
      description: "Complete restoration of a 1920s craftsman home, preserving historic details while adding modern conveniences."
    },
    {
      id: 4,
      title: "Luxury Apartment Complex",
      category: "residential",
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=800&q=80",
      description: "A 50-unit luxury apartment building with premium finishes and community amenities."
    }
  ];
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">
            Featured <span className="text-terracotta">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our portfolio of completed projects showcasing our expertise
            and commitment to quality craftsmanship.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={cn(
                activeFilter === filter.id 
                  ? "bg-navy text-white" 
                  : "text-navy hover:text-terracotta"
              )}
            >
              {filter.name}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-[300px] object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-navy/10 opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-sandstone mb-4">{project.description}</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-white text-white hover:bg-white hover:text-navy"
                >
                  View Details
                </Button>
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-terracotta text-white text-xs px-3 py-1 rounded-full uppercase font-semibold">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-terracotta hover:bg-terracotta/90 text-white">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
