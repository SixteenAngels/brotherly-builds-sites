
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this data to a server
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: ""
      });
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="section-padding bg-offwhite">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">
              Get In <span className="text-terracotta">Touch</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Have a project in mind or want to learn more about our services? 
              Contact us today for a free consultation and estimate.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-terracotta rounded-full p-3 mr-4">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-navy">Our Office</h3>
                  <p className="text-gray-600">4908 Birkenhead Ct, Apex, NC 27539</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-terracotta rounded-full p-3 mr-4">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-navy">Phone</h3>
                  <p className="text-gray-600">(561) 295-1110</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-terracotta rounded-full p-3 mr-4">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-navy">Email</h3>
                  <p className="text-gray-600">info@holtbrotherscon.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-terracotta rounded-full p-3 mr-4">
                  <Building className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-navy">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Saturday: By appointment</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-navy">Request a Quote</h3>
            
            {isSubmitted ? (
              <div className="bg-green-50 text-green-800 p-4 rounded-lg">
                <p className="font-semibold">Thank you for contacting us!</p>
                <p>We've received your message and will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                    required
                  >
                    <option value="">Select a Project Type</option>
                    <option value="residential">Residential Construction</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="renovation">Renovation/Remodeling</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project..."
                    rows={4}
                  />
                </div>
                
                <Button type="submit" className="w-full bg-navy hover:bg-navy/90 text-white">
                  Submit Request
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
