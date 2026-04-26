# Vitesse React

It is a copy of [Vitesse](https://github.com/antfu/vitesse), but it uses React. All configs are kept up to date.

## Features

- ⚡️ [React](https://reactjs.org/) + [Vite 8](https://vitejs.dev/) + [pnpm](https://pnpm.io/)
- 🦀 [Rolldown](https://rollup.rollupjs.org/) - Rust-powered bundler (10-30x faster)
- 🔧 [Oxc](https://oxc.rs/) - Rust-powered JavaScript toolchain
  - [Oxlint](https://oxc.rs/) - ESLint alternative (50-100x faster)
  - [Oxfmt](https://oxc.rs/) - Prettier alternative (30x faster)
- 🗂 [React Router](https://reactrouter.com/en/main)
- 😃 [React Use](https://streamich.github.io/react-use/)
- 🎨 [TailwindCSS](https://tailwindcss.com/) + [Iconify](https://iconify.design/docs/usage/css/tailwind/)
- 🦾 [CommitLint](https://commitlint.js.org/) + [Husky](https://typicode.github.io/husky/)
- ✅ [Vitest](https://vitest.dev/)
- ☁️ [Netlify](https://www.netlify.com/)

## Tech Stack

This project uses Anthony Fu's latest **ox + rust** tech stack:

| Old (JS) | New (Rust) | Speed |
|----------|------------|-------|
| ESLint | Oxlint | 50-100x faster |
| Prettier | Oxfmt | 30x faster |
| esbuild + Rollup | Rolldown | 10-30x faster |

## Try it now!

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/flower-f/vitesse-react/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit flower-f/vitesse-react xxx
cd xxx
pnpm install
```
