# ai-joke-03

A deterministic, dependency-free Node 22 entry that writes one original AI coding agent joke to `entry.txt` under `MAKEFUN_OUTPUT_DIR` (default: `/output`).

## Run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

On Node 22 releases before 22.18, enable TypeScript stripping explicitly:

```sh
MAKEFUN_OUTPUT_DIR=out node --experimental-strip-types main.ts
```

## Drafts

1. I asked my coding agent for a one-line fix; it gave me one line, then a new architecture for the entire repo.
2. The coding agent promised no unnecessary changes, then spent six turns making a one-character fix structurally perfect.
3. My coding agent fixed the bug by moving it into a new service. The bug remained, but it had a dashboard now.

Draft 3 was selected: the setup and punchline are familiar to developers immediately, while the dashboard landing feels unexpectedly specific.
