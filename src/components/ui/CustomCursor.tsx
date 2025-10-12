'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface MousePosition {
  x: number;
  y: number;
}

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on desktop
    const isDesktop = window.innerWidth >= 1024;
    if (!isDesktop) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners
    document.addEventListener('mousemove', updateMousePosition);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Hide cursor when mouse leaves window
    const handleMouseLeaveWindow = () => setIsVisible(false);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Don't render on mobile
  if (typeof window !== 'undefined' && window.innerWidth < 1024) {
    return null;
  }

  return (
    <>
      {/* Trailing cursor ring with slow animation */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border-2 border-primary/40 rounded-full pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
          mass: 2,
        }}
        style={{
          opacity: isVisible ? 0.6 : 0,
        }}
      />

      {/* Secondary trailing ring with even slower animation */}
      <motion.div
        className="fixed top-0 left-0 w-20 h-20 border border-accent/20 gradient-text rounded-full pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
          mass: 3,
        }}
        style={{
          opacity: isVisible ? 0.3 : 0,
          borderColor: 'gradient-text'
        }}
      />
    </>
  );
};

export default CustomCursor;