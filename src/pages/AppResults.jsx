import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Zap, Check, Copy, Pencil, RefreshCw, Download, Share, Plus, Twitter, Linkedin, Instagram, Mail, Facebook, Music2, Youtube, Pin, MessageSquare, FileText, AlertCircle } from 'lucide-react'

const platformsConfig = [
  { id: 'twitter', name: 'Twitter Thread', icon: Twitter, format: 'Thread — 5-7 Tweets' },
  { id: 'linkedin', name: 'LinkedIn Post', icon: Linkedin, format: 'Professional Post' },
  { id: 'instagram', name: 'Instagram Caption', icon: Instagram, format: 'Caption + Hashtags' },
  { id: 'email', name: 'Email Newsletter', icon: Mail, format: 'Newsletter' },
  { id: 'facebook', name: 'Facebook Post', icon: Facebook, format: 'Conversational Post' },
  { id: 'tiktok', name: 'TikTok Script', icon: Music2, format: 'Video Script' },
  { id: 'youtube', name: 'YouTube Description', icon: Youtube, format: 'SEO Description' },
  { id: 'pinterest', name: 'Pinterest Pin', icon: Pin, format: 'Pin Description' },
  { id: 'reddit', name: 'Reddit Post', icon: MessageSquare, format: 'Community Post' },
  { id: 'blog', name: 'Blog Summary', icon: FileText, format: 'Summary + Key Points' },
]

const tips = {
  twitter: 'Post threads between 8-10am for best engagement.',
  linkedin: 'LinkedIn posts perform best Tuesday-Thursday, 8-10am.',
  instagram: 'Use 3-5 hashtags in your niche for maximum reach.',
  email: 'Send newsletters Tuesday-Thursday for higher open rates.',
  facebook: 'Posts with questions get 2x more comments.',
  tiktok: 'Hook viewers in the first 3 seconds for retention.',
  youtube: 'Include keywords in the first 2 lines for SEO.',
  pinterest: 'Pin descriptions with keywords improve searchability.',
  reddit: 'Avoid salesy language — lead with value.',
  blog: 'Use the summary for meta descriptions and previews.',
}

function AppResults() {
  const navigate = useNavigate()
  const [activePlatform, setActivePlatform] = useState('twitter')
  const [copied, setCopied] = useState(null)
  const [editing, setEditing] = useState(null)
  const [outputs, setOutputs] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Load results from localStorage on mount
  useEffect(() => {
    try {
      const resultsString = localStorage.getItem('ghostwrite_results')
      
      if (!resultsString) {
        setError('No results found. Please generate content first.')
        setLoading(false)
        return
      }

      const results = JSON.parse(resultsString)
      
      // Map AI results to outputs format
      const mappedOutputs = {}
      Object.keys(results).forEach((key) => {
        if (results[key] && results[key].content) {
          mappedOutputs[key] = results[key].content
        }
      })

      setOutputs(mappedOutputs)
      setLoading(false)
    } catch (err) {
      console.error('Error loading results:', err)
      setError('Failed to load results. Please try generating again.')
      setLoading(false)
    }
  }, [])

  // Calculate quality score based on content length and structure
  const calculateScore = (content) => {
    if (!content) return 0
    const length = content.length
    const lines = content.split('\n').length
    const baseScore = 85
    const lengthBonus = Math.min(10, length / 100)
    const structureBonus = Math.min(5, lines / 5)
    return Math.round(baseScore + lengthBonus + structureBonus)
  }

  const handleCopy = (id) => {
    if (outputs[id]) {
      navigator.clipboard.writeText(outputs[id])
      setCopied(id)
      setTimeout(() => setCopied(null), 2000)
    }
  }

  const handleCopyAll = () => {
    const allText = Object.entries(outputs)
      .map(([id, content]) => {
        const platform = platformsConfig.find(p => p.id === id)
        return `=== ${platform?.name || id} ===\n${content}\n\n`
      })
      .join('')
    
    navigator.clipboard.writeText(allText)
    alert('All outputs copied to clipboard!')
  }

  const handleRegenerate = async (id) => {
    // For now, just show alert. Can be implemented later
    alert('Regenerate feature coming soon! For now, generate new content.')
  }

  const handleSaveEdit = () => {
    // Save edited content to localStorage
    const resultsString = localStorage.getItem('ghostwrite_results')
    if (resultsString) {
      const results = JSON.parse(resultsString)
      if (results[editing]) {
        results[editing].content = outputs[editing]
        localStorage.setItem('ghostwrite_results', JSON.stringify(results))
      }
    }
    setEditing(null)
  }

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-text-secondary">Loading your results...</p>
        </div>
      </div>
    )
  }

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
              No Results Found
            </h2>
            <p className="text-text-secondary mb-6">{error}</p>
            <Link 
              to="/app/new" 
              className="w-full py-3 bg-primary text-white rounded-btn font-semibold hover:bg-primary-hover transition-all inline-block"
            >
              Generate New Content
            </Link>
          </div>
        </main>
      </div>
    )
  }

  // Filter to only show platforms with content
  const platforms = platformsConfig.filter(p => outputs[p.id])

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-background-card border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-text-primary">GhostWrite</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/app/new" className="btn-primary text-sm py-2 px-4">
              <Plus className="w-4 h-4" /> New Content
            </Link>
            <Link to="/app/settings" className="text-sm font-medium text-text-secondary hover:text-primary">Settings</Link>
          </div>
        </div>
      </header>

      {/* Stats bar */}
      <div className="bg-primary-muted border-b border-border-hover">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-primary font-medium">
            <Check className="w-4 h-4" /> {platforms.length} formats generated
            <span className="text-text-tertiary">•</span>
            <span className="text-green-500">✨ AI Generated</span>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={handleCopyAll}
              className="text-sm font-medium text-text-secondary hover:text-primary flex items-center gap-1"
            >
              <Copy className="w-4 h-4" /> Copy All
            </button>
            <button className="text-sm font-medium text-text-secondary hover:text-primary flex items-center gap-1">
              <Share className="w-4 h-4" /> Share
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <div className="bg-background-card rounded-card border border-border p-4 sticky top-24">
              <h2 className="font-bold text-text-primary mb-4">Your Outputs</h2>
              <div className="space-y-1">
                {platforms.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setActivePlatform(p.id)
                      document.getElementById(p.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                      activePlatform === p.id
                        ? 'bg-primary-muted text-primary border-l-2 border-primary'
                        : 'text-text-secondary hover:bg-background'
                    }`}
                  >
                    <p.icon className="w-4 h-4" />
                    <span className="flex-1 text-left">{p.name}</span>
                    <span
                      onClick={(e) => {
                        e.stopPropagation()
                        handleCopy(p.id)
                      }}
                      className="text-text-tertiary hover:text-primary cursor-pointer"
                    >
                      {copied === p.id ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
                    </span>
                  </button>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-border space-y-2">
                <button 
                  onClick={handleCopyAll}
                  className="w-full py-2 border border-primary text-primary rounded-btn text-sm font-semibold hover:bg-primary-muted transition-colors"
                >
                  Copy All Outputs
                </button>
              </div>
            </div>
          </div>

          {/* Main output grid */}
          <div className="lg:col-span-9 space-y-6">
            {platforms.map((p) => {
              const content = outputs[p.id] || ''
              const score = calculateScore(content)
              const wordCount = content.split(/\s+/).filter(Boolean).length
              
              return (
                <motion.div
                  key={p.id}
                  id={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`bg-background-card rounded-card border border-border p-6 transition-all ${activePlatform === p.id ? 'ring-2 ring-primary/20' : ''}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-muted flex items-center justify-center">
                        <p.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-text-primary">{p.name}</h3>
                        <span className="text-xs text-text-secondary">{p.format}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setEditing(editing === p.id ? null : p.id)}
                        className="p-2 rounded-lg border border-border text-text-secondary hover:text-primary hover:border-primary/30 transition-colors"
                        title="Edit"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleCopy(p.id)}
                        className="px-3 py-2 rounded-lg border border-border text-text-secondary hover:text-primary hover:border-primary/30 transition-colors flex items-center gap-1 text-sm font-medium"
                      >
                        {copied === p.id ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
                        {copied === p.id ? 'Copied!' : 'Copy'}
                      </button>
                      <button
                        onClick={() => handleRegenerate(p.id)}
                        className="p-2 rounded-lg border border-border text-text-secondary hover:text-primary hover:border-primary/30 transition-colors"
                        title="Regenerate"
                      >
                        <RefreshCw className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="bg-background rounded-lg p-4 text-sm text-text-primary leading-relaxed whitespace-pre-wrap">
                    {editing === p.id ? (
                      <textarea
                        value={outputs[p.id]}
                        onChange={(e) => setOutputs({ ...outputs, [p.id]: e.target.value })}
                        className="w-full min-h-[200px] bg-transparent outline-none resize-none"
                      />
                    ) : (
                      content
                    )}
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-4 text-xs text-text-secondary">
                      <span>{wordCount} words</span>
                      <span>{content.length} chars</span>
                      <span className="text-primary font-medium">Quality Score: {score}/100 ✓</span>
                    </div>
                    <div className="text-xs text-text-tertiary flex items-center gap-1">
                      💡 {tips[p.id]}
                    </div>
                  </div>

                  {editing === p.id && (
                    <div className="mt-4 flex gap-2">
                      <button
                        onClick={handleSaveEdit}
                        className="px-4 py-2 bg-primary text-white rounded-btn text-sm font-semibold"
                      >
                        Save Changes
                      </button>
                      <button
                        onClick={() => setEditing(null)}
                        className="px-4 py-2 border border-border text-text-secondary rounded-btn text-sm font-semibold hover:bg-background"
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}

export default AppResults