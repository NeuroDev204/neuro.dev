"use client";

import { useLanguage } from "../i18n";
import {
    FaCartShopping,
    FaCommentDots,
    FaShieldHalved,
    FaChartLine,
    FaGithub,
    FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import type { IconType } from "react-icons";

interface ProjectItem {
    id: number;
    title: string;
    description: {
        en: string;
        vi: string;
    };
    tech: string[];
    icon: IconType;
    github: string;
    demo: string;
}

const projectsData: ProjectItem[] = [
    {
        id: 1,
        title: "Neuro Ecommerce Backend",
        description: {
            en: "High-performance Spring Boot and MySQL e-commerce backend providing RESTful APIs for product catalog, shopping cart operations, VNPay payment integration, and flash sale transaction management.",
            vi: "Hệ thống backend e-commerce hiệu năng cao bằng Spring Boot và MySQL, cung cấp RESTful APIs quản lý sản phẩm, giỏ hàng, tích hợp thanh toán VNPay và xử lý giao dịch flash sale.",
        },
        tech: ["Java", "Spring Boot", "SQL", "Microservices", "AWS", "Docker"],
        icon: FaCartShopping,
        github: "https://github.com/NeuroDev204/Neuro_Ecommerce_Backend",
        demo: "https://github.com/NeuroDev204/Neuro_Ecommerce_Backend",
    },
    {
        id: 2,
        title: "Blur Social Network",
        description: {
            en: "Distributed microservices social platform featuring WebRTC video/audio calls, Socket.IO realtime chat, CQRS feed engine, Neo4j social graph, Keycloak OIDC, and PhoBERT v2 AI content moderation.",
            vi: "Nền tảng mạng xã hội microservices full-stack tích hợp gọi video/audio WebRTC, chat realtime Socket.IO, CQRS feed engine, đồ thị xã hội Neo4j, Keycloak OIDC và AI kiểm duyệt PhoBERT v2.",
        },
        tech: ["Java", "Spring Boot", "Microservices", "Kafka", "Neo4j", "Docker"],
        icon: FaCommentDots,
        github: "https://github.com/NeuroDev204/Blur",
        demo: "https://github.com/NeuroDev204/Blur",
    },
    {
        id: 3,
        title: "Microservices Banking Gateway",
        description: {
            en: "Secure financial transaction gateway featuring Spring Cloud API Gateway, OAuth2/JWT security, Saga pattern distributed transactions, Resilience4j circuit breakers, and rate limiting.",
            vi: "Cổng giao dịch tài chính bảo mật với Spring Cloud API Gateway, bảo mật OAuth2/JWT, điều phối giao dịch phân tán Saga pattern, Resilience4j circuit breaker và giới hạn lưu lượng.",
        },
        tech: ["Java", "Spring Boot", "SQL", "Microservices", "AWS", "Docker"],
        icon: FaShieldHalved,
        github: "https://github.com/NeuroDev204",
        demo: "https://github.com/NeuroDev204",
    },
    {
        id: 4,
        title: "Realtime Analytics Pipeline",
        description: {
            en: "Event-driven data pipeline for real-time telemetry processing using Apache Kafka streams, Redis pub/sub caching, Docker container orchestration, and automated Prometheus/Grafana metrics.",
            vi: "Hệ thống xử lý dữ liệu sự kiện theo thời gian thực sử dụng luồng Apache Kafka, bộ nhớ đệm Redis pub/sub, điều phối container Docker và giám sát chỉ số tự động với Prometheus/Grafana.",
        },
        tech: ["Java", "Spring Boot", "SQL", "Microservices", "AWS", "Docker"],
        icon: FaChartLine,
        github: "https://github.com/NeuroDev204",
        demo: "https://github.com/NeuroDev204",
    },
];

export default function Projects() {
    const { language } = useLanguage();
    const isVi = language === "vi";

    const sectionTitle = isVi ? "Dự án nổi bật" : "Featured Projects";
    const codeText = isVi ? "Mã nguồn" : "Code";
    const demoText = isVi ? "Thử nghiệm" : "Live Demo";

    return (
        <section id="projects" className="py-20 md:py-28 relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Headline */}
                <h2 className="font-serif-editorial text-3xl md:text-4xl font-bold mb-8 text-[var(--text-primary)]">
                    {sectionTitle}
                </h2>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectsData.map((project) => {
                        const IconComponent = project.icon;
                        return (
                            <div
                                key={project.id}
                                className="editorial-card p-6 md:p-8 flex flex-col justify-between hover:-translate-y-1 transition-all duration-200"
                            >
                                <div>
                                    {/* Top row icon container */}
                                    <div className="w-14 h-14 rounded-2xl bg-[var(--accent-mint-light)] text-[var(--accent-mint-text)] flex items-center justify-center text-2xl mb-6 shadow-sm border border-[var(--border-subtle)]">
                                        <IconComponent />
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-serif-editorial text-2xl font-bold text-[var(--text-primary)] mb-3 hover:text-[var(--accent-mint-text)] transition-colors">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            {project.title}
                                        </a>
                                    </h3>

                                    {/* Description */}
                                    <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed mb-6">
                                        {isVi ? project.description.vi : project.description.en}
                                    </p>
                                </div>

                                <div>
                                    {/* Tech Pills */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 text-xs font-semibold rounded-full bg-[var(--accent-mint-light)] text-[var(--accent-mint-text)] border border-[var(--accent-mint)]/40"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action buttons */}
                                    <div className="flex items-center gap-3">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 text-xs font-medium rounded-full border border-[var(--border-subtle)] text-[var(--text-primary)] hover:bg-[var(--accent-mint-light)] hover:text-[var(--accent-mint-text)] hover:border-[var(--accent-mint)] transition-all flex items-center gap-2"
                                        >
                                            <FaGithub className="text-sm" />
                                            <span>{codeText}</span>
                                        </a>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 text-xs font-medium rounded-full border border-[var(--border-subtle)] text-[var(--text-primary)] hover:bg-[var(--accent-mint-light)] hover:text-[var(--accent-mint-text)] hover:border-[var(--accent-mint)] transition-all flex items-center gap-2"
                                        >
                                            <FaArrowUpRightFromSquare className="text-xs" />
                                            <span>{demoText}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

