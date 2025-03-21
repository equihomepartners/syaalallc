'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import AnimatedBackground from './AnimatedBackground'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  
  const y = useTransform(scrollY, [0, 1000], [0, 400])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  
  const springY = useSpring(y, {
    stiffness: 100,
    damping: 30,
    mass: 0.5
  })

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[120vh] flex flex-col justify-center overflow-hidden bg-[#050505]"
    >
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Content */}
      <motion.div 
        style={{ y: springY, opacity }}
        className="container relative z-10 px-4 py-32"
      >
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white mb-8 tracking-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                className="block mb-4"
              >
                Engineering excellence
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white/50 inline-block leading-tight pb-1"
              >
                in digital transformation
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="text-xl md:text-2xl text-gray-400/90 max-w-3xl mx-auto font-light"
            >
              Trusted development partner for SMEs across the US, UK, MENA, and Australia, 
              specializing in fintech, real estate, and supply chain solutions.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-4">
          <span className="text-sm text-gray-400/60">Explore our work</span>
          <div className="w-px h-24 bg-gradient-to-b from-white/50 via-white/20 to-transparent" />
        </div>
      </motion.div>
    </section>
  )
} 