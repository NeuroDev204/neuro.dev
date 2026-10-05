"use client";

import type { IconType } from "react-icons";
import { LuArrowRight, LuBrainCircuit, LuLayoutList, LuMessageSquare, LuShieldCheck, LuWorkflow } from "react-icons/lu";
import { useLanguage } from "../i18n";

// Icons follow the order of t.hero.pipeline.steps; the highlighted step is the model call.
const PIPELINE_ICONS: IconType[] = [LuMessageSquare, LuWorkflow, LuBrainCircuit, LuShieldCheck, LuLayoutList];
const MODEL_STEP_INDEX = 2;

const STACK: string[] = [
    "Python",
    "PyTorch",
    "Transformers",
    "ONNX Runtime",
    "FastAPI",
    "Gemini API",
    "Spring Boot",
    "Kafka",
    "Redis",
    "PostgreSQL",
    "MongoDB",
    "Neo4j",
    "Keycloak",
    "Docker",
    "Next.js",
    "TypeScript",
];

export default function Hero() {
    const { t } = useLanguage();

    return (
        <>
            <section id="top" className="relative overflow-hidden">
                <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
                <div className="aurora pointer-events-none absolute -top-40 right-[-10%] size-[640px]" aria-hidden />
                <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28 lg:pt-24">
                    <div>
                        <p className="fade-up inline-flex h-8 items-center gap-2 rounded-full border border-line bg-surface px-3 text-[13px] text-fg-2">
                            <span className="ping-dot relative size-2 rounded-full bg-accent" />
                            {t.hero.badge}
                        </p>
                        <h1
                            className="fade-up mt-6 text-[40px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-[64px]"
                            style={{ "--delay": "80ms" } as React.CSSProperties}
                        >
                            {t.hero.titleLead} <span className="text-gradient">{t.hero.titleAccent}</span>
                        </h1>
                        <p
                            className="fade-up mt-6 max-w-xl text-[17px] leading-relaxed text-fg-2"
                            style={{ "--delay": "160ms" } as React.CSSProperties}
                        >
                            {t.hero.description}
                        </p>
                        <div className="fade-up mt-8 flex flex-wrap gap-3" style={{ "--delay": "240ms" } as React.CSSProperties}>
                            <a
                                href="#contact"
                                className="inline-flex h-11 items-center gap-2 rounded-lg bg-accent px-5 text-[15px] font-medium text-accent-fg transition-colors hover:bg-accent-hover"
                            >
                                {t.hero.primaryCta}
                                <LuArrowRight className="size-4" aria-hidden />
                            </a>
                            <a
                                href="#work"
                                className="inline-flex h-11 items-center rounded-lg border border-line-strong px-5 text-[15px] font-medium text-fg transition-colors hover:bg-white/5"
                            >
                                {t.hero.secondaryCta}
                            </a>
                        </div>
                        <dl
                            className="fade-up mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-6"
                            style={{ "--delay": "320ms" } as React.CSSProperties}
                        >
                            {t.hero.stats.map((stat) => (
                                <div key={stat.value} className="flex flex-col-reverse justify-end">
                                    <dt className="mt-1 text-[13px] leading-snug text-muted">{stat.label}</dt>
                                    <dd className="font-mono text-2xl font-medium">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    {/* Real Blur moderation flow; the packet animation shows a comment travelling through it. */}
                    <div
                        className="fade-up spotlight rounded-2xl border border-line bg-surface/80 p-5 backdrop-blur-sm sm:p-6"
                        style={{ "--delay": "200ms" } as React.CSSProperties}
                    >
                        <p className="font-mono text-xs text-muted">{t.hero.pipeline.title}</p>
                        <ol className="relative mt-6 grid gap-5">
                            <span className="absolute bottom-4 left-4 top-4 w-px bg-line-strong" aria-hidden>
                                <span className="pipeline-packet absolute -left-[3px] size-[7px] rounded-full bg-accent shadow-[0_0_12px_var(--accent)]" />
                            </span>
                            {t.hero.pipeline.steps.map((step, index) => {
                                const Icon = PIPELINE_ICONS[index];
                                const isModelStep = index === MODEL_STEP_INDEX;
                                return (
                                    <li key={step.detail} className="relative flex items-center gap-4">
                                        <span
                                            className={`grid size-8 shrink-0 place-items-center rounded-lg border ${
                                                isModelStep
                                                    ? "border-accent/40 bg-accent-soft text-accent"
                                                    : "border-line bg-surface-2 text-fg-2"
                                            }`}
                                        >
                                            <Icon className="size-4" aria-hidden />
                                        </span>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-sm font-medium">{step.title}</p>
                                            <p className="font-mono text-xs text-muted">{step.detail}</p>
                                        </div>
                                        {step.badge && (
                                            <span className="rounded-md bg-accent-soft px-2 py-1 font-mono text-xs text-accent">
                                                {step.badge}
                                            </span>
                                        )}
                                    </li>
                                );
                            })}
                        </ol>
                    </div>
                </div>
            </section>

            <section className="border-y border-line bg-surface/40 py-6" aria-label={t.stack.label}>
                <div className="marquee mx-auto max-w-6xl overflow-hidden">
                    {/* The list is rendered twice so the -50% translate loops seamlessly. */}
                    {/* Spacing is padding, not gap, so both halves are exactly equal width and the loop never jumps. */}
                    <ul className="marquee-track flex w-max font-mono text-sm text-muted">
                        {[...STACK, ...STACK].map((name, index) => (
                            <li key={`${name}-${index}`} className="pr-10" aria-hidden={index >= STACK.length || undefined}>
                                {name}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
}
