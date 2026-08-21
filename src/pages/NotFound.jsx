import { Link } from "react-router-dom";
import { Ghost, ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 rounded-2xl bg-[#242424] border border-[#F5F1E8]/10 flex items-center justify-center mb-6">
          <Ghost className="w-10 h-10 text-[#F5F1E8]/40" strokeWidth={1.5} />
        </div>
        <h1 className="text-6xl font-bold text-[#F5F1E8] mb-4 tracking-tighter">
          404
        </h1>
        <h2 className="text-xl text-[#F5F1E8] mb-2">Page not found</h2>
        <p className="text-[#F5F1E8]/50 text-sm mb-8 max-w-sm">
          The page you are looking for doesn't exist, has been moved, or is
          temporarily unavailable.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-[#F5F1E8] bg-[#DC2626] hover:bg-[#B91C1C] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
