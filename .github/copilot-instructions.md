# AI Coding Instructions for Portfolio Website

## Architecture Overview

This is a **modern Next.js 15 portfolio website** built with TypeScript, emphasizing **glassmorphism design** and **smooth animations**. The architecture follows Next.js App Router patterns with a clear separation between content, components, and layouts.

### Key Architectural Decisions

- **Client-Side Heavy**: Most pages use `'use client'` for complex animations (Framer Motion)
- **Content as Code**: Project data lives in `src/content/` as TypeScript files, not CMS
- **Glassmorphism First**: All UI components built around `.glass-card` and `.glass-nav` CSS classes
- **SEO via Dynamic Updates**: Client components use `useEffect` to update `document.title` (not metadata exports)

## Critical Development Patterns

### 1. Component Structure (Follow `src/components/Header.tsx`)
```tsx
'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon1, Icon2 } from 'lucide-react';

// Always define animation variants outside component
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const Component = () => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      {/* Use glass-card class for glassmorphism */}
    </motion.div>
  );
};
```

### 2. Page SEO Pattern (All pages in `src/app/*/page.tsx`)
```tsx
'use client';
import { useEffect } from 'react';

const Page = () => {
  useEffect(() => {
    document.title = 'Page Title | Portfolio';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Page description');
  }, []);
  // ... rest of component
};
```

### 3. Styling System
- **Base**: Tailwind CSS v4 with custom design tokens in `tailwind.config.ts`
- **Glassmorphism**: Use `.glass-card`, `.glass-nav`, `.glass` classes (defined in `globals.css`)
- **Gradients**: Use CSS custom properties `--gradient-primary`, `--gradient-accent`
- **Text Effects**: `.gradient-text` class for gradient text

## Content Management

### Projects (`src/content/projects.ts`)
- Export array with strict TypeScript interface
- Include `featured` boolean for homepage display
- Categories: "Development", "Design", "Fabrication", "Hardware"
- **Modal System**: Projects page uses `selectedProject` state for expandable details

### Skills (`src/content/skills.ts`)
- Organized by categories with progress levels (0-100)
- Export separate `experience` array for timeline components

## Animation Conventions

### Framer Motion Patterns
1. **Stagger Animations**: Use `staggerChildren` in container variants
2. **Page Transitions**: `initial="hidden" animate="visible"` with variants
3. **Hover Effects**: Prefer `whileHover` prop over CSS hover
4. **Viewport Triggers**: Use `whileInView` with `viewport={{ once: true }}`

### Common Animation Variants (reuse these)
```tsx
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
```

## Build & Development

### Commands
- `npm run dev` - Development with Turbopack (Next.js 15)
- `npm run build` - Production build with Turbopack
- **Critical**: Always use `--turbopack` flag (configured in package.json)

### Common Issues
1. **"use client" Position**: Must be first line before any imports
2. **Metadata Exports**: Only allowed in server components (not with `'use client'`)
3. **Animation Delays**: Use CSS `animationDelay` property, not Framer Motion style objects

## File Organization

```
src/
├── app/          # Next.js App Router pages
├── components/   # Reusable UI components
│   ├── home/     # Homepage-specific components
│   └── ui/       # Generic UI components
├── content/      # Static content as TypeScript
└── lib/          # Utilities (structured-data.ts for SEO)
```

## Integration Points

- **Contact Form**: Uses `/api/contact` route (Resend integration)
- **SEO**: Structured data in `src/lib/structured-data.ts` injected via layout
- **Icons**: Lucide React (not React Icons) for consistency
- **Fonts**: Geist Sans/Mono loaded via `next/font/google`

## Key Files to Reference

- `src/app/globals.css` - Glassmorphism utility classes
- `src/components/Header.tsx` - Navigation with mobile menu pattern
- `src/app/projects/page.tsx` - Modal system and filtering
- `tailwind.config.ts` - Extended color palette and animations