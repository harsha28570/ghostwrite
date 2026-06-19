import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const platforms = [
  'Twitter Thread',
  'LinkedIn Post',
  'Instagram Caption',
  'Email Newsletter',
  'TikTok Script',
  'YouTube Description',
  'Facebook Post',
  'Pinterest Pin',
  'Reddit Post',
  'Blog Summary',
]

function Demo() {
  return (
    <section id="demo" className="section-padding relative overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Product</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-semibold text-white tracking-tight">
            See it in action
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            Paste your content. Get ten platform-ready outputs. Edit and publish.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-card-lg border border-border bg-background-surface overflow-hidden hover:border-border-hover transition-all duration-300 hover:scale-[1.01]"
        >
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-4 h-10 border-b border-border bg-background-card">
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <span className="ml-3 text-xs text-text-tertiary font-mono">ghostwrite.app</span>
          </div>

          <div className="grid lg:grid-cols-5 min-h-[400px]">
            {/* Input panel */}
            <div className="lg:col-span-2 p-6 border-b lg:border-b-0 lg:border-r border-border">
              <p className="text-xs text-text-tertiary uppercase tracking-wider mb-3">Input</p>
              <div className="rounded-card bg-background-card border border-border p-4 h-full min-h-[200px]">
                <p className="text-sm text-text-secondary leading-relaxed font-mono">
                  The complete guide to content marketing in 2025. Most creators are leaving traffic on the table by publishing once and moving on...
                  <span className="inline-block w-0.5 h-4 bg-primary ml-0.5 animate-pulse" />
                </p>
              </div>
            </div>

            {/* Output panel */}
            <div className="lg:col-span-3 p-6">
              <p className="text-xs text-text-tertiary uppercase tracking-wider mb-3">Generated formats</p>
              <div className="grid grid-cols-2 gap-2">
                {platforms.map((platform, i) => (
                  <motion.div
                    key={platform}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-card bg-background-card border border-border text-sm text-text-secondary hover:border-border-hover hover:text-white transition-all duration-300"
                  >
                    <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                    {platform}
                  </motion.div>
                ))}
              </div>

              {/* Preview snippet */}
              <div className="mt-4 rounded-card bg-background-card border border-border p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-xs text-text-tertiary">Twitter Thread preview</span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  1/ The content marketing game has changed completely.
                  <br />
                  2/ Here&apos;s what nobody tells you about growing in 2025...
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Demo
