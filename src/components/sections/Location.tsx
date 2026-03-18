"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Coffee } from "lucide-react";

export function Location() {
  const transition = { type: "spring" as const, stiffness: 100, damping: 20 };

  return (
    <section className="py-24 relative bg-white overflow-hidden">
      <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center bg-gray-50 border border-gray-100 rounded-[2rem] p-8 md:p-12 lg:p-16 shadow-sm">
          
          <div className="w-full lg:w-5/12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={transition}
            >
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-5">
                  <div className="bg-white p-4 rounded-2xl shadow-sm text-blue-600 shrink-0">
                    <MapPin size={28} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm md:text-base tracking-wider mb-1 font-semibold">📍 Где</p>
                    <p className="text-xl md:text-2xl text-[#111827] font-bold">Warszawa, Bieniewicka 26</p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="bg-white p-4 rounded-2xl shadow-sm text-blue-600 shrink-0">
                    <Calendar size={28} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm md:text-base tracking-wider mb-1 font-semibold">🗓 Когда</p>
                    <p className="text-xl md:text-2xl text-[#111827] font-bold">4 Апреля (Суббота)</p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="bg-white p-4 rounded-2xl shadow-sm text-blue-600 shrink-0">
                    <Clock size={28} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm md:text-base tracking-wider mb-1 font-semibold">⏰ Время</p>
                    <p className="text-xl md:text-2xl text-[#111827] font-bold">14:00</p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="bg-white p-4 rounded-2xl shadow-sm text-blue-600 shrink-0">
                    <Coffee size={28} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm md:text-base tracking-wider mb-1 font-semibold">☕ Формат</p>
                    <p className="text-xl md:text-2xl text-[#111827] font-bold">Живое общение + Кофе-брейк</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-7/12 relative z-10 h-[400px] lg:h-auto lg:min-h-[500px]">
             <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.2 }}
              className="absolute inset-0 w-full h-full rounded-[1.5rem] overflow-hidden shadow-lg border border-gray-200"
             >
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2441.2588047970726!2d20.9416597769!3d52.27514305432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecba3a84e36ab%3A0xc3c942ee4edbe1d1!2sBieniewicka%2026%2C%2001-632%20Warszawa!5e0!3m2!1sen!2spl!4v1700000000000!5m2!1sen!2spl" 
                className="absolute top-0 left-0 w-full h-full object-cover"
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
               />
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
