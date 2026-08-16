import { useUser } from "@clerk/clerk-react";
import { getUserPlan } from "../services/supabase";
import { initiatePayment } from "../services/payment";
import { upgradeUserPlan } from "../services/supabase";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Ghost,
  User,
  Palette,
  Save,
  CreditCard,
  Plus,
  Trash2,
  Copy,
} from "lucide-react";

const tabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "brand", label: "Brand Voice", icon: Palette },
  { id: "templates", label: "Templates", icon: Save },
  { id: "billing", label: "Billing", icon: CreditCard },
];

const initialTemplates = [
  {
    name: "Sarah's Fitness Brand",
    tone: "Energetic",
    formality: 30,
    length: 40,
  },
  {
    name: "TechStartup Client",
    tone: "Professional",
    formality: 80,
    length: 60,
  },
  { name: "Personal Blog", tone: "Casual", formality: 20, length: 70 },
];

function AppSettings() {
  const { user } = useUser();
  const navigate = useNavigate();
  const [currentPlan, setCurrentPlan] = useState("free");
  const [usage, setUsage] = useState({ generations_this_month: 0 });

  useEffect(() => {
    async function loadPlan() {
      if (!user) return;
      const planData = await getUserPlan(user.id);
      if (planData) {
        setCurrentPlan(planData.plan);
        setUsage(planData);
      }
    }
    loadPlan();
  }, [user]);

  const handleUpgrade = () => {
    initiatePayment({
      planId: "pro",
      user,
      onSuccess: async (response) => {
        await upgradeUserPlan(user.id, "pro", response.razorpay_payment_id);
        setCurrentPlan("pro");
        alert("🎉 Upgraded to Pro!");
      },
      onError: (error) => {
        alert("Payment failed: " + error);
      },
    });
  };
  const [activeTab, setActiveTab] = useState("brand");
  const [sliders, setSliders] = useState({
    tone: 65,
    formality: 25,
    length: 50,
  });
  const [templates, setTemplates] = useState(initialTemplates);

  const addTemplate = () => {
    setTemplates([
      ...templates,
      { name: "New Template", tone: "Balanced", formality: 50, length: 50 },
    ]);
  };

  const removeTemplate = (index) => {
    setTemplates(templates.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <header
        className="sticky top-0 z-40 border-b"
        style={{
          background: "rgba(26, 26, 26, 0.8)",
          backdropFilter: "blur(12px)",
          borderColor: "rgba(245, 241, 232, 0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#DC2626] to-[#B91C1C] flex items-center justify-center">
              <Ghost className="w-4 h-4 text-[#F5F1E8]" strokeWidth={2.5} />
            </div>
            <span className="font-bold text-[#F5F1E8]">GhostWrite</span>
          </Link>
          <Link
            to="/app/new"
            className="px-4 py-2 rounded-lg text-[13px] font-medium text-[#F5F1E8] bg-[#DC2626]"
          >
            New Content
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <h1
          className="text-2xl font-bold text-[#F5F1E8] mb-6"
          style={{ letterSpacing: "-0.03em" }}
        >
          Settings
        </h1>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div
              className="rounded-xl p-2 sticky top-24"
              style={{
                background: "#242424",
                border: "1px solid rgba(245, 241, 232, 0.08)",
              }}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === tab.id ? "bg-[#DC2626]/10 text-[#DC2626]" : "text-[#F5F1E8]/60 hover:bg-[#F5F1E8]/[0.03]"}`}
                >
                  <tab.icon className="w-4 h-4" /> {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            {activeTab === "profile" && (
              <div
                className="rounded-xl p-6"
                style={{
                  background: "#242424",
                  border: "1px solid rgba(245, 241, 232, 0.08)",
                }}
              >
                <h2 className="text-lg font-bold text-[#F5F1E8] mb-4">
                  Profile
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-[#F5F1E8] block mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      defaultValue={user?.fullName || ""}
                      className="w-full px-3 py-2 rounded-lg text-[#F5F1E8] outline-none focus:border-[#DC2626]/40"
                      style={{
                        background: "rgba(245, 241, 232, 0.02)",
                        border: "1px solid rgba(245, 241, 232, 0.08)",
                      }}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#F5F1E8] block mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue={
                        user?.primaryEmailAddress?.emailAddress || ""
                      }
                      className="w-full px-3 py-2 rounded-lg text-[#F5F1E8] outline-none focus:border-[#DC2626]/40"
                      style={{
                        background: "rgba(245, 241, 232, 0.02)",
                        border: "1px solid rgba(245, 241, 232, 0.08)",
                      }}
                    />
                  </div>
                  <button className="px-4 py-2 rounded-lg text-sm font-medium text-[#F5F1E8] bg-[#DC2626]">
                    Save Profile
                  </button>
                </div>
              </div>
            )}

            {activeTab === "brand" && (
              <div
                className="rounded-xl p-6"
                style={{
                  background: "#242424",
                  border: "1px solid rgba(245, 241, 232, 0.08)",
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold text-[#F5F1E8]">
                    Default Brand Voice
                  </h2>
                  <button className="px-4 py-2 rounded-lg text-sm font-medium text-[#DC2626] border border-[#DC2626]/30 hover:bg-[#DC2626]/10">
                    Test Voice
                  </button>
                </div>
                {[
                  {
                    id: "tone",
                    label: "Tone",
                    left: "Casual",
                    right: "Professional",
                  },
                  {
                    id: "formality",
                    label: "Formality",
                    left: "Relaxed",
                    right: "Formal",
                  },
                  {
                    id: "length",
                    label: "Output Length",
                    left: "Concise",
                    right: "Detailed",
                  },
                ].map((slider) => (
                  <div key={slider.id} className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-[#F5F1E8]">
                        {slider.label}
                      </span>
                      <span className="text-[#F5F1E8]/60">
                        {sliders[slider.id] < 33
                          ? slider.left
                          : sliders[slider.id] < 66
                            ? "Balanced"
                            : slider.right}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliders[slider.id]}
                      onChange={(e) =>
                        setSliders({
                          ...sliders,
                          [slider.id]: parseInt(e.target.value),
                        })
                      }
                      className="w-full h-1.5 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #DC2626 0%, #DC2626 ${sliders[slider.id]}%, rgba(245,241,232,0.1) ${sliders[slider.id]}%, rgba(245,241,232,0.1) 100%)`,
                      }}
                    />
                    <div className="flex justify-between text-xs text-[#F5F1E8]/40 mt-1">
                      <span>{slider.left}</span>
                      <span>{slider.right}</span>
                    </div>
                  </div>
                ))}
                <button className="px-4 py-2 rounded-lg text-sm font-medium text-[#F5F1E8] bg-[#DC2626]">
                  Save Default Voice
                </button>
              </div>
            )}

            {activeTab === "templates" && (
              <div
                className="rounded-xl p-6"
                style={{
                  background: "#242424",
                  border: "1px solid rgba(245, 241, 232, 0.08)",
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold text-[#F5F1E8]">
                    Brand Voice Templates
                  </h2>
                  <button
                    onClick={addTemplate}
                    className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-[#F5F1E8] bg-[#DC2626]"
                  >
                    <Plus className="w-4 h-4" /> New Template
                  </button>
                </div>
                <div className="space-y-4">
                  {templates.map((template, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-lg"
                      style={{
                        background: "rgba(245, 241, 232, 0.02)",
                        border: "1px solid rgba(245, 241, 232, 0.06)",
                      }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <input
                          type="text"
                          value={template.name}
                          onChange={(e) => {
                            const n = [...templates];
                            n[i].name = e.target.value;
                            setTemplates(n);
                          }}
                          className="font-semibold text-[#F5F1E8] bg-transparent border-b border-transparent hover:border-[#F5F1E8]/20 focus:border-[#DC2626] outline-none"
                        />
                        <div className="flex gap-2">
                          <button className="p-1.5 text-[#F5F1E8]/40 hover:text-[#F5F1E8]">
                            <Copy className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => removeTemplate(i)}
                            className="p-1.5 text-[#F5F1E8]/40 hover:text-[#DC2626]"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-[#F5F1E8]/40">Tone</span>
                          <p className="font-medium text-[#F5F1E8]">
                            {template.tone}
                          </p>
                        </div>
                        <div>
                          <span className="text-[#F5F1E8]/40">Formality</span>
                          <p className="font-medium text-[#F5F1E8]">
                            {template.formality}%
                          </p>
                        </div>
                        <div>
                          <span className="text-[#F5F1E8]/40">Length</span>
                          <p className="font-medium text-[#F5F1E8]">
                            {template.length}%
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "billing" && (
              <div className="space-y-6">
                <div className="rounded-xl p-6 bg-[#DC2626]">
                  <p className="text-sm text-[#F5F1E8]/80 mb-1">Current Plan</p>
                  <h2 className="text-3xl font-bold text-[#F5F1E8] mb-2">
                    {currentPlan === "free"
                      ? "Free Forever"
                      : currentPlan === "pro"
                        ? "Pro"
                        : "Business"}
                  </h2>
                  <p className="text-[#F5F1E8]/80 mb-4">
                    {currentPlan === "free"
                      ? "3 content pieces per month • 5 platform formats"
                      : currentPlan === "pro"
                        ? "50 content pieces per month • All 10 formats"
                        : "Unlimited pieces • Team accounts"}
                  </p>
                  {currentPlan === "free" && (
                    <button
                      onClick={handleUpgrade}
                      className="px-4 py-2 bg-[#F5F1E8] text-[#DC2626] rounded-lg font-semibold text-sm"
                    >
                      Upgrade to Pro - ₹499/mo
                    </button>
                  )}
                </div>

                <div
                  className="rounded-xl p-6"
                  style={{
                    background: "#242424",
                    border: "1px solid rgba(245, 241, 232, 0.08)",
                  }}
                >
                  <h3 className="text-lg font-bold text-[#F5F1E8] mb-4">
                    Usage This Month
                  </h3>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-[#F5F1E8]/60">
                      Content pieces used
                    </span>
                    <span className="font-semibold text-[#F5F1E8]">
                      {usage.generations_this_month} /{" "}
                      {currentPlan === "free"
                        ? "3"
                        : currentPlan === "pro"
                          ? "50"
                          : "∞"}
                    </span>
                  </div>
                  <div className="h-2 bg-[#F5F1E8]/5 rounded-full overflow-hidden mb-6">
                    <div
                      className="h-full bg-[#DC2626] rounded-full transition-all"
                      style={{
                        width: `${Math.min(
                          100,
                          (usage.generations_this_month /
                            (currentPlan === "free" ? 3 : 50)) *
                            100,
                        )}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <style>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none; width: 16px; height: 16px; border-radius: 50%;
          background: #F5F1E8; cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.4);
        }
      `}</style>
    </div>
  );
}

export default AppSettings;
