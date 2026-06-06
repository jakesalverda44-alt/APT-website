# APT Website — Implementation Tasks

Paste this file into Claude Code (desktop) from the repo root. It contains the
project context and a set of **independent** tasks. Do only the ones you want —
each is self-contained. Keep every change consistent with the existing design
system below.

---

## Project context

- **Stack:** Vite + React 18, React Router 6 (SPA). Plain CSS (no UI framework).
- **Run:** `npm install` → `npm run dev` (http://localhost:5173) → `npm run build`.
- **Routing:** `src/main.jsx` wraps `<App/>` in `<BrowserRouter>`; routes are
  declared in `src/App.jsx` under a shared `<Layout/>`.
- **Key files:**
  - `src/components/` — `Layout.jsx`, `Navbar.jsx`, `Footer.jsx`, `PageHead.jsx`
  - `src/pages/` — `Home.jsx`, `Services.jsx`, `Projects.jsx`,
    `PowerGeneration.jsx`, `About.jsx`, `Contact.jsx`
  - `src/data.js` — all copy/content (sourced from the company Drive brief)
  - `src/App.css` — component + page styles; `src/index.css` — globals/reset
  - `public/assets/APT_Logo_2026_white.png` — navbar/footer logo (white variant)
  - `public/assets/APT_Logo_2026.png` — original transparent logo

### Design system (match this exactly)
- Colors (CSS vars in `index.css`): `--navy #1B2D4F`, `--navy-dark #162440`,
  `--gold #E8B84B`, `--white #FFFFFF`, `--muted rgba(255,255,255,0.60)`.
- **Flat only** — no gradients, no drop shadows. Border radius 4–6px.
- Gold is the accent (buttons, highlights, hover/active). Buttons: `.btn`,
  `.btn--gold`, `.btn--outline`. Cards/pills use `rgba(255,255,255,0.04–0.12)`.
- Font: `Inter, system-ui, …` (already set).
- Content lives in `src/data.js` — add copy there, not hardcoded in JSX.
- **Do not invent stats, claims, or numbers.** The Drive brief flags
  headcount / revenue / fleet size as unverified — keep them off the site.

### Verify your work
After any task: `npm run build` must pass. Then `npm run dev` and click through
the affected pages. Match the surrounding code style.

---

## Task 1 — Mobile nav (hamburger menu)

**Why:** `.navbar__nav` is `display:none` under 720px, so there's no mobile nav.

- In `src/components/Navbar.jsx`, add a hamburger button shown only ≤720px that
  toggles a mobile menu containing the same links + the "Get a Bid" CTA.
- Use React state (`useState`) for open/closed. Close the menu on link click and
  on route change. Keep it accessible: `aria-expanded`, `aria-label`, and the
  menu reachable by keyboard.
- Style in `src/App.css`: navy panel, gold accents, flat. Reuse existing
  `.navbar__link` styling. The hamburger button is hidden ≥721px.
- **Acceptance:** at 375px wide, the menu opens/closes, links navigate, the menu
  closes after navigating, and the desktop nav is unchanged ≥721px.

## Task 2 — "Request a Bid" form on the Contact page

**Why:** Contact currently only lists office phone numbers.

- In `src/pages/Contact.jsx`, add a form **above** the offices: fields for Name,
  Company / GC, Email, Phone, Project type (select: Commercial Electrical /
  Power Generation — New Install / Power Generation — Maintenance / Other), and
  Message. Mark required fields and use proper `type`/`label`/`htmlFor`.
- No backend exists. Implement client-side only: on submit, validate and show an
  inline success message ("Thanks — we'll be in touch"). Make the submit target
  a single named constant at the top of the file (e.g. `FORM_ENDPOINT = null`)
  with a `// TODO: wire to Formspree/Netlify Forms/email handler` comment so it's
  trivial to connect later. Do **not** add a fake/placeholder endpoint URL.
- Style form controls to match the dark theme (navy fields, gold focus ring,
  `.btn--gold` submit). Add styles in `src/App.css`.
- **Acceptance:** required-field validation works, success state shows, build
  passes, layout looks right on mobile and desktop.

## Task 3 — SPA deep-link hosting config

**Why:** Client-side routes (e.g. `/services`) 404 on refresh on static hosts.

- Pick whichever the user is deploying to and add the matching fallback:
  - **Netlify:** `public/_redirects` containing `/*  /index.html  200`
  - **Vercel:** `vercel.json` with a rewrite of all paths to `/index.html`
  - **Cloudflare Pages:** `public/_redirects` (same as Netlify)
  - **Plain Nginx/Apache:** add a `try_files`/rewrite snippet + a short README note
- If the host is unknown, default to `public/_redirects` (covers Netlify +
  Cloudflare) and leave a comment naming the alternatives.
- **Acceptance:** `npm run build` then `npm run preview`, hard-refresh on
  `/services` and `/power-generation` — both load without a 404.

## Task 4 — Real project photos

**Why:** `src/pages/Projects.jsx` uses a placeholder bolt tile (see the
`{/* TODO: replace with job photo … */}` comment); `PROJECTS` is in `src/data.js`.

- Add an optional `image` field to each entry in the `PROJECTS` array.
- Put images in `public/assets/projects/` (create it). Render `<img>` with
  `loading="lazy"` and descriptive `alt`; fall back to the existing bolt tile
  when `image` is absent so partial data still renders.
- Keep the card sizing/aspect ratio stable (fixed thumb height, `object-fit:
  cover`).
- **Acceptance:** cards with an image show it; cards without still render the
  placeholder; grid stays aligned on mobile and desktop.

---

## Notes
- Real project jobs already in `data.js`: 7-Eleven #42758, 7-Eleven #42906,
  Aquashine Express Car Wash (Presmont GC), Big Dan's Car Wash, TSS Self Storage
  (Bay to Bay Properties).
- The hero/trust-bar copy on Home is fixed brand copy — don't reword it.
- Commit each task separately with a clear message. Don't open a PR unless asked.
