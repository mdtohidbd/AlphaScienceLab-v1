"use client";

import { motion } from "framer-motion";

/**
 * AnimatedBackground
 * Recreates the exact deep midnight-purple background from the UI mockup image (input_file_0.png),
 * complete with glowing neon orbital rings, vibrant magenta/cyan light blooms, and high-tech Sci-Fi ambiance.
 */
export default function AnimatedBackground() {
    return (
        <div
            aria-hidden="true"
            className="fixed inset-0 pointer-events-none overflow-hidden"
            style={{ zIndex: 0, backgroundColor: "#0A041A" }}
            suppressHydrationWarning
        >
            {/* ── Deep Midnight Purple Base Ambient Gradient ── */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B041A] via-[#0E0524] to-[#0A0418]" />

            {/* ── 1. Top-Left Electric Cyan Ambient Bloom ── */}
            <motion.div
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.35, 0.5, 0.35],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-10vw] left-[-10vw] w-[60vw] h-[60vw] rounded-full blur-[140px]"
                style={{
                    background: "radial-gradient(circle, rgba(0,240,255,0.4) 0%, rgba(61,127,255,0.2) 50%, transparent 75%)",
                }}
            />

            {/* ── 2. Top-Right / Hero Deep Quantum Violet Haze ── */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.6, 0.4],
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-5vw] right-[-5vw] w-[65vw] h-[65vw] rounded-full blur-[150px]"
                style={{
                    background: "radial-gradient(circle, rgba(150,46,155,0.45) 0%, rgba(80,0,144,0.3) 50%, transparent 75%)",
                }}
            />

            {/* ── 3. Mid-Left Neon Magenta Ring & Light Flare (As seen in "OUR RESEARCH AREAS") ── */}
            <div className="absolute top-[38%] left-[-8vw] w-[45vw] h-[45vw] min-w-[320px] min-h-[320px] max-w-[650px] max-h-[650px]">
                {/* Glowing Outer Neon Ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full rounded-full border-2 border-[#FF00D6]/35 shadow-[0_0_90px_rgba(255,0,214,0.4)] relative"
                >
                    <div className="absolute inset-4 rounded-full border border-dashed border-[#00F0FF]/30" />
                </motion.div>

                {/* Magenta Glow Core */}
                <div
                    className="absolute inset-0 rounded-full blur-[100px] pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(255,0,214,0.35) 0%, rgba(127,61,255,0.2) 60%, transparent 80%)" }}
                />
            </div>

            {/* ── 4. Bottom-Left Secondary Neon Light Arc (From image bottom left) ── */}
            <div className="absolute bottom-[-10vw] left-[-5vw] w-[38vw] h-[38vw] min-w-[280px] min-h-[280px]">
                <motion.div
                    animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.5, 0.7, 0.5] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full h-full rounded-full border-[3px] border-[#FF00D6]/40 shadow-[0_0_100px_rgba(255,0,214,0.5)] blur-[2px]"
                />
                <div
                    className="absolute inset-0 rounded-full blur-[110px]"
                    style={{ background: "radial-gradient(circle, rgba(255,0,214,0.3) 0%, transparent 70%)" }}
                />
            </div>

            {/* ── 5. Right-Center Purple Haze behind Stories & Innovation Hub ── */}
            <motion.div
                animate={{
                    y: [0, -30, 0],
                    opacity: [0.35, 0.5, 0.35],
                }}
                transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[50%] right-[-10vw] w-[55vw] h-[55vw] rounded-full blur-[160px]"
                style={{
                    background: "radial-gradient(circle, rgba(127,61,255,0.4) 0%, rgba(255,0,214,0.25) 45%, transparent 75%)",
                }}
            />

            {/* ── 6. Subtle Vignette Shading to unify layout ── */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 20%, rgba(10,4,26,0.3) 70%, rgba(8,3,20,0.7) 100%)",
                }}
            />
        </div>
    );
}
