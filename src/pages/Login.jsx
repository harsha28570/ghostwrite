import { SignIn } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { Ghost } from "lucide-react";

function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-[#1A1A1A]">
      {/* Logo */}
      <Link to="/" className="group flex items-center gap-2.5 mb-8">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#DC2626] to-[#B91C1C] flex items-center justify-center">
          <Ghost className="w-5 h-5 text-[#F5F1E8]" strokeWidth={2.5} />
        </div>
        <span className="text-xl font-semibold text-[#F5F1E8] tracking-tight">
          GhostWrite
        </span>
      </Link>

      {/* Clerk SignIn Component */}
      <SignIn
        routing="hash"
        signUpUrl="/signup"
        fallbackRedirectUrl="/dashboard"
      />

      {/* Sign Up Link */}
      <p className="mt-6 text-center text-[14px] text-[#F5F1E8]/60">
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="text-[#DC2626] hover:text-[#EF4444] font-medium transition-colors"
        >
          Sign up free
        </Link>
      </p>
    </div>
  );
}

export default LoginPage;
