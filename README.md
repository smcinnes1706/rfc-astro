# Rotherfield FC Website

This project uses Astro content collections for both news articles and fixtures.

## Local development

```bash
npm install
npm run dev
```

The site runs locally at `http://localhost:4321`.

## Creating News Articles

News articles live in `src/content/news/` and are automatically picked up by the site.

### File naming

Use a date-prefixed slug, for example:

```text
src/content/news/2026-08-23-pitch-works.md
```

The filename should usually follow this pattern:

```text
YYYY-MM-DD-title-slug.md
```

### Frontmatter

Each news article must include the following frontmatter fields:

```yaml
---
title: "Match Report: Jarvis Brook 1-2 Rotherfield FC"
date: "2026-08-02"
author: "Elliot James"
category: match-report
team: first
excerpt: "Rotherfield FC claimed an excellent 2-1 victory..."
image: "/images/news/your-image.jpg" # optional
---
```

### Valid categories

- `match-report`
- `club-news`
- `juniors`

### Valid team values

- `first`
- `reserves`
- `veterans`

### Article body

After the frontmatter, add the full article content as normal Markdown:

```md
Rotherfield FC claimed an excellent 2-1 victory...

Further details here...
```

### Example

See an existing article in:

- `src/content/news/2026-08-02-match-report-jarvis-brook-1-2-rotherfield-fc.md`

---

## Creating Fixtures

Fixtures live in `src/content/fixtures/`.

### File naming

Use a date-prefixed slug, for example:

```text
src/content/fixtures/2026-08-30-crowborough-athletic-res.md
```

### Frontmatter

Each fixture must include:

```yaml
---
date: "2026-08-30"
time: "14:00"
homeTeam: "Rotherfield FC"
awayTeam: "Crowborough Athletic Res."
competition: "Mid Sussex League Premier"
venue: "Rotherfield Recreation Ground"
isHome: true
team: first
result: "2-1" # optional for results only
reportSlug: "2026-08-23-pitch-works" # optional for results only
---
```

### Required fields

- `date`: fixture date in `YYYY-MM-DD` format
- `time`: kickoff time such as `14:00`
- `homeTeam`: home team name
- `awayTeam`: away team name
- `competition`: competition name
- `venue`: venue name
- `isHome`: whether RFC are the home side
- `team`: which team this belongs to (`first`, `reserves`, or `veterans`)

### Result entries

When creating a result rather than a future fixture, add:

- `result`: the score, e.g. `2-1`
- `reportSlug`: the slug of the matching news article if there is a report

### Example

See an example fixture here:

- `src/content/fixtures/2026-08-30-crowborough-athletic-res.md`

---

## Content validation

The project validates content using the schema in `src/content.config.ts`. If a required field is missing or invalid, Astro will show a content validation error when you run the project.

## Useful commands

```bash
npm run dev
npm run build
npm run preview
```
