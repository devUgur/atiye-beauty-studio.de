"use client";

import { useIsMobile } from "@/hooks/use-is-mobile";
import { Button } from "@/components/ui/Button";

export function MobileExample() {
  const isMobile = useIsMobile();

  return (
    <div className="p-4 bg-brand-sand rounded-lg">
      <h3 className="text-lg font-semibold text-brand-brown-700 mb-4">
        Mobile Detection Example
      </h3>
      <p className="text-brand-brown-600 mb-4">
        Aktuelle Bildschirmgröße: {isMobile ? "Mobile" : "Desktop"}
      </p>
      <Button 
        variant={isMobile ? "default" : "outline"}
        size={isMobile ? "lg" : "default"}
      >
        {isMobile ? "Mobile Button" : "Desktop Button"}
      </Button>
    </div>
  );
}
