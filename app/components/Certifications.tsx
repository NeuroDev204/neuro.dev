"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../i18n";

const certifications = [
    {
        year: "2024",
        title: "Java Foundations Professional Certificate",
        issuer: "JetBrains",
        pdf: "/Java Foundations Professional Certificate by JetBrains.pdf",
    },
    {
        year: "2024",
        title: "Java Masterclass: The Complete Guide",
        issuer: "Udemy",
        pdf: "/Java MasterClass.pdf",
    },
    {
        year: "2024",
        title: "Spring Boot 3, Spring 6 & Hibernate for Beginners",
        issuer: "Udemy",
        pdf: "/Spring boot 3, Spring 6 & Hibernate For beginners.pdf",
    },
    {
        year: "2024",
        title: "Hands-On React: Build Advanced React JS Frontend",
        issuer: "Udemy",
        pdf: "/Hands-On React. Build advanced React Js Frontend with expert.pdf",
    },
    {
        year: "2024",
        title: "Ethical Hacker",
        issuer: "Cisco",
        pdf: "/Ethical_Hacker_Badge20241110-28-uzwtcw.pdf",
    },
    {
        year: "2024",
        title: "Practical Next.js & React - Build A Real Webapp",
        issuer: "Udemy",
        pdf: "/Practical Nextjs & React - Build A real Webapp with nextjs.pdf",
    },
    {
        year: "2024",
        title: "Java and C++ Complete Course",
        issuer: "Udemy",
        pdf: "/Java Adn C++ Complete Course.pdf",
    },
    {
        year: "2024",
        title: "CSS3 and Bootstrap for Absolute Beginners",
        issuer: "Udemy",
        pdf: "/CSS3 and Bootstrap for absolute Beginners.pdf",
    },
    {
        year: "2024",
        title: "Master Basics of Mathematics",
        issuer: "Udemy",
        pdf: "/Master Basics of Mathematics.pdf",
    },
];

export default function Certifications() {
    const { language } = useLanguage();
    const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
    const [selectedTitle, setSelectedTitle] = useState<string>("");

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
            <section id="certifications" className="py-20 md:py-28 relative">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Section Title */}
                    <div className="text-left mb-12">
                        <div className="pill-tag mb-4 w-fit">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                            <span>{language === "vi" ? "Chứng chỉ" : "Certifications"}</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                            {language === "vi" ? "Chứng nhận & Thành tựu" : "Certifications & Achievements"}
                        </h2>
                    </div>

                    {/* Grid of Certification Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="clean-card p-6 flex flex-col justify-between"
                            >
                                <div>
                                    {/* Header: Issuer & Issue Date */}
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="pill-tag font-mono text-xs">
                                            {cert.issuer}
                                        </span>
                                        <span className="text-xs font-medium text-[var(--text-muted)]">
                                            {cert.year}
                                        </span>
                                    </div>

                                    {/* Certificate Title */}
                                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 line-clamp-2">
                                        {cert.title}
                                    </h3>
                                </div>

                                {/* Credential Verification Link Badge */}
                                <div className="pt-4 mt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                                    <button
                                        onClick={() => openPreview(cert.pdf, cert.title)}
                                        className="btn-pill-secondary !text-xs !py-1.5 !px-3.5 cursor-pointer"
                                    >
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                        <span>{language === "vi" ? "Xác minh chứng chỉ" : "Verify Credential"}</span>
                                    </button>

                                    <a
                                        href={cert.pdf}
                                        download
                                        title={language === "vi" ? "Tải xuống PDF" : "Download PDF"}
                                        className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] transition-colors"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PDF Preview Modal */}
            {selectedPdf && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
                    onClick={closePreview}
                >
                    <div
                        className="relative w-full max-w-4xl h-[85vh] bg-[var(--bg-card)] rounded-2xl overflow-hidden border border-[var(--border-subtle)] shadow-2xl flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-4 border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]">
                            <h3 className="text-lg font-bold text-[var(--text-primary)] truncate pr-4">
                                {selectedTitle}
                            </h3>
                            <div className="flex items-center gap-2">
                                <a
                                    href={selectedPdf}
                                    download
                                    className="btn-pill-secondary !text-xs !py-1.5 !px-3.5"
                                >
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Download
                                </a>
                                <button
                                    onClick={closePreview}
                                    className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] transition-colors cursor-pointer"
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
                            className="w-full flex-grow border-0"
                            title={selectedTitle}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
