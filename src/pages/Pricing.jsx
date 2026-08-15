import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const tiers = [
  {
    name: "Free",
    price: 0,
    description: "For trying GhostWrite",
    features: [
      "3 pieces / month",
      "5 platform formats",
      "Basic brand voice",
      "7-day history",
    ],
    featured: false,
  },
  {
    name: "Pro",
    price: 499,
    description: "For serious creators",
    features: [
      "50 pieces / month",
      "All 10 formats",
      "Advanced brand voice",
      "No watermark",
      "Priority processing",
    ],
    featured: true,
  },
  {
    name: "Business",
    price: 1999,
    description: "For teams and agencies",
    features: [
      "Unlimited pieces",
      "All 10 formats",
      "Team accounts",
      "API access",
      "Dedicated support",
    ],
    featured: false,
  },
];

function Pricing() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="text-[13px] font-medium text-[#DC2626] tracking-wider uppercase mb-4">
              Pricing
            </p>
            <h1
              className="text-5xl sm:text-6xl font-bold text-[#F5F1E8] tracking-tight"
              style={{ letterSpacing: "-0.045em" }}
            >
              Simple pricing
            </h1>
            <p className="mt-4 text-[#F5F1E8]/60 max-w-xl mx-auto">
              Start free. Upgrade when you need more. Cancel anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 flex flex-col hover:-translate-y-2 transition-transform duration-300 ${tier.featured ? "md:-mt-4 md:mb-4" : ""}`}
                style={{
                  background: "#242424",
                  border: tier.featured
                    ? "1px solid rgba(220, 38, 38, 0.4)"
                    : "1px solid rgba(245, 241, 232, 0.08)",
                  boxShadow: tier.featured
                    ? "0 20px 60px rgba(220, 38, 38, 0.15)"
                    : "none",
                }}
              >
                {tier.featured && (
                  <span className="text-xs font-medium text-[#DC2626] mb-4">
                    Most popular
                  </span>
                )}
                <h2
                  className="text-xl font-bold text-[#F5F1E8]"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {tier.name}
                </h2>
                <div className="mt-4 flex items-baseline gap-1">
                  <span
                    className="text-4xl font-bold text-[#F5F1E8]"
                    style={{ letterSpacing: "-0.04em" }}
                  >
                    ₹{tier.price}
                  </span>
                  <span className="text-[#F5F1E8]/40 text-sm">/mo</span>
                </div>
                <p className="mt-2 text-sm text-[#F5F1E8]/60">
                  {tier.description}
                </p>

                <ul className="mt-8 space-y-3 flex-1">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-[#F5F1E8]/70"
                    >
                      <Check className="w-4 h-4 text-[#DC2626] shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/signup"
                  className={`mt-8 w-full text-center py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    tier.featured
                      ? "bg-[#DC2626] text-[#F5F1E8]"
                      : "border border-[#F5F1E8]/10 text-[#F5F1E8] hover:border-[#F5F1E8]/20"
                  }`}
                >
                  Get started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Pricing;
