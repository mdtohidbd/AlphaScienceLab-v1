"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

const navLinks = [
    { name: "HOME", href: "/" },
    {
        name: "RESEARCH & DOMAINS",
        href: "#projects",
        dropdown: [
            "VLSI and Semiconductor", "Hardware, PCB & Embedded Systems",
            "Robotics & Automation", "Software & Web Development",
            "Structural Analysis", "2D and 3D Design",
            "Research, Innovation & Documentation", "All Projects"
        ]
    },
    { name: "PROJECTS", href: "#projects" },
    { name: "EVENTS", href: "#events" },
    {
        name: "TEAM",
        href: "#about",
        dropdown: ["Members", "Executives", "Alumni", "Photo Gallery"]
    },
    { name: "ABOUT", href: "#about" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    const isLinkActive = (linkName: string) => {
        if (linkName === "HOME" && pathname === "/") return false;
        if (linkName === "RESEARCH & DOMAINS") return true; // Highlighted matching input_file_0.png
        return false;
    };

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        const checkMobile = () => setIsMobile(window.innerWidth < 768);

        onScroll();
        checkMobile();

        window.addEventListener("scroll", onScroll);
        window.addEventListener("resize", checkMobile);

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    return (
        <header className="fixed top-4 sm:top-6 inset-x-0 z-[100] px-3 sm:px-6 max-w-7xl mx-auto transition-all duration-300">
            {/* Floating Pill Container matching input_file_0.png */}
            <nav
                className={clsx(
                    "w-full rounded-full px-6 sm:px-8 py-3 sm:py-3.5 flex items-center justify-between transition-all duration-300",
                    "bg-[#090C15]/85 backdrop-blur-2xl border border-[#B578FF]/30",
                    "shadow-[0_10px_35px_rgba(0,0,0,0.6),0_0_25px_rgba(181,120,255,0.18)]"
                )}
            >
                {/* Left Logo: ASL */}
                <Link href="/" className="shrink-0 flex items-center gap-2 group">
                    <span className="font-display font-black text-xl sm:text-2xl tracking-wider text-white group-hover:text-[#B578FF] transition-colors">
                        ASL
                    </span>
                </Link>

                {/* Centered Desktop Navigation Links */}
                <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
                    {navLinks.map((link) => {
                        const active = isLinkActive(link.name);
                        return (
                            <li
                                key={link.name}
                                className="relative group"
                                onMouseEnter={() => !isMobile && link.dropdown && setActiveDropdown(link.name)}
                                onMouseLeave={() => !isMobile && setActiveDropdown(null)}
                            >
                                <Link
                                    href={link.href}
                                    className={clsx(
                                        "py-1 text-xs xl:text-sm font-black tracking-[0.15em] uppercase transition-all duration-200 flex items-center gap-1.5 relative",
                                        active ? "text-[#B578FF]" : "text-[#A1ADCD] hover:text-white"
                                    )}
                                >
                                    <span>{link.name}</span>
                                    {link.dropdown && (
                                        <ChevronDown className={clsx("w-3.5 h-3.5 transition-transform duration-200", activeDropdown === link.name && "rotate-180")} />
                                    )}

                                    {/* Active Underline matching input_file_0.png */}
                                    {active ? (
                                        <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-[#B578FF] to-[#FF00D6] shadow-[0_0_10px_rgba(181,120,255,0.8)]" />
                                    ) : (
                                        <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-[#B578FF] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                                    )}
                                </Link>

                                {/* Dropdown Menu */}
                                {link.dropdown && (
                                    <div
                                        className={clsx(
                                            "absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 pointer-events-none z-50",
                                            activeDropdown === link.name
                                                ? "opacity-100 visible translate-y-0 pointer-events-auto"
                                                : "opacity-0 invisible -translate-y-2"
                                        )}
                                    >
                                        <div className="bg-[#0A051A]/95 backdrop-blur-2xl border border-[#B578FF]/40 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(181,120,255,0.25)] w-[320px] p-2">
                                            <div className="flex flex-col gap-1">
                                                {link.dropdown.map((item) => (
                                                    <Link
                                                        key={item}
                                                        href="#projects"
                                                        className="px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-200 hover:bg-[#B578FF]/20 hover:text-white transition-colors"
                                                    >
                                                        {item}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </li>
                        );
                    })}
                </ul>

                {/* Right CTA Button: JOIN ASL */}
                <div className="hidden sm:flex items-center gap-4">
                    <button
                        onClick={() => (window.location.href = "/join")}
                        className="rounded-full px-6 py-2 text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-[#962E9B] via-[#B578FF] to-[#8C4FFF] hover:shadow-[0_0_30px_rgba(181,120,255,0.6)] hover:scale-105 transition-all cursor-pointer shadow-[0_0_18px_rgba(181,120,255,0.4)]"
                    >
                        JOIN ASL
                    </button>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    className="lg:hidden text-white focus:outline-none z-[101]"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-6 h-6 text-[#B578FF]" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            {/* Mobile Drawer Menu */}
            <div
                className={clsx(
                    "fixed inset-0 top-0 flex flex-col items-center justify-center gap-6 transition-all duration-500 lg:hidden z-[99]",
                    isOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
                )}
                style={{
                    background: "rgba(9, 12, 21, 0.96)",
                    backdropFilter: "blur(25px)",
                }}
            >
                <div className="flex flex-col items-center gap-6 w-full max-h-[80vh] overflow-y-auto px-6">
                    {navLinks.map((link) => (
                        <div key={link.name} className="flex flex-col items-center w-full">
                            <Link
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={clsx(
                                    "text-xl font-black uppercase tracking-widest transition-colors",
                                    isLinkActive(link.name) ? "text-[#B578FF]" : "text-white hover:text-[#B578FF]"
                                )}
                            >
                                {link.name}
                            </Link>
                        </div>
                    ))}
                    <button
                        onClick={() => {
                            setIsOpen(false);
                            window.location.href = "/join";
                        }}
                        className="rounded-full px-10 py-3 text-sm font-black uppercase tracking-wider text-white bg-gradient-to-r from-[#962E9B] via-[#B578FF] to-[#8C4FFF] shadow-[0_0_25px_rgba(181,120,255,0.5)] mt-4"
                    >
                        JOIN ASL
                    </button>
                </div>
            </div>
        </header>
    );
}
