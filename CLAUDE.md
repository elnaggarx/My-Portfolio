# CLAUDE.md — ElNaggar Portfolio

## Project Overview

Personal portfolio for Mohamed Amr, a Front-End Web & Mobile Developer. Built with Next.js 16 App Router, React 19, GSAP (ScrollSmoother), and Tailwind CSS v4. The site is animation-heavy and design-forward.

## Commands

```bash
npm run dev     # Start dev server (localhost:3000)
npm run build   # Production build
npm run lint    # ESLint
```

## Tech Stack

| Tool | Version | Notes |
|---|---|---|
| Next.js | 16.1.1 | App Router, no Pages Router |
| React | 19.2.3 | |
| GSAP | 3.14.2 | ScrollSmoother + ScrollTrigger on every page |
| Tailwind CSS | v4 | PostCSS-based, no tailwind.config.js |
| Icons | @deemlol/next-icons | Used in Hero (`ArrowRight`, `Codepen`) |

## Directory Structure

```
src/app/
├── layout.js                  # Root layout: Navbar + PortableMenu wrapping all pages
├── page.js                    # Home page (client component — uses ScrollSmoother)
├── globals.css                # Font-face declarations + marquee keyframes
├── data/
│   └── projects.js            # Single source of truth for all project data
├── assets/
│   ├── fonts/                 # BomstadDisplay (9 weights) + PP Neue Montreal (6 weights)
│   └── images/                # Project screenshots + personal photos
├── components/
│   ├── nav/navbar.js          # Top navbar (static, links NOT yet wired as <Link>)
│   ├── portablemenu/          # Floating hamburger menu (appears after 100px scroll)
│   ├── hero/
│   │   ├── hero.js            # Full-screen hero section
│   │   └── valueslider.js     # Image/value scroll slider below hero
│   ├── summarycard/
│   │   ├── summarycard.js     # Dark pitch card
│   │   └── inifinitetext.js   # CSS marquee ("Front-End Developer" loop)
│   ├── services/services.js   # Numbered services list (full-screen height)
│   ├── recentwork/recentwork.js  # 2×2 project image grid
│   ├── briefinfo/briefinfo.js # Personal photo + stats (5+ years, 50+ projects)
│   ├── leaningmarque/         # Two rotated CSS marquee strips (±6deg)
│   ├── footer/footer.js       # Dark footer with nav + social columns
│   ├── stickycards/stickycards.js  # GSAP pinned photo cards (About page)
│   ├── aboutme/aboutme.js     # Bio text + photo (About page)
│   ├── techarsenal/
│   │   ├── techarsenal.js     # Tech skills parent (Web/Mobile, Game, AI sections)
│   │   ├── TechSection.js     # Reusable section with animated skill cards
│   │   └── TechCard.js        # Individual skill card with proficiency bar
│   └── projectssliders/projectsslider.js  # GSAP pinned projects spotlight slider
├── about/
│   ├── layout.js              # Passthrough layout
│   └── page.js                # About page (client component)
├── contact/
│   ├── layout.js              # Passthrough layout
│   └── page.js                # Contact form (static — no submission handler yet)
└── projects/
    ├── layout.js              # Passthrough layout
    ├── page.js                # Projects listing with ProjectsSlider
    └── [slug]/
        ├── page.js            # Dynamic project detail (server component)
        └── not-found.js       # 404 for unknown slugs
```

## Custom Fonts

Fonts are registered in `globals.css` and consumed via Tailwind's arbitrary font-family syntax. Always use the exact token names below — do not use `font-sans`, `font-serif`, etc.

| Token | File | Use for |
|---|---|---|
| `font-[bomstad-light]` | BomstadDisplay-Light.ttf | Page titles, hero headings |
| `font-[bomstad-regular]` | BomstadDisplay-Regular.ttf | Body headings, labels |
| `font-[bomstad-medium]` | BomstadDisplay-Medium.ttf | |
| `font-[bomstad-semibold]` | BomstadDisplay-SemiBold.ttf | Section labels, nav, marquee |
| `font-[bomstad-bold]` | BomstadDisplay-Bold.ttf | Strong emphasis |
| `font-[bomstad-thin]` | BomstadDisplay-Thin.ttf | Light decorative text |
| `font-[montreal-light]` | ppneuemontreal-thin.otf | Long-form body copy |
| `font-[montreal-regular]` | ppneuemontreal-medium.otf | Body text, project descriptions |
| `font-[montreal-book]` | ppneuemontreal-book.otf | |

**Rule:** Headings → Bomstad. Body paragraphs / descriptions → Montreal.

## Color Palette

| Token | Hex | Use |
|---|---|---|
| Dark navy | `#0f1a22` | Primary dark (backgrounds, buttons, footer) |
| Deep navy | `#0a1f22` | Page title text |
| Off-black | `#202020` | Dark section backgrounds (stickycards) |
| Muted gray | `#6e6e73` | Subtext, secondary labels, muted borders |
| Light gray | `#e3e3e3` | Light section backgrounds |
| Off-white | `#f7f8fa` | Card backgrounds |
| White | `#ffffff` | Text on dark backgrounds |

No Tailwind color utilities (e.g. `bg-gray-900`) — always use explicit hex values.

## GSAP Patterns

### ScrollSmoother (required on every page)

Every page that uses GSAP must wrap its content in this structure:

```jsx
"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function Page() {
  const containerRef = useRef();

  useGSAP(() => {
    ScrollSmoother.create({ smooth: 1.5, effects: true, smoothTouch: 0.1 });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} id="smooth-wrapper">
      <div id="smooth-content">
        {/* page content */}
      </div>
    </div>
  );
}
```

### ScrollTrigger in child components

Child components register `ScrollTrigger` (not `ScrollSmoother`) and use `useGSAP` with `{ scope: ref }`:

```jsx
gsap.registerPlugin(useGSAP, ScrollTrigger);
useGSAP(() => {
  ScrollTrigger.create({ trigger: ref.current, ... });
}, { scope: containerRef });
```

### Pinned scroll sequences

Used in `stickycards.js` and `projectsslider.js`. Pattern: pin the container for `N * window.innerHeight` extra scroll space, then drive animation via `onUpdate(self.progress)` and `gsap.set()` (not `gsap.to`) for frame-perfect scrubbing.

## Data Layer

All project data lives in `src/app/data/projects.js` and is imported directly into components — there is no API or CMS. Each project object shape:

```js
{
  id: Number,
  name: String,
  slug: String,           // used as URL param in /projects/[slug]
  position: String,
  description: String,    // short (used in cards/sliders)
  detailedDescription: String,
  tech: String[],
  image: StaticImageData, // Next.js imported image
  link: String,           // live URL
  github: String,         // empty string if private
  myRole: String,
  featuresBullets: String[],
  client: String,
}
```

To add a project: add an entry here and import its image from `src/app/assets/images/`. The slug must be URL-safe (lowercase, no spaces).

## Known Gaps (things not yet implemented)

- **Navbar links** — `navbar.js` uses `<li>` text, not `<Link>`. Needs routing wired up.
- **Contact form** — has no `action` or `onSubmit`. Needs a submission handler (e.g. Resend, Formspree, or a Next.js server action).
- **Project detail images** — both image slots in `/projects/[slug]/page.js` use the same `project.image`. Should use multiple screenshots per project.
- **RecentWork 4th card** — duplicates Ingazo. Should be a real 4th project or removed.
- **Footer social links** — hardcoded placeholder URLs (github.com, instagram.com, linkedin.com). Replace with real profile URLs.
- **PortableMenu social links** — same issue as footer.
- **`projects/[slug]/not-found.js`** — exists but content unknown; verify it renders correctly.

## Component Conventions

- All components that use GSAP hooks must be `"use client"`.
- Server components (no interactivity / GSAP) don't need the directive — e.g. `projects/[slug]/page.js`.
- Page-level components (`page.js`) own the `ScrollSmoother` instance; child components only use `ScrollTrigger`.
- Images: always use `next/image` `<Image>` — never `<img>`.
- Layouts (`about/layout.js`, `contact/layout.js`, `projects/layout.js`) are passthrough wrappers; keep them minimal.

## Image Assets

| File | Used in |
|---|---|
| `logo.png` | Navbar |
| `hero1.png` | Hero section |
| `abstracthero.png` | Hero background overlay |
| `personalimage1.jpeg` | BriefInfo section, StickyCards card 1 |
| `personalimage2.jpg` | AboutMe section |
| `personalimage3.png` | StickyCards card 2 |
| `personalimage4.jpg` | StickyCards card 4 |
| `personalimage5.jpeg` | StickyCards card 3 |
| `ingazo.png` | Ingazo project |
| `ieee.png` | IEEE AAST project |
| `eossc.png` | EOSSC project |
| `value1–4.png`, `value1.mp4` | Valueslider component |
