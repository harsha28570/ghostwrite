import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Search,
  MessageCircle,
  Sparkles,
  Rocket,
  Zap,
  Palette,
  CreditCard,
  Shield,
  HelpCircle,
} from "lucide-react";

const faqs = [
  {
    q: "How does GhostWrite work?",
    a: "Paste or upload your long-form content. GhostWrite reads it, extracts key messages, and generates 10 platform-optimized formats in under 30 seconds using advanced AI.",
    category: "Getting Started",
  },
  {
    q: "What types of content can I upload?",
    a: "Text paste, PDFs, Word documents, URL imports, and podcast or video transcripts. Any text-based content works perfectly with GhostWrite.",
    category: "Getting Started",
  },
  {
    q: "How accurate is the AI output?",
    a: "GhostWrite uses advanced AI models with platform-specific prompts. Outputs are context-aware and optimized for each platform. We recommend a quick review before publishing.",
    category: "AI & Quality",
  },
  {
    q: "How long does generation take?",
    a: "Most generations complete in under 30 seconds. Longer inputs may take slightly more time, but rarely more than 60 seconds.",
    category: "AI & Quality",
  },
  {
    q: "Can I customize outputs for each platform?",
    a: "Yes! Edit any output inline, set your brand voice, save templates, and customize tone/length sliders for different styles.",
    category: "Customization",
  },
  {
    q: "Can I upgrade or downgrade anytime?",
    a: "Absolutely. Change your plan from account settings. Changes take effect immediately with prorated billing.",
    category: "Billing",
  },
  {
    q: "Is my content used to train AI?",
    a: "No, never. Your content is processed only to generate your outputs and is never used for model training. Your data stays yours.",
    category: "Privacy",
  },
  {
    q: "What payment methods do you accept?",
    a: "Credit/debit cards, UPI, net banking via Razorpay for India. Stripe for international customers. All payments are secure and encrypted.",
    category: "Billing",
  },
];

const categories = [
  { name: "All", icon: HelpCircle, color: "#DC2626" },
  { name: "Getting Started", icon: Rocket, color: "#DC2626" },
  { name: "AI & Quality", icon: Zap, color: "#DC2626" },
  { name: "Customization", icon: Palette, color: "#DC2626" },
  { name: "Billing", icon: CreditCard, color: "#DC2626" },
  { name: "Privacy", icon: Shield, color: "#DC2626" },
];

const getCategoryColor = (categoryName) => {
  return categories.find((c) => c.name === categoryName)?.color || "#DC2626";
};

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section
      id="faq"
      className="relative py-24 sm:py-32 overflow-hidden bg-[#1A1A1A]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(ellipse, rgba(220, 38, 38, 0.4) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(245,241,232,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,241,232,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full backdrop-blur-xl"
            style={{
              background: "rgba(245, 241, 232, 0.05)",
              border: "1px solid rgba(245, 241, 232, 0.1)",
            }}
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#DC2626]" />
            <span className="text-[13px] font-medium text-[#F5F1E8]/80">
              Got questions?
            </span>
          </div>

          <h2
            className="mb-4"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.045em",
              color: "#F5F1E8",
            }}
          >
            Frequently asked{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #DC2626 0%, #EF4444 50%, #DC2626 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              questions.
            </span>
          </h2>

          <p className="text-[17px] text-[#F5F1E8]/60">
            Everything you need to know about GhostWrite.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#F5F1E8]/40 group-focus-within:text-[#DC2626] transition-colors" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 text-[14px] text-[#F5F1E8] placeholder:text-[#F5F1E8]/40 rounded-2xl outline-none transition-all"
              style={{
                background: "rgba(245, 241, 232, 0.03)",
                border: "1px solid rgba(245, 241, 232, 0.08)",
                backdropFilter: "blur(20px)",
              }}
            />
            {!searchQuery && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <kbd
                  className="px-2 py-0.5 text-[10px] font-mono text-[#F5F1E8]/40 rounded"
                  style={{
                    background: "rgba(245, 241, 232, 0.05)",
                    border: "1px solid rgba(245, 241, 232, 0.1)",
                  }}
                >
                  ⌘K
                </kbd>
              </div>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium transition-all duration-300`}
              style={{
                background:
                  selectedCategory === cat.name
                    ? `${cat.color}20`
                    : "rgba(245, 241, 232, 0.03)",
                border: `1px solid ${selectedCategory === cat.name ? cat.color + "60" : "rgba(245, 241, 232, 0.08)"}`,
                color:
                  selectedCategory === cat.name
                    ? cat.color
                    : "rgba(245, 241, 232, 0.6)",
              }}
            >
              <cat.icon className="w-3 h-3" />
              {cat.name}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-2">
          {filteredFaqs.length === 0 ? (
            <div
              className="text-center py-12 rounded-2xl"
              style={{
                background: "rgba(245, 241, 232, 0.03)",
                border: "1px solid rgba(245, 241, 232, 0.08)",
              }}
            >
              <Sparkles className="w-10 h-10 text-[#DC2626]/50 mx-auto mb-3" />
              <p className="text-[#F5F1E8]/60 text-[14px] mb-2">
                No questions found matching your search.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="text-[#DC2626] hover:text-[#EF4444] text-[13px] font-medium"
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
                color={getCategoryColor(item.category)}
              />
            ))
          )}
        </div>

        {/* Bottom CTA - Beautiful Card */}
        <div className="mt-12">
          <div
            className="relative rounded-3xl p-8 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(220, 38, 38, 0.08) 0%, rgba(220, 38, 38, 0.12) 50%, rgba(220, 38, 38, 0.08) 100%)",
              border: "1px solid rgba(220, 38, 38, 0.2)",
            }}
          >
            {/* Decorative gradient */}
            <div
              className="absolute -top-24 -right-24 w-48 h-48 rounded-full opacity-30 blur-3xl"
              style={{ background: "#DC2626" }}
            />
            <div
              className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full opacity-30 blur-3xl"
              style={{ background: "#DC2626" }}
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 justify-between">
              <div className="text-center md:text-left">
                <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)",
                    }}
                  >
                    <MessageCircle className="w-4 h-4 text-[#F5F1E8]" />
                  </div>
                  <h3
                    className="text-xl font-bold text-[#F5F1E8]"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    Still need help?
                  </h3>
                </div>
                <p className="text-[14px] text-[#F5F1E8]/60 max-w-md">
                  Our team responds within 24 hours. Get the answers you need.
                </p>
              </div>

              <a
                href="mailto:support@ghostwrite.app"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[#F5F1E8] font-medium text-[14px] transition-all duration-300 hover:scale-105 shrink-0"
                style={{
                  background:
                    "linear-gradient(180deg, #DC2626 0%, #B91C1C 100%)",
                  boxShadow:
                    "inset 0 1px 0 rgba(245,241,232,0.2), 0 10px 30px rgba(220, 38, 38, 0.4)",
                }}
              >
                <MessageCircle className="w-4 h-4" />
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ item, isOpen, onClick, color }) {
  return (
    <div
      className="group rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: isOpen ? `${color}08` : "rgba(245, 241, 232, 0.02)",
        border: `1px solid ${isOpen ? color + "30" : "rgba(245, 241, 232, 0.06)"}`,
        boxShadow: isOpen ? `0 10px 30px ${color}10` : "none",
      }}
    >
      <button
        onClick={onClick}
        className="w-full p-5 flex items-center justify-between text-left"
      >
        <div className="flex-1 pr-4">
          <div className="flex items-center gap-2 mb-1">
            <span
              className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
              style={{
                background: `${color}15`,
                color: color,
                border: `1px solid ${color}30`,
              }}
            >
              {item.category}
            </span>
          </div>
          <span
            className="text-[15px] font-medium transition-colors block"
            style={{
              color: isOpen ? "#F5F1E8" : "rgba(245, 241, 232, 0.85)",
            }}
          >
            {item.q}
          </span>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all"
          style={{
            background: isOpen ? color : "rgba(245, 241, 232, 0.05)",
            border: `1px solid ${isOpen ? color : "rgba(245, 241, 232, 0.1)"}`,
          }}
        >
          <Plus
            className="w-3.5 h-3.5"
            strokeWidth={2.5}
            style={{
              color: isOpen ? "#F5F1E8" : "rgba(245, 241, 232, 0.6)",
            }}
          />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5">
              <div
                className="h-px mb-4"
                style={{
                  background: `linear-gradient(90deg, transparent, ${color}40, transparent)`,
                }}
              />
              <p className="text-[14px] text-[#F5F1E8]/70 leading-relaxed">
                {item.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FAQ;
