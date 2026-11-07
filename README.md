# Selvamurugan S. — Portfolio

A premium, dark-themed personal portfolio built with **React 18 + Vite + TypeScript + Tailwind CSS + Framer Motion + Lucide**.

- Sections: Hero · About · Skills · Featured Projects · Experience & Achievements · Resume · Contact
- Accessible: semantic landmarks, skip link, visible focus, AA-contrast text, reduced-motion support
- Fast: below-the-fold sections are code-split; ambient effects are plain CSS gradients; blur and ambient animation switch off automatically on low-spec devices and data-saver mode
- Honest by design: no fake stats, testimonials, links or unverified achievements

## Quick start

```bash
npm install
cp .env.example .env.local      # then edit values (see below)
npm run dev                     # http://localhost:5173
```

```bash
npm run build       # type-check + production build into dist/
npm run preview     # serve the production build locally
npm run typecheck   # TypeScript only
```

Requires Node.js 18.18+ (20 or 22 recommended).

## Configure your content

Everything personal lives in **`src/config/site.ts`**: name, links, skills, projects and experience. Components never hard-code personal data.

### Resume
1. Put your PDF at `public/resume/Selvamurugan_S_Resume.pdf`.
2. Optional: set `VITE_RESUME_PATH` in `.env.local` to use another path or URL.

On load the site checks the file is really a PDF. If it is missing, the buttons switch to a friendly "unavailable" state instead of a broken download.

### Email
Set `VITE_CONTACT_EMAIL` in `.env.local`. When empty, the email card is hidden on the live site (a developer hint shows only in `npm run dev`). No address is ever invented.

### Projects
Edit the `projects` array. Optional `repoUrl` / `demoUrl` fields render **Source** / **Live demo** links only when set. Add them only once the URLs are real. Cards use abstract SVG art (`src/components/visuals/ProjectVisual.tsx`); swap in screenshots if you prefer.

### Experience
Entries in `timeline` render only when `verified: true`. Hackathon entries describe the project built for each event. Add outcomes (awards, rankings) only when confirmed.

## Deploy to Vercel

**Option A: Git (recommended)**
```bash
git init && git add . && git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Selvamurugan-hub/<your-repo>.git
git push -u origin main
```
Import the repo at https://vercel.com/new. Vite is auto-detected (also pinned in `vercel.json`). Add `VITE_CONTACT_EMAIL` (and optionally `VITE_RESUME_PATH`) under Project → Settings → Environment Variables, then redeploy.

**Option B: CLI**
```bash
npm i -g vercel
vercel login
vercel            # preview deployment
vercel --prod     # production deployment
vercel env add VITE_CONTACT_EMAIL production
```

`VITE_*` variables are inlined at build time, so redeploy after changing them.

## Structure

```
src/
  config/site.ts        all content & links
  components/sections/  Hero, About, Skills, Projects, Experience, Resume, Contact, Footer
  components/ui/        Button, Reveal, Section, ErrorBoundary, Background, ...
  components/visuals/   abstract SVG project artwork
  hooks/                useActiveSection, useResume
  lib/                  helpers
```

Colors, fonts and animations: `tailwind.config.js` and `src/index.css`. Fonts (Inter, Instrument Serif) are self-hosted via Fontsource, so there are no third-party font requests.
