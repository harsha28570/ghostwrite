import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Free',
    price: 0,
    description: 'For trying GhostWrite',
    features: ['3 pieces / month', '5 platform formats', 'Basic brand voice', '7-day history'],
    cta: 'Get started',
    featured: false,
  },
  {
    name: 'Pro',
    price: 499,
    description: 'For serious creators',
    features: ['50 pieces / month', 'All 10 formats', 'Advanced brand voice', 'No watermark', 'Priority processing'],
    cta: 'Start Pro',
    featured: true,
  },
  {
    name: 'Business',
    price: 1999,
    description: 'For teams and agencies',
    features: ['Unlimited pieces', 'All 10 formats', 'Team accounts', 'API access', 'Dedicated support'],
    cta: 'Start Business',
    featured: false,
  },
]

function Pricing() {
  return (
    <section id="pricing" className="section-padding border-t border-border relative overflow-hidden">
      <div className="glow-orb w-[400px] h-[400px] top-0 right-0 translate-x-1/3 -translate-y-1/3" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-16 text-center">
          <p className="section-label mb-4">Pricing</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-semibold text-white tracking-tight">
            Simple pricing
          </h2>
          <p className="mt-4 text-text-secondary">Start free. Upgrade when you need more.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`dark-card p-8 flex flex-col ${
                plan.featured ? 'border-primary/40 shadow-glow-sm' : ''
              }`}
            >
              {plan.featured && (
                <span className="text-xs font-medium text-primary mb-4">Most popular</span>
              )}
              <h3 className="font-heading text-xl font-medium text-white">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-heading text-4xl font-semibold text-white">₹{plan.price}</span>
                <span className="text-text-tertiary text-sm">/mo</span>
              </div>
              <p className="mt-2 text-sm text-text-secondary">{plan.description}</p>

              <ul className="mt-8 space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-text-secondary">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/signup"
                className={`mt-8 w-full text-center py-2.5 rounded-btn text-sm font-medium transition-all duration-300 ${
                  plan.featured
                    ? 'btn-primary'
                    : 'border border-border text-text-primary hover:border-border-hover hover:text-white hover:scale-[1.02]'
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/pricing"
            className="text-sm text-text-secondary hover:text-primary transition-colors duration-300"
          >
            View full pricing details →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Pricing
