"use client";

import { useLanguage } from "../i18n";
import {
    SiPython,
    SiFastapi,
    SiOllama,
    SiPydantic,
    SiOnnx,
    SiPytorch,
    SiSpringboot,
    SiRabbitmq,
    SiApachekafka,
    SiGraphql,
    SiRedis,
    SiClickhouse,
    SiPostgresql,
    SiMinio,
    SiNeo4J,
    SiMysql,
    SiDocker,
    SiPrometheus,
    SiGrafana,
    SiOpentelemetry,
    SiLinux,
    SiGit,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import {
    FiCpu,
    FiServer,
    FiDatabase,
    FiActivity,
    FiCheckCircle,
    FiLayers,
} from "react-icons/fi";
import type { IconType } from "react-icons";

type ClusterKey = "ai" | "backend" | "data" | "devops";

interface ClusterConfig {
    key: ClusterKey;
    icon: IconType;
    defaultTitle: string;
    defaultDescription: string;
    defaultProof: string;
    defaultSkills: string[];
}

const clusterConfigs: ClusterConfig[] = [
    {
        key: "ai",
        icon: FiCpu,
        defaultTitle: "AI Engineering & LLM Systems",
        defaultDescription:
            "Building production AI systems, local model orchestration, and Vietnamese NLP processing pipelines.",
        defaultProof:
            "Two-stage LLM inference pipeline with automatic JSON schema self-repair and ONNX Runtime content moderation.",
        defaultSkills: [
            "Python",
            "FastAPI",
            "Ollama (Qwen3:8B)",
            "Pydantic v2",
            "PhoBERT v2",
            "ONNX Runtime",
            "Prompt Engineering",
            "PyTorch",
        ],
    },
    {
        key: "backend",
        icon: FiServer,
        defaultTitle: "Distributed Backend & Event-Driven",
        defaultDescription:
            "Architecting high-throughput distributed microservices with guaranteed data consistency and asynchronous messaging.",
        defaultProof:
            "Transactional Outbox Pattern with Publisher Confirms and Dead Letter Queue on RabbitMQ.",
        defaultSkills: [
            "Java",
            "Spring Boot 3",
            "RabbitMQ",
            "Apache Kafka",
            "Microservices",
            "RESTful APIs",
            "Redis / Redisson",
            "Strawberry GraphQL",
        ],
    },
    {
        key: "data",
        icon: FiDatabase,
        defaultTitle: "Data & Analytics Infrastructure",
        defaultDescription:
            "Large-scale data storage and analytics, real-time analytical query optimization, and social graph management.",
        defaultProof:
            "ClickHouse columnar tables optimized for social trend aggregation queries with sub-15ms response latency.",
        defaultSkills: [
            "ClickHouse OLAP",
            "PostgreSQL (Async)",
            "MinIO S3",
            "Neo4j Graph",
            "MySQL",
            "Alembic",
            "Redis Cache",
            "SQL Optimization",
        ],
    },
    {
        key: "devops",
        icon: FiActivity,
        defaultTitle: "DevOps, Observability & Tooling",
        defaultDescription:
            "Automated container deployments, centralized system observability, and distributed web data collection.",
        defaultProof:
            "Full-stack centralized observability (Prometheus, Grafana, Loki) with Playwright adaptive crawl rate limiting.",
        defaultSkills: [
            "Docker / Compose",
            "Prometheus",
            "Grafana",
            "Loki",
            "OpenTelemetry",
            "Playwright",
            "APScheduler",
            "Linux / Bash",
            "Git / GitHub Actions",
        ],
    },
];

function getSkillIcon(skillName: string): IconType | null {
    const n = skillName.toLowerCase();
    if (n.includes("python")) return SiPython;
    if (n.includes("fastapi")) return SiFastapi;
    if (n.includes("ollama")) return SiOllama;
    if (n.includes("pydantic")) return SiPydantic;
    if (n.includes("onnx")) return SiOnnx;
    if (n.includes("pytorch")) return SiPytorch;
    if (n.includes("phobert")) return FiCpu;
    if (n.includes("prompt")) return FiCpu;

    if (n.includes("java") && !n.includes("script")) return FaJava;
    if (n.includes("spring")) return SiSpringboot;
    if (n.includes("rabbitmq")) return SiRabbitmq;
    if (n.includes("kafka")) return SiApachekafka;
    if (n.includes("graphql")) return SiGraphql;
    if (n.includes("redis")) return SiRedis;
    if (n.includes("microservice")) return FiLayers;
    if (n.includes("restful") || n.includes("rest api")) return FiServer;

    if (n.includes("clickhouse")) return SiClickhouse;
    if (n.includes("postgres")) return SiPostgresql;
    if (n.includes("minio")) return SiMinio;
    if (n.includes("neo4j")) return SiNeo4J;
    if (n.includes("mysql")) return SiMysql;
    if (n.includes("alembic")) return FiDatabase;
    if (n.includes("sql optimization")) return FiDatabase;

    if (n.includes("docker")) return SiDocker;
    if (n.includes("prometheus")) return SiPrometheus;
    if (n.includes("grafana")) return SiGrafana;
    if (n.includes("loki")) return FiActivity;
    if (n.includes("opentelemetry")) return SiOpentelemetry;
    if (n.includes("playwright")) return FiActivity;
    if (n.includes("apscheduler")) return FiActivity;
    if (n.includes("linux")) return SiLinux;
    if (n.includes("git")) return SiGit;

    return null;
}

export default function Skills() {
    const { language, t } = useLanguage();

    const proofLabel = language === "vi" ? "Thực chiến:" : "Production Proof:";

    return (
        <section id="skills" className="py-20 md:py-28 relative">
            <div className="max-w-7xl mx-auto px-6 w-full">
                {/* Section Header */}
                <div className="text-left mb-12">
                    <div className="pill-tag mb-4 w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                        <span>
                            {t.skills?.subtitle ||
                                (language === "vi"
                                    ? "Kỹ năng chuyên môn"
                                    : "Technical Expertise")}
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                        {t.skills?.title ||
                            (language === "vi"
                                ? "Năng lực kỹ thuật & Ngăn xếp công nghệ"
                                : "Technical Capabilities & Stack")}
                    </h2>
                </div>

                {/* 4 Clean Cards in 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {clusterConfigs.map((config) => {
                        const clusterData = t.skills?.clusters?.[config.key];
                        const title = clusterData?.title || config.defaultTitle;
                        const description =
                            clusterData?.description || config.defaultDescription;
                        const proof = clusterData?.proof || config.defaultProof;
                        const skills = clusterData?.skills || config.defaultSkills;
                        const CategoryIcon = config.icon;

                        return (
                            <div
                                key={config.key}
                                className="clean-card p-6 sm:p-8 flex flex-col justify-between"
                            >
                                <div>
                                    {/* Card Header: Icon + Title + Description */}
                                    <div className="mb-6">
                                        <div className="flex items-center gap-3.5 mb-3">
                                            <div className="w-10 h-10 rounded-xl bg-[var(--bg-card-hover)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-primary)] text-lg shrink-0">
                                                <CategoryIcon
                                                    className="w-5 h-5"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[var(--text-primary)]">
                                                {title}
                                            </h3>
                                        </div>
                                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                                            {description}
                                        </p>
                                    </div>

                                    {/* Skills Pill Tags */}
                                    <div className="mb-6">
                                        <div className="flex flex-wrap gap-2">
                                            {skills.map((skillName) => {
                                                const SkillIcon = getSkillIcon(skillName);
                                                return (
                                                    <span
                                                        key={skillName}
                                                        className="pill-tag hover:border-[var(--text-muted)] transition-colors duration-150"
                                                    >
                                                        {SkillIcon && (
                                                            <SkillIcon
                                                                className="w-3.5 h-3.5 shrink-0 text-[var(--text-secondary)]"
                                                                aria-hidden="true"
                                                            />
                                                        )}
                                                        <span>{skillName}</span>
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>

                                {/* Proof Callout */}
                                <div className="pt-4 border-t border-[var(--border-subtle)]">
                                    <div className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)] leading-relaxed">
                                        <FiCheckCircle
                                            className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5"
                                            aria-hidden="true"
                                        />
                                        <div>
                                            <span className="font-semibold text-[var(--text-primary)] mr-1.5">
                                                {proofLabel}
                                            </span>
                                            <span>{proof}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Additional Technologies Note */}
                {t.skills?.moreSkills && (
                    <p className="mt-10 text-center text-xs sm:text-sm text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
                        {t.skills.moreSkills}
                    </p>
                )}
            </div>
        </section>
    );
}
