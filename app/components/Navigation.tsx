"use client";

import { useEffect, useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { useLanguage } from "../i18n";
import type { Language } from "../i18n";

const LANGUAGES: Language[] = ["en", "vi"];

export default function Navigation() {
    const { t, language, setLanguage } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const links: { href: string; label: string }[] = [
        { href: "#about", label: t.nav.about },
        { href: "#services", label: t.nav.services },
        { href: "#work", label: t.nav.work },
        { href: "#process", label: t.nav.process },
    ];

    useEffect(() => {
        if (!isMenuOpen) return;
        const closeOnEscape = (event: KeyboardEvent): void => {
            if (event.key === "Escape") setIsMenuOpen(false);
        };
        document.addEventListener("keydown", closeOnEscape);
        return () => document.removeEventListener("keydown", closeOnEscape);
    }, [isMenuOpen]);

    const closeMenu = (): void => setIsMenuOpen(false);

    return (
        <>
            <header className="sticky top-0 z-40 border-b border-line bg-bg/70 backdrop-blur-xl">
                <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
                    <a href="#top" className="flex items-center gap-2.5 text-[15px] font-semibold tracking-tight">
                        <span className="grid size-8 place-items-center rounded-lg bg-accent font-mono text-[13px] font-bold text-accent-fg">
                            SP
                        </span>
                        Sy Pham
                    </a>

                    <nav className="hidden items-center gap-1 md:flex" aria-label={t.nav.primary}>
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="rounded-lg px-3 py-2 text-sm text-fg-2 transition-colors hover:bg-white/5 hover:text-fg"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-2">
                        <div
                            className="flex h-9 items-center overflow-hidden rounded-lg border border-line font-mono text-sm"
                            role="group"
                            aria-label={t.nav.language}
                        >
                            {LANGUAGES.map((code) => (
                                <button
                                    key={code}
                                    type="button"
                                    aria-pressed={language === code}
                                    onClick={() => setLanguage(code)}
                                    className={`h-full px-3 uppercase transition-colors ${
                                        language === code ? "bg-white/10 text-fg" : "text-muted hover:text-fg"
                                    }`}
                                >
                                    {code}
                                </button>
                            ))}
                        </div>
                        <a
                            href="#contact"
                            className="hidden h-9 items-center gap-1.5 rounded-lg bg-accent px-4 text-sm font-medium text-accent-fg transition-colors hover:bg-accent-hover sm:inline-flex"
                        >
                            {t.nav.cta}
                        </a>
                        <button
                            type="button"
                            onClick={() => setIsMenuOpen(true)}
                            aria-label={t.nav.openMenu}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                            className="grid size-9 place-items-center rounded-lg border border-line text-fg-2 hover:text-fg md:hidden"
                        >
                            <LuMenu className="size-[18px]" aria-hidden />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile menu: drops from the top over a scrim; Esc, scrim click or a link closes it. */}
            <div
                className={`fixed inset-0 z-50 bg-black/60 transition-opacity duration-300 md:hidden ${
                    isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
                onClick={closeMenu}
                aria-hidden
            />
            <div
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                aria-label={t.nav.menu}
                inert={!isMenuOpen}
                className={`fixed inset-x-0 top-0 z-50 border-b border-line-strong bg-surface-2 px-4 pb-6 pt-4 shadow-[0_24px_48px_-12px_rgb(0_0_0/0.8)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
                    isMenuOpen ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <div className="mb-4 flex h-9 items-center justify-between">
                    <span className="text-sm font-semibold">{t.nav.menu}</span>
                    <button
                        type="button"
                        onClick={closeMenu}
                        aria-label={t.nav.closeMenu}
                        className="grid size-9 place-items-center rounded-lg text-fg-2 hover:text-fg"
                    >
                        <LuX className="size-[18px]" aria-hidden />
                    </button>
                </div>
                <nav className="grid gap-1 text-base" aria-label={t.nav.primary}>
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={closeMenu}
                            className="rounded-lg px-3 py-3 text-fg-2 hover:bg-white/5 hover:text-fg"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
                <a
                    href="#contact"
                    onClick={closeMenu}
                    className="mt-4 flex h-11 items-center justify-center rounded-lg bg-accent text-sm font-medium text-accent-fg"
                >
                    {t.nav.cta}
                </a>
            </div>
        </>
    );
}
