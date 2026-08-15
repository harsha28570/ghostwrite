import { motion } from "framer-motion";
import {
  Feather,
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Mail,
  Music2,
  Pin,
  MessageSquare,
} from "lucide-react";

function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32 bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-[#F5F1E8]/10 bg-[#F5F1E8]/[0.02]">
            <Feather className="w-3.5 h-3.5 text-[#DC2626]" />
            <span className="text-[13px] font-medium text-[#F5F1E8]/70 tracking-tight">
              Features
            </span>
          </div>

          <h2
            className="mb-4 text-[#F5F1E8]"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.045em",
            }}
          >
            Built for serious creators
          </h2>

          <p className="text-[17px] text-[#F5F1E8]/60 max-w-2xl mx-auto">
            Powerful features that make content repurposing effortless.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* CARD 1: Smart Upload - Large */}
          <div className="md:col-span-2 md:row-span-2 group">
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden p-8 bg-[#242424] border border-[#F5F1E8]/10 hover:border-[#DC2626]/30 transition-all duration-300">
              <div className="relative z-10 max-w-md">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-[#DC2626]/30 bg-[#DC2626]/5">
                  <span className="text-[11px] font-semibold text-[#DC2626] tracking-tight">
                    01
                  </span>
                </div>

                <h3
                  className="text-[#F5F1E8] mb-3"
                  style={{
                    fontSize: "28px",
                    fontWeight: 700,
                    lineHeight: 1.15,
                    letterSpacing: "-0.03em",
                  }}
                >
                  Any file, any format
                </h3>
                <p className="text-[15px] text-[#F5F1E8]/60 mb-6 leading-relaxed">
                  Drop your blog post, paste a URL, upload a PDF, or import a
                  transcript. GhostWrite handles it all.
                </p>

                <div className="flex flex-wrap gap-2">
                  {["PDF", "DOC", "TXT", "URL", "MD"].map((type) => (
                    <div
                      key={type}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium border border-[#F5F1E8]/10 text-[#F5F1E8]/70 bg-[#F5F1E8]/[0.02]"
                    >
                      .{type}
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Documents */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 hidden md:block">
                <motion.div
                  animate={{ y: [-5, 5, -5], rotate: [-6, -4, -6] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute w-24 h-32 rounded-lg p-3 bg-[#F5F1E8]/[0.05] border border-[#F5F1E8]/10"
                  style={{ right: "80px", top: "20px" }}
                >
                  <div className="space-y-1.5">
                    <div className="h-1 rounded bg-[#F5F1E8]/30 w-3/4" />
                    <div className="h-1 rounded bg-[#F5F1E8]/30 w-full" />
                    <div className="h-1 rounded bg-[#F5F1E8]/30 w-1/2" />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [5, -5, 5], rotate: [3, 5, 3] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                  className="absolute w-24 h-32 rounded-lg p-3 bg-[#F5F1E8]/[0.05] border border-[#F5F1E8]/10"
                  style={{ right: "20px", top: "40px" }}
                >
                  <div className="space-y-1.5">
                    <div className="h-1 rounded bg-[#F5F1E8]/30 w-full" />
                    <div className="h-1 rounded bg-[#F5F1E8]/30 w-2/3" />
                    <div className="h-1 rounded bg-[#F5F1E8]/30 w-4/5" />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute w-28 h-36 rounded-lg p-3 bg-[#F5F1E8] border border-[#F5F1E8]/20"
                  style={{ right: "50px", top: "80px" }}
                >
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-1 h-1 rounded-full bg-[#DC2626]" />
                    <div className="text-[8px] font-mono text-[#1A1A1A]/60">
                      blog.md
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-0.5 rounded bg-[#1A1A1A]/20 w-full" />
                    <div className="h-0.5 rounded bg-[#1A1A1A]/20 w-3/4" />
                    <div className="h-0.5 rounded bg-[#1A1A1A]/20 w-full" />
                    <div className="h-0.5 rounded bg-[#1A1A1A]/20 w-2/3" />
                    <div className="h-0.5 rounded bg-[#1A1A1A]/20 w-4/5" />
                    <div className="h-0.5 rounded bg-[#1A1A1A]/20 w-1/2" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* CARD 2: AI Processing */}
          <div className="group">
            <div className="relative h-full min-h-[195px] rounded-2xl overflow-hidden p-6 bg-[#242424] border border-[#F5F1E8]/10 hover:border-[#DC2626]/30 transition-all duration-300">
              <div className="flex items-center justify-center gap-1 mb-4 h-12">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: ["30%", "80%", "40%", "90%", "30%"] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.1,
                      ease: "easeInOut",
                    }}
                    className="w-1 rounded-full bg-[#F5F1E8]/40"
                  />
                ))}
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 mb-2 rounded-full border border-[#F5F1E8]/10 bg-[#F5F1E8]/[0.02]">
                  <span className="text-[10px] font-semibold text-[#F5F1E8]/70 tracking-tight">
                    02 · AI
                  </span>
                </div>
                <h3
                  className="text-[#F5F1E8] mb-1 text-[18px] font-bold"
                  style={{ letterSpacing: "-0.025em" }}
                >
                  Smart processing
                </h3>
                <p className="text-[13px] text-[#F5F1E8]/60">
                  AI reads and understands your content
                </p>
              </div>
            </div>
          </div>

          {/* CARD 3: 10 Platforms */}
          <div className="group">
            <div className="relative h-full min-h-[195px] rounded-2xl overflow-hidden p-6 bg-[#242424] border border-[#F5F1E8]/10 hover:border-[#DC2626]/30 transition-all duration-300">
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  Twitter,
                  Linkedin,
                  Instagram,
                  Youtube,
                  Mail,
                  Music2,
                  Facebook,
                  Pin,
                  MessageSquare,
                ].map((Icon, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05, type: "spring" }}
                    className="w-7 h-7 rounded-md flex items-center justify-center border border-[#F5F1E8]/10 bg-[#F5F1E8]/[0.02]"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#F5F1E8]/60" />
                  </motion.div>
                ))}
                <div className="w-7 h-7 rounded-md flex items-center justify-center text-[9px] font-bold text-[#F5F1E8]/60 border border-[#F5F1E8]/10">
                  +1
                </div>
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 mb-2 rounded-full border border-[#F5F1E8]/10 bg-[#F5F1E8]/[0.02]">
                  <span className="text-[10px] font-semibold text-[#F5F1E8]/70 tracking-tight">
                    03 · PLATFORMS
                  </span>
                </div>
                <h3
                  className="text-[#F5F1E8] mb-1 text-[18px] font-bold"
                  style={{ letterSpacing: "-0.025em" }}
                >
                  10 platforms ready
                </h3>
                <p className="text-[13px] text-[#F5F1E8]/60">
                  All social platforms, optimized
                </p>
              </div>
            </div>
          </div>

          {/* CARD 4: Brand Voice - CRIMSON HIGHLIGHT */}
          <div className="group">
            <div className="relative h-full min-h-[195px] rounded-2xl overflow-hidden p-6 bg-[#242424] border border-[#DC2626]/20 hover:border-[#DC2626]/50 transition-all duration-300">
              <div className="space-y-2.5 mb-4">
                {[
                  { label: "Tone", value: 70 },
                  { label: "Formal", value: 40 },
                  { label: "Length", value: 85 },
                ].map((slider, i) => (
                  <div key={slider.label}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[9px] text-[#F5F1E8]/50 font-medium">
                        {slider.label}
                      </span>
                      <span className="text-[9px] text-[#DC2626] font-mono">
                        {slider.value}%
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-[#F5F1E8]/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${slider.value}%` }}
                        transition={{
                          duration: 1,
                          delay: i * 0.15,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-[#DC2626]"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 mb-2 rounded-full border border-[#DC2626]/30 bg-[#DC2626]/5">
                  <span className="text-[10px] font-semibold text-[#DC2626] tracking-tight">
                    04 · VOICE
                  </span>
                </div>
                <h3
                  className="text-[#F5F1E8] mb-1 text-[18px] font-bold"
                  style={{ letterSpacing: "-0.025em" }}
                >
                  Your unique voice
                </h3>
                <p className="text-[13px] text-[#F5F1E8]/60">
                  Match your brand tone perfectly
                </p>
              </div>
            </div>
          </div>

          {/* CARD 5: History */}
          <div className="group">
            <div className="relative h-full min-h-[195px] rounded-2xl overflow-hidden p-6 bg-[#242424] border border-[#F5F1E8]/10 hover:border-[#DC2626]/30 transition-all duration-300">
              <div className="space-y-1.5 mb-4">
                {[
                  { title: "Marketing tips post", time: "2m ago" },
                  { title: "Product launch email", time: "1h ago" },
                  { title: "Weekly newsletter", time: "3h ago" },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-md border border-[#F5F1E8]/5 bg-[#F5F1E8]/[0.02]"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F5F1E8]/40" />
                      <span className="text-[10px] text-[#F5F1E8]/80 truncate">
                        {item.title}
                      </span>
                    </div>
                    <span className="text-[9px] text-[#F5F1E8]/40 font-mono">
                      {item.time}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 mb-2 rounded-full border border-[#F5F1E8]/10 bg-[#F5F1E8]/[0.02]">
                  <span className="text-[10px] font-semibold text-[#F5F1E8]/70 tracking-tight">
                    05 · HISTORY
                  </span>
                </div>
                <h3
                  className="text-[#F5F1E8] mb-1 text-[18px] font-bold"
                  style={{ letterSpacing: "-0.025em" }}
                >
                  Never lose a draft
                </h3>
                <p className="text-[13px] text-[#F5F1E8]/60">
                  Save, revisit, and reuse anytime
                </p>
              </div>
            </div>
          </div>

          {/* CARD 6: Speed */}
          <div className="group">
            <div className="relative h-full min-h-[195px] rounded-2xl overflow-hidden p-6 bg-[#242424] border border-[#F5F1E8]/10 hover:border-[#DC2626]/30 transition-all duration-300">
              <div className="flex items-center justify-center mb-4 h-16">
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-16 h-16 rounded-full border-2 border-dashed border-[#F5F1E8]/30"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="text-2xl font-bold text-[#F5F1E8]"
                      style={{ letterSpacing: "-0.03em" }}
                    >
                      30s
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 mb-2 rounded-full border border-[#F5F1E8]/10 bg-[#F5F1E8]/[0.02]">
                  <span className="text-[10px] font-semibold text-[#F5F1E8]/70 tracking-tight">
                    06 · SPEED
                  </span>
                </div>
                <h3
                  className="text-[#F5F1E8] mb-1 text-[18px] font-bold"
                  style={{ letterSpacing: "-0.025em" }}
                >
                  Blazing fast
                </h3>
                <p className="text-[13px] text-[#F5F1E8]/60">
                  10 formats in under 30 seconds
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
