"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaFacebook, FaArrowUp } from "react-icons/fa6";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: "GitHub",
            href: "https://github.com/NeuroDev204",
            icon: FaGithub,
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/syvan2004/",
            icon: FaLinkedin,
        },
        {
            name: "Facebook",
            href: "https://www.facebook.com/van.sy.02.02.2004",
            icon: FaFacebook,
        },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-primary)] py-8 mt-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo & Copyright */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 text-center md:text-left">
                        <a href="#hero" className="font-serif-editorial text-xl font-bold text-[var(--text-primary)] inline-flex items-center gap-2">
                            <Image src="/favicon.png" alt="Neuro.Dev Logo" width={24} height={24} className="rounded-sm" />
                            Neuro.Dev
                        </a>
                        <span className="hidden sm:inline text-[var(--border-subtle)]">•</span>
                        <p className="text-xs md:text-sm text-[var(--text-secondary)]">
                            © {currentYear} Phạm Văn Sỹ. All rights reserved.
                        </p>
                    </div>

                    {/* Right side: Social links & Back to top button */}
                    <div className="flex items-center gap-6">
                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        className="w-9 h-9 rounded-full bg-[var(--accent-mint-light)] text-[var(--accent-mint-text)] flex items-center justify-center hover:bg-[var(--accent-mint)] hover:scale-105 transition-all text-sm"
                                    >
                                        <Icon />
                                    </a>
                                );
                            })}
                        </div>

                        {/* Mint Back to Top Pill Button */}
                        <button
                            onClick={scrollToTop}
                            className="px-4 py-2 text-xs font-semibold rounded-full bg-[var(--accent-mint-light)] text-[var(--accent-mint-text)] hover:bg-[var(--accent-mint)] hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer border border-[var(--accent-mint)]/40"
                            aria-label="Back to top"
                        >
                            <span>Back to Top</span>
                            <FaArrowUp className="text-xs" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
