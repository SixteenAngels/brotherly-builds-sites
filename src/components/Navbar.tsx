
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Building, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-wide py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Building className="h-8 w-8 text-terracotta" />
            <span className="text-2xl font-heading font-bold text-navy">
              HOLTS
              <span className="text-terracotta">BROTHER</span>
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-navy hover:text-terracotta font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Button className="ml-4 bg-terracotta hover:bg-terracotta/90 text-white">
              Get a Quote
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden",
            isMenuOpen ? "block" : "hidden"
          )}
        >
          <div className="pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-navy hover:text-terracotta font-medium transition-colors"
                onClick={toggleMenu}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2">
              <Button className="w-full bg-terracotta hover:bg-terracotta/90 text-white">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
