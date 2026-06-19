import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Play, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'

function Hero() {
  const [typedText, setTypedText] = useState('')
  const platforms = ['Twitter', 'LinkedIn', 'Instagram', 'TikTok', 'YouTube']
  const [platformIndex, setPlatformIndex] = useState(0)

  // Typing effect for rotating platforms
  useEffect(() => {
    const currentPlatform = platforms[platformIndex]
    let charIndex = 0
    
    const typingInterval = setInterval(() => {
      if (charIndex <= currentPlatform.length) {
        setTypedText(currentPlatform.substring(0, charIndex))
        charIndex++
      } else {
        clearInterval(typingInterval)
        setTimeout(() => {
          setPlatformIndex((prev) => (prev + 1) % platforms.length)
        }, 1500)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [platformIndex])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-background">
      
      {/* Center Glow Only */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  <div className="absolute w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-500/20 rounded-full blur-[120px]" />
</div>
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm group hover:border-purple-500/50 transition-all cursor-default"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          <span className="text-sm text-purple-200 font-medium">
            New: AI-powered repurposing
          </span>
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
        </motion.div>

        {/* Main Heading with Gradient and Glow */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.05] mb-6"
          style={{ letterSpacing: '-0.04em' }}
        >
          <span className="inline-block">One input.</span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent inline-block">
            Ten platforms.
          </span>
        </motion.h1>

        {/* Typing Effect for Platforms */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl sm:text-3xl text-gray-400 font-light mb-8 h-10"
        >
          Built for{' '}
          <span className="text-white font-medium">
            {typedText}
            <span className="inline-block w-1 h-7 bg-purple-500 ml-1 animate-pulse"></span>
          </span>
        </motion.div>

        {/* Sub heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Turn any piece of content into platform-optimized formats in under{' '}
          <span className="text-white font-medium relative">
            30 seconds
            <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-500/50"></span>
          </span>
          .
          <br />
          Built for creators who ship fast.
        </motion.p>

        {/* CTA Buttons with Better Styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          {/* Primary CTA */}
          <Link 
            to="/signup" 
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="relative flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Start Creating Free
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>

          {/* Secondary CTA */}
          <button 
            onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 text-white font-medium rounded-lg transition-all duration-300 hover:bg-white/5 backdrop-blur-sm"
          >
            <Play className="w-4 h-4 transition-transform group-hover:scale-125" />
            Watch Demo
          </button>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 mb-8"
        >
          {[
            { value: '10×', label: 'Faster', sublabel: 'than manual' },
            { value: '30s', label: 'Generation', sublabel: 'on average' },
            { value: '10', label: 'Platforms', sublabel: 'supported' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold bg-gradient-to-b from-white to-purple-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {stat.label} <span className="text-gray-600">{stat.sublabel}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col items-center gap-3"
        >
          <p className="text-sm text-gray-500">
            ✨ No credit card required · Free forever plan
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero