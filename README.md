# Siddharth Kothari — portfolio

A MacBook-style personal site. The desktop, dock, and windows are the chrome; work and services live on real routes.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Environment

| Variable | Purpose |
|---|---|
| `NEXT_URL` | Canonical site URL |
| `NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY` | Contact form |
| `GOOGLE_RECAPTCHA_SECRET_KEY` | Contact form verify |
| `SENDGRID_API_KEY` | Outbound mail |
| `NEXT_PUBLIC_GA_ID` | Optional Google Analytics (`G-…`) |

## Routes

- `/` desktop
- `/work`, `/work/[slug]`
- `/services`, `/services/[slug]`
- `/about`, `/contact`
