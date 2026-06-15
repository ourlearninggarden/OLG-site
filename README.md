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
| `images/`         | Optimised photos of the centre                 |
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

## Photos

The **Our Center** gallery now uses real optimised photos (in `images/`).

Still using drag-and-drop placeholders (saved only in the visitor's own browser,
so they show empty to the public): the **Meet the Team** headshots and the
Instagram / decor mock-ups inside `brand-guide.html`. When you send those photos,
replace each `<image-slot …></image-slot>` with a real image, e.g.:

```html
<img src="images/teacher-priya.jpg" alt="Ms. Priya" />
```

## Editing content

- Copy, events, and contact details live in `index.html`.
- Brand colours, fonts and spacing are CSS variables at the top of `garden.css` (`:root`).
- The waitlist buttons all point to the Google Form:
  `https://forms.gle/a2fBe1ZndDvMBNN49`
