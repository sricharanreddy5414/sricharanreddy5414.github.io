# Sirivella Sri Charan Reddy

Personal portfolio for an early-career cloud engineer. The site presents an AWS Certified Solutions Architect – Associate credential, Alliance University study, two independent cloud prototypes, and hackathon participation.

Live site, after GitHub Pages deployment: <https://sricharanreddy5414.github.io/>

## Setup

Requirements: Node.js 20 or newer.

```bash
npm install
npm run dev
```

The dev server prints a local URL. These scripts are also available:

| Script | Purpose |
| --- | --- |
| `npm run check` | Confirms required profile facts, links, and disclosures are present |
| `npm run lint` | Runs ESLint |
| `npm run typecheck` | Runs the TypeScript compiler without emitting files |
| `npm run build` | Checks content, typechecks, and writes the static site to `dist/` |
| `npm run preview` | Serves the production build at <http://127.0.0.1:4173> |

## Deployment

The repository `sricharanreddy5414.github.io` is a user site, so Vite uses `base: '/'`.

GitHub Actions workflow: `.github/workflows/deploy.yml`

On every push to `main`, the workflow:

1. Installs dependencies with `npm ci`.
2. Runs lint.
3. Builds the production site.
4. Confirms `dist/index.html`, `dist/404.html`, the favicon, the social image, and the headline script are present.
5. Deploys `dist/` with the official GitHub Pages actions.

Workflow permissions are limited to reading repository contents, writing Pages, and requesting the Pages identity token.

Pages source must be **GitHub Actions**. The deployment environment is `github-pages`.

## Project structure

```text
src/components   Page sections
src/data         Profile, projects, certifications, and education
public           Favicon, social image, 404 page, robots, and sitemap
.github/workflows/deploy.yml
```

The profile photo is loaded from the GitHub avatar URL. If that image fails, the hero shows the initials SCR. No generated portrait is used.

## Content boundaries

- ERAP is a personal prototype with fictional test data. It is not an emergency dispatch service.
- The traffic dashboard uses simulated readings.
- CampusRadar describes frontend collaboration on a four-member team.
- Cyber Kushti is participation. The team qualifier score was 95.5%, and the team did not qualify for Round 2.
- Certification identifiers, scores, and dates appear only where they were supplied.
- The site does not include a contact form. Email, phone, LinkedIn, and GitHub are direct links.

No API keys or personal access tokens belong in this repository.
