"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

export function Niches() {
  const transition = { type: "spring" as const, stiffness: 100, damping: 20 };

  const niches = [
    {
      title: "Ремонт и сервис окон",
      description: "Экстренная помощь в каждом доме. Высокий средний чек и круглогодичный спрос.",
      icon: "🛠️"
    },
    {
      title: "Полировка стекла",
      description: "Премиальная услуга и уникальная технология с минимальной конкуренцией на рынке.",
      icon: "✨"
    }
  ];

  return (
    <section className="py-24 md:py-32 relative bg-[#F9FAFB] border-t border-gray-100">
      <div className="container px-4 md:px-8 max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transition}
          className="mb-16 md:mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-heading)] tracking-tight mb-4">
            Два направления с высокой <span className="text-[var(--color-accent)]">рентабельностью</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {niches.map((niche, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...transition, delay: i * 0.1 }}
              className="h-full"
            >
              <Card
                title={niche.title}
                icon={<span>{niche.icon}</span>}
              >
                {niche.description}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
