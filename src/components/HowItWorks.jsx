import {
  ArrowRight,
  Sparkles,
  Workflow,
  FileText,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-24 sm:py-32 overflow-hidden bg-[#1A1A1A]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(ellipse, rgba(220, 38, 38, 0.4) 0%, transparent 70%)",
            filter: "blur(80px)",
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full backdrop-blur-xl"
            style={{
              background: "rgba(245, 241, 232, 0.05)",
              border: "1px solid rgba(245, 241, 232, 0.1)",
            }}
          >
            <Workflow className="w-3.5 h-3.5 text-[#DC2626]" />
            <span className="text-[13px] font-medium text-[#F5F1E8]/80">
              How it works
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
            Watch the{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #DC2626 0%, #EF4444 50%, #DC2626 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              magic happen.
            </span>
          </h2>

          <p className="text-[16px] text-[#F5F1E8]/60 max-w-xl mx-auto">
            Three simple steps to transform your content forever.
          </p>
        </div>

        {/* 3D Visual Steps - Compact Size */}
        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* STEP 1: UPLOAD - Documents */}
          <div className="group">
            <div className="relative h-[280px] rounded-2xl p-6 overflow-hidden hover:-translate-y-2 transition-transform duration-300">
              {/* Background */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(220, 38, 38, 0.12) 0%, rgba(220, 38, 38, 0.04) 100%)",
                  border: "1px solid rgba(220, 38, 38, 0.15)",
                }}
              />

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(220, 38, 38, 0.25) 0%, transparent 60%)",
                }}
              />

              {/* Documents Illustration - Smaller */}
              <div className="absolute inset-0 flex items-center justify-center pt-4">
                <div className="relative">
                  {/* Back doc */}
                  <motion.div
                    animate={{ y: [-3, 3, -3], rotate: [-6, -4, -6] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute w-20 h-24 rounded-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, #B91C1C 0%, #DC2626 100%)",
                      transform: "translate(-18px, -8px) rotate(-6deg)",
                      boxShadow: "0 15px 30px rgba(220, 38, 38, 0.25)",
                    }}
                  >
                    <div className="p-2 space-y-1">
                      <div className="h-0.5 rounded bg-[#F5F1E8]/40 w-3/4" />
                      <div className="h-0.5 rounded bg-[#F5F1E8]/40 w-full" />
                    </div>
                  </motion.div>

                  {/* Middle doc */}
                  <motion.div
                    animate={{ y: [-2, 2, -2], rotate: [2, 4, 2] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="absolute w-20 h-24 rounded-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, #DC2626 0%, #EF4444 100%)",
                      transform: "translate(0px, 0px) rotate(2deg)",
                      boxShadow: "0 15px 30px rgba(220, 38, 38, 0.25)",
                    }}
                  >
                    <div className="p-2 space-y-1">
                      <div className="h-0.5 rounded bg-[#F5F1E8]/40 w-full" />
                      <div className="h-0.5 rounded bg-[#F5F1E8]/40 w-2/3" />
                      <div className="h-0.5 rounded bg-[#F5F1E8]/40 w-4/5" />
                    </div>
                  </motion.div>

                  {/* Front doc - Cream color for editorial feel */}
                  <motion.div
                    animate={{ y: [0, -6, 0], rotate: [-1, 1, -1] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative w-20 h-24 rounded-lg flex flex-col p-2"
                    style={{
                      background:
                        "linear-gradient(135deg, #F5F1E8 0%, #E8E2D5 100%)",
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <div className="flex items-center gap-1 mb-1">
                      <FileText className="w-2 h-2 text-[#DC2626]" />
                      <div className="text-[6px] font-mono text-[#1A1A1A]/60">
                        blog.md
                      </div>
                    </div>
                    <div className="space-y-0.5 flex-1">
                      <div className="h-0.5 rounded bg-[#1A1A1A]/20 w-full" />
                      <div className="h-0.5 rounded bg-[#1A1A1A]/20 w-3/4" />
                      <div className="h-0.5 rounded bg-[#1A1A1A]/20 w-full" />
                      <div className="h-0.5 rounded bg-[#1A1A1A]/20 w-2/3" />
                      <div className="h-0.5 rounded bg-[#1A1A1A]/20 w-4/5" />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Content Bottom */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={{
                      background: "rgba(220, 38, 38, 0.2)",
                      color: "#DC2626",
                    }}
                  >
                    01 · UPLOAD
                  </div>
                </div>
                <h3
                  className="text-xl font-bold text-[#F5F1E8] mb-1"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  Drop your content
                </h3>
                <p className="text-[12px] text-[#F5F1E8]/60">
                  Paste text, upload file, or import URL
                </p>
              </div>
            </div>
          </div>

          {/* STEP 2: GENERATE - Terminal Visual */}
          <div className="group">
            <div className="relative h-[280px] rounded-2xl p-6 overflow-hidden hover:-translate-y-2 transition-transform duration-300">
              {/* Background */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(220, 38, 38, 0.12) 0%, rgba(220, 38, 38, 0.04) 100%)",
                  border: "1px solid rgba(220, 38, 38, 0.15)",
                }}
              />

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(220, 38, 38, 0.25) 0%, transparent 60%)",
                }}
              />

              {/* Terminal/Code Style Visual */}
              <div className="absolute inset-0 flex items-center justify-center pt-4">
                <div className="relative w-full max-w-[200px]">
                  {/* Terminal Window */}
                  <motion.div
                    animate={{ y: [-4, 4, -4] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="rounded-lg overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(180deg, #242424 0%, #1A1A1A 100%)",
                      border: "1px solid rgba(220, 38, 38, 0.3)",
                      boxShadow:
                        "0 20px 40px rgba(220, 38, 38, 0.3), inset 0 1px 0 rgba(245,241,232,0.1)",
                    }}
                  >
                    {/* Terminal Header */}
                    <div className="flex items-center gap-1 px-2 py-1.5 border-b border-[#F5F1E8]/10">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F5F1E8]/30" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F5F1E8]/30" />
                      <div className="flex-1 text-center">
                        <span className="text-[8px] font-mono text-[#F5F1E8]/40">
                          ghostwrite.ai
                        </span>
                      </div>
                    </div>

                    {/* Terminal Content */}
                    <div className="p-2.5 space-y-1.5">
                      {/* Command line */}
                      <div className="flex items-center gap-1">
                        <span className="text-[9px] font-mono text-[#DC2626]">
                          $
                        </span>
                        <motion.span
                          initial={{ width: 0 }}
                          animate={{ width: "auto" }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="text-[9px] font-mono text-[#F5F1E8] overflow-hidden whitespace-nowrap"
                        >
                          generate --all
                        </motion.span>
                        <motion.div
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                          className="w-1 h-2 bg-[#DC2626]"
                        />
                      </div>

                      {/* Processing lines */}
                      <div className="space-y-1">
                        <motion.div
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: 0,
                          }}
                          className="flex items-center gap-1"
                        >
                          <span className="text-[8px] text-[#DC2626]">✓</span>
                          <span className="text-[8px] font-mono text-[#F5F1E8]/60">
                            Analyzing content...
                          </span>
                        </motion.div>
                        <motion.div
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: 0.3,
                          }}
                          className="flex items-center gap-1"
                        >
                          <span className="text-[8px] text-[#DC2626]">✓</span>
                          <span className="text-[8px] font-mono text-[#F5F1E8]/60">
                            Detecting tone...
                          </span>
                        </motion.div>
                        <motion.div
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="flex items-center gap-1"
                        >
                          <span className="text-[8px] text-[#DC2626]">⚡</span>
                          <span className="text-[8px] font-mono text-[#F5F1E8]/80">
                            Generating...
                          </span>
                        </motion.div>
                      </div>

                      {/* Progress bar */}
                      <div className="mt-2 pt-1 border-t border-[#F5F1E8]/5">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[7px] font-mono text-[#F5F1E8]/40">
                            Progress
                          </span>
                          <motion.span
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="text-[7px] font-mono text-[#DC2626]"
                          >
                            7/10
                          </motion.span>
                        </div>
                        <div className="h-1 rounded-full bg-[#F5F1E8]/10 overflow-hidden">
                          <motion.div
                            animate={{ width: ["10%", "70%", "10%"] }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="h-full rounded-full"
                            style={{
                              background:
                                "linear-gradient(90deg, #B91C1C, #DC2626, #EF4444)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating sparkles around terminal */}
                  <motion.div
                    animate={{
                      y: [-8, -20, -8],
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-4 -left-4"
                  >
                    <Sparkles className="w-3 h-3 text-[#DC2626]" />
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [-8, -18, -8],
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="absolute -top-2 -right-4"
                  >
                    <Sparkles className="w-3 h-3 text-[#DC2626]" />
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [-8, -22, -8],
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="absolute -bottom-4 -right-2"
                  >
                    <Zap className="w-3 h-3 text-[#DC2626]" fill="#DC2626" />
                  </motion.div>
                </div>
              </div>

              {/* Content Bottom */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={{
                      background: "rgba(220, 38, 38, 0.2)",
                      color: "#DC2626",
                    }}
                  >
                    02 · GENERATE
                  </div>
                </div>
                <h3
                  className="text-xl font-bold text-[#F5F1E8] mb-1"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  AI works its magic
                </h3>
                <p className="text-[12px] text-[#F5F1E8]/60">
                  10 formats generated in seconds
                </p>
              </div>
            </div>
          </div>

          {/* STEP 3: PUBLISH - Social Cards */}
          <div className="group">
            <div className="relative h-[280px] rounded-2xl p-6 overflow-hidden hover:-translate-y-2 transition-transform duration-300">
              {/* Background */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(220, 38, 38, 0.12) 0%, rgba(220, 38, 38, 0.04) 100%)",
                  border: "1px solid rgba(220, 38, 38, 0.15)",
                }}
              />

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(220, 38, 38, 0.25) 0%, transparent 60%)",
                }}
              />

              {/* Social Cards Illustration - Compact */}
              <div className="absolute inset-0 flex items-center justify-center pt-4">
                <div className="relative w-32 h-32">
                  {/* Twitter */}
                  <motion.div
                    animate={{ y: [-4, 4, -4], rotate: [-10, -8, -10] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute w-12 h-14 rounded-lg flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)",
                      transform: "translate(-28px, -18px) rotate(-10deg)",
                      boxShadow: "0 12px 25px rgba(220, 38, 38, 0.4)",
                    }}
                  >
                    <Twitter
                      className="w-5 h-5 text-[#F5F1E8]"
                      fill="#F5F1E8"
                    />
                  </motion.div>

                  {/* LinkedIn */}
                  <motion.div
                    animate={{ y: [4, -4, 4], rotate: [10, 8, 10] }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.3,
                    }}
                    className="absolute w-12 h-14 rounded-lg flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #B91C1C 0%, #7F1D1D 100%)",
                      transform: "translate(28px, -20px) rotate(10deg)",
                      boxShadow: "0 12px 25px rgba(220, 38, 38, 0.4)",
                    }}
                  >
                    <Linkedin
                      className="w-5 h-5 text-[#F5F1E8]"
                      fill="#F5F1E8"
                    />
                  </motion.div>

                  {/* Instagram */}
                  <motion.div
                    animate={{ y: [-3, 3, -3], rotate: [-5, -3, -5] }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.6,
                    }}
                    className="absolute w-12 h-14 rounded-lg flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)",
                      transform: "translate(-20px, 22px) rotate(-5deg)",
                      boxShadow: "0 12px 25px rgba(220, 38, 38, 0.4)",
                    }}
                  >
                    <Instagram className="w-5 h-5 text-[#F5F1E8]" />
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    animate={{ y: [3, -3, 3], rotate: [5, 3, 5] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.9,
                    }}
                    className="absolute w-12 h-14 rounded-lg flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #F5F1E8 0%, #E8E2D5 100%)",
                      transform: "translate(25px, 20px) rotate(5deg)",
                      boxShadow: "0 12px 25px rgba(245, 241, 232, 0.2)",
                    }}
                  >
                    <Mail className="w-5 h-5 text-[#DC2626]" />
                  </motion.div>

                  {/* Center Send Icon */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative w-14 h-14 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, #EF4444, #DC2626 40%, #B91C1C 100%)",
                      boxShadow: "0 15px 30px rgba(220, 38, 38, 0.5)",
                    }}
                  >
                    <svg
                      className="w-6 h-6 text-[#F5F1E8]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>

              {/* Content Bottom */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={{
                      background: "rgba(220, 38, 38, 0.2)",
                      color: "#DC2626",
                    }}
                  >
                    03 · PUBLISH
                  </div>
                </div>
                <h3
                  className="text-xl font-bold text-[#F5F1E8] mb-1"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  Share everywhere
                </h3>
                <p className="text-[12px] text-[#F5F1E8]/60">
                  Copy, edit, publish anywhere
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="/signup"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[#F5F1E8] font-medium text-[14px] transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(180deg, #DC2626 0%, #B91C1C 100%)",
              boxShadow:
                "inset 0 1px 0 rgba(245,241,232,0.2), 0 10px 30px rgba(220, 38, 38, 0.3)",
            }}
          >
            <Sparkles className="w-4 h-4" />
            Try it yourself
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
