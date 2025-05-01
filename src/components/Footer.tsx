
import { Building, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building className="h-8 w-8 text-terracotta" />
              <span className="text-2xl font-heading font-bold">
                HOLTS<span className="text-terracotta">BROTHER</span>
              </span>
            </div>
            <p className="text-sandstone mb-6">
              Building excellence and trust since 1998. Your vision, our expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-navy/50 hover:bg-terracotta p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-navy/50 hover:bg-terracotta p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-navy/50 hover:bg-terracotta p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-navy/50 hover:bg-terracotta p-2 rounded-full transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-gold">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sandstone hover:text-terracotta transition-colors">Residential Construction</a></li>
              <li><a href="#" className="text-sandstone hover:text-terracotta transition-colors">Commercial Projects</a></li>
              <li><a href="#" className="text-sandstone hover:text-terracotta transition-colors">Renovations</a></li>
              <li><a href="#" className="text-sandstone hover:text-terracotta transition-colors">Site Development</a></li>
              <li><a href="#" className="text-sandstone hover:text-terracotta transition-colors">Design-Build</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-sandstone hover:text-terracotta transition-colors">Home</a></li>
              <li><a href="#about" className="text-sandstone hover:text-terracotta transition-colors">About Us</a></li>
              <li><a href="#projects" className="text-sandstone hover:text-terracotta transition-colors">Projects</a></li>
              <li><a href="#" className="text-sandstone hover:text-terracotta transition-colors">Careers</a></li>
              <li><a href="#" className="text-sandstone hover:text-terracotta transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-gold">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sandstone">4908 Birkenhead Ct</li>
              <li className="text-sandstone">Apex, NC 27539</li>
              <li className="text-sandstone">Phone: (561) 295-1110</li>
              <li className="text-sandstone">Email: info@holtbrotherscon.com</li>
            </ul>
          </div>
        </div>
        
        <hr className="border-navy-700" />
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sandstone text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Holts Brother Construction. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sandstone hover:text-terracotta text-sm">Privacy Policy</a>
            <a href="#" className="text-sandstone hover:text-terracotta text-sm">Terms of Service</a>
            <a href="#" className="text-sandstone hover:text-terracotta text-sm">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
