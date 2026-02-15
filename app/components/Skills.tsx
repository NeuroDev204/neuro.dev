"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "../i18n";
import type { IconType } from "react-icons";
import { FaDatabase } from "react-icons/fa6";
import {
    SiApachekafka,
    SiDocker,
    SiGit,
    SiHibernate,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiNeo4J,
    SiOpenjdk,
    SiSpringboot,
    SiSpringsecurity,
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
            { name: "Java", icon: SiOpenjdk, iconColor: "#FFFFFF" },
            { name: "SQL", icon: FaDatabase },
            { name: "JavaScript", icon: SiJavascript },
        ],
    },
    {
        titleKey: "frameworks",
        color: "var(--primary-blue)",
        skills: [
            { name: "Spring Boot", icon: SiSpringboot },
            { name: "Spring Security", icon: SiSpringsecurity },
            { name: "Hibernate", icon: SiHibernate },
        ],
    },
    {
        titleKey: "databases",
        color: "var(--primary-cyan)",
        skills: [
            { name: "MySQL", icon: SiMysql },
            { name: "MongoDB", icon: SiMongodb },
            { name: "Neo4j", icon: SiNeo4J },
        ],
    },
    {
        titleKey: "tools",
        color: "var(--primary-cyan)",
        skills: [
            { name: "Docker", icon: SiDocker },
            { name: "Kafka", icon: SiApachekafka },
            { name: "Git", icon: SiGit },
        ],
    },
];

function SkillPill({ name, color, Icon }: { name: string; color: string; Icon: IconType }) {
    return (
        <div
            className="glass-pill text-center transition-all duration-300 flex items-center gap-2"
            style={{
                borderColor: `${color}50`,
            }}
        >
            <Icon className="w-4 h-4" style={{ color }} aria-hidden="true" />
            <span className="font-medium" style={{ color }}>
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
                                    <SkillPill key={skill.name} name={skill.name} color={category.color} Icon={skill.icon} />
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
