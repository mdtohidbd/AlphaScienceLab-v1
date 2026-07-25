"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { usePreloader } from "./PreloaderContext";

/* Splits a string into individual letter <span>s */
function SplitText({ text, className }: { text: string; className?: string }) {
    return (
        <>
            {text.split("").map((char, i) => (
                <span
                    key={i}
                    className={`letter-char ${className ?? ""}`}
                    style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
                >
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
        </>
    );
}

const PROJECT_CATEGORIES = [
    { name: "VLSI and Semiconductor", href: "/projects/vlsi" },
    { name: "Hardware, PCB & Embedded Systems", href: "/projects/hardware" },
    { name: "Robotics & Automation", href: "/projects/robotics" },
    { name: "Software & Web Development", href: "/projects/software" },
    { name: "Structural Analysis", href: "/projects/structural" },
    { name: "2D and 3D Design", href: "/projects/design" },
    { name: "Research, Innovation & Documentation", href: "/projects/research" },
    { name: "All Projects", href: "/projects/all" }
];

const TEAM_CATEGORIES = [
    { name: "Members", href: "/#members" },
    { name: "Executives", href: "/#executives" },
    { name: "Alumni", href: "/#alumni" },
    { name: "Photo Gallery", href: "/#photo-gallery" }
];

export default function Hero() {
    const container = useRef<HTMLDivElement>(null);
    const [activeGrid, setActiveGrid] = useState<"projects" | "team" | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const { preloaderFinished } = usePreloader();

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const handleInteraction = (type: "projects" | "team" | null) => {
        setActiveGrid(type);
    };

    useGSAP(
        () => {
            if (!container.current) return;
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.fromTo(
                "#word-alpha",
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.8 }
            ).fromTo(
                ".hero-btn",
                { opacity: 0, scale: 0.9 },
                { opacity: 1, scale: 1, stagger: 0.15, duration: 0.6 },
                "-=0.4"
            );
        },
        { scope: container, dependencies: [preloaderFinished] }
    );

    return (
        <section
            ref={container}
            suppressHydrationWarning
            className="relative w-full min-h-screen bg-transparent overflow-hidden"
        >
            {/* ── 1. High-Tech Background Image & Quantum Chamber Render ── */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero_quantum_chamber.png"
                    alt="ASL Quantum Chamber Laboratory"
                    fill
                    className="object-cover object-right opacity-90"
                    priority
                />

                {/* Subtle dark gradient vignetting to keep text ultra readable */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A041A] via-[#0A041A]/75 to-transparent md:w-[65%]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A041A] via-transparent to-[#0A041A]/40" />

                {/* Left Background Neon Orbital Ring (Matching input_file_0.png) */}
                <div className="absolute top-1/2 left-[-10vw] -translate-y-1/2 w-[55vw] h-[55vw] rounded-full border-2 border-[#00F0FF]/35 shadow-[0_0_100px_rgba(0,240,255,0.3)] pointer-events-none hidden md:block" />
                <div className="absolute top-1/2 left-[-8vw] -translate-y-1/2 w-[50vw] h-[50vw] rounded-full border border-dashed border-[#FF00D6]/30 pointer-events-none hidden md:block" />
                
                {/* Magenta Energy Glow Behind Title */}
                <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-[#FF00D6] rounded-full blur-[180px] opacity-25 pointer-events-none" />
            </div>

            {/* ── 2. Main Content Container ── */}
            <div
                className="relative flex flex-col items-start justify-center text-left z-10 w-full max-w-[1440px] mx-auto min-h-screen px-6 sm:px-12 lg:px-20 pt-28 pb-16"
            >
                {/* Headline Block */}
                <div className="flex flex-col items-start w-full space-y-2 mb-6">
                    
                    {/* Top Tag: ALPHA + Bakbak One Font Label */}
                    <div className="flex flex-wrap items-baseline gap-4">
                        <h1
                            id="word-alpha"
                            className="font-display font-black uppercase text-white tracking-tight leading-none text-5xl sm:text-7xl md:text-8xl lg:text-9xl drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                        >
                            <SplitText text="ALPHA" />
                        </h1>
                        <span className="font-tech text-xs sm:text-sm font-bold uppercase tracking-widest text-[#00F0FF] px-3 py-1 bg-[#00F0FF]/10 border border-[#00F0FF]/40 rounded-full shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                            Bakbak One
                        </span>
                    </div>

                    {/* Row 2: SCIENCE + LAB (with vibrant Magenta text) */}
                    <div className="flex flex-wrap items-baseline gap-4 sm:gap-6">
                        <h1
                            id="word-science"
                            className="font-display font-black uppercase text-white tracking-tight leading-none text-5xl sm:text-7xl md:text-8xl lg:text-9xl drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                        >
                            <SplitText text="SCIENCE" />
                        </h1>
                        <h1
                            id="word-lab"
                            className="font-display font-black uppercase text-[#FF00D6] tracking-tight leading-none text-5xl sm:text-7xl md:text-8xl lg:text-9xl drop-shadow-[0_0_40px_rgba(255,0,214,0.6)]"
                        >
                            <SplitText text="LAB" />
                        </h1>
                    </div>
                </div>

                {/* Subtitle Telemetry Line */}
                <div className="w-full max-w-2xl border-t border-b border-white/10 py-3 my-4 backdrop-blur-md bg-black/20 rounded-xl px-4">
                    <p className="font-tech text-xs sm:text-sm md:text-base text-slate-300 tracking-wide uppercase flex items-center justify-between flex-wrap gap-2">
                        <span>Transformative Scientific Innovations</span>
                        <span className="text-[#00F0FF] font-bold">/ High Quantum Throughput</span>
                    </p>
                </div>

                {/* CTA Buttons ("Explore Now" and "Meet More") */}
                <div className="flex items-center gap-4 sm:gap-6 mt-8 flex-wrap">
                    <button
                        className="hero-btn glass-btn font-sans font-black uppercase tracking-widest text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full text-sm sm:text-base bg-white/10 border-2 border-white/40 hover:border-[#00F0FF] shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:shadow-[0_0_50px_rgba(0,240,255,0.6)] transition-all cursor-pointer"
                        onMouseEnter={() => !isMobile && handleInteraction("projects")}
                        onMouseLeave={() => !isMobile && handleInteraction(null)}
                    >
                        Explore Now
                    </button>

                    <button
                        className="hero-btn glass-btn font-sans font-black uppercase tracking-widest text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full text-sm sm:text-base bg-[#FF00D6]/10 border-2 border-[#FF00D6]/50 hover:border-[#FF00D6] shadow-[0_0_30px_rgba(255,0,214,0.4)] hover:shadow-[0_0_50px_rgba(255,0,214,0.7)] transition-all cursor-pointer"
                        onMouseEnter={() => !isMobile && handleInteraction("team")}
                        onMouseLeave={() => !isMobile && handleInteraction(null)}
                    >
                        Meet More
                    </button>
                </div>

                {/* Popover Category Grid */}
                <div
                    className={`w-full max-w-4xl mt-8 bg-[#0C051E]/95 backdrop-blur-2xl border border-[#FF00D6]/40 rounded-2xl overflow-hidden transition-all duration-500 shadow-[0_0_50px_rgba(255,0,214,0.25)] ${activeGrid ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" : "opacity-0 -translate-y-4 scale-95 pointer-events-none hidden"}`}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        {(activeGrid === "projects" ? PROJECT_CATEGORIES : TEAM_CATEGORIES).map((cat, i) => (
                            <Link
                                key={i}
                                href={cat.href}
                                className="p-6 flex items-center justify-center text-center font-tech text-sm font-bold uppercase tracking-wider text-white hover:bg-[#FF00D6]/15 hover:text-[#00F0FF] transition-colors border-b border-r border-white/10"
                            >
                                {cat.name}
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
