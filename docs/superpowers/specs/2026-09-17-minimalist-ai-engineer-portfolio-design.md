# Design Specification: Minimalist Tech AI Engineer Portfolio Redesign

- **Date**: 2026-09-17
- **Author**: Antigravity Agent & Pham Van Sy
- **Target Persona**: Hybrid AI Engineer & Backend Architect
- **Design Style**: Minimalist Tech (Apple / Clean Modern)
- **Status**: Approved by User

---

## 1. Overview & Core Philosophy

This redesign transitions the portfolio into a refined, elegant **Minimalist Tech** presentation inspired by Apple and modern Swiss design principles. The visual language avoids heavy glows, flashy neon colors, and complex simulation widgets. Instead, it emphasizes:
1. **Generous Whitespace & Restraint**: Clean layouts, high-contrast typography, and breathing room.
2. **High-Value Technical Substance**: Positioning Pham Van Sy as an elite **Hybrid AI Engineer & Backend Architect**.
3. **Flagship Focus on HUTECH-AIDT Social Heartbeat**: Showcasing the real-world event-driven microservices architecture, Ollama/Qwen3 two-stage LLM inference, RabbitMQ messaging, and ClickHouse OLAP analytics.
4. **Accessible & Responsive Polish**: Flawless light/dark mode support, WCAG AA compliance, and mobile-first responsiveness.

---

## 2. Design System & Tokens (`ui-ux-pro-max` Standards)

Defined in `app/globals.css`, supporting both Light and Dark modes:

### 2.1 Color Tokens

| Token Name | Light Theme (Default/Clean) | Dark Theme (Obsidian Clean) | Semantic Role |
|---|---|---|---|
| `--bg-primary` | `#FAFAFA` (Zinc 50) | `#09090B` (Zinc 950) | Main page background |
| `--bg-card` | `#FFFFFF` (Pure White) | `#141416` (Neutral Dark) | Card and container surfaces |
| `--bg-card-hover` | `#F4F4F5` (Zinc 100) | `#1C1C1F` (Neutral Dark Hover) | Hover state for interactive cards |
| `--border-subtle` | `#E4E4E7` (Zinc 200) | `#27272A` (Zinc 800) | 1px subtle borders |
| `--text-primary` | `#09090B` (Zinc 950) | `#FAFAFA` (Zinc 50) | Headings & primary body (> 17:1 AAA) |
| `--text-secondary` | `#52525B` (Zinc 600) | `#A1A1AA` (Zinc 400) | Descriptions & subtitles (> 7:1 AAA) |
| `--text-muted` | `#71717A` (Zinc 500) | `#71717A` (Zinc 500) | Captions & metadata |
| `--btn-primary-bg` | `#09090B` (Solid Black) | `#FAFAFA` (Solid White) | Primary CTA button background |
| `--btn-primary-text`| `#FFFFFF` (Solid White) | `#09090B` (Solid Black) | Primary CTA button text |

### 2.2 Typography
- Primary Sans: `Plus Jakarta Sans`, `Inter`, `system-ui`, `sans-serif`.
- Technical Code / Event Names: `font-mono` (ui-monospace, Menlo, Monaco).
- Completely eliminates old serif font styles.

### 2.3 Component Utilities
- `.clean-card`: `bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm`.
- `.btn-pill-primary`: Solid pill-shaped CTA button with smooth hover elevation (`rounded-full px-6 py-3 font-semibold transition-all duration-200 hover:-translate-y-0.5`).
- `.btn-pill-secondary`: Bordered pill-shaped button with subtle border (`border border-[var(--border-subtle)] bg-[var(--bg-card)] rounded-full px-6 py-3 font-medium transition-all duration-200 hover:-translate-y-0.5`).
- `.pill-tag`: Subtle pill tag for skills and technologies (`rounded-full px-3 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200`).

---

## 3. Component Architecture & Page Structure

### 3.1 Hero Section (`app/components/Hero.tsx`)
- **Two-Column Clean Split (Desktop 7:5 / Responsive Mobile)**:
  - **Left Column**:
    - Minimalist role pill: `AI & Distributed Systems Engineer`.
    - Name: `Phạm Văn Sỹ` (Vietnamese) / `Pham Van Sy` (English).
    - Headline: *"Xây dựng hệ thống AI thực chiến & kiến trúc Backend phân tán"* / *"Architecting Production AI Systems & Distributed Backends"*.
    - Bio: High-clarity summary highlighting applied AI systems (FastAPI, Ollama/Qwen, PhoBERT) paired with robust distributed microservices (RabbitMQ, ClickHouse, Spring Boot).
    - CTAs: Primary pill button *"Khám phá dự án"* (scrolls to `#projects`) + Secondary pill button *"Tải CV Kỹ sư AI"* (triggers `/api/download-cv`).
    - Social links: GitHub, LinkedIn, Email in clean monochrome vector icons.
  - **Right Column**:
    - Refined portrait in a rounded frame with subtle 1px border.
    - Minimalist Metric Bar below photo displaying 3 real-world verified metrics:
      - `6 Microservices` — Event-driven RabbitMQ architecture.
      - `< 15ms Latency` — Real-time ClickHouse OLAP queries.
      - `Two-Stage AI` — Ollama Qwen3 aspect & sentiment pipeline.

### 3.2 Strategic Skills Section (`app/components/Skills.tsx`)
Organized into 4 clean cards (2x2 grid):
1. **AI Engineering & LLM Systems**:
   - Python, FastAPI, Ollama (Qwen3:8B), Pydantic v2, PhoBERT v2, ONNX Runtime, Prompt Engineering, PyTorch.
   - Proof: Two-stage LLM inference pipeline with schema validation and automatic fallback repair.
2. **Distributed Backend & Event-Driven**:
   - Java, Spring Boot 3, RabbitMQ, Apache Kafka, Microservices, Strawberry GraphQL, RESTful APIs, Redis, Redisson.
   - Proof: Transactional Outbox Pattern with Publisher Confirms and Dead Letter Queue.
3. **Data & Analytics Infrastructure**:
   - ClickHouse OLAP, PostgreSQL (Async SQLAlchemy), MinIO S3 Object Storage, Neo4j, MySQL, Alembic.
   - Proof: Columnar storage optimized for sub-15ms social trend aggregation queries.
4. **DevOps, Observability & Tooling**:
   - Docker, Docker Compose, Prometheus, Grafana, Loki, OpenTelemetry, Playwright, APScheduler, Linux, Git.
   - Proof: Full-stack centralized observability with automated dynamic crawler pacing.

### 3.3 Projects Section (`app/components/Projects.tsx`)
- **Flagship Spotlight: HUTECH-AIDT Social Heartbeat**:
  - Full-width Apple-style Feature Card.
  - Category pill: `Featured System Architecture • HUTECH Research`.
  - Headline & Overview: Comprehensive explanation of the 6-microservice architecture, automated social scraping, two-stage LLM analysis with Ollama, RabbitMQ topic exchange, and ClickHouse OLAP fact storage.
  - 4 Key Technical Highlights:
    - 6 Microservices (Crawler, Processing, AI, Analytics, Backend, Dashboard).
    - Two-Stage LLM Inference (Aspect multi-label + Aspect-based sentiment analysis).
    - Event Reliability (Transactional Outbox + DLQ on RabbitMQ).
    - Sub-15ms OLAP Analytics (ClickHouse fact tables and Grafana dashboards).
  - Pill tags: `Python` `FastAPI` `Ollama / Qwen3` `RabbitMQ` `ClickHouse` `PostgreSQL` `Docker`.
  - Primary Action: `( Xem Sơ Đồ Kiến Trúc Hệ Thống )` button opening `ArchitectureModal`.
  - Secondary Tag: `Private Academic Research • HUTECH`.
- **Supporting Project 1: Blur Social Network**:
  - Full-stack microservices with automated Vietnamese comment moderation using PhoBERT v2 on ONNX Runtime, Gemini AI assistant, Socket.IO realtime chat, WebRTC calls, Keycloak, Neo4j, and Redis.
- **Supporting Project 2: Neuro Ecommerce Platform**:
  - High-concurrency Spring Boot backend with RESTful APIs, cart and inventory locking, VNPay payment gateway, MySQL optimization, and JWT security.

### 3.4 Architecture Modal (`app/components/ArchitectureModal.tsx`)
- Reusable accessible modal dialog (`aria-modal="true"`, `role="dialog"`).
- Keyboard ESC listener, backdrop click dismiss, body scroll lock.
- Displays high-resolution diagram `public/architecture/HUTECH-AIDT_Social-Heartbeat_Architecture.png`.
- Click-to-zoom toggle, open-in-new-tab, and direct download buttons.

### 3.5 About Me (`app/components/About.tsx`)
- Senior engineering persona.
- 4 Core Pillars:
  1. AI Systems & LLM Orchestration
  2. High-Reliability Architecture
  3. Data-Intensive & OLAP Infrastructure
  4. Engineering Rigor & Continuous Growth (Outstanding Student HUTECH 2024-2025)

### 3.6 Experience Timeline (`app/components/Experience.tsx`)
- Clean vertical line with clear chronological entries:
  1. **AI & Systems Engineer (Core Contributor)** — *HUTECH-AIDT Social Heartbeat* (2025 - Present)
  2. **Backend Developer Intern** — *Amethyst Medical Vietnam* (09/2025 - 11/2025)
  3. **IT Support** — *Lead and Aim Technology Solutions* (06/2025 - 09/2025)
  4. **Software Engineering Student** — *HUTECH* (2022 - Present)

### 3.7 Navigation & Footer
- Minimalist floating navigation with clean logo, dark/light theme switch, and language switch.
- Clean footer with copyright and essential links.

---

## 4. Internationalization & Quality Verification

- Bidirectional symmetry across `app/i18n/translations.ts` (`vi` and `en`).
- Strict TypeScript verification (`npx tsc --noEmit`).
- Clean ESLint run (`npm run lint`).
- Clean Next.js 16 production build (`npm run build`).
