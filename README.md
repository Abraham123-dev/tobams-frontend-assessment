# Tobams Group - Training and Development Landing Page done by Abraham

This repository contains my implementation of the Tobams Group Training and Development landing page based on the provided Figma design. The project is built with Next.js (App Router) and Tailwind CSS.

## Live Deployment and Links

- Live URL: https://tobams-frontend-assessment-five.vercel.app/
- Figma Reference: https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0

## Tech Stack

- Framework: Next.js 16 (App Router)
- Styling: Tailwind CSS v4
- Language: TypeScript
- Font Loading: next/font/google (Nunito Sans)
- Image Optimization: next/image

## Getting Started

### Prerequisites

- Node.js 18.18.0 or newer
- npm (or yarn / pnpm)

### Installation and Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/tobams-frontend-assessment.git
   cd tobams-frontend-assessment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   Open http://localhost:3000 in your browser to view the page.

4. Build and run in production mode:
   ```bash
   npm run build
   npm run start
   ```

## Component Structure

The page is broken down into small, focused components located in the `src/components/` folder:

```
src/
├── app/
│   ├── globals.css              Global styles, theme variables, and font bindings
│   ├── layout.tsx               Root layout with metadata and font setup
│   └── page.tsx                 Main page assembling all landing sections
├── components/
│   ├── CapacityDevelopment.tsx  Capacity development training block with bullet points
│   ├── CorporateTrainings.tsx   Corporate training program overview with bullet points
│   ├── CtaBanner.tsx            Mid-page consultation banner
│   ├── Footer.tsx               Multi-column footer with office locations and legal links
│   ├── Hero.tsx                 Hero banner with headline, description, and primary CTA
│   ├── Icons.tsx                Custom SVG icons (navigation, bullets, social links)
│   ├── LMSSection.tsx           LMS platform highlight with circular team image
│   ├── ManagementProgram.tsx    Senior management development section with category pills
│   ├── Navbar.tsx               Top navigation bar with dropdown indicators and mobile drawer
│   ├── PersonalisedTraining.tsx Personalised training section with reversed grid layout
│   ├── PreFooterBanner.tsx      Pre-footer contact callout section
│   ├── Testimonials.tsx         Testimonials card slider with left and right navigation
│   ├── TrainingConsultant.tsx   Training consultant features in a 2x2 grid
│   ├── TrainingProgramsSection.tsx Wrapper for the three training program sections
│   └── TransformationHub.tsx    Transformation hub section with 6 feature cards and photo
└── data/
    └── content.ts               Centralized content, links, and testimonial data
```

## Responsive Layout

The page is designed and tested to be fully responsive using Tailwind utility classes (`sm:`, `md:`, `lg:`, `xl:`):

- Mobile (375px - 425px): Single-column layout, compact typography, horizontal scrollable card slider for testimonials, and an accessible collapsible drawer for the navigation menu.
- Tablet (768px - 1024px): Two-column grids for content sections with balanced spacing.
- Desktop (1280px - 1440px+): Full multi-column layout matching the 1440px Figma artboard with exact margins and padding.

No custom CSS media queries were used outside standard Tailwind responsive modifiers.

## Semantic HTML and Accessibility

- Uses semantic landmark elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, and heading tags (`<h1>` to `<h3>`) arranged in logical order.
- A skip to main content link is included at the top of the page for keyboard and screen reader navigation.
- Interactive elements (buttons, links, navigation controls) have accessible labels (`aria-label`) and visible focus states (`focus-visible`).
- All images are rendered using `next/image` with meaningful `alt` attributes and proper responsive sizes.

## Design Decisions and Assumptions

1. Brand Colors and Theme Tokens:
   Extracted exact color values from the Figma file into CSS variables:
   - Primary Deep Plum: `#571244` and `#2C0922`
   - Dark Footer Background: `#11040E`
   - Accent Crimson/Red: `#EF4353`
   - Background Tint: `#F9F9F9`
   - Text Colors: `#151515` (primary dark) and `#696969` (muted body text)

2. Typography:
   Used Nunito Sans from Google Fonts via Next.js font optimization, matching the font family and weights defined in the design specs.

3. Testimonials Carousel:
   Implemented smooth horizontal scrolling for testimonial cards with `<` and `>` arrow controls, allowing users on desktop to scroll and touch users on mobile to swipe naturally.

4. Form Actions:
   Navigation links and CTA buttons link to their corresponding anchor sections (`#about`, `#what-we-do`, `#contact`, etc.) as this is a static landing page implementation.

## AI Tool Disclosure

In accordance with the assessment guidelines, AI coding assistance was used during development for scaffolding boilerplate code, extracting style tokens from Figma layout snippets, and verifying responsive Tailwind classes. All components, styling, responsiveness, and architecture were reviewed and tested.
