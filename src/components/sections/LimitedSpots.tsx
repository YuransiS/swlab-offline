"use client";

import { motion } from "framer-motion";

export function LimitedSpots() {
  const totalSpots = 40;
  const takenSpots = 22; // грубо говоря 20
  const spotsLeft = totalSpots - takenSpots;
  const progressPercentage = (takenSpots / totalSpots) * 100;

  return (
    <section id="spots" className="py-16 md:py-24 relative bg-[var(--background)] overflow-hidden">
      <div className="container px-4 md:px-6 max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-[#0B1120] border border-gray-800"
        >
          {/* Decorative Background Glows */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-[250px] -right-[250px] w-[600px] h-[600px] bg-red-600/20 blur-[120px] rounded-full mix-blend-screen" />
            <div className="absolute -bottom-[250px] -left-[250px] w-[600px] h-[600px] bg-orange-600/15 blur-[120px] rounded-full mix-blend-screen" />
          </div>

          <div className="relative z-10 p-8 sm:p-12 md:p-16 flex flex-col items-center text-center">
            
            <motion.div 
              animate={{ opacity: [1, 0.6, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-500/10 text-red-500 border border-red-500/20 text-xs sm:text-sm font-bold mb-8 uppercase tracking-widest shadow-[0_0_20px_rgba(239,68,68,0.25)] ring-1 ring-red-500/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              Внимание: Места строго ограничены
            </motion.div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.15]">
              Успейте занять <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]">
                своё место
              </span>
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl md:leading-relaxed mb-12 max-w-2xl mx-auto">
              Формат встречи предполагает плотный нетворкинг и персональное внимание к каждому участнику. Поэтому мы можем принять к участию <strong className="text-white font-semibold">ровно {totalSpots} человек</strong>.
            </p>

            {/* Stats Cards Row */}
            <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              
              {/* Taken Spots */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex items-center justify-between text-left group hover:bg-white/[0.08] transition-all duration-300">
                <div className="flex flex-col">
                  <div className="text-gray-400 font-medium text-xs sm:text-sm uppercase tracking-wider mb-2">
                    Уже забронировано
                  </div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-white flex items-baseline gap-2">
                    ~{takenSpots} <span className="text-lg text-gray-500 font-medium">/ {totalSpots}</span>
                  </div>
                </div>
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
              </div>

              {/* Spots Left */}
              <div className="bg-red-500/10 backdrop-blur-md rounded-2xl p-6 border border-red-500/20 flex items-center justify-between text-left group hover:bg-red-500/15 transition-all duration-300 relative overflow-hidden shadow-[inset_0px_0px_20px_rgba(239,68,68,0.05)]">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/5 group-hover:to-red-500/10 transition-colors" />
                <div className="flex flex-col relative z-10 w-full">
                  <div className="text-red-300 font-medium text-xs sm:text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                    Осталось свободных
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                  </div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-white flex items-baseline gap-2">
                    {spotsLeft}
                    <span className="text-lg text-red-200/50 font-medium">мест</span>
                  </div>
                </div>
                <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center relative z-10 group-hover:scale-110 group-hover:bg-red-500/30 transition-all duration-300 flex-shrink-0 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
                    <path d="M13 5v2"/>
                    <path d="M13 17v2"/>
                    <path d="M13 11v2"/>
                  </svg>
                </div>
              </div>

            </div>

            {/* Progress Bar Container */}
            <div className="w-full max-w-3xl">
              <div className="h-4 sm:h-5 w-full bg-gray-900/80 rounded-full overflow-hidden flex shadow-inner relative border border-gray-800">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${progressPercentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-orange-500 via-red-500 to-red-600 relative rounded-r-full shadow-[0_0_15px_rgba(239,68,68,0.5)]"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.15)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] animate-[shimmer_1s_linear_infinite]" />
                </motion.div>
              </div>
              <div className="mt-3 flex justify-between items-center text-xs sm:text-sm font-medium">
                <span className="text-red-400 flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="m17 5-5-3-5 3"/></svg>
                  Больше половины мест забронировано
                </span>
                <span className="text-gray-500 flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/></svg>
                  Мест больше не будет
                </span>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
      <style dangerouslySetInnerHTML={{__html:`
        @keyframes shimmer {
          0% { background-position: 20px 0; }
          100% { background-position: 0 0; }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}}/>
    </section>
  );
}
