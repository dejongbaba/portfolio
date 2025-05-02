# Modern Portfolio Website

A clean, modern, and responsive portfolio website for designers and content creators. Built with React 18, TypeScript, Styled Components, and Framer Motion.

## Features

- 🌗 Light/Dark mode toggle
- 🖱️ Custom cursor with animation
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🔄 Modern project slider
- 📬 Contact form
- 📝 Blog section
- 🎨 Clean and minimalist UI

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone this repository

```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies

```bash
npm install
# or
yarn
```

3. Start the development server

```bash
npm start
# or
yarn start
```

4. Open your browser and visit `http://localhost:3000`

## Project Structure

```
src/
├── assets/         # Static assets like images
├── components/     # React components
│   ├── About/
│   ├── Blog/
│   ├── Contact/
│   ├── ContentCreation/
│   ├── CustomCursor/
│   ├── Footer/
│   ├── Header/
│   ├── Hero/
│   ├── Projects/
│   ├── Testimonials/
│   └── UI/         # Reusable UI components
├── theme/          # Theme configuration and styling
└── types.ts        # TypeScript types
```

## Customization

### Adding Your Content

1. Replace images in the `public/assets/images/` directory with your own images
2. Update the text content in each component file
3. Modify the theme colors in `src/theme/theme.ts` to match your brand

### Adding Projects

Add your projects to the `projectsData` array in `src/components/Projects/Projects.tsx`:

```typescript
const projectsData = [
  {
    id: '01',
    title: 'Your Project Title',
    image: '/assets/images/your-project-image.jpg',
    category: 'Your Category',
  },
  // Add more projects...
];
```

## Deployment

Build the application for production:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `build/` directory.

## Technologies Used

- React 18
- TypeScript
- Styled Components
- Framer Motion
- React Hook Form
- React Scroll

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from various portfolio websites
- Icons from various icon libraries
