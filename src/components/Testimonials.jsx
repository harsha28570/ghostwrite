import { motion } from 'framer-motion'
import { Star, Twitter, BadgeCheck } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya Sharma',
    handle: '@priya_creates',
    role: 'Content Strategist',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    text: 'I was spending literally 8 hours every Monday repurposing my weekend YouTube video into posts. GhostWrite cut that to 15 minutes. I\'m not kidding. This tool paid for itself in week one.',
    tag: 'YouTube Creator',
  },
  {
    name: 'Rohan Mehta',
    handle: '@rohan_marketing',
    role: 'Digital Marketer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    text: 'The LinkedIn output alone is worth the subscription. It writes better professional posts than I do. My engagement went up 3x in the first month.',
    tag: 'Marketing Agency',
  },
  {
    name: 'Alex Chen',
    handle: '@alex_solofounder',
    role: 'Solopreneur',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    text: 'Running a business solo means wearing every hat. GhostWrite handles my entire content operation. I look like I have a content team. I don\'t.',
    tag: 'Solopreneur',
  },
  {
    name: 'Sarah Johnson',
    handle: '@sarah_fitnessbrand',
    role: 'Fitness Coach',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    text: 'I write one client success story per week. GhostWrite turns it into Twitter thread, Instagram caption, email newsletter, and TikTok script. Insane value.',
    tag: 'Fitness Creator',
  },
  {
    name: 'Maya Patel',
    handle: '@contentqueen_maya',
    role: 'Social Media Manager',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
    text: 'I manage 8 brand accounts. The old process was unsustainable. Now each client gets consistent, platform-native content. GhostWrite saved my sanity.',
    tag: 'Agency',
  },
  {
    name: 'Devraj Singh',
    handle: '@devraj_tech',
    role: 'Tech Blogger',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    text: 'My technical articles are complex. I was skeptical GhostWrite could simplify them for Twitter/TikTok. But somehow it captures the core insight perfectly.',
    tag: 'Tech Creator',
  },
  {
    name: 'Amelia Brooks',
    handle: '@amelia_writes',
    role: 'Newsletter Writer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
    text: 'The email newsletter output is shockingly good. Subject lines, preview text, full body — all written. My open rate went from 22% to 34% in 6 weeks.',
    tag: 'Email Creator',
  },
  {
    name: 'Tom Williams',
    handle: '@agencydirector_tom',
    role: 'Agency Director',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face',
    text: 'We onboarded GhostWrite across our 12-person team. Cut content production time by 60%. The business tier ROI was obvious in the first week.',
    tag: 'Enterprise',
  },
  {
    name: 'Radhika Nair',
    handle: '@radhika_food',
    role: 'Food Blogger',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face',
    text: 'My recipes need to feel homey on Instagram but professional on Pinterest and direct on Twitter. GhostWrite nails every single tone. Every time.',
    tag: 'Food Creator',
  },
]

const featured = {
  name: 'Mike Thompson',
  role: '250K YouTube Subscribers',
  avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face',
  text: 'GhostWrite is the most practical AI tool I\'ve used in 3 years of testing AI products. It doesn\'t just save time — it actually improves quality because the AI understands platform context better than most humans.',
}

function TestimonialCard({ testimonial, index, featured: isFeatured = false }) {
  if (isFeatured) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="col-span-1 md:col-span-2 lg:col-span-3 bg-primary-gradient rounded-card-lg p-8 text-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="relative">
          <div className="flex items-start gap-4 mb-6">
            <img src={featured.avatar} alt={featured.name} className="w-14 h-14 rounded-full object-cover border-2 border-white/30" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg">{featured.name}</span>
                <BadgeCheck className="w-5 h-5 text-white" />
              </div>
              <p className="text-white/70 text-sm">{featured.role}</p>
            </div>
          </div>
          <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed">
            "{featured.text}"
          </blockquote>
          <div className="flex mt-6 gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent-yellow text-accent-yellow" />
            ))}
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-white/7 border border-white/10 rounded-card p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <div className="font-semibold text-white text-sm">{testimonial.name}</div>
            <div className="text-white/50 text-xs">{testimonial.handle}</div>
          </div>
        </div>
        <Twitter className="w-5 h-5 text-white/40" />
      </div>
      <p className="text-white/85 text-sm leading-relaxed mb-4">
        {testimonial.text}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-accent-yellow text-accent-yellow" />
          ))}
        </div>
        <span className="px-2.5 py-1 rounded-full bg-primary/20 text-primary-light text-[11px] font-semibold">
          {testimonial.tag}
        </span>
      </div>
    </motion.div>
  )
}

function Testimonials() {
  return (
    <section className="bg-background-dark section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label text-primary-light">Testimonials</span>
          <h2 className="mt-4 text-h1 font-extrabold text-white">2,400+ Creators Can't Be Wrong</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard featured />
          {testimonials.slice(0, 6).map((t, i) => (
            <TestimonialCard key={t.handle} testimonial={t} index={i} />
          ))}
        </div>

        {/* Testimonial marquee */}
        <div className="mt-12 relative overflow-hidden">
          <div className="marquee-track">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="mx-6 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 whitespace-nowrap"
              >
                <span className="font-semibold text-white">{t.name}:</span> "{t.text.slice(0, 60)}..."
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
