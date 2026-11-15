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
4. Confirms `dist/index.html`, `dist/404.html`, the favicon, the social image, and the name in the script bundle are present.
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

## Character model

The hero still shows the GitHub profile photograph. There is no rigged character in this repository. A single front photograph does not contain the side of the face, so the site does not invent a profile or substitute another person.

When a rigged GLB is placed at `public/models/character.glb`, the hero loads it with Three.js and plays a skeletal turn: front, three-quarter, side profile, then back to the front. The path lives in `src/character/config.ts`. The photograph stays on screen until the model is ready. If the file is missing, WebGL is unavailable, the browser requests reduced motion or data saving, or the model has no head bone and no cinematic clip, the photograph remains.

The model needs a skeleton with head and neck bones (Mixamo names such as `mixamorigHead` and `mixamorigNeck` work). An optional clip named `CinematicTurn` is played instead of the procedural turn. An `Idle` clip can supply body motion underneath the procedural turn. Textures should be compressed, and the file should stay small enough for a phone.

No third-party character is included, so there is no model licence to attribute. Do not drop in a stock body and present it as this portrait.

Creating that GLB still needs explicit approval before any photograph is sent to an external service, plus reference photos the front avatar cannot replace:

- A neutral front photo, evenly lit, ears and hairline visible.
- A true left profile and a true right profile.
- A three-quarter photo from each side.
- The same clothing, expression, and lighting in every frame.

The current GitHub avatar can guide likeness. It cannot supply the unseen sides.

## Motion

Project cards tilt slightly under a mouse and reveal as they enter the viewport. Expertise groups use a soft red glow. The name lines enter in sequence, and the role line crossfades. A short opening screen plays once. These effects stop when the browser requests reduced motion.

## Content boundaries

- ERAP is a personal prototype with fictional test data. It is not an emergency dispatch service.
- The traffic dashboard uses simulated readings. The previously supplied Azure URL currently returns 404, so the project card marks that dashboard as unavailable and keeps the repository link.
- CampusRadar describes frontend collaboration on a four-member team.
- Cyber Kushti is participation. The team qualifier score was 95.5%, and the team did not qualify for Round 2.
- Certification identifiers, scores, and dates appear only where they were supplied.
- The contact form opens the visitor's email app with a mailto link. The site does not store or send the message itself.

No API keys or personal access tokens belong in this repository.
