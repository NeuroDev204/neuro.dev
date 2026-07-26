"use client";

import { useLanguage } from "../i18n";
import type { IconType } from "react-icons";
import { FaJava, FaDatabase, FaNetworkWired, FaAws, FaDocker, FaCode } from "react-icons/fa6";
import {
    SiSpringboot,
    SiRedis,
    SiGit,
    SiApachekafka,
    SiMongodb,
    SiReact,
} from "react-icons/si";

interface SkillItem {
    name: string;
    icon: IconType;
    badgeBg: string;
    iconColor: string;
}

const skillsList: SkillItem[] = [
    {
        name: "Java",
        icon: FaJava,
        badgeBg: "bg-orange-500/10 dark:bg-orange-500/20",
        iconColor: "text-orange-600 dark:text-orange-400",
    },
    {
        name: "SQL",
        icon: FaDatabase,
        badgeBg: "bg-teal-500/10 dark:bg-teal-500/20",
        iconColor: "text-teal-600 dark:text-teal-400",
    },
    {
        name: "Spring Boot",
        icon: SiSpringboot,
        badgeBg: "bg-emerald-500/10 dark:bg-emerald-500/20",
        iconColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
        name: "Microservices",
        icon: FaNetworkWired,
        badgeBg: "bg-indigo-500/10 dark:bg-indigo-500/20",
        iconColor: "text-indigo-600 dark:text-indigo-400",
    },
    {
        name: "AWS",
        icon: FaAws,
        badgeBg: "bg-amber-500/10 dark:bg-amber-500/20",
        iconColor: "text-amber-600 dark:text-amber-400",
    },
    {
        name: "Docker",
        icon: FaDocker,
        badgeBg: "bg-blue-500/10 dark:bg-blue-500/20",
        iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
        name: "Redis",
        icon: SiRedis,
        badgeBg: "bg-rose-500/10 dark:bg-rose-500/20",
        iconColor: "text-rose-600 dark:text-rose-400",
    },
    {
        name: "REST API",
        icon: FaCode,
        badgeBg: "bg-purple-500/10 dark:bg-purple-500/20",
        iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
        name: "Git",
        icon: SiGit,
        badgeBg: "bg-orange-600/10 dark:bg-orange-600/20",
        iconColor: "text-orange-700 dark:text-orange-400",
    },
    {
        name: "Kafka",
        icon: SiApachekafka,
        badgeBg: "bg-stone-500/10 dark:bg-stone-500/20",
        iconColor: "text-stone-700 dark:text-stone-300",
    },
    {
        name: "MongoDB",
        icon: SiMongodb,
        badgeBg: "bg-green-500/10 dark:bg-green-500/20",
        iconColor: "text-green-600 dark:text-green-400",
    },
    {
        name: "React",
        icon: SiReact,
        badgeBg: "bg-sky-500/10 dark:bg-sky-500/20",
        iconColor: "text-sky-600 dark:text-sky-400",
    },
];

export default function Skills() {
    const { language, t } = useLanguage();

    const titleText = language === "vi" ? "Chuyên môn" : "Expertise";

    return (
        <section id="skills" className="py-20 md:py-28 relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Headline */}
                <h2 className="font-serif-editorial text-3xl md:text-4xl font-bold mb-8 text-[var(--text-primary)]">
                    {titleText}
                </h2>

                {/* Expertise Skill Cards Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {skillsList.map((skill) => {
                        const IconComponent = skill.icon;
                        return (
                            <div
                                key={skill.name}
                                className="editorial-card p-6 flex flex-col items-center justify-center gap-4 text-center hover:-translate-y-1 transition-all duration-200 group"
                            >
                                <div
                                    className={`w-14 h-14 rounded-2xl ${skill.badgeBg} flex items-center justify-center text-2xl group-hover:scale-105 transition-transform duration-200`}
                                >
                                    <IconComponent className={`w-7 h-7 ${skill.iconColor}`} />
                                </div>
                                <span className="font-medium text-sm md:text-base text-[var(--text-primary)]">
                                    {skill.name}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* Additional Skills Note */}
                {t.skills?.moreSkills && (
                    <p className="mt-10 text-center text-sm text-[var(--text-muted)] max-w-3xl mx-auto leading-relaxed">
                        {t.skills.moreSkills}
                    </p>
                )}
            </div>
        </section>
    );
}
