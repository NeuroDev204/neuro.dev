# Minimalist Tech AI Engineer Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the portfolio to establish an elite Hybrid AI Engineer & Backend Architect persona with a Minimalist Tech (Apple / Clean Modern) aesthetic, featuring generous whitespace, clean typography, and spotlighting the flagship project `HUTECH-AIDT Social Heartbeat`.

**Architecture:** Next.js 16 (App Router) + React 19 + Tailwind CSS v4. Modular component-driven architecture using clean card surfaces, Apple-style pill buttons, centralized i18n translation dictionary, and an accessible architecture inspection modal.

**Tech Stack:** Next.js 16.0.8, React 19.2.1, Tailwind CSS v4, Lucide/React Icons, TypeScript 5.

## Global Constraints

- Never break existing TypeScript interfaces or Next.js build pipeline.
- Maintain full parity between Vietnamese (`vi`) and English (`en`) translations in `app/i18n/translations.ts`.
- Ensure all clickable elements have `cursor-pointer` and accessible labels.
- Do NOT use emojis as structural icons; use vector icons (React Icons / SVG).
- Maintain WCAG AA contrast ratio (≥ 4.5:1 for normal text) in both Light and Dark modes.
- Avoid flashy glowing auras, neon gradients, or complex animations; prioritize clean, restrained, high-contrast elegance.

---

### Task 1: Minimalist Design Tokens & Global Styles Refactoring

**Files:**
- Modify: `app/globals.css`

**Interfaces:**
- Produces: CSS variables `--bg-primary`, `--bg-card`, `--bg-card-hover`, `--border-subtle`, `--text-primary`, `--text-secondary`, `--text-muted`, `--btn-primary-bg`, `--btn-primary-text`, and utility classes `.clean-card`, `.btn-pill-primary`, `.btn-pill-secondary`, `.pill-tag`.

- [ ] **Step 1: Update `app/globals.css` with Minimalist Tech tokens**

```css
@import "tailwindcss";

:root {
  --bg-primary: #FAFAFA;
  --bg-card: #FFFFFF;
  --bg-card-hover: #F4F4F5;
  --border-subtle: #E4E4E7;
  
  --text-primary: #09090B;
  --text-secondary: #52525B;
  --text-muted: #71717A;
  
  --btn-primary-bg: #09090B;
  --btn-primary-text: #FFFFFF;
  --btn-primary-hover: #27272A;
  
  --font-sans: var(--font-jakarta), 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}

[data-theme="dark"] {
  --bg-primary: #09090B;
  --bg-card: #141416;
  --bg-card-hover: #1C1C1F;
  --border-subtle: #27272A;
  
  --text-primary: #FAFAFA;
  --text-secondary: #A1A1AA;
  --text-muted: #71717A;
  
  --btn-primary-bg: #FAFAFA;
  --btn-primary-text: #09090B;
  --btn-primary-hover: #E4E4E7;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-sans);
  transition: background-color 0.2s ease, color 0.2s ease;
}

.clean-card {
  background-color: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 1rem;
  transition: all 0.2s ease;
}

.clean-card:hover {
  border-color: var(--text-muted);
  transform: translateY(-2px);
  box-shadow: 0 8px 30px -4px rgba(0, 0, 0, 0.05);
}

.btn-pill-primary {
  background-color: var(--btn-primary-bg);
  color: var(--btn-primary-text);
  border-radius: 9999px;
  padding: 0.625rem 1.5rem;
  font-weight: 600;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-pill-primary:hover {
  background-color: var(--btn-primary-hover);
  transform: translateY(-1px);
}

.btn-pill-secondary {
  background-color: var(--bg-card);
  color: var(--text-primary);
  border: 1px solid var(--border-subtle);
  border-radius: 9999px;
  padding: 0.625rem 1.5rem;
  font-weight: 500;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-pill-secondary:hover {
  border-color: var(--text-primary);
  transform: translateY(-1px);
}

.pill-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: #F4F4F5;
  color: #27272A;
  border: 1px solid var(--border-subtle);
}

[data-theme="dark"] .pill-tag {
  background-color: #1C1C1F;
  color: #E4E4E7;
  border-color: #27272A;
}
```

- [ ] **Step 2: Run build to verify stylesheet syntax**

Run: `npm run build`
Expected: Build passes with no CSS parsing errors.

- [ ] **Step 3: Commit styles**

```bash
git add app/globals.css
git commit -m "style: update globals.css with Minimalist Tech tokens and pill utilities"
```

---

### Task 2: Synchronize i18n Content for AI Engineer Profile

**Files:**
- Modify: `app/i18n/translations.ts`

**Interfaces:**
- Produces: Symmetrical `translations.vi` and `translations.en` with AI Engineer positioning, 4 skills clusters, and detailed HUTECH-AIDT project entries.

- [ ] **Step 1: Update `app/i18n/translations.ts`**

Update both `vi` and `en` dictionaries:
- `hero`:
  - `role`: "AI & Distributed Systems Engineer"
  - `headline`: "Xây dựng hệ thống AI thực chiến & kiến trúc Backend phân tán" / "Architecting Production AI Systems & Distributed Backends"
  - `description`: "Kỹ sư phần mềm tập trung vào hệ thống AI ứng dụng (Python, FastAPI, Ollama/Qwen, PhoBERT) kết hợp kiến trúc Microservices hướng sự kiện (RabbitMQ, ClickHouse, Spring Boot) đạt độ tin cậy và khả năng mở rộng cao."
  - `metrics`:
    - `microservices`: "6 Microservices"
    - `microservicesSub`: "Kiến trúc sự kiện RabbitMQ" / "Event-driven RabbitMQ"
    - `latency`: "< 15ms Latency"
    - `latencySub`: "Phân tích OLAP ClickHouse" / "Real-time ClickHouse OLAP"
    - `twoStage`: "Two-Stage AI"
    - `twoStageSub`: "Pipeline suy luận Ollama" / "Ollama inference pipeline"
- `skills`: 4 clean clusters (`ai`, `backend`, `data`, `devops`).
- `projects.items.aidt`: Full content for `HUTECH-AIDT Social Heartbeat`.
- `experience.items.aidt`: Detailed entry for AI & Systems Engineer at HUTECH-AIDT.

- [ ] **Step 2: Run TypeScript check**

Run: `npx tsc --noEmit`
Expected: 0 type errors.

- [ ] **Step 3: Commit i18n translations**

```bash
git add app/i18n/translations.ts
git commit -m "feat(i18n): update translations for Minimalist AI Engineer profile"
```

---

### Task 3: Architecture Asset & Reusable Architecture Modal

**Files:**
- Create: `public/architecture/HUTECH-AIDT_Social-Heartbeat_Architecture.png`
- Create: `app/components/ArchitectureModal.tsx`

**Interfaces:**
- Produces: `ArchitectureModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void })`

- [ ] **Step 1: Copy architecture diagram asset**

```bash
mkdir -p public/architecture
cp /home/neuro/Pictures/HUTECH-AIDT_Social-Heartbeat_Architecture.png public/architecture/HUTECH-AIDT_Social-Heartbeat_Architecture.png
```

- [ ] **Step 2: Implement `app/components/ArchitectureModal.tsx`**

Implement accessible modal with Escape key handling, backdrop click, memoized `handleClose` callback (preventing React 19 `set-state-in-effect` errors), responsive image container with zoom toggle, open in new tab, and download buttons.

- [ ] **Step 3: Verify modal compiles**

Run: `npx tsc --noEmit && npx eslint app/components/ArchitectureModal.tsx`
Expected: 0 errors.

- [ ] **Step 4: Commit architecture modal**

```bash
git add public/architecture/ app/components/ArchitectureModal.tsx
git commit -m "feat: add architecture modal and HUTECH-AIDT diagram asset"
```

---

### Task 4: Two-Column Clean Split Hero Section

**Files:**
- Modify: `app/components/Hero.tsx`

**Interfaces:**
- Produces: Hero component with clean 2-column split (Left: role pill, headline, bio, Apple-style pill CTAs, social links. Right: clean portrait with 1px border + 3-item Metric Bar).

- [ ] **Step 1: Implement two-column layout in `app/components/Hero.tsx`**

Replace old layout with clean 2-column grid. Left column features headline, role pill, bio, CTAs (`.btn-pill-primary`, `.btn-pill-secondary`), and social icons. Right column features rounded portrait and 3-metric clean card.

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: Build passes.

- [ ] **Step 3: Commit Hero update**

```bash
git add app/components/Hero.tsx
git commit -m "feat: implement Two-Column Clean Split Hero with metrics bar"
```

---

### Task 5: Skills Section 4 Clean Cards

**Files:**
- Modify: `app/components/Skills.tsx`

**Interfaces:**
- Produces: 4 clean cards (2x2 grid) for AI Engineering, Distributed Backend, Data & Analytics, and DevOps, with authentic vector logos, pill tags, and proof callouts.

- [ ] **Step 1: Update `app/components/Skills.tsx`**

Implement the 4 clean cards using `.clean-card` and `.pill-tag` styling.

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: Build passes.

- [ ] **Step 3: Commit Skills update**

```bash
git add app/components/Skills.tsx
git commit -m "feat: redesign Skills section into 4 clean cards"
```

---

### Task 6: Projects Section with Apple-Style Feature Cards

**Files:**
- Modify: `app/components/Projects.tsx`

**Interfaces:**
- Produces: Full-width Feature Card for `HUTECH-AIDT Social Heartbeat` with problem summary, technical highlights, pill tags, and modal button, followed by 2 symmetrical cards for `Blur Social Network` and `Neuro Ecommerce`.

- [ ] **Step 1: Update `app/components/Projects.tsx`**

Implement the Feature Card layout and wire the `ArchitectureModal` trigger.

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: Build passes.

- [ ] **Step 3: Commit Projects update**

```bash
git add app/components/Projects.tsx
git commit -m "feat: implement Apple-Style Feature Cards for Projects with AIDT flagship"
```

---

### Task 7: About, Experience, Navigation & Footer Alignment

**Files:**
- Modify: `app/components/About.tsx`
- Modify: `app/components/Experience.tsx`
- Modify: `app/components/Navigation.tsx`
- Modify: `app/components/Footer.tsx`

**Interfaces:**
- Produces: Harmonious Minimalist Tech styling across all remaining components.

- [ ] **Step 1: Update `app/components/About.tsx` with 4 core engineering pillars**
- [ ] **Step 2: Update `app/components/Experience.tsx` with AIDT Core Contributor entry**
- [ ] **Step 3: Update `app/components/Navigation.tsx` and `app/components/Footer.tsx` with clean minimalist styling**
- [ ] **Step 4: Verify complete project build**

Run: `npm run build`
Expected: 0 errors.

- [ ] **Step 5: Commit remaining component updates**

```bash
git add app/components/About.tsx app/components/Experience.tsx app/components/Navigation.tsx app/components/Footer.tsx
git commit -m "feat: align About, Experience, Navigation, and Footer with Minimalist Tech style"
```

---

### Task 8: Full Quality Verification & Lint Review

**Files:**
- Repository-wide check

- [ ] **Step 1: Run ESLint**

Run: `npm run lint`
Expected: 0 errors.

- [ ] **Step 2: Run Next.js production build**

Run: `npm run build`
Expected: Build succeeds with static pages generated.

- [ ] **Step 3: Check git status to ensure workspace is clean**

Run: `git status`
Expected: Clean working tree.
