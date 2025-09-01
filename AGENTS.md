# Repository Guidelines

## Project Structure & Module Organization
- Root layout (recommended): `src/` (application code), `tests/` (unit/integration), `scripts/` (dev/build helpers), `docs/` (design notes), `assets/` (static files). Example:
  - `src/your_package/` or `src/app/`
  - `tests/unit/`, `tests/integration/`
  - `scripts/dev.sh`, `scripts/build.sh`
- Keep modules small and purpose‑driven. Group by domain (e.g., `src/auth/`, `src/api/`).
- Add configuration samples as `config/` and `.env.example` (never commit real secrets).

## Build, Test, and Development Commands
- Use project scripts or a Makefile when added. Common patterns:
  - Build: `make build` or `./scripts/build.sh` — compile/bundle artifacts.
  - Test: `pytest` or `npm test` — run unit tests with coverage.
  - Dev: `make dev` or `./scripts/dev.sh` — start local server/watchers.
- Prefer cross‑platform scripts in `scripts/` and keep commands self‑documenting.

## Coding Style & Naming Conventions
- Indentation: 2 spaces (JS/TS), 4 spaces (Python). Max line length: 100.
- Naming: `snake_case` for Python modules/functions; `camelCase` for JS/TS functions/vars; `PascalCase` for types/classes.
- Formatting/Linting (add when stack is chosen):
  - Python: `ruff` + `black`.
  - JS/TS: `eslint` + `prettier`.
- Keep functions short, pure where practical, and document public APIs with concise docstrings/JSDoc.

## Testing Guidelines
- Place tests in `tests/` mirroring `src/` structure. Name tests like `test_<module>.py` or `<module>.spec.ts`.
- Aim for meaningful coverage on core logic; avoid testing third‑party libraries.
- Examples:
  - Python: `pytest -q` (coverage: `pytest --cov=src`)
  - JS/TS: `npm test` or `pnpm test`

## Commit & Pull Request Guidelines
- Use Conventional Commits: `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `test:`.
- Commits: small, focused, with imperative subject line (≤72 chars).
- PRs: clear description, linked issues (`Closes #123`), screenshots for UI, and notes on testing/rollout.

## Security & Configuration
- Do not commit secrets. Use `.env` with `.env.example` for required keys.
- Validate and sanitize all inputs at boundaries (API/CLI).
- Add basic CI checks (lint, test) before merging when CI is configured.

## Agent Notes (Codex CLI)
- Make minimal, focused patches; explain intent in messages.
- Follow repository conventions above; avoid destructive ops without approval.
- Prefer `rg` for search; keep file diffs small and readable.
