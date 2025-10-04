# Destination Health Frontend

This project is the frontend for the Destination Health platform. It is built with React, Tailwind CSS, and bundled with [Vite](https://vite.dev).

## Prerequisites

- Node.js 18 or later (Node 22 LTS recommended)
- npm 8 or later

## Available Scripts

### `npm install`
Installs all project dependencies. The installation uses npm overrides to ensure patched versions of transitive packages that previously triggered security advisories.

### `npm run dev`
Starts the Vite development server on [http://localhost:3000](http://localhost:3000) with hot module replacement.

### `npm run build`
Builds the application for production. The optimized assets are output to the `dist` directory and are ready to be deployed to GitHub Pages using the configured base path.

### `npm run preview`
Serves the production build locally so you can verify the output before deploying.

### `npm test`
Runs the test suite with [Vitest](https://vitest.dev) in a JSDOM environment. Coverage reports are generated with `npm run coverage`.

### `npm run deploy`
Deploys the contents of the `dist` directory to GitHub Pages. The `predeploy` hook automatically builds the project before publishing.

## Environment Variables

Create a `.env` file (or `.env.local`) to provide the backend API base URL:

```
VITE_API_URL=https://your-api-host.example.com
```

## Tailwind CSS

The Tailwind CSS configuration scans `index.html` and all files under `src/` for class names. You can extend the design system in `tailwind.config.js`.

## Security Notes

- The build toolchain has been migrated from `react-scripts` to Vite to remove known vulnerabilities from `webpack-dev-server` and related packages.
- npm overrides keep `esbuild`, `postcss`, and `nth-check` on patched versions to avoid audit warnings.

## Testing

The project currently includes a sample test located at `src/App.test.jsx`. Add additional tests alongside your components under `src/`.
