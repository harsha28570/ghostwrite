import { motion } from 'framer-motion'
import { ArrowUpRight, Clock, Layers, TrendingUp, Users, DollarSign } from 'lucide-react'

const cases = [
  {
    name: 'Priya Sharma',
    role: 'Solo Content Creator',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    metrics: [
      { label: 'Time on content', before: '12 hrs/week', after: '2.5 hrs/week', icon: Clock },
      { label: 'Platforms covered', before: '2', after: '8', icon: Layers },
      { label: 'Monthly pieces', before: '4', after: '20', icon: TrendingUp },
      { label: 'Audience growth', before: '0%', after: '+340%', icon: Users },
    ],
    quote: 'I went from posting 4 times a month to every day. On 8 platforms. In the same amount of time.',
  },
  {
    name: 'ContentLab Agency',
    role: '3-person Content Team',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face',
    metrics: [
      { label: 'Client capacity', before: '4 brands', after: '12 brands', icon: Layers },
      { label: 'Production time', before: '100%', after: '-65%', icon: Clock },
      { label: 'Monthly revenue', before: '₹2L', after: '₹5.8L', icon: DollarSign },
      { label: 'Team burnout', before: 'High', after: 'Low', icon: Users },
    ],
    quote: 'GhostWrite let us triple our client base without hiring a single extra person.',
  },
  {
    name: 'Arjun Kumar',
    role: 'Solo Founder, Building in Public',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    metrics: [
      { label: 'Time to post', before: '3 hrs', after: '18 minutes', icon: Clock },
      { label: 'Twitter followers', before: '2K', after: '14K', icon: Users },
      { label: 'Newsletter subs', before: '500', after: '3,200', icon: TrendingUp },
      { label: 'Platforms active', before: '1', after: '6', icon: Layers },
    ],
    quote: 'I built my audience while building my product. GhostWrite made being consistent easy.',
  },
]

function CaseStudies() {
  return (
    <section className="bg-primary-soft section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">Case Studies</span>
          <h2 className="mt-4 text-h1 font-extrabold text-text-primary">What Happens When You Stop Wasting Time</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseStudy, i) => (
            <motion.div
              key={caseStudy.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white rounded-card-lg border border-border p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <img src={caseStudy.avatar} alt={caseStudy.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h3 className="font-bold text-text-primary">{caseStudy.name}</h3>
                  <p className="text-xs text-text-secondary">{caseStudy.role}</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {caseStudy.metrics.map((metric) => (
                  <div key={metric.label} className="flex items-center justify-between p-3 rounded-lg bg-background-alt">
                    <div className="flex items-center gap-2">
                      <metric.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm text-text-secondary">{metric.label}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-text-tertiary line-through">{metric.before}</span>
                      <ArrowUpRight className="w-4 h-4 text-accent-green" />
                      <span className="font-bold text-accent-green">{metric.after}</span>
                    </div>
                  </div>
                ))}
              </div>

              <blockquote className="text-body text-text-primary italic leading-relaxed">
                "{caseStudy.quote}"
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
