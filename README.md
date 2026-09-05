# Tobams Group - Training & Development Landing Page

A pixel-perfect, production-ready static landing page implementation for **Tobams Group (Training and Development)** built with **Next.js (App Router)** and **Tailwind CSS**.

---

## 🔗 Live Deployment & Resources

- **Live URL**: [https://tobams-frontend-assessment.vercel.app](https://tobams-frontend-assessment.vercel.app) *(or your deployed Vercel/Netlify URL)*
- **GitHub Repository**: [https://github.com/your-username/tobams-frontend-assessment](https://github.com/your-username/tobams-frontend-assessment)
- **Figma Design Reference**: [Figma Design File](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0)

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: TypeScript
- **Fonts**: `next/font/google` (`Nunito Sans` - `400`, `500`, `600`, `700`, `800`)
- **Optimization**: `next/image` with responsive `sizes` and prioritized LCP assets

---

## 🚀 Getting Started

### Prerequisites
- Node.js `18.18.0` or later
- npm or yarn or pnpm

### Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/tobams-frontend-assessment.git
   cd tobams-frontend-assessment
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   npm run start
   ```

---

## 📁 Component Architecture

The project adheres to modular architecture with isolated, reusable components under `src/components`:

```
src/
├── app/
│   ├── layout.tsx             # Root layout with fonts, metadata, OpenGraph
│   ├── page.tsx               # Main landing page assembling sections
│   └── globals.css            # Tailwind theme tokens & global styles
├── components/
│   ├── Navbar.tsx             # Responsive header with mobile drawer & CTA
│   ├── Hero.tsx               # Hero banner with overlay & CTA button
│   ├── LMSSection.tsx         # Circular team photo + lavender feature card
│   ├── CorporateTrainings.tsx # Text + check bullet list + image
│   ├── PersonalisedTraining.tsx# Image + text + bullet list (reversed grid)
│   ├── CapacityDevelopment.tsx# Text + bullet list + image
│   ├── ManagementProgram.tsx  # Deep plum card + 4 sub-program buttons
│   ├── TransformationHub.tsx  # Soft rose card with 6 feature pills & image
│   ├── TrainingConsultant.tsx # Lavender section with 4 deep plum cards
│   ├── CtaBanner.tsx          # Standalone consultation callout card
│   ├── Testimonials.tsx       # Carousel/card grid with navigation controls
│   ├── PreFooterBanner.tsx    # "Let's work together to create a difference"
│   ├── Footer.tsx             # Full footer with links, offices, contact info
│   └── Icons.tsx              # Clean, accessible SVG icons
└── data/
    └── content.ts             # Typed data for features, testimonials, footer links
```

---

## 🎨 Design Decisions & Technical Tokens

- **Color System**:
  - `Brand Primary / Selection Purple`: `#2C0922` (`--shades-purple-selection-purple-80`)
  - `Footer Deep Purple`: `#11040E` (`--shades-purple-selection-purple-100`)
  - `Brand Accent Pink/Crimson`: `#E02B47`
  - `LMS / Section Lavender Tint`: `rgba(87, 18, 68, 0.08)` / `#5712441A`
  - `Transformation Hub Rose Tint`: `#FFF4F5`
- **Responsive Layout**:
  - Full support for **Mobile (425px)**, **Tablet (768px)**, and **Desktop (1280px - 1440px+)**.
  - Built using standard Tailwind responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`) without custom media query hacks.
- **Accessibility & Performance**:
  - Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<h1>`-`<h4>`).
  - Meaningful `alt` text for all images.
  - Skip to main content link for screen readers.
  - Keyboard navigation support with visible focus rings (`focus-visible`).

---

## 🤖 Disclosure

In accordance with the assessment guidelines, AI development tools were used to assist in accelerating layout structuring, color token verification from Figma exports, and boilerplate setup. All code has been curated, refactored, and tested for clean, human-readable production quality.
