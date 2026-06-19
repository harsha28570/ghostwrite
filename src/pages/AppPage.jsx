import { Link } from 'react-router-dom'
import { FileText, Settings, Sparkles } from 'lucide-react'

function AppPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="dark-card p-8 max-w-md w-full text-center">
        <Link to="/" className="font-heading text-xl font-semibold text-white mb-6 inline-block">
          GhostWrite
        </Link>
        <p className="text-text-secondary mb-8">Choose where to go</p>
        <div className="space-y-3">
          <Link to="/app/new" className="flex items-center gap-3 p-4 rounded-card border border-border hover:border-border-hover transition-all duration-300 hover:scale-[1.02]">
            <FileText className="w-5 h-5 text-primary" />
            <span className="text-white font-medium">New content</span>
          </Link>
          <Link to="/app/results" className="flex items-center gap-3 p-4 rounded-card border border-border hover:border-border-hover transition-all duration-300 hover:scale-[1.02]">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-white font-medium">View results</span>
          </Link>
          <Link to="/app/settings" className="flex items-center gap-3 p-4 rounded-card border border-border hover:border-border-hover transition-all duration-300 hover:scale-[1.02]">
            <Settings className="w-5 h-5 text-primary" />
            <span className="text-white font-medium">Settings</span>
          </Link>
        </div>
        <Link to="/" className="mt-8 inline-block text-sm text-text-secondary hover:text-white transition-colors duration-300">
          Back to home
        </Link>
      </div>
    </div>
  )
}

export default AppPage
