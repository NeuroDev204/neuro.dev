"use client";

import Image from "next/image";
import { LuDownload, LuGithub, LuLinkedin } from "react-icons/lu";
import { useLanguage } from "../i18n";

const linkClass =
    "inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-line px-4 text-sm font-medium text-fg-2 transition-colors hover:bg-white/5 hover:text-fg";

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
            <div className="grid items-start gap-10 md:grid-cols-[280px_1fr] lg:gap-16">
                <div data-reveal className="max-w-[240px] overflow-hidden rounded-2xl border border-line md:max-w-none">
                    <Image
                        src="/profile.webp"
                        alt={t.about.photoAlt}
                        width={693}
                        height={923}
                        sizes="(min-width: 768px) 280px, 240px"
                        className="aspect-[3/4] w-full object-cover"
                    />
                </div>
                <div data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
                    <p className="font-mono text-[13px] text-accent">{t.about.eyebrow}</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">{t.about.title}</h2>
                    <div className="mt-6 grid max-w-2xl gap-4 text-[17px] leading-relaxed text-fg-2">
                        {t.about.paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                    <dl className="mt-8 grid max-w-2xl gap-6 border-t border-line pt-6 sm:grid-cols-3">
                        {t.about.facts.map((fact) => (
                            <div key={fact.label}>
                                <dt className="text-xs text-muted">{fact.label}</dt>
                                <dd className="mt-1 text-sm">{fact.value}</dd>
                            </div>
                        ))}
                    </dl>
                    {/* Two columns on phones so the third link never sits alone on its own row. */}
                    <div className="mt-8 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
                        <a href="https://github.com/NeuroDev204" target="_blank" rel="noopener noreferrer" className={linkClass}>
                            <LuGithub className="size-4" aria-hidden />
                            {t.about.github}
                        </a>
                        <a href="https://www.linkedin.com/in/syvan2004/" target="_blank" rel="noopener noreferrer" className={linkClass}>
                            <LuLinkedin className="size-4" aria-hidden />
                            {t.about.linkedin}
                        </a>
                        <a href="/api/download-cv" className={`col-span-2 ${linkClass}`}>
                            <LuDownload className="size-4" aria-hidden />
                            {t.about.cv}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
