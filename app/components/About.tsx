"use client";

import Image from "next/image";
import { useLanguage } from "../i18n";
import { FiCpu, FiServer, FiDatabase, FiAward, FiCheckCircle } from "react-icons/fi";
import type { IconType } from "react-icons";

interface PillarItem {
    id: "aiSystems" | "architecture" | "dataInfra" | "growth";
    icon: IconType;
    fallbackTitle: string;
    fallbackDesc: string;
}

export default function About() {
    const { language, t } = useLanguage();
    const isVi = language === "vi";

    const pillars: PillarItem[] = [
        {
            id: "aiSystems",
            icon: FiCpu,
            fallbackTitle: isVi ? "AI Systems & Điều phối LLM" : "AI Systems & LLM Orchestration",
            fallbackDesc: isVi
                ? "Thiết kế pipeline suy luận hai tầng (Two-Stage), tối ưu hóa prompt, kiểm soát JSON schema đầu ra và tích hợp mô hình cục bộ với Ollama & PhoBERT."
                : "Designing two-stage inference pipelines, optimizing prompts, enforcing JSON schema outputs, and integrating local models with Ollama & PhoBERT.",
        },
        {
            id: "architecture",
            icon: FiServer,
            fallbackTitle: isVi ? "Kiến trúc hệ thống độ tin cậy cao" : "High-Reliability Architecture",
            fallbackDesc: isVi
                ? "Triển khai Transactional Outbox Pattern, Dead Letter Queue (DLQ), Publisher Confirms trên RabbitMQ và kiểm soát đồng thời với Redis Distributed Lock."
                : "Implementing Transactional Outbox Pattern, Dead Letter Queue (DLQ), Publisher Confirms on RabbitMQ, and concurrency control via Redis Distributed Locks.",
        },
        {
            id: "dataInfra",
            icon: FiDatabase,
            fallbackTitle: isVi ? "Hạ tầng dữ liệu & Phân tích OLAP" : "Data-Intensive & OLAP Infrastructure",
            fallbackDesc: isVi
                ? "Tối ưu hóa bảng cột ClickHouse cho truy vấn tổng hợp mạng xã hội dưới 15ms, kết hợp PostgreSQL async và MinIO S3 object storage."
                : "Optimizing ClickHouse columnar fact tables for sub-15ms social aggregation queries, paired with async PostgreSQL and MinIO S3 object storage.",
        },
        {
            id: "growth",
            icon: FiAward,
            fallbackTitle: isVi ? "Kỷ luật kỹ thuật & Tinh thần phát triển" : "Engineering Rigor & Continuous Growth",
            fallbackDesc: isVi
                ? "Sinh viên tiêu biểu HUTECH 2024 - 2025. Cam kết tuân thủ kiến trúc sạch, giám sát toàn diện (OpenTelemetry/Grafana) và tài liệu hóa chuẩn mực."
                : "Outstanding Student HUTECH 2024 - 2025. Committed to clean architecture principles, full-stack observability (OpenTelemetry/Grafana), and clean documentation.",
        },
    ];

    const highlightsList = [
        isVi
            ? "Tư duy kỹ thuật hệ thống & Kiến trúc phần mềm chuẩn mực"
            : "Systems engineering mindset & production-grade architecture",
        isVi
            ? "Kinh nghiệm thực chiến với Microservices phân tán & LLM Local"
            : "Real-world experience with distributed microservices & local LLMs",
        isVi
            ? "Sinh viên tiêu biểu Đại học Công nghệ TP.HCM (HUTECH) 2024 - 2025"
            : "Outstanding Student at HUTECH (2024 - 2025)",
    ];

    return (
        <section id="about" className="py-20 md:py-28 relative">
            <div className="max-w-7xl mx-auto px-6 w-full">
                {/* Section Header */}
                <div className="text-left mb-12">
                    <div className="pill-tag mb-4 w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                        <span>{t.about?.subtitle || (isVi ? "Giới thiệu" : "Introduction")}</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                        {t.about?.title || (isVi ? "Về tôi" : "About Me")}
                    </h2>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                    {/* Left Column (5/12): Profile Card & Core Meta */}
                    <div className="lg:col-span-5">
                        <div className="clean-card p-6 sm:p-8 flex flex-col items-center text-center">
                            {/* Portrait Frame */}
                            <div className="relative aspect-[4/5] w-full max-w-[280px] rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-card-hover)] shadow-xs mb-6">
                                <Image
                                    src="/profile.webp"
                                    alt={t.hero?.name || "Phạm Văn Sỹ"}
                                    fill
                                    sizes="(max-width: 768px) 280px, 320px"
                                    className="object-cover object-top"
                                />
                            </div>

                            {/* Name & Title */}
                            <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
                                {t.hero?.name || "Phạm Văn Sỹ"}
                            </h3>
                            <p className="text-sm font-mono text-[var(--text-muted)] mt-1 mb-4">
                                {t.hero?.role || "AI & Distributed Systems Engineer"}
                            </p>

                            {/* Quick Status Pill */}
                            <div className="pill-tag mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                <span>{isVi ? "Sẵn sàng cho cơ hội mới" : "Open for Opportunities"}</span>
                            </div>

                            {/* Key Highlights Checklist */}
                            <div className="w-full pt-6 border-t border-[var(--border-subtle)] text-left">
                                <div className="space-y-3">
                                    {highlightsList.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]"
                                        >
                                            <FiCheckCircle
                                                className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5"
                                                aria-hidden="true"
                                            />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (7/12): Engineering Story & 4 Pillars */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                        {/* Narrative */}
                        <div className="mb-8">
                            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
                                {t.about?.greeting || (isVi ? "Xin chào! Tôi là" : "Hello! I am")}{" "}
                                <span className="text-[var(--text-primary)]">
                                    {t.hero?.name || "Phạm Văn Sỹ"}
                                </span>
                            </h3>
                            <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed mb-4">
                                {t.about?.description1}
                            </p>
                            <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed">
                                {t.about?.description2}
                            </p>
                        </div>

                        {/* 4 Pillars Header */}
                        <div className="mb-4">
                            <h4 className="text-xs uppercase tracking-wider font-bold text-[var(--text-muted)]">
                                {isVi ? "4 Trụ Cột Kỹ Thuật Cốt Lõi" : "4 Core Engineering Pillars"}
                            </h4>
                        </div>

                        {/* 4 Pillars 2x2 Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {pillars.map((pillar) => {
                                const Icon = pillar.icon;
                                const pillarData = t.about?.pillars?.[pillar.id];
                                const title = pillarData?.title || pillar.fallbackTitle;
                                const desc = pillarData?.description || pillar.fallbackDesc;

                                return (
                                    <div
                                        key={pillar.id}
                                        className="clean-card p-5 flex flex-col justify-start hover:border-[var(--text-muted)] transition-all"
                                    >
                                        <div className="flex items-center gap-3 mb-2.5">
                                            <div className="w-9 h-9 rounded-xl bg-[var(--bg-card-hover)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-primary)] shrink-0">
                                                <Icon className="w-4 h-4" aria-hidden="true" />
                                            </div>
                                            <h5 className="font-bold text-sm sm:text-base text-[var(--text-primary)] tracking-tight">
                                                {title}
                                            </h5>
                                        </div>
                                        <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                                            {desc}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
