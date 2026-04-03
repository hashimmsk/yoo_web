# Wonsuk Yoo, PhD — Academic Website

Professional academic website for Dr. Wonsuk Yoo, Research Associate Professor of Biostatistics at the University of Miami School of Nursing and Health Studies.

## Tech Stack

- **Framework**: Next.js 16 (App Router, static export)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Deployment**: Render (static site) or any static hosting

## Local Development

```bash
cd website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

The static site is exported to the `out/` directory.

## Site Structure

| Route | Page |
|---|---|
| `/` | Home — hero, research focus, tools, stats |
| `/about` | Biography, education, experience, awards, memberships |
| `/research` | Research areas, funded projects, invited lectures |
| `/publications` | 55+ publications with search and year filter |
| `/tools` | Overview of research tools |
| `/tools/anova` | ANOVA Mean Comparison Tool (embedded Shiny app) |
| `/tools/swimmer-plot` | Swimmer Plot Generator (embedded Shiny app) |
| `/contact` | Contact info and professional links |

## Deploying to Render

1. Push the repository to GitHub
2. Create a new **Static Site** on Render
3. Set:
   - **Root Directory**: `website`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `out`

## Deploying Shiny Apps

The ANOVA and Swimmer Plot apps are R Shiny applications in `anova_graphs/`. To deploy them:

```r
# Install rsconnect
install.packages("rsconnect")

# Configure your shinyapps.io account
rsconnect::setAccountInfo(name='YOUR_ACCOUNT', token='YOUR_TOKEN', secret='YOUR_SECRET')

# Deploy each app
rsconnect::deployApp('anova_graphs/anova_app')
rsconnect::deployApp('anova_graphs/swimmer_app')
```

After deployment, update the URLs in `src/lib/constants.ts`:

```typescript
export const SHINY_APP_URLS = {
  anova: "https://YOUR_ACCOUNT.shinyapps.io/anova_app/",
  swimmerPlot: "https://YOUR_ACCOUNT.shinyapps.io/swimmer_app/",
};
```

## Updating Content

- **Profile data**: `src/data/profile.ts`
- **Publications**: `src/data/publications.ts`
- **Research areas & grants**: `src/data/research.ts`
- **Tool descriptions**: `src/data/tools.ts`
- **Shiny app URLs**: `src/lib/constants.ts`

## Project Structure

```
website/
├── src/
│   ├── app/           # Next.js pages (file-based routing)
│   ├── components/    # Reusable React components
│   ├── data/          # Structured content data
│   └── lib/           # Constants and utilities
├── public/            # Static assets
├── next.config.ts     # Next.js configuration (static export)
└── package.json
```
