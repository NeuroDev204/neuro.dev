"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "../i18n";
import type { IconType } from "react-icons";
import { FaDatabase } from "react-icons/fa6";
import {
    SiApachekafka,
    SiDocker,
    SiFastapi,
    SiGit,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiNeo4J,
    SiOpenjdk,
    SiPython,
    SiReact,
    SiRedis,
    SiSpring,
    SiSpringboot,
    SiSpringsecurity,
    SiTypescript,
} from "react-icons/si";

interface Skill {
    name: string;
    icon: IconType;
    iconColor?: string;
}

interface SkillCategory {
    titleKey: "languages" | "frameworks" | "databases" | "tools";
    color: string;
    skills: Skill[];
}

const skillCategories: SkillCategory[] = [
    {
        titleKey: "languages",
        color: "var(--primary-blue)",
        skills: [
            { name: "Java", icon: SiOpenjdk, iconColor: "#ED8B00" },
            { name: "SQL", icon: FaDatabase, iconColor: "#00758F" },
        ],
    },
    {
        titleKey: "frameworks",
        color: "var(--primary-blue)",
        skills: [
            { name: "Spring Boot", icon: SiSpringboot, iconColor: "#6DB33F" },
            { name: "Spring Security", icon: SiSpringsecurity, iconColor: "#6DB33F" },
            { name: "Spring Cloud", icon: SiSpring, iconColor: "#6DB33F" },
            { name: "React", icon: SiReact, iconColor: "#61DAFB" },
        ],
    },
    {
        titleKey: "databases",
        color: "var(--primary-cyan)",
        skills: [
            { name: "MySQL", icon: SiMysql, iconColor: "#4479A1" },
            { name: "MongoDB", icon: SiMongodb, iconColor: "#47A248" },
            { name: "Neo4j", icon: SiNeo4J, iconColor: "#018BFF" },
            { name: "Redis", icon: SiRedis, iconColor: "#DC382D" },
        ],
    },
    {
        titleKey: "tools",
        color: "var(--primary-cyan)",
        skills: [
            { name: "Docker", icon: SiDocker, iconColor: "#2496ED" },
            { name: "Git", icon: SiGit, iconColor: "#F05032" },
        ],
    },
];

function SkillPill({ name, color, iconColor, Icon }: { name: string; color: string; iconColor?: string; Icon: IconType }) {
    return (
        <div
            className="glass-pill text-center transition-all duration-300 flex items-center gap-2"
            style={{
                borderColor: `${iconColor ?? color}40`,
            }}
        >
            <Icon className="w-4 h-4" style={{ color: iconColor ?? color }} aria-hidden="true" />
            <span className="font-medium text-white">
                {name}
            </span>
        </div>
    );
}

export default function Skills() {
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

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" ref={sectionRef} className="section relative">
            <div className="container">
                {/* Section Title */}
                <div className="section-title animate-on-scroll opacity-0">
                    <p className="text-[var(--primary-cyan)] text-sm font-medium tracking-wider uppercase mb-3">
                        {t.skills.subtitle}
                    </p>
                    <h2 className="heading-lg text-[var(--primary-blue)]">{t.skills.title}</h2>
                </div>

                {/* Skill Pills Overview */}
                <div className="animate-on-scroll opacity-0 delay-100 mb-16">
                    <div className="glass-light p-8 rounded-3xl">
                        <div className="flex flex-wrap justify-center gap-3">
                            {skillCategories.flatMap((category) =>
                                category.skills.map((skill) => (
                                    <SkillPill key={skill.name} name={skill.name} color={category.color} iconColor={skill.iconColor} Icon={skill.icon} />
                                ))
                            )}
                        </div>
                    </div>
                </div>

                {/* Additional Skills Note */}
                <div className="animate-on-scroll opacity-0 delay-500 mt-12 text-center">
                    <p className="text-[var(--text-muted)] text-sm">
                        {t.skills.moreSkills}
                    </p>
                </div>
            </div>
        </section>
    );
}
