import { motion } from 'framer-motion'

const indicators = [
  'SOC 2 compliant',
  'No training on your data',
  '256-bit encryption',
  'GDPR ready',
]

function Trust() {
  return (
    <section className="border-y border-border bg-background-surface/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-text-tertiary shrink-0">
            Trusted by 2,400+ creators
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {indicators.map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-sm text-text-secondary flex items-center gap-2"
              >
                <span className="w-1 h-1 rounded-full bg-primary" />
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trust
