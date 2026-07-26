"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FiSun, FiMoon, FiGlobe, FiMenu, FiX } from "react-icons/fi";
import { useLanguage } from "../i18n";

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const { language, t, toggleLanguage } = useLanguage();

    const navLinks = [
        { name: t.nav.about, href: "#about" },
        { name: t.nav.skills, href: "#skills" },
        { name: t.nav.projects, href: "#projects" },
        { name: t.nav.experience, href: "#experience" },
        { name: t.nav.contact, href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        if (storedTheme) {
            setTheme(storedTheme);
            document.documentElement.setAttribute("data-theme", storedTheme);
        } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
            document.documentElement.setAttribute("data-theme", "dark");
        }
    }, []);

    const toggleTheme = () => {
        const nextTheme = theme === "light" ? "dark" : "light";
        setTheme(nextTheme);
        document.documentElement.setAttribute("data-theme", nextTheme);
        localStorage.setItem("theme", nextTheme);
    };

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md bg-[var(--bg-primary)]/80 border-b border-[var(--border-subtle)] ${
                isScrolled ? "py-3 shadow-xs" : "py-4"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Brand Logo with Circular Avatar */}
                <a
                    href="#hero"
                    className="flex items-center gap-3 text-[var(--text-primary)] hover:opacity-85 transition-opacity"
                    onClick={handleLinkClick}
                >
                    <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[var(--border-subtle)] bg-[var(--accent-mint-light)] flex-shrink-0">
                        <Image
                            src="/profile.webp"
                            alt="Neuro.Dev avatar"
                            fill
                            sizes="36px"
                            className="object-cover"
                        />
                    </div>
                    <span className="font-serif-editorial font-bold text-xl tracking-tight">
                        Neuro.Dev
                    </span>
                </a>

                {/* Desktop Menu Links */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 text-sm font-medium relative py-1 group"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--accent-mint)] group-hover:w-full transition-all duration-300 rounded-full"></span>
                        </a>
                    ))}
                </nav>

                {/* Utility Controls & CTA - Desktop */}
                <div className="hidden md:flex items-center gap-3">
                    {/* Language Switcher */}
                    <button
                        onClick={toggleLanguage}
                        className="btn-pill-secondary !py-1.5 !px-3 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5"
                        aria-label="Toggle language"
                    >
                        <FiGlobe className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                        <span className={language === "en" ? "text-[var(--text-primary)] font-bold" : "text-[var(--text-muted)]"}>EN</span>
                        <span className="text-[var(--text-muted)]">/</span>
                        <span className={language === "vi" ? "text-[var(--text-primary)] font-bold" : "text-[var(--text-muted)]"}>VI</span>
                    </button>

                    {/* Dark/Light Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="btn-pill-secondary !py-1.5 !px-3 text-xs font-semibold flex items-center gap-1.5"
                        aria-label="Toggle theme"
                    >
                        {theme === "dark" ? (
                            <>
                                <FiSun className="w-3.5 h-3.5 text-amber-400" />
                                <span className="text-[var(--text-secondary)]">Light</span>
                            </>
                        ) : (
                            <>
                                <FiMoon className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
                                <span className="text-[var(--text-secondary)]">Dark</span>
                            </>
                        )}
                    </button>

                    {/* Main CTA Button */}
                    <a
                        href="#contact"
                        className="btn-pill-primary text-sm py-2 px-5 font-semibold ml-1"
                    >
                        {t.nav.contactNow}
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-2">
                    {/* Language Toggle Mobile */}
                    <button
                        onClick={toggleLanguage}
                        className="btn-pill-secondary !py-1.5 !px-2.5 text-xs font-bold uppercase"
                        aria-label="Toggle language"
                    >
                        {language === "vi" ? "EN" : "VI"}
                    </button>

                    {/* Theme Toggle Mobile */}
                    <button
                        onClick={toggleTheme}
                        className="btn-pill-secondary !py-1.5 !px-2.5 text-xs font-medium"
                        aria-label="Toggle theme"
                    >
                        {theme === "dark" ? <FiSun className="w-4 h-4 text-amber-400" /> : <FiMoon className="w-4 h-4" />}
                    </button>

                    {/* Menu Drawer Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="btn-pill-secondary !py-2 !px-3 text-[var(--text-primary)]"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-[var(--border-subtle)] bg-[var(--bg-card)] px-6 py-6 mt-3 shadow-lg flex flex-col gap-4">
                    <nav className="flex flex-col gap-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={handleLinkClick}
                                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium text-base py-1 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className="pt-2 border-t border-[var(--border-subtle)] flex flex-col gap-3">
                        <a
                            href="#contact"
                            onClick={handleLinkClick}
                            className="btn-pill-primary justify-center text-center text-sm py-2.5 w-full font-semibold"
                        >
                            {t.nav.contactNow}
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
