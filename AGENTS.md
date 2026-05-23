# AGENTS.md — portfolio-dashboard

## Quick start
```bash
npm run dev       # Vite dev server at localhost:5173
npm run build     # production build → dist/
npm run lint      # ESLint flat config (eslint.config.js)
npm run preview   # preview production build
```

## Architecture
- **Single-page React (JSX, no TypeScript)** — Vite + React 19, Tailwind CSS v4
- **Entrypoint:** `src/main.jsx` → `src/App.jsx`
- **Content:** all data in `src/data/profile.js`; **edit there** to change any text
- **Components:** 13 components in `src/components/`, each mapping to a section
- **Sections** (in DOM order): Hero → About → Experience → Honors → Skills → Projects → Publications → Certifications → Education → Profiles → Contact → Footer
- **Nav order** (dropdown + mobile): About, Experience, Honors, Skills, Projects, Publications, Certifications, Education, Profiles, Contact

## 3-theme system (not just dark/light)
- Three states cycle via a toggle button: **modern** (green, default) → **light** → **dark**
- Theme is persisted in `localStorage` key `theme`
- Implemented with CSS custom variants in `src/index.css`:
  - `.dark` class → `@custom-variant dark`
  - `.modern` class → `@custom-variant modern`
  - Light (no class) is the fallback
- In JSX, apply theme variants as: `dark:bg-black modern:bg-stone-50`

## Tailwind v4 specifics (not v3)
- `@import "tailwindcss"` replaces `@tailwind base/components/utilities`
- `@theme {}` block defines custom tokens (`--font-sans`, `--color-netflix`)
- `@custom-variant` replaces `@variants` / manual dark class config
- Arbitrary values via `[...]` still work (e.g. `w-[260px]`)

## 3D card hover pattern (in all sections)
All card elements use **inline styles** (not Tailwind classes) for 3D transforms:
```
transformStyle: 'preserve-3d'
perspective: '1000px'
transition: 'transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease'
```
Hover set via `onMouseEnter`/`onMouseLeave` handlers. Parameters by section:
- Experience / Skills / Publications / Education / Certifications: `rotateY(-4deg) translateZ(25px)`
- Projects: `rotateY(-5deg) translateZ(35px)` (more dramatic)
- About tags / Contact buttons: `rotateY(-3deg) translateZ(15px)` (subtler)

Child icons inside cards use `transform: 'translateZ(15px)'` for depth layering.

## Projects horizontal scroll
- `src/components/Projects.jsx`: horizontally scrollable card row with hidden scrollbar
- Left/right gradient overlay arrows (show/hide based on scroll position)
- Scroll amount = one card width + gap (`getBoundingClientRect().width + 16`)

## Navbar
- Sticky, scroll-aware (adds backdrop blur + border on scroll past 20px)
- Scrolls to section on click using `document.getElementById` + `scrollIntoView({ behavior: 'smooth' })`
- Mobile: hamburger menu slides down with nav links

## Key conventions
- **Accent colour:** `netflix` = `#e50914` (light and dark themes), `emerald-500` (modern theme)
- **Section heading pattern:** `<h2>Title</h2>` + `<span className="block w-10 h-1 ..." />` underline
- **No TypeScript** — `.jsx` files only
- **No tests** — project is a static portfolio with no test setup
- **Fonts:** Inter (sans), JetBrains Mono (mono), loaded via Google Fonts in `index.html`
