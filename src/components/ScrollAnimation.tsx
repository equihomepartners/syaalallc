'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface ScrollAnimationProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  className?: string
}

export default function ScrollAnimation({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = '' 
}: ScrollAnimationProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const directionOffset = {
    up: [50, 0],
    down: [-50, 0],
    left: [50, 0],
    right: [-50, 0]
  }

  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    direction === 'up' || direction === 'down' ? [...directionOffset[direction], 0] : [0, 0, 0]
  )

  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    direction === 'left' || direction === 'right' ? [...directionOffset[direction], 0] : [0, 0, 0]
  )

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 1])
  const scale = useTransform(scrollYProgress, [0, 0.3, 1], [0.8, 1, 1])

  return (
    <motion.div
      ref={ref}
      className={`${className} perspective-1000`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      style={{ 
        y,
        x,
        opacity,
        scale
      }}
    >
      {children}
    </motion.div>
  )
} 