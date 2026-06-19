import { motion } from 'framer-motion'

const stats = [
  { value: '10×', label: 'faster than manual repurposing' },
  { value: '30s', label: 'average generation time' },
  { value: '10', label: 'platform formats per input' },
]

function Stats() {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-card-lg overflow-hidden border border-border">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background-card p-10 md:p-12 text-center group hover:bg-background-surface transition-colors duration-300"
            >
              <div className="font-heading text-5xl sm:text-6xl font-semibold text-white tracking-tight group-hover:text-primary transition-colors duration-300">
                {stat.value}
              </div>
              <p className="mt-3 text-sm text-text-secondary">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
