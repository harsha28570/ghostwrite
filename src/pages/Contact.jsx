import { Mail, MessageSquare } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Logo from "../components/Logo";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-[#F5F1E8]">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-12">
          <Logo className="justify-center mb-6" />
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Contact Support
          </h1>
          <p className="text-[#F5F1E8]/60 text-sm">
            We typically reply within 24 hours.
          </p>
        </div>

        <div className="bg-[#242424] border border-[#F5F1E8]/10 rounded-2xl p-8 shadow-xl">
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent!");
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-medium text-[#F5F1E8]/60 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2.5 bg-[#1A1A1A] border border-[#F5F1E8]/10 rounded-lg text-sm text-[#F5F1E8] outline-none focus:border-[#DC2626]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#F5F1E8]/60 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2.5 bg-[#1A1A1A] border border-[#F5F1E8]/10 rounded-lg text-sm text-[#F5F1E8] outline-none focus:border-[#DC2626]"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-[#F5F1E8]/60 mb-2">
                How can we help?
              </label>
              <textarea
                required
                rows="5"
                className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#F5F1E8]/10 rounded-lg text-sm text-[#F5F1E8] outline-none focus:border-[#DC2626] resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#DC2626] hover:bg-[#B91C1C] text-[#F5F1E8] rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" /> Send Message
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
