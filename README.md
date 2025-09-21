# Sofiane El Habib — Portfolio (Next.js 14 + Tailwind)

A clean, fast, accessible portfolio for **Sofiane El Habib** (junior front‑end developer).  
Built with Next.js App Router, Tailwind CSS, and a tiny API route for the contact form.

## Quickstart

```bash
# 1) Install deps
npm i

# 2) Run locally
npm run dev

# 3) Build & start
npm run build && npm start
```

## Customize

- **Name & copy**: edit `app/page.js` hero/About text.
- **Email**: change `hello@sofiane.dev` in `Header.jsx`, `Terms`, `Privacy`.
- **Contact delivery**: replace the TODO in `app/api/contact/route.js` with an email service (e.g., Resend, Postmark, or SendGrid).
- **SEO**: adjust `metadata` and JSON‑LD in `app/layout.js`.
- **Theme**: tweak colors in `tailwind.config.js`.

## Notes

- Projects list fetches from GitHub (`/users/soufianeelhabib/repos`). Fallback shows a sample item if the request fails.
- Dark mode toggle persists in localStorage.
- Minimal dependencies; no database required.
- Production deploy: works on Vercel, Coolify, Docker, or any Node host.

## Connect to your GitHub

Set these env vars (optional but recommended to avoid rate limits and choose the username):

```bash
# .env.local
GITHUB_USERNAME=soufianeelhabib   # or your GitHub login
# GITHUB_TOKEN=ghp_...            # optional PAT with `public_repo` scope for higher rate limits
NEXT_PUBLIC_GITHUB_USER=$GITHUB_USERNAME
```

The Work page loads from `/api/github/repos`, which caches for 1 hour.
