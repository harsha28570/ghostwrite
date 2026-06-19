import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Zap, Brain, Check, X, Loader2, AlertCircle } from 'lucide-react'
import { generateContent } from '../services/gemini'

const allPlatforms = [
  'Twitter Thread',
  'LinkedIn Post',
  'Instagram Caption',
  'Email Newsletter',
  'Facebook Post',
  'TikTok Script',
  'YouTube Description',
  'Pinterest Pin',
  'Reddit Post',
  'Blog Summary',
]

const facts = [
  'Twitter threads with 7 tweets get 63% more engagement than single tweets.',
  'LinkedIn posts with line breaks get 2x more impressions than wall-of-text posts.',
  'TikTok videos with a strong hook in the first 3 seconds see 80% better completion rates.',
  'Email subject lines with curiosity gaps can improve open rates by 35%.',
  'Instagram captions that ask a question drive 2x more comments.',
]

const processingSteps = [
  'Content uploaded and parsed',
  'Reading your content...',
  'Extracting key messages...',
  'Understanding brand voice...',
  'Generating platform formats...',
]

function AppProcessing() {
  const navigate = useNavigate()
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [factIndex, setFactIndex] = useState(0)
  const [error, setError] = useState(null)
  const [isGenerating, setIsGenerating] = useState(true)

  // Main AI generation effect
  useEffect(() => {
    const generateAIContent = async () => {
      try {
        // Get data from localStorage
        const dataString = localStorage.getItem('ghostwrite_generation')
        
        if (!dataString) {
          setError('No content found. Please go back and add content.')
          setIsGenerating(false)
          return
        }

        const data = JSON.parse(dataString)
        
        if (!data.content || data.content.trim().length < 10) {
          setError('Content is too short. Please add more text.')
          setIsGenerating(false)
          return
        }

        // Simulate progress while AI is working
        const progressInterval = setInterval(() => {
          setProgress((p) => {
            if (p < 90) return p + 2
            return p
          })
        }, 200)

        // Update steps
        setTimeout(() => setCurrentStep(1), 500)
        setTimeout(() => setCurrentStep(2), 1500)
        setTimeout(() => setCurrentStep(3), 2500)
        setTimeout(() => setCurrentStep(4), 3500)

        // Call Gemini AI
        console.log('🤖 Calling Gemini AI...', data)
        const results = await generateContent(data.content, data.brandVoice)
        console.log('✅ AI Response:', results)

        // Save results to localStorage
        localStorage.setItem('ghostwrite_results', JSON.stringify(results))

        // Clear interval and complete progress
        clearInterval(progressInterval)
        setProgress(100)
        
        // Navigate after short delay
        setTimeout(() => navigate('/app/results'), 800)
        
      } catch (err) {
        console.error('Generation error:', err)
        setError(err.message || 'Failed to generate content. Please try again.')
        setIsGenerating(false)
      }
    }

    generateAIContent()
  }, [navigate])

  // Rotate facts
  useEffect(() => {
    const interval = setInterval(() => {
      setFactIndex((i) => (i + 1) % facts.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Calculate completed platforms based on progress
  const completed = Math.floor((progress / 100) * allPlatforms.length)

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <header className="bg-background-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-text-primary">GhostWrite</span>
            </Link>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-background-card rounded-card-lg border border-red-500/30 p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-8 h-8 text-red-500" />
            </div>
            <h2 className="text-xl font-bold text-text-primary mb-2">
              Generation Failed
            </h2>
            <p className="text-text-secondary mb-6">
              {error}
            </p>
            <div className="flex flex-col gap-2">
              <Link 
                to="/app/new" 
                className="w-full py-3 bg-primary text-white rounded-btn font-semibold hover:bg-primary-hover transition-all"
              >
                Try Again
              </Link>
              <Link 
                to="/" 
                className="w-full py-3 text-text-secondary hover:text-text-primary transition-all"
              >
                Go to Home
              </Link>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="bg-background-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-text-primary">GhostWrite</span>
          </Link>
          <Link to="/app/new" className="text-sm text-text-secondary hover:text-text-primary flex items-center gap-1">
            <X className="w-4 h-4" /> Cancel
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-bold text-text-primary mb-2">
          GhostWrite is working...
        </h1>
        <p className="text-text-secondary mb-10">
          AI is generating your content. This usually takes 10-20 seconds.
        </p>

        {/* Progress Circle */}
        <div className="relative w-48 h-48 mb-10">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#progressGradient)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="283"
              strokeDashoffset={283 - (283 * progress) / 100}
              className="transition-all duration-300"
            />
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Brain className="w-10 h-10 text-primary mb-1 animate-pulse" />
            <span className="text-2xl font-bold text-primary">{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Steps */}
        <div className="w-full max-w-md space-y-3 mb-8">
          {processingSteps.map((step, index) => (
            <div key={index} className="flex items-center gap-2 text-body">
              {index < currentStep ? (
                <>
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-text-primary">{step}</span>
                </>
              ) : index === currentStep ? (
                <>
                  <Loader2 className="w-5 h-5 text-primary animate-spin" />
                  <span className="text-text-primary">{step}</span>
                </>
              ) : (
                <>
                  <div className="w-5 h-5 rounded-full border border-text-tertiary" />
                  <span className="text-text-tertiary opacity-40">{step}</span>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Platform Progress */}
        {progress > 30 && (
          <div className="w-full max-w-md mb-8">
            <p className="text-sm text-text-secondary mb-3">Generating formats:</p>
            <div className="grid grid-cols-2 gap-2">
              {allPlatforms.map((platform, index) => (
                <div key={platform} className="flex items-center gap-2 text-xs">
                  {index < completed ? (
                    <>
                      <Check className="w-3 h-3 text-primary" />
                      <span className="text-text-primary">{platform}</span>
                    </>
                  ) : index === completed ? (
                    <>
                      <Loader2 className="w-3 h-3 text-primary animate-spin" />
                      <span className="text-text-primary">{platform}</span>
                    </>
                  ) : (
                    <>
                      <div className="w-3 h-3 rounded-full border border-text-tertiary" />
                      <span className="text-text-tertiary">{platform}</span>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Did you know facts */}
        <div className="max-w-lg text-center mt-4">
          <motion.p
            key={factIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-body text-text-secondary"
          >
            💡 Did you know? {facts[factIndex]}
          </motion.p>
        </div>
      </main>
    </div>
  )
}

export default AppProcessing