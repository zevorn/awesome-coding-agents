# Repository Guidelines

## Project Overview

A personally curated, opinionated list of AI coding agents and developer tools. The repository is a single markdown page (`README.md`) that tracks tools across categories (CLI agents, subscription management) with status ratings and brief descriptions.

## Architecture & Data Flow

The project is a flat, single-document list. There is no code, no build pipeline, no data flow. The only content file is `README.md` at the repository root. Changes are made by editing the markdown table cells.

## Key Directories

There are no subdirectories. The repository root contains:

| Path | Purpose |
|------|---------|
| `README.md` | The entire content: curated list with status legend, category tables, and notes |
| `AGENTS.md` | This file — AI assistant guidelines |

## Development Commands

No build, test, lint, or run commands exist. There is no `package.json`, `Makefile`, or any task runner. The project is purely content.

## Code Conventions & Common Patterns

- **Markdown tables** — All tools are listed in GitHub-flavored markdown tables with three columns: Tool (linked), Status (emoji), Description.
- **Status emojis** — Three tiers: 🔥 (long-term daily driver), 🧪 (actively trying), 👀 (recently discovered).
- **Section headers** — `##` for top-level categories, `---` horizontal rule as a visual separator between sections.
- **Linked entries** — Tool names are hyperlinked to their GitHub repos or official docs.
- **Table alignment** — Left-aligned (default). No alignment directives.

## How to add an entry

When adding an entry, below rules must be followed.

- **Tool name**: must use it's official name.
- **Tool URL**: must point to it's official page. Prefer github repos over web sites.
- **Tool Description**: use the "About" information from github repo. If not present, use the HTML `description` meta header from website.

## Important Files

| File | Role |
|------|------|
| `README.md` | Single source of truth — all curated content lives here |

## Runtime/Tooling Preferences

- No runtime required. The project is static Markdown.
- No package manager.
- No CI/CD configuration present.

## Testing & QA

- No test framework exists.
- No test runner configured.
- Quality is maintained through manual curation: status emojis are adjusted as experience with each tool evolves, noted in the "Notes" section footer.