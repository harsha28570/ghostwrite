import { SignIn } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-[#1A1A1A]">
      {/* Logo */}
      <Logo className="mb-8" />

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
