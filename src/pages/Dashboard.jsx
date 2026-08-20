import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getUserGenerations, getUserUsage } from "../services/supabase";
import { useState, useEffect } from "react";
import { UserButton, useUser } from "@clerk/clerk-react";
import {
  Plus,
  FileText,
  Sparkles,
  Zap,
  Settings,
  LogOut,
  Ghost,
  TrendingUp,
  Clock,
  ArrowRight,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Youtube,
  BarChart3,
  Bell,
  Search,
  Rocket,
  Pen,
  Music2,
  Calendar,
  Filter,
  MoreVertical,
  Copy,
  Trash2,
  Eye,
  Flame,
  Award,
  Target,
  Layers,
  BookText,
  AlbumIcon,
} from "lucide-react";

// Sample recent activity data
const recentContent = [
  {
    id: 1,
    title: "Marketing Tips for 2025",
    type: "Blog Post",
    platforms: ["Twitter", "LinkedIn", "Instagram"],
    date: "2 hours ago",
    status: "completed",
  },
  {
    id: 2,
    title: "Product Launch Announcement",
    type: "Newsletter",
    platforms: ["Email", "Twitter", "LinkedIn"],
    date: "5 hours ago",
    status: "completed",
  },
  {
    id: 3,
    title: "AI Tools Comparison",
    type: "Article",
    platforms: ["LinkedIn", "YouTube"],
    date: "Yesterday",
    status: "draft",
  },
];

// Achievement data
const achievements = [
  {
    icon: Flame,
    label: "7 Day Streak",
    description: "Keep creating!",
    unlocked: false,
  },
  {
    icon: Award,
    label: "First Creation",
    description: "Generate your first content",
    unlocked: false,
  },
  {
    icon: Target,
    label: "10 Formats",
    description: "Generate 10+ formats",
    unlocked: false,
  },
  {
    icon: Layers,
    label: "Multi-Platform",
    description: "Use all 10 platforms",
    unlocked: false,
  },
];

const platformIcons = {
  Twitter: Twitter,
  LinkedIn: Linkedin,
  Instagram: Instagram,
  Email: Mail,
  YouTube: Youtube,
  TikTok: Music2,
};

function Dashboard() {
  const [selectedTab, setSelectedTab] = useState("recent");
  const { user } = useUser();
  const [recentItems, setRecentItems] = useState([]);
  const [stats, setStats] = useState({
    contentCreated: 0,
    formatsGenerated: 0,
    hoursSaved: 0,
  });
  const [loadingData, setLoadingData] = useState(true);

  // Load real data from database
  useEffect(() => {
    async function loadData() {
      if (!user) return;

      try {
        // Get user's generations
        const generations = await getUserGenerations(user.id);
        setRecentItems(generations);

        // Get usage stats
        const usage = await getUserUsage(
          user.id,
          user.primaryEmailAddress?.emailAddress,
        );

        setStats({
          contentCreated: usage?.total_generations || 0,
          formatsGenerated: (usage?.total_generations || 0) * 10,
          hoursSaved: Math.round((usage?.total_generations || 0) * 0.5),
        });
      } catch (err) {
        console.error("Error loading dashboard data:", err);
      } finally {
        setLoadingData(false);
      }
    }

    loadData();
  }, [user]);

  useEffect(() => {
    async function sendWelcomeEmailIfNeeded() {
      if (!user) return;

      const creationTime = new Date(user.createdAt).getTime();
      const now = new Date().getTime();
      const ageInMinutes = (now - creationTime) / (1000 * 60);
      const hasWelcomed = localStorage.getItem(`welcomed_${user.id}`);

      if (ageInMinutes < 2 && !hasWelcomed) {
        try {
          const emailBody = `
            <h2>Welcome to GhostWrite, ${user.firstName || "Creator"}! 👻</h2>
            <p>We're thrilled to have you here. You just unlocked the fastest way to repurpose your content.</p>
            <p>Head over to your dashboard and generate your first 10 formats.</p>
            <br/>
            <p>Happy creating,</p>
            <p>Ricky @ GhostWrite</p>
          `;

          await fetch("/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              to: user.primaryEmailAddress?.emailAddress,
              subject: "Welcome to GhostWrite! ✨",
              html: emailBody,
            }),
          });

          localStorage.setItem(`welcomed_${user.id}`, "true");
        } catch (error) {
          console.error("Failed to send welcome email:", error);
        }
      }
    }

    sendWelcomeEmailIfNeeded();
  }, [user]);

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
          <Link
            to="/"
            className="group flex items-center gap-2.5 transition-all duration-300"
          >
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#DC2626] via-[#B91C1C] to-[#7F1D1D] flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.3)] group-hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all duration-500 group-hover:scale-105">
                <Ghost className="w-5 h-5 text-[#F5F1E8]" strokeWidth={2.5} />
              </div>
            </div>
            <span className="text-[16px] font-semibold text-[#F5F1E8] tracking-tight">
              GhostWrite
            </span>
          </Link>

          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#F5F1E8]/40" />
              <input
                type="text"
                placeholder="Search your content..."
                className="w-full pl-10 pr-4 py-2 text-[13px] text-[#F5F1E8] placeholder:text-[#F5F1E8]/40 rounded-lg outline-none transition-all focus:border-[#DC2626]/40"
                style={{
                  background: "rgba(245, 241, 232, 0.03)",
                  border: "1px solid rgba(245, 241, 232, 0.06)",
                }}
              />
              <kbd
                className="absolute right-3 top-1/2 -translate-y-1/2 px-1.5 py-0.5 text-[10px] font-mono text-[#F5F1E8]/40 rounded"
                style={{
                  background: "rgba(245, 241, 232, 0.05)",
                  border: "1px solid rgba(245, 241, 232, 0.1)",
                }}
              >
                ⌘K
              </kbd>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="relative p-2 rounded-lg text-[#F5F1E8]/60 hover:text-[#F5F1E8] transition-all"
              style={{
                background: "rgba(245, 241, 232, 0.03)",
                border: "1px solid rgba(245, 241, 232, 0.06)",
              }}
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
            </button>
            <Link
              to="/app/settings"
              className="p-2 rounded-lg text-[#F5F1E8]/60 hover:text-[#F5F1E8] transition-all"
              style={{
                background: "rgba(245, 241, 232, 0.03)",
                border: "1px solid rgba(245, 241, 232, 0.06)",
              }}
            >
              <Settings className="w-4 h-4" />
            </Link>
            <div className="w-px h-6 bg-[#F5F1E8]/10 mx-1" />
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-8 h-8 rounded-lg",
                },
              }}
            />
          </div>
        </div>
      </header>

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Welcome Section - Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-3">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-3xl"
            >
              👋
            </motion.div>
            <div
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full"
              style={{
                background: "rgba(245, 241, 232, 0.05)",
                border: "1px solid rgba(245, 241, 232, 0.1)",
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
              <span className="text-[11px] font-medium text-[#F5F1E8]/80">
                Ready to create
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1
                className="text-3xl md:text-4xl font-bold text-[#F5F1E8] mb-2"
                style={{ letterSpacing: "-0.03em" }}
              >
                Welcome back, {user?.firstName || "Creator"}
              </h1>
              <p className="text-[14px] text-[#F5F1E8]/60 max-w-lg">
                Your creative hub is ready. Let's transform some content today.
              </p>
            </div>

            {/* Big CTA Button - Only Crimson Element */}
            <Link
              to="/app/new"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[#F5F1E8] font-medium text-[14px] transition-all duration-300 hover:scale-105 shrink-0"
              style={{
                background: "linear-gradient(180deg, #DC2626 0%, #B91C1C 100%)",
                boxShadow:
                  "inset 0 1px 0 rgba(245,241,232,0.15), 0 10px 30px rgba(220, 38, 38, 0.3)",
              }}
            >
              <Pen className="w-4 h-4" strokeWidth={2.5} />
              Create Content
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* Stats Grid - Minimal */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            {
              label: "Content Created",
              value: String(stats.contentCreated),
              icon: FileText,
              trend:
                stats.contentCreated > 0
                  ? `${stats.contentCreated} pieces total`
                  : "Start today",
              progress: Math.min(100, (stats.contentCreated / 10) * 100),
            },
            {
              label: "Formats Generated",
              value: String(stats.formatsGenerated),
              icon: AlbumIcon,
              trend:
                stats.formatsGenerated > 0 ? "Keep creating!" : "Ready to go",
              progress: Math.min(100, (stats.formatsGenerated / 100) * 100),
            },
            {
              label: "Hours Saved",
              value: String(stats.hoursSaved),
              icon: Clock,
              trend:
                stats.hoursSaved > 0
                  ? `${stats.hoursSaved}h saved!`
                  : "Time is money",
              progress: Math.min(100, (stats.hoursSaved / 50) * 100),
            },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative rounded-2xl p-6 overflow-hidden group transition-all"
              style={{
                background: "#242424",
                border: "1px solid rgba(245, 241, 232, 0.08)",
              }}
            >
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background: "rgba(245, 241, 232, 0.05)",
                      border: "1px solid rgba(245, 241, 232, 0.08)",
                    }}
                  >
                    <stat.icon
                      className="w-5 h-5 text-[#F5F1E8]/70"
                      strokeWidth={2}
                    />
                  </div>
                  <TrendingUp className="w-4 h-4 text-[#F5F1E8]/30" />
                </div>

                <div className="mb-1">
                  <span
                    className="text-4xl font-bold text-[#F5F1E8]"
                    style={{ letterSpacing: "-0.04em" }}
                  >
                    {stat.value}
                  </span>
                </div>

                <div className="text-[13px] font-medium text-[#F5F1E8]/70 mb-3">
                  {stat.label}
                </div>

                {/* Progress bar */}
                <div className="h-1 rounded-full bg-[#F5F1E8]/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${stat.progress}%` }}
                    transition={{ duration: 1, delay: i * 0.2 }}
                    className="h-full rounded-full bg-[#DC2626]"
                  />
                </div>

                <div className="mt-2 text-[11px] text-[#F5F1E8]/40">
                  {stat.trend}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Two Column Layout: History + Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Recent Activity - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2 rounded-2xl p-6"
            style={{
              background: "#242424",
              border: "1px solid rgba(245, 241, 232, 0.08)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{
                    background: "rgba(245, 241, 232, 0.05)",
                    border: "1px solid rgba(245, 241, 232, 0.08)",
                  }}
                >
                  <Clock className="w-4 h-4 text-[#F5F1E8]/70" />
                </div>
                <div>
                  <h2
                    className="text-lg font-bold text-[#F5F1E8]"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    Recent Activity
                  </h2>
                  <p className="text-[11px] text-[#F5F1E8]/50">
                    Your content history
                  </p>
                </div>
              </div>

              {/* Filter buttons */}
              <div className="flex items-center gap-1">
                {["All", "Recent", "Drafts"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(tab.toLowerCase())}
                    className="px-3 py-1 text-[11px] font-medium rounded-md transition-all"
                    style={{
                      background:
                        selectedTab === tab.toLowerCase()
                          ? "rgba(220, 38, 38, 0.15)"
                          : "transparent",
                      color:
                        selectedTab === tab.toLowerCase()
                          ? "#DC2626"
                          : "rgba(245, 241, 232, 0.5)",
                      border:
                        selectedTab === tab.toLowerCase()
                          ? "1px solid rgba(220, 38, 38, 0.3)"
                          : "1px solid transparent",
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Content List */}
            <div className="space-y-2">
              {recentItems.length === 0 ? (
                <div className="py-12 text-center">
                  <FileText className="w-12 h-12 text-[#F5F1E8]/20 mx-auto mb-3" />
                  <p className="text-[#F5F1E8]/60 text-[14px] mb-4">
                    No content yet
                  </p>
                  <Link
                    to="/app/new"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] text-[#F5F1E8] font-medium bg-[#DC2626]"
                  >
                    <Plus className="w-3.5 h-3.5" /> Create First
                  </Link>
                </div>
              ) : (
                recentItems.slice(0, 5).map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="group flex items-center gap-4 p-3 rounded-xl transition-all cursor-pointer"
                    style={{
                      background: "rgba(245, 241, 232, 0.02)",
                      border: "1px solid rgba(245, 241, 232, 0.05)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(245, 241, 232, 0.05)",
                        border: "1px solid rgba(245, 241, 232, 0.08)",
                      }}
                    >
                      <FileText className="w-4 h-4 text-[#F5F1E8]/60" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[13px] font-semibold text-[#F5F1E8] truncate">
                        {item.content_type || "Content"} -{" "}
                        {item.original_content?.substring(0, 40)}...
                      </h3>
                      <div className="flex items-center gap-2 text-[11px] text-[#F5F1E8]/40">
                        <span>{item.content_type}</span>
                        <div className="w-0.5 h-0.5 rounded-full bg-[#F5F1E8]/20" />
                        <span>
                          {new Date(item.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div className="text-[11px] text-[#F5F1E8]/40 font-mono">
                      {item.word_count} words
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* View All Link */}
            <div className="mt-4 pt-4 border-t border-[#F5F1E8]/5">
              <Link
                to="/app"
                className="flex items-center justify-center gap-2 text-[12px] text-[#F5F1E8]/50 hover:text-[#F5F1E8] transition-colors"
              >
                View all history
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </motion.div>

          {/* Achievements - Takes 1 column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-2xl p-6"
            style={{
              background: "#242424",
              border: "1px solid rgba(245, 241, 232, 0.08)",
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: "rgba(245, 241, 232, 0.05)",
                  border: "1px solid rgba(245, 241, 232, 0.08)",
                }}
              >
                <Award className="w-4 h-4 text-[#F5F1E8]/70" />
              </div>
              <div>
                <h2
                  className="text-lg font-bold text-[#F5F1E8]"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  Achievements
                </h2>
                <p className="text-[11px] text-[#F5F1E8]/50">Level up!</p>
              </div>
            </div>

            {/* Progress Ring */}
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <svg className="w-32 h-32 -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    fill="none"
                    stroke="rgba(245, 241, 232, 0.05)"
                    strokeWidth="8"
                  />
                  <motion.circle
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 0.25 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    cx="64"
                    cy="64"
                    r="56"
                    fill="none"
                    stroke="#DC2626"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="352"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-2xl font-bold text-[#F5F1E8]">1/4</div>
                  <div className="text-[10px] text-[#F5F1E8]/50">Unlocked</div>
                </div>
              </div>
            </div>

            {/* Achievements list */}
            <div className="space-y-2">
              {achievements.map((achievement, i) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3 p-2.5 rounded-lg"
                  style={{
                    background: "rgba(245, 241, 232, 0.02)",
                    border: "1px solid rgba(245, 241, 232, 0.05)",
                    opacity: achievement.unlocked ? 1 : 0.5,
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: achievement.unlocked
                        ? "#DC2626"
                        : "rgba(245, 241, 232, 0.05)",
                    }}
                  >
                    <achievement.icon className="w-4 h-4 text-[#F5F1E8]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[12px] font-semibold text-[#F5F1E8]">
                      {achievement.label}
                    </div>
                    <div className="text-[10px] text-[#F5F1E8]/40 truncate">
                      {achievement.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quick Actions Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {[
            {
              icon: Pen,
              label: "AI Generator",
              href: "/app/new",
            },
            {
              icon: FileText,
              label: "Templates",
              href: "/app/settings",
            },
            {
              icon: BarChart3,
              label: "Analytics",
              href: "/dashboard",
            },
            {
              icon: Settings,
              label: "Settings",
              href: "/app/settings",
            },
          ].map((action, i) => (
            <Link
              key={action.label}
              to={action.href}
              className="group flex items-center gap-3 p-4 rounded-xl transition-all hover:scale-105"
              style={{
                background: "#242424",
                border: "1px solid rgba(245, 241, 232, 0.08)",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all group-hover:scale-110"
                style={{
                  background: "rgba(245, 241, 232, 0.05)",
                  border: "1px solid rgba(245, 241, 232, 0.08)",
                }}
              >
                <action.icon className="w-4 h-4 text-[#F5F1E8]/70" />
              </div>
              <span className="text-[13px] font-medium text-[#F5F1E8]/80 group-hover:text-[#F5F1E8]">
                {action.label}
              </span>
              <ArrowRight className="w-3.5 h-3.5 ml-auto text-[#F5F1E8]/30 group-hover:text-[#F5F1E8]/60 transition-all group-hover:translate-x-0.5" />
            </Link>
          ))}
        </motion.div>
      </main>
    </div>
  );
}

export default Dashboard;
