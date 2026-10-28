# portow

Personal portfolio for Cendy Saputra. The layout, type, and scroll behavior are inspired by a quiet editorial portfolio: a paper-white stage, a fixed wordmark, and a short story that advances as you scroll.

Placeholder copy is intentional. Replace it before publishing.

## Edit the content

All of the name, role, bio, chapters, projects, experience, and contact details live in [`content/site.ts`](content/site.ts).

- `site` — name, role, location, email, about, contact, links, experience, education
- `projects` — the work grid and case pages. `motif` picks an abstract cover until you add real images
- `chapters` — the homepage story. It reads from the fields above

Project covers are drawn in `components/cover.tsx`. Swap a cover for a photograph by replacing the `<Cover>` in `components/work-grid.tsx` and `app/work/[slug]/page.tsx`.

## Pages

| Route | What it is |
| --- | --- |
| `/` | Scroll-driven story. Contact is the last chapter (`/#contact`) |
| `/story` | The same story as a plain page, without scroll motion |
| `/work` | Selected work |
| `/work/[slug]` | One project |
| `/cv` | Experience, education, and contact |

## Scripts

```bash
npm install
npm run dev
npm run build
npm run lint
```

The app is a Next.js project and can be imported on Vercel with no extra configuration.
