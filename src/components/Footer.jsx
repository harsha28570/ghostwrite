import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Ghost,
  Twitter,
  Github,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Send,
} from "lucide-react";
import { useState } from "react";
import { scrollToSection } from "../utils/navigation";

const productLinks = [
  { name: "Features", href: "#features", type: "section" },
  { name: "Pricing", href: "/pricing", type: "pricing" },
  { name: "How it works", href: "#how-it-works", type: "section" },
  { name: "FAQ", href: "#faq", type: "section" },
];

const companyLinks = [
  { name: "About", href: "/about", type: "route" },
  { name: "Blog", href: "/blog", type: "route" },
  { name: "Contact", href: "/contact", type: "route" },
  { name: "Careers", href: "/careers", type: "route" },
];

const resourceLinks = [
  { name: "Dashboard", href: "/dashboard", type: "route" },
  { name: "Documentation", href: "/docs", type: "route" },
  { name: "API Reference", href: "/api", type: "route" },
  { name: "Support", href: "/support", type: "route" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Cookie Policy", href: "/cookies" },
  { name: "GDPR", href: "/gdpr" },
];

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "GitHub", icon: Github, href: "https://github.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
];

function FooterLink({ link }) {
  const location = useLocation();
  const navigate = useNavigate();

  if (link.type === "route") {
    return (
      <Link
        to={link.href}
        style={{
          fontSize: "13px",
          color: "rgba(245, 241, 232, 0.5)",
          transition: "all 0.3s",
          display: "inline-block",
        }}
        onMouseEnter={(e) => (e.target.style.color = "#F5F1E8")}
        onMouseLeave={(e) =>
          (e.target.style.color = "rgba(245, 241, 232, 0.5)")
        }
      >
        {link.name}
      </Link>
    );
  }

  return (
    <button
      onClick={() => {
        if (link.type === "pricing") {
          if (location.pathname === "/") scrollToSection("#pricing");
          else navigate("/pricing");
        } else {
          if (location.pathname === "/") scrollToSection(link.href);
          else navigate(`/${link.href}`);
        }
      }}
      style={{
        fontSize: "13px",
        color: "rgba(245, 241, 232, 0.5)",
        transition: "all 0.3s",
        display: "inline-block",
        textAlign: "left",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        padding: 0,
      }}
      onMouseEnter={(e) => (e.target.style.color = "#F5F1E8")}
      onMouseLeave={(e) => (e.target.style.color = "rgba(245, 241, 232, 0.5)")}
    >
      {link.name}
    </button>
  );
}

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <footer
      style={{
        position: "relative",
        backgroundColor: "#1A1A1A",
        borderTop: "1px solid rgba(245, 241, 232, 0.08)",
        overflow: "hidden",
      }}
    >
      {/* Background gradient - Crimson */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "1200px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(220, 38, 38, 0.2) 0%, transparent 70%)",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "80px 24px",
        }}
      >
        {/* Newsletter Section */}
        <div
          style={{
            marginBottom: "64px",
            position: "relative",
            borderRadius: "24px",
            overflow: "hidden",
            padding: "48px",
            background:
              "linear-gradient(135deg, rgba(220, 38, 38, 0.08) 0%, rgba(220, 38, 38, 0.12) 50%, rgba(220, 38, 38, 0.08) 100%)",
            border: "1px solid rgba(220, 38, 38, 0.2)",
          }}
        >
          {/* Decorative glows - Crimson */}
          <div
            style={{
              position: "absolute",
              top: "-96px",
              right: "-96px",
              width: "256px",
              height: "256px",
              borderRadius: "50%",
              opacity: 0.3,
              filter: "blur(60px)",
              background: "#DC2626",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-96px",
              left: "-96px",
              width: "256px",
              height: "256px",
              borderRadius: "50%",
              opacity: 0.3,
              filter: "blur(60px)",
              background: "#DC2626",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "32px",
            }}
            className="md:flex-row"
          >
            <div
              style={{ textAlign: "center", maxWidth: "448px" }}
              className="md:text-left"
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "4px 12px",
                  marginBottom: "16px",
                  borderRadius: "9999px",
                  background: "rgba(245, 241, 232, 0.05)",
                  border: "1px solid rgba(245, 241, 232, 0.1)",
                }}
              >
                <Mail
                  style={{ width: "12px", height: "12px", color: "#DC2626" }}
                />
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 500,
                    color: "rgba(245, 241, 232, 0.8)",
                  }}
                >
                  Newsletter
                </span>
              </div>

              <h3
                style={{
                  fontSize: "30px",
                  fontWeight: 700,
                  color: "#F5F1E8",
                  marginBottom: "8px",
                  letterSpacing: "-0.03em",
                }}
              >
                Stay in the loop
              </h3>
              <p
                style={{ fontSize: "14px", color: "rgba(245, 241, 232, 0.6)" }}
              >
                Get the latest updates, AI content tips, and exclusive features
                delivered to your inbox.
              </p>
            </div>

            <form
              onSubmit={handleSubscribe}
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
              className="md:w-auto md:flex-row"
            >
              <div
                style={{ position: "relative", flex: 1 }}
                className="md:w-72"
              >
                <Mail
                  style={{
                    position: "absolute",
                    left: "16px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "16px",
                    height: "16px",
                    color: "rgba(245, 241, 232, 0.4)",
                  }}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  style={{
                    width: "100%",
                    paddingLeft: "44px",
                    paddingRight: "16px",
                    paddingTop: "12px",
                    paddingBottom: "12px",
                    fontSize: "14px",
                    color: "#F5F1E8",
                    borderRadius: "12px",
                    outline: "none",
                    background: "rgba(245, 241, 232, 0.05)",
                    border: "1px solid rgba(245, 241, 232, 0.1)",
                  }}
                  required
                />
              </div>
              <button
                type="submit"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "12px 24px",
                  borderRadius: "12px",
                  color: "#F5F1E8",
                  fontWeight: 500,
                  fontSize: "14px",
                  cursor: "pointer",
                  border: "none",
                  whiteSpace: "nowrap",
                  background: subscribed
                    ? "linear-gradient(180deg, #DC2626 0%, #B91C1C 100%)"
                    : "linear-gradient(180deg, #DC2626 0%, #B91C1C 100%)",
                  boxShadow:
                    "inset 0 1px 0 rgba(245,241,232,0.2), 0 10px 30px rgba(220, 38, 38, 0.3)",
                }}
              >
                {subscribed ? "Subscribed!" : "Subscribe"}
                {!subscribed && (
                  <Send style={{ width: "14px", height: "14px" }} />
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
            gap: "32px",
            marginBottom: "48px",
          }}
          className="footer-grid"
        >
          {/* Logo & Description */}
          <div>
            <Link
              to="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "16px",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background:
                    "linear-gradient(135deg, #DC2626 0%, #B91C1C 50%, #7F1D1D 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 20px rgba(220, 38, 38, 0.4)",
                }}
              >
                <Ghost
                  style={{ width: "16px", height: "16px", color: "#F5F1E8" }}
                  strokeWidth={2.5}
                />
              </div>
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#F5F1E8",
                  letterSpacing: "-0.02em",
                }}
              >
                GhostWrite
              </span>
            </Link>

            <p
              style={{
                fontSize: "13px",
                color: "rgba(245, 241, 232, 0.6)",
                lineHeight: 1.6,
                marginBottom: "24px",
                maxWidth: "320px",
              }}
            >
              AI-powered content repurposing for modern creators. Turn one piece
              of content into 10 platform-optimized formats in seconds.
            </p>

            <div style={{ display: "flex", gap: "8px" }}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(245, 241, 232, 0.03)",
                    border: "1px solid rgba(245, 241, 232, 0.08)",
                    transition: "all 0.3s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "rgba(245, 241, 232, 0.08)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "rgba(245, 241, 232, 0.03)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <social.icon
                    style={{
                      width: "16px",
                      height: "16px",
                      color: "rgba(245, 241, 232, 0.5)",
                    }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#F5F1E8",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "16px",
              }}
            >
              Product
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {productLinks.map((link) => (
                <li key={link.name}>
                  <FooterLink link={link} />
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#F5F1E8",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "16px",
              }}
            >
              Company
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <FooterLink link={link} />
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#F5F1E8",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "16px",
              }}
            >
              Resources
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <FooterLink link={link} />
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#F5F1E8",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "16px",
              }}
            >
              Legal
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    style={{
                      fontSize: "13px",
                      color: "rgba(245, 241, 232, 0.5)",
                      transition: "all 0.3s",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#F5F1E8")}
                    onMouseLeave={(e) =>
                      (e.target.style.color = "rgba(245, 241, 232, 0.5)")
                    }
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            margin: "32px 0",
            background:
              "linear-gradient(90deg, transparent, rgba(220, 38, 38, 0.3), transparent)",
          }}
        />

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            paddingTop: "16px",
          }}
          className="md:flex-row"
        >
          {/* Copyright */}
          <p
            style={{
              fontSize: "12px",
              color: "rgba(245, 241, 232, 0.4)",
              margin: 0,
            }}
          >
            © 2025 GhostWrite. All rights reserved.
          </p>

          {/* Status & Version */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              fontSize: "11px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#DC2626",
                  animation: "pulse 2s infinite",
                }}
              />
              <span style={{ color: "rgba(245, 241, 232, 0.5)" }}>
                All systems operational
              </span>
            </div>
            <div
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "rgba(245, 241, 232, 0.2)",
              }}
            />
            <span
              style={{
                color: "rgba(245, 241, 232, 0.4)",
                fontFamily: "monospace",
              }}
            >
              v1.0.0
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr 1fr 1fr !important;
          }
        }
        @media (max-width: 767px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
