import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12 relative overflow-hidden">
      <div className="glow-orb w-[400px] h-[400px] top-1/4 left-1/2 -translate-x-1/2" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md"
      >
        <Link to="/" className="flex items-center justify-center font-heading text-xl font-semibold text-white mb-8 hover:opacity-80 transition-opacity duration-300">
          GhostWrite
        </Link>

        <div className="dark-card p-8">
          <h1 className="font-heading text-2xl font-semibold text-white text-center tracking-tight">Welcome back</h1>
          <p className="mt-2 text-sm text-text-secondary text-center">
            Sign in to your account
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm text-text-secondary mb-1.5">Email</label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className="input-dark"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm text-text-secondary mb-1.5">Password</label>
              <input
                id="password"
                type="password"
                required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="Your password"
                className="input-dark"
              />
            </div>
            <button type="submit" className="btn-primary w-full py-3 mt-2">
              Sign in <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-text-secondary">
            Don&apos;t have an account?{' '}
            <Link to="/signup" className="text-primary hover:text-primary-light transition-colors duration-300">
              Sign up free
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default Login
