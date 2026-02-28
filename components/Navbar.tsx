"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, Facebook, Instagram } from "lucide-react";

const navLinks = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Shop" },
    { path: "/about", label: "Story" },
    { path: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-4' : 'bg-white border-b border-border py-6'}`}>
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

                    <nav className="hidden lg:flex items-center gap-8 w-1/3">
                        {navLinks.slice(0, 2).map((l) => (
                            <Link
                                key={l.path} href={l.path}
                                className={`text-[11px] font-medium tracking-[0.2em] uppercase transition-colors hover:text-accent ${pathname === l.path || (pathname.startsWith('/products/') && l.path === '/products') ? 'text-accent' : 'text-text-dark'}`}
                            >
                                {l.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex justify-center lg:w-1/3">
                        <Link href="/" className="flex items-center gap-3 text-2xl md:text-3xl font-serif text-[var(--text-dark)] tracking-wider hover:text-[var(--accent)] transition-colors">
                            <img
                                src="/images/Unity_Craft.png"
                                alt="Unity Craft Logo"
                                className=" w-8 h-8 md:w-10 md:h-10 object-contain"
                            />
                            UNITY CRAFT
                        </Link>
                    </div>

                    <div className="flex items-center justify-end gap-6 lg:gap-8 w-1/3">
                        <nav className="hidden lg:flex gap-8">
                            {navLinks.slice(2, 4).map((l) => (
                                <Link
                                    key={l.path} href={l.path}
                                    className={`text-[11px] font-medium tracking-[0.2em] uppercase transition-colors hover:text-accent ${pathname === l.path ? 'text-accent' : 'text-text-dark'}`}
                                >
                                    {l.label}
                                </Link>
                            ))}
                        </nav>

                        <div className="flex items-center gap-4 text-text-dark">
                            <Link href="/products" className="hover:text-accent transition-colors"><Search size={18} /></Link>
                            <button className="lg:hidden hover:text-accent transition-colors" onClick={() => setMenuOpen(true)}>
                                <Menu size={22} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {menuOpen && (
                    <>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMenuOpen(false)} className="fixed inset-0 bg-black/40 z-40" />
                        <motion.div
                            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed top-0 right-0 bottom-0 w-[300px] max-w-[80vw] bg-white z-50 p-8 shadow-2xl flex flex-col"
                        >
                            <div className="flex justify-end mb-12">
                                <button onClick={() => setMenuOpen(false)} className="text-text-dark hover:text-accent"><X size={24} /></button>
                            </div>
                            <nav className="flex flex-col gap-6">
                                {navLinks.map((l) => (
                                    <Link
                                        key={l.path} href={l.path} onClick={() => setMenuOpen(false)}
                                        className={`text-left text-sm font-medium tracking-[0.2em] uppercase transition-colors border-b border-border pb-4 ${pathname === l.path ? 'text-accent' : 'text-text-dark'}`}
                                    >
                                        {l.label}
                                    </Link>
                                ))}
                            </nav>
                            <div className="mt-auto flex gap-4 text-text-dark">
                                <a href="#" className="hover:text-accent"><Facebook size={20} /></a>
                                <a href="#" className="hover:text-accent"><Instagram size={20} /></a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}