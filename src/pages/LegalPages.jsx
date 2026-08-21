import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LegalPages() {
  const location = useLocation();
  const path = location.pathname;

  const isPrivacy = path === "/privacy";
  const isTerms = path === "/terms";
  const isRefund = path === "/refund" || path === "/refund-policy";

  const title = isPrivacy
    ? "Privacy Policy"
    : isTerms
      ? "Terms of Service"
      : "Refund & Cancellation Policy";
  const lastUpdated = "June 1, 2025";

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-[#F5F1E8]">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <div className="border-b border-[#F5F1E8]/10 pb-8 mb-8">
          <p className="text-xs uppercase tracking-widest text-[#DC2626] font-semibold mb-2">
            Legal
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
            {title}
          </h1>
          <p className="text-xs text-[#F5F1E8]/40">
            Last Updated: {lastUpdated}
          </p>
        </div>

        <div className="space-y-8 text-sm text-[#F5F1E8]/80 leading-relaxed">
          {isPrivacy && (
            <>
              <section className="space-y-3">
                <h2 className="text-lg font-bold text-[#F5F1E8]">
                  1. Information We Collect
                </h2>
                <p>
                  When you register for GhostWrite, we collect your email
                  address and name via Clerk Authentication. When you generate
                  content, we process your submitted text solely to produce your
                  requested formats.
                </p>
              </section>
              <section className="space-y-3">
                <h2 className="text-lg font-bold text-[#F5F1E8]">
                  2. How We Use Your Data
                </h2>
                <p>
                  Your inputs are processed using Groq AI infrastructure and
                  stored securely in Supabase. We{" "}
                  <strong className="text-[#F5F1E8]">
                    never use your private content or generated data to train AI
                    models
                  </strong>
                  .
                </p>
              </section>
              <section className="space-y-3">
                <h2 className="text-lg font-bold text-[#F5F1E8]">
                  3. Data Security & Storage
                </h2>
                <p>
                  All data transmissions are encrypted using SSL/TLS (256-bit
                  encryption). User records are protected with Row Level
                  Security (RLS) in our database.
                </p>
              </section>
            </>
          )}

          {isTerms && (
            <>
              <section className="space-y-3">
                <h2 className="text-lg font-bold text-[#F5F1E8]">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By creating an account on GhostWrite, you agree to these Terms
                  of Service. If you do not agree, do not use the platform.
                </p>
              </section>
              <section className="space-y-3">
                <h2 className="text-lg font-bold text-[#F5F1E8]">
                  2. Content Ownership & Responsibility
                </h2>
                <p>
                  You retain 100% full ownership and copyright of all content
                  you submit and generate using GhostWrite. You are responsible
                  for reviewing AI outputs for accuracy before publishing.
                </p>
              </section>
              <section className="space-y-3">
                <h2 className="text-lg font-bold text-[#F5F1E8]">
                  3. Acceptable Use
                </h2>
                <p>
                  You agree not to use GhostWrite to generate hate speech, spam,
                  malware, or illegal material. Violation will result in
                  immediate account termination.
                </p>
              </section>
            </>
          )}

          {isRefund && (
            <>
              <section className="space-y-3">
                <h2 className="text-lg font-bold text-[#F5F1E8]">
                  1. 30-Day Money-Back Guarantee
                </h2>
                <p>
                  If you upgrade to GhostWrite Pro or Business and are not
                  satisfied with the product, you can request a 100% full refund
                  within 30 days of purchase.
                </p>
              </section>
              <section className="space-y-3">
                <h2 className="text-lg font-bold text-[#F5F1E8]">
                  2. How to Request a Refund
                </h2>
                <p>
                  To request a refund or cancel your subscription, email{" "}
                  <a
                    href="mailto:support@ghostwrite.app"
                    className="text-[#DC2626] underline"
                  >
                    support@ghostwrite.app
                  </a>{" "}
                  with your account email. Refunds are processed via
                  Razorpay/Stripe within 5-7 business days.
                </p>
              </section>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
