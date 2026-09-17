"use client";

import Image from "next/image";
import { useLanguage } from "../i18n";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FiMail, FiArrowDown, FiDownload } from "react-icons/fi";

export default function Hero() {
    const { t } = useLanguage();

    const handleDownloadCV = () => {
        window.location.href = "/api/download-cv";
    };

    const socialLinks = [
        {
            name: "GitHub",
            href: "https://github.com/NeuroDev204",
            icon: SiGithub,
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/s%E1%BB%B9-ph%E1%BA%A1m-v%C4%83n-b4859a353/",
            icon: SiLinkedin,
        },
        {
            name: "Email",
            href: "mailto:phamvansy2004@gmail.com",
            icon: FiMail,
        },
    ];

    const metrics = t.hero?.metrics || {
        microservices: "6 Microservices",
        microservicesSub: "Event-driven RabbitMQ",
        latency: "< 15ms Latency",
        latencySub: "Real-time ClickHouse OLAP",
        twoStage: "Two-Stage AI",
        twoStageSub: "Ollama inference pipeline",
    };

    return (
        <section
            id="hero"
            className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 min-h-[85vh] flex items-center"
        >
            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    {/* Left Column (Desktop 7/12): Editorial typography, CTAs, Social */}
                    <div className="lg:col-span-7 flex flex-col justify-center text-left order-1 lg:order-1">
                        {/* Role pill tag */}
                        <div className="pill-tag w-fit mb-5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                            <span>{t.hero?.role || "AI & Distributed Systems Engineer"}</span>
                        </div>

                        {/* Name & Headline */}
                        <div className="mb-5">
                            <p className="text-base sm:text-lg font-semibold text-[var(--text-secondary)] mb-2">
                                {t.hero?.name || "Phạm Văn Sỹ"}
                            </p>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.18]">
                                {t.hero?.headline || "Building robust backend solutions"}
                            </h1>
                        </div>

                        {/* Bio description */}
                        <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
                            {t.hero?.description}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-4 mb-8">
                            <a
                                href="#projects"
                                className="btn-pill-primary text-sm sm:text-base cursor-pointer"
                            >
                                <span>{t.hero?.viewProjects || "Explore Projects"}</span>
                                <FiArrowDown className="text-base" aria-hidden="true" />
                            </a>
                            <button
                                onClick={handleDownloadCV}
                                type="button"
                                className="btn-pill-secondary text-sm sm:text-base cursor-pointer"
                            >
                                <span>{t.hero?.downloadCV || "Download CV"}</span>
                                <FiDownload className="text-base" aria-hidden="true" />
                            </button>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-3">
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
                                        className="w-10 h-10 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-muted)] hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center text-lg shadow-xs"
                                    >
                                        <Icon aria-hidden="true" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column (Desktop 5/12): Portrait & Metric Bar */}
                    <div className="lg:col-span-5 flex flex-col items-center justify-center order-2 lg:order-2">
                        <div className="relative w-full max-w-sm flex flex-col items-center gap-6">
                            {/* Portrait Frame with subtle 1px border */}
                            <div className="relative w-64 h-80 sm:w-72 sm:h-90 md:w-80 md:h-[24rem] rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-xs">
                                <Image
                                    src="/profile.webp"
                                    alt={t.hero?.name || "Pham Van Sy"}
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 280px, 320px"
                                    className="object-cover object-top"
                                />
                            </div>

                            {/* Metric Bar Component */}
                            <div className="clean-card w-full p-4 sm:p-5">
                                <div className="grid grid-cols-3 gap-2 divide-x divide-[var(--border-subtle)]">
                                    <div className="flex flex-col items-center text-center px-1 sm:px-2">
                                        <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)] font-mono tracking-tight">
                                            {metrics.microservices}
                                        </span>
                                        <span className="text-[10px] sm:text-xs text-[var(--text-muted)] mt-1 leading-snug">
                                            {metrics.microservicesSub}
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center text-center px-1 sm:px-2">
                                        <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)] font-mono tracking-tight">
                                            {metrics.latency}
                                        </span>
                                        <span className="text-[10px] sm:text-xs text-[var(--text-muted)] mt-1 leading-snug">
                                            {metrics.latencySub}
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center text-center px-1 sm:px-2">
                                        <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)] font-mono tracking-tight">
                                            {metrics.twoStage}
                                        </span>
                                        <span className="text-[10px] sm:text-xs text-[var(--text-muted)] mt-1 leading-snug">
                                            {metrics.twoStageSub}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
