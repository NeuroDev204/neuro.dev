"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "../i18n";

export default function Experience() {
    const sectionRef = useRef<HTMLElement>(null);
    const { t } = useLanguage();

    const experiences = [
        {
            title: t.experience.items.backendDeveloper.title,
            company: t.experience.items.backendDeveloper.company,
            period: t.experience.items.backendDeveloper.period,
            description: t.experience.items.backendDeveloper.description,
            type: "intern" as const,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                    />
                </svg>
            ),
        },
        {
            title: t.experience.items.engineeringIntern.title,
            company: t.experience.items.engineeringIntern.company,
            period: t.experience.items.engineeringIntern.period,
            description: t.experience.items.engineeringIntern.description,
            type: "intern" as const,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                </svg>
            ),
        },
        {
            title: t.experience.items.student.title,
            company: t.experience.items.student.company,
            period: t.experience.items.student.period,
            description: t.experience.items.student.description,
            type: "work" as const,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                </svg>
            ),
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
        <section id="experience" ref={sectionRef} className="section relative">
            <div className="container max-w-4xl">
                {/* Section Title */}
                <div className="section-title animate-on-scroll opacity-0">
                    <p className="text-[var(--primary-cyan)] text-sm font-medium tracking-wider uppercase mb-3">
                        {t.experience.subtitle}
                    </p>
                    <h2 className="heading-lg text-[var(--primary-blue)]">{t.experience.title}</h2>
                </div>

                {/* Timeline */}
                <div className="timeline ml-4 md:ml-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`timeline-item animate-on-scroll opacity-0 delay-${(index + 1) * 100}`}
                        >
                            {/* Timeline Dot */}
                            <div className="timeline-dot"></div>

                            {/* Content Card */}
                            <div className="glass-card p-6 md:p-8 ml-4 md:ml-8">
                                {/* Header */}
                                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                    <div className="flex items-center gap-4">
                                        {/* Icon */}
                                        <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-[var(--primary-cyan)]">
                                            {exp.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                                            <p className="text-[var(--text-secondary)]">{exp.company}</p>
                                        </div>
                                    </div>
                                    {/* Period Badge */}
                                    <div className="neon-badge">{exp.period}</div>
                                </div>

                                {/* Description - Bullet Points */}
                                <ul className="space-y-2">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-body">
                                            <svg
                                                className="w-4 h-4 mt-1 flex-shrink-0 text-[var(--primary-cyan)]"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Type Badge */}
                                <div className="mt-4">
                                    <span
                                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${exp.type === "intern"
                                            ? "bg-[var(--primary-blue)]/20 text-[var(--primary-blue)]"
                                            : "bg-[var(--primary-cyan)]/20 text-[var(--primary-cyan)]"
                                            }`}
                                    >
                                        {exp.type === "intern" ? t.experience.intern : t.experience.study}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
