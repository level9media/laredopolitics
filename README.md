# Laredo Politics

Laredo Politics is an independent, bilingual civic-information website covering the 2026 City of Laredo election, mayoral and council-district candidates, municipal judge candidates, campaign-finance filings, voting resources, and local issue guides.

**Production:** [laredopolitics.com](https://laredopolitics.com)  
**Voting shortcut:** [votelaredo.com](https://votelaredo.com) → permanent, path-preserving redirect to the canonical domain

## Architecture

The site is built with React 19, Vite, TypeScript, Tailwind CSS, Wouter, and Cloudflare Pages. Production builds statically pre-render every sitemap route into route-specific HTML. Search engines receive crawlable headings, content, titles, descriptions, canonical URLs, hreflang links, and structured data without waiting for client-side JavaScript.

The primary language is English. Spanish equivalents live under `/es` and are paired with English pages using `hreflang` metadata.

## Local development

```bash
pnpm install
pnpm dev
```

## Validation

```bash
pnpm vitest run
pnpm check
pnpm build:pages
node scripts/verify_prerender.mjs
node scripts/check_routes.mjs
```

The Cloudflare Pages output directory is `dist/public`.

## Production deployment

The current Cloudflare Pages project is `laredo-politics`. It was created as a Direct Upload project, so Cloudflare cannot convert it to native Git integration. The repository includes a guarded GitHub Actions workflow for continuous deployment to the existing project. It remains disabled until these repository settings are added:

| GitHub setting                       | Value                                             |
| ------------------------------------ | ------------------------------------------------- |
| Secret `CLOUDFLARE_API_TOKEN`        | Dedicated token with Cloudflare Pages edit access |
| Secret `CLOUDFLARE_ACCOUNT_ID`       | `6559ffdd66bac93bf25d34034b0624a2`                |
| Variable `CLOUDFLARE_DEPLOY_ENABLED` | `true` after both secrets exist                   |

Once enabled, every push to `main` runs the full validation suite, builds all pre-rendered pages, and deploys `dist/public` to the existing Cloudflare Pages project.

For a manual release from an authorized machine:

```bash
pnpm build:pages
npx wrangler pages deploy dist/public --project-name laredo-politics --branch main
```

## Search and analytics

| Service               | Configuration                                     |
| --------------------- | ------------------------------------------------- |
| Canonical domain      | `https://laredopolitics.com`                      |
| Google Tag Manager    | `GTM-M9CDW5XM`                                    |
| Google Analytics 4    | `G-9WGMJ7KKT3`                                    |
| Google Search Console | Domain property verified for `laredopolitics.com` |
| Sitemap               | `https://laredopolitics.com/sitemap.xml`          |

The application emits `virtual_page_view`, `outbound_link_click`, `form_submission_success`, `ad_impression`, and `ad_click` events to `dataLayer` for GTM and advertiser reporting.

## Editorial source policy

The City of Laredo 2026 candidate-information page is the source of truth for ballot order, legal candidate names, campaign treasurers, and filing documents. Candidate and campaign-finance pages distinguish verified source material from unanswered questionnaire fields and unavailable filings.

## Forms

Advertiser inquiries, newsletter signups, site-update signups, corrections, and candidate questionnaire submissions send directly through the activated FormSubmit endpoint to the private editorial inbox. The public site does not expose the destination Gmail address or open a visitor's email application.
