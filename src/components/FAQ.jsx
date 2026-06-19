import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Search, MessageCircle, Sparkles } from 'lucide-react'

const faqs = [
  { 
    q: 'How does GhostWrite work?', 
    a: 'Paste or upload your long-form content. GhostWrite reads it, extracts key messages, and generates 10 platform-optimized formats in under 30 seconds using advanced AI.',
    category: 'Getting Started'
  },
  { 
    q: 'What types of content can I upload?', 
    a: 'Text paste, PDFs, Word documents, URL imports, and podcast or video transcripts. Any text-based content works perfectly with GhostWrite.',
    category: 'Getting Started'
  },
  { 
    q: 'How accurate is the AI output?', 
    a: 'GhostWrite uses advanced AI models with platform-specific prompts. Outputs are context-aware and optimized for each platform. We recommend a quick review before publishing.',
    category: 'AI & Quality'
  },
  { 
    q: 'How long does generation take?', 
    a: 'Most generations complete in under 30 seconds. Longer inputs may take slightly more time, but rarely more than 60 seconds.',
    category: 'AI & Quality'
  },
  { 
    q: 'Can I customize outputs for each platform?', 
    a: 'Yes! Edit any output inline, set your brand voice, save templates, and customize tone/length sliders for different styles.',
    category: 'Customization'
  },
  { 
    q: 'Can I upgrade or downgrade anytime?', 
    a: 'Absolutely. Change your plan from account settings. Changes take effect immediately with prorated billing.',
    category: 'Billing'
  },
  { 
    q: 'Is my content used to train AI?', 
    a: 'No, never. Your content is processed only to generate your outputs and is never used for model training. Your data stays yours.',
    category: 'Privacy'
  },
  { 
    q: 'What payment methods do you accept?', 
    a: 'Credit/debit cards, UPI, net banking via Razorpay for India. Stripe for international customers. All payments are secure and encrypted.',
    category: 'Billing'
  },
]

const categories = ['All', 'Getting Started', 'AI & Quality', 'Customization', 'Billing', 'Privacy']

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         faq.a.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <section id="faq" className="py-24 border-t border-border relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm"
          >
            <MessageCircle className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-sm text-purple-200 font-medium">
              Got questions?
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4"
            style={{ letterSpacing: '-0.04em' }}
          >
            Frequently asked <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">questions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400"
          >
            Everything you need to know about GhostWrite.
          </motion.p>
        </div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-background-card border border-border rounded-xl text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
            />
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-2 mb-8 justify-center"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-background-card text-gray-400 border border-border hover:border-purple-500/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="space-y-3"
        >
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-background-card rounded-xl border border-border">
              <Sparkles className="w-12 h-12 text-purple-500/50 mx-auto mb-3" />
              <p className="text-gray-400">No questions found matching your search.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="text-purple-400 hover:text-purple-300 mt-2 text-sm"
              >
                Clear filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((item, i) => (
              <FAQItem
                key={item.q}
                item={item}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                delay={i * 0.05}
              />
            ))
          )}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-400 mb-6">
            Can't find the answer you're looking for? We're here to help.
          </p>
          <a
            href="mailto:support@ghostwrite.app"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
          >
            <MessageCircle className="w-4 h-4" />
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function FAQItem({ item, isOpen, onClick, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`group rounded-xl border transition-all duration-300 overflow-hidden ${
        isOpen 
          ? 'bg-purple-500/5 border-purple-500/40 shadow-lg shadow-purple-500/10' 
          : 'bg-background-card border-border hover:border-purple-500/30'
      }`}
    >
      <button
        onClick={onClick}
        className="w-full p-5 flex items-center justify-between text-left"
      >
        <div className="flex-1 pr-4">
          <span className={`text-xs font-medium uppercase tracking-wider mb-1 block transition-colors ${
            isOpen ? 'text-purple-400' : 'text-gray-600 group-hover:text-purple-400/70'
          }`}>
            {item.category}
          </span>
          <span className={`text-base font-medium transition-colors ${
            isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white'
          }`}>
            {item.q}
          </span>
        </div>
        
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all ${
            isOpen 
              ? 'bg-purple-500 text-white' 
              : 'bg-background border border-border text-gray-400 group-hover:border-purple-500/50 group-hover:text-purple-400'
          }`}
        >
          <Plus className="w-4 h-4" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5">
              <div className="h-px bg-gradient-to-r from-purple-500/20 via-purple-500/40 to-purple-500/20 mb-4" />
              <p className="text-gray-400 leading-relaxed">
                {item.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default FAQ