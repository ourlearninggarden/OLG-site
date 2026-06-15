# Our Learning Garden — Website

The marketing website for **Our Learning Garden**, a play-based preschool &
daycare (ages 18 months–5 years) in Saanich, Victoria BC.

Static HTML/CSS/JS — no build step, no dependencies, no framework.

## Files

| File              | Purpose                                        |
| ----------------- | ---------------------------------------------- |
| `index.html`      | The website (entry point)                      |
| `garden.css`      | Website styles + brand tokens                  |
| `garden.js`       | Nav, scroll reveals, mobile menu               |
| `image-slot.js`   | Drag-and-drop photo placeholders               |
| `brand-guide.html`| Brand guidelines (logo, colour, type, etc.)    |
| `brandguide.css`  | Brand guide styles                             |
| `brandguide.js`   | Brand guide reveals + pattern                  |
| `netlify.toml`    | Netlify deploy config                          |

Open the site at `/` (index.html) and the brand guide at `/brand-guide.html`.

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

## ⚠️ Before you go live — photos

The photo spots (Our Center gallery, Meet the Team headshots, Instagram tiles in
the brand guide) are **drag-and-drop placeholders**. A dropped image is saved only
in **your own browser** — public visitors will see empty slots.

For a live public site, replace each `<image-slot …></image-slot>` with a real
image tag, e.g.:

```html
<img src="images/classroom.jpg" alt="Our sunny classroom" />
```

Send the photos over and we'll wire them in for you.

## Editing content

- Copy, events, and contact details live in `index.html`.
- Brand colours, fonts and spacing are CSS variables at the top of `garden.css` (`:root`).
- The waitlist buttons all point to the Google Form:
  `https://forms.gle/a2fBe1ZndDvMBNN49`
