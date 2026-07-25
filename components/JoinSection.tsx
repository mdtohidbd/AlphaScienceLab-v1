"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function JoinSection() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".join-box", {
            opacity: 0,
            y: 40,
            duration: 1,
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            }
        });
    }, { scope: container });

    return (
        <section ref={container} id="about" className="py-16 sm:py-20 lg:py-24 relative bg-transparent">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="join-box max-w-4xl mx-auto p-8 sm:p-14 lg:p-20 bg-[#120726]/90 border-2 border-[#B578FF]/40 rounded-[28px] sm:rounded-[40px] relative overflow-hidden shadow-[0_0_60px_rgba(181,120,255,0.3)]">
                    {/* Background glow */}
                    <div className="absolute -top-24 -left-24 w-72 h-72 sm:w-96 sm:h-96 bg-[#FF00D6]/20 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute -bottom-24 -right-24 w-72 h-72 sm:w-96 sm:h-96 bg-[#00F0FF]/20 rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative z-10 text-center space-y-6">
                        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tighter uppercase leading-tight text-white">
                            JOIN THE <span className="text-[#FF00D6]">INNER CIRCLE</span>
                        </h2>
                        <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                            Get early access to breakthrough research, custom RISC-V releases, and exclusive ASL events.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mx-auto pt-4">
                            <input
                                type="email"
                                placeholder="Enter your email address..."
                                className="flex-1 bg-black/60 border border-[#00F0FF]/40 rounded-xl sm:rounded-2xl px-5 sm:px-8 py-4 sm:py-5 text-white text-sm sm:text-base font-medium focus:border-[#00F0FF] focus:shadow-[0_0_20px_rgba(0,240,255,0.4)] outline-none transition-all"
                            />
                            <button onClick={() => window.location.href = '/join'} className="px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#962E9B] to-[#FF00D6] text-white rounded-xl sm:rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,0,214,0.5)] hover:shadow-[0_0_50px_rgba(255,0,214,0.8)] cursor-pointer whitespace-nowrap">
                                Join Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
