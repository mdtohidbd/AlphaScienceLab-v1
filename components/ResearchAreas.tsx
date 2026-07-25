"use client";

import { useRef } from "react";
import NextImage from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import BackgroundGlow from "./BackgroundGlow";

const areas = [
    {
        title: "VLSI & Semiconductor",
        badge: "V. AZAND SPIRIT PROTECTION",
        desc: "Pushing the boundaries of integrated circuit design and semiconductor technology.",
        image: "/projects/VLSI and Semiconductor.png",
        glow: "hover:border-[#00F0FF] hover:shadow-[0_0_50px_rgba(0,240,255,0.4)]",
        badgeBg: "bg-[#00F0FF]/10 text-[#00F0FF] border-[#00F0FF]/40",
        link: "/projects/vlsi",
    },
    {
        title: "Hardware, PCB & Embedded Systems",
        badge: "HARDWARE, PCB & EMBEDDED",
        desc: "Designing robust hardware architectures and high-performance embedded solutions.",
        image: "/projects/Hardware, PCB & Embedded Systems.png",
        glow: "hover:border-[#FF00D6] hover:shadow-[0_0_50px_rgba(255,0,214,0.4)]",
        badgeBg: "bg-[#FF00D6]/10 text-[#FF00D6] border-[#FF00D6]/40",
        link: "/projects/hardware",
    },
    {
        title: "Robotics & Automation",
        badge: "ROBOTICS & AUTOMATION",
        desc: "Innovating in autonomous systems and advanced robotic control mechanisms.",
        image: "/projects/Robotics & Automation.png",
        glow: "hover:border-[#B578FF] hover:shadow-[0_0_50px_rgba(181,120,255,0.4)]",
        badgeBg: "bg-[#B578FF]/10 text-[#B578FF] border-[#B578FF]/40",
        link: "/projects/robotics",
    },
];

export default function ResearchAreas() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            <BackgroundGlow />
            <div className="max-w-[1440px] mx-auto relative z-10">
                <div className="px-[24px] md:px-[108px] mb-12">
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
                        Our Research Areas
                    </h2>
                </div>
                
                <div 
                    ref={containerRef}
                    className="flex gap-[32px] md:gap-[40px] overflow-x-auto pb-12 px-[24px] md:px-[108px] hide-scrollbar snap-x snap-mandatory"
                >
                    {areas.map((area, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`flex-shrink-0 w-[300px] sm:w-[354px] h-[500px] sm:h-[529px] group relative rounded-[30px] overflow-hidden border-[3px] border-[#B578FF]/30 transition-all duration-500 snap-start backdrop-blur-md bg-black/20 ${area.glow}`}
                        >
                            <Link href={area.link || "#"} className="w-full h-full block">
                            <NextImage
                                src={area.image}
                                alt={area.title}
                                fill
                                className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                            <div className="absolute bottom-0 p-8 sm:p-10 space-y-3">
                                <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${area.badgeBg}`}>
                                    {area.badge}
                                </span>
                                <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight leading-tight">
                                    {area.title}
                                </h3>
                                <p className="text-zinc-400 text-xs sm:text-sm uppercase tracking-wider leading-relaxed">
                                    {area.desc}
                                </p>
                            </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
