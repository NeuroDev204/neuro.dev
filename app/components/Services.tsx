"use client";

import type { IconType } from "react-icons";
import { LuCheck, LuRocket, LuServer, LuSparkles } from "react-icons/lu";
import { useLanguage } from "../i18n";

// Index-aligned with t.services.items. Stack names are not translated, so they live here.
const SERVICE_ICONS: IconType[] = [LuSparkles, LuServer, LuRocket];
const SERVICE_STACKS: string[][] = [
    ["PyTorch", "ONNX", "FastAPI"],
    ["Spring Boot", "Kafka", "Redis"],
    ["Next.js", "Docker", "CI/CD"],
];

export default function Services() {
    const { t } = useLanguage();

    return (
        <section id="services" className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:pb-32">
            <div data-reveal className="max-w-2xl">
                <p className="font-mono text-[13px] text-accent">{t.services.eyebrow}</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">{t.services.title}</h2>
                <p className="mt-4 text-[17px] leading-relaxed text-fg-2">{t.services.description}</p>
            </div>
            <div className="mt-12 grid gap-4 lg:grid-cols-3">
                {t.services.items.map((service, index) => {
                    const Icon = SERVICE_ICONS[index];
                    return (
                        <article
                            key={service.title}
                            data-reveal
                            style={{ "--reveal-delay": `${index * 80}ms` } as React.CSSProperties}
                            className="spotlight flex flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-line-strong"
                        >
                            <span className="grid size-10 place-items-center rounded-xl bg-accent-soft text-accent">
                                <Icon className="size-5" aria-hidden />
                            </span>
                            <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
                            <p className="mt-2 text-[15px] leading-relaxed text-fg-2">{service.description}</p>
                            <ul className="mt-5 grid gap-2.5 text-sm text-fg-2">
                                {service.deliverables.map((deliverable) => (
                                    <li key={deliverable} className="flex gap-2.5">
                                        <LuCheck className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                                        {deliverable}
                                    </li>
                                ))}
                            </ul>
                            <ul className="mt-auto flex flex-wrap gap-1.5 pt-6 font-mono text-xs text-muted">
                                {SERVICE_STACKS[index].map((name) => (
                                    <li key={name} className="rounded-md border border-line px-2 py-1">
                                        {name}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
