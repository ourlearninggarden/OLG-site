# Our Learning Garden — Website

A one-page marketing site for **Our Learning Garden**, a play-based preschool &
daycare (ages 18 months–5 years) in Saanich, Victoria BC.

Static HTML/CSS/JS — no build step, no dependencies.

## Files

| File            | Purpose                                  |
| --------------- | ---------------------------------------- |
| `index.html`    | The site (entry point)                   |
| `garden.css`    | All styles + brand tokens                |
| `garden.js`     | Nav, waitlist form, scroll reveals       |
| `image-slot.js` | Drag-and-drop photo placeholders         |
| `netlify.toml`  | Netlify build/deploy config              |

## Run locally

It's a static site — just open `index.html` in a browser, or serve the folder:

```bash
# Python
python3 -m http.server 8000
# then visit http://localhost:8000

# or Node
npx serve .
```

## Deploy to Netlify

**Option A — drag & drop (fastest)**
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag this whole folder onto the page. Done.

**Option B — from GitHub (recommended for updates)**
1. Push this folder to a GitHub repo (see below).
2. In Netlify: **Add new site → Import an existing project → GitHub**.
3. Pick the repo. Settings are already handled by `netlify.toml`:
   - **Build command:** _(none)_
   - **Publish directory:** `.`
4. Click **Deploy**. Every `git push` redeploys automatically.

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<your-username>/our-learning-garden.git
git push -u origin main
```

## Editing content

- Copy and contact details live in `index.html`.
- Colors, fonts, and spacing are CSS variables at the top of `garden.css` (`:root`).
- Photos: the "Our Center" gallery uses drag-and-drop slots. To ship fixed images
  instead, replace each `<image-slot>` with a standard `<img src="...">`.
