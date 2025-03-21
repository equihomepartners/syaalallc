'use client'

import { motion } from 'framer-motion'

export default function BackgroundElements() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* AI/ML Grid Pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 51, 160, 0.15) 2px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Fintech Data Flow */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0"
            style={{
              top: `${25 + i * 25}%`,
              left: '-100%',
              right: '-100%',
            }}
            animate={{
              x: ['0%', '100%'],
            }}
            transition={{
              duration: 8,
              delay: i * 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Real Estate Structure Lines */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, transparent 49px, rgba(192, 192, 192, 0.1) 50px),
                             linear-gradient(to bottom, transparent 49px, rgba(192, 192, 192, 0.1) 50px)`,
            backgroundSize: '50px 50px',
          }}
          animate={{
            scale: [1, 1.02, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Glowing Orbs (Tech/Innovation) */}
      {[
        { width: 150, height: 120, left: 75, top: 50 },
        { width: 200, height: 180, left: 15, top: 25 },
        { width: 140, height: 180, left: 8, top: 12 },
        { width: 170, height: 190, left: 25, top: 60 },
        { width: 190, height: 250, left: 55, top: 55 }
      ].map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl"
          style={{
            width: `${orb.width}px`,
            height: `${orb.height}px`,
            left: `${orb.left}%`,
            top: `${orb.top}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
            times: [0, 0.5, 1]
          }}
        />
      ))}
    </div>
  )
} 