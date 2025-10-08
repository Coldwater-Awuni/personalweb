# Design & Fabrication Projects Page

## Overview

A specialized showcase page for design and fabrication projects featuring modern sliders and gallery-style presentation. This page demonstrates the intersection of digital design and physical fabrication through an immersive, interactive experience.

## Features

### 🎨 Modern Gallery System
- **Lightbox functionality** with keyboard navigation (arrow keys, space, escape)
- **Responsive grid layout** adapting to different screen sizes
- **Video playback support** with custom controls
- **Smooth animations** using Framer Motion
- **Touch/swipe gestures** for mobile devices

### 🎢 Interactive Project Slider
- **Auto-play capability** with play/pause controls
- **Touch/swipe support** for mobile interaction
- **Smooth transitions** with spring animations
- **Progress indicators** and thumbnail navigation
- **Keyboard controls** (arrow keys, spacebar)

### 🎯 Smart Filtering
- **Category-based filtering** (All, Design, Fabrication)
- **Animated transitions** between filter states
- **Project count badges** for each category
- **Smooth state management** with React hooks

### 🔮 Glassmorphism Design
- **Consistent glass-card styling** throughout
- **Backdrop blur effects** for modern aesthetics
- **Gradient accents** and hover animations
- **Professional color scheme** with accessibility

## Technical Implementation

### Components Created

1. **MediaGallery.tsx** (`/src/components/ui/MediaGallery.tsx`)
   - Responsive image/video gallery with lightbox
   - Keyboard navigation support
   - Video controls integration
   - Optimized loading with lazy loading

2. **ProjectSlider.tsx** (`/src/components/ui/ProjectSlider.tsx`)
   - Auto-playing slider with smooth transitions
   - Touch gesture support for mobile
   - Thumbnail strip for large screens
   - Progress bar for auto-play timing

3. **DesignFabricationPage.tsx** (`/src/app/design-fabrication/page.tsx`)
   - Main page component with filtering logic
   - View mode switching (slider/gallery)
   - Project categorization and display
   - SEO optimization with dynamic metadata

### Data Structure Enhancements

Enhanced the projects data in `/src/content/projects.ts` with:
- **Rich gallery items** with captions and media types
- **Detailed project metadata** including technologies and results
- **New design projects** showcasing digital art and branding work
- **Enhanced fabrication projects** with professional documentation

### Navigation Integration

Updated `/src/components/Header.tsx` to include:
- New "Design & Fab" navigation item
- Palette icon for visual distinction
- Responsive menu support

## Usage

### Accessing the Page
Navigate to `/design-fabrication` to view the specialized showcase.

### View Modes
- **Slider View**: Auto-playing carousel with smooth transitions
- **Gallery View**: Grid-based layout with lightbox functionality

### Filtering
- **All Projects**: Shows both design and fabrication work
- **Design**: Digital art, branding, and visual identity projects
- **Fabrication**: CNC work, exhibition displays, and manufacturing

### Keyboard Navigation
- `Arrow Keys`: Navigate through gallery/slider items
- `Space`: Play/pause video content or auto-play
- `Escape`: Close lightbox overlay

## Performance Optimizations

- **Lazy loading** for images to improve initial load times
- **Optimized animations** using Framer Motion's spring physics
- **Efficient state management** with React hooks
- **Responsive design** with mobile-first approach

## Browser Support

- Modern browsers with ES6+ support
- Touch device compatibility
- Responsive design for all screen sizes
- Accessibility features with keyboard navigation

## Future Enhancements

- **3D model viewer** integration for fabrication projects
- **Project comparison** functionality
- **Social sharing** capabilities
- **Advanced filtering** by technology or year
- **Project timeline** visualization