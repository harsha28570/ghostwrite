import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const logos = [
  'YouTube', 'Product Hunt', 'AppSumo', 'IndieHackers', 'HubSpot', 'Buffer', 'Hootsuite', 'Morning Brew', 'Beehiiv', 'ConvertKit', 'Creator Economy Report'
]

const stats = [
  { value: 2400, suffix: '+', label: 'Active Users' },
  { value: 50000, suffix: '+', label: 'Pieces Generated' },
  { value: 10, suffix: 'M+', label: 'Words Written' },
]

function CountUp({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 2000
          const startTime = performance.now()
          const animate = (now) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

function LogoCloud() {
  return (
    <section className="bg-background-alt py-10 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-body-sm text-text-tertiary mb-8">
          Trusted by creators and teams at
        </p>

        <div className="relative overflow-hidden">
          <div className="marquee-track">
            {[...logos, ...logos].map((name, i) => (
              <div
                key={i}
                className="flex items-center justify-center mx-10 text-lg font-bold text-text-secondary opacity-50 hover:opacity-100 transition-opacity duration-200 cursor-default whitespace-nowrap"
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border pt-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`text-center ${i !== 2 ? 'md:border-r md:border-border' : ''}`}
            >
              <div className="text-h2 font-extrabold text-text-primary">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-body-sm text-text-secondary mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LogoCloud
