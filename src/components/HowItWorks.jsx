import { motion } from 'framer-motion'
import { Upload, Zap, Sparkles, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'Upload',
    subtitle: 'Paste or upload',
    description: 'Drop your blog post, paste text, or import from URL.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    number: '02',
    icon: Zap,
    title: 'Generate',
    subtitle: 'AI does the magic',
    description: 'Our AI creates 10 platform-optimized versions instantly.',
    color: 'from-purple-400 to-purple-500',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Publish',
    subtitle: 'Copy & share',
    description: 'Edit, copy with one click, and publish everywhere.',
    color: 'from-purple-600 to-purple-700',
  },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 border-t border-border relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-purple-400 tracking-widest uppercase mb-4"
          >
            How it works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4"
            style={{ letterSpacing: '-0.04em' }}
          >
            Three steps. <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Done.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            From idea to 10 platform-ready posts in under 30 seconds.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent -translate-y-1/2 z-0" />
          
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative bg-background-card border border-border rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10 backdrop-blur-sm h-full">
                
                {/* Step Number (Top Right) */}
                <div className="absolute top-6 right-6 text-5xl font-bold bg-gradient-to-br from-purple-500/20 to-purple-600/20 bg-clip-text text-transparent">
                  {step.number}
                </div>

                {/* Icon with gradient bg */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/20`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-2xl font-bold text-white mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-purple-400 font-medium mb-3">
                  {step.subtitle}
                </p>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow (Mobile) */}
                {i < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <ArrowRight className="w-6 h-6 text-purple-500/50 rotate-90" />
                  </div>
                )}
              </div>

              {/* Connecting Arrow (Desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-purple-500 items-center justify-center">
                  <ArrowRight className="w-3 h-3 text-white" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">
            That's it. Seriously.
          </p>
          <a 
            href="/signup" 
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors group"
          >
            Try it yourself
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks