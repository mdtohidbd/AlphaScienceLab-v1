"use client";

import { motion } from "framer-motion";
import { Cpu, Activity, Zap, ShieldAlert, Sparkles, Orbit } from "lucide-react";

export default function InnovationHub() {
  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#7F3DFF]/20 via-[#FF00D6]/15 to-[#3D7FFF]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1254px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-2.5 h-2.5 bg-[#FF00D6] rounded-full animate-ping" />
          <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
            Next-Gen R&D Platform
          </span>
        </div>

        {/* High-Tech Innovation Hub Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#120726]/90 backdrop-blur-2xl border-2 border-[#B578FF]/40 rounded-[32px] p-8 md:p-12 overflow-hidden shadow-[0_0_80px_rgba(181,120,255,0.25)]"
        >
          {/* Top Corner Decorative Tech Markers */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#00F0FF] rounded-tl-[32px]" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#FF00D6] rounded-tr-[32px]" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#FF00D6] rounded-bl-[32px]" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#00F0FF] rounded-br-[32px]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Panel Info & Headings */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF00D6]/10 border border-[#FF00D6]/40 text-[#FF00D6] text-xs font-black uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                Live Laboratory Telemetry
              </div>

              <div>
                <h2 className="text-3xl md:text-5xl font-black font-display text-white uppercase tracking-tight leading-tight">
                  ASL INNOVATION <span className="text-[#FF00D6]">HUB</span>
                </h2>
                <h3 className="text-xl md:text-2xl font-bold font-tech text-[#00F0FF] mt-2 tracking-wide flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#00F0FF]" />
                  Project: Nebula-9
                </h3>
              </div>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl font-sans">
                Pioneering breakthroughs in RISC-V custom microarchitectures, VLSI chip design, and autonomous robotic control. Our Innovation Hub accelerates quantum-inspired computing models and edge AI hardware integration.
              </p>

              {/* Status Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-black/40 border border-white/10 rounded-2xl p-4 backdrop-blur-md">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-[#00F0FF]" />
                    Core Frequency
                  </div>
                  <div className="text-xl font-black font-tech text-white">4.85 GHz</div>
                </div>

                <div className="bg-black/40 border border-white/10 rounded-2xl p-4 backdrop-blur-md">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-[#FF00D6]" />
                    Node Tech
                  </div>
                  <div className="text-xl font-black font-tech text-white">3nm FinFET</div>
                </div>

                <div className="bg-black/40 border border-white/10 rounded-2xl p-4 backdrop-blur-md col-span-2 sm:col-span-1">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Orbit className="w-3.5 h-3.5 text-[#B578FF]" />
                    Status
                  </div>
                  <div className="text-xl font-black font-tech text-[#00F0FF] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-ping" />
                    ONLINE
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Pulsating Glowing Sphere Graphic */}
            <div className="lg:col-span-6 flex items-center justify-center relative py-8">
              <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                
                {/* Outer Rotating Glowing Tech Rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-dashed border-[#00F0FF]/40 shadow-[0_0_30px_rgba(0,240,255,0.2)]"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-3 rounded-full border border-dotted border-[#FF00D6]/40"
                />

                {/* Central Pulsating Orb */}
                <motion.div
                  animate={{ scale: [0.92, 1.08, 0.92], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-44 h-44 md:w-56 md:h-56 rounded-full bg-gradient-to-tr from-[#FF00D6] via-[#7F3DFF] to-[#00F0FF] p-1 shadow-[0_0_80px_rgba(255,0,214,0.6)] flex items-center justify-center"
                >
                  <div className="w-full h-full rounded-full bg-[#0B0418] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-radial-glow opacity-50" />
                    <Orbit className="w-10 h-10 text-[#00F0FF] animate-spin mb-2 relative z-10" style={{ animationDuration: "12s" }} />
                    <span className="text-xs font-black font-tech text-white uppercase tracking-widest relative z-10">
                      QUANTUM CORE
                    </span>
                    <span className="text-[10px] font-bold text-[#FF00D6] uppercase tracking-wider relative z-10 mt-1">
                      NEBULA-9
                    </span>
                  </div>
                </motion.div>

                {/* Floating Orbiting Data Labels */}
                <div className="absolute top-2 left-0 bg-black/80 border border-[#00F0FF]/50 px-3 py-1 rounded-full text-[10px] font-tech text-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                  LATENCY: 0.12ms
                </div>
                <div className="absolute bottom-4 right-0 bg-black/80 border border-[#FF00D6]/50 px-3 py-1 rounded-full text-[10px] font-tech text-[#FF00D6] shadow-[0_0_15px_rgba(255,0,214,0.4)]">
                  ACCURACY: 99.98%
                </div>
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 bg-black/80 border border-[#B578FF]/50 px-3 py-1 rounded-full text-[10px] font-tech text-[#B578FF] shadow-[0_0_15px_rgba(181,120,255,0.4)] hidden sm:block">
                  RISC-V ACCELERATED
                </div>

              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
