"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "../i18n";

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language, t, toggleLanguage } = useLanguage();

    const navLinks = [
        { name: t.nav.home, href: "#hero" },
        { name: t.nav.skills, href: "#skills" },
        { name: t.nav.experience, href: "#experience" },
        { name: t.nav.projects, href: "#projects" },
        { name: t.nav.contact, href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? "py-3 bg-[rgba(11,21,36,0.78)] backdrop-blur-md border-b border-[var(--glass-border)]"
                    : "py-5 bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#hero"
                    className="text-2xl font-bold text-[var(--primary-blue)]"
                    onClick={handleLinkClick}
                >
                    Neuro.Dev
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-[var(--text-secondary)] hover:text-white transition-colors duration-300 text-sm font-medium relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary-blue)] group-hover:w-full transition-all duration-300"></span>
                        </a>
                    ))}
                </div>

                {/* Language Toggle & CTA - Desktop */}
                <div className="hidden md:flex items-center gap-4">
                    {/* Language Toggle */}
                    <button
                        onClick={toggleLanguage}
                        className="glass-pill flex items-center gap-2 text-sm font-medium hover:bg-[var(--glass-bg-light)] transition-all"
                        aria-label="Toggle language"
                    >
                        <span className={language === "vi" ? "text-[var(--primary-cyan)]" : "text-[var(--text-muted)]"}>
                            VI
                        </span>
                        <span className="text-[var(--text-muted)]">/</span>
                        <span className={language === "en" ? "text-[var(--primary-cyan)]" : "text-[var(--text-muted)]"}>
                            EN
                        </span>
                    </button>

                    <a href="#contact" className="btn-primary text-sm py-3 px-6">
                        <span>{t.nav.contactNow}</span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-3">
                    {/* Language Toggle - Mobile */}
                    <button
                        onClick={toggleLanguage}
                        className="glass w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold"
                        aria-label="Toggle language"
                    >
                        {language === "vi" ? "EN" : "VI"}
                    </button>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 glass rounded-xl"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                                }`}
                        ></span>
                        <span
                            className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""
                                }`}
                        ></span>
                        <span
                            className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                        ></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-full left-0 right-0 glass-light mx-4 mt-2 rounded-2xl overflow-hidden transition-all duration-500 ${isMobileMenuOpen
                        ? "max-h-[400px] opacity-100"
                        : "max-h-0 opacity-0 pointer-events-none"
                    }`}
            >
                <div className="p-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={handleLinkClick}
                            className="text-[var(--text-secondary)] hover:text-white transition-colors duration-300 text-base font-medium py-2"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={handleLinkClick}
                        className="btn-primary text-center mt-2"
                    >
                        <span>{t.nav.contactNow}</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}
