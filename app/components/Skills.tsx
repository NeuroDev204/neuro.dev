"use client";

import { useLanguage } from "../i18n";
import {
    SiSpringboot,
    SiRedis,
    SiGit,
    SiApachekafka,
    SiMongodb,
    SiReact,
    SiPostgresql,
    SiDocker,
    SiAmazonwebservices,
    SiPostman,
    SiKubernetes,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import type { IconType } from "react-icons";

interface SkillItem {
    name: string;
    icon?: IconType;
    customSvg?: React.ReactNode;
    brandColor: string;
    badgeBg: string;
}

const skillsList: SkillItem[] = [
    {
        name: "Java",
        icon: FaJava,
        brandColor: "#ED8B00",
        badgeBg: "bg-[#ED8B00]/10 dark:bg-[#ED8B00]/20",
    },
    {
        name: "SQL",
        icon: SiPostgresql,
        brandColor: "#4169E1",
        badgeBg: "bg-[#4169E1]/10 dark:bg-[#4169E1]/20",
    },
    {
        name: "Spring Boot",
        icon: SiSpringboot,
        brandColor: "#6DB33F",
        badgeBg: "bg-[#6DB33F]/10 dark:bg-[#6DB33F]/20",
    },
    {
        name: "Microservices",
        icon: SiKubernetes,
        brandColor: "#326CE5",
        badgeBg: "bg-[#326CE5]/10 dark:bg-[#326CE5]/20",
    },
    {
        name: "AWS",
        icon: SiAmazonwebservices,
        brandColor: "#FF9900",
        badgeBg: "bg-[#FF9900]/10 dark:bg-[#FF9900]/20",
    },
    {
        name: "Docker",
        icon: SiDocker,
        brandColor: "#2496ED",
        badgeBg: "bg-[#2496ED]/10 dark:bg-[#2496ED]/20",
    },
    {
        name: "Redis",
        icon: SiRedis,
        brandColor: "#DC382D",
        badgeBg: "bg-[#DC382D]/10 dark:bg-[#DC382D]/20",
    },
    {
        name: "REST API",
        icon: SiPostman,
        brandColor: "#FF6C37",
        badgeBg: "bg-[#FF6C37]/10 dark:bg-[#FF6C37]/20",
    },
    {
        name: "Git",
        icon: SiGit,
        brandColor: "#F05032",
        badgeBg: "bg-[#F05032]/10 dark:bg-[#F05032]/20",
    },
    {
        name: "Kafka",
        icon: SiApachekafka,
        brandColor: "#231F20",
        badgeBg: "bg-slate-500/10 dark:bg-slate-400/20",
    },
    {
        name: "MongoDB",
        icon: SiMongodb,
        brandColor: "#47A248",
        badgeBg: "bg-[#47A248]/10 dark:bg-[#47A248]/20",
    },
    {
        name: "React",
        icon: SiReact,
        brandColor: "#61DAFB",
        badgeBg: "bg-[#61DAFB]/10 dark:bg-[#61DAFB]/20",
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
                                    className={`w-14 h-14 rounded-2xl ${skill.badgeBg} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-200`}
                                >
                                    {IconComponent && (
                                        <IconComponent
                                            style={{ color: skill.brandColor }}
                                            className="w-8 h-8 drop-shadow-sm"
                                        />
                                    )}
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

