"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { User, Phone, Check, X } from "lucide-react";
import { useState, useEffect } from "react";

export function LeadForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const transition = { type: "spring" as const, stiffness: 100, damping: 20 };

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-lead-form', handleOpen);
    return () => window.removeEventListener('open-lead-form', handleOpen);
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Reset success state after closing
      if (success) {
        setTimeout(() => setSuccess(false), 500);
      }
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, success]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-[#0F172A]/40 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={transition}
            className="bg-white p-8 md:p-10 rounded-[2rem] shadow-2xl border border-gray-100 max-w-md w-full relative z-10 max-h-[90vh] overflow-y-auto"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors p-2 bg-gray-50 hover:bg-gray-100 rounded-full"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--color-heading)] tracking-tight mb-3">
                Оставьте заявку на участие
              </h2>
              <p className="text-[#475569] text-sm md:text-base leading-relaxed">
                Офис имеет ограниченную вместимость. После заявки менеджер перезвонит вам для подтверждения участия.
              </p>
            </div>

            {!success ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <User size={20} />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Имя"
                    className="w-full bg-white border border-gray-200 rounded-xl py-4 pl-12 pr-4 text-[var(--color-heading)] placeholder:text-gray-400 outline-none focus:border-red-300 focus:ring-4 focus:ring-red-100 transition-all duration-300 shadow-sm"
                  />
                </div>

                <div className="relative flex items-stretch">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 z-10">
                    <Phone size={20} />
                  </div>
                  <div className="bg-gray-50 border border-gray-200 border-r-0 rounded-l-xl py-4 pl-12 pr-3 text-[var(--color-heading)] font-semibold flex items-center">
                    +48
                  </div>
                  <input
                    type="tel"
                    required
                    placeholder="Номер телефона"
                    className="w-full bg-white border border-gray-200 rounded-r-xl py-4 px-4 text-[var(--color-heading)] placeholder:text-gray-400 outline-none focus:border-red-300 focus:ring-4 focus:ring-red-100 transition-all duration-300 border-l-0 shadow-sm"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 text-base py-4 rounded-xl"
                >
                  {isSubmitting ? "Отправка..." : "ИДУ НА ВСТРЕЧУ"}
                </Button>

                <p className="text-center text-gray-400 text-xs mt-1 font-medium">
                  Мы гарантируем безопасность ваших данных.
                </p>
              </form>
            ) : (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }} 
                 animate={{ opacity: 1, scale: 1 }}
                 className="text-center py-6"
               >
                 <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-5">
                   <Check size={32} />
                 </div>
                 <h3 className="text-2xl font-extrabold text-[var(--color-heading)] mb-2">Заявка принята</h3>
                 <p className="text-[#475569] text-base">Мы свяжемся с вами в ближайшее время для подтверждения участия.</p>
               </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
