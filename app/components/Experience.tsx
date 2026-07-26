"use client";

import { useLanguage } from "../i18n";

export default function Experience() {
    const { t, language } = useLanguage();

    const experiences = [
        {
            title: t.experience.items.backendDeveloper.title,
            company: t.experience.items.backendDeveloper.company,
            period: t.experience.items.backendDeveloper.period,
            description: t.experience.items.backendDeveloper.description,
        },
        {
            title: t.experience.items.engineeringIntern.title,
            company: t.experience.items.engineeringIntern.company,
            period: t.experience.items.engineeringIntern.period,
            description: t.experience.items.engineeringIntern.description,
        },
        {
            title: t.experience.items.student.title,
            company: t.experience.items.student.company,
            period: t.experience.items.student.period,
            description: t.experience.items.student.description,
        },
    ];

    return (
        <section id="experience" className="py-16 md:py-24 relative">
            <div className="container max-w-4xl mx-auto px-4 md:px-6">
                {/* Section Title */}
                <h2 className="font-serif-editorial text-3xl md:text-4xl font-bold mb-8 text-[var(--text-primary)]">
                    {language === "vi" ? "Kinh nghiệm làm việc" : "Work Experience"}
                </h2>

                {/* Timeline */}
                <div className="relative border-l-2 border-[var(--border-subtle)] space-y-8 ml-3 md:ml-6">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-6 md:pl-8">
                            {/* Soft Mint Node Dot */}
                            <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-[var(--accent-mint)] border-4 border-[var(--bg-primary)] z-10" />

                            {/* Experience Editorial Card */}
                            <div className="editorial-card p-6 md:p-8">
                                {/* Header: Role Headline, Company, Mint Pill Badge Date Range */}
                                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="font-serif-editorial text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-1">
                                            {exp.title}
                                        </h3>
                                        <p className="text-[var(--text-secondary)] font-medium text-sm md:text-base">
                                            {exp.company}
                                        </p>
                                    </div>
                                    {/* Date Range Badge */}
                                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[var(--accent-mint-light)] text-[var(--accent-mint-text)] flex-shrink-0">
                                        {exp.period}
                                    </span>
                                </div>

                                {/* Backend Achievements Bullet Points */}
                                <ul className="space-y-2.5 text-[var(--text-secondary)] text-sm md:text-base leading-relaxed">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-mint-text)] mt-2 flex-shrink-0 opacity-80" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

