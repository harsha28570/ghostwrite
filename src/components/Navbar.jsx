import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import {
  Menu,
  X,
  Ghost,
  ArrowRight,
  Sparkles,
  LayoutDashboard,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToSection } from "../utils/navigation";

const navLinks = [
  { name: "Features", href: "#features", type: "section" },
  { name: "How it works", href: "#how-it-works", type: "section" },
  { name: "Pricing", href: "#pricing", type: "pricing" },
  { name: "FAQ", href: "#faq", type: "section" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionNav = (href) => {
    if (location.pathname === "/") {
      scrollToSection(href);
    } else {
      navigate(`/${href}`);
    }
    setMobileOpen(false);
  };

  const handlePricingNav = () => {
    if (location.pathname === "/") {
      scrollToSection("#pricing");
    } else {
      navigate("/pricing");
    }
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div
            className="relative rounded-full transition-all duration-500"
            style={{
              background: scrolled
                ? "rgba(26, 26, 26, 0.65)"
                : "rgba(26, 26, 26, 0.45)",
              backdropFilter: "blur(40px) saturate(180%)",
              WebkitBackdropFilter: "blur(40px) saturate(180%)",
              border: scrolled
                ? "1px solid rgba(245, 241, 232, 0.12)"
                : "1px solid rgba(245, 241, 232, 0.06)",
              boxShadow: scrolled
                ? "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(245, 241, 232, 0.05)"
                : "0 4px 16px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="relative flex items-center justify-between px-5 sm:px-6 h-14">
              {/* Logo */}
              <Link
                to="/"
                className="group flex items-center gap-2.5 transition-all duration-300"
              >
                <div className="relative">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#DC2626] via-[#B91C1C] to-[#7F1D1D] flex items-center justify-center shadow-[0_0_15px_rgba(220,38,38,0.3)] group-hover:shadow-[0_0_25px_rgba(220,38,38,0.5)] transition-all duration-500 group-hover:scale-105">
                    <Ghost
                      className="w-4 h-4 text-[#F5F1E8]"
                      strokeWidth={2.5}
                    />
                  </div>
                </div>
                <span className="text-[15px] font-semibold text-[#F5F1E8] tracking-tight">
                  GhostWrite
                </span>
              </Link>

              {/* Desktop Nav Links */}
              <div className="hidden lg:flex items-center gap-1 mx-4">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() =>
                      link.type === "pricing"
                        ? handlePricingNav()
                        : handleSectionNav(link.href)
                    }
                    className="relative px-3.5 py-1.5 text-[13.5px] font-medium text-[#F5F1E8]/70 hover:text-[#F5F1E8] transition-all duration-300 rounded-full hover:bg-[#F5F1E8]/[0.08]"
                  >
                    {link.name}
                  </button>
                ))}
              </div>

              {/* Desktop CTAs */}
              <div className="hidden lg:flex items-center gap-2">
                <SignedOut>
                  <Link
                    to="/login"
                    className="px-3.5 py-1.5 text-[13.5px] font-medium text-[#F5F1E8]/70 hover:text-[#F5F1E8] transition-all duration-300 rounded-full hover:bg-[#F5F1E8]/[0.08]"
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/signup"
                    className="group relative inline-flex items-center gap-1.5 px-4 py-1.5 text-[13.5px] font-medium text-[#F5F1E8] rounded-full transition-all duration-300 bg-[#DC2626] hover:bg-[#B91C1C]"
                    style={{ boxShadow: "0 4px 12px rgba(220, 38, 38, 0.3)" }}
                  >
                    <span className="relative flex items-center gap-1.5">
                      Get Started
                      <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </SignedOut>

                <SignedIn>
                  <Link
                    to="/dashboard"
                    className="px-3.5 py-1.5 text-[13.5px] font-medium text-[#F5F1E8]/70 hover:text-[#F5F1E8] transition-all duration-300 rounded-full hover:bg-[#F5F1E8]/[0.08]"
                  >
                    Dashboard
                  </Link>
                  <UserButton
                    appearance={{
                      elements: { avatarBox: "w-8 h-8 rounded-lg" },
                    }}
                  />
                </SignedIn>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden relative w-9 h-9 flex items-center justify-center text-[#F5F1E8]/70 hover:text-[#F5F1E8] transition-all duration-300 rounded-full hover:bg-[#F5F1E8]/[0.08]"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {mobileOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-4 h-4" strokeWidth={2.5} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-4 h-4" strokeWidth={2.5} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 lg:hidden"
              style={{
                background: "rgba(26, 26, 26, 0.5)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-20 left-4 right-4 z-50 lg:hidden"
            >
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(26, 26, 26, 0.75)",
                  backdropFilter: "blur(60px) saturate(180%)",
                  WebkitBackdropFilter: "blur(60px) saturate(180%)",
                  border: "1px solid rgba(245, 241, 232, 0.1)",
                  boxShadow:
                    "0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(245, 241, 232, 0.05)",
                }}
              >
                {/* Accent line */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#DC2626] to-transparent" />

                <div className="relative p-3">
                  <div className="flex flex-col gap-0.5 mb-3">
                    {navLinks.map((link) => (
                      <button
                        key={link.name}
                        onClick={() =>
                          link.type === "pricing"
                            ? handlePricingNav()
                            : handleSectionNav(link.href)
                        }
                        className="group flex items-center justify-between px-3 py-2.5 text-left text-[14px] font-medium text-[#F5F1E8]/70 hover:text-[#F5F1E8] hover:bg-[#F5F1E8]/[0.05] rounded-xl transition-all duration-200"
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      </button>
                    ))}

                    <Link
                      to="/dashboard"
                      onClick={() => setMobileOpen(false)}
                      className="group flex items-center justify-between px-3 py-2.5 text-[14px] font-medium text-[#F5F1E8]/70 hover:text-[#F5F1E8] hover:bg-[#F5F1E8]/[0.05] rounded-xl transition-all duration-200"
                    >
                      <span className="flex items-center gap-2">
                        <LayoutDashboard className="w-3.5 h-3.5" />
                        Dashboard
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </Link>
                  </div>

                  <div className="h-px bg-[#F5F1E8]/[0.06] my-2" />

                  <div className="flex flex-col gap-2 pt-1">
                    <Link
                      to="/login"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-center w-full px-4 py-2.5 border border-[#F5F1E8]/[0.1] hover:border-[#F5F1E8]/[0.2] text-[#F5F1E8]/70 hover:text-[#F5F1E8] rounded-xl transition-all duration-300 text-[14px] font-medium"
                    >
                      Sign in
                    </Link>

                    <Link
                      to="/signup"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-[#F5F1E8] rounded-xl transition-all duration-300 text-[14px] font-medium bg-[#DC2626] hover:bg-[#B91C1C]"
                      style={{
                        boxShadow: "0 4px 12px rgba(220, 38, 38, 0.3)",
                      }}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      Get Started Free
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
