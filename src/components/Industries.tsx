'use client'

import { motion } from 'framer-motion'

const industries = [
  {
    name: 'Fintech',
    description: 'Building secure, scalable platforms for regulated financial services.',
    icon: (props: any) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    name: 'Real Estate',
    description: 'Innovative solutions for property management and investment platforms.',
    icon: (props: any) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    name: 'Supply Chain',
    description: 'End-to-end logistics and inventory management systems.',
    icon: (props: any) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  },
  {
    name: 'E-commerce',
    description: 'Scalable platforms for online retail and digital commerce.',
    icon: (props: any) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )
  },
  {
    name: 'Manufacturing',
    description: 'Smart factory solutions and industrial automation systems.',
    icon: (props: any) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    name: 'Custom Solutions',
    description: 'Tailored technology solutions for unique business challenges.',
    icon: (props: any) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    isCustom: true
  }
]

export default function Industries() {
  return (
    <section id="industries" className="py-32 relative overflow-hidden">
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
              Industries We Serve
            </h2>
            <p className="text-lg md:text-xl text-gray-400/90 max-w-2xl mx-auto font-light">
              Delivering innovative solutions across diverse sectors
            </p>
          </motion.div>

          {/* Industries Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`relative h-full p-8 rounded-xl ${
                  industry.isCustom 
                    ? 'bg-[#0A0A0A] hover:bg-[#111111] border-[#1A1A1A] hover:border-[#222222]' 
                    : 'bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] hover:border-white/[0.1]'
                } transition-all duration-300`}>
                  <div className="mb-6 flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${
                      industry.isCustom ? 'bg-[#1A1A1A]' : 'bg-white/[0.05]'
                    }`}>
                      <industry.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-medium text-white">
                      {industry.name}
                    </h3>
                  </div>
                  
                  <p className="text-gray-400/90 font-light">
                    {industry.description}
                  </p>

                  {industry.isCustom && (
                    <div className="mt-6">
                      <a href="#contact" className="inline-flex items-center text-white hover:text-white/80 transition-colors">
                        <span>Contact Us</span>
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  )}

                  <div className={`absolute bottom-0 left-0 right-0 h-px ${
                    industry.isCustom 
                      ? 'bg-gradient-to-r from-[#1A1A1A] via-[#333333] to-[#1A1A1A]' 
                      : 'bg-gradient-to-r from-white/0 via-white/10 to-white/0'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* AI/ML Reference */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-20"
          >
            <div className="inline-flex items-center gap-4 text-white/60 hover:text-white transition-colors cursor-pointer group">
              <span className="text-lg">Explore our AI & ML capabilities</span>
              <svg 
                className="w-5 h-5 transform group-hover:translate-y-1 transition-transform" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 