"use client";

import { useState } from "react";
import { useLanguage } from "../i18n";
import {
    FaEnvelope,
    FaPhone,
    FaLocationDot,
    FaGithub,
    FaLinkedin,
    FaPaperPlane,
    FaCheck,
    FaSpinner,
} from "react-icons/fa6";

export default function Contact() {
    const { t, language } = useLanguage();
    const isVi = language === "vi";

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formspree.io/f/meoylvrv", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }),
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setSubmitted(false), 3000);
            } else {
                throw new Error("Form submission failed");
            }
        } catch (error) {
            console.error("Email send failed:", error);
            alert(isVi ? "Gửi email thất bại. Vui lòng thử lại!" : "Failed to send email. Please try again!");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const contactItems = [
        {
            icon: FaEnvelope,
            label: "Email",
            value: "phamvansy204@gmail.com",
            href: "mailto:phamvansy204@gmail.com",
        },
        {
            icon: FaPhone,
            label: isVi ? "Điện thoại" : "Phone",
            value: "+84 938 459 648",
            href: "tel:+84938459648",
        },
        {
            icon: FaLocationDot,
            label: isVi ? "Địa điểm" : "Location",
            value: isVi ? "TP. Hồ Chí Minh, Việt Nam" : "Ho Chi Minh City, Vietnam",
            href: null,
        },
        {
            icon: FaGithub,
            label: "GitHub",
            value: "github.com/NeuroDev204",
            href: "https://github.com/NeuroDev204",
        },
        {
            icon: FaLinkedin,
            label: "LinkedIn",
            value: "linkedin.com/in/syvan2004",
            href: "https://www.linkedin.com/in/syvan2004/",
        },
    ];

    return (
        <section id="contact" className="py-20 md:py-28 relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Title */}
                <div className="text-left mb-12">
                    <div className="pill-tag mb-4 w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                        <span>{t.contact?.subtitle || (isVi ? "Liên hệ" : "Contact")}</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                        {t.contact?.title || (isVi ? "Kết nối với tôi" : "Get In Touch")}
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Column: Contact Info Card */}
                    <div className="lg:col-span-5">
                        <div className="clean-card p-6 md:p-8 h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                                    {isVi ? "Thông tin liên hệ" : "Contact Information"}
                                </h3>
                                <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed mb-8">
                                    {t.contact?.description || (isVi ? "Bạn có câu hỏi hoặc muốn hợp tác? Hãy liên hệ với tôi!" : "Have a question or want to collaborate? Feel free to contact me!")}
                                </p>

                                <div className="space-y-6">
                                    {contactItems.map((item, idx) => {
                                        const IconComp = item.icon;
                                        return (
                                            <div key={idx} className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-[var(--bg-card-hover)] text-[var(--text-primary)] border border-[var(--border-subtle)] flex items-center justify-center flex-shrink-0">
                                                    <IconComp className="text-base" />
                                                </div>
                                                <div>
                                                    <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-semibold">
                                                        {item.label}
                                                    </div>
                                                    {item.href ? (
                                                        <a
                                                            href={item.href}
                                                            target={item.href.startsWith("http") ? "_blank" : undefined}
                                                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                                            className="text-sm font-medium text-[var(--text-primary)] hover:underline transition-colors"
                                                        >
                                                            {item.value}
                                                        </a>
                                                    ) : (
                                                        <span className="text-sm font-medium text-[var(--text-primary)]">
                                                            {item.value}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form Card */}
                    <div className="lg:col-span-7">
                        <div className="clean-card p-6 md:p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                                            {t.contact.form.name}
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-4 py-3 text-[var(--text-primary)] focus:ring-2 focus:ring-[var(--text-muted)] focus:border-[var(--text-primary)] outline-none"
                                            placeholder={t.contact.form.namePlaceholder}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                                            {t.contact.form.email}
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-4 py-3 text-[var(--text-primary)] focus:ring-2 focus:ring-[var(--text-muted)] focus:border-[var(--text-primary)] outline-none"
                                            placeholder={t.contact.form.emailPlaceholder}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                                        {t.contact.form.message}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-4 py-3 text-[var(--text-primary)] focus:ring-2 focus:ring-[var(--text-muted)] focus:border-[var(--text-primary)] outline-none resize-none"
                                        placeholder={t.contact.form.messagePlaceholder}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-pill-primary w-full justify-center text-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <FaSpinner className="animate-spin text-sm" />
                                            <span>{t.contact.form.sending}</span>
                                        </>
                                    ) : submitted ? (
                                        <>
                                            <FaCheck className="text-sm" />
                                            <span>{t.contact.form.sent}</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>{t.contact.form.submit}</span>
                                            <FaPaperPlane className="text-xs ml-1" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
