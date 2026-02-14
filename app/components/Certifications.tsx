"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n";

const certifications = [
    {
        year: "2024",
        title: "Java Foundations Professional Certificate",
        issuer: "JetBrains",
        color: "#000000",
        textColor: "#ffffff",
        pdf: "/Java Foundations Professional Certificate by JetBrains.pdf",
    },
    {
        year: "2024",
        title: "Java Masterclass: The Complete Guide",
        issuer: "Udemy",
        color: "#A435F0",
        textColor: "#ffffff",
        pdf: "/Java MasterClass.pdf",
    },
    {
        year: "2024",
        title: "Spring Boot 3, Spring 6 & Hibernate for Beginners",
        issuer: "Udemy",
        color: "#A435F0",
        textColor: "#ffffff",
        pdf: "/Spring boot 3, Spring 6 & Hibernate For beginners.pdf",
    },
    {
        year: "2024",
        title: "Hands-On React: Build Advanced React JS Frontend",
        issuer: "Udemy",
        color: "#A435F0",
        textColor: "#ffffff",
        pdf: "/Hands-On React. Build advanced React Js Frontend with expert.pdf",
    },
    {
        year: "2024",
        title: "Ethical Hacker",
        issuer: "Cisco",
        color: "#049fd9",
        textColor: "#ffffff",
        pdf: "/Ethical_Hacker_Badge20241110-28-uzwtcw.pdf",
    },
    {
        year: "2024",
        title: "Practical Next.js & React - Build A Real Webapp",
        issuer: "Udemy",
        color: "#A435F0",
        textColor: "#ffffff",
        pdf: "/Practical Nextjs & React - Build A real Webapp with nextjs.pdf",
    },
    {
        year: "2024",
        title: "Java and C++ Complete Course",
        issuer: "Udemy",
        color: "#A435F0",
        textColor: "#ffffff",
        pdf: "/Java Adn C++ Complete Course.pdf",
    },
    {
        year: "2024",
        title: "CSS3 and Bootstrap for Absolute Beginners",
        issuer: "Udemy",
        color: "#A435F0",
        textColor: "#ffffff",
        pdf: "/CSS3 and Bootstrap for absolute Beginners.pdf",
    },
    {
        year: "2024",
        title: "Master Basics of Mathematics",
        issuer: "Udemy",
        color: "#A435F0",
        textColor: "#ffffff",
        pdf: "/Master Basics of Mathematics.pdf",
    },
];

export default function Certifications() {
    const sectionRef = useRef<HTMLElement>(null);
    const { language } = useLanguage();
    const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
    const [selectedTitle, setSelectedTitle] = useState<string>("");

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

    useEffect(() => {
        document.body.style.overflow = selectedPdf ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedPdf]);

    const openPreview = (pdf: string, title: string) => {
        setSelectedPdf(pdf);
        setSelectedTitle(title);
    };

    const closePreview = () => {
        setSelectedPdf(null);
        setSelectedTitle("");
    };

    return (
        <>
            <section id="certifications" ref={sectionRef} className="section relative">
                <div className="container max-w-6xl">
                    {/* Section Title */}
                    <div className="section-title animate-on-scroll opacity-0">
                        <p className="text-[var(--primary-cyan)] text-sm font-medium tracking-wider uppercase mb-3">
                            {language === "vi" ? "Chứng chỉ" : "Certifications"}
                        </p>
                        <h2 className="heading-lg text-[var(--primary-blue)]">
                            {language === "vi" ? "Chứng chỉ & Khóa học" : "Certificates & Courses"}
                        </h2>
                    </div>

                    {/* Certifications Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                className={`animate-on-scroll opacity-0 delay-${(index % 6 + 1) * 100}`}
                            >
                                <div className="glass-card p-6 h-full flex flex-col group hover:bg-[var(--glass-bg-light)] transition-all duration-300">
                                    {/* Issuer Badge & Year */}
                                    <div className="flex items-center justify-between mb-4">
                                        <span
                                            className="px-3 py-1.5 rounded-lg text-sm font-bold"
                                            style={{
                                                backgroundColor: cert.color,
                                                color: cert.textColor,
                                            }}
                                        >
                                            {cert.issuer}
                                        </span>
                                        <span className="neon-badge">{cert.year}</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-[var(--primary-cyan)] transition-colors line-clamp-2 flex-grow">
                                        {cert.title}
                                    </h3>

                                    {/* Action Buttons */}
                                    <div className="flex gap-2">
                                        {/* View Button */}
                                        <button
                                            onClick={() => openPreview(cert.pdf, cert.title)}
                                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--primary-cyan)]/20 hover:bg-[var(--primary-cyan)]/30 border border-[var(--primary-cyan)]/50 text-[var(--primary-cyan)] transition-all text-sm font-medium"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                            {language === "vi" ? "Xem" : "View"}
                                        </button>

                                        {/* Download Button */}
                                        <a
                                            href={cert.pdf}
                                            download
                                            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--glass-bg)] hover:bg-[var(--glass-bg-light)] border border-[var(--glass-border)] text-[var(--text-secondary)] hover:text-white transition-all text-sm font-medium"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>

            {/* PDF Preview Modal */}
            {selectedPdf && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={closePreview}
                >
                    <div
                        className="relative w-full max-w-4xl h-[85vh] bg-[var(--bg-dark)] rounded-2xl overflow-hidden border border-[var(--glass-border)]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-4 border-b border-[var(--glass-border)] bg-[var(--glass-bg)]">
                            <h3 className="text-white font-semibold truncate pr-4">{selectedTitle}</h3>
                            <div className="flex items-center gap-2">
                                <a
                                    href={selectedPdf}
                                    download
                                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--primary-cyan)]/20 hover:bg-[var(--primary-cyan)]/30 text-[var(--primary-cyan)] text-sm font-medium transition-all"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Download
                                </a>
                                <button
                                    onClick={closePreview}
                                    className="p-2 rounded-lg hover:bg-[var(--glass-bg-light)] text-[var(--text-muted)] hover:text-white transition-all"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* PDF Embed */}
                        <iframe
                            src={selectedPdf}
                            className="w-full h-[calc(85vh-60px)]"
                            title={selectedTitle}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
