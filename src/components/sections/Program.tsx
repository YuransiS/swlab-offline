"use client";

import { motion } from "framer-motion";

export function Program() {
  const transition = { type: "spring" as const, stiffness: 100, damping: 20 };

  const agenda = [
    {
      step: "01",
      title: "Финансы",
      description: "Сколько реально можно зарабатывать и какие вложения нужны на старте?"
    },
    {
      step: "02",
      title: "Система",
      description: "Как устроены процессы работы компании изнутри?"
    },
    {
      step: "03",
      title: "Маркетинг",
      description: "Откуда стабильно берутся клиенты в Европе?"
    },
    {
      step: "04",
      title: "Анализ",
      description: "Кому идеально подходит эта модель, а кому нет?"
    }
  ];

  return (
    <section className="py-24 md:py-32 relative bg-white">
      <div className="container px-4 md:px-8 max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transition}
          className="mb-16 md:mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-heading)] tracking-tight mb-4">
            Что мы покажем на <span className="text-[var(--color-accent)]">встрече</span>?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative">
          {agenda.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...transition, delay: index * 0.1 }}
              className="bg-[#F9FAFB] rounded-2xl p-8 md:p-10 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="text-5xl md:text-6xl font-black text-gray-200 group-hover:text-[var(--color-accent)] transition-colors duration-300 mb-6">
                {item.step}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[var(--color-heading)] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#475569] text-base md:text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
