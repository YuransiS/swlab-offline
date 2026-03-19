"use client";

import { motion } from "framer-motion";

export function Speakers() {
  const transition = { type: "spring" as const, stiffness: 100, damping: 20 };

  return (
    <section className="py-24 md:py-32 relative bg-gray-50">
      <div className="container px-4 md:px-6 max-w-[1000px] mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transition}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight mb-6">
            Личное знакомство
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            В этот день будут присутствовать основатели компании и эксперты по каждому направлению. Вы сможете увидеть всё своими глазами, задать любые вопросы и выбрать направление по душе.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-center gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...transition, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg mb-6 border-4 border-white">
              <img 
                src="/Alexander_Omelyashko.jpg"
                alt="Александр Омельяшко"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-2xl font-bold text-[#111827] mb-1">Александр Омельяшко</h4>
            <p className="text-gray-500 font-medium text-base">CEO & Founder</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...transition, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg mb-6 border-4 border-white">
              <img 
                src="/Vadzim_Bernat.jpg"
                alt="Вадзим Бернат"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-2xl font-bold text-[#111827] mb-1">Вадзим Бернат</h4>
            <p className="text-gray-500 font-medium text-base">Managing Partner</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
