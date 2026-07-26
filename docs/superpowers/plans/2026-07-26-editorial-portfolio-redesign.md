# Editorial Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the portfolio to match the Modern Light Editorial aesthetic (off-white `#F7F8F4` canvas, serif typography, soft mint `#B4E4DD` pill buttons, rounded cards) while preserving i18n, EmailJS contact integration, and Dark Mode capabilities.

**Architecture:** Update global design tokens and typography in Next.js layout and CSS variables, then systematically refactor each component UI (`Navigation`, `Hero`, `Skills`, `Projects`, `Experience`, `Certifications`, `Contact`, `Footer`) to use the new editorial layout and pill badges.

**Tech Stack:** Next.js 16 (App Router), React 19, Tailwind CSS v4, Google Fonts (`Playfair_Display` / `Plus_Jakarta_Sans`), `react-icons`.

## Global Constraints

- **Main Theme Default**: Light Editorial with `#F7F8F4` background and `#B4E4DD` mint accents.
- **Dark Theme Option**: Slate Charcoal `#121615` background and `#1A201E` card background.
- **Typography**: Display headings use serif font `var(--font-serif)`; body text uses sans-serif `var(--font-sans)`.
- **Button Shapes**: All primary/secondary CTA and tags must use pill shape (`rounded-full`).

---

## File Structure & Dependencies

- `app/globals.css`: Defines core design tokens, color variables, serif/sans classes, card styles, and pill badges.
- `app/layout.tsx`: Loads Google Fonts (`Playfair_Display` and `Plus_Jakarta_Sans`) and applies CSS font variables.
- `app/components/Navigation.tsx`: Renders brand logo `Neuro.Dev`, menu links, language/theme toggles, and "Contact Now" pill CTA.
- `app/components/Hero.tsx`: Renders circular avatar with pastel mint circle backdrop, editorial serif headline, intro, and action buttons (`View Projects ∨`, `Download CV ⤓`).
- `app/components/Skills.tsx`: Renders `Expertise` grid with clean tech icons (Java, SQL, Spring Boot, Microservices, AWS, Docker).
- `app/components/Projects.tsx`: Renders `Featured Projects` cards with cyan/mint icon boxes, editorial text, and pastel pill tags.
- `app/components/Experience.tsx`: Renders work experience timeline in clean editorial style.
- `app/components/Certifications.tsx`: Renders certification cards in editorial card grid.
- `app/components/Contact.tsx`: Renders EmailJS form with rounded inputs and mint submit CTA.
- `app/components/Footer.tsx`: Renders minimal footer with logo, copyright, and back-to-top button.

---

### Task 1: Design Tokens, CSS Variables & Typography Setup

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

**Interfaces:**
- Consumes: Tailwind v4 and Google Fonts.
- Produces: CSS variables `--bg-primary`, `--bg-card`, `--accent-mint`, `--font-serif`, `--font-sans`.

- [ ] **Step 1: Update `app/globals.css` with Editorial tokens**

```css
@import "tailwindcss";

:root {
  --bg-primary: #F7F8F4;
  --bg-card: #FFFFFF;
  --bg-card-hover: #FAFCFA;
  --border-subtle: #E4E8E2;
  
  --accent-mint: #B4E4DD;
  --accent-mint-hover: #97D7CC;
  --accent-mint-light: #E8F7F5;
  --accent-mint-text: #0E423A;
  
  --text-primary: #191C1B;
  --text-secondary: #5C6460;
  --text-muted: #8A938E;
  
  --font-serif: var(--font-playfair), 'Playfair Display', Georgia, serif;
  --font-sans: var(--font-jakarta), 'Plus Jakarta Sans', sans-serif;
}

[data-theme="dark"] {
  --bg-primary: #121615;
  --bg-card: #1A201E;
  --bg-card-hover: #222927;
  --border-subtle: #2C3532;
  
  --accent-mint: #2D524C;
  --accent-mint-hover: #37635C;
  --accent-mint-light: #1B332F;
  --accent-mint-text: #96ECE0;
  
  --text-primary: #E2E8E5;
  --text-secondary: #A1AAA5;
  --text-muted: #6C7570;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-sans);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.font-serif-editorial {
  font-family: var(--font-serif);
}

.btn-pill-primary {
  background-color: var(--accent-mint);
  color: var(--accent-mint-text);
  border-radius: 9999px;
  padding: 0.625rem 1.5rem;
  font-weight: 600;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-pill-primary:hover {
  background-color: var(--accent-mint-hover);
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
  border-color: var(--text-secondary);
  transform: translateY(-1px);
}

.editorial-card {
  background-color: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 1.25rem;
  box-shadow: 0 4px 20px -2px rgba(25, 28, 27, 0.04);
  transition: all 0.2s ease;
}

.editorial-card:hover {
  box-shadow: 0 8px 30px -4px rgba(25, 28, 27, 0.08);
}
```

- [ ] **Step 2: Load Google Fonts in `app/layout.tsx`**

Configure `Playfair_Display` and `Plus_Jakarta_Sans` in Next.js layout and pass variable classNames to `<html>`/`<body>`.

- [ ] **Step 3: Test build**

Run: `npm run build`  
Expected: PASS with 0 errors.

- [ ] **Step 4: Commit**

```bash
git add app/globals.css app/layout.tsx
git commit -m "style: configure editorial design tokens and google fonts"
```

---

### Task 2: Navigation Bar Redesign

**Files:**
- Modify: `app/components/Navigation.tsx`

**Interfaces:**
- Consumes: Theme provider, i18n hook.
- Produces: Header navigation component with mint CTA.

- [ ] **Step 1: Update `Navigation.tsx`**

Refactor Navigation to render:
- Left: Brand `Neuro.Dev` with circular avatar icon.
- Center: Links (`About`, `Skills`, `Projects`, `Experience`, `Contact`).
- Right: i18n toggle (EN/VI), Dark Mode toggle, and `Contact Now` pill button.

- [ ] **Step 2: Verify component build**

Run: `npm run build`  
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add app/components/Navigation.tsx
git commit -m "feat: redesign navigation with editorial layout and mint CTA"
```

---

### Task 3: Hero Section Redesign

**Files:**
- Modify: `app/components/Hero.tsx`

**Interfaces:**
- Consumes: `/profile.webp`, i18n hook.
- Produces: Hero section matching reference design.

- [ ] **Step 1: Refactor `Hero.tsx`**

Implement:
- Left Column: Circular avatar photo inside soft mint circle backdrop.
- Right Column:
  - Role sub-heading.
  - Editorial Serif H1 ("Building robust backend solutions").
  - Detailed bio text.
  - Buttons: `View Projects ∨` (primary mint pill) & `Download CV ⤓` (secondary white outline pill).

- [ ] **Step 2: Verify component build**

Run: `npm run build`  
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add app/components/Hero.tsx
git commit -m "feat: redesign hero section to match reference image"
```

---

### Task 4: Expertise Section Redesign

**Files:**
- Modify: `app/components/Skills.tsx`

**Interfaces:**
- Consumes: `react-icons`.
- Produces: Grid of tech skill tiles.

- [ ] **Step 1: Refactor `Skills.tsx`**

Implement:
- Section title: `Expertise` in `font-serif-editorial`.
- Grid of skill tiles (Java, SQL, Spring Boot, Microservices, AWS, Docker).
- Each tile features high-res SVG icon and clean label on soft rounded tile (`editorial-card`).

- [ ] **Step 2: Verify component build**

Run: `npm run build`  
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add app/components/Skills.tsx
git commit -m "feat: redesign expertise section with tech skill tiles"
```

---

### Task 5: Featured Projects Section Redesign

**Files:**
- Modify: `app/components/Projects.tsx`

**Interfaces:**
- Consumes: i18n translations, project data.
- Produces: Grid of project cards matching reference.

- [ ] **Step 1: Refactor `Projects.tsx`**

Implement:
- Section title: `Featured Projects` in `font-serif-editorial`.
- Grid of project cards (`Neuro Ecommerce Backend`, `Blur Social Network`, etc.).
- Square category icon box (`bg-[#E8F7F5]`), bold title, concise description, and pill technology tags (`Java`, `Spring Boot`, `SQL`, `AWS`, `Docker`).

- [ ] **Step 2: Verify component build**

Run: `npm run build`  
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add app/components/Projects.tsx
git commit -m "feat: redesign featured projects cards with category badges and pill tags"
```

---

### Task 6: Experience & Certifications Redesign

**Files:**
- Modify: `app/components/Experience.tsx`
- Modify: `app/components/Certifications.tsx`

**Interfaces:**
- Consumes: Work history & certification records.
- Produces: Editorial timeline and credentials grid.

- [ ] **Step 1: Refactor `Experience.tsx`**

Implement vertical timeline with clean mint nodes and white card items.

- [ ] **Step 2: Refactor `Certifications.tsx`**

Implement editorial grid of certification tiles.

- [ ] **Step 3: Verify build**

Run: `npm run build`  
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add app/components/Experience.tsx app/components/Certifications.tsx
git commit -m "feat: redesign experience timeline and certifications grid"
```

---

### Task 7: Contact & Footer Section Redesign

**Files:**
- Modify: `app/components/Contact.tsx`
- Modify: `app/components/Footer.tsx`

**Interfaces:**
- Consumes: `@emailjs/browser`.
- Produces: Contact form and minimal editorial footer.

- [ ] **Step 1: Refactor `Contact.tsx`**

Update contact form inputs with rounded borders, mint submit button, and clear contact detail info.

- [ ] **Step 2: Refactor `Footer.tsx`**

Update footer with brand mark, copyright info, and mint back-to-top button.

- [ ] **Step 3: Verify build**

Run: `npm run build`  
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add app/components/Contact.tsx app/components/Footer.tsx
git commit -m "feat: redesign contact section and footer"
```

---

### Task 8: Global Verification & Build Test

**Files:**
- Verification only across all components.

- [ ] **Step 1: Run full production build**

Run: `npm run build`  
Expected: Success with clean production bundle and zero TypeScript/CSS errors.

- [ ] **Step 2: Commit final refactor state**

```bash
git add .
git commit -m "chore: complete editorial portfolio redesign verification"
```
