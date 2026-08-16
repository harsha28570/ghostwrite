import React, { useState } from "react";
import { useUser, useAuth } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { initiatePayment } from "../services/payment";
import { upgradeUserPlan } from "../services/supabase";
import {
  Check,
  Sparkles,
  CreditCard,
  Zap,
  Crown,
  ArrowRight,
  Star,
} from "lucide-react";

const plans = [
  {
    name: "Free",
    icon: Star,
    priceMonthly: 0,
    priceYearly: 0,
    description: "Perfect for trying out",
    features: [
      { text: "3 pieces per month", highlight: false },
      { text: "5 platform formats", highlight: false },
      { text: "Basic brand voice", highlight: false },
      { text: "7-day history", highlight: false },
      { text: "Community support", highlight: false },
    ],
    cta: "Start free",
    featured: false,
    color: "#F5F1E8",
    gradient:
      "linear-gradient(135deg, rgba(245, 241, 232, 0.08), rgba(245, 241, 232, 0.02))",
    borderColor: "rgba(245, 241, 232, 0.1)",
  },
  {
    name: "Pro",
    icon: Zap,
    priceMonthly: 499,
    priceYearly: 399,
    description: "For serious creators",
    features: [
      { text: "50 pieces per month", highlight: true },
      { text: "All 10 platform formats", highlight: true },
      { text: "Advanced brand voice", highlight: false },
      { text: "Unlimited history", highlight: false },
      { text: "No watermark", highlight: false },
      { text: "Priority processing", highlight: false },
      { text: "Email support", highlight: false },
    ],
    cta: "Start Pro trial",
    featured: true,
    color: "#DC2626",
    gradient:
      "linear-gradient(135deg, rgba(220, 38, 38, 0.15), rgba(220, 38, 38, 0.05))",
    borderColor: "rgba(220, 38, 38, 0.4)",
  },
  {
    name: "Business",
    icon: Crown,
    priceMonthly: 1999,
    priceYearly: 1599,
    description: "For teams & agencies",
    features: [
      { text: "Unlimited pieces", highlight: true },
      { text: "All 10 platform formats", highlight: false },
      { text: "Team accounts (5 users)", highlight: true },
      { text: "Custom brand voices", highlight: false },
      { text: "API access", highlight: true },
      { text: "Priority support", highlight: false },
      { text: "Analytics dashboard", highlight: false },
      { text: "White-label option", highlight: false },
    ],
    cta: "Start Business",
    featured: false,
    color: "#F5F1E8",
    gradient:
      "linear-gradient(135deg, rgba(245, 241, 232, 0.08), rgba(245, 241, 232, 0.02))",
    borderColor: "rgba(245, 241, 232, 0.1)",
  },
];

function Pricing() {
  const { user } = useUser();
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState("yearly");
  const [upgrading, setUpgrading] = useState(false);

  const handleUpgrade = (planId) => {
    if (!isSignedIn || !user) {
      navigate("/signup");
      return;
    }

    setUpgrading(true);

    initiatePayment({
      planId,
      user,
      onSuccess: async (response) => {
        await upgradeUserPlan(user.id, planId, response.razorpay_payment_id);
        setUpgrading(false);
        alert("🎉 Upgrade successful! You now have " + planId + " plan!");
        navigate("/dashboard");
      },
      onError: (error) => {
        setUpgrading(false);
        alert("Payment failed: " + error);
      },
    });
  };

  return (
    <section
      id="pricing"
      className="relative py-24 sm:py-32 overflow-hidden bg-[#1A1A1A]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(ellipse, rgba(220, 38, 38, 0.4) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(245,241,232,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,241,232,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full backdrop-blur-xl"
            style={{
              background: "rgba(245, 241, 232, 0.05)",
              border: "1px solid rgba(245, 241, 232, 0.1)",
            }}
          >
            <CreditCard className="w-3.5 h-3.5 text-[#DC2626]" />
            <span className="text-[13px] font-medium text-[#F5F1E8]/80">
              Pricing
            </span>
          </div>

          <h2
            className="mb-4"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.045em",
              color: "#F5F1E8",
            }}
          >
            Simple pricing.{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #DC2626 0%, #EF4444 50%, #DC2626 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              No surprises.
            </span>
          </h2>

          <p className="text-[17px] text-[#F5F1E8]/60 max-w-2xl mx-auto mb-8">
            Start free. Upgrade when you need more power.
          </p>

          {/* Billing Toggle */}
          <div
            className="inline-flex items-center gap-1 p-1 rounded-full"
            style={{
              background: "rgba(245, 241, 232, 0.05)",
              border: "1px solid rgba(245, 241, 232, 0.1)",
            }}
          >
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-300 ${
                billingCycle === "monthly"
                  ? "text-[#F5F1E8]"
                  : "text-[#F5F1E8]/50 hover:text-[#F5F1E8]/70"
              }`}
              style={{
                background:
                  billingCycle === "monthly"
                    ? "rgba(245, 241, 232, 0.1)"
                    : "transparent",
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-300 flex items-center gap-2 ${
                billingCycle === "yearly"
                  ? "text-[#F5F1E8]"
                  : "text-[#F5F1E8]/50 hover:text-[#F5F1E8]/70"
              }`}
              style={{
                background:
                  billingCycle === "yearly"
                    ? "rgba(245, 241, 232, 0.1)"
                    : "transparent",
              }}
            >
              Yearly
              <span
                className="px-2 py-0.5 rounded-full text-[10px] font-bold"
                style={{
                  background: "linear-gradient(135deg, #DC2626, #B91C1C)",
                  color: "#F5F1E8",
                }}
              >
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative ${plan.featured ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold text-[#F5F1E8] shadow-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)",
                      boxShadow: "0 10px 30px rgba(220, 38, 38, 0.4)",
                    }}
                  >
                    <Star className="w-3 h-3" fill="#F5F1E8" />
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div
                className={`relative h-full rounded-3xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 ${plan.featured ? "p-8" : "p-7"}`}
                style={{
                  background: plan.gradient,
                  border: `1px solid ${plan.borderColor}`,
                  boxShadow: plan.featured
                    ? "0 20px 60px rgba(220, 38, 38, 0.2)"
                    : "none",
                }}
              >
                {/* Featured plan glow */}
                {plan.featured && (
                  <div
                    className="absolute inset-0 opacity-30 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 0%, rgba(220, 38, 38, 0.3), transparent 60%)",
                    }}
                  />
                )}

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${plan.color}20`,
                        border: `1px solid ${plan.color}40`,
                      }}
                    >
                      <plan.icon
                        className="w-5 h-5"
                        style={{ color: plan.color }}
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>

                  {/* Plan Name */}
                  <h3
                    className="text-2xl font-bold text-[#F5F1E8] mb-1"
                    style={{ letterSpacing: "-0.03em" }}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-[13px] text-[#F5F1E8]/60 mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-[15px] text-[#F5F1E8]/60">₹</span>
                      <span
                        className="text-5xl font-bold text-[#F5F1E8]"
                        style={{ letterSpacing: "-0.04em" }}
                      >
                        {billingCycle === "yearly"
                          ? plan.priceYearly
                          : plan.priceMonthly}
                      </span>
                      <span className="text-[14px] text-[#F5F1E8]/40 ml-1">
                        /mo
                      </span>
                    </div>
                    {billingCycle === "yearly" && plan.priceMonthly > 0 && (
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-[12px] text-[#F5F1E8]/40 line-through">
                          ₹{plan.priceMonthly}/mo
                        </span>
                        <span
                          className="text-[11px] font-bold px-2 py-0.5 rounded-full"
                          style={{
                            background: "rgba(220, 38, 38, 0.2)",
                            color: "#DC2626",
                          }}
                        >
                          Save ₹{(plan.priceMonthly - plan.priceYearly) * 12}
                          /year
                        </span>
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => {
                      if (plan.name === "Free") {
                        navigate("/signup");
                      } else if (plan.name === "Pro") {
                        handleUpgrade("pro");
                      } else {
                        handleUpgrade("business");
                      }
                    }}
                    disabled={upgrading}
                    className={`group relative flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl font-medium text-[14px] transition-all duration-300 mb-6 ${
                      upgrading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    style={
                      plan.featured
                        ? {
                            background:
                              "linear-gradient(180deg, #DC2626 0%, #B91C1C 100%)",
                            color: "#F5F1E8",
                            boxShadow:
                              "inset 0 1px 0 rgba(245,241,232,0.2), 0 10px 30px rgba(220, 38, 38, 0.4)",
                          }
                        : {
                            background: "rgba(245, 241, 232, 0.05)",
                            border: "1px solid rgba(245, 241, 232, 0.1)",
                            color: "#F5F1E8",
                          }
                    }
                  >
                    {upgrading ? "Processing..." : plan.cta}
                    {!upgrading && (
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    )}
                  </button>

                  {/* Divider */}
                  <div className="flex items-center gap-3 my-6">
                    <div className="flex-1 h-px bg-[#F5F1E8]/10" />
                    <span className="text-[10px] font-semibold text-[#F5F1E8]/40 uppercase tracking-wider">
                      What's included
                    </span>
                    <div className="flex-1 h-px bg-[#F5F1E8]/10" />
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        {/* Custom check icon */}
                        <div
                          className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                          style={{
                            background: feature.highlight
                              ? `${plan.color}30`
                              : "rgba(245, 241, 232, 0.1)",
                            border: feature.highlight
                              ? `1px solid ${plan.color}`
                              : "1px solid rgba(245, 241, 232, 0.15)",
                          }}
                        >
                          <Check
                            className="w-2.5 h-2.5"
                            strokeWidth={3}
                            style={{
                              color: feature.highlight
                                ? plan.color
                                : "rgba(245, 241, 232, 0.6)",
                            }}
                          />
                        </div>
                        <span
                          className="text-[13px] leading-relaxed"
                          style={{
                            color: feature.highlight
                              ? "#F5F1E8"
                              : "rgba(245, 241, 232, 0.7)",
                            fontWeight: feature.highlight ? 500 : 400,
                          }}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-[13px] text-[#F5F1E8]/50">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
            No credit card required
          </div>
          <div className="w-px h-4 bg-[#F5F1E8]/10" />
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
            Cancel anytime
          </div>
          <div className="w-px h-4 bg-[#F5F1E8]/10" />
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
            30-day money-back guarantee
          </div>
        </div>

        {/* Bottom link */}
        <div className="mt-8 text-center">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 text-[13px] text-[#F5F1E8]/50 hover:text-[#F5F1E8] transition-colors"
          >
            Need something custom?
            <span className="text-[#DC2626] font-medium">Contact sales →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
