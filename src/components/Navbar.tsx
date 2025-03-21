'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Industries', href: '#industries' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navigation.map(item => item.href.substring(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      setActiveSection(currentSection || '')
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-[#1a1a1a] py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <motion.a 
              href="#"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              className="relative flex items-center group"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <motion.span 
                  className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400"
                  animate={{
                    backgroundPosition: isHovered ? ['0%', '100%'] : ['100%', '100%'],
                  }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                  Syaala
                </motion.span>
                <motion.span 
                  className="ml-1 text-xl font-medium text-gray-400"
                  animate={{
                    color: isHovered ? '#ffffff' : '#9ca3af',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  LLC
                </motion.span>
              </motion.div>
              
              {/* Animated background effect */}
              <motion.div
                className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#1a1a1a] via-[#252525] to-[#1a1a1a] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  scale: isHovered ? [1, 1.02, 1] : 1,
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              
              {/* Glow effect */}
              <motion.div
                className="absolute -inset-1 rounded-lg bg-gradient-to-r from-white/5 via-white/10 to-white/5 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  scale: isHovered ? [1, 1.1, 1] : 1,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.href.substring(1)
                      ? 'text-white bg-[#151515] shadow-lg shadow-black/20'
                      : 'text-gray-400 hover:text-white hover:bg-[#0a0a0a]'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#0a0a0a] transition-colors"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4"
            >
              <div className="rounded-lg bg-[#050505] border border-[#1a1a1a] shadow-xl shadow-black/20 p-2 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeSection === item.href.substring(1)
                        ? 'text-white bg-[#151515] shadow-lg shadow-black/20'
                        : 'text-gray-400 hover:text-white hover:bg-[#0a0a0a]'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
} 