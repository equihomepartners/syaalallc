'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    id: 'ketero',
    title: 'Ketero',
    description: 'Appointment Management SAAS',
    image: '/Ketero Appointment Management SAAS.png',
    category: 'Web Application',
    link: 'https://ketero.com'
  },
  {
    id: 'persim',
    title: 'Persim Systems',
    description: 'Enterprise Software Solutions',
    image: '/Persim Systems (2).png',
    category: 'Enterprise Software',
    link: 'https://persim.com'
  },
  {
    id: 'kodi',
    title: 'Kodi Professional',
    description: 'Professional Services Platform',
    image: '/Kodi Professional 2.png',
    category: 'Platform',
    link: 'https://kodi.com'
  },
  {
    id: 'wrench360',
    title: 'Wrench360',
    description: 'Automotive Service Platform',
    image: '/Wrench360.png',
    category: 'Web Application',
    link: 'https://wrench360.com'
  },
  {
    id: 'bigar',
    title: 'Bigar',
    description: 'Construction & Development',
    image: '/Bigar Builders and Developers.png',
    category: 'Corporate Website',
    link: 'https://bigar.com'
  },
  {
    id: 'stgabriel',
    title: 'St. Gabriel',
    description: 'Individual Web Platform',
    image: '/StGabriel.png',
    category: 'Web Application',
    link: 'https://stgabriel.com'
  }
]

export default function Portfolio() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selectedProject = projects.find(p => p.id === selectedId)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleWheel = (e: WheelEvent) => {
    if (isFullscreen && !isAnimating) {
      e.preventDefault()
      setIsAnimating(true)
      
      if (e.deltaX > 0 || e.deltaY > 0) {
        setCurrentIndex((prev) => (prev + 1) % projects.length)
      } else {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
      }

      setTimeout(() => setIsAnimating(false), 1000)
    }
  }

  useEffect(() => {
    if (isFullscreen) {
      window.addEventListener('wheel', handleWheel, { passive: false })
      document.body.style.overflow = 'hidden'
    } else {
      window.removeEventListener('wheel', handleWheel)
      document.body.style.overflow = 'auto'
    }

    return () => {
      window.removeEventListener('wheel', handleWheel)
      document.body.style.overflow = 'auto'
    }
  }, [isFullscreen, isAnimating])

  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:14px_14px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      
      <div className="container relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6">
              Selected Work
            </h2>
            <p className="text-lg md:text-xl text-gray-400/90 max-w-2xl mx-auto font-light">
              A glimpse into our portfolio of innovative solutions
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative cursor-pointer"
                onClick={() => {
                  setCurrentIndex(index)
                  setIsFullscreen(true)
                }}
              >
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Matte black overlay */}
                  <div className="absolute inset-0 bg-[#121212]/60" />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/80 backdrop-blur-sm rounded-md px-3 py-2 shadow-sm inline-block">
                    <h3 className="text-[15px] font-medium mb-0.5 text-[#121212]">{project.title}</h3>
                    <p className="text-xs text-[#333333]">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen View */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
          >
            <div className="absolute top-4 right-4 z-50">
              <button
                onClick={() => setIsFullscreen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="relative h-full flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    fill
                    className="object-contain"
                    priority
                  />
                  {/* Dark overlay for fullscreen */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                </div>
              </div>

              <div className="relative z-10 text-center text-white px-4">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl font-semibold mb-4"
                >
                  {projects[currentIndex].title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-gray-300 max-w-2xl mx-auto"
                >
                  {projects[currentIndex].description}
                </motion.p>
                <motion.a
                  href={projects[currentIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="inline-block mt-8 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                >
                  View Project
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
} 