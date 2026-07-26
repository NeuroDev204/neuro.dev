"use client";

import Image from "next/image";
import { useLanguage } from "../i18n";

export default function Hero() {
    const { t } = useLanguage();

    const handleDownloadCV = () => {
        window.location.href = "/api/download-cv";
    };

    return (
        <section
            id="hero"
            className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[85vh] flex items-center"
        >
            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Column: Portrait framing */}
                    <div className="lg:col-span-5 flex justify-center order-1 lg:order-1">
                        <div className="relative flex justify-center items-center">
                            {/* Soft pastel mint circle background element framing behind portrait */}
                            <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-[var(--accent-mint-light)] flex items-center justify-center transition-all duration-300">
                                {/* Smooth circular profile picture with crisp border */}
                                <div className="relative w-60 h-60 sm:w-68 sm:h-68 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[var(--bg-primary)] shadow-xl flex-shrink-0">
                                    <Image
                                        src="/profile.webp"
                                        alt={t.hero.name || "Pham Van Sy"}
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 270px, 320px"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Editorial typography & CTAs */}
                    <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-2 lg:order-2">
                        {/* Role tag / subtext highlighting backend specialization */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--accent-mint-light)] text-[var(--accent-mint-text)] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5 w-fit mx-auto lg:mx-0">
                            <span className="w-2 h-2 rounded-full bg-[var(--accent-mint)]"></span>
                            <span>{t.hero.role}</span>
                        </div>

                        {/* Editorial Headline */}
                        <h1 className="font-serif-editorial text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight mb-4">
                            {t.hero.headline || "Building robust backend solutions"}
                        </h1>

                        {/* Bio description paragraph */}
                        <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                            {t.hero.description}
                        </p>

                        {/* CTA Buttons container */}
                        <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
                            <a
                                href="#projects"
                                className="btn-pill-primary text-base px-6 py-3"
                            >
                                <span>{t.hero.viewProjects}</span>
                                <span className="ml-1 text-sm">∨</span>
                            </a>
                            <button
                                onClick={handleDownloadCV}
                                className="btn-pill-secondary text-base px-6 py-3"
                            >
                                <span>{t.hero.downloadCV}</span>
                                <span className="ml-1 text-sm">⤓</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
