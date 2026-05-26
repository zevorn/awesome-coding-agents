# Repository Guidelines

## Project Overview

A personally curated, opinionated list of AI coding agents and developer tools. The repository maintains tool data in `list.md` and generates a minimal GitHub Pages static site from that Markdown source.

## Architecture & Data Flow

`list.md` is the single human-edited catalog source. The Node build pipeline parses it, validates its fixed categories and fields, fetches GitHub metrics at build time, ranks tools inside each category, and writes `dist/index.html`.

GitHub metrics are deployment-time data only. Never write stars, open issues, or open pull request counts back into Markdown.

## Key Paths

| Path | Purpose |
|---|---|
| `list.md` | Catalog source of truth |
| `scripts/catalog.mjs` | Parser, validation, GitHub metric fetch, ranking, HTML renderer |
| `scripts/build.mjs` | CLI entry for validation/build |
| `test/catalog.test.mjs` | Focused parser/ranking/render tests |
| `.github/workflows/pages.yml` | Scheduled/push/manual GitHub Pages deployment |
| `.agents/skills/add-tool/SKILL.md` | Source add-tool skill |
| `.claude/skills/add-tool` | Symlink to the add-tool skill |

## Development Commands

```sh
make build
make run
make deploy
```

- `make build` fetches GitHub metrics and writes `dist/index.html`.
- `make run` builds and serves `dist/` locally on port `8080`; override with `make run PORT=3000`.
- `make deploy` runs list validation, tests, and build for GitHub Pages artifact creation in CI.
- `npm run validate:list` validates `list.md` categories, table format, required fields, tags, statuses, and GitHub repo URLs without fetching GitHub metrics.

## Catalog Conventions

- Fixed categories: `Agent TUI`, `Agent Harness`, `Agent Tool`.
- Markdown tables use exactly five columns: Status, Tool, Repo, Tags, Description.
- Status emojis: 🔥, 🧭, 👀.
- Repo must be a GitHub repository URL.
- Tags are comma-separated short lowercase labels.
- Description should use GitHub repo About text when available.

## Visual Conventions

The generated HTML uses the Swiss Style / International Klein Blue theme:

- background `#fafaf8`;
- text `#0a0a0a`;
- accent `#002FA7` only;
- sans-serif typography;
- grid alignment, sharp corners, hairline borders;
- no gradients, shadows, rounded cards, or extra accent colors.

## Testing & QA

Before yielding changes that affect the catalog, build, rendering, ranking, or workflow, run the focused commands that cover the change. For most implementation work, run:

```sh
make deploy
```
