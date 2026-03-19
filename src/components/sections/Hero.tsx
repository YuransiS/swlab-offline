"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Calendar } from "lucide-react";

export function Hero() {
  const transition = { type: "spring" as const, stiffness: 100, damping: 20 };

  return (
    <section className="relative min-h-[100svh] md:min-h-[85vh] flex flex-col justify-end md:justify-center bg-[#0F172A] overflow-hidden">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-80"
          src="/hero-video.mp4"
        />
        {/* Gradients for readability */}
        {/* Mobile: Strong gradient from bottom so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/90 to-transparent md:hidden" />
        {/* Desktop: Gradient from left to right */}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#0F172A] via-[#0F172A]/80 to-transparent" />
        {/* Overall subtle darkening overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="container relative z-10 px-4 md:px-8 max-w-[1280px] mx-auto flex flex-col items-start justify-end md:justify-center min-h-[100svh] md:min-h-0 pb-12 md:pb-0">
        
        <div className="flex-none flex flex-col items-start text-left w-full max-w-2xl mt-auto md:mt-0">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/10 backdrop-blur-md text-white border border-white/20 text-xs sm:text-sm font-bold uppercase tracking-wide">
              <Calendar size={16} className="text-[var(--color-accent)]" /> 4 АПРЕЛЯ | ВАРШАВА | УЧАСТИЕ БЕСПЛАТНО
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] mb-6"
          >
            ДЕНЬ ОТКРЫТЫХ ДВЕРЕЙ <span className="text-[var(--color-accent)] whitespace-nowrap">SW LAB</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-[540px] mb-10 leading-relaxed font-medium"
          >
            Покажем вживую, как зарабатывать <span className="text-white font-bold">от 500 злотых чистыми в день</span> на оконном сервисе и полировке стекла. Получи востребованную профессию: приходи, смотри, задавай вопросы.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.3 }}
            className="flex flex-col items-start w-full sm:w-auto"
          >
            <Button
              className="w-full sm:w-auto text-base sm:text-lg font-bold px-10 py-6 bg-[var(--color-accent)] hover:bg-red-700 text-white border-none shadow-[0_0_30px_rgba(220,38,38,0.3)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(220,38,38,0.5)] uppercase tracking-wide"
              onClick={() => {
                window.dispatchEvent(new Event('open-lead-form'));
              }}
            >
              Забронировать место
            </Button>
            
            <p className="mt-5 flex items-center gap-2 text-sm font-medium text-gray-400">
              Количество мест ограничено. Только живое участие.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
