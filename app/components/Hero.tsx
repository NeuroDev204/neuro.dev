"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "../i18n";

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    const { t } = useLanguage();

    const handleDownloadCV = () => {
        window.location.href = "/api/download-cv";
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-fade-in-up");
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = heroRef.current?.querySelectorAll(".animate-on-scroll");
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="hero"
            ref={heroRef}
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        >
            <div className="container px-6 py-20">
                <div className="glass-light p-8 md:p-12 lg:p-16 max-w-4xl mx-auto relative overflow-hidden">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                        <div className="relative flex-shrink-0">
                            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full glass overflow-hidden relative">
                                <Image
                                    src="/profile.webp"
                                    alt="Pham Van Sy - Neuro.Dev"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 rounded-full border-2 border-[var(--primary-cyan)]/60"></div>
                            </div>
                        </div>

                        <div className="flex-1 text-center lg:text-left">
                            <div className="animate-on-scroll opacity-0">
                                <p className="text-[var(--primary-cyan)] text-sm md:text-base font-medium mb-3 tracking-wider uppercase">
                                    {t.hero.greeting}
                                </p>
                                <h1 className="heading-xl mb-2 text-[var(--primary-blue)]">{t.hero.name}</h1>
                                <div className="mb-4 inline-block">
                                    <span className="glass-pill text-lg md:text-xl font-bold px-6 py-2 text-[var(--primary-cyan)]">
                                        Neuro.Dev
                                    </span>
                                </div>
                                <h2 className="heading-md text-[var(--text-secondary)] mb-6">{t.hero.role}</h2>
                            </div>

                            <div className="animate-on-scroll opacity-0 delay-200">
                                <p className="text-body max-w-2xl mb-8">{t.hero.description}</p>
                            </div>

                            <div className="animate-on-scroll opacity-0 delay-300 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <a href="#projects" className="btn-primary">
                                    <span>{t.hero.viewProjects}</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </a>
                                <button onClick={handleDownloadCV} className="btn-secondary">
                                    <span>{t.hero.downloadCV}</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-4 left-4 w-20 h-20 border border-[var(--glass-border)] rounded-full opacity-25"></div>
                    <div className="absolute bottom-4 right-4 w-24 h-24 border border-[var(--glass-border)] rounded-full opacity-20"></div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                    <div className="w-6 h-10 border-2 border-[var(--glass-border-light)] rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-[var(--primary-cyan)] rounded-full mt-2"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
