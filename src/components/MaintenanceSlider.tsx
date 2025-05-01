
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const MaintenanceSlider = () => {
  const [sliderValue, setSliderValue] = useState<number[]>([0]);
  const [showInfo, setShowInfo] = useState<boolean>(false);

  const handleSliderChange = (value: number[]) => {
    setSliderValue(value);
    if (value[0] > 80) {
      setShowInfo(true);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-8 mb-4">
      <p className="text-white mb-2 text-sm">Slide to view maintenance info</p>
      <div className="relative">
        <Slider
          defaultValue={[0]}
          max={100}
          step={1}
          value={sliderValue}
          onValueChange={handleSliderChange}
          className="h-2.5"
        />
        {showInfo && (
          <div className="bg-navy border border-gold text-white p-4 rounded-md mt-4 animate-fade-in shadow-lg">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold text-gold">Website Under Maintenance</h4>
              <Button 
                variant="ghost" 
                size="sm"
                className="h-6 w-6 p-0 text-white hover:bg-navy hover:text-gold"
                onClick={() => setShowInfo(false)}
              >
                <X size={16} />
              </Button>
            </div>
            <p className="text-sm mb-2">Please contact us directly:</p>
            <div className="text-xs space-y-1 text-sandstone">
              <p>Phone: (561) 295-1110</p>
              <p>Email: joshua.c.holt@holtbrotherscon.com</p>
              <p>Address: 4908 Birkenhead Ct, Apex, NC 27539</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MaintenanceSlider;
