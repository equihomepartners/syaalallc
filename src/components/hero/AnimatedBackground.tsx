'use client'

import { useEffect, useRef } from 'react'

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle system
    class Particle {
      x: number
      y: number
      speed: number
      velocity: number
      size: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.speed = 0.5
        this.velocity = Math.random() * this.speed
        this.size = Math.random() * 1.5 + 0.1
      }

      update() {
        this.y -= this.velocity
        if (this.y < 0) {
          this.y = canvas.height
          this.x = Math.random() * canvas.width
        }
      }

      draw() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.05)'
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)'
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
      }
    }

    const particleCount = 100
    const particles: Particle[] = []
    const maxDistance = 100

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(
        new Particle(Math.random() * canvas.width, Math.random() * canvas.height)
      )
    }

    // Animation loop
    function animate() {
      ctx.fillStyle = 'rgba(5, 5, 5, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()

        // Connect particles
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 * (1 - distance/maxDistance)})`
            ctx.lineWidth = 0.15
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-50"
      style={{ background: 'rgb(5, 5, 5)' }}
    />
  )
} 