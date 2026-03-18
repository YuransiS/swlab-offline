"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Calendar } from "lucide-react";

export function Hero() {
  const transition = { type: "spring" as const, stiffness: 100, damping: 20 };

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-white overflow-hidden">
      <div className="container px-4 md:px-8 max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        <div className="flex-1 flex flex-col items-start text-left w-full">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#FFF5F5] text-[var(--color-accent)] text-xs font-bold uppercase tracking-wide border border-[#FEE2E2]">
              <Calendar size={14} /> 4 АПРЕЛЯ | ВАРШАВА | УЧАСТИЕ БЕСПЛАТНО
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--color-heading)] leading-[1.1] mb-6 max-w-[800px]"
          >
            Запусти свой прибыльный сервисный бизнес в Европе
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.2 }}
            className="text-base md:text-lg text-[#475569] max-w-[600px] mb-10 leading-relaxed font-medium"
          >
            День открытых дверей SW LAB. Реальные цифры, пошаговая система и личное знакомство с основателями.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.3 }}
            className="flex flex-col items-start w-full sm:w-auto"
          >
            <Button
              className="w-full sm:w-auto text-base px-10 py-5"
              onClick={() => {
                window.dispatchEvent(new Event('open-lead-form'));
              }}
            >
              ЗАБРОНИРОВАТЬ МЕСТО
            </Button>
            
            <p className="mt-4 flex items-center gap-2 text-xs font-medium text-[#64748B]">
              Количество мест ограничено. Только живое участие.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ ...transition, delay: 0.4 }}
          className="flex-1 w-full max-w-2xl lg:max-w-none relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=1200" 
            alt="SW LAB Professional" 
            className="w-full h-full object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}
