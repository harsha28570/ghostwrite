import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { scrollToSection } from '../utils/navigation'

const navLinks = [
  { name: 'Features', href: '#features', type: 'section' },
  { name: 'How it works', href: '#how-it-works', type: 'section' },
  { name: 'Pricing', href: '#pricing', type: 'pricing' },
  { name: 'FAQ', href: '#faq', type: 'section' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSectionNav = (href) => {
    if (location.pathname === '/') {
      scrollToSection(href)
    } else {
      navigate(`/${href}`)
    }
    setMobileOpen(false)
  }

  const handlePricingNav = () => {
    if (location.pathname === '/') {
      scrollToSection('#pricing')
    } else {
      navigate('/pricing')
    }
    setMobileOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto h-16 px-4 sm:px-6 flex items-center justify-between">
          <Link to="/" className="font-heading text-lg font-semibold text-white tracking-tight transition-opacity duration-300 hover:opacity-80">
            GhostWrite
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.type === 'pricing' ? (
                <button key={link.name} onClick={handlePricingNav} className="nav-link">
                  {link.name}
                </button>
              ) : link.type === 'section' ? (
                <button key={link.name} onClick={() => handleSectionNav(link.href)} className="nav-link">
                  {link.name}
                </button>
              ) : (
                <Link key={link.name} to={link.href} className="nav-link">
                  {link.name}
                </Link>
              )
            )}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/login" className="nav-link px-3 py-1.5">
              Sign in
            </Link>
            <Link to="/signup" className="btn-primary text-sm py-2 px-4">
              Get started
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-text-secondary hover:text-white transition-colors duration-300"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="fixed top-16 left-4 right-4 bg-background-surface border border-border rounded-card-lg z-50 p-4 md:hidden"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) =>
                  link.type === 'pricing' ? (
                    <button
                      key={link.name}
                      onClick={handlePricingNav}
                      className="text-left px-3 py-2.5 text-sm text-text-secondary hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <button
                      key={link.name}
                      onClick={() => handleSectionNav(link.href)}
                      className="text-left px-3 py-2.5 text-sm text-text-secondary hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  )
                )}
                <Link
                  to="/dashboard"
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 text-sm text-text-secondary hover:text-white transition-colors duration-300"
                >
                  Dashboard
                </Link>
              </div>
              <div className="mt-4 pt-4 border-t border-border flex flex-col gap-2">
                <Link to="/login" onClick={() => setMobileOpen(false)} className="btn-secondary w-full text-sm py-2.5">
                  Sign in
                </Link>
                <Link to="/signup" onClick={() => setMobileOpen(false)} className="btn-primary w-full text-sm py-2.5">
                  Get started
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
