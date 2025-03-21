'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
  {
    name: 'Web Development',
    description: 'Modern, scalable applications with cutting-edge tech stack and real-time capabilities.',
    features: [
      'Full-stack Development',
      'Progressive Web Apps',
      'Real-time Applications',
      'API Development & Integration',
    ],
    icon: (props: any) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8l-4 4 4 4m10-8l4 4-4 4M14.5 4l-5 16" />
      </svg>
    )
  },
  {
    name: 'AI/ML Solutions',
    description: 'End-to-end AI implementation from model development to production deployment.',
    features: [
      'Custom AI Models',
      'LLM Integration',
      'ML Pipeline Development',
      'Data Processing Systems',
    ],
    icon: (props: any) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  },
  {
    name: 'System Architecture',
    description: 'Cloud-native architectures designed for scale, resilience, and performance.',
    features: [
      'Microservices Design',
      'Cloud Infrastructure',
      'System Integration',
      'Performance Optimization',
    ],
    icon: (props: any) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    )
  },
  {
    name: 'Quality Assurance',
    description: 'Comprehensive testing and validation processes ensuring reliable solutions.',
    features: [
      'Automated Testing',
      'Performance Testing',
      'Security Testing',
      'Integration Testing',
    ],
    icon: (props: any) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
]

export default function Services() {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      
      {/* Technical background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:14px_14px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
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
              Technical Excellence
            </h2>
            <p className="text-lg md:text-xl text-gray-400/90 max-w-2xl mx-auto font-light">
              Building robust solutions with modern technology
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full p-8 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-white/[0.05]">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-medium text-white">
                      {service.name}
                    </h3>
                  </div>
                  
                  <p className="text-gray-400/90 mb-8 font-light">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-400/90">
                        <motion.div 
                          className="w-1 h-1 rounded-full bg-white/20 mr-3"
                          initial={{ scale: 0.8 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 