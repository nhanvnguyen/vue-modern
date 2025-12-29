# vue-modern ✅

A modern Vue 3 + Vite + TypeScript starter scaffold (2026 style) with a feature-based architecture and SCSS modules.

Built-in technologies
- Vue 3 (script setup + TypeScript)
- Vite (fast dev server + build)
- Pinia (state management)
- Vue Router (route-based code splitting + Suspense)
- Axios (API client)
- SCSS modules (isolated styles)
- ESLint + Prettier, Husky + lint-staged, Vitest (unit testing)

Quick start
1. Clone the repo and open it in VS Code
2. Install dependencies:
   - pnpm: `pnpm install`
   - npm: `npm install`
   - yarn: `yarn install`
3. (Optional) Enable Husky hooks: `pnpm prepare` (or `npx husky install`)
4. Start dev server: `pnpm dev`
5. Build: `pnpm build`
6. Preview production build: `pnpm preview`
7. Lint & format: `pnpm lint` / `pnpm format`
8. Type check: `pnpm type-check`
9. Run tests: `pnpm test`

Project structure (key files)

```
src/
├── api/              # axios client + API helpers
├── assets/           # static assets (images, fonts)
├── components/       # shared UI components (BaseButton, BaseInput)
├── composables/      # global hooks (useFetch, etc.)
├── features/         # Feature-based modules (auth, product-list, ...)
│   ├── auth/         # auth module (api, components, store, types, views)
│   └── product-list/ # example product module
├── layouts/          # Default, Auth layouts
├── router/           # routes with lazy-loading
├── stores/           # global Pinia stores
├── styles/           # global SCSS variables, mixins
├── types/            # global TS declarations (e.g. `.module.scss` typings)
└── utils/            # helper functions
```

Styling (SCSS modules)
- Use `.module.scss` for component-local styles and import them normally in components:
  - `import styles from './Component.module.scss'`
  - Class usage with `<div :class="styles.root" />`
- Global SCSS partials are in `src/styles/`:
  - `_variables.scss` — design tokens (colors, spacings)
  - `_reset.scss` — minimal reset/normalize
  - `_mixins.scss` — reusable mixins (center, radius, button-reset)
  - `_base.scss` — base typography and link styles
  - `_layout.scss` — container, header, footer helpers
  - `_utilities.scss` — small helper classes (sr-only, spacing, muted)
- `src/index.scss` imports the partials so they are available globally; Type declarations for SCSS modules are in `src/types/global.d.ts` so imports are type-safe.

Environment
- Example env file: `.env.example`
- Access variables via `import.meta.env.VITE_...`

Auth & API client
- `src/api/axios.ts` provides a shared Axios instance that automatically attaches the access token from localStorage and attempts to refresh tokens when requests receive a 401 response.
- Tokens are stored in localStorage by default (helpers in `src/utils/token.ts`). Update this to your preferred secure storage and backend refresh routes.


CI
- Basic GitHub Actions workflow included at `.github/workflows/ci.yml` (installs deps, lints, builds).

Testing
- Vitest + Vue Test Utils configured. Example tests are under `src/features/*/__tests__`.

How to add a new feature (plug-and-play)
1. Copy the feature template at `src/features/_template/` to `src/features/<your-feature>/`.
2. Implement `api/`, `components/`, `store/`, `types/`, and `views/` inside the feature folder.
3. Create `src/features/<your-feature>/index.ts` exporting `export const routes: RouteRecordRaw[] = [ ... ]` that defines your feature routes (see `src/features/auth/index.ts` for example).
4. Add your feature to the aggregator by importing and appending its `routes` in `src/features/index.ts` (that file collects all feature routes automatically).

Notes
- Because routes are lazy-loaded from feature `index.ts`, adding the routes makes the feature immediately available at runtime.
- Tests: add an `__tests__` folder inside your feature and include tests using `@vue/test-utils` and `vitest`.

Contributing & Notes
- This scaffold is intentionally minimal — replace API stubs with real endpoints in `src/features/*/api` and add authentication flows as needed.
- Prefer `pnpm` for fastest installs; npm and yarn are supported.

License
- MIT

---

Happy coding! 🚀
