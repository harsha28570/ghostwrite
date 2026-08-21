import { SignUp } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-[#1A1A1A]">
      {/* Logo */}
      <Logo className="mb-8" />

      {/* Clerk SignUp Component */}
      <SignUp
        routing="hash"
        signInUrl="/login"
        fallbackRedirectUrl="/dashboard"
      />

      {/* Sign In Link */}
      <p className="mt-6 text-center text-[14px] text-[#F5F1E8]/60">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-[#DC2626] hover:text-[#EF4444] font-medium transition-colors"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}

export default SignUpPage;
