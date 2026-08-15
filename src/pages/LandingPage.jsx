import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Demo from "../components/Demo";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(
          () => el.scrollIntoView({ behavior: "smooth", block: "start" }),
          100,
        );
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Demo />
        <HowItWorks />
        <Features />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
