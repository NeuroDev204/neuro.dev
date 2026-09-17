"use client";

import { useLanguage } from "../i18n";

interface ExperienceEntry {
    id: "aidt" | "backendDeveloper" | "engineeringIntern" | "student";
    current?: boolean;
    fallbackTitle: string;
    fallbackCompany: string;
    fallbackPeriod: string;
    fallbackDescription: string[];
}

export default function Experience() {
    const { t, language } = useLanguage();
    const isVi = language === "vi";

    const experiences: ExperienceEntry[] = [
        {
            id: "aidt",
            current: true,
            fallbackTitle: "AI & Distributed Systems Engineer (Core Contributor)",
            fallbackCompany: "HUTECH-AIDT Social Heartbeat",
            fallbackPeriod: isVi ? "2025 - Hiện tại" : "2025 - Present",
            fallbackDescription: isVi
                ? [
                      "Chủ trì thiết kế kiến trúc phân tán gồm 6 microservices phục vụ lắng nghe mạng xã hội và phân tích truyền thông thời gian thực",
                      "Xây dựng pipeline suy luận hai tầng (Two-Stage) sử dụng Ollama và Qwen3:8B, áp dụng kỹ thuật prompt engineering và cơ chế tự sửa JSON schema bằng Pydantic v2",
                      "Triển khai kiến trúc hướng sự kiện với RabbitMQ Topic Exchange, áp dụng Transactional Outbox Pattern kết hợp Publisher Confirms và Dead Letter Queue (DLQ) đảm bảo độ tin cậy tuyệt đối",
                      "Thiết kế kho dữ liệu cột ClickHouse cho dữ liệu phân tích OLAP, tối ưu hóa câu truy vấn tổng hợp thời gian phản hồi dưới 15ms trên hàng trăm nghìn bản ghi",
                      "Xây dựng hệ thống thu thập dữ liệu tự động với Playwright, tích hợp thuật toán điều tốc thích ứng (adaptive pacing) và cơ chế xoay vòng phiên làm việc an toàn",
                      "Thiết lập ngăn xếp quan sát tập trung với Prometheus, Grafana, Loki và OpenTelemetry để giám sát hiệu năng toàn hệ thống",
                  ]
                : [
                      "Spearheaded distributed architecture across 6 microservices for real-time social listening and PR media intelligence",
                      "Engineered two-stage AI inference pipeline leveraging Ollama and local Qwen3:8B, featuring structured prompt engineering and Pydantic v2 JSON schema self-repair",
                      "Implemented resilient event-driven architecture using RabbitMQ Topic Exchange, Transactional Outbox Pattern, Publisher Confirms, and Dead Letter Queues (DLQ)",
                      "Designed ClickHouse columnar fact tables for OLAP analytics, optimizing aggregation queries to sub-15ms latency across hundreds of thousands of records",
                      "Constructed automated web crawling workers with Playwright, incorporating adaptive pacing algorithms and session rotation for robust anti-blocking resilience",
                      "Configured full-stack centralized observability with Prometheus, Grafana, Loki, and OpenTelemetry for end-to-end performance tracking",
                  ],
        },
        {
            id: "backendDeveloper",
            current: false,
            fallbackTitle: "Backend Developer Intern",
            fallbackCompany: isVi ? "Amethyst Medical Việt Nam" : "Amethyst Medical Vietnam",
            fallbackPeriod: isVi ? "Tháng 9/2025 - Tháng 11/2025" : "Sep 2025 - Nov 2025",
            fallbackDescription: isVi
                ? [
                      "Thiết kế và tối ưu hóa cấu trúc cơ sở dữ liệu quan hệ MySQL cho hệ thống y tế",
                      "Điều phối kỹ thuật và phân công công việc backend cho các thành viên trong nhóm",
                      "Phát triển RESTful APIs với Spring Boot và MySQL, tích hợp kiểm thử đơn vị",
                      "Tích hợp JWT authentication để tăng cường bảo mật hệ thống và phân quyền người dùng",
                  ]
                : [
                      "Designed and optimized MySQL relational database schemas for a clinical management platform",
                      "Coordinated backend development tasks and technical workflows across team members",
                      "Developed robust RESTful APIs using Java Spring Boot with unit testing integration",
                      "Integrated JWT authentication to enhance system security and role-based access control",
                  ],
        },
        {
            id: "engineeringIntern",
            current: false,
            fallbackTitle: "IT Support",
            fallbackCompany: "LEAD AND AIM TECHNOLOGY SOLUTIONS",
            fallbackPeriod: isVi ? "Tháng 6/2025 - Tháng 9/2025" : "Jun 2025 - Sep 2025",
            fallbackDescription: isVi
                ? [
                      "Thiết kế lại và tối ưu hiệu năng website công ty trên nền tảng WordPress",
                      "Kiểm thử, đánh giá và cấu hình máy quét barcode công nghiệp và thiết bị ngoại vi",
                      "Đại diện bộ phận kỹ thuật công ty tại triển lãm công nghệ lớn, nâng cao nhận diện thương hiệu",
                      "Hỗ trợ xử lý sự cố hạ tầng mạng nội bộ và hỗ trợ kỹ thuật người dùng",
                  ]
                : [
                      "Redesigned and optimized company web infrastructure on WordPress for improved performance and UX",
                      "Conducted rigorous testing and quality evaluation for industrial barcode scanners and peripherals",
                      "Represented technical staff at major industry exhibitions, boosting brand engagement and client demonstrations",
                      "Troubleshot internal networking and software infrastructure, providing rapid technical support",
                  ],
        },
        {
            id: "student",
            current: true,
            fallbackTitle: isVi ? "Sinh viên Kỹ thuật Phần mềm" : "Software Engineering Student",
            fallbackCompany: isVi ? "Đại học Công nghệ TP.HCM (HUTECH)" : "HUTECH University (HCM City)",
            fallbackPeriod: isVi ? "2022 - Hiện tại" : "2022 - Present",
            fallbackDescription: isVi
                ? [
                      "Sinh viên năm 4 ngành Kỹ thuật phần mềm với định hướng AI Systems và Phân tán",
                      "Vinh dự đạt danh hiệu Sinh viên tiêu biểu HUTECH năm học 2024 - 2025",
                      "Tham gia nghiên cứu và phát triển các hệ thống thực tế (HUTECH-AIDT, Blur Social)",
                      "Tích cực tham gia hoạt động nghiên cứu khoa học và phát triển kỹ năng kỹ thuật",
                  ]
                : [
                      "Final-year Software Engineering student focusing on applied AI Systems and Distributed Architecture",
                      "Honored as Outstanding Student at HUTECH for the academic year 2024 - 2025",
                      "Actively architected and deployed production-grade projects (HUTECH-AIDT, Blur Social Network)",
                      "Engaged in academic scientific research initiatives and continuous technical mastery",
                  ],
        },
    ];

    return (
        <section id="experience" className="py-20 md:py-28 relative">
            <div className="max-w-4xl mx-auto px-6 w-full">
                {/* Section Header */}
                <div className="text-left mb-12">
                    <div className="pill-tag mb-4 w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                        <span>{t.experience?.subtitle || (isVi ? "Kinh nghiệm" : "Experience")}</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                        {t.experience?.title || (isVi ? "Hành trình sự nghiệp" : "Professional Journey")}
                    </h2>
                </div>

                {/* Vertical Timeline */}
                <div className="relative border-l border-[var(--border-subtle)] ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
                    {experiences.map((exp) => {
                        const itemData = t.experience?.items?.[exp.id];
                        const title = itemData?.title || exp.fallbackTitle;
                        const company = itemData?.company || exp.fallbackCompany;
                        const period = itemData?.period || exp.fallbackPeriod;
                        const description = itemData?.description || exp.fallbackDescription;

                        return (
                            <div key={exp.id} className="relative group">
                                {/* Node Dot on Timeline */}
                                <div
                                    className={`absolute -left-[31px] sm:-left-[39px] top-6 w-3 h-3 rounded-full border-2 border-[var(--bg-primary)] ${
                                        exp.current
                                            ? "bg-emerald-500 ring-4 ring-emerald-500/20"
                                            : "bg-[var(--text-muted)] ring-4 ring-[var(--border-subtle)]/40"
                                    }`}
                                    aria-hidden="true"
                                />

                                {/* Clean Card for Experience Entry */}
                                <div className="clean-card p-6 sm:p-8">
                                    {/* Header: Title, Company, Date Pill Tag */}
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                                        <div>
                                            <div className="flex flex-wrap items-center gap-2 mb-1">
                                                <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] tracking-tight">
                                                    {title}
                                                </h3>
                                                {exp.current && (
                                                    <span className="pill-tag !py-0.5 !px-2 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 border-emerald-500/30">
                                                        {isVi ? "Hiện tại" : "Present"}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm sm:text-base font-medium text-[var(--text-secondary)]">
                                                {company}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-2 shrink-0">
                                            <span className="pill-tag font-mono text-xs">
                                                {period}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Bullet points */}
                                    <ul className="space-y-2.5 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mt-4 pt-4 border-t border-[var(--border-subtle)]">
                                        {description.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)] mt-2 shrink-0 opacity-80" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
