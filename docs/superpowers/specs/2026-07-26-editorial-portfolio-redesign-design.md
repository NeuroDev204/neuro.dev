# Design Spec: Editorial Modern Portfolio Redesign

**Date**: 2026-07-26  
**Project**: Neuro.Dev Portfolio  
**Target Path**: `/home/neuro/Documents/portfolio`  
**Reference Image**: Modern Light Editorial Backend Developer Portfolio Design

---

## 1. Executive Summary & Design Vision

Redesign the entire `Neuro.Dev` portfolio to match the aesthetic of the provided reference design while preserving the existing Next.js 16 app structure, internationalization (i18n), and EmailJS contact functionality.

### Key Visual Pillars
- **Theme**: Modern Light Editorial with warm off-white canvas (`#F7F8F4`), clean white content cards (`#FFFFFF`), and soft mint/teal (`#B4E4DD` / `#A7E3D9`) pill buttons and accent framing.
- **Typography**: Dual font system combining a high-contrast serif display font (`Newsreader` / `Playfair Display`) for editorial headings and a clean sans-serif font (`Plus Jakarta Sans` / `Inter`) for body text.
- **Components**: Rounded pill buttons (`rounded-full`), soft pastel skill icon tiles (`rounded-2xl`), and white rounded project cards with category icon badges.
- **Theme Compatibility**: High-contrast light mode default, with dark mode adapted into a sleek charcoal/slate editorial palette (`#121615` background, `#1A201E` cards).

---

## 2. Architecture & Technology Stack

- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript.
- **Styling**: Tailwind CSS v4 & custom CSS design tokens in `app/globals.css`.
- **Fonts**: `@next/font` (Google Fonts: `Playfair_Display` / `Newsreader` + `Plus_Jakarta_Sans`).
- **Icons**: `react-icons` (Simple Icons / Lucide / Tabler icons for Java, SQL, Spring Boot, Microservices, AWS, Docker, Git, etc.).
- **Features**:
  - i18n language provider (`English` / `Vietnamese`).
  - Dark / Light Mode theme state with CSS custom properties.
  - CV Download API route (`/api/download-cv`).
  - Contact Form powered by `@emailjs/browser`.

---

## 3. Design Tokens & CSS System

### CSS Variables (`app/globals.css`)
```css
:root {
  /* Light Theme (Default Editorial) */
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
  
  --font-serif: var(--font-playfair), 'Newsreader', Georgia, serif;
  --font-sans: var(--font-jakarta), 'Inter', sans-serif;
  
  --shadow-card: 0 4px 20px -2px rgba(25, 28, 27, 0.04);
  --shadow-card-hover: 0 8px 30px -4px rgba(25, 28, 27, 0.08);
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
  
  --shadow-card: 0 4px 20px -2px rgba(0, 0, 0, 0.25);
  --shadow-card-hover: 0 8px 30px -4px rgba(0, 0, 0, 0.4);
}
```

---

## 4. Component Layouts & Specifications

### 4.1 Navigation (`app/components/Navigation.tsx`)
- **Brand**: `Neuro.Dev` logo with circular icon mark.
- **Menu Links**: `About`, `Skills`, `Projects`, `Experience`, `Contact`.
- **Controls**: Language Switcher (EN/VI) toggle, Theme Toggle.
- **CTA**: "Contact Now" mint pill button (`rounded-full bg-[var(--accent-mint)] px-6 py-2 font-medium`).
- **Header**: Fixed header with `backdrop-blur-md bg-[var(--bg-primary)]/80`.

### 4.2 Hero Section (`app/components/Hero.tsx`)
- **Container**: Max width container centered vertically on soft background.
- **Left Column**: Circular developer avatar photo (`/profile.webp`) with a pastel mint circular background accent element behind it.
- **Right Column**:
  - Role Label: "Experienced Java Backend Developer"
  - Headline (`<h1>`): Editorial Serif font ("Building robust backend solutions").
  - Intro Paragraph: Concise text detailing Spring Boot, RESTful APIs, and data architecture expertise.
  - Buttons:
    - Primary CTA: `View Projects ∨` (Mint pill button scrolling to `#projects`).
    - Secondary CTA: `Download CV ⤓` (White pill button with outline border).

### 4.3 Expertise / Skills (`app/components/Skills.tsx`)
- **Headline**: `Expertise` (Serif display font).
- **Skill Items**:
  - Java, SQL, Spring Boot, Microservices, AWS, Docker (+ Git, Redis, REST APIs).
  - Each item is housed in a clean tile (`rounded-2xl bg-[var(--bg-card)] p-4 shadow-sm border border-[var(--border-subtle)]`).
  - High quality SVG icons with clear label underneath.

### 4.4 Featured Projects (`app/components/Projects.tsx`)
- **Headline**: `Featured Projects` (Serif display font).
- **Grid Layout**: Responsive grid of white card containers.
- **Card Elements**:
  - Category Badge: Square box with light mint background (`bg-[var(--accent-mint-light)]`) and icon (e.g. Shopping Cart for Ecommerce, Chat bubble for Social Network).
  - Title: Bold project name (e.g., `Neuro Ecommerce Backend`, `Blur Social Network`).
  - Description: Clear editorial description of backend solutions and features.
  - Technology Pills: Soft pastel pill tags (`Java`, `Spring Boot`, `SQL`, `AWS`, `Docker`).
  - Action Links: GitHub repository link and Architecture/Demo link.

### 4.5 Work Experience (`app/components/Experience.tsx`)
- **Headline**: `Work Experience` (Serif display font).
- **Timeline**: Vertical line with mint nodes connecting job role cards.
- **Cards**: Company, job title, date range pill badge, and bullet points highlighting backend engineering achievements.

### 4.6 Certifications (`app/components/Certifications.tsx`)
- **Headline**: `Certifications & Achievements` (Serif display font).
- **Cards**: White card tiles displaying credential title, issuer, issue date, and credential verification link.

### 4.7 Contact & Footer (`app/components/Contact.tsx` & `Footer.tsx`)
- **Contact Form**: EmailJS integrated contact form with styled input fields and mint submit button.
- **Direct Info**: Email, Phone, GitHub, LinkedIn, Location.
- **Footer**: `Neuro.Dev` editorial logo mark, copyright text, social links, and Back to Top mint button.

---

## 5. Verification & Quality Assurance Criteria

1. **Visual Accuracy**: Match the reference image layout, font style, button shape, and color scheme.
2. **Build Integrity**: Ensure `npm run build` succeeds without TypeScript or Next.js build errors.
3. **Responsiveness**: Validate layouts across desktop, tablet, and mobile screen sizes.
4. **Localization & Theme**: Verify i18n strings (EN/VI) and Light/Dark mode transitions work seamlessly.
