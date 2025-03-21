import { Theme } from '@/types'

export const defaultTheme: Theme = {
  dark: true,
  colors: {
    primary: '#0033A0',    // Deep Blue
    secondary: '#00B4D8',  // Cyan
    background: '#0A0A0A', // Almost Black
    surface: '#1A1A1A',    // Dark Gray
    text: '#FFFFFF',       // White
    accent: '#FF6B6B',     // Coral
  },
  fonts: {
    heading: 'var(--font-geist-sans)',
    body: 'var(--font-geist-sans)',
  },
}

export const animations = {
  pageTransition: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 },
  },
  slideIn: (direction: 'left' | 'right' | 'up' | 'down') => {
    const directions = {
      left: { x: -50, y: 0 },
      right: { x: 50, y: 0 },
      up: { x: 0, y: 50 },
      down: { x: 0, y: -50 },
    }
    return {
      initial: { opacity: 0, ...directions[direction] },
      animate: { opacity: 1, x: 0, y: 0 },
      transition: { duration: 0.5, ease: 'easeOut' },
    }
  },
  scale: {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.3 },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
}

export const gradients = {
  primary: 'bg-gradient-to-r from-primary to-secondary',
  accent: 'bg-gradient-to-r from-accent to-secondary',
  dark: 'bg-gradient-to-b from-background to-surface',
}

export const shadows = {
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  glow: 'shadow-[0_0_15px_rgba(0,179,216,0.3)]',
}

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} 