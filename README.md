# My Web · Collins (CollOH-cOde) personal portfolio

A static, terminal-styled portfolio website. No build tools, no dependencies ·
just three files. Open `index.html` in any browser and it works.

## Structure

```
My Web/
├── index.html        # all content and sections
├── 404.html          # error page (GitHub Pages serves it automatically)
├── og-card.html      # source page for the share banner · screenshot only, safe to delete
├── style.css         # design tokens (light/dark), terminal theme, layout
├── script.js         # typing animation, theme toggle, mobile menu, reveal
├── favicon.svg       # terminal `$` + cursor icon
├── github-readmes/   # one ready-made README per GitHub repo (copy & paste)
│   └── <Repository>.md
└── assets/
    ├── collins-avatar.png
    └── og-cover.png  # 1200×630 share image, wired to og:image in the head
```

## Sections

1. **Hero** · avatar, availability badge, headline, stack pills, terminal
   typing animation, bracket feature list
2. **About** (`#about`) · intro + quick-facts key/value card
3. **Services** (`#services`) · web / apps / APIs
4. **Projects** (`#projects`) · featured repos + archive list (all linked to
   github.com/CollOH-cOde)
5. **CTA band** · availability + contact buttons
6. **FAQ** (`#faq`) · collapsible `<details>` accordion
7. **Footer** (`#contact`) · links, socials, year

## Style notes

- Typeface is IBM Plex Mono everywhere (loaded from Google Fonts, falls back
  to installed system mono fonts offline).
- Light theme by default (white near-monochrome), dark mode via the ◐ button
  in the header; choice is saved in `localStorage`.
- Design tokens live at the top of `style.css` · change colors, radius,
  container width or fonts there.

## Contact details shown on the site

- **WhatsApp** · +254 723 866 363, linked everywhere as
  `https://wa.me/254723866363` (footer cell, social icon, CTA buttons and
  the FAQ button). The CTA button also opens WhatsApp with a pre-filled
  greeting message.
- **Email** · kinuthiakipkoech@gmail.com (mailto links in the footer and
  the CTA band).
- **X (Twitter)** · https://x.com/col1oh (footer social icon)
- **LinkedIn** · https://www.linkedin.com/in/collins-kinuthia-09315b2aa/
  (footer social icon)

## Status · live

- **Site** · https://collins-kinuthia.netlify.app (hosted on Netlify, free tier)
- **Source** · https://github.com/CollOH-cOde/collins-portfolio (this repo)
- **Custom 404** · included, served automatically for wrong URLs
- **Share banner** · `assets/og-cover.png`, wired to `og:image` / `og:url`
  for WhatsApp, Telegram and X link previews

## Remaining side quests

1. **Blog cell** · the footer `blog → wip.md` cell is a placeholder; point it
   wherever you want or delete the row.
2. **Repo READMEs** · open `github-readmes/`, pick the matching repo file and
   paste its contents into that repo on GitHub (Add file · Create new file ·
   name it `README.md` · paste · commit). A screenshot of each project makes
   it even better.
3. Someday · a "download my resume" button, once a CV PDF exists.

## Updating the site

1. Edit the files (or ask for changes).
2. Push new commits here; this repo is the source of truth.
3. Redeploy: drag the updated `collins-site` folder onto the Netlify
   **Deploys** tab, or link this repo in Netlify (Site configuration →
   Build & deploy → link repository) so every push goes live automatically.
