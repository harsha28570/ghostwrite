import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Ghost,
  Check,
  Copy,
  Pencil,
  RefreshCw,
  Download,
  Plus,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Facebook,
  Music2,
  Youtube,
  Pin,
  MessageSquare,
  FileText,
  AlertCircle,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import Logo from "../components/Logo";

const platformsConfig = [
  { id: "twitter", name: "Twitter Thread", icon: Twitter, format: "Thread" },
  {
    id: "linkedin",
    name: "LinkedIn Post",
    icon: Linkedin,
    format: "Professional",
  },
  {
    id: "instagram",
    name: "Instagram Caption",
    icon: Instagram,
    format: "Caption",
  },
  { id: "email", name: "Email Newsletter", icon: Mail, format: "Newsletter" },
  { id: "facebook", name: "Facebook Post", icon: Facebook, format: "Post" },
  { id: "tiktok", name: "TikTok Script", icon: Music2, format: "Script" },
  {
    id: "youtube",
    name: "YouTube Description",
    icon: Youtube,
    format: "Description",
  },
  { id: "pinterest", name: "Pinterest Pin", icon: Pin, format: "Pin" },
  { id: "reddit", name: "Reddit Post", icon: MessageSquare, format: "Post" },
  { id: "blog", name: "Blog Summary", icon: FileText, format: "Summary" },
];

const tips = {
  twitter: "Post between 8-10am for best engagement",
  linkedin: "Publish Tuesday-Thursday, 8-10am",
  instagram: "Use 3-5 relevant hashtags",
  email: "Send Tuesday-Thursday for higher open rates",
  facebook: "Questions drive 2x more comments",
  tiktok: "Hook viewers in first 3 seconds",
  youtube: "Keywords in first 2 lines boost SEO",
  pinterest: "Include keywords in descriptions",
  reddit: "Lead with value, not sales",
  blog: "Use as meta description or preview",
};

function AppResults() {
  const [activePlatform, setActivePlatform] = useState("twitter");
  const [copied, setCopied] = useState(null);
  const [editing, setEditing] = useState(null);
  const [outputs, setOutputs] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copiedAll, setCopiedAll] = useState(false);

  useEffect(() => {
    try {
      const resultsString = localStorage.getItem("ghostwrite_results");
      if (!resultsString) {
        setError("No results found. Please generate content first.");
        setLoading(false);
        return;
      }
      const results = JSON.parse(resultsString);
      const mappedOutputs = {};
      Object.keys(results).forEach((key) => {
        if (results[key] && results[key].content) {
          mappedOutputs[key] = results[key].content;
        }
      });
      setOutputs(mappedOutputs);
      setLoading(false);
    } catch (err) {
      setError("Failed to load results. Please try generating again.");
      setLoading(false);
    }
  }, []);

  const handleCopy = (id) => {
    if (outputs[id]) {
      navigator.clipboard.writeText(outputs[id]);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    }
  };

  const handleCopyAll = () => {
    const allText = Object.entries(outputs)
      .map(([id, content]) => {
        const platform = platformsConfig.find((p) => p.id === id);
        return `── ${platform?.name || id} ──\n\n${content}\n\n`;
      })
      .join("");
    navigator.clipboard.writeText(allText);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  const handleSaveEdit = () => {
    const resultsString = localStorage.getItem("ghostwrite_results");
    if (resultsString) {
      const results = JSON.parse(resultsString);
      if (results[editing]) {
        results[editing].content = outputs[editing];
        localStorage.setItem("ghostwrite_results", JSON.stringify(results));
      }
    }
    setEditing(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center">
        <div className="text-center">
          <div className="w-6 h-6 border-2 border-[#F5F1E8]/20 border-t-[#F5F1E8]/80 rounded-full animate-spin mx-auto mb-3"></div>
          <p className="text-[13px] text-[#F5F1E8]/50">Loading results...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#1A1A1A] flex flex-col">
        <header
          className="border-b"
          style={{
            background: "#242424",
            borderColor: "rgba(245, 241, 232, 0.06)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 h-14 flex items-center">
            <Logo />
          </div>
        </header>
        <main className="flex-1 flex items-center justify-center p-6">
          <div
            className="max-w-sm w-full rounded-lg p-6 text-center"
            style={{
              background: "#242424",
              border: "1px solid rgba(245, 241, 232, 0.06)",
            }}
          >
            <div className="w-10 h-10 rounded-md bg-[#DC2626]/10 flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-5 h-5 text-[#DC2626]" />
            </div>
            <h2 className="text-[15px] font-semibold text-[#F5F1E8] mb-2">
              No Results Found
            </h2>
            <p className="text-[13px] text-[#F5F1E8]/50 mb-6">{error}</p>
            <Link
              to="/app/new"
              className="inline-flex items-center justify-center w-full py-2 rounded-md text-[13px] font-medium text-[#F5F1E8] bg-[#DC2626]"
            >
              Generate New Content
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const platforms = platformsConfig.filter((p) => outputs[p.id]);

  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <header
        className="sticky top-0 z-40 border-b"
        style={{
          background: "rgba(26, 26, 26, 0.8)",
          backdropFilter: "blur(12px)",
          borderColor: "rgba(245, 241, 232, 0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Logo />
            <div className="hidden md:flex items-center gap-2 text-[12px]">
              <Link
                to="/dashboard"
                className="text-[#F5F1E8]/40 hover:text-[#F5F1E8]/70 transition-colors"
              >
                Dashboard
              </Link>
              <ChevronRight className="w-3 h-3 text-[#F5F1E8]/30" />
              <span className="text-[#F5F1E8]/80">Results</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyAll}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[13px] text-[#F5F1E8]/60 hover:text-[#F5F1E8] transition-colors"
            >
              {copiedAll ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#DC2626]" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Copy all
                </>
              )}
            </button>
            <div className="w-px h-4 bg-[#F5F1E8]/10 mx-1" />
            <Link
              to="/app/settings"
              className="px-3 py-1.5 text-[13px] text-[#F5F1E8]/60 hover:text-[#F5F1E8] transition-colors"
            >
              Settings
            </Link>
            <Link
              to="/app/new"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[13px] font-medium text-[#F5F1E8] bg-[#DC2626]"
            >
              <Plus className="w-3.5 h-3.5" />
              New content
            </Link>
          </div>
        </div>
      </header>

      <div
        className="border-b"
        style={{ borderColor: "rgba(245, 241, 232, 0.04)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-3 text-[12px] text-[#F5F1E8]/40">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
            <span className="text-[#F5F1E8]/60">
              {platforms.length} formats ready
            </span>
          </div>
          <span className="text-[#F5F1E8]/20">·</span>
          <span>Generated just now</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-3">
            <div className="sticky top-20">
              <p className="text-[11px] font-medium text-[#F5F1E8]/40 uppercase tracking-wider px-2 mb-3">
                Your Outputs
              </p>
              <nav className="space-y-0.5">
                {platforms.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setActivePlatform(p.id);
                      document.getElementById(p.id)?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                    className={`group w-full flex items-center gap-2.5 px-2 py-1.5 rounded-md text-[13px] transition-colors ${activePlatform === p.id ? "bg-[#F5F1E8]/[0.06] text-[#F5F1E8]" : "text-[#F5F1E8]/50 hover:bg-[#F5F1E8]/[0.03] hover:text-[#F5F1E8]/80"}`}
                  >
                    <p.icon className="w-3.5 h-3.5 shrink-0" />
                    <span className="flex-1 text-left truncate">{p.name}</span>
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopy(p.id);
                      }}
                      className="opacity-0 group-hover:opacity-100 text-[#F5F1E8]/40 hover:text-[#F5F1E8] transition-all"
                    >
                      {copied === p.id ? (
                        <Check className="w-3 h-3 text-[#DC2626]" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                    </span>
                  </button>
                ))}
              </nav>
              <div
                className="mt-6 pt-4 space-y-2"
                style={{ borderTop: "1px solid rgba(245, 241, 232, 0.06)" }}
              >
                <button
                  onClick={handleCopyAll}
                  className="w-full flex items-center justify-center gap-1.5 py-2 rounded-md text-[13px] font-medium text-[#F5F1E8]/70 hover:text-[#F5F1E8] transition-colors"
                  style={{
                    background: "rgba(245, 241, 232, 0.04)",
                    border: "1px solid rgba(245, 241, 232, 0.06)",
                  }}
                >
                  {copiedAll ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#DC2626]" />
                      Copied all
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copy all outputs
                    </>
                  )}
                </button>
                <button className="w-full flex items-center justify-center gap-1.5 py-2 rounded-md text-[13px] font-medium text-[#F5F1E8]/50 hover:text-[#F5F1E8]/70 transition-colors">
                  <Download className="w-3.5 h-3.5" />
                  Export as file
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-9 space-y-3">
            {platforms.map((p) => {
              const content = outputs[p.id] || "";
              const wordCount = content.split(/\s+/).filter(Boolean).length;
              const isEditing = editing === p.id;
              return (
                <div
                  key={p.id}
                  id={p.id}
                  className={`rounded-lg ${activePlatform === p.id ? "ring-1 ring-[#F5F1E8]/10" : ""}`}
                  style={{
                    background: "#242424",
                    border: "1px solid rgba(245, 241, 232, 0.06)",
                  }}
                >
                  <div
                    className="flex items-center justify-between px-5 py-3 border-b"
                    style={{ borderColor: "rgba(245, 241, 232, 0.04)" }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-7 h-7 rounded-md flex items-center justify-center"
                        style={{ background: "rgba(245, 241, 232, 0.04)" }}
                      >
                        <p.icon className="w-3.5 h-3.5 text-[#F5F1E8]/80" />
                      </div>
                      <div>
                        <h3 className="text-[14px] font-semibold text-[#F5F1E8]">
                          {p.name}
                        </h3>
                        <span className="text-[11px] text-[#F5F1E8]/40">
                          {p.format}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setEditing(isEditing ? null : p.id)}
                        className="p-1.5 rounded-md text-[#F5F1E8]/40 hover:text-[#F5F1E8]/80 hover:bg-[#F5F1E8]/[0.06] transition-colors"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => alert("Coming soon")}
                        className="p-1.5 rounded-md text-[#F5F1E8]/40 hover:text-[#F5F1E8]/80 hover:bg-[#F5F1E8]/[0.06] transition-colors"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                      </button>
                      <div className="w-px h-4 bg-[#F5F1E8]/10 mx-1" />
                      <button
                        onClick={() => handleCopy(p.id)}
                        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[12px] font-medium text-[#F5F1E8]/70 hover:text-[#F5F1E8] hover:bg-[#F5F1E8]/[0.06] transition-colors"
                      >
                        {copied === p.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#DC2626]" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="px-5 py-4">
                    {isEditing ? (
                      <textarea
                        value={outputs[p.id]}
                        onChange={(e) =>
                          setOutputs({ ...outputs, [p.id]: e.target.value })
                        }
                        className="w-full min-h-[200px] text-[14px] text-[#F5F1E8]/90 bg-transparent outline-none resize-none"
                        style={{ lineHeight: "1.7" }}
                        autoFocus
                      />
                    ) : (
                      <div
                        className="text-[14px] text-[#F5F1E8]/85 whitespace-pre-wrap"
                        style={{ lineHeight: "1.7" }}
                      >
                        {content}
                      </div>
                    )}
                  </div>
                  <div
                    className="flex items-center justify-between px-5 py-3 border-t"
                    style={{ borderColor: "rgba(245, 241, 232, 0.04)" }}
                  >
                    <div className="flex items-center gap-4 text-[11px] text-[#F5F1E8]/40">
                      <span>{wordCount} words</span>
                      <span className="text-[#F5F1E8]/20">·</span>
                      <span>{content.length} characters</span>
                    </div>
                    <div className="text-[11px] text-[#F5F1E8]/40">
                      💡 {tips[p.id]}
                    </div>
                  </div>
                  {isEditing && (
                    <div
                      className="flex items-center justify-end gap-2 px-5 py-3 border-t"
                      style={{ borderColor: "rgba(245, 241, 232, 0.04)" }}
                    >
                      <button
                        onClick={() => setEditing(null)}
                        className="px-3 py-1.5 rounded-md text-[13px] font-medium text-[#F5F1E8]/60 hover:text-[#F5F1E8]"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleSaveEdit}
                        className="px-3 py-1.5 rounded-md text-[13px] font-medium text-[#F5F1E8] bg-[#DC2626]"
                      >
                        Save changes
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default AppResults;
