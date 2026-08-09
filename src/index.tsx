import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/theme-context';
import { SoundProvider } from './context/sound-context';
import './index.css';

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <SoundProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </SoundProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
