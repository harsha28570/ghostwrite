import { Link } from "react-router-dom";
import { ArrowRight, Ghost, Play } from "lucide-react";
import { useState, useEffect } from "react";

function Hero() {
  const [typedText, setTypedText] = useState("");
  const platforms = ["Twitter", "LinkedIn", "Instagram", "TikTok", "YouTube"];
  const [platformIndex, setPlatformIndex] = useState(0);

  useEffect(() => {
    const currentPlatform = platforms[platformIndex];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= currentPlatform.length) {
        setTypedText(currentPlatform.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setPlatformIndex((prev) => (prev + 1) % platforms.length);
        }, 1500);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [platformIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 bg-[#1A1A1A]">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-10 rounded-full border border-[#F5F1E8]/10 bg-[#F5F1E8]/[0.03]">
          <span className="text-[13px] text-[#F5F1E8]/70 font-medium tracking-tight">
            AI-powered content repurposing
          </span>
        </div>

        {/* Heading */}
        <h1
          className="mb-8 text-[#F5F1E8]"
          style={{
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: "-0.045em",
          }}
        >
          <span className="block">One input.</span>
          <span className="block">Ten platforms.</span>
        </h1>

        {/* Typing Effect */}
        <div className="mb-10 h-8">
          <div className="inline-flex items-center gap-2 text-[15px] sm:text-[17px] text-[#F5F1E8]/60 font-medium">
            <span>Perfect for</span>
            <span className="inline-flex items-center px-3 py-1 rounded-lg text-[#F5F1E8] border border-[#F5F1E8]/10 bg-[#F5F1E8]/[0.03]">
              {typedText}
              <span className="inline-block w-[2px] h-4 bg-[#DC2626] ml-0.5 animate-pulse" />
            </span>
          </div>
        </div>

        {/* Subheading */}
        <p className="text-[17px] sm:text-[19px] text-[#F5F1E8]/60 max-w-2xl mx-auto leading-relaxed mb-12">
          Transform any content into{" "}
          <span className="text-[#F5F1E8] font-medium">
            10 platform-optimized formats
          </span>{" "}
          in under 30 seconds.
          <br className="hidden sm:block" />
          Built for creators who ship fast.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-20">
          {/* Primary CTA - Crimson */}
          <Link
            to="/signup"
            className="group inline-flex items-center gap-2 px-6 py-3 text-[15px] font-medium text-[#F5F1E8] rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] transition-colors"
          >
            <span>Start Creating Free</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>

          {/* Secondary CTA - Dark Outline */}
          <button
            onClick={() =>
              document
                .getElementById("demo")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 px-6 py-3 text-[15px] font-medium text-[#F5F1E8]/80 hover:text-[#F5F1E8] rounded-lg border border-[#F5F1E8]/10 hover:border-[#1A1A1A]/20 transition-colors"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Watch Demo</span>
          </button>
        </div>

        {/* Product Preview - Dark Mockup on Cream */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-[#F5F1E8]/10 bg-[#1A1A1A]">
            {/* Window Header - Dark */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#F5F1E8]/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#DC2626]" />
                <div className="w-3 h-3 rounded-full bg-[#F5F1E8]/30" />
                <div className="w-3 h-3 rounded-full bg-[#F5F1E8]/30" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-2 px-3 py-1 rounded-md border border-[#F5F1E8]/10 text-[11px] text-[#F5F1E8]/40 font-mono">
                  <Ghost className="w-3 h-3" />
                  ghostwrite.ai
                </div>
              </div>
              <div className="w-16" />
            </div>

            {/* Window Content - Dark */}
            <div className="p-8 sm:p-12">
              <div className="text-left space-y-6">
                {/* Command Input */}
                <div className="flex items-center gap-3 p-4 rounded-lg border border-[#F5F1E8]/10 bg-[#F5F1E8]/[0.02]">
                  <div className="w-2 h-2 rounded-full bg-[#DC2626]" />
                  <div className="flex-1 text-[#F5F1E8]/80 text-[15px] font-mono">
                    Paste your blog post here...
                  </div>
                  <kbd className="px-2 py-0.5 rounded text-[10px] font-mono text-[#F5F1E8]/40 border border-[#F5F1E8]/10">
                    ⌘ K
                  </kbd>
                </div>

                {/* Processing */}
                <div className="flex items-center gap-3 text-[13px] text-[#F5F1E8]/40 font-mono">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
                    <div
                      className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    />
                    <div
                      className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse"
                      style={{ animationDelay: "0.4s" }}
                    />
                  </div>
                  <span>Generating 10 formats...</span>
                </div>

                {/* Platform Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {["Twitter", "LinkedIn", "Instagram", "Email", "TikTok"].map(
                    (platform) => (
                      <div
                        key={platform}
                        className="p-3 rounded-lg border border-[#F5F1E8]/10 text-[11px] text-[#F5F1E8]/60 font-medium text-center"
                      >
                        ✓ {platform}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust */}
        <div className="mt-16">
          <p className="text-[13px] text-[#F5F1E8]/40">
            No credit card required · Free forever plan · Built with AI
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
