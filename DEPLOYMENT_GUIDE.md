# Laredo Politics Production Deployment Guide

**Primary domain:** `https://laredopolitics.com`  
**Secondary redirect domain:** `https://votelaredo.com`  
**Production branch:** `main`

## Recommended architecture

Laredo Politics should run as a **pre-rendered static React site on Cloudflare Pages**. The build currently creates 100 route-specific HTML files with unique titles, descriptions, canonicals, hreflang tags, structured data, and H1 content. Cloudflare should serve those files globally; Google does not have to wait for client-side JavaScript to discover the page content.

The GitHub repository is the source of truth. The existing Cloudflare Pages project was created with Direct Upload, which Cloudflare does not allow converting to native Git integration. A guarded GitHub Actions workflow validates every push and can deploy automatically to the existing Pages project after its dedicated API credentials are added.

## GitHub remote

The project preserves the Manus-managed remote as `manus` and uses GitHub as the production `origin`:

```bash
git remote rename origin manus
git remote add origin https://github.com/level9media/laredopolitics.git
git push -u origin main
```

Do not force-push. Normal releases are:

```bash
git add -A
git commit -m "Describe the release"
git push origin main
```

## Cloudflare Pages build settings

| Setting                | Value              |
| ---------------------- | ------------------ |
| Framework preset       | Vite               |
| Production branch      | `main`             |
| Build command          | `pnpm build:pages` |
| Build output directory | `dist/public`      |
| Root directory         | `/`                |
| Node version           | `22`               |

The build does not require secret analytics variables because the verified public IDs are built in with optional environment overrides. The GitHub workflow requires repository secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`, then repository variable `CLOUDFLARE_DEPLOY_ENABLED=true` to enable its deploy step.

## Google tracking

| Product            | Identifier     | Status                             |
| ------------------ | -------------- | ---------------------------------- |
| Google Tag Manager | `GTM-M9CDW5XM` | Container version 2 published live |
| Google Analytics 4 | `G-9WGMJ7KKT3` | Laredo Politics web stream created |
| GA4 property ID    | `553505943`    | Active                             |
| GA4 stream ID      | `15750202724`  | Active                             |

The site emits `virtual_page_view`, `outbound_link_click`, `form_submission_success`, `ad_impression`, and `ad_click` events to `dataLayer`. VoteLaredo now redirects before rendering, so visits are measured on the canonical Laredo Politics destination without duplicate page content.

## Domain routing

**`laredopolitics.com` is the canonical public site.** `votelaredo.com` now issues a path- and query-preserving `301` to the corresponding Laredo Politics URL. `www.laredopolitics.com` is attached to Pages and has a `301` canonical rule to the apex; SSL provisioning may briefly show as initializing after the DNS record is created.

## Search Console

The **Domain property** for `laredopolitics.com` is verified through Cloudflare DNS, and `https://laredopolitics.com/sitemap.xml` was submitted successfully. Next, use URL Inspection to request priority discovery for `/`, `/election-2026`, `/where-to-vote`, `/candidates`, and `/campaign-finance`. A second content property is unnecessary for VoteLaredo because it is a redirect-only domain.

## Release verification

After every production deployment, verify:

```bash
pnpm vitest run
pnpm check
pnpm build:pages
node scripts/verify_prerender.mjs
node scripts/check_routes.mjs
```

Then verify the public site in GTM Preview, GA4 Realtime, Search Console URL Inspection, and Cloudflare Pages deployment logs.
