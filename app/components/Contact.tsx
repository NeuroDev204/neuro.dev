"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { LuArrowRight, LuCircleAlert, LuCircleCheck, LuLoaderCircle, LuMail } from "react-icons/lu";
import { translations, useLanguage } from "../i18n";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/meoylvrv";
const CONTACT_EMAIL = "phamvansy204@gmail.com";

type SubmitStatus = "idle" | "sending" | "sent" | "error";

interface ChoiceChipsProps {
    name: string;
    legend: string;
    options: string[];
    selectedIndex: number | null;
    onSelect: (index: number) => void;
    className?: string;
}

function ChoiceChips({ name, legend, options, selectedIndex, onSelect, className = "flex flex-wrap gap-2" }: ChoiceChipsProps) {
    return (
        <fieldset>
            <legend className="mb-2 text-sm font-medium">{legend}</legend>
            <div className={className}>
                {options.map((option, index) => (
                    <label key={option} className="cursor-pointer">
                        <input
                            type="radio"
                            name={name}
                            className="peer sr-only"
                            checked={selectedIndex === index}
                            onChange={() => onSelect(index)}
                        />
                        <span className="inline-flex h-9 w-full items-center justify-center rounded-full border border-line-strong px-3.5 text-sm text-fg-2 transition hover:text-fg peer-checked:border-accent peer-checked:bg-accent-soft peer-checked:text-fg sm:w-auto">
                            {option}
                        </span>
                    </label>
                ))}
            </div>
        </fieldset>
    );
}

const fieldClass =
    "rounded-lg border border-line-strong bg-bg px-3.5 text-[15px] font-normal text-fg outline-none transition placeholder:text-muted focus:border-accent focus:ring-4 focus:ring-accent/15";

export default function Contact() {
    const { t } = useLanguage();
    const form = t.contact.form;

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    // Choices are stored by index so switching language keeps the selection.
    const [projectTypeIndex, setProjectTypeIndex] = useState<number | null>(0);
    const [budgetIndex, setBudgetIndex] = useState<number | null>(null);
    const [timelineIndex, setTimelineIndex] = useState<number | null>(null);
    const [status, setStatus] = useState<SubmitStatus>("idle");

    const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        setStatus("sending");

        // Always send English labels so incoming briefs read the same whatever language the visitor used.
        const englishForm = translations.en.contact.form;
        const pick = (options: string[], index: number | null): string => (index === null ? "Not specified" : options[index]);

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    name,
                    email,
                    projectType: pick(englishForm.projectTypes, projectTypeIndex),
                    budget: pick(englishForm.budgets, budgetIndex),
                    timeline: pick(englishForm.timelines, timelineIndex),
                    message,
                }),
            });
            if (!response.ok) {
                throw new Error(`Formspree responded ${response.status}`);
            }
            setStatus("sent");
            setName("");
            setEmail("");
            setMessage("");
        } catch (error: unknown) {
            console.error("Contact form submission failed:", error);
            setStatus("error");
        }
    };

    const isSending = status === "sending";

    return (
        <section id="contact" className="relative overflow-hidden py-24 lg:py-32">
            <div className="aurora pointer-events-none absolute bottom-[-30%] left-1/2 size-[640px] -translate-x-1/2 opacity-60" aria-hidden />
            {/* Same container + gutter as every other section so the card edges line up. */}
            <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
                <div data-reveal className="grid overflow-hidden rounded-3xl border border-line bg-surface lg:grid-cols-[0.8fr_1.2fr]">
                    <div className="p-6 sm:p-8 lg:p-10">
                        <p className="font-mono text-[13px] text-accent">{t.contact.eyebrow}</p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">{t.contact.title}</h2>
                        <p className="mt-4 text-[15px] leading-relaxed text-fg-2">{t.contact.description}</p>
                        <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="mt-6 inline-flex min-h-11 items-center gap-2 text-[15px] font-medium text-fg underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-accent"
                        >
                            <LuMail className="size-4 text-muted" aria-hidden />
                            {CONTACT_EMAIL}
                        </a>
                    </div>

                    <form onSubmit={handleSubmit} className="grid gap-6 border-t border-line p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <label className="grid gap-2 text-sm font-medium">
                                {form.name}
                                <input
                                    required
                                    name="name"
                                    autoComplete="name"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                    placeholder={form.namePlaceholder}
                                    className={`h-11 ${fieldClass}`}
                                />
                            </label>
                            <label className="grid gap-2 text-sm font-medium">
                                {form.email}
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    placeholder={form.emailPlaceholder}
                                    className={`h-11 ${fieldClass}`}
                                />
                            </label>
                        </div>

                        <ChoiceChips
                            name="projectType"
                            legend={form.projectType}
                            options={form.projectTypes}
                            selectedIndex={projectTypeIndex}
                            onSelect={setProjectTypeIndex}
                        />
                        <div className="grid gap-6">
                            {/* 2×2 on phones so "$8k+" never wraps onto a row by itself. */}
                            <ChoiceChips
                                name="budget"
                                legend={form.budget}
                                options={form.budgets}
                                selectedIndex={budgetIndex}
                                onSelect={setBudgetIndex}
                                className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap"
                            />
                            <ChoiceChips
                                name="timeline"
                                legend={form.timeline}
                                options={form.timelines}
                                selectedIndex={timelineIndex}
                                onSelect={setTimelineIndex}
                            />
                        </div>

                        <label className="grid gap-2 text-sm font-medium">
                            {form.message}
                            <textarea
                                required
                                name="message"
                                rows={5}
                                value={message}
                                onChange={(event) => setMessage(event.target.value)}
                                placeholder={form.messagePlaceholder}
                                className={`resize-none py-3 leading-relaxed ${fieldClass}`}
                            />
                        </label>

                        {status === "error" && (
                            <div role="alert" className="flex items-start gap-3 rounded-lg border border-danger/30 bg-danger/10 p-3.5 text-sm text-fg">
                                <LuCircleAlert className="mt-0.5 size-4 shrink-0 text-danger" aria-hidden />
                                <p>
                                    {form.errorLead}{" "}
                                    <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-2">
                                        {CONTACT_EMAIL}
                                    </a>
                                    .
                                </p>
                            </div>
                        )}
                        {status === "sent" && (
                            <div role="status" className="flex items-start gap-3 rounded-lg border border-success/30 bg-success/10 p-3.5 text-sm text-fg">
                                <LuCircleCheck className="mt-0.5 size-4 shrink-0 text-success" aria-hidden />
                                <p>{form.sent}</p>
                            </div>
                        )}

                        <div>
                            <button
                                type="submit"
                                disabled={isSending}
                                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 text-[15px] font-medium text-accent-fg transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                            >
                                {isSending ? (
                                    <>
                                        <LuLoaderCircle className="size-4 animate-spin" aria-hidden />
                                        {form.sending}
                                    </>
                                ) : (
                                    <>
                                        {form.submit}
                                        <LuArrowRight className="size-4" aria-hidden />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
