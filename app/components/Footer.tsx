"use client";

import Image from "next/image";
import { useLanguage } from "../i18n";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { t } = useLanguage();

    return (
        <footer className="relative py-12 px-6">
            {/* Divider Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-px bg-[var(--glass-border)]"></div>

            <div className="container max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo & Copyright */}
                    <div className="text-center md:text-left">
                        <a href="#hero" className="text-2xl font-bold text-[var(--primary-blue)] inline-flex items-center gap-3 mb-2">
                            <Image src="/favicon.png" alt="" width={30} height={30} className="rounded-sm" />
                            Neuro.Dev
                        </a>
                        <p className="text-[var(--text-muted)] text-sm">
                            © {currentYear} Phạm Văn Sỹ. All rights reserved.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm">
                        <a
                            href="#skills"
                            className="text-[var(--text-muted)] hover:text-[var(--primary-cyan)] transition-colors"
                        >
                            {t.nav.skills}
                        </a>
                        <a
                            href="#projects"
                            className="text-[var(--text-muted)] hover:text-[var(--primary-cyan)] transition-colors"
                        >
                            {t.nav.projects}
                        </a>
                        <a
                            href="#contact"
                            className="text-[var(--text-muted)] hover:text-[var(--primary-cyan)] transition-colors"
                        >
                            {t.nav.contact}
                        </a>
                    </div>

                    {/* Back to Top */}
                    <a
                        href="#hero"
                        className="glass w-12 h-12 rounded-full flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:bg-[var(--glass-bg-light)] transition-all hover:-translate-y-1"
                        aria-label="Back to top"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}
