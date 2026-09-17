"use client";

import { useLanguage } from "../i18n";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FiMail, FiArrowUp } from "react-icons/fi";

export default function Footer() {
    const { language, t } = useLanguage();
    const isVi = language === "vi";

    const socialLinks = [
        {
            name: "GitHub",
            href: "https://github.com/NeuroDev204",
            icon: SiGithub,
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/syvan2004/",
            icon: SiLinkedin,
        },
        {
            name: "Email",
            href: "mailto:phamvansy2004@gmail.com",
            icon: FiMail,
        },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-card)] py-12 mt-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Brand, Copyright & Stack */}
                    <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-base tracking-tight text-[var(--text-primary)]">
                                Phạm Văn Sỹ
                            </span>
                            <span className="text-[var(--text-muted)] text-xs font-mono">•</span>
                            <span className="text-xs font-mono text-[var(--text-muted)]">
                                AI & Distributed Systems
                            </span>
                        </div>
                        <p className="text-xs text-[var(--text-secondary)]">
                            © 2026 Phạm Văn Sỹ. Minimalist Tech Design.
                        </p>
                        <p className="text-[11px] text-[var(--text-muted)]">
                            {t.footer?.using ||
                                (isVi
                                    ? "Xây dựng bằng Next.js & Minimalist Tech Design System"
                                    : "Built with Next.js & Minimalist Tech Design System")}
                        </p>
                    </div>

                    {/* Right side: Social links & Back to top button */}
                    <div className="flex items-center gap-4">
                        {/* Social Icons */}
                        <div className="flex items-center gap-2.5">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                const isMail = social.href.startsWith("mailto:");
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target={isMail ? undefined : "_blank"}
                                        rel={isMail ? undefined : "noopener noreferrer"}
                                        aria-label={social.name}
                                        title={social.name}
                                        className="w-9 h-9 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-muted)] hover:-translate-y-0.5 transition-all flex items-center justify-center text-sm cursor-pointer shadow-xs"
                                    >
                                        <Icon aria-hidden="true" />
                                    </a>
                                );
                            })}
                        </div>

                        {/* Back to Top Pill Button */}
                        <button
                            onClick={scrollToTop}
                            type="button"
                            className="btn-pill-secondary !py-2 !px-4 text-xs font-semibold cursor-pointer inline-flex items-center gap-2 group"
                            aria-label="Back to top"
                        >
                            <span>{isVi ? "Lên đầu trang" : "Back to Top"}</span>
                            <FiArrowUp
                                className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform"
                                aria-hidden="true"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
