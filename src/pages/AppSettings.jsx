import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Zap, User, Palette, Save, CreditCard, Check, X, Plus, Trash2, Copy } from 'lucide-react'

const tabs = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'brand', label: 'Brand Voice', icon: Palette },
  { id: 'templates', label: 'Templates', icon: Save },
  { id: 'billing', label: 'Billing', icon: CreditCard },
]

const initialTemplates = [
  { name: "Sarah's Fitness Brand", tone: 'Energetic', formality: 30, length: 40 },
  { name: 'TechStartup Client', tone: 'Professional', formality: 80, length: 60 },
  { name: 'Personal Blog', tone: 'Casual', formality: 20, length: 70 },
]

function AppSettings() {
  const [activeTab, setActiveTab] = useState('brand')
  const [sliders, setSliders] = useState({ tone: 65, formality: 25, length: 50 })
  const [templates, setTemplates] = useState(initialTemplates)

  const addTemplate = () => {
    setTemplates([...templates, { name: 'New Template', tone: 'Balanced', formality: 50, length: 50 }])
  }

  const removeTemplate = (index) => {
    setTemplates(templates.filter((_, i) => i !== index))
  }

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
          <div className="flex items-center gap-4">
            <Link to="/app/new" className="btn-primary text-sm py-2 px-4">New Content</Link>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-text-primary mb-6">Settings</h1>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Tabs */}
          <div className="md:col-span-1">
            <div className="bg-background-card rounded-card border border-border p-2 sticky top-24">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-primary-muted text-primary'
                      : 'text-text-secondary hover:bg-background'
                  }`}
                >
                  <tab.icon className="w-4 h-4" /> {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-3">
            {activeTab === 'profile' && (
              <div className="bg-background-card rounded-card-lg border border-border p-6">
                <h2 className="text-lg font-bold text-text-primary mb-4">Profile</h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-text-primary block mb-1">Name</label>
                    <input type="text" defaultValue="John Doe" className="w-full px-3 py-2 border border-border rounded-input focus:border-primary outline-none" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-text-primary block mb-1">Email</label>
                    <input type="email" defaultValue="john@example.com" className="w-full px-3 py-2 border border-border rounded-input focus:border-primary outline-none" />
                  </div>
                  <button className="btn-primary text-sm">Save Profile</button>
                </div>
              </div>
            )}

            {activeTab === 'brand' && (
              <div className="bg-background-card rounded-card-lg border border-border p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold text-text-primary">Default Brand Voice</h2>
                  <button className="px-4 py-2 border border-primary text-primary rounded-btn text-sm font-semibold hover:bg-primary-muted transition-colors">
                    Test Voice
                  </button>
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
                <button className="btn-primary text-sm">Save Default Voice</button>
              </div>
            )}

            {activeTab === 'templates' && (
              <div className="bg-background-card rounded-card-lg border border-border p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold text-text-primary">Brand Voice Templates</h2>
                  <button
                    onClick={addTemplate}
                    className="flex items-center gap-1 px-4 py-2 bg-primary text-white rounded-btn text-sm font-semibold"
                  >
                    <Plus className="w-4 h-4" /> New Template
                  </button>
                </div>
                <div className="space-y-4">
                  {templates.map((template, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 border border-border rounded-card bg-background"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <input
                          type="text"
                          value={template.name}
                          onChange={(e) => {
                            const newTemplates = [...templates]
                            newTemplates[i].name = e.target.value
                            setTemplates(newTemplates)
                          }}
                          className="font-semibold text-text-primary bg-transparent border-b border-transparent hover:border-border focus:border-primary outline-none"
                        />
                        <div className="flex gap-2">
                          <button className="p-1.5 text-text-tertiary hover:text-primary">
                            <Copy className="w-4 h-4" />
                          </button>
                          <button onClick={() => removeTemplate(i)} className="p-1.5 text-text-tertiary hover:text-red-500">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-text-tertiary">Tone</span>
                          <p className="font-medium text-text-primary">{template.tone}</p>
                        </div>
                        <div>
                          <span className="text-text-tertiary">Formality</span>
                          <p className="font-medium text-text-primary">{template.formality}%</p>
                        </div>
                        <div>
                          <span className="text-text-tertiary">Length</span>
                          <p className="font-medium text-text-primary">{template.length}%</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'billing' && (
              <div className="space-y-6">
                <div className="bg-primary rounded-card-lg p-6 text-white">
                  <p className="text-sm text-white/80 mb-1">Current Plan</p>
                  <h2 className="text-3xl font-bold mb-2">Free Forever</h2>
                  <p className="text-white/80 mb-4">3 content pieces per month • 5 platform formats</p>
                  <button className="px-4 py-2 bg-background-card text-primary rounded-btn font-semibold text-sm hover:bg-background-card/90 transition-colors">
                    Upgrade to Pro
                  </button>
                </div>

                <div className="bg-background-card rounded-card-lg border border-border p-6">
                  <h3 className="text-lg font-bold text-text-primary mb-4">Usage This Month</h3>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-text-secondary">Content pieces used</span>
                    <span className="font-semibold text-text-primary">0 / 3</span>
                  </div>
                  <div className="h-3 bg-background-surface rounded-full overflow-hidden mb-6">
                    <div className="h-full w-0 bg-primary rounded-full" />
                  </div>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 bg-primary text-white rounded-btn text-sm font-semibold">Upgrade Plan</button>
                    <button className="px-4 py-2 border border-border text-text-secondary rounded-btn text-sm font-semibold hover:bg-background">Payment Methods</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default AppSettings
