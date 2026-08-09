# Migrating to Tailwind v4 and adopting shadcn's blur-fade

Tailwind shipped a new major version in 2025, and the jump from v3 to v4 rewired how I build frontends. It was more than a package bump — it changed where configuration lives, how the build works, and what a "component" means. Around the same time I adopted shadcn's components, and the combination is why my interface looks so much cleaner than the iterations before it.

This article walks through the migration step by step, and then focuses on the decision that made the biggest visible impact: replacing the default fade-up animation with shadcn's `blur-fade`. The result is a quieter, calmer, more deliberate interface.

## What changed in Tailwind v4 that actually mattered

### Configuration moved into CSS

In v3, everything lived in `tailwind.config.js` — the colors, fonts, `darkMode`, content globs. In v4, the config file breathes down into the stylesheet itself. My theme is now a `@theme` block at the top of the CSS file, readable like a design document instead of a build artifact.

```css
@import "tailwindcss";

@theme {
  --color-background: #030303;
  --color-foreground: #ffffff;
  --color-accent-blue: #3B82F6;
  --font-sans: "Google Sans", "Inter", ui-sans-serif, system-ui, sans-serif;
}
```

### Custom variants replaced the config-keyed dark mode

The old `darkMode: 'class'` toggle in the config is now an explicit CSS variant. The `dark` class you add to `<html>` still does the work; the declaration is just written in CSS where the rest of the theme lives.

```css
@custom-variant dark (&:where(.dark, .dark *));
```

### The build pipeline got simpler

v3 required a PostCSS setup — `postcss.config.js`, `@tailwindcss/postcss`, a config file with `content` globs. v4 ships an official Vite plugin and drops the config file entirely.

```js
// vite.config.ts
import tailwindcss from '@tailwindcss/vite';

export default {
  plugins: [tailwindcss(), react()],
};
```

One plugin, no PostCSS file, no `content` array — Tailwind knows what to scan because the framework is wired straight into the bundler. The whole setup is a handful of lines instead of three files.

## The design blocker I kept hitting

Before the migration, my animations were unremarkable. Every card, section, and heading did the same thing on scroll: fade in with a slight upward slide. It's the cheapest achievable effect, which means everything on the web does it — which means the interface felt generic. Nothing told the visitor how to read the page; the sequence was a choreography of identical moves.

I wanted something that felt like the content was *settling into focus* rather than being slid onto the page from below. That's exactly what `blur-fade` does.

## Adopting shadcn's blur-fade

shadcn takes a different approach from a typical component library: instead of installing a package and importing components, you copy the source into your own repo and take full ownership of it. I added the `blur-fade` component the same way.

```tsx
// src/components/ui/blur-fade.tsx
export function BlurFade({
  children,
  delay = 0,
  offset = 6,
  direction = 'down',
  blur = '6px',
  inView = false,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: direction === 'down' ? offset : -offset,
        filter: `blur(${blur})`,
      }}
      whileInView={
        inView
          ? { opacity: 1, y: 0, filter: 'blur(0px)' }
          : {}
      }
      transition={{ delay, duration: 0.4, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
```

The key change: instead of animating just `opacity` and `y`, it animates the CSS `filter` from `blur(6px)` to `blur(0px)`. The element does not rise into the viewport — it *resolves*. While in view, it loses focus like a camera lens clicking into sharp focus… but smooth.

### Using it across the site

The first `hero`, then the section headers, then the article lists. Each piece gets a scroll trigger and a small per-item delay so items step into place one after another:

```tsx
// src/routes/work.index.tsx
{projects.map((project, index) => (
  <BlurFade key={project.slug} delay={index * 0.04} inView>
    <Link to="/work/$slug">{project.title}</Link>
  </BlurFade>
))}
```

## Why it made the interface cleaner

### 1. It removed the generic slide

The moment every block stopped sliding up, the site stopped feeling like a template. Blur-fade puts motion attention on the edges instead of the layout. The result is a page that stays calm: instead of content flying at you, it settles into focus.

### 2. It introduced a rhythm

A `delay` ladder (`0`, `0.04`, `0.08`, …) creates a sequence. Items don't all appear at once — they step in like being flipped through. The eye follows the order you intended, rather than scanning a wall of finished content.

### 3. It elevated with restraint

Blur-fade is most effective when everything else is already quiet: a dark canvas, one accent color, generous spacing. Motion that is this subtle *highlights* the layout's restraint instead of fighting it. The clean design and the clean motion reinforce each other.

### 4. Reduced motion stays safe

Framer Motion's `useInView`/`whileInView` behavior respects `prefers-reduced-motion`, letting the content appear instantly for users who need motion off. Accessibility and polish aren't in conflict here.

## The takeaway

Migrating to Tailwind v4 laid a cleaner foundation — CSS-first theming, a simpler build, fewer moving parts to reason about. Adopting the shadcn blur-fade component brought the same clean impulse to motion. The interface no longer *moves* for the sake of moving; it eases into focus, section by section.

If your page still slides everything up from below, try blur-fade: one small effect can carry an entire aesthetic — and it does it without shouting.