import { Link } from 'react-router-dom'
import { Plus, FileText, Sparkles, Zap, Settings, LogOut } from 'lucide-react'
import { motion } from 'framer-motion'

const stats = [
  { label: 'Content pieces', value: '0', icon: FileText },
  { label: 'Formats generated', value: '0', icon: Sparkles },
  { label: 'Hours saved', value: '0', icon: Zap },
]

function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-heading text-lg font-semibold text-white tracking-tight hover:opacity-80 transition-opacity duration-300">
            GhostWrite
          </Link>
          <div className="flex items-center gap-3">
            <Link
              to="/app/settings"
              className="p-2 rounded-card text-text-tertiary hover:text-white hover:bg-background-surface transition-all duration-300"
              aria-label="Settings"
            >
              <Settings className="w-4 h-4" />
            </Link>
            <Link
              to="/login"
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-text-secondary hover:text-white transition-colors duration-300"
            >
              <LogOut className="w-4 h-4" />
              Sign out
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <h1 className="font-heading text-3xl font-semibold text-white tracking-tight">Dashboard</h1>
          <p className="mt-2 text-text-secondary">Your content repurposing hub.</p>
        </motion.div>

        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="dark-card p-6"
            >
              <stat.icon className="w-4 h-4 text-primary mb-4" />
              <div className="font-heading text-3xl font-semibold text-white">{stat.value}</div>
              <div className="text-sm text-text-secondary mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 dark-card p-10 text-center"
        >
          <h2 className="font-heading text-xl font-medium text-white">Create your first piece</h2>
          <p className="mt-2 text-sm text-text-secondary max-w-md mx-auto">
            Upload content and get 10 platform-optimized formats in seconds.
          </p>
          <Link to="/app/new" className="btn-primary mt-6 inline-flex text-sm">
            <Plus className="w-4 h-4" /> New content
          </Link>
        </motion.div>
      </main>
    </div>
  )
}

export default Dashboard
