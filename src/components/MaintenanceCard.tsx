
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const MaintenanceCard = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-fade-in">
      <Card className="w-80 border-gold bg-navy/95 text-white shadow-lg">
        <div className="flex justify-between items-center p-3 border-b border-gold/30">
          <h3 className="font-semibold text-gold">Website Under Maintenance</h3>
          <Button 
            variant="ghost" 
            size="sm"
            className="h-6 w-6 p-0 text-white hover:bg-navy hover:text-gold"
            onClick={() => setIsVisible(false)}
          >
            <X size={16} />
          </Button>
        </div>
        <CardContent className="p-3">
          <p className="text-sm mb-3">We're currently updating our website. Please contact us directly:</p>
          <div className="text-xs space-y-2 text-sandstone">
            <div className="flex flex-col">
              <span className="font-semibold text-gold">Phone:</span>
              <span>(561) 295-1110</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gold">Email:</span>
              <span>info@holtbrotherscon.com</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gold">Address:</span>
              <span>4908 Birkenhead Ct, Apex, NC 27539</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MaintenanceCard;
