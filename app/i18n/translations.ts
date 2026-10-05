export const translations = {
    en: {
        nav: {
            about: "About",
            services: "Services",
            work: "Work",
            process: "Process",
            cta: "Start a project",
            menu: "Menu",
            openMenu: "Open menu",
            closeMenu: "Close menu",
            language: "Language",
            primary: "Primary",
        },

        hero: {
            badge: "Available for new projects",
            titleLead: "I build AI features that ship",
            titleAccent: "— and the backend that keeps them running.",
            description:
                "Freelance AI engineer. I take models from notebook to production: fine-tuned NLP, LLM assistants, and the event-driven APIs around them.",
            primaryCta: "Start a project",
            secondaryCta: "See my work",
            stats: [
                { value: "24 ms", label: "model inference, avg." },
                { value: "1.48×", label: "faster after ONNX export" },
                { value: "5", label: "microservices in the Blur platform" },
            ],
            pipeline: {
                title: "blur / moderation-pipeline",
                steps: [
                    { title: "New comment", detail: "POST /comments · Spring Boot", badge: "" },
                    { title: "Event queued", detail: "Kafka · comment.created", badge: "" },
                    { title: "Toxicity check", detail: "PhoBERT · ONNX Runtime", badge: "24 ms" },
                    { title: "Result published", detail: "Kafka · moderation.result", badge: "" },
                    { title: "Feed updated", detail: "CQRS projection · Redis cache", badge: "" },
                ],
            },
        },

        stack: {
            label: "Tech stack",
        },

        about: {
            eyebrow: "About",
            title: "Hi, I'm Sy.",
            photoAlt: "Portrait of Pham Van Sy",
            paragraphs: [
                "I'm a software engineer in Ho Chi Minh City, finishing a Software Engineering degree at HUTECH, where I was named an Outstanding Student for 2024–2025.",
                "My work sits where AI meets backend engineering: training and serving models, then building the services that keep them reliable. Before freelancing I built REST APIs for a clinical management platform as a backend intern at Amethyst Medical Vietnam.",
            ],
            facts: [
                { label: "Location", value: "Ho Chi Minh City · GMT+7" },
                { label: "Languages", value: "English, Vietnamese" },
                { label: "Availability", value: "Open for projects" },
            ],
            github: "GitHub",
            linkedin: "LinkedIn",
            cv: "Download CV",
        },

        services: {
            eyebrow: "Services",
            title: "What I can build for you",
            description: "Three ways I usually help. Each one is backed by a system I've already shipped.",
            items: [
                {
                    title: "AI features for your product",
                    description:
                        "Text classification, content moderation and LLM assistants — trained on your data or built on an API, served fast.",
                    deliverables: [
                        "Model choice or fine-tuning on your data",
                        "Inference API with a latency budget",
                        "Evaluation against a simple baseline",
                    ],
                },
                {
                    title: "Backends & APIs that scale",
                    description:
                        "Event-driven services that keep data consistent under load, with auth, caching and failure handling built in.",
                    deliverables: [
                        "REST and WebSocket APIs with SSO / JWT",
                        "Kafka pipelines with outbox and saga",
                        "Redis caching, locks and circuit breakers",
                    ],
                },
                {
                    title: "AI-powered MVPs",
                    description:
                        "From idea to a deployed product: web app, backend and AI in one build, with one person accountable.",
                    deliverables: [
                        "React / Next.js front end",
                        "Backend and AI wired together",
                        "Docker deploy with CI/CD",
                    ],
                },
            ],
        },

        work: {
            eyebrow: "Selected work",
            title: "Shipped, not just prototyped",
            source: "Source",
            blur: {
                meta: "Case study · Social platform · 2025",
                title: "Blur — a social network that moderates Vietnamese comments in real time",
                problem:
                    "Toxic comments in Vietnamese slip past English-first filters. I fine-tuned PhoBERT on scraped YouTube and TikTok comments and wired it into a microservices platform so every comment is checked without slowing the feed.",
                built: [
                    "Async moderation: Kafka → FastAPI model service → Kafka",
                    "Spring Boot services with outbox, saga and CQRS feed",
                    "Keycloak SSO, WebRTC calls, Gemini chat assistant",
                ],
                stats: [
                    { value: "24 ms", label: "inference, avg." },
                    { value: "1.48×", label: "faster with ONNX" },
                    { value: "5", label: "microservices" },
                ],
                demo: "Product demo · 3:24",
                pauseVideo: "Pause video",
                playVideo: "Play video",
            },
            ecommerce: {
                meta: "Backend · E-commerce",
                title: "Neuro Ecommerce API",
                description:
                    "REST backend for an online store: catalog, cart, orders, flash sales that don't oversell, and VNPay payments.",
            },
            coral: {
                meta: "Lab · Linux desktop",
                title: "Coral — system-wide audio enhancer",
                description:
                    "Linux port of the open-source FxSound (AGPL-3): a PulseAudio passthrough backend, low-latency tuning and .deb packaging.",
            },
        },

        process: {
            eyebrow: "Process",
            title: "How we'd work together",
            steps: [
                {
                    title: "Discovery call",
                    description: "A short call to understand the problem. You get a written scope, milestones and a quote.",
                },
                {
                    title: "Build in milestones",
                    description: "Weekly demos and a shared repo, so you see progress, not surprises.",
                },
                {
                    title: "Ship",
                    description: "Deployed to your infrastructure with Docker, CI/CD and handover docs.",
                },
                {
                    title: "Iterate",
                    description: "Fixes and improvements after launch, as agreed in the scope.",
                },
            ],
        },

        contact: {
            eyebrow: "Contact",
            title: "Tell me about your project",
            description:
                "Share a few details and I'll reply with questions or a proposal, usually within one business day.",
            form: {
                name: "Name",
                namePlaceholder: "Jane Cooper",
                email: "Email",
                emailPlaceholder: "jane@company.com",
                projectType: "What do you need?",
                projectTypes: ["AI feature", "Backend / API", "Full MVP", "Something else"],
                budget: "Budget",
                budgets: ["< $1k", "$1k–3k", "$3k–8k", "$8k+"],
                timeline: "Timeline",
                timelines: ["ASAP", "1–3 months", "Flexible"],
                message: "Project details",
                messagePlaceholder: "What are you building, and where do you need help?",
                submit: "Send brief",
                sending: "Sending…",
                sent: "Thanks — your brief is in. I'll get back to you within one business day.",
                errorLead: "Couldn't send your message. Try again, or email me at",
            },
        },

        footer: {
            backToTop: "Back to top",
        },
    },

    vi: {
        nav: {
            about: "Giới thiệu",
            services: "Dịch vụ",
            work: "Dự án",
            process: "Quy trình",
            cta: "Bắt đầu dự án",
            menu: "Menu",
            openMenu: "Mở menu",
            closeMenu: "Đóng menu",
            language: "Ngôn ngữ",
            primary: "Điều hướng chính",
        },

        hero: {
            badge: "Đang nhận dự án mới",
            titleLead: "Tôi xây tính năng AI chạy thật",
            titleAccent: "— và cả backend giữ chúng vận hành ổn định.",
            description:
                "Kỹ sư AI freelance. Tôi đưa model từ notebook lên production: NLP fine-tune, trợ lý LLM, và các API hướng sự kiện bao quanh chúng.",
            primaryCta: "Bắt đầu dự án",
            secondaryCta: "Xem dự án",
            stats: [
                { value: "24 ms", label: "suy luận model, trung bình" },
                { value: "1.48×", label: "nhanh hơn sau khi export ONNX" },
                { value: "5", label: "microservice trong nền tảng Blur" },
            ],
            pipeline: {
                title: "blur / moderation-pipeline",
                steps: [
                    { title: "Bình luận mới", detail: "POST /comments · Spring Boot", badge: "" },
                    { title: "Đưa vào hàng đợi", detail: "Kafka · comment.created", badge: "" },
                    { title: "Kiểm tra độc hại", detail: "PhoBERT · ONNX Runtime", badge: "24 ms" },
                    { title: "Trả kết quả", detail: "Kafka · moderation.result", badge: "" },
                    { title: "Cập nhật feed", detail: "CQRS projection · Redis cache", badge: "" },
                ],
            },
        },

        stack: {
            label: "Công nghệ",
        },

        about: {
            eyebrow: "Giới thiệu",
            title: "Chào, tôi là Sỹ.",
            photoAlt: "Ảnh chân dung Phạm Văn Sỹ",
            paragraphs: [
                "Tôi là kỹ sư phần mềm ở TP. Hồ Chí Minh, sinh viên năm cuối ngành Kỹ thuật phần mềm tại HUTECH, Sinh viên tiêu biểu năm học 2024–2025.",
                "Công việc của tôi nằm ở chỗ AI gặp backend: huấn luyện và phục vụ model, rồi xây các service giữ chúng chạy ổn định. Trước khi làm freelance, tôi viết REST API cho nền tảng quản lý phòng khám khi thực tập backend tại Amethyst Medical Vietnam.",
            ],
            facts: [
                { label: "Địa điểm", value: "TP. Hồ Chí Minh · GMT+7" },
                { label: "Ngôn ngữ", value: "Tiếng Anh, tiếng Việt" },
                { label: "Lịch làm việc", value: "Đang nhận dự án" },
            ],
            github: "GitHub",
            linkedin: "LinkedIn",
            cv: "Tải CV",
        },

        services: {
            eyebrow: "Dịch vụ",
            title: "Tôi có thể xây gì cho bạn",
            description: "Ba việc tôi thường làm. Mỗi việc đều có một hệ thống đã chạy thật làm bằng chứng.",
            items: [
                {
                    title: "Tính năng AI cho sản phẩm",
                    description:
                        "Phân loại văn bản, kiểm duyệt nội dung, trợ lý LLM — huấn luyện trên dữ liệu của bạn hoặc dựng trên API, phản hồi nhanh.",
                    deliverables: [
                        "Chọn model hoặc fine-tune trên dữ liệu của bạn",
                        "API suy luận có ngân sách độ trễ",
                        "Đánh giá so với một baseline đơn giản",
                    ],
                },
                {
                    title: "Backend & API chịu tải",
                    description:
                        "Service hướng sự kiện giữ dữ liệu nhất quán khi tải cao, có sẵn xác thực, cache và xử lý lỗi.",
                    deliverables: [
                        "REST và WebSocket API với SSO / JWT",
                        "Pipeline Kafka với outbox và saga",
                        "Cache Redis, khoá phân tán, circuit breaker",
                    ],
                },
                {
                    title: "MVP có AI",
                    description:
                        "Từ ý tưởng tới sản phẩm đã deploy: web app, backend và AI trong một lần dựng, một người chịu trách nhiệm.",
                    deliverables: [
                        "Front end React / Next.js",
                        "Backend và AI nối với nhau",
                        "Deploy Docker kèm CI/CD",
                    ],
                },
            ],
        },

        work: {
            eyebrow: "Dự án tiêu biểu",
            title: "Đã chạy thật, không chỉ là prototype",
            source: "Mã nguồn",
            blur: {
                meta: "Case study · Mạng xã hội · 2025",
                title: "Blur — mạng xã hội tự kiểm duyệt bình luận tiếng Việt theo thời gian thực",
                problem:
                    "Bình luận độc hại tiếng Việt lọt qua các bộ lọc thiết kế cho tiếng Anh. Tôi fine-tune PhoBERT trên bình luận thu thập từ YouTube và TikTok, rồi nối vào nền tảng microservices để mọi bình luận đều được kiểm tra mà feed không chậm lại.",
                built: [
                    "Kiểm duyệt bất đồng bộ: Kafka → service model FastAPI → Kafka",
                    "Service Spring Boot với outbox, saga và feed CQRS",
                    "Keycloak SSO, gọi video WebRTC, trợ lý chat Gemini",
                ],
                stats: [
                    { value: "24 ms", label: "suy luận, trung bình" },
                    { value: "1.48×", label: "nhanh hơn với ONNX" },
                    { value: "5", label: "microservice" },
                ],
                demo: "Video demo · 3:24",
                pauseVideo: "Tạm dừng video",
                playVideo: "Phát video",
            },
            ecommerce: {
                meta: "Backend · Thương mại điện tử",
                title: "Neuro Ecommerce API",
                description:
                    "Backend REST cho cửa hàng online: danh mục, giỏ hàng, đơn hàng, flash sale không bán vượt tồn kho, và thanh toán VNPay.",
            },
            coral: {
                meta: "Lab · Ứng dụng desktop Linux",
                title: "Coral — tăng cường âm thanh toàn hệ thống",
                description:
                    "Bản port lên Linux của FxSound mã nguồn mở (AGPL-3): backend passthrough PulseAudio, tinh chỉnh độ trễ thấp và đóng gói .deb.",
            },
        },

        process: {
            eyebrow: "Quy trình",
            title: "Chúng ta sẽ làm việc thế nào",
            steps: [
                {
                    title: "Trao đổi ban đầu",
                    description: "Một cuộc gọi ngắn để hiểu vấn đề. Bạn nhận phạm vi viết rõ, các mốc và báo giá.",
                },
                {
                    title: "Làm theo mốc",
                    description: "Demo hằng tuần và repo dùng chung, bạn thấy tiến độ chứ không bị bất ngờ.",
                },
                {
                    title: "Bàn giao",
                    description: "Deploy lên hạ tầng của bạn với Docker, CI/CD và tài liệu bàn giao.",
                },
                {
                    title: "Cải tiến",
                    description: "Sửa lỗi và cải tiến sau khi ra mắt, theo phạm vi đã thống nhất.",
                },
            ],
        },

        contact: {
            eyebrow: "Liên hệ",
            title: "Kể tôi nghe về dự án của bạn",
            description:
                "Chia sẻ vài thông tin, tôi sẽ trả lời bằng câu hỏi hoặc đề xuất, thường trong một ngày làm việc.",
            form: {
                name: "Họ tên",
                namePlaceholder: "Nguyễn Văn A",
                email: "Email",
                emailPlaceholder: "ban@congty.com",
                projectType: "Bạn cần gì?",
                projectTypes: ["Tính năng AI", "Backend / API", "MVP trọn gói", "Việc khác"],
                budget: "Ngân sách",
                budgets: ["< $1k", "$1k–3k", "$3k–8k", "$8k+"],
                timeline: "Thời gian",
                timelines: ["Càng sớm càng tốt", "1–3 tháng", "Linh hoạt"],
                message: "Chi tiết dự án",
                messagePlaceholder: "Bạn đang xây gì, và cần giúp ở phần nào?",
                submit: "Gửi yêu cầu",
                sending: "Đang gửi…",
                sent: "Cảm ơn bạn — tôi đã nhận được yêu cầu và sẽ phản hồi trong một ngày làm việc.",
                errorLead: "Chưa gửi được tin nhắn. Thử lại, hoặc email cho tôi tại",
            },
        },

        footer: {
            backToTop: "Lên đầu trang",
        },
    },
};

export type Language = "vi" | "en";
export type Translations = typeof translations.en;

// Enforce strict bidirectional type symmetry at compile time
const _symmetryCheckViToEn: typeof translations.vi = translations.en;
const _symmetryCheckEnToVi: typeof translations.en = translations.vi;
void _symmetryCheckViToEn;
void _symmetryCheckEnToVi;
