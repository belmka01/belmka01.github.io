# Project Overview

A high-performance, visually rich 3D portfolio website for **Fathi BELMKADEM**, a Cyber Security Engineer and AI/ML Security Specialist. The project leverages modern web technologies to create an interactive experience, featuring 3D elements, smooth animations, and a responsive design.

## Core Technologies
- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **3D Rendering:** Three.js, `@react-three/fiber`, `@react-three/drei`
- **Styling:** `styled-components`, Emotion, Material UI (MUI)
- **Animations:** `framer-motion`, `react-tilt`, `typewriter-effect`
- **Deployment:** GitHub Pages (`gh-pages`)
- **Other Utilities:** EmailJS for contact forms, `maath` for math helpers in 3D.

## Architecture
The project follows a standard React component-based architecture with a focus on modularity and performance:

- **`src/App.jsx`**: Orchestrates the main layout, theme provider, and sections.
- **`src/components/sections/`**: Modular components for each portfolio section (Hero, Skills, Experience, Projects, Education, Contact).
- **`src/components/canvas/`**: Specialized components for 3D scenes (e.g., `Stars`, `Earth`).
- **`src/components/cards/`**: Reusable card components for listing experiences, education, and projects.
- **`src/data/constants.js`**: Centralized source of truth for all portfolio content (Bio, Skills, Projects, etc.).
- **`src/utils/`**: Shared configurations for themes (`Themes.js`) and animation variants (`motion.js`).
- **`public/`**: Stores static assets, including 3D models (`.gltf`, `.bin`) and textures.

# Building and Running

### Development
To start the development server with hot-module replacement:
```bash
npm run dev
# OR
npm start
```
The server typically runs on `http://localhost:3000`.

### Production Build
To create a production-ready build in the `dist/` directory:
```bash
npm run build
```

### Preview
To preview the production build locally:
```bash
npm run preview
```

### Deployment
The project is configured to deploy to GitHub Pages:
```bash
npm run deploy
```
*Note: This runs `predeploy` (build) automatically before pushing to the `gh-pages` branch.*

# Development Conventions

- **Component Design:** Prefer functional components with hooks. Use `lazy` and `Suspense` for heavy components like `Projects` and `ProjectDetails` to improve initial load time.
- **Styling:** Use `styled-components` for component-level styling. Maintain theme consistency via the `ThemeProvider`.
- **Animations:** Use `framer-motion` variants (defined in `src/utils/motion.js`) for consistent entry/exit animations.
- **Error Handling:** Wrap major sections or components in `ErrorBoundary` to prevent the entire app from crashing on localized failures.
- **Data Management:** All content should be managed through `src/data/constants.js`. Avoid hardcoding text or links directly into components.
- **3D Optimization:** Manual chunking is configured in `vite.config.js` to split Three.js and UI libraries into separate bundles for better caching and loading.
