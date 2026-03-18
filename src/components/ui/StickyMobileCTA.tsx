"use client";

import { motion, useScroll } from "framer-motion";
import { Button } from "./Button";
import { useEffect, useState } from "react";

export function StickyMobileCTA() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const currentScroll = scrollY.get();
      const documentHeight = document.body.scrollHeight;
      const windowHeight = window.innerHeight;
      
      if (currentScroll > 600 && currentScroll < (documentHeight - windowHeight - 800)) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const unsubscribe = scrollY.on("change", updateVisibility);
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : 100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-0 left-0 right-0 p-4 z-50 md:hidden bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none pb-6"
    >
      <div className="pointer-events-auto">
        <Button 
          className="w-full py-4 text-sm"
          onClick={() => {
            setIsVisible(false);
            window.dispatchEvent(new Event('open-lead-form'));
          }}
        >
          ЗАБРОНИРОВАТЬ
        </Button>
      </div>
    </motion.div>
  );
}
