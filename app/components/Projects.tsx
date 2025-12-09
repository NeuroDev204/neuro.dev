"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "../i18n";

interface Project {
    id: number;
    titleKey: "blur" | "instagram";
    tech: string[];
    color: "blue" | "purple";
    image: string;
    github: string;
}

const projects: Project[] = [
    {
        id: 1,
        titleKey: "blur",
        tech: ["Spring Boot", "MySQL", "Neo4j", "MongoDB", "Redis", "Kafka", "WebSocket"],
        color: "blue",
        image: "/blur.webp",
        github: "https://github.com/NeuroDev204/Blur",
    },
    {
        id: 2,
        titleKey: "instagram",
        tech: ["Java Spring Boot", "React", "Cloudinary", "MySQL"],
        color: "purple",
        image: "/instagram.webp",
        github: "https://github.com/NeuroDev204/instagram-api",
    },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const [isHovered, setIsHovered] = useState(false);
    const { t } = useLanguage();

    const projectData = t.projects.items[project.titleKey];

    const colorClasses = {
        blue: {
            gradient: "from-[var(--primary-blue)]/30 to-[var(--primary-cyan)]/20",
            glow: "var(--glow-blue)",
            badge: "neon-badge",
            accent: "var(--primary-cyan)",
        },
        purple: {
            gradient: "from-[var(--secondary-purple)]/30 to-[var(--secondary-lavender)]/20",
            glow: "var(--glow-purple)",
            badge: "neon-badge-purple",
            accent: "var(--secondary-lavender)",
        },
    };

    const colors = colorClasses[project.color];

    return (
        <div
            className={`animate-on-scroll opacity-0 delay-${(index + 1) * 100}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className="glass-card overflow-hidden h-full transition-all duration-500"
                style={{
                    boxShadow: isHovered ? `0 25px 60px -15px ${colors.glow}` : "none",
                }}
            >
                {/* Thumbnail */}
                <div className="aspect-video relative overflow-hidden">
                    {/* Project Image */}
                    <Image
                        src={project.image}
                        alt={projectData.title}
                        fill
                        className="object-cover transition-transform duration-500"
                        style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
                    />

                    {/* Hover Overlay */}
                    <div
                        className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)] to-transparent transition-opacity duration-300"
                        style={{ opacity: isHovered ? 0.7 : 0.3 }}
                    ></div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                    {/* Title */}
                    <h3 className="heading-md mb-3" style={{ color: colors.accent }}>
                        {projectData.title}
                    </h3>

                    {/* Description */}
                    <p className="text-body mb-4">{projectData.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                            <span key={tech} className={colors.badge}>
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                        {projectData.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 text-small">
                                <svg
                                    className="w-4 h-4 flex-shrink-0"
                                    style={{ color: colors.accent }}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={project.color === "blue" ? "btn-primary w-full" : "btn-secondary w-full"}
                    >
                        <span>{t.projects.viewDetails}</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    const sectionRef = useRef<HTMLElement>(null);
    const { t } = useLanguage();

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

    return (
        <section id="projects" ref={sectionRef} className="section relative">
            <div className="container">
                {/* Section Title */}
                <div className="section-title animate-on-scroll opacity-0">
                    <p className="text-[var(--primary-cyan)] text-sm font-medium tracking-wider uppercase mb-3">
                        {t.projects.subtitle}
                    </p>
                    <h2 className="heading-lg text-gradient">{t.projects.title}</h2>
                    <p className="text-body max-w-2xl mx-auto mt-4">
                        {t.projects.description}
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* More Projects Link */}
                <div className="animate-on-scroll opacity-0 delay-300 text-center mt-12">
                    <a
                        href="https://github.com/NeuroDev204"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--primary-cyan)] transition-colors"
                    >
                        <span>{t.projects.viewMore}</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute left-0 top-1/3 w-72 h-72 bg-[var(--glow-blue)] rounded-full blur-[120px] opacity-15 pointer-events-none"></div>
            <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-[var(--glow-purple)] rounded-full blur-[100px] opacity-15 pointer-events-none"></div>
        </section>
    );
}
