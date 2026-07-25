"use client";

import { useRef } from "react";
import NextImage from "next/image";
import { ArrowUpRight } from "lucide-react";
import BackgroundGlow from "./BackgroundGlow";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

const stories = [
    {
        title: "Meet Team ASL Bravo",
        desc: "Our team ASL Bravo just finished an amazing bachelor project. Innovating in VLSI and Robotics with state-of-the-art solutions.",
        tag: "Recent Stories",
        image: "/projects/storySlider.png"
    },
    {
        title: "CPU Instruction Set",
        desc: "Implementation of custom CPU instruction set for the Alpha-A1 processor. A deep dive into microarchitecture.",
        tag: "Technical",
        image: "/projects/storySlider.png"
    },
    {
        title: "Robotics Breakthrough",
        desc: "Our latest robotics platform achieved autonomous navigation in complex environments using neural vision.",
        tag: "Research",
        image: "/projects/storySlider.png"
    },
    {
        title: "Semiconductor Future",
        desc: "Exploring the next generation of semiconductor materials for high-efficiency power electronics.",
        tag: "Innovation",
        image: "/projects/storySlider.png"
    }
];

export default function Stories() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={containerRef} className="py-24 relative bg-transparent overflow-visible">
            <BackgroundGlow />
            <div className="max-w-[1254px] mx-auto relative z-10 px-6 xl:px-0">
                <div className="flex items-center gap-4 mb-16">
                    <div className="w-2 h-2 bg-[#7F3DFF] rounded-full" />
                    <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">Recent stories</h2>
                </div>

                <div className="w-full relative">
                    <ScrollStack 
                        useWindowScroll={true} 
                        itemDistance={480} 
                        itemScale={0.025} 
                        itemStackDistance={36} 
                        stackPosition="12%"
                        scaleEndPosition="5%"
                        baseScale={0.92} 
                        blurAmount={0}
                        rotationAmount={0}
                    >
                        {stories.map((story, idx) => (
                            <ScrollStackItem
                                key={idx}
                                itemClassName="!h-auto min-h-[380px] md:!h-[410px] lg:!h-[430px] !p-5 md:!p-[24px] lg:!p-[28px] !bg-[#1E0D36] !rounded-[24px] !border-[2px] !border-[#B578FF]/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col md:flex-row gap-6 md:gap-[32px] justify-between items-center overflow-hidden"
                            >
                                {/* Left: Text Content Section */}
                                <div className="flex-1 min-w-0 flex flex-col justify-between py-1 md:py-[10px] pl-0 md:pl-[24px] lg:pl-[36px] self-stretch">
                                    <div>
                                        <span className="inline-block text-[11px] font-black uppercase tracking-[0.25em] text-[#B578FF] mb-3">
                                            {story.tag}
                                        </span>
                                        <h3 className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-bold font-sans mb-3 md:mb-5 tracking-[-0.01em] uppercase leading-[1.15] text-white whitespace-normal break-normal">
                                            {story.title}
                                        </h3>
                                        <p className="text-white/80 text-[14px] md:text-[16px] lg:text-[17px] font-normal leading-[1.55] max-w-md">
                                            {story.desc}
                                        </p>
                                    </div>
                                    
                                    <div className="flex items-center gap-2 text-white font-medium text-[15px] md:text-[18px] cursor-pointer group mt-4 md:mt-0">
                                        Read more
                                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </div>
                                </div>

                                {/* Right: Image Section */}
                                <div className="w-full md:w-[48%] lg:w-[52%] h-[200px] md:h-[350px] lg:h-[370px] relative rounded-[14px] overflow-hidden flex-shrink-0">
                                    <NextImage
                                        src={story.image}
                                        alt={story.title}
                                        fill
                                        className="object-cover"
                                    />
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent via-[#1E0D36]/10 to-[#1E0D36]/40" />

                                    {/* High-Tech Badge Overlay from UI mockup */}
                                    <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md border border-[#00F0FF]/50 px-4 py-2 rounded-xl flex flex-col items-end shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-[#00F0FF]">
                                            RISC-V CONTEST
                                        </span>
                                        <span className="text-sm font-black font-display text-white uppercase tracking-tighter">
                                            GLOBALLY SECOND
                                        </span>
                                    </div>
                                </div>
                            </ScrollStackItem>
                        ))}
                    </ScrollStack>
                </div>
            </div>
        </section>
    );
}

