import { motion } from 'framer-motion'
import { Upload, Brain, Layers, Palette, History, Zap } from 'lucide-react'

const features = [
  {
    icon: Upload,
    title: 'Smart upload',
    description: 'Paste text, upload PDFs, import URLs, or drop transcripts. Any format works.',
  },
  {
    icon: Brain,
    title: 'AI processing',
    description: 'GPT-4 reads your content, extracts key messages, and understands context.',
  },
  {
    icon: Layers,
    title: '10 platform formats',
    description: 'Twitter, LinkedIn, Instagram, TikTok, YouTube, and more — all optimized.',
  },
  {
    icon: Palette,
    title: 'Brand voice',
    description: 'Set tone, formality, and style. Every output matches your brand.',
  },
  {
    icon: History,
    title: 'History & templates',
    description: 'Save your best outputs. Reuse templates across projects.',
  },
  {
    icon: Zap,
    title: 'Instant generation',
    description: 'Most content pieces are ready in under 30 seconds. No waiting.',
  },
]

function Features() {
  return (
    <section id="features" className="section-padding border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-16">
          <p className="section-label mb-4">Features</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-semibold text-white tracking-tight max-w-2xl">
            Everything you need to repurpose at scale
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="dark-card p-6 group"
            >
              <div className="w-9 h-9 rounded-card bg-primary-muted flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-4 h-4 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-medium text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
