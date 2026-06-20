# Did you miss Cursor? 🪦

A one-page meme generator for the viral "wasted Cursor DM" trend — those screenshots
where someone passed on a DM from Cursor CEO Michael Truell (@mntruell) and now jokes
about missing generational wealth.

Pick a pitch, pick your regret (or leave it on read), and export a pixel-accurate
X-style DM screenshot to post.

## Features

- **Builder, not a blank canvas** — assemble a DM in seconds from curated pools of real
  + trend-bait pitches and replies, with custom-text fallback on every field.
- **Pixel-accurate iOS X-DM mockup** — fixed Michael Truell profile card anchor, status
  bar, message bubbles, the works.
- **One-tap export** — Download PNG (3× retina), Copy image, or Share to X (opens the
  composer pre-filled with your caption; image is copied to the clipboard to paste in).
- **Real examples** — start from recreations of the actual viral tweets (Colin, Jasper,
  Aryan, Ben, Tereza).

## Stack

Vite + React + TypeScript + Tailwind CSS v4. PNG export via `html-to-image`. No backend.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static output in dist/
```

## Deploy

Static SPA — import the repo on Vercel (auto-detects Vite, no config needed) or serve
`dist/` anywhere.

## Note

Parody / fan project. Not affiliated with Cursor or Michael Truell.
