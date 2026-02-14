"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n";

interface Skill {
    name: string;
    level: number;
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
            { name: "Java", level: 90 },
            { name: "SQL", level: 85 },
            { name: "JavaScript", level: 75 },
        ],
    },
    {
        titleKey: "frameworks",
        color: "var(--primary-blue)",
        skills: [
            { name: "Spring Boot", level: 88 },
            { name: "Spring Security", level: 80 },
            { name: "Hibernate", level: 82 },
        ],
    },
    {
        titleKey: "databases",
        color: "var(--primary-cyan)",
        skills: [
            { name: "MySQL", level: 88 },
            { name: "MongoDB", level: 82 },
            { name: "Neo4j", level: 65 },
        ],
    },
    {
        titleKey: "tools",
        color: "var(--primary-cyan)",
        skills: [
            { name: "Docker", level: 75 },
            { name: "Kafka", level: 70 },
            { name: "Git", level: 90 },
        ],
    },
];

function SkillBar({ skill, color, inView }: { skill: Skill; color: string; inView: boolean }) {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (inView) {
            const timer = setTimeout(() => {
                setWidth(skill.level);
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [inView, skill.level]);

    return (
        <div className="mb-4 last:mb-0">
            <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-white">{skill.name}</span>
                <span className="text-[var(--text-muted)] text-sm">{skill.level}%</span>
            </div>
            <div className="skill-bar">
                <div
                    className="skill-bar-fill"
                    style={{
                        width: `${width}%`,
                        background: color,
                        transition: "width 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                ></div>
            </div>
        </div>
    );
}

function SkillPill({ name, color }: { name: string; color: string }) {
    return (
        <div
            className="glass-pill text-center transition-all duration-300"
            style={{
                borderColor: `${color}50`,
            }}
        >
            <span className="font-medium" style={{ color }}>
                {name}
            </span>
        </div>
    );
}

export default function Skills() {
    const sectionRef = useRef<HTMLElement>(null);
    const [inView, setInView] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setInView(true);
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
                                    <SkillPill key={skill.name} name={skill.name} color={category.color} />
                                ))
                            )}
                        </div>
                    </div>
                </div>

                {/* Skill Categories Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <div
                            key={category.titleKey}
                            className={`animate-on-scroll opacity-0 delay-${(categoryIndex + 2) * 100}`}
                        >
                            <div className="glass-card p-6 md:p-8 h-full">
                                {/* Category Header */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div
                                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                                        style={{
                                            background: `${category.color}20`,
                                        }}
                                    >
                                        <div
                                            className="w-3 h-3 rounded-full"
                                            style={{ background: category.color }}
                                        ></div>
                                    </div>
                                    <h3 className="heading-md text-lg" style={{ color: category.color }}>
                                        {t.skills.categories[category.titleKey]}
                                    </h3>
                                </div>

                                {/* Skills */}
                                {category.skills.map((skill) => (
                                    <SkillBar
                                        key={skill.name}
                                        skill={skill}
                                        color={category.color}
                                        inView={inView}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
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
