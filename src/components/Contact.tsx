'use client'

import { motion } from 'framer-motion'

const contactInfo = [
  {
    label: 'Email',
    value: 'sujay@syaala.com',
    href: 'mailto:sujay@syaala.com',
  },
  {
    label: 'Phone',
    value: '+1 (571) 376-1551',
    href: 'tel:+15713761551',
  },
  {
    label: 'Offices',
    value: 'Washington DC, USA • Abu Dhabi, UAE • Sydney, AUS',
    href: '#',
  },
]

export default function Contact() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      to: 'sujay@syaala.com'
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        alert('Message sent successfully!')
        form.reset()
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      alert('Failed to send message. Please try again.')
      console.error('Error:', error)
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#000000]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(51,51,51,0.1),transparent_50%)]" />
      
      <div className="container relative mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed">
            Ready to start your next project? Contact us for a consultation and let's bring your ideas to life.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-sm text-[#A1A1AA] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#333333] rounded-lg focus:border-white/30 focus:ring-0 text-white placeholder-[#525252] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-[#A1A1AA] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#333333] rounded-lg focus:border-white/30 focus:ring-0 text-white placeholder-[#525252] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-[#A1A1AA] mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#333333] rounded-lg focus:border-white/30 focus:ring-0 text-white placeholder-[#525252] transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-colors"
              >
                Send Message
              </button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-20 grid md:grid-cols-3 gap-8"
          >
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group block p-6 rounded-lg bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] border border-[#333333] hover:border-white/20 transition-all duration-500"
              >
                <div className="text-sm text-[#A1A1AA] mb-2">{item.label}</div>
                <div className="text-white text-lg group-hover:text-white/90 transition-colors">{item.value}</div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 