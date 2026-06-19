import { Link, useLocation, useNavigate } from 'react-router-dom'
import { scrollToSection } from '../utils/navigation'

const footerLinks = [
  { name: 'Features', href: '#features', type: 'section' },
  { name: 'Pricing', href: '/pricing', type: 'pricing' },
  { name: 'FAQ', href: '#faq', type: 'section' },
  { name: 'Blog', href: '/blog', type: 'route' },
  { name: 'Dashboard', href: '/dashboard', type: 'route' },
]

function FooterLink({ link }) {
  const location = useLocation()
  const navigate = useNavigate()

  if (link.type === 'route') {
    return (
      <Link to={link.href} className="text-sm text-text-tertiary hover:text-white transition-colors duration-300">
        {link.name}
      </Link>
    )
  }

  if (link.type === 'pricing') {
    return (
      <button
        onClick={() => {
          if (location.pathname === '/') scrollToSection('#pricing')
          else navigate('/pricing')
        }}
        className="text-sm text-text-tertiary hover:text-white transition-colors duration-300"
      >
        {link.name}
      </button>
    )
  }

  return (
    <button
      onClick={() => {
        if (location.pathname === '/') scrollToSection(link.href)
        else navigate(`/${link.href}`)
      }}
      className="text-sm text-text-tertiary hover:text-white transition-colors duration-300"
    >
      {link.name}
    </button>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <Link to="/" className="font-heading text-lg font-semibold text-white tracking-tight">
              GhostWrite
            </Link>
            <p className="mt-2 text-sm text-text-tertiary max-w-xs">
              AI-powered content repurposing for modern creators.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <FooterLink key={link.name} link={link} />
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-tertiary">© 2025 GhostWrite. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-text-tertiary">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
