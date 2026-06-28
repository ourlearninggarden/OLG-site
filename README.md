# Our Learning Garden — Website

The marketing website for **Our Learning Garden**, a play-based preschool &
daycare (ages 18 months–5 years) in Saanich, Victoria BC.

Static HTML/CSS/JS — no build step, no dependencies, no framework.

## Files

| File              | Purpose                                        |
| ----------------- | ---------------------------------------------- |
| `index.html`      | The website (entry point)                      |
| `garden.css`      | Website styles + brand tokens                  |
| `garden.js`       | Nav, gallery slideshow, scroll reveals         |
| `images/`         | Centre photos + team headshots                 |
| `netlify.toml`    | Netlify deploy config                          |

Open the site at `/` (index.html).

## Run locally

It's a static site — open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000      # then visit http://localhost:8000
# or
npx serve .
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<your-username>/our-learning-garden.git
git push -u origin main
```

## Deploy to Netlify

**Drag & drop:** zip-free, go to [app.netlify.com/drop](https://app.netlify.com/drop)
and drag this folder on.

**From GitHub (auto-deploys on every push):** Netlify → *Add new site → Import an
existing project → GitHub* → pick the repo. `netlify.toml` already sets:
- Build command: *(none)*
- Publish directory: `.`

## Photos

All photos are baked in as real files in `images/` — the **Our Center** gallery
(`center-*.webp`) and the five **Meet the Team** headshots (`team-1.webp` …
`team-5.webp`). Nothing depends on browser storage, so everything shows for every
visitor. To swap a teacher photo, just replace the matching `images/team-N.webp`.

## Editing content

- Copy, events, and contact details live in `index.html`.
- Brand colours, fonts and spacing are CSS variables at the top of `garden.css` (`:root`).
- The waitlist buttons all point to the Google Form:
  `https://forms.gle/a2fBe1ZndDvMBNN49`
