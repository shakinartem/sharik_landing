# Sharik GitHub Pages Assets Refactor Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the broken Figma-image-based landing sections with live HTML/CSS components, move live decorative assets to safe `public/assets/...` paths, and verify the site builds and previews cleanly on GitHub Pages.

**Architecture:** The landing page will keep the existing React entrypoints and route structure, but the Sharik homepage sections will be rebuilt as semantic HTML sections with responsive cards, buttons, and a real form. Decorative artwork will become optional SVG/PNG assets referenced from short, safe paths, with CSS fallbacks so missing imagery never breaks layout.

**Tech Stack:** React 18, Vite, TypeScript, CSS, `public/` static assets, GitHub Pages.

---

### Task 1: Stabilize asset URL handling

**Files:**
- Modify: `src/components/sharik/shared.tsx`
- Modify: `src/lib/assets.ts`
- Modify: `src/case-detail-entry.tsx`
- Modify: `src/cases-entry.tsx`
- Modify: `src/main.tsx`
- Modify: `src/materials-entry.tsx`
- Modify: `src/seo-entry.tsx`

- [ ] **Step 1: Replace any whole-string asset encoding with segment-safe URL building**

```ts
const encodePath = (path: string) =>
  path
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");

export const assetUrl = (path: string) => {
  const base = import.meta.env.BASE_URL || "/";
  return `${base}${encodePath(path.replace(/^\/+/, ""))}`;
};
```

- [ ] **Step 2: Point favicon and case-logo helpers at `assetUrl(...)` so GitHub Pages base paths work consistently**

```ts
export function createFaviconSources(basePath: string) {
  return [assetUrl("favicon.png"), assetUrl("favicon-32.png"), assetUrl("favicon.svg")].map((src) => src.replace(/^\/+/, basePath.replace(/^\/+/, "")));
}
```

- [ ] **Step 3: Re-run TypeScript checks**

Run: `npm run build`
Expected: TypeScript passes before any layout changes are merged.

### Task 2: Rebuild Sharik homepage sections as live HTML/CSS

**Files:**
- Create: `src/components/sharik/SectionShell.tsx`
- Create: `src/components/sharik/DecorativeMark.tsx`
- Create: `src/components/sharik/hero-data.ts`
- Create: `src/components/sharik/system-data.ts`
- Create: `src/components/sharik/loss-data.ts`
- Create: `src/components/sharik/process-data.ts`
- Create: `src/components/sharik/results-data.ts`
- Create: `src/components/sharik/cta-data.ts`
- Modify: `src/components/sharik/Header.tsx`
- Modify: `src/components/sharik/HeroSection.tsx`
- Modify: `src/components/sharik/DigitalSystemSection.tsx`
- Modify: `src/components/sharik/LossMapSection.tsx`
- Modify: `src/components/sharik/ProcessSection.tsx`
- Modify: `src/components/sharik/ResultsSection.tsx`
- Modify: `src/components/sharik/CTAFormSection.tsx`
- Modify: `src/components/sharik/Footer.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Replace the header image map with a semantic nav**

```tsx
<header className="sh-header">
  <a href="#top" className="sh-brand">
    <img src={assetUrl("assets/brand/logo-main.png")} alt="ШАРиК digital" />
    <span>ШАРиК digital</span>
  </a>
</header>
```

- [ ] **Step 2: Replace the hero reference canvas with a responsive hero, metrics, and action buttons**

```tsx
<section id="top" className="sh-hero">
  <div className="sh-hero__content">...</div>
  <div className="sh-hero__panel">...</div>
</section>
```

- [ ] **Step 3: Replace DigitalSystem, LossMap, Process, Results, and CTA with live card/grid layouts**

Each section should use real headings, paragraphs, cards, lists, and buttons; decorative SVGs are optional and should sit behind the content.

- [ ] **Step 4: Move Footer to normal text links and remove hidden reference-only overlays**

```tsx
<footer className="sh-footer">
  <a href="#top">ШАРиК digital</a>
  <nav>...</nav>
</footer>
```

- [ ] **Step 5: Wire the homepage composition in `App.tsx`**

The app should render the new Sharik sections in order, with no dependence on the old `ReferenceCanvas` layout.

### Task 3: Add safe decorative assets and CSS fallbacks

**Files:**
- Create: `public/assets/brand/logo-main.svg`
- Create: `public/assets/hero/hero-balloon.svg`
- Create: `public/assets/hero/hero-route.svg`
- Create: `public/assets/system/system-shield.svg`
- Create: `public/assets/loss-map/loss-map-path.svg`
- Create: `public/assets/process/process-line.svg`
- Create: `public/assets/results/results-dashboard.svg`
- Create: `public/assets/cta/cta-lock.svg`
- Modify: `src/index.css`

- [ ] **Step 1: Add lightweight SVGs that are safe to reference from GitHub Pages**

Each SVG should be a compact decorative asset with no text dependency.

- [ ] **Step 2: Add `.sh-*` styles for cards, gradients, grids, and responsive spacing**

```css
.sh-hero {
  background: radial-gradient(...);
}
```

- [ ] **Step 3: Ensure decorative images do not affect layout if they fail to load**

Prefer CSS backgrounds and pseudo-elements for purely decorative shapes; any `<img>` used for decoration should be optional and hidden if absent.

### Task 4: Verify build, preview, and Pages readiness

**Files:**
- None beyond the implementation files above

- [ ] **Step 1: Run the production build**

Run: `npm run build`
Expected: build succeeds with no TypeScript or Vite errors.

- [ ] **Step 2: Run the local preview**

Run: `npm run preview`
Expected: the site opens with the new HTML sections and no broken image icons in the Sharik homepage.

- [ ] **Step 3: Inspect the preview for 404s on images**

Confirm the logo, hero decor, section decor, and footer render without any missing asset requests.

- [ ] **Step 4: Commit the refactor**

```bash
git add -A
git commit -m "fix: rebuild sharik landing for github pages"
```

