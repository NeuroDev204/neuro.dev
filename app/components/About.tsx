"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "../i18n";

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);
    const { t } = useLanguage();

    const highlights = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: t.about.highlights.english.title,
            description: t.about.highlights.english.description,
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: t.about.highlights.teamwork.title,
            description: t.about.highlights.teamwork.description,
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
            ),
            title: t.about.highlights.problemSolving.title,
            description: t.about.highlights.problemSolving.description,
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
            title: t.about.highlights.backend.title,
            description: t.about.highlights.backend.description,
        },

    ];

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

        const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" ref={sectionRef} className="section relative">
            <div className="container">
                {/* Section Title */}
                <div className="section-title animate-on-scroll opacity-0">
                    <p className="text-[var(--primary-cyan)] text-sm font-medium tracking-wider uppercase mb-3">
                        {t.about.subtitle}
                    </p>
                    <h2 className="heading-lg text-gradient">{t.about.title}</h2>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Photo Panel */}
                    <div className="animate-on-scroll opacity-0 delay-100">
                        <div className="glass-light p-6 md:p-8 relative">
                            {/* Photo Container */}
                            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
                                {/* Profile Photo */}
                                <Image
                                    src="/profile.webp"
                                    alt="Phạm Văn Sỹ - Neuro.Dev"
                                    fill
                                    className="object-cover"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)]/50 to-transparent"></div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[var(--primary-cyan)]/30 rounded-2xl"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-[var(--secondary-purple)]/30 rounded-2xl"></div>
                        </div>
                    </div>

                    {/* Right - Text Content */}
                    <div className="animate-on-scroll opacity-0 delay-200">
                        <h3 className="heading-md mb-6">
                            {t.about.greeting} <span className="text-gradient">Neuro.Dev</span>
                        </h3>
                        <p className="text-body mb-6">
                            {t.about.description1}
                        </p>
                        <p className="text-body mb-8">
                            {t.about.description2}
                        </p>

                        {/* Highlights Grid */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {highlights.map((item, index) => (
                                <div
                                    key={index}
                                    className="glass-card p-4 flex items-start gap-4 group"
                                >
                                    <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-[var(--primary-cyan)] group-hover:text-[var(--secondary-lavender)] transition-colors flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                                        <p className="text-small">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
