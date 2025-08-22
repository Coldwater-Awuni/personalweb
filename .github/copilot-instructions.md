# AI Agent Instructions for Portfolio Project

This document provides essential guidance for AI agents working in this Next.js-based portfolio project.

## Project Overview
- Modern Next.js portfolio site using the App Router (Next.js 15+)
- TypeScript-based with strict type checking
- TailwindCSS for styling
- Uses Turbopack for development builds

## Key Architecture Patterns

### Component Structure
- Pages and layouts are in `src/app/` following Next.js 13+ conventions
- Root layout (`src/app/layout.tsx`) defines the base page structure
- Main page content in `src/app/page.tsx`

### Development Workflow
```bash
# Start development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### Project Conventions

#### Styling
- TailwindCSS for all styling
- Mobile-first responsive design using Tailwind breakpoints
- Dark mode support via `dark:` prefix classes
- Example from `page.tsx`:
```tsx
className="dark:invert bg-black/[.05] dark:bg-white/[.06]"
```

#### Component Patterns
- Use Next.js Image component for optimized images:
```tsx
import Image from "next/image";
<Image
  src="/path/to/image"
  alt="Description"
  width={x}
  height={y}
  priority={true} // For above-the-fold images
/>
```

#### TypeScript
- Strict mode enabled
- Use `.tsx` extension for all React components
- Type definitions in `next-env.d.ts`

## Key Files and Directories
- `/src/app/` - All pages and layouts
- `/public/` - Static assets (images, icons)
- `next.config.ts` - Next.js configuration
- `tailwind.config.js` - TailwindCSS configuration
- `package.json` - Project dependencies and scripts

## Common Tasks
1. Adding a new page:
   - Create new `.tsx` file in appropriate `/src/app/` subdirectory
   - Export default page component
   
2. Adding static assets:
   - Place in `/public/` directory
   - Reference via root path (e.g., "/image.svg")

3. Styling components:
   - Use TailwindCSS utility classes
   - Follow mobile-first responsive pattern
   - Support dark mode with `dark:` prefix classes
