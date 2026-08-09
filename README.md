# Adedeji Agunbiade — Portfolio

A minimal, responsive portfolio site for Adedeji Agunbiade (Senior Software Engineer · Fullstack · Lagos, NG). Built with React 18, TypeScript, Vite, Tailwind CSS, TanStack Router, and Framer Motion.

## Features

- 🎨 Light/dark mode toggle with a smooth animated "wash" transition (preference persisted in `localStorage`)
- 🔊 Ambient sound toggle — generative Web Audio loop (ocean noise + synth chords) that reacts to theme changes
- 🖱️ Custom cursor trail
- 🕐 Live clock and weather (Open-Meteo API) in the hero, timezone-aware for Lagos
- 🧪 "Currently Building" section with terminal-style `git log` cards
- 🗂️ Project grid + dedicated `/work` history and `/writing` articles pages
- 🚀 File-based routing with TanStack Router (typed routes)
- 📱 Fully responsive, reduced-motion aware

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone this repository

```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite dev server            |
| `npm run build`   | Type-check then build for production |
| `npm run preview` | Preview the production build         |

Build artifacts are emitted to the `dist/` directory.

## Project Structure

```
src/
├── app/
│   └── layout/        # MainLayout, Nav
├── components/
│   └── shared/        # Hero, ProjectGrid, CurrentlyBuilding, ThemeToggle, SoundToggle, CursorTrail, HeatmapCard
├── context/           # ThemeContext, SoundContext
├── lib/               # Utilities
├── routes/            # TanStack Router file routes (/, /work, /writing)
├── routeTree.gen.ts   # Generated route tree (do not edit)
└── index.tsx          # App entry
```

## Customization

### Content

- Projects: edit the `projects` array in `src/components/shared/ProjectGrid.tsx`
- Currently building / built list: `src/components/shared/CurrentlyBuilding.tsx`
- Work history: `src/routes/work.tsx`
- Articles: `src/routes/writing.tsx`
- Bio, location, and socials: `src/components/shared/Hero.tsx`, `src/components/shared/HeatmapCard.tsx`

### Styling

- Theme tokens (colors, shadows) live in `src/index.css` under `:root` and `.dark`
- Tailwind theme (fonts, accent colors, animations) is configured in `tailwind.config.js`

## Technologies Used

- React 18 + TypeScript
- Vite
- Tailwind CSS
- TanStack Router
- Framer Motion
- Radix UI primitives
- react-hook-form + zod
- lucide-react icons
- react-helmet-async

## License

This project is licensed under the MIT License - see the LICENSE file for details.
