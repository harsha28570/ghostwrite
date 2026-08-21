import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { motion } from "framer-motion";
import {
  Ghost,
  Users,
  FileText,
  DollarSign,
  ShieldAlert,
  Search,
  ArrowLeft,
  Crown,
  Check,
  RefreshCw,
  Layers,
} from "lucide-react";
import {
  getAllUsersUsageAdmin,
  getAllGenerationsAdmin,
  updateUserPlanAdmin,
} from "../services/supabase";

// Change this to your exact email
const ADMIN_EMAILS = ["leoharsha2006@gmail.com"];

function AdminPanel() {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();

  const [usersList, setUsersList] = useState([]);
  const [generationsList, setGenerationsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [updatingUser, setUpdatingUser] = useState(null);

  const userEmail = user?.primaryEmailAddress?.emailAddress;
  const isAdmin = ADMIN_EMAILS.includes(userEmail);

  useEffect(() => {
    if (isLoaded && !isAdmin) {
      // Not admin - stay blocked or redirect
      setLoading(false);
      return;
    }

    if (isLoaded && isAdmin) {
      loadAdminData();
    }
  }, [isLoaded, isAdmin]);

  const loadAdminData = async () => {
    setLoading(true);
    const [users, generations] = await Promise.all([
      getAllUsersUsageAdmin(),
      getAllGenerationsAdmin(),
    ]);
    setUsersList(users);
    setGenerationsList(generations);
    setLoading(false);
  };

  const handlePlanChange = async (userId, newPlan) => {
    setUpdatingUser(userId);
    const updated = await updateUserPlanAdmin(userId, newPlan);
    if (updated) {
      setUsersList((prev) =>
        prev.map((u) => (u.user_id === userId ? { ...u, plan: newPlan } : u)),
      );
    } else {
      alert("Failed to update user plan.");
    }
    setUpdatingUser(null);
  };

  // Calculations
  const totalUsers = usersList.length;
  const totalGenerations = usersList.reduce(
    (acc, u) => acc + (u.total_generations || 0),
    0,
  );
  const proUsers = usersList.filter((u) => u.plan === "pro").length;
  const businessUsers = usersList.filter((u) => u.plan === "business").length;
  const estimatedMRR = proUsers * 499 + businessUsers * 1999;

  const filteredUsers = usersList.filter((u) =>
    (u.user_email || u.user_id)
      .toLowerCase()
      .includes(searchQuery.toLowerCase()),
  );

  // Security Gate
  if (isLoaded && !isAdmin) {
    return (
      <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-[#242424] border border-red-500/30 rounded-2xl p-8 text-center">
          <ShieldAlert className="w-12 h-12 text-[#DC2626] mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-[#F5F1E8] mb-2">
            Access Denied
          </h1>
          <p className="text-[#F5F1E8]/60 mb-6 text-sm">
            This area is restricted to the CEO of GhostWrite only ({userEmail}).
          </p>
          <Link
            to="/dashboard"
            className="px-5 py-2.5 bg-[#DC2626] text-[#F5F1E8] rounded-xl text-sm font-medium inline-block"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-[#F5F1E8]">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-[#F5F1E8]/10 bg-[#1A1A1A]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/dashboard"
              className="p-2 rounded-lg bg-[#F5F1E8]/5 border border-[#F5F1E8]/10 text-[#F5F1E8]/70 hover:text-[#F5F1E8]"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#DC2626] flex items-center justify-center shadow-lg shadow-red-500/20">
                <Ghost className="w-4 h-4 text-[#F5F1E8]" />
              </div>
              <span className="font-bold text-[#F5F1E8] text-lg tracking-tight">
                GhostWrite Admin
              </span>
              <span className="text-[10px] bg-[#DC2626]/20 text-[#DC2626] font-mono px-2 py-0.5 rounded-full border border-[#DC2626]/30">
                CEO
              </span>
            </div>
          </div>

          <button
            onClick={loadAdminData}
            disabled={loading}
            className="flex items-center gap-2 px-3 py-1.5 text-xs bg-[#F5F1E8]/5 border border-[#F5F1E8]/10 rounded-lg hover:bg-[#F5F1E8]/10 transition"
          >
            <RefreshCw
              className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`}
            />
            Refresh Data
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-1">App Command Center</h1>
          <p className="text-sm text-[#F5F1E8]/60">
            Live metrics & user management for GhostWrite
          </p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-6 rounded-2xl bg-[#242424] border border-[#F5F1E8]/10">
            <div className="flex items-center justify-between text-[#F5F1E8]/50 mb-3">
              <span className="text-xs font-medium uppercase tracking-wider">
                Total Users
              </span>
              <Users className="w-4 h-4 text-[#DC2626]" />
            </div>
            <div className="text-3xl font-bold">{totalUsers}</div>
            <div className="text-[11px] text-[#F5F1E8]/40 mt-1">
              Registered in Supabase
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#242424] border border-[#F5F1E8]/10">
            <div className="flex items-center justify-between text-[#F5F1E8]/50 mb-3">
              <span className="text-xs font-medium uppercase tracking-wider">
                Total Generations
              </span>
              <FileText className="w-4 h-4 text-[#DC2626]" />
            </div>
            <div className="text-3xl font-bold">{totalGenerations}</div>
            <div className="text-[11px] text-[#F5F1E8]/40 mt-1">
              Across all users
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#242424] border border-[#F5F1E8]/10">
            <div className="flex items-center justify-between text-[#F5F1E8]/50 mb-3">
              <span className="text-xs font-medium uppercase tracking-wider">
                Paid Members
              </span>
              <Crown className="w-4 h-4 text-[#DC2626]" />
            </div>
            <div className="text-3xl font-bold">{proUsers + businessUsers}</div>
            <div className="text-[11px] text-[#F5F1E8]/40 mt-1">
              {proUsers} Pro · {businessUsers} Business
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#242424] border border-[#F5F1E8]/10">
            <div className="flex items-center justify-between text-[#F5F1E8]/50 mb-3">
              <span className="text-xs font-medium uppercase tracking-wider">
                Est. MRR
              </span>
              <DollarSign className="w-4 h-4 text-[#DC2626]" />
            </div>
            <div className="text-3xl font-bold text-[#DC2626]">
              ₹{estimatedMRR.toLocaleString()}
            </div>
            <div className="text-[11px] text-[#F5F1E8]/40 mt-1">
              Monthly recurring revenue
            </div>
          </div>
        </div>

        {/* User Management Table */}
        <div className="bg-[#242424] border border-[#F5F1E8]/10 rounded-2xl p-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-lg font-bold">
                User Management ({filteredUsers.length})
              </h2>
              <p className="text-xs text-[#F5F1E8]/50">
                Manage access and override user subscription plans
              </p>
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#F5F1E8]/40" />
              <input
                type="text"
                placeholder="Search by email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-[#1A1A1A] border border-[#F5F1E8]/10 rounded-xl text-xs text-[#F5F1E8] outline-none focus:border-[#DC2626]"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-[#F5F1E8]/80">
              <thead className="text-[10px] uppercase text-[#F5F1E8]/40 bg-[#1A1A1A] border-b border-[#F5F1E8]/10">
                <tr>
                  <th className="p-3 rounded-l-lg">User Email / ID</th>
                  <th className="p-3">Current Plan</th>
                  <th className="p-3">This Month</th>
                  <th className="p-3">Total Generations</th>
                  <th className="p-3">Joined Date</th>
                  <th className="p-3 text-right rounded-r-lg">Change Plan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F5F1E8]/5">
                {filteredUsers.length === 0 ? (
                  <tr>
                    <td
                      colSpan="6"
                      className="p-8 text-center text-[#F5F1E8]/40"
                    >
                      No users found. Users will appear here after making their
                      first generation.
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((u) => (
                    <tr key={u.id} className="hover:bg-[#1A1A1A]/50 transition">
                      <td className="p-3 font-mono text-[#F5F1E8]">
                        {u.user_email || u.user_id}
                      </td>
                      <td className="p-3">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                            u.plan === "pro"
                              ? "bg-[#DC2626]/20 text-[#DC2626] border border-[#DC2626]/40"
                              : u.plan === "business"
                                ? "bg-amber-500/20 text-amber-400 border border-amber-500/40"
                                : "bg-white/5 text-white/60 border border-white/10"
                          }`}
                        >
                          {u.plan || "free"}
                        </span>
                      </td>
                      <td className="p-3 font-mono">
                        {u.generations_this_month || 0}
                      </td>
                      <td className="p-3 font-mono">
                        {u.total_generations || 0}
                      </td>
                      <td className="p-3 text-[#F5F1E8]/40">
                        {new Date(u.created_at).toLocaleDateString()}
                      </td>
                      <td className="p-3 text-right">
                        <select
                          value={u.plan || "free"}
                          disabled={updatingUser === u.user_id}
                          onChange={(e) =>
                            handlePlanChange(u.user_id, e.target.value)
                          }
                          className="bg-[#1A1A1A] border border-[#F5F1E8]/20 text-[#F5F1E8] text-xs rounded-lg px-2 py-1 outline-none cursor-pointer focus:border-[#DC2626]"
                        >
                          <option value="free">Free</option>
                          <option value="pro">Pro (₹499)</option>
                          <option value="business">Business (₹1999)</option>
                        </select>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Global Recent Activity Log */}
        <div className="bg-[#242424] border border-[#F5F1E8]/10 rounded-2xl p-6">
          <h2 className="text-lg font-bold mb-1">Live Global Feed</h2>
          <p className="text-xs text-[#F5F1E8]/50 mb-4">
            Latest 100 generations across all users
          </p>

          <div className="space-y-2">
            {generationsList.length === 0 ? (
              <p className="text-xs text-[#F5F1E8]/40 py-6 text-center">
                No global generations logged yet.
              </p>
            ) : (
              generationsList.slice(0, 10).map((gen) => (
                <div
                  key={gen.id}
                  className="p-3 bg-[#1A1A1A] border border-[#F5F1E8]/5 rounded-xl flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#DC2626]/10 flex items-center justify-center text-[#DC2626]">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#F5F1E8] line-clamp-1">
                        {gen.original_content?.substring(0, 60)}...
                      </p>
                      <p className="text-[10px] text-[#F5F1E8]/40">
                        {gen.user_email || gen.user_id} · {gen.content_type} ·{" "}
                        {new Date(gen.created_at).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-[#F5F1E8]/50 bg-white/5 px-2 py-1 rounded">
                    {gen.word_count || 0} words
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminPanel;
