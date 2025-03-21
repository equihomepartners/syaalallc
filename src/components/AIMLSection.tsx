'use client'

import { motion } from 'framer-motion'

const solutions = [
  {
    title: 'Custom ML Development',
    description: 'Building and training custom machine learning models using your internal data and expertise.',
    features: [
      'Data Analysis & Preprocessing',
      'Model Development & Training',
      'Performance Optimization',
      'Deployment & Integration'
    ]
  },
  {
    title: 'AI Agents & Automation',
    description: 'Developing intelligent agents and automated systems for business processes.',
    features: [
      'Custom AI Agents',
      'Process Automation',
      'Decision Support Systems',
      'Workflow Optimization'
    ]
  },
  {
    title: 'LLM Integration',
    description: 'Seamlessly integrating large language models into your existing systems.',
    features: [
      'API Integration',
      'Custom Fine-tuning',
      'Context Management',
      'Response Optimization'
    ]
  },
  {
    title: 'MLaaS Solutions',
    description: 'End-to-end machine learning as a service for scalable AI operations.',
    features: [
      'Cloud Infrastructure',
      'Model Management',
      'Monitoring & Analytics',
      'Scalable Deployment'
    ]
  }
]

export default function AIMLSection() {
  return (
    <section id="ai-ml" className="py-32 relative overflow-hidden">
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
              AI & Machine Learning
            </h2>
            <p className="text-lg md:text-xl text-gray-400/90 max-w-3xl mx-auto font-light">
              Comprehensive AI solutions from custom model development to full-scale deployment
            </p>
          </motion.div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full p-8 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300">
                  <h3 className="text-2xl font-medium text-white mb-4">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-400/90 font-light mb-6">
                    {solution.description}
                  </p>

                  <ul className="space-y-3">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 mr-3 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-16"
          >
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-white text-black hover:bg-white/90 transition-colors"
            >
              <span className="text-lg font-medium">Start Your AI Journey</span>
              <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 