import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Brain,
  Check,
  X,
  Loader2,
  AlertCircle,
  Ghost,
  Sparkles,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Music2,
  Youtube,
  Facebook,
  Pin,
  MessageSquare,
  FileText,
  Wand2,
} from "lucide-react";
import { generateContent } from "../services/gemini";

const allPlatforms = [
  { name: "Twitter Thread", icon: Twitter },
  { name: "LinkedIn Post", icon: Linkedin },
  { name: "Instagram Caption", icon: Instagram },
  { name: "Email Newsletter", icon: Mail },
  { name: "Facebook Post", icon: Facebook },
  { name: "TikTok Script", icon: Music2 },
  { name: "YouTube Description", icon: Youtube },
  { name: "Pinterest Pin", icon: Pin },
  { name: "Reddit Post", icon: MessageSquare },
  { name: "Blog Summary", icon: FileText },
];

const facts = [
  {
    icon: "🐦",
    text: "Twitter threads with 7 tweets get 63% more engagement than single tweets.",
  },
  {
    icon: "💼",
    text: "LinkedIn posts with line breaks get 2x more impressions.",
  },
  {
    icon: "🎵",
    text: "TikTok videos with a strong hook in first 3 seconds see 80% better completion.",
  },
  {
    icon: "📧",
    text: "Email subject lines with curiosity gaps improve open rates by 35%.",
  },
  {
    icon: "📸",
    text: "Instagram captions that ask a question drive 2x more comments.",
  },
];

const processingSteps = [
  { label: "Content uploaded", icon: FileText },
  { label: "Reading content", icon: Brain },
  { label: "Extracting insights", icon: Sparkles },
  { label: "Understanding voice", icon: Wand2 },
  { label: "Generating formats", icon: Zap },
];

function AppProcessing() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [factIndex, setFactIndex] = useState(0);
  const [error, setError] = useState(null);
  const [isGenerating, setIsGenerating] = useState(true);

  useEffect(() => {
    const generateAIContent = async () => {
      try {
        const dataString = localStorage.getItem("ghostwrite_generation");
        if (!dataString) {
          setError("No content found.");
          setIsGenerating(false);
          return;
        }
        const data = JSON.parse(dataString);
        if (!data.content || data.content.trim().length < 10) {
          setError("Content is too short.");
          setIsGenerating(false);
          return;
        }

        const progressInterval = setInterval(() => {
          setProgress((p) => (p < 90 ? p + 2 : p));
        }, 200);
        setTimeout(() => setCurrentStep(1), 500);
        setTimeout(() => setCurrentStep(2), 1500);
        setTimeout(() => setCurrentStep(3), 2500);
        setTimeout(() => setCurrentStep(4), 3500);

        const results = await generateContent(data.content, data.brandVoice);
        localStorage.setItem("ghostwrite_results", JSON.stringify(results));
        clearInterval(progressInterval);
        setProgress(100);
        setCurrentStep(5);
        setTimeout(() => navigate("/app/results"), 1000);
      } catch (err) {
        setError(err.message || "Failed to generate content.");
        setIsGenerating(false);
      }
    };
    generateAIContent();
  }, [navigate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFactIndex((i) => (i + 1) % facts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const completed = Math.floor((progress / 100) * allPlatforms.length);

  if (error) {
    return (
      <div className="min-h-screen bg-[#1A1A1A] flex flex-col">
        <header
          className="sticky top-0 z-50 backdrop-blur-2xl border-b"
          style={{
            background: "rgba(26, 26, 26, 0.8)",
            borderColor: "rgba(245, 241, 232, 0.06)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center">
            <Link to="/" className="group flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#DC2626] to-[#B91C1C] flex items-center justify-center">
                <Ghost className="w-5 h-5 text-[#F5F1E8]" strokeWidth={2.5} />
              </div>
              <span className="text-[16px] font-semibold text-[#F5F1E8]">
                GhostWrite
              </span>
            </Link>
          </div>
        </header>
        <main className="flex-1 flex items-center justify-center p-6">
          <div
            className="max-w-md w-full rounded-2xl p-8 text-center"
            style={{
              background: "#242424",
              border: "1px solid rgba(245, 241, 232, 0.06)",
            }}
          >
            <div className="w-16 h-16 rounded-xl bg-[#DC2626]/10 flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-8 h-8 text-[#DC2626]" />
            </div>
            <h2 className="text-xl font-bold text-[#F5F1E8] mb-2">
              Something went wrong
            </h2>
            <p className="text-[#F5F1E8]/60 mb-6 text-[14px]">{error}</p>
            <Link
              to="/app/new"
              className="block w-full py-3 rounded-xl text-[#F5F1E8] font-medium text-[14px] bg-[#DC2626]"
            >
              Try Again
            </Link>
            <Link
              to="/"
              className="block w-full py-3 text-[#F5F1E8]/60 hover:text-[#F5F1E8] text-[14px] mt-2"
            >
              Go Home
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1A1A1A] flex flex-col">
      <header
        className="sticky top-0 z-50 backdrop-blur-2xl border-b"
        style={{
          background: "rgba(26, 26, 26, 0.8)",
          borderColor: "rgba(245, 241, 232, 0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="group flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#DC2626] to-[#B91C1C] flex items-center justify-center">
              <Ghost className="w-5 h-5 text-[#F5F1E8]" strokeWidth={2.5} />
            </div>
            <span className="text-[16px] font-semibold text-[#F5F1E8]">
              GhostWrite
            </span>
          </Link>
          <Link
            to="/app/new"
            className="flex items-center gap-2 px-3 py-1.5 text-[13px] text-[#F5F1E8]/60 hover:text-[#F5F1E8] rounded-lg"
            style={{
              background: "rgba(245, 241, 232, 0.03)",
              border: "1px solid rgba(245, 241, 232, 0.06)",
            }}
          >
            <X className="w-4 h-4" /> Cancel
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <h1
          className="text-3xl md:text-4xl font-bold text-[#F5F1E8] mb-2 text-center"
          style={{ letterSpacing: "-0.03em" }}
        >
          Creating your content
        </h1>
        <p className="text-[14px] text-[#F5F1E8]/60 mb-10 text-center">
          This usually takes 10-30 seconds
        </p>

        {/* Progress Circle */}
        <div className="relative w-48 h-48 mb-10">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgba(245,241,232,0.05)"
              strokeWidth="4"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#DC2626"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="283"
              strokeDashoffset={283 - (283 * progress) / 100}
              className="transition-all duration-500"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-14 h-14 rounded-xl bg-[#DC2626] flex items-center justify-center mb-2"
              style={{ boxShadow: "0 10px 30px rgba(220, 38, 38, 0.4)" }}
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Brain className="w-7 h-7 text-[#F5F1E8]" strokeWidth={2} />
              </motion.div>
            </motion.div>
            <div className="text-3xl font-bold text-[#F5F1E8]">
              {Math.round(progress)}%
            </div>
          </div>
        </div>

        {/* Processing Steps */}
        <div className="w-full max-w-md mb-8 space-y-2">
          {processingSteps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isActive = index === currentStep;
            return (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-xl"
                style={{
                  background: isActive
                    ? "rgba(220, 38, 38, 0.08)"
                    : isCompleted
                      ? "rgba(220, 38, 38, 0.03)"
                      : "rgba(245, 241, 232, 0.02)",
                  border: `1px solid ${isActive ? "rgba(220, 38, 38, 0.3)" : isCompleted ? "rgba(220, 38, 38, 0.1)" : "rgba(245, 241, 232, 0.05)"}`,
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background:
                      isCompleted || isActive
                        ? "#DC2626"
                        : "rgba(245, 241, 232, 0.05)",
                  }}
                >
                  {isCompleted ? (
                    <Check className="w-4 h-4 text-[#F5F1E8]" strokeWidth={3} />
                  ) : isActive ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <step.icon className="w-4 h-4 text-[#F5F1E8]" />
                    </motion.div>
                  ) : (
                    <step.icon className="w-4 h-4 text-[#F5F1E8]/30" />
                  )}
                </div>
                <span
                  className="text-[13px] font-medium"
                  style={{
                    color: isCompleted
                      ? "#DC2626"
                      : isActive
                        ? "#F5F1E8"
                        : "rgba(245, 241, 232, 0.4)",
                  }}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Platform Progress */}
        {progress > 30 && (
          <div
            className="w-full max-w-2xl mb-8 rounded-2xl p-6"
            style={{
              background: "#242424",
              border: "1px solid rgba(245, 241, 232, 0.08)",
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[13px] font-semibold text-[#F5F1E8]">
                Generating formats
              </h3>
              <span className="text-[11px] text-[#F5F1E8]/40 font-mono">
                {completed}/{allPlatforms.length}
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {allPlatforms.map((platform, index) => {
                const isDone = index < completed;
                const isActive = index === completed;
                return (
                  <div
                    key={platform.name}
                    className="flex flex-col items-center gap-2 p-2 rounded-lg"
                    style={{
                      background: isDone
                        ? "rgba(220, 38, 38, 0.1)"
                        : "rgba(245, 241, 232, 0.02)",
                      border: `1px solid ${isDone ? "rgba(220, 38, 38, 0.3)" : "rgba(245, 241, 232, 0.05)"}`,
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{
                        background: isDone
                          ? "#DC2626"
                          : "rgba(245, 241, 232, 0.05)",
                      }}
                    >
                      {isDone ? (
                        <Check
                          className="w-4 h-4 text-[#F5F1E8]"
                          strokeWidth={3}
                        />
                      ) : isActive ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <Loader2 className="w-3.5 h-3.5 text-[#F5F1E8]/60" />
                        </motion.div>
                      ) : (
                        <platform.icon className="w-3.5 h-3.5 text-[#F5F1E8]/40" />
                      )}
                    </div>
                    <span
                      className="text-[9px] font-medium"
                      style={{
                        color: isDone ? "#DC2626" : "rgba(245, 241, 232, 0.4)",
                      }}
                    >
                      {platform.name.split(" ")[0]}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Fun Facts */}
        <div
          className="max-w-lg w-full rounded-2xl p-4"
          style={{
            background: "#242424",
            border: "1px solid rgba(245, 241, 232, 0.08)",
          }}
        >
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#DC2626] flex items-center justify-center shrink-0">
              <span className="text-sm">💡</span>
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-semibold text-[#DC2626] uppercase tracking-wider mb-1">
                Did you know?
              </p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={factIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-[13px] text-[#F5F1E8]/80 leading-relaxed"
                >
                  <span className="mr-1">{facts[factIndex].icon}</span>
                  {facts[factIndex].text}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
          <div className="flex justify-center gap-1 mt-3">
            {facts.map((_, i) => (
              <div
                key={i}
                className="h-1 rounded-full transition-all"
                style={{
                  width: i === factIndex ? "20px" : "4px",
                  background:
                    i === factIndex ? "#DC2626" : "rgba(245, 241, 232, 0.2)",
                }}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default AppProcessing;
