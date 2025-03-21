'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Hero from '@/components/hero/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Industries from '@/components/Industries'
import Contact from '@/components/Contact'
import BackgroundElements from '@/components/BackgroundElements'
import PageTransition from '@/components/PageTransition'
import AIMLSection from '@/components/AIMLSection'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  return (
    <>
      <BackgroundElements />
      <Navbar />
      <main className="relative">
        <motion.div style={{ opacity, scale }}>
          <Hero />
        </motion.div>

        <PageTransition>
          <About />
        </PageTransition>

        <PageTransition>
          <Services />
        </PageTransition>

        <PageTransition>
          <Portfolio />
        </PageTransition>

        <PageTransition>
          <Industries />
        </PageTransition>

        <PageTransition>
          <AIMLSection />
        </PageTransition>

        <PageTransition>
          <Contact />
        </PageTransition>
      </main>
    </>
  )
}
