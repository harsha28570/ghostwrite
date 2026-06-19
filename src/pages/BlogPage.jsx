import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const posts = [
  {
    title: 'How to Repurpose One Blog Post Into 10 Social Media Posts',
    excerpt: 'The exact framework top creators use to multiply their content output without multiplying their work hours.',
    date: 'June 10, 2025',
    readTime: '6 min read',
    category: 'Strategy',
  },
  {
    title: 'The LinkedIn Algorithm in 2025: What Actually Works',
    excerpt: 'We analyzed 10,000 LinkedIn posts to find the patterns that drive reach, saves, and engagement.',
    date: 'June 5, 2025',
    readTime: '8 min read',
    category: 'LinkedIn',
  },
  {
    title: 'Why AI Won\'t Replace Creators — But Creators Using AI Will Win',
    excerpt: 'The real competitive advantage is not the AI itself. It is the workflow you build around it.',
    date: 'May 28, 2025',
    readTime: '5 min read',
    category: 'AI',
  },
  {
    title: 'A 30-Day Content Calendar From One Long-Form Piece',
    excerpt: 'How to plan a full month of posts starting from a single article, video, or podcast episode.',
    date: 'May 20, 2025',
    readTime: '7 min read',
    category: 'Planning',
  },
  {
    title: 'Twitter Threads vs. LinkedIn Posts: Which Drives More Leads?',
    excerpt: 'A data-backed comparison of the two most powerful organic distribution channels for creators.',
    date: 'May 12, 2025',
    readTime: '6 min read',
    category: 'Comparison',
  },
  {
    title: 'The Psychology of the First 3 Seconds on TikTok',
    excerpt: 'Hook patterns that stop the scroll and keep viewers watching past the critical drop-off point.',
    date: 'May 4, 2025',
    readTime: '5 min read',
    category: 'TikTok',
  },
]

function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-16 max-w-6xl mx-auto px-4 sm:px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-white transition-colors duration-300 mb-8">
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
        <div className="max-w-3xl mb-12">
          <p className="section-label mb-4">Blog</p>
          <h1 className="font-heading text-5xl font-semibold text-white tracking-tight">Content strategy</h1>
          <p className="mt-4 text-text-secondary">
            Insights and tactics to create more content in less time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <article
              key={post.title}
              className="dark-card overflow-hidden cursor-pointer group"
            >
              <div className="h-32 bg-background-surface border-b border-border flex items-center justify-center">
                <span className="px-3 py-1 rounded-btn text-xs font-medium text-primary border border-primary/30">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-text-tertiary mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>
                <h2 className="text-lg font-medium text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default BlogPage
