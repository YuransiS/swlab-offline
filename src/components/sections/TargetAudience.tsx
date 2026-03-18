"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const points = [
  "Для тех, кто хочет открыть свой бизнес в Европе, но боится ошибиться с нишей.",
  "Для тех, кто ищет готовую, проверенную систему с понятным доходом.",
  "Для тех, кто хочет работать на себя, видеть результат своих рук и развивать собственную команду."
];

export function TargetAudience() {
  return (
    <section className="py-24 md:py-32 relative bg-[var(--background)]">
      <div className="container px-4 md:px-6 max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Для кого этот <br className="hidden sm:block" />
            <span className="text-gradient">день открытых дверей?</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="glass p-6 md:p-10 rounded-3xl flex items-start sm:items-center gap-5 md:gap-8 group transition-colors hover:bg-white/5"
            >
              <div className="bg-[var(--color-accent)]/10 text-[var(--color-accent)] p-4 rounded-2xl shrink-0 group-hover:scale-110 group-hover:bg-[var(--color-accent)]/20 transition-all duration-300">
                <Check size={28} strokeWidth={3} />
              </div>
              <p className="text-[#e5e5e5] text-xl md:text-2xl font-medium leading-relaxed">
                {point}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
