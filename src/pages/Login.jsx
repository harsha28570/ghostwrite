import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Ghost, Mail, Lock, Github, Chrome } from "lucide-react";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => navigate("/dashboard"), 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-[#1A1A1A]">
      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <Link to="/" className="group flex items-center justify-center gap-2.5 mb-8">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#DC2626] to-[#B91C1C] flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.3)] group-hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all duration-500 group-hover:scale-105">
            <Ghost className="w-5 h-5 text-[#F5F1E8]" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-semibold text-[#F5F1E8] tracking-tight">GhostWrite</span>
        </Link>

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full" style={{ background: "rgba(245, 241, 232, 0.05)", border: "1px solid rgba(245, 241, 232, 0.1)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
            <span className="text-[11px] font-medium text-[#F5F1E8]/80">Welcome back!</span>
          </div>
        </div>

        {/* Main Card */}
        <div className="rounded-2xl p-8" style={{ background: "#242424", border: "1px solid rgba(245, 241, 232, 0.08)" }}>
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-[#F5F1E8] mb-2" style={{ letterSpacing: "-0.03em" }}>Sign in to your account</h1>
            <p className="text-[14px] text-[#F5F1E8]/60">Continue creating amazing content</p>
          </div>

          {/* Social Login */}
          <div className="space-y-2.5 mb-6">
            <button type="button" className="flex items-center justify-center gap-3 w-full py-3 rounded-xl text-[#F5F1E8] font-medium text-[14px]" style={{ background: "rgba(245, 241, 232, 0.03)", border: "1px solid rgba(245, 241, 232, 0.08)" }}>
              <Chrome className="w-4 h-4" />Continue with Google
            </button>
            <button type="button" className="flex items-center justify-center gap-3 w-full py-3 rounded-xl text-[#F5F1E8] font-medium text-[14px]" style={{ background: "rgba(245, 241, 232, 0.03)", border: "1px solid rgba(245, 241, 232, 0.08)" }}>
              <Github className="w-4 h-4" />Continue with GitHub
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-[#F5F1E8]/10" />
            <span className="text-[11px] font-medium text-[#F5F1E8]/40 uppercase tracking-wider">Or sign in with email</span>
            <div className="flex-1 h-px bg-[#F5F1E8]/10" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[12px] font-medium text-[#F5F1E8]/60 mb-2">Email address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#F5F1E8]/40" />
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com"
                  className="w-full pl-11 pr-4 py-3 text-[14px] text-[#F5F1E8] placeholder:text-[#F5F1E8]/40 rounded-xl outline-none focus:border-[#DC2626]/40"
                  style={{ background: "rgba(245, 241, 232, 0.02)", border: "1px solid rgba(245, 241, 232, 0.08)" }} />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-[12px] font-medium text-[#F5F1E8]/60">Password</label>
                <Link to="/forgot-password" className="text-[12px] text-[#DC2626] hover:text-[#EF4444] font-medium">Forgot password?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#F5F1E8]/40" />
                <input type="password" required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Enter your password"
                  className="w-full pl-11 pr-4 py-3 text-[14px] text-[#F5F1E8] placeholder:text-[#F5F1E8]/40 rounded-xl outline-none focus:border-[#DC2626]/40"
                  style={{ background: "rgba(245, 241, 232, 0.02)", border: "1px solid rgba(245, 241, 232, 0.08)" }} />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2">
              <button type="button" onClick={() => setRememberMe(!rememberMe)} className="relative w-4 h-4 rounded flex items-center justify-center transition-all"
                style={{ background: rememberMe ? "#DC2626" : "rgba(245, 241, 232, 0.05)", border: `1px solid ${rememberMe ? "#DC2626" : "rgba(245, 241, 232, 0.15)"}` }}>
                {rememberMe && <svg className="w-3 h-3 text-[#F5F1E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
              </button>
              <label onClick={() => setRememberMe(!rememberMe)} className="text-[12px] text-[#F5F1E8]/60 cursor-pointer select-none">Remember me for 30 days</label>
            </div>

            <button type="submit" disabled={loading}
              className="group flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-[#F5F1E8] font-medium text-[14px] transition-all hover:scale-[1.02] disabled:opacity-70 mt-2 bg-[#DC2626]">
              {loading ? (
                <><div className="w-4 h-4 border-2 border-[#F5F1E8]/30 border-t-[#F5F1E8] rounded-full animate-spin" />Signing in...</>
              ) : (
                <>Sign in<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" /></>
              )}
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-[14px] text-[#F5F1E8]/60">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#DC2626] hover:text-[#EF4444] font-medium transition-colors">Sign up free</Link>
        </p>

        {/* Trust */}
        <div className="mt-8 flex items-center justify-center gap-4 text-[11px] text-[#F5F1E8]/40">
          <div className="flex items-center gap-1.5">
            <div className="w-1 h-1 rounded-full bg-[#DC2626]" />Secure login
          </div>
          <div className="w-1 h-1 rounded-full bg-[#F5F1E8]/20" />
          <div className="flex items-center gap-1.5">
            <div className="w-1 h-1 rounded-full bg-[#DC2626]" />256-bit encryption
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;