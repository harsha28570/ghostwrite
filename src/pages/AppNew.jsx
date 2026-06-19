import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, LinkIcon, Clipboard, Upload, Check, Sparkles, ArrowRight, X } from 'lucide-react'

const inputTabs = [
  { id: 'paste', label: 'Paste Text', icon: Clipboard },
  { id: 'file', label: 'Upload File', icon: Upload },
  { id: 'url', label: 'URL Import', icon: LinkIcon },
]

const contentTypes = ['Blog Post', 'YouTube Script', 'Podcast Transcript', 'Article', 'Other']

const platforms = [
  'Twitter', 'LinkedIn', 'Instagram', 'Email', 'TikTok', 'YouTube', 'Facebook', 'Pinterest', 'Reddit', 'Blog Summary'
]

function AppNew() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('paste')
  const [text, setText] = useState('')
  const [contentType, setContentType] = useState('Blog Post')
  const [selectedPlatforms, setSelectedPlatforms] = useState([...platforms])
  const [keywords, setKeywords] = useState(['content marketing', 'AI tools'])
  const [keywordInput, setKeywordInput] = useState('')
  const [sliders, setSliders] = useState({ tone: 65, formality: 25, length: 50 })
  const [audience, setAudience] = useState('')
  const [perspective, setPerspective] = useState('First Person (I/We)')

  const addKeyword = (e) => {
    if (e.key === 'Enter' && keywordInput.trim()) {
      e.preventDefault()
      setKeywords([...keywords, keywordInput.trim()])
      setKeywordInput('')
    }
  }

  const removeKeyword = (kw) => setKeywords(keywords.filter((k) => k !== kw))

  const togglePlatform = (p) => {
    setSelectedPlatforms((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    )
  }

  const selectAll = () => setSelectedPlatforms([...platforms])

  const handleGenerate = () => {
    // Determine brand voice based on sliders
    const tone = sliders.tone < 33 ? 'casual' : sliders.tone < 66 ? 'balanced' : 'professional'
    const formality = sliders.formality < 33 ? 'relaxed' : sliders.formality < 66 ? 'balanced' : 'formal'
    const length = sliders.length < 33 ? 'concise' : sliders.length < 66 ? 'balanced' : 'detailed'
    
    const brandVoice = `${tone}, ${formality}, ${length}`

    // Save all data to localStorage to pass to next page
    const generationData = {
      content: text,
      contentType,
      platforms: selectedPlatforms,
      keywords,
      brandVoice,
      perspective,
      audience: audience || 'general audience',
      tone,
      formality,
      length,
    }

    localStorage.setItem('ghostwrite_generation', JSON.stringify(generationData))
    
    // Navigate to processing page
    navigate('/app/processing')
  }

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length

  return (
    <div className="min-h-screen bg-background">
      {/* App header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="font-heading text-lg font-semibold text-white tracking-tight">
            GhostWrite
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-text-secondary">Free Plan</span>
            <Link to="/app/settings" className="text-sm font-medium text-primary hover:text-primary-light">Settings</Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: Upload area */}
          <div className="lg:col-span-3">
            <div className="bg-background-card rounded-card-lg border border-border  p-6 lg:p-8">
              <h1 className="text-2xl font-bold text-text-primary mb-1">New Content</h1>
              <p className="text-text-secondary mb-6">Paste or upload your content below</p>

              {/* Input tabs */}
              <div className="flex gap-2 mb-6 p-1 bg-background rounded-lg w-fit">
                {inputTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === tab.id ? 'bg-background-card text-primary ' : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" /> {tab.label}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {activeTab === 'paste' && (
                  <motion.div
                    key="paste"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <textarea
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Paste your blog post, video script, article, or any long-form content here...&#10;&#10;The longer and richer your content, the better GhostWrite performs."
                      className="w-full min-h-[320px] p-5 bg-background border border-border rounded-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none text-text-primary leading-relaxed"
                    />
                    <div className="mt-2 text-right text-xs text-text-tertiary">
                      {wordCount} words — Minimum 50 words recommended
                    </div>
                  </motion.div>
                )}

                {activeTab === 'file' && (
                  <motion.div
                    key="file"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="border-2 border-dashed border-border-hover rounded-card bg-primary-muted/20 p-12 text-center"
                  >
                    <Upload className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="font-semibold text-text-primary">Drag files here or click to browse</p>
                    <p className="text-sm text-text-secondary mt-1">Supports: PDF, DOCX, TXT — Max 10MB</p>
                    <p className="text-xs text-text-tertiary mt-3">Coming soon</p>
                  </motion.div>
                )}

                {activeTab === 'url' && (
                  <motion.div
                    key="url"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <input
                      type="url"
                      placeholder="https://yourblogpost.com/article"
                      className="w-full px-4 py-3 bg-background border border-border rounded-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-text-primary"
                    />
                    <button className="mt-4 btn-primary w-full sm:w-auto" disabled>
                      Import Article (Coming Soon) <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Content type selector */}
              <div className="mt-8">
                <p className="text-sm font-semibold text-text-primary mb-3">What type of content is this?</p>
                <div className="flex flex-wrap gap-2">
                  {contentTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setContentType(type)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        contentType === type
                          ? 'bg-primary text-white'
                          : 'bg-background text-text-secondary hover:bg-primary-muted hover:text-primary'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Platform selector */}
            <div className="bg-background-card rounded-card-lg border border-border  p-6 lg:p-8 mt-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-semibold text-text-primary">Which platforms do you need?</p>
                <button onClick={selectAll} className="text-sm text-primary hover:text-primary-light font-medium">
                  Select all 10
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {platforms.map((platform) => (
                  <button
                    key={platform}
                    onClick={() => togglePlatform(platform)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-medium transition-colors ${
                      selectedPlatforms.includes(platform)
                        ? 'border-primary bg-primary-muted text-primary'
                        : 'border-border text-text-secondary hover:border-primary/40'
                    }`}
                  >
                    {selectedPlatforms.includes(platform) ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <div className="w-4 h-4 rounded border border-text-tertiary" />
                    )}
                    {platform}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Brand voice panel */}
          <div className="lg:col-span-2">
            <div className="bg-background-card rounded-card-lg border border-border  p-6 lg:p-8 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-text-primary">Brand Voice Settings</h2>
                <label className="flex items-center gap-2 text-sm text-text-secondary cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-primary text-primary focus:ring-primary" />
                  Save as template
                </label>
              </div>

              {[
                { id: 'tone', label: 'Tone', left: 'Casual', right: 'Professional' },
                { id: 'formality', label: 'Formality', left: 'Relaxed', right: 'Formal' },
                { id: 'length', label: 'Output Length', left: 'Concise', right: 'Detailed' },
              ].map((slider) => (
                <div key={slider.id} className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-text-primary">{slider.label}</span>
                    <span className="text-text-secondary">
                      {sliders[slider.id] < 33 ? slider.left : sliders[slider.id] < 66 ? 'Balanced' : slider.right}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliders[slider.id]}
                    onChange={(e) => setSliders({ ...sliders, [slider.id]: parseInt(e.target.value) })}
                    className="w-full h-2 bg-background-surface rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-xs text-text-tertiary mt-1">
                    <span>{slider.left}</span>
                    <span>{slider.right}</span>
                  </div>
                </div>
              ))}

              {/* Keywords to include */}
              <div className="mb-6">
                <label className="text-sm font-medium text-text-primary mb-2 block">Keywords to include</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {keywords.map((kw) => (
                    <span key={kw} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-muted text-primary text-xs font-medium">
                      {kw}
                      <button onClick={() => removeKeyword(kw)}>
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
                <input
                  type="text"
                  value={keywordInput}
                  onChange={(e) => setKeywordInput(e.target.value)}
                  onKeyDown={addKeyword}
                  placeholder="Add keyword and press Enter"
                  className="w-full px-3 py-2 bg-background border border-border rounded-input text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                />
              </div>

              {/* Perspective */}
              <div className="mb-6">
                <label className="text-sm font-medium text-text-primary mb-2 block">Perspective</label>
                <select 
                  value={perspective}
                  onChange={(e) => setPerspective(e.target.value)}
                  className="w-full px-3 py-2 bg-background border border-border rounded-input text-sm focus:border-primary outline-none"
                >
                  <option>First Person (I/We)</option>
                  <option>Second Person (You)</option>
                  <option>Third Person (They)</option>
                </select>
              </div>

              {/* Audience */}
              <div className="mb-8">
                <label className="text-sm font-medium text-text-primary mb-2 block">Target Audience</label>
                <input
                  type="text"
                  value={audience}
                  onChange={(e) => setAudience(e.target.value)}
                  placeholder="Tech-savvy startup founders"
                  className="w-full px-3 py-2 bg-background border border-border rounded-input text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                />
              </div>

              {/* Generate button */}
              <button
                onClick={handleGenerate}
                disabled={wordCount < 10 || selectedPlatforms.length === 0}
                className="w-full h-14 bg-primary text-white rounded-btn font-semibold text-lg shadow-glow-sm hover:shadow-glow-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" /> Generate {selectedPlatforms.length} Formats
              </button>
              <p className="text-center text-xs text-text-tertiary mt-3">
                {wordCount} words — {wordCount >= 10 ? 'Ready to generate ✓' : 'Add at least 10 words to continue'}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AppNew