"use client";

import { useLanguage } from "../i18n";

export default function Process() {
    const { t } = useLanguage();

    return (
        <section id="process" className="border-y border-line bg-surface/40">
            <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-28">
                <div data-reveal className="max-w-2xl">
                    <p className="font-mono text-[13px] text-accent">{t.process.eyebrow}</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">{t.process.title}</h2>
                </div>
                <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                    {t.process.steps.map((step, index) => (
                        <li
                            key={step.title}
                            data-reveal
                            style={{ "--reveal-delay": `${index * 80}ms` } as React.CSSProperties}
                            className="border-t border-line-strong pt-5"
                        >
                            <span className="font-mono text-sm text-accent">{String(index + 1).padStart(2, "0")}</span>
                            <h3 className="mt-3 font-semibold">{step.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-fg-2">{step.description}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
