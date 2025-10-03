# Repository Guidelines

## Project Structure & Module Organization
The Express entry point in `app.js` configures middleware, serves `public/`, and exposes `/health`. Static HTML, CSS, JS, and imagery belong under `public/` (keep new media in `public/images/`). Documents such as pitch decks live at repo root; place future narrative artifacts inside `docs/` to keep the server surface tidy. When backend logic grows, add modules under `server/` (mirrored by `tests/`) to avoid bloating `app.js`.

## Build, Test, and Development Commands
- `npm install` — sync dependencies; rerun after any package.json change.
- `npm run dev` — start nodemon with live reload on `localhost:3000`.
- `npm start` — production run; respect `PORT` and `NODE_ENV`.
- `PORT=8080 NODE_ENV=production npm start` — sample override for staging.
`npm test` currently exits with an error placeholder; replace with the real suite before enabling CI.

## Coding Style & Naming Conventions
Use 4-space indentation and semicolons in all JavaScript files. Prefer single quotes for strings and `const`/`let` over `var`. Functions and variables stay in `camelCase`; environment variables in `SCREAMING_SNAKE_CASE`. Keep middleware definitions grouped by concern (security, parsing, routing). No automated linting is configured yet; run Prettier manually (e.g., `npx prettier --write app.js public/**/*.js`) before committing until a project config lands.

## Testing Guidelines
Adopt Jest with Supertest for HTTP coverage and place specs under `tests/` mirroring the module path (e.g., `tests/health.test.js`). Name files `<feature>.test.js` and focus on route behavior, middleware effects, and security headers. Target high-level smoke tests before deep refactors, and evolve `npm test` to call Jest with `--runInBand` for deterministic CI runs.

## Commit & Pull Request Guidelines
Recent history uses terse one-word commits; move toward imperative, descriptive subjects (`Add health endpoint metrics`). Reference issue IDs when available and keep body paragraphs wrapped at 72 characters. Pull requests should summarize intent, list testing evidence (`npm run dev`, manual health check), and attach screenshots for visible UI updates. Request review before merging and avoid bundling unrelated changes.

## Security & Environment
Respect the existing Helmet configuration; extend directives instead of disabling them. Never commit secrets—use `.env` (ignored by git) for local overrides and document required variables in `README.md`. Compress new static assets before adding them to `public/images/` to maintain fast load times.
