export const translations = {
    vi: {
        // Navigation
        nav: {
            home: "Trang chủ",
            about: "Giới thiệu",
            skills: "Kỹ năng",
            experience: "Kinh nghiệm",
            projects: "Dự án",
            contact: "Liên hệ",
            contactNow: "Liên hệ ngay",
        },

        // Hero Section
        hero: {
            greeting: "Xin chào, tôi là",
            name: "Phạm Văn Sỹ",
            role: "Java Backend Developer",
            headline: "Xây dựng giải pháp Backend vững chắc",
            description:
                "Lập trình viên Java Backend giàu kinh nghiệm chuyên về Spring Boot, RESTful APIs và kiến trúc dữ liệu. Cam kết mang lại các giải pháp chất lượng cao, có khả năng mở rộng cho các hệ thống phức tạp.",
            viewProjects: "Xem dự án",
            downloadCV: "Tải CV",
        },

        // About Section
        about: {
            subtitle: "Giới thiệu",
            title: "Về tôi",
            greeting: "Xin chào! Tôi là",
            description1:
                "Tôi có khả năng xây dựng các backend service với Java và Spring Boot, phát triển RESTful APIs, đồng thời làm việc với cả cơ sở dữ liệu SQL và NoSQL sử dụng Hibernate/JPA.",
            description2:
                "Với 3 tháng kinh nghiệm làm Backend Developer và 3 tháng IT Support, tôi luôn mong muốn được đóng góp vào các dự án thực tế và không ngừng phát triển bản thân.",
            highlights: {

                teamwork: {
                    title: "Làm việc nhóm",
                    description: "Khả năng phối hợp và giao tiếp hiệu quả trong nhóm",
                },
                problemSolving: {
                    title: "Giải quyết vấn đề",
                    description: "Tư duy logic và khả năng phân tích để giải quyết vấn đề",
                },
                backend: {
                    title: "Kiến trúc Backend",
                    description: "Thiết kế và xây dựng hệ thống backend có khả năng mở rộng",
                },
                english: {
                    title: "Tiếng Anh",
                    description: "Giao tiếp thành thạo và đọc hiểu tài liệu chuyên ngành",
                },
            },
        },

        // Skills Section
        skills: {
            subtitle: "Kỹ năng",
            title: "Chuyên môn của tôi",
            categories: {
                languages: "Ngôn ngữ lập trình",
                frameworks: "Frameworks",
                databases: "Cơ sở dữ liệu",
                tools: "Công cụ & DevOps",
            },
            moreSkills:
                "Và nhiều công nghệ khác như: Python, TypeScript, JavaScript, FastAPI, Kafka, Keycloak, WebRTC, WebSocket, ONNX Runtime, Resilience4j, Redisson, Nginx...",
        },

        // Experience Section
        experience: {
            subtitle: "Kinh nghiệm",
            title: "Hành trình của tôi",
            intern: "Thực tập",
            study: "Học tập",
            items: {
                backendDeveloper: {
                    title: "Backend Developer",
                    company: "Amethyst Medical Việt Nam",
                    period: "Tháng 9/2025 - Tháng 11/2025",
                    description: [
                        "Thiết kế và triển khai cấu trúc database với MySQL",
                        "Điều phối và phân công công việc cho các thành viên",
                        "Phát triển RESTful APIs với Spring Boot và MySQL",
                        "Tích hợp JWT authentication để tăng cường bảo mật hệ thống",
                    ],
                },
                engineeringIntern: {
                    title: "IT Support",
                    company: "LEAD AND AIM TECHNOLOGY SOLUTIONS",
                    period: "Tháng 6/2025 - Tháng 9/2025",
                    description: [
                        "Thiết kế lại và tối ưu website công ty bằng WordPress",
                        "Kiểm thử và đánh giá máy quét barcode",
                        "Đại diện công ty tại triển lãm lớn, nâng cao nhận diện thương hiệu",
                    ],
                },
                student: {
                    title: "Sinh viên HUTECH",
                    company: "Đại học Công nghệ TP.HCM",
                    period: "2022 - Nay",
                    description: [
                        "Sinh viên năm 4 ngành Kỹ thuật phần mềm",
                        "Tham gia các dự án thực tế",
                        "Sinh viên tiêu biểu năm học 2024 - 2025",
                        "Hoạt động ngoại khóa và phát triển kỹ năng mềm",
                    ],
                },
            },
        },

        // Projects Section
        projects: {
            subtitle: "Dự án",
            title: "Dự án nổi bật",
            description:
                "Một số dự án tiêu biểu mà tôi đã thực hiện trong quá trình học tập và làm việc",
            viewDetails: "Xem Chi Tiết",
            viewMore: "Xem thêm trên GitHub",
            items: {
                blur: {
                    title: "Blur Social Network",
                    description:
                        "Nền tảng mạng xã hội full-stack theo kiến trúc microservices: realtime chat, WebRTC video/audio call, feed CQRS, AI chat với Gemini và kiểm duyệt bình luận tiếng Việt bằng PhoBERT v2/ONNX.",
                    features: [
                        "Keycloak 26.1 (OIDC/JWT) + Spring OAuth2 Resource Server",
                        "Realtime Chat (Socket.IO) & WebRTC Video/Audio Call",
                        "Feed CQRS, Social Graph Neo4j, Post/Story/Like/Comment",
                        "AI Chat (Gemini) & kiểm duyệt PhoBERT v2 / ONNX Runtime",
                        "Multi-Level Cache: Caffeine + Redis + Redisson Distributed Lock",
                    ],
                },
                neuroEcommerce: {
                    title: "Neuro Ecommerce Backend",
                    description:
                        "Neuro Ecommerce Backend is a Spring Boot and MySQL-based backend system for an e-commerce platform, providing RESTful APIs for user management, product catalog management, shopping cart operations, order processing, flash sale management, and real-time notifications.",
                    features: [
                        "User management",
                        "Product catalog management",
                        "Shopping cart operations",
                        "Order processing and flash sale management",
                        "VNPay payment gateway integration",
                    ],
                },
            },
        },

        // Contact Section
        contact: {
            subtitle: "Liên hệ",
            title: "Kết nối với tôi",
            description: "Bạn có câu hỏi hoặc muốn hợp tác? Hãy liên hệ với tôi!",
            form: {
                name: "Họ và tên",
                namePlaceholder: "Nhập họ và tên",
                email: "Email",
                emailPlaceholder: "email@example.com",
                message: "Tin nhắn",
                messagePlaceholder: "Nhập nội dung tin nhắn...",
                submit: "Gửi tin nhắn",
                sending: "Đang gửi...",
                sent: "Đã gửi thành công!",
            },
            socialConnect: "Hoặc kết nối qua mạng xã hội",
        },

        // Footer
        footer: {
            madeWith: "Made with",
            using: "using Next.js & Glassmorphism",
        },
    },

    en: {
        // Navigation
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            experience: "Experience",
            projects: "Projects",
            contact: "Contact",
            contactNow: "Contact Now",
        },

        // Hero Section
        hero: {
            greeting: "Hello, I am",
            name: "Pham Van Sy",
            role: "Java Backend Developer",
            headline: "Building robust backend solutions",
            description:
                "Experienced Java Backend Developer specializing in Spring Boot, RESTful APIs, and data architecture. Committed to delivering high-quality, scalable solutions for complex systems.",
            viewProjects: "View Projects",
            downloadCV: "Download CV",
        },

        // About Section
        about: {
            subtitle: "Introduction",
            title: "About Me",
            greeting: "Hello! I am",
            description1:
                "I can build backend services using Java and Spring Boot, develop RESTful APIs, and work with SQL and NoSQL databases using Hibernate/JPA.",
            description2:
                "With 3 months as a Backend Developer and 3 months as IT Support, I am eager to contribute to real projects and grow as a Java Backend Developer.",
            highlights: {

                teamwork: {
                    title: "Teamwork",
                    description: "Ability to collaborate and communicate effectively in a team",
                },
                problemSolving: {
                    title: "Problem Solving",
                    description: "Logical thinking and analytical skills to solve problems",
                },
                backend: {
                    title: "Backend Architecture",
                    description: "Designing and building scalable backend systems",
                },
                english: {
                    title: "English",
                    description: "Proficient communication and technical documentation reading",
                },
            },
        },

        // Skills Section
        skills: {
            subtitle: "Skills",
            title: "My Expertise",
            categories: {
                languages: "Programming Languages",
                frameworks: "Frameworks",
                databases: "Databases",
                tools: "Tools & DevOps",
            },
            moreSkills:
                "And many other technologies: Python, TypeScript, JavaScript, FastAPI, Kafka, Keycloak, WebRTC, WebSocket, ONNX Runtime, Resilience4j, Redisson, Nginx...",
        },

        // Experience Section
        experience: {
            subtitle: "Experience",
            title: "My Journey",
            intern: "Internship",
            study: "Education",
            items: {
                backendDeveloper: {
                    title: "Backend Developer Intern",
                    company: "Amethyst Medical Vietnam",
                    period: "Sep 2025 - Nov 2025",
                    description: [
                        "Designed and implemented database structures using MySQL",
                        "Coordinated and assigned tasks to team members",
                        "Developed RESTful APIs using Spring Boot and MySQL",
                        "Integrated JWT authentication to enhance system security",
                    ],
                },
                engineeringIntern: {
                    title: "IT Support",
                    company: "LEAD AND AIM TECHNOLOGY SOLUTIONS",
                    period: "Jun 2025 - Sep 2025",
                    description: [
                        "Redesigned and optimized company website using WordPress",
                        "Conducted testing and evaluation of barcode scanners",
                        "Represented the company at major exhibitions, enhancing brand visibility",
                    ],
                },
                student: {
                    title: "HUTECH Student",
                    company: "Ho Chi Minh City University of Technology",
                    period: "2022 - Present",
                    description: [
                        "4th-year Software Engineering student",
                        "Participated in real-world projects",
                        "Outstanding Student of the 2024 - 2025 academic year",
                        "Extracurricular activities and soft skills development",
                    ],
                },
            },
        },

        // Projects Section
        projects: {
            subtitle: "Projects",
            title: "Featured Projects",
            description:
                "Some notable projects that I have completed during my studies and work",
            viewDetails: "View Details",
            viewMore: "View more on GitHub",
            items: {
                blur: {
                    title: "Blur Social Network",
                    description:
                        "Full-stack social networking platform on microservices: realtime chat, WebRTC video/audio calls, CQRS feed, Gemini AI chat, and Vietnamese comment moderation via PhoBERT v2/ONNX.",
                    features: [
                        "Keycloak 26.1 (OIDC/JWT) + Spring OAuth2 Resource Server",
                        "Realtime Chat (Socket.IO) & WebRTC Video/Audio Calls",
                        "CQRS Feed, Neo4j Social Graph, Post/Story/Like/Comment",
                        "Gemini AI Chat & PhoBERT v2 / ONNX Vietnamese Moderation",
                        "Multi-Level Cache: Caffeine + Redis + Redisson Distributed Lock",
                    ],
                },
                neuroEcommerce: {
                    title: "Neuro Ecommerce Backend",
                    description:
                        "Neuro Ecommerce Backend is a Spring Boot and MySQL-based backend system for an e-commerce platform, providing RESTful APIs for user management, product catalog management, shopping cart operations, order processing, flash sale management, and real-time notifications.",
                    features: [
                        "User management",
                        "Product catalog management",
                        "Shopping cart operations",
                        "Order processing and flash sale management",
                        "VNPay payment gateway integration",
                    ],
                },
            },
        },

        // Contact Section
        contact: {
            subtitle: "Contact",
            title: "Get In Touch",
            description: "Have a question or want to collaborate? Feel free to contact me!",
            form: {
                name: "Full Name",
                namePlaceholder: "Enter your full name",
                email: "Email",
                emailPlaceholder: "email@example.com",
                message: "Message",
                messagePlaceholder: "Enter your message...",
                submit: "Send Message",
                sending: "Sending...",
                sent: "Sent successfully!",
            },
            socialConnect: "Or connect via social media",
        },

        // Footer
        footer: {
            madeWith: "Made with",
            using: "using Next.js & Glassmorphism",
        },
    },
};

export type Language = "vi" | "en";
export type Translations = typeof translations.vi;

