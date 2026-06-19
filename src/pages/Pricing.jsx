import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const tiers = [
  {
    name: 'Free',
    price: 0,
    description: 'For trying GhostWrite',
    features: ['3 pieces / month', '5 platform formats', 'Basic brand voice', '7-day history'],
    featured: false,
  },
  {
    name: 'Pro',
    price: 499,
    description: 'For serious creators',
    features: ['50 pieces / month', 'All 10 formats', 'Advanced brand voice', 'No watermark', 'Priority processing'],
    featured: true,
  },
  {
    name: 'Business',
    price: 1999,
    description: 'For teams and agencies',
    features: ['Unlimited pieces', 'All 10 formats', 'Team accounts', 'API access', 'Dedicated support'],
    featured: false,
  },
]

function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20 relative overflow-hidden">
        <div className="glow-orb w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Pricing</p>
            <h1 className="font-heading text-5xl sm:text-6xl font-semibold text-white tracking-tight">
              Simple pricing
            </h1>
            <p className="mt-4 text-text-secondary max-w-xl mx-auto">
              Start free. Upgrade when you need more. Cancel anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`dark-card p-8 flex flex-col ${
                  tier.featured ? 'border-primary/40 shadow-glow-sm' : ''
                }`}
              >
                {tier.featured && (
                  <span className="text-xs font-medium text-primary mb-4">Most popular</span>
                )}
                <h2 className="font-heading text-xl font-medium text-white">{tier.name}</h2>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-heading text-4xl font-semibold text-white">₹{tier.price}</span>
                  <span className="text-text-tertiary text-sm">/mo</span>
                </div>
                <p className="mt-2 text-sm text-text-secondary">{tier.description}</p>

                <ul className="mt-8 space-y-3 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-text-secondary">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/signup"
                  className={`mt-8 w-full text-center py-2.5 rounded-btn text-sm font-medium transition-all duration-300 ${
                    tier.featured
                      ? 'btn-primary'
                      : 'border border-border text-text-primary hover:border-border-hover hover:text-white hover:scale-[1.02]'
                  }`}
                >
                  Get started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Pricing
