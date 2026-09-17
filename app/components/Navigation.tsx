"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FiSun, FiMoon, FiGlobe, FiMenu, FiX } from "react-icons/fi";
import { useLanguage } from "../i18n";

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [activeSection, setActiveSection] = useState<string>("hero");
    const { language, t, toggleLanguage } = useLanguage();
    const isVi = language === "vi";

    const navLinks = [
        { name: t.nav?.home || (isVi ? "Trang chủ" : "Home"), href: "#hero", id: "hero" },
        { name: t.nav?.about || (isVi ? "Giới thiệu" : "About"), href: "#about", id: "about" },
        { name: t.nav?.skills || (isVi ? "Kỹ năng" : "Skills"), href: "#skills", id: "skills" },
        { name: t.nav?.projects || (isVi ? "Dự án" : "Projects"), href: "#projects", id: "projects" },
        { name: t.nav?.experience || (isVi ? "Kinh nghiệm" : "Experience"), href: "#experience", id: "experience" },
        { name: t.nav?.contact || (isVi ? "Liên hệ" : "Contact"), href: "#contact", id: "contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            const sectionIds = ["hero", "about", "skills", "projects", "experience", "contact"];
            const scrollPosition = window.scrollY + 120;

            for (let i = sectionIds.length - 1; i >= 0; i--) {
                const el = document.getElementById(sectionIds[i]);
                if (el) {
                    const top = el.offsetTop;
                    if (scrollPosition >= top) {
                        setActiveSection(sectionIds[i]);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        const resolvedTheme = storedTheme || (prefersDark ? "dark" : "light");

        document.documentElement.setAttribute("data-theme", resolvedTheme);
        requestAnimationFrame(() => {
            setTheme(resolvedTheme);
        });
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md bg-[var(--bg-card)]/80 border-b border-[var(--border-subtle)] ${
                isScrolled ? "py-3 shadow-xs" : "py-4"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Brand Logo: "Phạm Văn Sỹ" + subtle tag "AI & Distributed Systems" */}
                <a
                    href="#hero"
                    className="flex items-center gap-3 text-[var(--text-primary)] group cursor-pointer"
                    onClick={handleLinkClick}
                >
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-card-hover)] shrink-0">
                        <Image
                            src="/profile.webp"
                            alt={t.hero?.name || "Phạm Văn Sỹ"}
                            fill
                            sizes="32px"
                            className="object-cover object-top"
                        />
                    </div>
                    <div className="flex flex-col text-left">
                        <span className="font-bold text-sm sm:text-base tracking-tight text-[var(--text-primary)] leading-tight group-hover:opacity-85 transition-opacity">
                            Phạm Văn Sỹ
                        </span>
                        <span className="text-[10px] sm:text-[11px] font-mono text-[var(--text-muted)] tracking-tight">
                            AI & Distributed Systems
                        </span>
                    </div>
                </a>

                {/* Desktop Nav Links */}
                <nav className="hidden md:flex items-center gap-7">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.id;
                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`text-sm transition-colors duration-200 relative py-1 cursor-pointer ${
                                    isActive
                                        ? "text-[var(--text-primary)] font-semibold"
                                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium"
                                }`}
                            >
                                {link.name}
                                {isActive && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--text-primary)] rounded-full" />
                                )}
                            </a>
                        );
                    })}
                </nav>

                {/* Utility Controls & CTA - Desktop */}
                <div className="hidden md:flex items-center gap-3">
                    {/* Language Switcher */}
                    <button
                        onClick={toggleLanguage}
                        type="button"
                        className="btn-pill-secondary !py-1.5 !px-3 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
                        aria-label="Toggle language"
                    >
                        <FiGlobe className="w-3.5 h-3.5 text-[var(--text-muted)]" aria-hidden="true" />
                        <span className={language === "en" ? "text-[var(--text-primary)] font-bold" : "text-[var(--text-muted)]"}>
                            EN
                        </span>
                        <span className="text-[var(--text-muted)]">/</span>
                        <span className={language === "vi" ? "text-[var(--text-primary)] font-bold" : "text-[var(--text-muted)]"}>
                            VI
                        </span>
                    </button>

                    {/* Dark/Light Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        type="button"
                        className="btn-pill-secondary !py-1.5 !px-3 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                        aria-label="Toggle theme"
                    >
                        {theme === "dark" ? (
                            <>
                                <FiSun className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                                <span className="text-[var(--text-secondary)]">Light</span>
                            </>
                        ) : (
                            <>
                                <FiMoon className="w-3.5 h-3.5 text-[var(--text-secondary)]" aria-hidden="true" />
                                <span className="text-[var(--text-secondary)]">Dark</span>
                            </>
                        )}
                    </button>

                    {/* Main CTA Button */}
                    <a
                        href="#contact"
                        className="btn-pill-primary text-xs sm:text-sm !py-1.5 !px-4 cursor-pointer font-semibold ml-1"
                    >
                        {t.nav?.contactNow || (isVi ? "Liên hệ ngay" : "Contact Now")}
                    </a>
                </div>

                {/* Mobile Controls */}
                <div className="md:hidden flex items-center gap-2">
                    {/* Language Toggle Mobile */}
                    <button
                        onClick={toggleLanguage}
                        type="button"
                        className="btn-pill-secondary !py-1.5 !px-2.5 text-xs font-bold uppercase cursor-pointer"
                        aria-label="Toggle language"
                    >
                        {language === "vi" ? "EN" : "VI"}
                    </button>

                    {/* Theme Toggle Mobile */}
                    <button
                        onClick={toggleTheme}
                        type="button"
                        className="btn-pill-secondary !py-1.5 !px-2.5 text-xs font-medium cursor-pointer"
                        aria-label="Toggle theme"
                    >
                        {theme === "dark" ? (
                            <FiSun className="w-4 h-4 text-amber-400" aria-hidden="true" />
                        ) : (
                            <FiMoon className="w-4 h-4 text-[var(--text-secondary)]" aria-hidden="true" />
                        )}
                    </button>

                    {/* Menu Drawer Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        type="button"
                        className="btn-pill-secondary !py-1.5 !px-2.5 text-[var(--text-primary)] cursor-pointer"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <FiX className="w-5 h-5" aria-hidden="true" />
                        ) : (
                            <FiMenu className="w-5 h-5" aria-hidden="true" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-[var(--border-subtle)] bg-[var(--bg-card)]/95 backdrop-blur-md px-6 py-6 mt-3 shadow-xl flex flex-col gap-4">
                    <nav className="flex flex-col gap-2">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.id;
                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={handleLinkClick}
                                    className={`text-base font-medium py-2 px-3 rounded-lg transition-colors cursor-pointer ${
                                        isActive
                                            ? "bg-[var(--bg-card-hover)] text-[var(--text-primary)] font-semibold"
                                            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)]/50"
                                    }`}
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                    </nav>

                    <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-col gap-3">
                        <a
                            href="#contact"
                            onClick={handleLinkClick}
                            className="btn-pill-primary justify-center text-center text-sm py-2.5 w-full font-semibold cursor-pointer"
                        >
                            {t.nav?.contactNow || (isVi ? "Liên hệ ngay" : "Contact Now")}
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
