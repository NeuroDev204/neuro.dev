"use client";

import { useState } from "react";
import { useLanguage } from "../i18n";
import ArchitectureModal from "./ArchitectureModal";
import {
    FiLayers,
    FiLock,
    FiExternalLink,
    FiGithub,
    FiCheckCircle,
    FiCpu,
    FiServer,
    FiShield,
} from "react-icons/fi";
import {
    SiPython,
    SiFastapi,
    SiOllama,
    SiRabbitmq,
    SiClickhouse,
    SiPostgresql,
    SiDocker,
    SiSpringboot,
    SiOnnx,
    SiRedis,
    SiNeo4J,
    SiMysql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import type { IconType } from "react-icons";

/**
 * Maps technology names to corresponding vector icons.
 */
function getTechIcon(name: string): IconType | null {
    const n = name.toLowerCase();
    if (n.includes("python")) return SiPython;
    if (n.includes("fastapi")) return SiFastapi;
    if (n.includes("ollama") || n.includes("qwen")) return SiOllama;
    if (n.includes("rabbitmq")) return SiRabbitmq;
    if (n.includes("clickhouse")) return SiClickhouse;
    if (n.includes("postgres")) return SiPostgresql;
    if (n.includes("docker")) return SiDocker;
    if (n.includes("java") && !n.includes("script")) return FaJava;
    if (n.includes("spring")) return SiSpringboot;
    if (n.includes("phobert") || n.includes("gemini")) return FiCpu;
    if (n.includes("onnx")) return SiOnnx;
    if (n.includes("keycloak")) return FiShield;
    if (n.includes("neo4j")) return SiNeo4J;
    if (n.includes("redis")) return SiRedis;
    if (n.includes("socket")) return FiServer;
    if (n.includes("webrtc")) return FiLayers;
    if (n.includes("mysql")) return SiMysql;
    if (n.includes("jwt")) return FiShield;
    if (n.includes("vnpay")) return FiCheckCircle;
    if (n.includes("restful") || n.includes("api")) return FiServer;
    return null;
}

export default function Projects() {
    const [isArchitectureModalOpen, setIsArchitectureModalOpen] = useState(false);
    const { language, t } = useLanguage();
    const isVi = language === "vi";

    // Fallback data for robust rendering
    const aidtDefaults = {
        title: "HUTECH-AIDT Social Heartbeat",
        tagline: isVi
            ? "Hệ thống Social Listening & Phân tích tâm lý đa khía cạnh hướng sự kiện"
            : "Event-Driven AI Social Listening & Aspect-Based Sentiment Platform",
        category: "Featured System Architecture • HUTECH Research",
        badge: isVi ? "Kiến trúc hệ thống tiêu biểu" : "Flagship System Architecture",
        problem: isVi
            ? "Xử lý hàng chục nghìn bài đăng mạng xã hội phân mảnh theo thời gian thực để phát hiện sớm khủng hoảng truyền thông của trường học. Hệ thống yêu cầu tự động thu thập không bị chặn, suy luận LLM đa tầng tiếng Việt chính xác và phân tích xu hướng tức thời với độ trễ cực thấp mà không phụ thuộc vào API đắt đỏ từ bên thứ ba."
            : "Processing tens of thousands of fragmented social media posts in real time for early detection of institutional PR crises. Required resilient anti-detection scraping, accurate multi-stage Vietnamese LLM inference, and instantaneous trend analytics without relying on expensive third-party APIs.",
        highlights: [
            {
                label: isVi ? "Kiến trúc 6 Microservices" : "6 Microservices Architecture",
                desc: isVi
                    ? "Tách biệt rõ ràng: Crawler (Playwright), Ingestion/Processing, AI Inference, Analytics Engine, Core Backend, và Interactive Dashboard."
                    : "Decoupled pipeline: Crawler (Playwright), Ingestion/Processing, AI Inference, Analytics Engine, Core Backend, and Interactive Dashboard.",
            },
            {
                label: isVi ? "Suy luận LLM Hai Tầng (Two-Stage)" : "Two-Stage LLM Inference",
                desc: isVi
                    ? "Giai đoạn 1 phân loại đa nhãn khía cạnh, Giai đoạn 2 đánh giá cảm xúc chuyên sâu với Ollama Qwen 2.5/3:8B và Pydantic schema validation."
                    : "Stage 1 extracts multi-label aspects, Stage 2 performs aspect-based sentiment scoring via local Ollama Qwen 2.5/3:8B with Pydantic schema validation.",
            },
            {
                label: isVi ? "Độ tin cậy sự kiện cao (Event Reliability)" : "High Event Reliability",
                desc: isVi
                    ? "Transactional Outbox Pattern với Publisher Confirms và Dead Letter Queue (DLQ) trên RabbitMQ Topic Exchange, đảm bảo không thất thoát dữ liệu sự kiện."
                    : "Transactional Outbox Pattern with Publisher Confirms and Dead Letter Queue (DLQ) over RabbitMQ Topic Exchange, guaranteeing zero event loss.",
            },
            {
                label: isVi ? "Phân tích OLAP siêu tốc (< 15ms)" : "Sub-15ms OLAP Analytics",
                desc: isVi
                    ? "Kho dữ liệu cột ClickHouse tối ưu hóa schema fact-tables cho các truy vấn tổng hợp xu hướng, trực quan hóa trên Grafana dashboard thời gian thực."
                    : "ClickHouse columnar fact tables optimized for aggregation queries, powering real-time Grafana trend dashboards under 15ms latency.",
            },
        ],
        tech: [
            "Python",
            "FastAPI",
            "Ollama / Qwen3",
            "RabbitMQ",
            "ClickHouse",
            "PostgreSQL",
            "Docker",
            "Playwright",
        ],
        viewDiagram: isVi ? "Xem Sơ Đồ Kiến Trúc Hệ Thống" : "View Architecture Diagram",
        repoTag: "Private Academic Research • HUTECH",
    };

    const blurDefaults = {
        title: "Blur Social Network",
        tagline: isVi
            ? "Nền tảng mạng xã hội Microservices với AI kiểm duyệt tiếng Việt PhoBERT v2"
            : "Microservices Social Network with PhoBERT v2 Vietnamese Moderation",
        category: isVi ? "Mạng xã hội Microservices • PhoBERT v2" : "Social Microservices • PhoBERT v2 AI",
        description: isVi
            ? "Nền tảng mạng xã hội full-stack theo kiến trúc microservices: kiểm duyệt bình luận tiếng Việt tự động bằng PhoBERT v2 trên ONNX Runtime, trợ lý AI Gemini, chat realtime Socket.IO, gọi video/audio WebRTC, đồ thị mạng xã hội Neo4j, xác thực Keycloak OIDC/JWT và bộ nhớ đệm đa tầng Redis + Redisson."
            : "Full-stack microservices social platform featuring automated Vietnamese comment moderation via PhoBERT v2 on ONNX Runtime, Gemini AI assistant, Socket.IO realtime chat, WebRTC video/audio calls, Neo4j social graph, Keycloak OIDC/JWT, and multi-level Redis + Redisson caching.",
        features: [
            isVi
                ? "Kiểm duyệt bình luận tiếng Việt tự động với PhoBERT v2 xuất sang ONNX Runtime tối ưu độ trễ"
                : "Automated Vietnamese comment moderation via PhoBERT v2 exported to ONNX Runtime for low-latency inference",
            isVi
                ? "Trợ lý AI Gemini hỗ trợ tương tác và gợi ý nội dung thông minh"
                : "Gemini AI Assistant for intelligent interactions and content suggestions",
            isVi
                ? "Xác thực phân tán Keycloak 26.1 (OIDC/JWT) tích hợp Spring OAuth2 Resource Server"
                : "Distributed authentication via Keycloak 26.1 (OIDC/JWT) with Spring OAuth2 Resource Server",
            isVi
                ? "Chat Realtime (Socket.IO) & Cuộc gọi Video/Audio P2P WebRTC"
                : "Realtime Chat (Socket.IO) & P2P WebRTC Video/Audio Calling",
            isVi
                ? "Đồ thị bạn bè Neo4j kết hợp luồng cấp dữ liệu CQRS Feed"
                : "Neo4j Social Graph engine combined with CQRS timeline feeds",
            isVi
                ? "Bộ nhớ đệm đa tầng: Caffeine + Redis + Redisson Distributed Lock"
                : "Multi-level caching: Caffeine + Redis + Redisson Distributed Locking",
        ],
        tech: [
            "Java",
            "Spring Boot 3",
            "PhoBERT v2",
            "ONNX Runtime",
            "Keycloak",
            "Neo4j",
            "Redis",
            "Socket.IO",
            "WebRTC",
            "Docker",
        ],
        github: "https://github.com/NeuroDev204/Blur",
        demo: "https://github.com/NeuroDev204/Blur",
    };

    const neuroEcommerceDefaults = {
        title: "Neuro Ecommerce Platform",
        tagline: isVi
            ? "Hệ thống thương mại điện tử hiệu năng cao với Spring Boot & MySQL"
            : "High-Performance Ecommerce Backend with Spring Boot & MySQL",
        category: isVi ? "Backend Phân Tán • Thương Mại Điện Tử" : "High-Concurrency Backend • E-Commerce",
        description: isVi
            ? "Hệ thống backend e-commerce hiệu năng cao bằng Spring Boot và MySQL, cung cấp hệ thống RESTful APIs hoàn chỉnh: quản lý danh mục sản phẩm, vận hành giỏ hàng, xử lý đơn hàng, điều phối giao dịch flash sale chống race condition và tích hợp cổng thanh toán VNPay."
            : "High-performance e-commerce backend built with Spring Boot and MySQL, providing comprehensive RESTful APIs: catalog management, shopping cart operations, order processing, race-condition protected flash sale transactions, and VNPay payment gateway integration.",
        features: [
            isVi
                ? "Thiết kế kiến trúc RESTful APIs chuẩn mực và bảo mật JWT"
                : "Standardized RESTful API architecture with JWT security enforcement",
            isVi
                ? "Quản lý danh mục sản phẩm và đồng bộ tồn kho thời gian thực"
                : "Product catalog management with real-time inventory synchronization",
            isVi
                ? "Cơ chế khóa giao dịch đơn hàng và xử lý flash sale chịu tải"
                : "Transactional locking for concurrency-safe checkout and flash sales",
            isVi
                ? "Tích hợp cổng thanh toán trực tuyến an toàn VNPay Sandbox"
                : "Secure online payment gateway integration via VNPay Sandbox",
            isVi
                ? "Tối ưu hóa chỉ mục (indexing) và truy vấn quan hệ MySQL"
                : "MySQL schema indexing and relational query performance tuning",
        ],
        tech: [
            "Java",
            "Spring Boot",
            "MySQL",
            "JWT Security",
            "VNPay Gateway",
            "RESTful APIs",
            "Docker",
        ],
        github: "https://github.com/NeuroDev204/Neuro_Ecommerce_Backend",
        demo: "https://github.com/NeuroDev204/Neuro_Ecommerce_Backend",
    };

    const aidt = {
        ...aidtDefaults,
        ...(t.projects?.items?.aidt || {}),
    };

    const blur = {
        ...blurDefaults,
        ...(t.projects?.items?.blur || {}),
    };

    const neuroEcommerce = {
        ...neuroEcommerceDefaults,
        ...(t.projects?.items?.neuroEcommerce || {}),
    };

    const codeLabel = isVi ? "Mã nguồn GitHub" : "GitHub Repository";
    const demoLabel = isVi ? "Chi tiết / Demo" : "Details / Demo";

    return (
        <section id="projects" className="py-20 md:py-28 relative">
            <div className="max-w-7xl mx-auto px-6 w-full">
                {/* Section Header */}
                <div className="text-left mb-12">
                    <div className="pill-tag mb-4 w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                        <span>
                            {t.projects?.subtitle || (isVi ? "Dự án" : "Projects")}
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                        {t.projects?.title || (isVi ? "Dự án nổi bật" : "Featured Projects")}
                    </h2>
                    {t.projects?.description && (
                        <p className="mt-3 text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
                            {t.projects.description}
                        </p>
                    )}
                </div>

                {/* Flagship Feature Card: HUTECH-AIDT Social Heartbeat */}
                <div className="clean-card p-6 sm:p-8 md:p-10 mb-8 relative overflow-hidden">
                    {/* Top Row: Category Tag & Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="pill-tag font-mono text-xs text-[var(--text-primary)] border-[var(--border-subtle)]">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                                <span>{aidt.category}</span>
                            </span>
                            {aidt.badge && (
                                <span className="pill-tag text-xs font-medium">
                                    {aidt.badge}
                                </span>
                            )}
                        </div>
                        <span className="text-xs font-mono text-[var(--text-muted)] tracking-wider uppercase">
                            Event-Driven Architecture
                        </span>
                    </div>

                    {/* Card Title & Subtitle */}
                    <div className="mb-6">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-2">
                            {aidt.title}
                        </h3>
                        <p className="text-base sm:text-lg text-[var(--text-secondary)] font-medium">
                            {aidt.tagline}
                        </p>
                    </div>

                    {/* Problem Statement / Engineering Challenge */}
                    <div className="p-4 sm:p-5 rounded-xl bg-[var(--bg-primary)]/70 border border-[var(--border-subtle)] mb-8">
                        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-1.5">
                            {isVi
                                ? "Bài toán thực tế & Thách thức kỹ thuật"
                                : "Engineering Challenge & Production Context"}
                        </div>
                        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                            {aidt.problem}
                        </p>
                    </div>

                    {/* 4 Technical Highlights (2-column responsive grid) */}
                    <div className="mb-8">
                        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-3">
                            {isVi
                                ? "Điểm nhấn kiến trúc & Đột phá kỹ thuật"
                                : "Architectural Highlights & Technical Milestones"}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {aidt.highlights.map((highlight, idx) => (
                                <div
                                    key={idx}
                                    className="p-4 sm:p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--text-muted)] transition-colors flex items-start gap-3.5"
                                >
                                    <div className="w-7 h-7 rounded-lg bg-[var(--bg-card-hover)] border border-[var(--border-subtle)] flex items-center justify-center shrink-0 mt-0.5 text-emerald-500">
                                        <FiCheckCircle className="w-4 h-4" aria-hidden="true" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-sm font-bold text-[var(--text-primary)]">
                                            {highlight.label}
                                        </h4>
                                        <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                                            {highlight.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Technology Stack Pills */}
                    <div className="mb-8">
                        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-3">
                            {isVi ? "Ngăn xếp công nghệ cốt lõi" : "Core Technology Stack"}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {aidt.tech.map((tag) => {
                                const TechIcon = getTechIcon(tag);
                                return (
                                    <span
                                        key={tag}
                                        className="pill-tag hover:border-[var(--text-muted)] transition-colors"
                                    >
                                        {TechIcon && (
                                            <TechIcon
                                                className="w-3.5 h-3.5 shrink-0 text-[var(--text-secondary)]"
                                                aria-hidden="true"
                                            />
                                        )}
                                        <span>{tag}</span>
                                    </span>
                                );
                            })}
                        </div>
                    </div>

                    {/* Action Row */}
                    <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-3">
                            <button
                                type="button"
                                onClick={() => setIsArchitectureModalOpen(true)}
                                className="btn-pill-primary cursor-pointer text-sm"
                                aria-label={
                                    aidt.viewDiagram ||
                                    (isVi
                                        ? "Xem Sơ Đồ Kiến Trúc Hệ Thống"
                                        : "View Architecture Diagram")
                                }
                            >
                                <FiLayers className="w-4 h-4 shrink-0" aria-hidden="true" />
                                <span>{aidt.viewDiagram}</span>
                            </button>
                        </div>

                        <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] bg-[var(--bg-card-hover)] select-none">
                            <FiLock className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0" aria-hidden="true" />
                            <span>{aidt.repoTag}</span>
                        </div>
                    </div>
                </div>

                {/* 2 Supporting Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Card 1: Blur Social Network */}
                    <div className="clean-card p-6 sm:p-8 flex flex-col justify-between">
                        <div>
                            {/* Header Tag */}
                            <div className="flex items-center justify-between gap-2 mb-4">
                                <span className="pill-tag font-mono text-xs">
                                    {blur.category}
                                </span>
                                <span className="text-xs font-mono text-[var(--text-muted)]">
                                    Microservices
                                </span>
                            </div>

                            {/* Title & Subtitle */}
                            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)] mb-2">
                                {blur.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-medium mb-4">
                                {blur.tagline}
                            </p>

                            {/* Description */}
                            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                                {blur.description}
                            </p>

                            {/* Key Features Bullet List */}
                            <div className="mb-6">
                                <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-3">
                                    {isVi ? "Tính năng & Kiến trúc nổi bật" : "Key Architectural Features"}
                                </div>
                                <ul className="space-y-2">
                                    {blur.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div>
                            {/* Tech Stack Pills */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {blur.tech.map((tag) => {
                                    const TechIcon = getTechIcon(tag);
                                    return (
                                        <span
                                            key={tag}
                                            className="pill-tag hover:border-[var(--text-muted)] transition-colors"
                                        >
                                            {TechIcon && (
                                                <TechIcon
                                                    className="w-3.5 h-3.5 shrink-0 text-[var(--text-secondary)]"
                                                    aria-hidden="true"
                                                />
                                            )}
                                            <span>{tag}</span>
                                        </span>
                                    );
                                })}
                            </div>

                            {/* Action Links */}
                            <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-3">
                                <a
                                    href={blur.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-pill-secondary text-xs sm:text-sm cursor-pointer"
                                    aria-label={`${blur.title} ${codeLabel}`}
                                >
                                    <FiGithub className="w-4 h-4 shrink-0" aria-hidden="true" />
                                    <span>{codeLabel}</span>
                                </a>
                                <a
                                    href={blur.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-pill-secondary text-xs sm:text-sm cursor-pointer"
                                    aria-label={`${blur.title} ${demoLabel}`}
                                >
                                    <FiExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
                                    <span>{demoLabel}</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Neuro Ecommerce Platform */}
                    <div className="clean-card p-6 sm:p-8 flex flex-col justify-between">
                        <div>
                            {/* Header Tag */}
                            <div className="flex items-center justify-between gap-2 mb-4">
                                <span className="pill-tag font-mono text-xs">
                                    {neuroEcommerce.category}
                                </span>
                                <span className="text-xs font-mono text-[var(--text-muted)]">
                                    Spring Boot & MySQL
                                </span>
                            </div>

                            {/* Title & Subtitle */}
                            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)] mb-2">
                                {neuroEcommerce.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-medium mb-4">
                                {neuroEcommerce.tagline}
                            </p>

                            {/* Description */}
                            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                                {neuroEcommerce.description}
                            </p>

                            {/* Key Features Bullet List */}
                            <div className="mb-6">
                                <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-3">
                                    {isVi ? "Tính năng & Kiến trúc nổi bật" : "Key Architectural Features"}
                                </div>
                                <ul className="space-y-2">
                                    {neuroEcommerce.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div>
                            {/* Tech Stack Pills */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {neuroEcommerce.tech.map((tag) => {
                                    const TechIcon = getTechIcon(tag);
                                    return (
                                        <span
                                            key={tag}
                                            className="pill-tag hover:border-[var(--text-muted)] transition-colors"
                                        >
                                            {TechIcon && (
                                                <TechIcon
                                                    className="w-3.5 h-3.5 shrink-0 text-[var(--text-secondary)]"
                                                    aria-hidden="true"
                                                />
                                            )}
                                            <span>{tag}</span>
                                        </span>
                                    );
                                })}
                            </div>

                            {/* Action Links */}
                            <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-3">
                                <a
                                    href={neuroEcommerce.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-pill-secondary text-xs sm:text-sm cursor-pointer"
                                    aria-label={`${neuroEcommerce.title} ${codeLabel}`}
                                >
                                    <FiGithub className="w-4 h-4 shrink-0" aria-hidden="true" />
                                    <span>{codeLabel}</span>
                                </a>
                                <a
                                    href={neuroEcommerce.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-pill-secondary text-xs sm:text-sm cursor-pointer"
                                    aria-label={`${neuroEcommerce.title} ${demoLabel}`}
                                >
                                    <FiExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
                                    <span>{demoLabel}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Architecture Modal Component */}
                <ArchitectureModal
                    isOpen={isArchitectureModalOpen}
                    onClose={() => setIsArchitectureModalOpen(false)}
                />
            </div>
        </section>
    );
}
