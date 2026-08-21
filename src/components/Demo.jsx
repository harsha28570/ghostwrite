import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Check,
  Cable,
  Radio,
  Bot,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Music2,
  Youtube,
  Facebook,
  MessageSquare,
  FileText,
  Pin,
  Ghost,
  Zap,
  ArrowRight,
} from "lucide-react";

const platforms = [
  { name: "Twitter Thread", icon: Twitter },
  { name: "LinkedIn Post", icon: Linkedin },
  { name: "Instagram", icon: Instagram },
  { name: "Email Newsletter", icon: Mail },
  { name: "TikTok Script", icon: Music2 },
  { name: "YouTube", icon: Youtube },
  { name: "Facebook Post", icon: Facebook },
  { name: "Pinterest Pin", icon: Pin },
  { name: "Reddit Post", icon: MessageSquare },
  { name: "Blog Summary", icon: FileText },
];

const outputPreviews = {
  0: {
    title: "Twitter Thread",
    content: `🚀 The content marketing game has completely changed in 2025.

Here's what most creators are getting wrong (and how to fix it):

🧵👇`,
  },
  1: {
    title: "LinkedIn Post",
    content: `Content marketing is broken.

Most creators publish once and hope for the best.

But the winners in 2025 are doing something different...`,
  },
  2: {
    title: "Instagram Caption",
    content: `POV: You're leaving 90% of your reach on the table ✨

Save this post to remember what to do differently 👇

#ContentCreator #MarketingTips`,
  },
};

function Demo() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="demo"
      className="relative py-24 sm:py-32 overflow-hidden bg-[#1A1A1A]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(ellipse, rgba(220, 38, 38, 0.4) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(245,241,232,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,241,232,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full backdrop-blur-xl"
            style={{
              background: "rgba(245, 241, 232, 0.05)",
              border: "1px solid rgba(245, 241, 232, 0.12)",
            }}
          >
            <Radio className="w-3.5 h-3.5 text-[#DC2626]" />
            <span className="text-[13px] font-medium text-[#F5F1E8]/80">
              Live Product Demo
            </span>
          </div>

          <h2
            className="mb-6 text-[#F5F1E8]"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.045em",
            }}
          >
            See it{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #DC2626 0%, #EF4444 50%, #DC2626 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              in action.
            </span>
          </h2>

          <p className="text-[17px] sm:text-[19px] text-[#F5F1E8]/60 max-w-2xl mx-auto tracking-tight">
            One input becomes ten platform-perfect outputs.
            <br className="hidden sm:block" />
            No manual rewriting. No wasted hours.
          </p>
        </div>

        {/* MAIN DEMO CONTAINER - CRISP BORDERS & HIGH CONTRAST */}
        <div className="relative max-w-5xl mx-auto">
          {/* Outer Crimson Glow - Identical to Hero */}
          <div className="absolute inset-0 -m-6 rounded-3xl">
            <div
              className="absolute inset-0 rounded-3xl opacity-40 blur-3xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(220, 38, 38, 0.4) 0%, transparent 70%)",
              }}
            />
          </div>

          {/* App Window Box - High Contrast #242424 on #1A1A1A */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: "#242424",
              border: "1px solid rgba(245, 241, 232, 0.15)",
              boxShadow:
                "0 30px 80px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(245, 241, 232, 0.08)",
            }}
          >
            {/* Window Header */}
            <div className="flex items-center gap-3 px-5 py-3.5 border-b border-[#F5F1E8]/10 bg-[#1A1A1A]">
              {/* Traffic Lights */}
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#DC2626]" />
                <div className="w-3 h-3 rounded-full bg-[#F5F1E8]/30" />
                <div className="w-3 h-3 rounded-full bg-[#F5F1E8]/30" />
              </div>

              {/* URL Bar */}
              <div className="flex-1 flex justify-center">
                <div
                  className="flex items-center gap-2 px-4 py-1.5 rounded-lg text-[12px] font-mono text-[#F5F1E8]/60"
                  style={{
                    background: "rgba(245, 241, 232, 0.05)",
                    border: "1px solid rgba(245, 241, 232, 0.1)",
                  }}
                >
                  <Ghost className="w-3.5 h-3.5 text-[#DC2626]" />
                  ghostwrite.ai/generate
                </div>
              </div>

              <div className="w-16" />
            </div>

            {/* Main Content Area */}
            <div className="grid lg:grid-cols-2 min-h-[500px]">
              {/* LEFT: Input Section */}
              <div className="p-8 border-b lg:border-b-0 lg:border-r border-[#F5F1E8]/10 relative overflow-hidden bg-[#1A1A1A]/40">
                {/* Input Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-[#DC2626] flex items-center justify-center">
                      <FileText className="w-3.5 h-3.5 text-[#F5F1E8]" />
                    </div>
                    <span className="text-[13px] font-medium text-[#F5F1E8]/70 uppercase tracking-wider">
                      Original Content
                    </span>
                  </div>
                  <div className="text-[11px] text-[#F5F1E8]/50 font-mono">
                    247 words
                  </div>
                </div>

                {/* Input Content Box */}
                <div
                  className="rounded-xl p-6 h-[320px] overflow-hidden relative"
                  style={{
                    background: "rgba(245, 241, 232, 0.03)",
                    border: "1px solid rgba(245, 241, 232, 0.1)",
                  }}
                >
                  <div className="text-[14px] text-[#F5F1E8]/80 leading-relaxed font-mono">
                    <p className="mb-3">
                      <span className="text-[#DC2626] font-bold">#</span> The
                      Complete Guide to Content Marketing in 2025
                    </p>
                    <p className="mb-3">
                      Most creators are leaving{" "}
                      <span className="text-[#DC2626] font-medium underline underline-offset-4">
                        90% of their potential reach
                      </span>{" "}
                      on the table by publishing content once and moving on.
                    </p>
                    <p className="mb-3">
                      Here's the truth: The winners in 2025 aren't creating more
                      content...
                    </p>
                    <p>
                      They're{" "}
                      <span className="text-[#DC2626] font-medium">
                        repurposing smartly
                      </span>{" "}
                      across every platform where their audience lives.
                      <span className="inline-block w-[2px] h-4 bg-[#DC2626] ml-1 animate-pulse" />
                    </p>
                  </div>

                  {/* Bottom gradient fade */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#242424] to-transparent pointer-events-none" />
                </div>

                {/* Generate Button */}
                <button
                  className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-[#F5F1E8] font-medium text-[14px] transition-all duration-300 hover:scale-[1.02] bg-[#DC2626]"
                  style={{ boxShadow: "0 10px 30px rgba(220, 38, 38, 0.3)" }}
                >
                  <Zap className="w-4 h-4" />
                  Generate 10 Formats
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* RIGHT: Output Section */}
              <div className="p-8 relative bg-[#242424]">
                {/* Output Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-[#DC2626] flex items-center justify-center">
                      <Bot className="w-3.5 h-3.5 text-[#F5F1E8]" />
                    </div>
                    <span className="text-[13px] font-medium text-[#F5F1E8]/70 uppercase tracking-wider">
                      AI Generated Formats
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#F5F1E8]/50 font-mono">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
                    Live
                  </div>
                </div>

                {/* Platform Cards Grid */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {platforms.map((platform, i) => (
                    <div
                      key={platform.name}
                      onClick={() => setActiveIndex(i < 3 ? i : 0)}
                      className={`group cursor-pointer relative flex items-center gap-2 px-3 py-2.5 rounded-lg transition-all duration-300`}
                      style={{
                        background:
                          activeIndex === i
                            ? "rgba(220, 38, 38, 0.15)"
                            : "rgba(245, 241, 232, 0.03)",
                        border:
                          activeIndex === i
                            ? "1px solid rgba(220, 38, 38, 0.4)"
                            : "1px solid rgba(245, 241, 232, 0.08)",
                      }}
                    >
                      <div
                        className="w-6 h-6 rounded flex items-center justify-center shrink-0"
                        style={{ background: "rgba(245, 241, 232, 0.06)" }}
                      >
                        <platform.icon className="w-3.5 h-3.5 text-[#F5F1E8]/70" />
                      </div>
                      <span className="text-[12px] font-medium text-[#F5F1E8]/80 truncate">
                        {platform.name}
                      </span>
                      <Check className="w-3 h-3 text-[#DC2626] ml-auto shrink-0" />
                    </div>
                  ))}
                </div>

                {/* Live Preview */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-xl p-4 relative overflow-hidden"
                    style={{
                      background: "rgba(245, 241, 232, 0.03)",
                      border: "1px solid rgba(245, 241, 232, 0.1)",
                    }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
                      <span className="text-[11px] font-medium text-[#F5F1E8]/70 uppercase tracking-wider">
                        {outputPreviews[activeIndex]?.title || "Preview"}
                      </span>
                    </div>
                    <p className="text-[13px] text-[#F5F1E8]/90 leading-relaxed whitespace-pre-line">
                      {outputPreviews[activeIndex]?.content}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Stats Bar */}
                <div
                  className="mt-4 flex items-center justify-between px-3 py-2.5 rounded-lg"
                  style={{
                    background: "rgba(245, 241, 232, 0.03)",
                    border: "1px solid rgba(245, 241, 232, 0.08)",
                  }}
                >
                  <div className="flex items-center gap-2 text-[11px] text-[#F5F1E8]/60">
                    <Zap className="w-3.5 h-3.5 text-[#DC2626]" />
                    Generated in 4.2s
                  </div>
                  <div className="text-[11px] text-[#F5F1E8]/60 font-mono">
                    10/10 completed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Highlights */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: Zap,
              label: "30 seconds",
              sublabel: "Average generation time",
              color: "#DC2626",
            },
            {
              icon: Cable,
              label: "10 platforms",
              sublabel: "Optimized for each one",
              color: "#DC2626",
            },
            {
              icon: Check,
              label: "100% ready",
              sublabel: "Copy, edit, or publish",
              color: "#DC2626",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 p-4 rounded-2xl border border-[#F5F1E8]/10 bg-[#242424]"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  background: "rgba(220, 38, 38, 0.15)",
                  border: "1px solid rgba(220, 38, 38, 0.3)",
                }}
              >
                <item.icon className="w-5 h-5 text-[#DC2626]" />
              </div>
              <div>
                <div className="text-[#F5F1E8] font-semibold text-[15px]">
                  {item.label}
                </div>
                <div className="text-[#F5F1E8]/50 text-[12px]">
                  {item.sublabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Demo;
