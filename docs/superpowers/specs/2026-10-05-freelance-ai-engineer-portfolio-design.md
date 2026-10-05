# Freelance AI Engineer Portfolio — Design

- **Date**: 2026-10-05
- **Status**: Approved in chat (user replied "dựng luôn", skipping wireframes)
- **Supersedes**: `2026-09-17-minimalist-ai-engineer-portfolio-design.md`

## Decisions (from brainstorming)

| Topic | Decision |
|---|---|
| Primary goal | Win freelance clients; hiring is secondary |
| Audience | International founders / small startups / agencies |
| Language | English default, Vietnamese secondary (keep i18n) |
| Conversion | Contact form only (Formspree), no public pricing; form asks project type, budget range, timeline |
| Services | 1) AI features for products 2) Backend & APIs that scale 3) AI-powered MVPs — all backed by Blur |
| Projects | Blur (flagship case study + `public/Blur_Demo.mp4`), Neuro Ecommerce (backend), Coral (Lab, credited as FxSound fork) |
| Removed | HUTECH-AIDT, java-app, Certifications, Skills/Experience sections, particles, cursor glow, architecture modal, light theme |
| Structure | Nav → Hero → Stack marquee → Services → Work → Process → About → Contact → Footer |

## Visual direction

User asked to drop the old style for something modern, professional, with richer effects.

- Dark-first (zinc-950 base, never pure black/white), one accent: lime `#bef264`.
- Geist Sans + Geist Mono.
- Hairline `white/8` borders, surfaces step lighter per layer, glass only on the sticky nav.
- Effects (all disabled under `prefers-reduced-motion`): hero grid + accent aura, pointer spotlight on cards,
  scroll reveal, animated AI pipeline diagram in hero, stack marquee, animated EQ bars (Coral),
  Blur video autoplays only while in view with a pause control.

## Facts used in copy (verified in source repos)

- Blur: PhoBERT fine-tuned for Vietnamese toxic comments, ONNX export 24.0 ms mean vs 35.6 ms PyTorch (1.48×),
  Kafka → FastAPI → Kafka async moderation, Spring Boot microservices (Outbox, Saga, CQRS feed, Redisson lock,
  circuit breakers), Keycloak, Neo4j, WebRTC calls, Gemini assistant, 5 services (gateway, user, content,
  communication, model). blur.io.vn is offline: no "live" claims or links on the page.
- Neuro Ecommerce: Spring Boot + MySQL REST APIs, JWT, flash-sale concurrency control, VNPay sandbox.
- Coral: Linux port of FxSound (AGPL-3), C++/JUCE, PulseAudio passthrough backend, `.deb` packaging.
