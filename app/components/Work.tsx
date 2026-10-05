"use client";

import { LuArrowUpRight, LuCheck, LuGithub } from "react-icons/lu";
import { useLanguage } from "../i18n";
import BlurVideo from "./BlurVideo";

const BLUR_REPO_URL = "https://github.com/NeuroDev204/Blur";
const ECOMMERCE_REPO_URL = "https://github.com/NeuroDev204/Neuro_Ecommerce_Backend";
const CORAL_REPO_URL = "https://github.com/NeuroDev204/coral";

// Decorative endpoint list; the highlighted route is the concurrency-safe flash-sale checkout.
const ECOMMERCE_ENDPOINTS: { method: string; path: string; note?: string }[] = [
    { method: "GET", path: "/api/products" },
    { method: "POST", path: "/api/cart/items" },
    { method: "POST", path: "/api/flash-sale/orders", note: "locked" },
    { method: "POST", path: "/api/payments/vnpay" },
];

// Bar heights (Tailwind h-* classes) and animation offsets for the Coral equalizer; two accent bars mark the boosted band.
const EQ_BARS: { height: string; delayMs: number; isAccent?: boolean }[] = [
    { height: "h-16", delayMs: 0 },
    { height: "h-20", delayMs: 120 },
    { height: "h-24", delayMs: 240 },
    { height: "h-14", delayMs: 360 },
    { height: "h-24", delayMs: 80, isAccent: true },
    { height: "h-20", delayMs: 200, isAccent: true },
    { height: "h-16", delayMs: 320 },
    { height: "h-24", delayMs: 40 },
    { height: "h-12", delayMs: 160 },
    { height: "h-20", delayMs: 280 },
];

const sourceLinkClass =
    "inline-flex h-9 shrink-0 items-center gap-1.5 rounded-lg px-3 text-sm font-medium text-fg-2 transition-colors hover:bg-white/5 hover:text-fg";
const chipClass = "rounded-md border border-line px-2 py-1";

export default function Work() {
    const { t } = useLanguage();
    const { blur, ecommerce, coral } = t.work;

    return (
        <section id="work" className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:pb-32">
            <div data-reveal className="max-w-2xl">
                <p className="font-mono text-[13px] text-accent">{t.work.eyebrow}</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">{t.work.title}</h2>
            </div>

            <article data-reveal className="mt-12 grid overflow-hidden rounded-3xl border border-line bg-surface lg:grid-cols-[0.85fr_1.15fr]">
                <div className="flex flex-col p-6 sm:p-8">
                    <p className="font-mono text-xs text-muted">{blur.meta}</p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em]">{blur.title}</h3>
                    <p className="mt-4 text-[15px] leading-relaxed text-fg-2">{blur.problem}</p>
                    <ul className="mt-5 grid gap-2.5 text-sm text-fg-2">
                        {blur.built.map((item) => (
                            <li key={item} className="flex gap-2.5">
                                <LuCheck className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                                {item}
                            </li>
                        ))}
                    </ul>
                    <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-line pt-6">
                        {blur.stats.map((stat) => (
                            <div key={stat.value} className="flex flex-col-reverse justify-end">
                                <dt className="mt-1 text-xs text-muted">{stat.label}</dt>
                                <dd className="font-mono text-xl font-medium">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                    <div className="mt-8 flex flex-wrap gap-3 lg:mt-auto lg:pt-8">
                        <a
                            href={BLUR_REPO_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-10 items-center gap-1.5 rounded-lg bg-white/10 px-4 text-sm font-medium transition-colors hover:bg-white/15"
                        >
                            <LuGithub className="size-4" aria-hidden />
                            {t.work.source}
                            <LuArrowUpRight className="size-4" aria-hidden />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col justify-center border-t border-line bg-surface-2 p-4 sm:p-6 lg:border-l lg:border-t-0">
                    <div className="overflow-hidden rounded-xl border border-line-strong bg-bg">
                        <div className="flex h-9 items-center gap-3 border-b border-line px-3" aria-hidden>
                            <span className="flex gap-1.5">
                                <i className="size-2.5 rounded-full bg-white/15" />
                                <i className="size-2.5 rounded-full bg-white/15" />
                                <i className="size-2.5 rounded-full bg-white/15" />
                            </span>
                            <span className="mx-auto rounded-md bg-white/5 px-3 py-0.5 font-mono text-xs text-muted">blur</span>
                            <span className="w-[42px]" />
                        </div>
                        <BlurVideo
                            src="/Blur_Demo.mp4"
                            posterLogo="/blur.webp"
                            pauseLabel={blur.pauseVideo}
                            playLabel={blur.playVideo}
                        />
                    </div>
                    <p className="mt-3 font-mono text-xs text-muted">{blur.demo}</p>
                </div>
            </article>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
                <article
                    data-reveal
                    className="spotlight flex flex-col rounded-3xl border border-line bg-surface p-6 transition-colors hover:border-line-strong sm:p-8"
                >
                    <div className="rounded-xl border border-line bg-bg p-4 font-mono text-[13px] leading-7" aria-hidden>
                        {ECOMMERCE_ENDPOINTS.map((endpoint) => (
                            <p key={endpoint.path}>
                                <span className={`inline-block w-11 ${endpoint.note ? "text-accent" : "text-muted"}`}>{endpoint.method}</span>
                                <span className="whitespace-nowrap">{endpoint.path}</span>
                                {/* The note does not fit beside the longest route on phones, so it only shows from sm up. */}
                                {endpoint.note && <span className="hidden text-muted sm:inline">{" · "}{endpoint.note}</span>}
                            </p>
                        ))}
                    </div>
                    <p className="mt-6 font-mono text-xs text-muted">{ecommerce.meta}</p>
                    <h3 className="mt-2 text-xl font-semibold">{ecommerce.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-fg-2">{ecommerce.description}</p>
                    <div className="mt-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-3 pt-6">
                        <ul className="flex shrink-0 gap-1.5 font-mono text-xs text-muted">
                            <li className={chipClass}>Spring Boot</li>
                            <li className={chipClass}>MySQL</li>
                            <li className={chipClass}>JWT</li>
                        </ul>
                        <a href={ECOMMERCE_REPO_URL} target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>
                            <LuGithub className="size-4" aria-hidden />
                            {t.work.source}
                        </a>
                    </div>
                </article>

                <article
                    data-reveal
                    style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
                    className="spotlight flex flex-col rounded-3xl border border-line bg-surface p-6 transition-colors hover:border-line-strong sm:p-8"
                >
                    <div className="flex h-[136px] items-end justify-center gap-1.5 rounded-xl border border-line bg-bg px-4 pb-4" aria-hidden>
                        {EQ_BARS.map((bar, index) => (
                            <i
                                key={index}
                                className={`eq-bar block w-2.5 rounded-sm ${bar.height} ${bar.isAccent ? "bg-accent" : "bg-white/20"}`}
                                style={{ "--delay": `${bar.delayMs}ms` } as React.CSSProperties}
                            />
                        ))}
                    </div>
                    <p className="mt-6 font-mono text-xs text-muted">{coral.meta}</p>
                    <h3 className="mt-2 text-xl font-semibold">{coral.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-fg-2">{coral.description}</p>
                    <div className="mt-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-3 pt-6">
                        <ul className="flex shrink-0 gap-1.5 font-mono text-xs text-muted">
                            <li className={chipClass}>C++</li>
                            <li className={chipClass}>JUCE</li>
                            <li className={chipClass}>PulseAudio</li>
                        </ul>
                        <a href={CORAL_REPO_URL} target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>
                            <LuGithub className="size-4" aria-hidden />
                            {t.work.source}
                        </a>
                    </div>
                </article>
            </div>
        </section>
    );
}
