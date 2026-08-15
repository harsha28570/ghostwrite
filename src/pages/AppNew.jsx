import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  LinkIcon,
  Clipboard,
  Upload,
  Check,
  Sparkles,
  ArrowRight,
  X,
  Ghost,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Music2,
  Youtube,
  Facebook,
  Pin,
  MessageSquare,
  ArrowLeft,
  Wand2,
  Zap,
  Type,
  Users,
  Volume2,
  Settings,
  Save,
} from "lucide-react";

const inputTabs = [
  { id: "paste", label: "Paste Text", icon: Clipboard },
  { id: "file", label: "Upload File", icon: Upload },
  { id: "url", label: "URL Import", icon: LinkIcon },
];

const contentTypes = [
  { name: "Blog Post", icon: "📝" },
  { name: "YouTube Script", icon: "🎬" },
  { name: "Podcast Transcript", icon: "🎙️" },
  { name: "Article", icon: "📰" },
  { name: "Other", icon: "✨" },
];

const platforms = [
  { name: "Twitter", icon: Twitter },
  { name: "LinkedIn", icon: Linkedin },
  { name: "Instagram", icon: Instagram },
  { name: "Email", icon: Mail },
  { name: "TikTok", icon: Music2 },
  { name: "YouTube", icon: Youtube },
  { name: "Facebook", icon: Facebook },
  { name: "Pinterest", icon: Pin },
  { name: "Reddit", icon: MessageSquare },
  { name: "Blog Summary", icon: FileText },
];

function AppNew() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("paste");
  const [text, setText] = useState("");
  const [contentType, setContentType] = useState("Blog Post");
  const [selectedPlatforms, setSelectedPlatforms] = useState(
    platforms.map((p) => p.name),
  );
  const [keywords, setKeywords] = useState(["content marketing", "AI tools"]);
  const [keywordInput, setKeywordInput] = useState("");
  const [sliders, setSliders] = useState({
    tone: 65,
    formality: 25,
    length: 50,
  });
  const [audience, setAudience] = useState("");
  const [perspective, setPerspective] = useState("First Person (I/We)");

  const addKeyword = (e) => {
    if (e.key === "Enter" && keywordInput.trim()) {
      e.preventDefault();
      setKeywords([...keywords, keywordInput.trim()]);
      setKeywordInput("");
    }
  };

  const removeKeyword = (kw) => setKeywords(keywords.filter((k) => k !== kw));

  const togglePlatform = (p) => {
    setSelectedPlatforms((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p],
    );
  };

  const selectAll = () => setSelectedPlatforms(platforms.map((p) => p.name));
  const deselectAll = () => setSelectedPlatforms([]);

  const handleGenerate = () => {
    const tone =
      sliders.tone < 33
        ? "casual"
        : sliders.tone < 66
          ? "balanced"
          : "professional";
    const formality =
      sliders.formality < 33
        ? "relaxed"
        : sliders.formality < 66
          ? "balanced"
          : "formal";
    const length =
      sliders.length < 33
        ? "concise"
        : sliders.length < 66
          ? "balanced"
          : "detailed";

    const brandVoice = `${tone}, ${formality}, ${length}`;

    const generationData = {
      content: text,
      contentType,
      platforms: selectedPlatforms,
      keywords,
      brandVoice,
      perspective,
      audience: audience || "general audience",
      tone,
      formality,
      length,
    };

    localStorage.setItem(
      "ghostwrite_generation",
      JSON.stringify(generationData),
    );
    navigate("/app/processing");
  };

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      {/* Header */}
      <header
        className="sticky top-0 z-50 backdrop-blur-2xl border-b"
        style={{
          background: "rgba(26, 26, 26, 0.8)",
          borderColor: "rgba(245, 241, 232, 0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/dashboard"
              className="p-2 rounded-lg text-[#F5F1E8]/60 hover:text-[#F5F1E8] transition-all"
              style={{
                background: "rgba(245, 241, 232, 0.03)",
                border: "1px solid rgba(245, 241, 232, 0.06)",
              }}
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>

            <Link
              to="/"
              className="group flex items-center gap-2.5 transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#DC2626] via-[#B91C1C] to-[#7F1D1D] flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.3)] group-hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all duration-500 group-hover:scale-105">
                <Ghost className="w-5 h-5 text-[#F5F1E8]" strokeWidth={2.5} />
              </div>
              <span className="text-[16px] font-semibold text-[#F5F1E8] tracking-tight">
                GhostWrite
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <div
              className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full"
              style={{
                background: "rgba(245, 241, 232, 0.05)",
                border: "1px solid rgba(245, 241, 232, 0.1)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
              <span className="text-[11px] font-medium text-[#F5F1E8]/80">
                Free Plan
              </span>
            </div>
            <Link
              to="/app/settings"
              className="flex items-center gap-2 px-3 py-1.5 text-[13px] text-[#F5F1E8]/60 hover:text-[#F5F1E8] transition-colors"
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Page Header - Minimal */}
        <div className="mb-8">
          <h1
            className="text-3xl md:text-4xl font-bold text-[#F5F1E8] mb-2"
            style={{ letterSpacing: "-0.03em" }}
          >
            Create new content
          </h1>
          <p className="text-[14px] text-[#F5F1E8]/60">
            Paste your content, customize settings, and let AI do the rest.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* LEFT: Content Input */}
          <div className="lg:col-span-3 space-y-6">
            {/* Content Input Card */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "#242424",
                border: "1px solid rgba(245, 241, 232, 0.08)",
              }}
            >
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{
                    background: "rgba(245, 241, 232, 0.05)",
                    border: "1px solid rgba(245, 241, 232, 0.08)",
                  }}
                >
                  <FileText className="w-4 h-4 text-[#F5F1E8]/70" />
                </div>
                <div>
                  <h2
                    className="text-lg font-bold text-[#F5F1E8]"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    Your Content
                  </h2>
                  <p className="text-[11px] text-[#F5F1E8]/50">
                    Choose how to add your content
                  </p>
                </div>
              </div>

              {/* Input Method Tabs - Minimal */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {inputTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className="relative group flex flex-col items-center gap-2 p-3 rounded-xl transition-all"
                    style={{
                      background:
                        activeTab === tab.id
                          ? "rgba(220, 38, 38, 0.1)"
                          : "rgba(245, 241, 232, 0.03)",
                      border: `1px solid ${activeTab === tab.id ? "rgba(220, 38, 38, 0.3)" : "rgba(245, 241, 232, 0.05)"}`,
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center transition-all group-hover:scale-110"
                      style={{
                        background:
                          activeTab === tab.id
                            ? "#DC2626"
                            : "rgba(245, 241, 232, 0.05)",
                      }}
                    >
                      <tab.icon
                        className="w-4 h-4"
                        style={{
                          color:
                            activeTab === tab.id
                              ? "#F5F1E8"
                              : "rgba(245, 241, 232, 0.6)",
                        }}
                      />
                    </div>
                    <span
                      className="text-[11px] font-medium"
                      style={{
                        color:
                          activeTab === tab.id
                            ? "#DC2626"
                            : "rgba(245, 241, 232, 0.6)",
                      }}
                    >
                      {tab.label}
                    </span>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {activeTab === "paste" && (
                  <motion.div
                    key="paste"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <div className="relative">
                      <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Paste your blog post, video script, article, or any long-form content here...&#10;&#10;The richer your content, the better the results."
                        className="w-full min-h-[280px] p-4 text-[14px] text-[#F5F1E8] placeholder:text-[#F5F1E8]/40 rounded-xl outline-none resize-none transition-all focus:border-[#DC2626]/30"
                        style={{
                          background: "rgba(245, 241, 232, 0.02)",
                          border: "1px solid rgba(245, 241, 232, 0.05)",
                          fontFamily:
                            'ui-monospace, "Cascadia Code", monospace',
                          lineHeight: "1.6",
                        }}
                      />
                      {/* Word count badge */}
                      <div
                        className="absolute bottom-4 right-4 flex items-center gap-2 px-2 py-1 rounded-md"
                        style={{
                          background: "rgba(26, 26, 26, 0.8)",
                          border: `1px solid ${wordCount >= 50 ? "rgba(220, 38, 38, 0.3)" : "rgba(245, 241, 232, 0.1)"}`,
                        }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{
                            background:
                              wordCount >= 50
                                ? "#DC2626"
                                : "rgba(245, 241, 232, 0.4)",
                          }}
                        />
                        <span className="text-[11px] font-mono text-[#F5F1E8]/70">
                          {wordCount} words
                        </span>
                      </div>
                    </div>
                    <p className="mt-2 text-[11px] text-[#F5F1E8]/40">
                      Minimum 50 words recommended for best results
                    </p>
                  </motion.div>
                )}

                {activeTab === "file" && (
                  <motion.div
                    key="file"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="rounded-xl p-12 text-center"
                    style={{
                      background: "rgba(245, 241, 232, 0.02)",
                      border: "2px dashed rgba(245, 241, 232, 0.1)",
                    }}
                  >
                    <div
                      className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                      style={{
                        background: "rgba(245, 241, 232, 0.05)",
                        border: "1px solid rgba(245, 241, 232, 0.08)",
                      }}
                    >
                      <Upload className="w-8 h-8 text-[#F5F1E8]/60" />
                    </div>
                    <p className="text-lg font-semibold text-[#F5F1E8] mb-1">
                      Drop files here
                    </p>
                    <p className="text-[13px] text-[#F5F1E8]/60 mb-3">
                      or click to browse
                    </p>
                    <p className="text-[11px] text-[#F5F1E8]/40">
                      PDF, DOCX, TXT — Max 10MB
                    </p>
                    <div
                      className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(220, 38, 38, 0.1)",
                        border: "1px solid rgba(220, 38, 38, 0.2)",
                      }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                      <span className="text-[11px] font-medium text-[#DC2626]">
                        Coming Soon
                      </span>
                    </div>
                  </motion.div>
                )}

                {activeTab === "url" && (
                  <motion.div
                    key="url"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-3"
                  >
                    <div className="relative">
                      <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#F5F1E8]/40" />
                      <input
                        type="url"
                        placeholder="https://yourblogpost.com/article"
                        className="w-full pl-11 pr-4 py-3 text-[14px] text-[#F5F1E8] placeholder:text-[#F5F1E8]/40 rounded-xl outline-none"
                        style={{
                          background: "rgba(245, 241, 232, 0.02)",
                          border: "1px solid rgba(245, 241, 232, 0.08)",
                        }}
                      />
                    </div>
                    <button
                      disabled
                      className="w-full py-3 rounded-xl text-[#F5F1E8] font-medium text-[14px] flex items-center justify-center gap-2 opacity-50 cursor-not-allowed"
                      style={{ background: "#DC2626" }}
                    >
                      Import Article <ArrowRight className="w-4 h-4" />
                    </button>
                    <div
                      className="text-center inline-flex mx-auto items-center gap-1.5 px-3 py-1 rounded-full w-fit"
                      style={{
                        background: "rgba(220, 38, 38, 0.1)",
                        border: "1px solid rgba(220, 38, 38, 0.2)",
                      }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                      <span className="text-[11px] font-medium text-[#DC2626]">
                        Coming Soon
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Content Type Selector */}
              <div className="mt-6 pt-6 border-t border-[#F5F1E8]/5">
                <p className="text-[13px] font-semibold text-[#F5F1E8] mb-3">
                  What type of content is this?
                </p>
                <div className="flex flex-wrap gap-2">
                  {contentTypes.map((type) => (
                    <button
                      key={type.name}
                      onClick={() => setContentType(type.name)}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-[12px] font-medium transition-all"
                      style={{
                        background:
                          contentType === type.name
                            ? "#DC2626"
                            : "rgba(245, 241, 232, 0.03)",
                        border: `1px solid ${contentType === type.name ? "transparent" : "rgba(245, 241, 232, 0.08)"}`,
                        color:
                          contentType === type.name
                            ? "#F5F1E8"
                            : "rgba(245, 241, 232, 0.7)",
                      }}
                    >
                      <span>{type.icon}</span>
                      {type.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Platform Selector Card */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "#242424",
                border: "1px solid rgba(245, 241, 232, 0.08)",
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      background: "rgba(245, 241, 232, 0.05)",
                      border: "1px solid rgba(245, 241, 232, 0.08)",
                    }}
                  >
                    <Sparkles className="w-4 h-4 text-[#F5F1E8]/70" />
                  </div>
                  <div>
                    <h2
                      className="text-lg font-bold text-[#F5F1E8]"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      Select Platforms
                    </h2>
                    <p className="text-[11px] text-[#F5F1E8]/50">
                      {selectedPlatforms.length} of {platforms.length} selected
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={selectAll}
                    className="text-[11px] font-medium text-[#DC2626] hover:text-[#EF4444] transition-colors"
                  >
                    Select all
                  </button>
                  <span className="text-[#F5F1E8]/20">•</span>
                  <button
                    onClick={deselectAll}
                    className="text-[11px] font-medium text-[#F5F1E8]/50 hover:text-[#F5F1E8] transition-colors"
                  >
                    Clear
                  </button>
                </div>
              </div>

              {/* Platform Grid - Minimal */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {platforms.map((platform) => {
                  const isSelected = selectedPlatforms.includes(platform.name);
                  return (
                    <button
                      key={platform.name}
                      onClick={() => togglePlatform(platform.name)}
                      className="relative group flex flex-col items-center gap-2 p-3 rounded-xl transition-all"
                      style={{
                        background: isSelected
                          ? "rgba(220, 38, 38, 0.1)"
                          : "rgba(245, 241, 232, 0.03)",
                        border: `1px solid ${isSelected ? "rgba(220, 38, 38, 0.3)" : "rgba(245, 241, 232, 0.05)"}`,
                      }}
                    >
                      {isSelected && (
                        <div className="absolute top-1 right-1">
                          <Check className="w-3 h-3 text-[#DC2626]" />
                        </div>
                      )}
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all group-hover:scale-110"
                        style={{
                          background: isSelected
                            ? "#DC2626"
                            : "rgba(245, 241, 232, 0.05)",
                        }}
                      >
                        <platform.icon
                          className="w-4 h-4"
                          style={{
                            color: isSelected
                              ? "#F5F1E8"
                              : "rgba(245, 241, 232, 0.6)",
                          }}
                        />
                      </div>
                      <span
                        className="text-[10px] font-medium truncate max-w-full"
                        style={{
                          color: isSelected
                            ? "#DC2626"
                            : "rgba(245, 241, 232, 0.6)",
                        }}
                      >
                        {platform.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT: Brand Voice Panel */}
          <div className="lg:col-span-2">
            <div
              className="rounded-2xl p-6 sticky top-24"
              style={{
                background: "#242424",
                border: "1px solid rgba(245, 241, 232, 0.08)",
              }}
            >
              {/* Section Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      background: "rgba(245, 241, 232, 0.05)",
                      border: "1px solid rgba(245, 241, 232, 0.08)",
                    }}
                  >
                    <Volume2 className="w-4 h-4 text-[#F5F1E8]/70" />
                  </div>
                  <div>
                    <h2
                      className="text-lg font-bold text-[#F5F1E8]"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      Brand Voice
                    </h2>
                    <p className="text-[11px] text-[#F5F1E8]/50">
                      Customize your style
                    </p>
                  </div>
                </div>
                <button className="text-[#F5F1E8]/40 hover:text-[#F5F1E8] transition-colors">
                  <Save className="w-4 h-4" />
                </button>
              </div>

              {/* Sliders - All Crimson */}
              {[
                {
                  id: "tone",
                  label: "Tone",
                  left: "Casual",
                  right: "Professional",
                },
                {
                  id: "formality",
                  label: "Formality",
                  left: "Relaxed",
                  right: "Formal",
                },
                {
                  id: "length",
                  label: "Length",
                  left: "Concise",
                  right: "Detailed",
                },
              ].map((slider) => (
                <div key={slider.id} className="mb-5">
                  <div className="flex justify-between items-center text-[12px] mb-2">
                    <span className="font-medium text-[#F5F1E8]">
                      {slider.label}
                    </span>
                    <span
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono"
                      style={{
                        background: "rgba(220, 38, 38, 0.1)",
                        color: "#DC2626",
                      }}
                    >
                      {sliders[slider.id] < 33
                        ? slider.left
                        : sliders[slider.id] < 66
                          ? "Balanced"
                          : slider.right}
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliders[slider.id]}
                      onChange={(e) =>
                        setSliders({
                          ...sliders,
                          [slider.id]: parseInt(e.target.value),
                        })
                      }
                      className="w-full h-1.5 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #DC2626 0%, #DC2626 ${sliders[slider.id]}%, rgba(245,241,232,0.1) ${sliders[slider.id]}%, rgba(245,241,232,0.1) 100%)`,
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-[#F5F1E8]/40 mt-1">
                    <span>{slider.left}</span>
                    <span>{slider.right}</span>
                  </div>
                </div>
              ))}

              {/* Keywords */}
              <div className="mb-5 pt-5 border-t border-[#F5F1E8]/5">
                <label className="text-[12px] font-medium text-[#F5F1E8] mb-2 block">
                  Keywords to include
                </label>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {keywords.map((kw) => (
                    <span
                      key={kw}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-medium"
                      style={{
                        background: "rgba(220, 38, 38, 0.1)",
                        color: "#DC2626",
                        border: "1px solid rgba(220, 38, 38, 0.2)",
                      }}
                    >
                      {kw}
                      <button onClick={() => removeKeyword(kw)}>
                        <X className="w-2.5 h-2.5" />
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
                  className="w-full px-3 py-2 text-[12px] text-[#F5F1E8] placeholder:text-[#F5F1E8]/40 rounded-lg outline-none focus:border-[#DC2626]/30"
                  style={{
                    background: "rgba(245, 241, 232, 0.02)",
                    border: "1px solid rgba(245, 241, 232, 0.08)",
                  }}
                />
              </div>

              {/* Perspective */}
              <div className="mb-4">
                <label className="text-[12px] font-medium text-[#F5F1E8] mb-2 block">
                  Perspective
                </label>
                <select
                  value={perspective}
                  onChange={(e) => setPerspective(e.target.value)}
                  className="w-full px-3 py-2 text-[12px] text-[#F5F1E8] rounded-lg outline-none cursor-pointer"
                  style={{
                    background: "rgba(245, 241, 232, 0.02)",
                    border: "1px solid rgba(245, 241, 232, 0.08)",
                  }}
                >
                  <option>First Person (I/We)</option>
                  <option>Second Person (You)</option>
                  <option>Third Person (They)</option>
                </select>
              </div>

              {/* Target Audience */}
              <div className="mb-6">
                <label className="text-[12px] font-medium text-[#F5F1E8] mb-2 block">
                  Target Audience
                </label>
                <input
                  type="text"
                  value={audience}
                  onChange={(e) => setAudience(e.target.value)}
                  placeholder="e.g., Tech founders, marketers"
                  className="w-full px-3 py-2 text-[12px] text-[#F5F1E8] placeholder:text-[#F5F1E8]/40 rounded-lg outline-none focus:border-[#DC2626]/30"
                  style={{
                    background: "rgba(245, 241, 232, 0.02)",
                    border: "1px solid rgba(245, 241, 232, 0.08)",
                  }}
                />
              </div>

              {/* Generate Button - Crimson */}
              <button
                onClick={handleGenerate}
                disabled={wordCount < 10 || selectedPlatforms.length === 0}
                className="group relative w-full py-4 rounded-xl text-[#F5F1E8] font-bold text-[15px] transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{
                  background:
                    wordCount >= 10 && selectedPlatforms.length > 0
                      ? "linear-gradient(180deg, #DC2626 0%, #B91C1C 100%)"
                      : "rgba(245, 241, 232, 0.05)",
                  boxShadow:
                    wordCount >= 10 && selectedPlatforms.length > 0
                      ? "inset 0 1px 0 rgba(245,241,232,0.15), 0 10px 30px rgba(220, 38, 38, 0.3)"
                      : "none",
                }}
              >
                <div className="relative flex items-center justify-center gap-2">
                  <Wand2 className="w-5 h-5" />
                  Generate {selectedPlatforms.length} Formats
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </button>

              {/* Status */}
              <div className="mt-3 flex items-center justify-center gap-2 text-[11px]">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background:
                      wordCount >= 10 && selectedPlatforms.length > 0
                        ? "#DC2626"
                        : "rgba(245, 241, 232, 0.4)",
                  }}
                />
                <span className="text-[#F5F1E8]/60">
                  {wordCount >= 10 && selectedPlatforms.length > 0
                    ? `Ready to generate ${selectedPlatforms.length} formats`
                    : wordCount < 10
                      ? `Add ${10 - wordCount} more words`
                      : "Select at least 1 platform"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #F5F1E8;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
          border: 2px solid rgba(245, 241, 232, 0.2);
        }
        
        input[type="range"]::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #F5F1E8;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
          border: 2px solid rgba(245, 241, 232, 0.2);
        }
      `}</style>
    </div>
  );
}

export default AppNew;
