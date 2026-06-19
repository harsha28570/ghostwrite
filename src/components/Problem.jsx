import { motion } from 'framer-motion'
import { Clock, TrendingDown, BatteryWarning, Check, X, ArrowRight } from 'lucide-react'

const painPoints = [
  {
    icon: Clock,
    stat: '10+ hours',
    title: 'Wasted Every Week',
    description: "LinkedIn needs professional tone. Twitter needs punchy hooks. Instagram needs emojis. TikTok needs a completely different script. You're a content creator — not a copy machine.",
  },
  {
    icon: TrendingDown,
    stat: '3x',
    title: 'Platform Algorithms Differ',
    description: "What works on LinkedIn tanks on Twitter. What goes viral on TikTok doesn't convert on email. Each platform has its own language — and you're expected to be fluent in all of them.",
  },
  {
    icon: BatteryWarning,
    stat: '68%',
    title: 'Creators Feel Burned Out',
    description: "The content hamster wheel never stops. Post daily or get buried. Repurpose or fall behind. But rewriting the same content 10 times kills your creativity and your business.",
  },
]

const beforeSteps = [
  'Write blog post (2 hours)',
  'Manually write Twitter version (45 mins)',
  'Rewrite for LinkedIn (30 mins)',
  'Create Instagram caption (20 mins)',
  'Draft email newsletter (45 mins)',
  'Script TikTok video (30 mins)',
  'Write Reddit post (20 mins)',
  '...and 4 more platforms...',
]

const afterSteps = [
  'Write blog post (2 hours)',
  'Upload to GhostWrite (10 seconds)',
  'AI generates all 10 formats (45 seconds)',
  'Review and copy outputs (5 minutes)',
]

function Problem() {
  return (
    <section className="bg-dark-gradient section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label text-primary-light">The Problem</span>
          <h2 className="mt-4 text-h1 font-extrabold text-white">Every Creator's Daily Nightmare</h2>
          <p className="mt-4 text-body-lg text-white/65">
            You spend hours crafting perfect content — then spend MORE hours rewriting it for each platform. Sound familiar?
          </p>
        </div>

        {/* Pain point cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group p-8 rounded-card bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/[0.07] transition-all duration-300"
            >
              <point.icon className="w-10 h-10 text-primary-light mb-5" />
              <div className="text-3xl font-extrabold text-white mb-2">{point.stat}</div>
              <h3 className="text-h3 font-bold text-white mb-3">{point.title}</h3>
              <p className="text-body text-white/65 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Before/After */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-card-lg bg-red-950/30 border border-red-500/20"
          >
            <h3 className="text-h3 font-bold text-red-300 mb-6">Without GhostWrite</h3>
            <div className="space-y-4 mb-8">
              {beforeSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-3 text-white/70">
                  <span className="text-red-400 font-mono">{String(i + 1).padStart(2, '0')}</span>
                  <span>{step}</span>
                  <X className="w-4 h-4 text-red-400 ml-auto" />
                </div>
              ))}
            </div>
            <div className="pt-6 border-t border-red-500/20">
              <p className="text-2xl font-bold text-red-300">10+ hours per week</p>
              <p className="text-white/50 text-sm mt-1">= 40+ hours per month = 480+ hours per year</p>
            </div>
          </motion.div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary-gradient flex items-center justify-center shadow-purple">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-card-lg bg-primary-darkest/40 border border-primary/30"
          >
            <h3 className="text-h3 font-bold text-primary-light mb-6">With GhostWrite</h3>
            <div className="space-y-4 mb-8">
              {afterSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-3 text-white/90">
                  <span className="text-primary-light font-mono">{String(i + 1).padStart(2, '0')}</span>
                  <span>{step}</span>
                  <Check className="w-4 h-4 text-accent-green ml-auto" />
                </div>
              ))}
            </div>
            <div className="pt-6 border-t border-primary/20">
              <p className="text-2xl font-bold text-primary-light">2 hours 6 minutes</p>
              <p className="text-white/50 text-sm mt-1">10 platforms covered • 8.9 hours saved every week</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Problem
