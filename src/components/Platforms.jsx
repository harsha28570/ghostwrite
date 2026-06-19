import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Check, Twitter, Linkedin, Instagram, Mail, Facebook, Music2, Youtube, Pin, MessageSquare, FileText } from 'lucide-react'

const platforms = [
  {
    id: 'twitter',
    name: 'Twitter / X',
    icon: Twitter,
    badge: 'Thread — 5-7 Tweets',
    accent: '#1DA1F2',
    preview: `🧵 Thread: The content marketing game is changing.\nHere's everything you need to know in 2025:\n\n(1/7)\n\n1/ Most creators are leaving traffic on the table...`,
    detail: 'Optimized for: Engagement + algorithmic reach',
    count: '280 chars/tweet — hook tested',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: Linkedin,
    badge: 'Professional Post',
    accent: '#0077B5',
    preview: `Content marketing in 2025 is unrecognizable from what it was 3 years ago.\n\nHere's what I've learned after analyzing 500+ high-performing LinkedIn posts:\n\nThe creators winning right now are doing...`,
    detail: 'Optimized for: Professional authority + saves',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: Instagram,
    badge: 'Caption + Hashtags',
    accent: '#E1306C',
    preview: `Your content strategy is either working FOR you or AGAINST you in 2025. 🔥\n\nSave this post because you'll need it later 👇\n\n#ContentMarketing #CreatorEconomy #DigitalMarketing`,
    detail: 'Optimized for: Saves + reach + hashtag strategy',
  },
  {
    id: 'email',
    name: 'Email',
    icon: Mail,
    badge: 'Newsletter',
    accent: '#10B981',
    preview: `Subject: The content strategy most creators ignore\nPreview: This changes everything about how you publish...\n\nHey [Name],\n\nI want to share something that completely...`,
    detail: 'Subject line A/B tested for open rates',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    icon: Facebook,
    badge: 'Conversational Post',
    accent: '#1877F2',
    preview: `Hot take: Most content advice you've seen is outdated.\n\nI've been in the content game for 7 years and the #1 mistake I see creators making is...`,
    detail: 'Optimized for: Comments + shares',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    icon: Music2,
    badge: 'Video Script',
    accent: '#FF0050',
    preview: `HOOK: Wait — you're still manually rewriting content?\n\n[Point to text overlay] This is taking 10+ hours weekly.\n\nCONTENT: Here's the system that changed everything:\n\nCTA: Follow for more creator hacks 🎯`,
    detail: 'Hook-optimized for first 3 seconds retention',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    icon: Youtube,
    badge: 'SEO Description',
    accent: '#FF0000',
    preview: `Content Marketing Masterclass 2025 | Complete Guide\n\nIn this video, I break down the exact content strategy that helped me grow from 0 to 100k...\n\nCHAPTERS:\n00:00 - Introduction`,
    detail: 'Keyword-optimized for YouTube SEO ranking',
  },
  {
    id: 'pinterest',
    name: 'Pinterest',
    icon: Pin,
    badge: 'Pin Description',
    accent: '#E60023',
    preview: `💡 Save this! The ultimate content marketing strategy guide for 2025.\n\nLearn how top creators repurpose one piece of content into 10 platform formats...`,
    detail: 'Optimized for: Pinterest search + saves',
  },
  {
    id: 'reddit',
    name: 'Reddit',
    icon: MessageSquare,
    badge: 'Community Post',
    accent: '#FF4500',
    preview: `I spent 6 months testing every content strategy I could find. Here's what actually works (data inside)\n\nNot trying to sell anything — just sharing what worked for my niche after a lot of trial and error...`,
    detail: 'Authentic tone — anti-spam, community-first',
  },
  {
    id: 'blog',
    name: 'Blog TLDR',
    icon: FileText,
    badge: 'Summary + Key Points',
    accent: '#6B7280',
    preview: `TL;DR — Content Marketing 2025\n\nKEY POINTS:\n• Repurposing beats creating from scratch\n• Platform-native content outperforms\n• AI tools have made this faster than ever\n\nREAD TIME: 2 min summary of a 15-min article`,
    detail: 'Perfect for LinkedIn articles + blog previews',
  },
]

const sampleInput = `The Complete Guide to Content Marketing in 2025\n\nContent marketing has evolved dramatically. The creators and brands winning today don't just create more content — they repurpose smartly. One strong piece of long-form content can fuel an entire week of platform-native posts across Twitter, LinkedIn, Instagram, email, and more. The key is understanding each platform's algorithm and audience behavior, then matching your message to the format without losing your core insight.`

function PlatformCard({ platform, index, onClick, copied, onCopy }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onClick={() => onClick(platform.id)}
      className="group bg-white rounded-card border border-border p-6 shadow-sm hover:shadow-purple hover:border-border-purple hover:-translate-y-1 transition-all duration-250 cursor-pointer"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: `${platform.accent}15` }}
          >
            <platform.icon className="w-5 h-5" style={{ color: platform.accent }} />
          </div>
          <span className="font-semibold text-text-primary">{platform.name}</span>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-primary-soft text-primary text-[11px] font-semibold">
          {platform.badge}
        </span>
      </div>

      <div className="bg-background-alt rounded-lg p-3 mb-4 font-mono text-[13px] text-text-primary whitespace-pre-wrap min-h-[100px]">
        {platform.preview}
      </div>

      <div className="flex items-center justify-between text-body-sm text-text-secondary">
        <div>
          <p>{platform.detail}</p>
          {platform.count && <p className="text-text-tertiary mt-0.5">{platform.count}</p>}
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation()
            onCopy(platform.id)
          }}
          className="p-2 rounded-lg border border-border text-text-tertiary hover:text-primary hover:border-primary/30 transition-colors"
        >
          {copied === platform.id ? <Check className="w-4 h-4 text-accent-green" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
    </motion.div>
  )
}

function Platforms() {
  const [activeTab, setActiveTab] = useState('twitter')
  const [copied, setCopied] = useState(null)

  const handleCopy = (id) => {
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const activePlatform = platforms.find((p) => p.id === activeTab)

  return (
    <section id="platforms" className="bg-primary-soft section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">10 Platform Formats</span>
          <h2 className="mt-4 text-h1 font-extrabold text-text-primary">One Input. Ten Perfected Outputs.</h2>
          <p className="mt-4 text-body-lg text-text-secondary">
            Each format is engineered for its platform's algorithm, audience behavior, and content style. Not copy-pasted. Actually optimized.
          </p>
        </div>

        {/* Platform cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-20">
          {platforms.map((platform, i) => (
            <PlatformCard
              key={platform.id}
              platform={platform}
              index={i}
              onClick={setActiveTab}
              copied={copied}
              onCopy={handleCopy}
            />
          ))}
        </div>

        {/* Live platform switcher */}
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-body-sm text-text-secondary mb-6">
            See it live — click any platform →
          </p>
          <div className="bg-white rounded-card-lg border border-border shadow-md p-6 lg:p-8">
            <div className="flex flex-wrap gap-2 mb-6">
              {platforms.map((platform) => (
                <button
                  key={platform.id}
                  onClick={() => setActiveTab(platform.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === platform.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-50 text-text-secondary hover:bg-primary-soft hover:text-primary'
                  }`}
                >
                  <platform.icon className="w-4 h-4" />
                  {platform.name}
                </button>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <div className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-3">Input</div>
                <div className="bg-background-alt rounded-lg p-4 text-sm text-text-primary leading-relaxed whitespace-pre-wrap">
                  {sampleInput}
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-3">
                  Output for {activePlatform.name}
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="bg-background-alt rounded-lg p-4 font-mono text-sm text-text-primary leading-relaxed whitespace-pre-wrap border-l-4"
                    style={{ borderLeftColor: activePlatform.accent }}
                  >
                    {activePlatform.preview}
                  </motion.div>
                </AnimatePresence>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-body-sm text-text-secondary">{activePlatform.detail}</span>
                  <button
                    onClick={() => handleCopy(activeTab)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-btn text-sm font-semibold text-primary border border-border-purple hover:bg-primary-soft transition-colors"
                  >
                    {copied === activeTab ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    {copied === activeTab ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Platforms
