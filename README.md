# Awesome Coding Agents

> **This is a very opinionated list from my daily usage. I will try to keep 🔥 entries below 10 (or 20, if I can't 😉).**

The catalog source lives in [`list.md`](./list.md). GitHub Pages is generated from that Markdown file plus deployment-time GitHub activity metrics.

## Local commands

```sh
make build
make run
make deploy
```

- `make build` writes the static site to `dist/index.html` and fetches current GitHub stars/open issues/open PRs.
- `make run` builds and serves `dist/` locally on port `8080`. Override with `make run PORT=3000`.
- `make deploy` runs list validation, tests, and build; GitHub Actions uses it before uploading the Pages artifact.
- `npm run validate:list` checks `list.md` categories, table format, statuses, required fields, tags, and GitHub repo URLs.

## Catalog model

The catalog has three fixed categories:

- `Agent TUI`
- `Agent Harness`
- `Agent Tool`

Status legend:

| Icon | Meaning |
|------|---------|
| 🔥 | Long-term daily driver — proven, highly recommended |
| 🧭 | Actively using — currently in rotation, not yet a daily driver |
| 👀 | Recently discovered, looks promising, not yet tried |

Each tool row in `list.md` includes status, official tool name, GitHub repo URL, tags, and description. GitHub metrics are fetched at build time and are never committed back into Markdown.

## Adding entries

Use the add-tool skill at `.agents/skills/add-tool/SKILL.md` when working with an agent. Claude-compatible setups can use the symlink at `.claude/skills/add-tool`.

Manual additions must follow the same rules:

- Tool name uses the official name.
- Repo points to a GitHub repository.
- Description uses the GitHub repository About text when available.
- Tags are short lowercase labels such as `tui`, `cli`, `gui`, `web`, `usage`, `sandbox`, `harness`, `token`.
- GitHub stars/issues/PR counts are not written into `list.md`.
