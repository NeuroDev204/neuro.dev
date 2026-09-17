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
            role: "AI & Distributed Systems Engineer",
            headline: "Xây dựng hệ thống AI thực chiến & kiến trúc Backend phân tán",
            description:
                "Kỹ sư phần mềm tập trung vào hệ thống AI ứng dụng (Python, FastAPI, Ollama/Qwen, PhoBERT) kết hợp kiến trúc Microservices hướng sự kiện (RabbitMQ, ClickHouse, Spring Boot) đạt độ tin cậy và khả năng mở rộng cao.",
            viewProjects: "Khám phá dự án",
            downloadCV: "Tải CV",
            metrics: {
                microservices: "6 Microservices",
                microservicesSub: "Kiến trúc sự kiện RabbitMQ",
                latency: "< 15ms Latency",
                latencySub: "Phân tích OLAP ClickHouse",
                twoStage: "Two-Stage AI",
                twoStageSub: "Pipeline suy luận Ollama",
            },
        },

        // About Section
        about: {
            subtitle: "Giới thiệu",
            title: "Về tôi",
            greeting: "Xin chào! Tôi là",
            description1:
                "Kỹ sư phần mềm định hướng AI Systems và Kiến trúc Backend phân tán. Tôi tập trung thiết kế và triển khai các hệ thống AI ứng dụng trong sản xuất: từ việc xây dựng pipeline suy luận LLM tự lưu trữ (Ollama, PhoBERT, ONNX) đến kiến trúc Microservices hướng sự kiện (RabbitMQ, Spring Boot, FastAPI) và kho dữ liệu phân tích OLAP (ClickHouse).",
            description2:
                "Với tư duy kỹ thuật khắt khe và nền tảng Kỹ thuật phần mềm vững chắc (Sinh viên tiêu biểu HUTECH 2024 - 2025), tôi luôn hướng tới các giải pháp có độ tin cậy cao, phân tách module rõ ràng và khả năng mở rộng quy mô thực tế.",
            // 4 Core Engineering Pillars
            pillars: {
                aiSystems: {
                    title: "AI Systems & Điều phối LLM",
                    description:
                        "Thiết kế pipeline suy luận hai tầng (Two-Stage), tối ưu hóa prompt, kiểm soát JSON schema đầu ra và tích hợp mô hình cục bộ với Ollama & PhoBERT.",
                },
                architecture: {
                    title: "Kiến trúc hệ thống độ tin cậy cao",
                    description:
                        "Triển khai Transactional Outbox Pattern, Dead Letter Queue (DLQ), Publisher Confirms trên RabbitMQ và kiểm soát đồng thời với Redis Distributed Lock.",
                },
                dataInfra: {
                    title: "Hạ tầng dữ liệu & Phân tích OLAP",
                    description:
                        "Tối ưu hóa bảng cột ClickHouse cho truy vấn tổng hợp mạng xã hội dưới 15ms, kết hợp PostgreSQL async và MinIO S3 object storage.",
                },
                growth: {
                    title: "Kỷ luật kỹ thuật & Tinh thần phát triển",
                    description:
                        "Sinh viên tiêu biểu HUTECH 2024 - 2025. Cam kết tuân thủ kiến trúc sạch, giám sát toàn diện (OpenTelemetry/Grafana) và tài liệu hóa chuẩn mực.",
                },
            },
            // Backward-compatible aliases for existing components
            highlights: {
                aiSystems: {
                    title: "AI Systems & Điều phối LLM",
                    description:
                        "Thiết kế pipeline suy luận hai tầng (Two-Stage), tối ưu hóa prompt, kiểm soát JSON schema đầu ra và tích hợp mô hình cục bộ với Ollama & PhoBERT.",
                },
                architecture: {
                    title: "Kiến trúc hệ thống độ tin cậy cao",
                    description:
                        "Triển khai Transactional Outbox Pattern, Dead Letter Queue (DLQ), Publisher Confirms trên RabbitMQ và kiểm soát đồng thời với Redis Distributed Lock.",
                },
                dataInfra: {
                    title: "Hạ tầng dữ liệu & Phân tích OLAP",
                    description:
                        "Tối ưu hóa bảng cột ClickHouse cho truy vấn tổng hợp mạng xã hội dưới 15ms, kết hợp PostgreSQL async và MinIO S3 object storage.",
                },
                growth: {
                    title: "Kỷ luật kỹ thuật & Tinh thần phát triển",
                    description:
                        "Sinh viên tiêu biểu HUTECH 2024 - 2025. Cam kết tuân thủ kiến trúc sạch, giám sát toàn diện (OpenTelemetry/Grafana) và tài liệu hóa chuẩn mực.",
                },
                backend: {
                    title: "Kiến trúc Backend",
                    description:
                        "Thiết kế và xây dựng hệ thống phân tán, microservices chịu tải cao và độ trễ thấp.",
                },
                english: {
                    title: "Tiếng Anh chuyên ngành",
                    description:
                        "Đọc hiểu chuyên sâu tài liệu kỹ thuật, nghiên cứu AI và giao tiếp kỹ thuật hiệu quả.",
                },
                teamwork: {
                    title: "Làm việc nhóm & Tác quyền",
                    description:
                        "Khả năng phối hợp kỹ thuật, phân chia module rõ ràng và review kiến trúc nhóm.",
                },
                problemSolving: {
                    title: "Giải quyết vấn đề",
                    description:
                        "Tư duy logic, giải quyết lỗi bằng phân tích dữ liệu thực nghiệm và bằng chứng hệ thống.",
                },
            },
        },

        // Skills Section
        skills: {
            subtitle: "Kỹ năng chuyên môn",
            title: "Năng lực kỹ thuật & Ngăn xếp công nghệ",
            moreSkills:
                "Và các công cụ/nền tảng khác: Linux, Git, Playwright, APScheduler, Alembic, Strawberry GraphQL, Pydantic v2, PyTorch...",
            // 4 Clean Clusters
            clusters: {
                ai: {
                    title: "Kỹ thuật AI & Hệ thống LLM",
                    description:
                        "Xây dựng hệ thống AI thực tế, điều phối mô hình cục bộ và pipeline xử lý ngôn ngữ tự nhiên tiếng Việt.",
                    proof: "Pipeline suy luận LLM hai tầng với cơ chế tự sửa lỗi JSON schema và kiểm duyệt nội dung ONNX Runtime.",
                    skills: [
                        "Python",
                        "FastAPI",
                        "Ollama (Qwen 2.5/3)",
                        "PhoBERT v2",
                        "ONNX Runtime",
                        "Pydantic v2",
                        "Prompt Engineering",
                        "PyTorch",
                    ],
                },
                backend: {
                    title: "Backend phân tán & Hướng sự kiện",
                    description:
                        "Thiết kế microservices phân tán chịu tải cao, đảm bảo tính nhất quán dữ liệu và giao tiếp bất đồng bộ.",
                    proof: "Transactional Outbox Pattern với Publisher Confirms và Dead Letter Queue trên RabbitMQ.",
                    skills: [
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
                data: {
                    title: "Hạ tầng dữ liệu & Phân tích OLAP",
                    description:
                        "Lưu trữ và phân tích dữ liệu quy mô lớn, tối ưu hóa truy vấn phân tích thời gian thực và quản lý đồ thị xã hội.",
                    proof: "Bảng cột ClickHouse tối ưu hóa cho truy vấn tổng hợp xu hướng mạng xã hội thời gian phản hồi < 15ms.",
                    skills: [
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
                devops: {
                    title: "DevOps, Giám sát & Công cụ",
                    description:
                        "Tự động hóa triển khai container, giám sát hệ thống tập trung và thu thập dữ liệu web phân tán.",
                    proof: "Hệ thống giám sát tập trung Prometheus, Grafana, Loki kết hợp Playwright với thuật toán điều tốc thích ứng.",
                    skills: [
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
            },
            // Backward-compatible category labels
            categories: {
                languages: "Ngôn ngữ lập trình",
                frameworks: "Frameworks & Kiến trúc",
                databases: "Cơ sở dữ liệu & OLAP",
                tools: "Công cụ & DevOps",
            },
        },

        // Experience Section
        experience: {
            subtitle: "Kinh nghiệm",
            title: "Hành trình sự nghiệp",
            intern: "Thực tập",
            study: "Học tập",
            items: {
                aidt: {
                    title: "AI & Distributed Systems Engineer (Core Contributor)",
                    company: "HUTECH-AIDT Social Heartbeat",
                    period: "2025 - Hiện tại",
                    description: [
                        "Chủ trì thiết kế kiến trúc phân tán gồm 6 microservices phục vụ lắng nghe mạng xã hội và phân tích truyền thông thời gian thực",
                        "Xây dựng pipeline suy luận hai tầng (Two-Stage) sử dụng Ollama và Qwen3:8B, áp dụng kỹ thuật prompt engineering và cơ chế tự sửa JSON schema bằng Pydantic v2",
                        "Triển khai kiến trúc hướng sự kiện với RabbitMQ Topic Exchange, áp dụng Transactional Outbox Pattern kết hợp Publisher Confirms và Dead Letter Queue (DLQ) đảm bảo độ tin cậy tuyệt đối",
                        "Thiết kế kho dữ liệu cột ClickHouse cho dữ liệu phân tích OLAP, tối ưu hóa câu truy vấn tổng hợp thời gian phản hồi dưới 15ms trên hàng trăm nghìn bản ghi",
                        "Xây dựng hệ thống thu thập dữ liệu tự động với Playwright, tích hợp thuật toán điều tốc thích ứng (adaptive pacing) và cơ chế xoay vòng phiên làm việc an toàn",
                        "Thiết lập ngăn xếp quan sát tập trung với Prometheus, Grafana, Loki và OpenTelemetry để giám sát hiệu năng toàn hệ thống",
                    ],
                },
                backendDeveloper: {
                    title: "Backend Developer Intern",
                    company: "Amethyst Medical Việt Nam",
                    period: "Tháng 9/2025 - Tháng 11/2025",
                    description: [
                        "Thiết kế và tối ưu hóa cấu trúc cơ sở dữ liệu quan hệ MySQL cho hệ thống y tế",
                        "Điều phối kỹ thuật và phân công công việc backend cho các thành viên trong nhóm",
                        "Phát triển RESTful APIs với Spring Boot và MySQL, tích hợp kiểm thử đơn vị",
                        "Tích hợp JWT authentication để tăng cường bảo mật hệ thống và phân quyền người dùng",
                    ],
                },
                engineeringIntern: {
                    title: "IT Support",
                    company: "LEAD AND AIM TECHNOLOGY SOLUTIONS",
                    period: "Tháng 6/2025 - Tháng 9/2025",
                    description: [
                        "Thiết kế lại và tối ưu hiệu năng website công ty trên nền tảng WordPress",
                        "Kiểm thử, đánh giá và cấu hình máy quét barcode công nghiệp và thiết bị ngoại vi",
                        "Đại diện bộ phận kỹ thuật công ty tại triển lãm công nghệ lớn, nâng cao nhận diện thương hiệu",
                        "Hỗ trợ xử lý sự cố hạ tầng mạng nội bộ và hỗ trợ kỹ thuật người dùng",
                    ],
                },
                student: {
                    title: "Sinh viên Kỹ thuật Phần mềm",
                    company: "Đại học Công nghệ TP.HCM (HUTECH)",
                    period: "2022 - Hiện tại",
                    description: [
                        "Sinh viên năm 4 ngành Kỹ thuật phần mềm với định hướng AI Systems và Phân tán",
                        "Vinh dự đạt danh hiệu Sinh viên tiêu biểu HUTECH năm học 2024 - 2025",
                        "Tham gia nghiên cứu và phát triển các hệ thống thực tế (HUTECH-AIDT, Blur Social)",
                        "Tích cực tham gia hoạt động nghiên cứu khoa học và phát triển kỹ năng kỹ thuật",
                    ],
                },
            },
        },

        // Projects Section
        projects: {
            subtitle: "Dự án",
            title: "Dự án nổi bật",
            description:
                "Các hệ thống AI ứng dụng, kiến trúc microservices phân tán và hạ tầng dữ liệu quy mô thực tế.",
            viewDetails: "Xem chi tiết",
            viewMore: "Xem thêm trên GitHub",
            viewDiagram: "Xem Sơ Đồ Kiến Trúc Hệ Thống",
            academicTag: "Nghiên cứu khoa học • HUTECH",
            items: {
                aidt: {
                    title: "HUTECH-AIDT Social Heartbeat",
                    tagline: "Hệ thống Social Listening & Phân tích tâm lý đa khía cạnh hướng sự kiện",
                    category: "Featured System Architecture • HUTECH Research",
                    badge: "Kiến trúc hệ thống tiêu biểu",
                    problem:
                        "Xử lý hàng chục nghìn bài đăng mạng xã hội phân mảnh theo thời gian thực để phát hiện sớm khủng hoảng truyền thông của trường học. Hệ thống yêu cầu tự động thu thập không bị chặn, suy luận LLM đa tầng tiếng Việt chính xác và phân tích xu hướng tức thời với độ trễ cực thấp mà không phụ thuộc vào API đắt đỏ từ bên thứ ba.",
                    highlights: [
                        {
                            label: "Kiến trúc 6 Microservices",
                            desc: "Tách biệt rõ ràng: Crawler (Playwright), Ingestion/Processing, AI Inference, Analytics Engine, Core Backend, và Interactive Dashboard.",
                        },
                        {
                            label: "Suy luận LLM Hai Tầng (Two-Stage)",
                            desc: "Giai đoạn 1 phân loại đa nhãn khía cạnh (Aspect Multi-label), Giai đoạn 2 đánh giá cảm xúc chuyên sâu với Ollama Qwen 2.5/3:8B và Pydantic schema validation.",
                        },
                        {
                            label: "Độ tin cậy sự kiện cao (Event Reliability)",
                            desc: "Transactional Outbox Pattern với Publisher Confirms và Dead Letter Queue (DLQ) trên RabbitMQ Topic Exchange, đảm bảo không thất thoát dữ liệu sự kiện.",
                        },
                        {
                            label: "Phân tích OLAP siêu tốc (< 15ms)",
                            desc: "Kho dữ liệu cột ClickHouse tối ưu hóa schema fact-tables cho các truy vấn tổng hợp xu hướng, trực quan hóa trên Grafana dashboard thời gian thực.",
                        },
                    ],
                    tech: [
                        "Python",
                        "FastAPI",
                        "Ollama / Qwen3",
                        "RabbitMQ",
                        "ClickHouse",
                        "PostgreSQL",
                        "Docker",
                        "Playwright",
                    ],
                    viewDiagram: "Xem Sơ Đồ Kiến Trúc Hệ Thống",
                    repoTag: "Private Academic Research • HUTECH",
                },
                blur: {
                    title: "Blur Social Network",
                    tagline: "Nền tảng mạng xã hội Microservices với AI kiểm duyệt tiếng Việt PhoBERT v2",
                    description:
                        "Nền tảng mạng xã hội full-stack theo kiến trúc microservices: kiểm duyệt bình luận tiếng Việt tự động bằng PhoBERT v2 trên ONNX Runtime, trợ lý AI Gemini, chat realtime Socket.IO, gọi video/audio WebRTC, đồ thị mạng xã hội Neo4j, xác thực Keycloak OIDC/JWT và bộ nhớ đệm đa tầng Redis + Redisson.",
                    features: [
                        "Kiểm duyệt bình luận tiếng Việt tự động với PhoBERT v2 xuất sang ONNX Runtime tối ưu độ trễ",
                        "Trợ lý AI Gemini hỗ trợ tương tác và gợi ý nội dung thông minh",
                        "Xác thực phân tán Keycloak 26.1 (OIDC/JWT) tích hợp Spring OAuth2 Resource Server",
                        "Chat Realtime (Socket.IO) & Cuộc gọi Video/Audio P2P WebRTC",
                        "Đồ thị bạn bè Neo4j kết hợp luồng cấp dữ liệu CQRS Feed",
                        "Bộ nhớ đệm đa tầng: Caffeine + Redis + Redisson Distributed Lock",
                    ],
                    tech: [
                        "Java",
                        "Spring Boot 3",
                        "PhoBERT v2",
                        "ONNX Runtime",
                        "Keycloak",
                        "Neo4j",
                        "Redis",
                        "Socket.IO",
                        "WebRTC",
                        "Docker",
                    ],
                    github: "https://github.com/NeuroDev204/Blur",
                    demo: "https://github.com/NeuroDev204/Blur",
                },
                neuroEcommerce: {
                    title: "Neuro Ecommerce Platform",
                    tagline: "Hệ thống thương mại điện tử hiệu năng cao với Spring Boot & MySQL",
                    description:
                        "Hệ thống backend e-commerce hiệu năng cao bằng Spring Boot và MySQL, cung cấp hệ thống RESTful APIs hoàn chỉnh: quản lý danh mục sản phẩm, vận hành giỏ hàng, xử lý đơn hàng, điều phối giao dịch flash sale chống race condition và tích hợp cổng thanh toán VNPay.",
                    features: [
                        "Thiết kế kiến trúc RESTful APIs chuẩn mực và bảo mật JWT",
                        "Quản lý danh mục sản phẩm và đồng bộ tồn kho thời gian thực",
                        "Cơ chế khóa giao dịch đơn hàng và xử lý flash sale chịu tải",
                        "Tích hợp cổng thanh toán trực tuyến an toàn VNPay Sandbox",
                        "Tối ưu hóa chỉ mục (indexing) và truy vấn quan hệ MySQL",
                    ],
                    tech: [
                        "Java",
                        "Spring Boot",
                        "MySQL",
                        "JWT Security",
                        "VNPay Gateway",
                        "RESTful APIs",
                        "Docker",
                    ],
                    github: "https://github.com/NeuroDev204/Neuro_Ecommerce_Backend",
                    demo: "https://github.com/NeuroDev204/Neuro_Ecommerce_Backend",
                },
            },
            // Architecture Modal translation strings
            architectureModal: {
                title: "Sơ Đồ Kiến Trúc Hệ Thống HUTECH-AIDT",
                subtitle:
                    "Kiến trúc Microservices hướng sự kiện kết hợp Suy luận AI hai tầng & Phân tích OLAP ClickHouse",
                badge: "Kiến trúc hệ thống thực tế",
                close: "Đóng (ESC)",
                zoomIn: "Phóng to",
                zoomOut: "Thu nhỏ",
                resetZoom: "Mặc định",
                openNewTab: "Mở trong tab mới",
                download: "Tải sơ đồ đầy đủ (PNG)",
            },
        },

        // Top-level Architecture Modal reference (for flexibility across components)
        architectureModal: {
            title: "Sơ Đồ Kiến Trúc Hệ Thống HUTECH-AIDT",
            subtitle:
                "Kiến trúc Microservices hướng sự kiện kết hợp Suy luận AI hai tầng & Phân tích OLAP ClickHouse",
            badge: "Kiến trúc hệ thống thực tế",
            close: "Đóng (ESC)",
            zoomIn: "Phóng to",
            zoomOut: "Thu nhỏ",
            resetZoom: "Mặc định",
            openNewTab: "Mở trong tab mới",
            download: "Tải sơ đồ đầy đủ (PNG)",
        },

        // Contact Section
        contact: {
            subtitle: "Liên hệ",
            title: "Kết nối với tôi",
            description:
                "Bạn đang tìm kiếm một kỹ sư AI thực chiến hoặc kiến trúc backend phân tán? Hãy cùng thảo luận!",
            form: {
                name: "Họ và tên",
                namePlaceholder: "Nhập họ và tên của bạn",
                email: "Email",
                emailPlaceholder: "email@example.com",
                message: "Tin nhắn",
                messagePlaceholder: "Nhập nội dung dự án hoặc cơ hội hợp tác...",
                submit: "Gửi tin nhắn",
                sending: "Đang gửi...",
                sent: "Đã gửi thành công!",
            },
            socialConnect: "Hoặc kết nối qua mạng xã hội",
        },

        // Footer
        footer: {
            madeWith: "Thiết kế & phát triển bởi",
            using: "bằng Next.js & Minimalist Tech Design System",
            copyright: "Bản quyền thuộc về Phạm Văn Sỹ. Bảo lưu mọi quyền.",
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
            role: "AI & Distributed Systems Engineer",
            headline: "Architecting Production AI Systems & Distributed Backends",
            description:
                "Software engineer specializing in applied AI systems (Python, FastAPI, Ollama/Qwen, PhoBERT) integrated with resilient event-driven microservices (RabbitMQ, ClickHouse, Spring Boot) for high reliability and scale.",
            viewProjects: "Explore Projects",
            downloadCV: "Download CV",
            metrics: {
                microservices: "6 Microservices",
                microservicesSub: "Event-driven RabbitMQ",
                latency: "< 15ms Latency",
                latencySub: "Real-time ClickHouse OLAP",
                twoStage: "Two-Stage AI",
                twoStageSub: "Ollama inference pipeline",
            },
        },

        // About Section
        about: {
            subtitle: "Introduction",
            title: "About Me",
            greeting: "Hello! I am",
            description1:
                "Software engineer specializing in AI Systems and Distributed Backend Architecture. I focus on designing and deploying production-grade applied AI systems: from self-hosted LLM inference pipelines (Ollama, PhoBERT, ONNX) to resilient event-driven microservices (RabbitMQ, Spring Boot, FastAPI) and real-time OLAP analytical datastores (ClickHouse).",
            description2:
                "Driven by engineering rigor and a solid software engineering foundation (Outstanding Student at HUTECH 2024 - 2025), I aim to deliver high-reliability solutions with clean architectural boundaries and proven real-world scalability.",
            // 4 Core Engineering Pillars
            pillars: {
                aiSystems: {
                    title: "AI Systems & LLM Orchestration",
                    description:
                        "Designing two-stage inference pipelines, optimizing prompts, enforcing JSON schema outputs, and integrating local models with Ollama & PhoBERT.",
                },
                architecture: {
                    title: "High-Reliability Architecture",
                    description:
                        "Implementing Transactional Outbox Pattern, Dead Letter Queues (DLQ), Publisher Confirms on RabbitMQ, and Redis Distributed Locking.",
                },
                dataInfra: {
                    title: "Data-Intensive & OLAP Infrastructure",
                    description:
                        "Optimizing ClickHouse columnar tables for sub-15ms social aggregation queries, combined with async PostgreSQL and MinIO S3 object storage.",
                },
                growth: {
                    title: "Engineering Rigor & Continuous Growth",
                    description:
                        "Outstanding Student at HUTECH 2024 - 2025. Committed to clean architecture, full-stack observability (OpenTelemetry/Grafana), and rigorous documentation.",
                },
            },
            // Backward-compatible aliases for existing components
            highlights: {
                aiSystems: {
                    title: "AI Systems & LLM Orchestration",
                    description:
                        "Designing two-stage inference pipelines, optimizing prompts, enforcing JSON schema outputs, and integrating local models with Ollama & PhoBERT.",
                },
                architecture: {
                    title: "High-Reliability Architecture",
                    description:
                        "Implementing Transactional Outbox Pattern, Dead Letter Queues (DLQ), Publisher Confirms on RabbitMQ, and Redis Distributed Locking.",
                },
                dataInfra: {
                    title: "Data-Intensive & OLAP Infrastructure",
                    description:
                        "Optimizing ClickHouse columnar tables for sub-15ms social aggregation queries, combined with async PostgreSQL and MinIO S3 object storage.",
                },
                growth: {
                    title: "Engineering Rigor & Continuous Growth",
                    description:
                        "Outstanding Student at HUTECH 2024 - 2025. Committed to clean architecture, full-stack observability (OpenTelemetry/Grafana), and rigorous documentation.",
                },
                backend: {
                    title: "Backend Architecture",
                    description:
                        "Designing and building scalable, high-throughput, low-latency distributed microservices.",
                },
                english: {
                    title: "Technical English",
                    description:
                        "Proficient communication and deep reading of technical specs, architecture papers, and AI research.",
                },
                teamwork: {
                    title: "Teamwork & Authorship",
                    description:
                        "Effective technical collaboration, modular ownership, and architectural code reviews.",
                },
                problemSolving: {
                    title: "Problem Solving",
                    description:
                        "Logical reasoning, root-cause troubleshooting grounded in empirical metrics and logs.",
                },
            },
        },

        // Skills Section
        skills: {
            subtitle: "Technical Expertise",
            title: "Technical Capabilities & Stack",
            moreSkills:
                "And additional technologies: Linux, Git, Playwright, APScheduler, Alembic, Strawberry GraphQL, Pydantic v2, PyTorch...",
            // 4 Clean Clusters
            clusters: {
                ai: {
                    title: "AI Engineering & LLM Systems",
                    description:
                        "Building production AI systems, local model orchestration, and Vietnamese NLP processing pipelines.",
                    proof: "Two-stage LLM inference pipeline with automatic JSON schema self-repair and ONNX Runtime content moderation.",
                    skills: [
                        "Python",
                        "FastAPI",
                        "Ollama (Qwen 2.5/3)",
                        "PhoBERT v2",
                        "ONNX Runtime",
                        "Pydantic v2",
                        "Prompt Engineering",
                        "PyTorch",
                    ],
                },
                backend: {
                    title: "Distributed Backend & Event-Driven",
                    description:
                        "Architecting high-throughput distributed microservices with guaranteed data consistency and asynchronous messaging.",
                    proof: "Transactional Outbox Pattern with Publisher Confirms and Dead Letter Queue on RabbitMQ.",
                    skills: [
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
                data: {
                    title: "Data & Analytics Infrastructure",
                    description:
                        "Large-scale data storage and analytics, real-time analytical query optimization, and social graph management.",
                    proof: "ClickHouse columnar tables optimized for social trend aggregation queries with sub-15ms response latency.",
                    skills: [
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
                devops: {
                    title: "DevOps, Observability & Tooling",
                    description:
                        "Automated container deployments, centralized system observability, and distributed web data collection.",
                    proof: "Full-stack centralized observability (Prometheus, Grafana, Loki) with Playwright adaptive crawl rate limiting.",
                    skills: [
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
            },
            // Backward-compatible category labels
            categories: {
                languages: "Programming Languages",
                frameworks: "Frameworks & Architecture",
                databases: "Databases & OLAP",
                tools: "Tools & DevOps",
            },
        },

        // Experience Section
        experience: {
            subtitle: "Experience",
            title: "Professional Journey",
            intern: "Internship",
            study: "Education",
            items: {
                aidt: {
                    title: "AI & Distributed Systems Engineer (Core Contributor)",
                    company: "HUTECH-AIDT Social Heartbeat",
                    period: "2025 - Present",
                    description: [
                        "Spearheaded distributed architecture across 6 microservices for real-time social listening and PR media intelligence",
                        "Engineered two-stage AI inference pipeline leveraging Ollama and local Qwen3:8B, featuring structured prompt engineering and Pydantic v2 JSON schema self-repair",
                        "Implemented resilient event-driven architecture using RabbitMQ Topic Exchange, Transactional Outbox Pattern, Publisher Confirms, and Dead Letter Queues (DLQ)",
                        "Designed ClickHouse columnar fact tables for OLAP analytics, optimizing aggregation queries to sub-15ms latency across hundreds of thousands of records",
                        "Constructed automated web crawling workers with Playwright, incorporating adaptive pacing algorithms and session rotation for robust anti-blocking resilience",
                        "Configured full-stack centralized observability with Prometheus, Grafana, Loki, and OpenTelemetry for end-to-end performance tracking",
                    ],
                },
                backendDeveloper: {
                    title: "Backend Developer Intern",
                    company: "Amethyst Medical Vietnam",
                    period: "Sep 2025 - Nov 2025",
                    description: [
                        "Designed and optimized MySQL relational database schemas for a clinical management platform",
                        "Coordinated backend development tasks and technical workflows across team members",
                        "Developed robust RESTful APIs using Java Spring Boot with unit testing integration",
                        "Integrated JWT authentication to enhance system security and role-based access control",
                    ],
                },
                engineeringIntern: {
                    title: "IT Support",
                    company: "LEAD AND AIM TECHNOLOGY SOLUTIONS",
                    period: "Jun 2025 - Sep 2025",
                    description: [
                        "Redesigned and optimized company web infrastructure on WordPress for improved performance and UX",
                        "Conducted rigorous testing and quality evaluation for industrial barcode scanners and peripherals",
                        "Represented technical staff at major industry exhibitions, boosting brand engagement and client demonstrations",
                        "Troubleshot internal networking and software infrastructure, providing rapid technical support",
                    ],
                },
                student: {
                    title: "Software Engineering Student",
                    company: "Ho Chi Minh City University of Technology (HUTECH)",
                    period: "2022 - Present",
                    description: [
                        "Final-year Software Engineering undergraduate specialized in applied AI Systems and Distributed Architectures",
                        "Honored as Outstanding Student of HUTECH for the 2024 - 2025 academic year for academic and research excellence",
                        "Core contributor and technical lead on applied research initiatives (HUTECH-AIDT, Blur Social)",
                        "Actively engaged in academic research symposiums, tech communities, and collaborative open projects",
                    ],
                },
            },
        },

        // Projects Section
        projects: {
            subtitle: "Projects",
            title: "Featured Projects",
            description:
                "Production-grade applied AI systems, distributed microservices architectures, and high-performance data platforms.",
            viewDetails: "View Details",
            viewMore: "View more on GitHub",
            viewDiagram: "View System Architecture Diagram",
            academicTag: "Academic Research • HUTECH",
            items: {
                aidt: {
                    title: "HUTECH-AIDT Social Heartbeat",
                    tagline: "Event-Driven AI Social Listening & Aspect-Based Sentiment Platform",
                    category: "Featured System Architecture • HUTECH Research",
                    badge: "Flagship System Architecture",
                    problem:
                        "Processing tens of thousands of fragmented social media posts in real time for early detection of institutional PR crises. Required resilient anti-detection scraping, accurate multi-stage Vietnamese LLM inference, and instantaneous trend analytics without relying on expensive third-party APIs.",
                    highlights: [
                        {
                            label: "6 Microservices Architecture",
                            desc: "Decoupled pipeline: Crawler (Playwright), Ingestion/Processing, AI Inference, Analytics Engine, Core Backend, and Interactive Dashboard.",
                        },
                        {
                            label: "Two-Stage LLM Inference",
                            desc: "Stage 1 extracts multi-label aspects, Stage 2 performs aspect-based sentiment scoring via local Ollama Qwen 2.5/3:8B with Pydantic schema validation.",
                        },
                        {
                            label: "High Event Reliability",
                            desc: "Transactional Outbox Pattern with Publisher Confirms and Dead Letter Queue (DLQ) over RabbitMQ Topic Exchange, guaranteeing zero event loss.",
                        },
                        {
                            label: "Sub-15ms OLAP Analytics",
                            desc: "ClickHouse columnar fact tables optimized for aggregation queries, powering real-time Grafana trend dashboards under 15ms latency.",
                        },
                    ],
                    tech: [
                        "Python",
                        "FastAPI",
                        "Ollama / Qwen3",
                        "RabbitMQ",
                        "ClickHouse",
                        "PostgreSQL",
                        "Docker",
                        "Playwright",
                    ],
                    viewDiagram: "View System Architecture Diagram",
                    repoTag: "Private Academic Research • HUTECH",
                },
                blur: {
                    title: "Blur Social Network",
                    tagline: "Microservices Social Network with PhoBERT v2 Vietnamese Moderation",
                    description:
                        "Full-stack microservices social platform featuring automated Vietnamese comment moderation via PhoBERT v2 on ONNX Runtime, Gemini AI assistant, Socket.IO realtime chat, WebRTC video/audio calls, Neo4j social graph, Keycloak OIDC/JWT, and multi-level Redis + Redisson caching.",
                    features: [
                        "Automated Vietnamese comment moderation via PhoBERT v2 exported to ONNX Runtime for low-latency inference",
                        "Gemini AI Assistant for intelligent interactions and content suggestions",
                        "Distributed authentication via Keycloak 26.1 (OIDC/JWT) with Spring OAuth2 Resource Server",
                        "Realtime Chat (Socket.IO) & P2P WebRTC Video/Audio Calling",
                        "Neo4j Social Graph engine combined with CQRS timeline feeds",
                        "Multi-level caching: Caffeine + Redis + Redisson Distributed Locking",
                    ],
                    tech: [
                        "Java",
                        "Spring Boot 3",
                        "PhoBERT v2",
                        "ONNX Runtime",
                        "Keycloak",
                        "Neo4j",
                        "Redis",
                        "Socket.IO",
                        "WebRTC",
                        "Docker",
                    ],
                    github: "https://github.com/NeuroDev204/Blur",
                    demo: "https://github.com/NeuroDev204/Blur",
                },
                neuroEcommerce: {
                    title: "Neuro Ecommerce Platform",
                    tagline: "High-Performance Ecommerce Backend with Spring Boot & MySQL",
                    description:
                        "High-performance e-commerce backend built with Spring Boot and MySQL, providing comprehensive RESTful APIs: catalog management, shopping cart operations, order processing, race-condition protected flash sale transactions, and VNPay payment gateway integration.",
                    features: [
                        "Standardized RESTful API architecture with JWT security enforcement",
                        "Product catalog management with real-time inventory synchronization",
                        "Transactional locking for concurrency-safe checkout and flash sales",
                        "Secure online payment gateway integration via VNPay Sandbox",
                        "MySQL schema indexing and relational query performance tuning",
                    ],
                    tech: [
                        "Java",
                        "Spring Boot",
                        "MySQL",
                        "JWT Security",
                        "VNPay Gateway",
                        "RESTful APIs",
                        "Docker",
                    ],
                    github: "https://github.com/NeuroDev204/Neuro_Ecommerce_Backend",
                    demo: "https://github.com/NeuroDev204/Neuro_Ecommerce_Backend",
                },
            },
            // Architecture Modal translation strings
            architectureModal: {
                title: "HUTECH-AIDT System Architecture Diagram",
                subtitle:
                    "Event-Driven Microservices Architecture with Two-Stage AI Inference & ClickHouse OLAP Analytics",
                badge: "Production Architecture",
                close: "Close (ESC)",
                zoomIn: "Zoom In",
                zoomOut: "Zoom Out",
                resetZoom: "Reset Zoom",
                openNewTab: "Open in New Tab",
                download: "Download Full Diagram (PNG)",
            },
        },

        // Top-level Architecture Modal reference (for flexibility across components)
        architectureModal: {
            title: "HUTECH-AIDT System Architecture Diagram",
            subtitle:
                "Event-Driven Microservices Architecture with Two-Stage AI Inference & ClickHouse OLAP Analytics",
            badge: "Production Architecture",
            close: "Close (ESC)",
            zoomIn: "Zoom In",
            zoomOut: "Zoom Out",
            resetZoom: "Reset Zoom",
            openNewTab: "Open in New Tab",
            download: "Download Full Diagram (PNG)",
        },

        // Contact Section
        contact: {
            subtitle: "Contact",
            title: "Get In Touch",
            description:
                "Looking for an applied AI engineer or distributed systems architect? Let's discuss!",
            form: {
                name: "Full Name",
                namePlaceholder: "Enter your full name",
                email: "Email",
                emailPlaceholder: "email@example.com",
                message: "Message",
                messagePlaceholder: "Enter your message or collaboration details...",
                submit: "Send Message",
                sending: "Sending...",
                sent: "Sent successfully!",
            },
            socialConnect: "Or connect via social media",
        },

        // Footer
        footer: {
            madeWith: "Designed & built by",
            using: "using Next.js & Minimalist Tech Design System",
            copyright: "All rights reserved. Pham Van Sy.",
        },
    },
};

export type Language = "vi" | "en";
export type Translations = typeof translations.vi;

// Enforce strict bidirectional type symmetry at compile time
const _symmetryCheckViToEn: typeof translations.vi = translations.en;
const _symmetryCheckEnToVi: typeof translations.en = translations.vi;
void _symmetryCheckViToEn;
void _symmetryCheckEnToVi;
