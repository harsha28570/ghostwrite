import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Pricing from './pages/Pricing'
import BlogPage from './pages/BlogPage'
import AppPage from './pages/AppPage'
import AppNew from './pages/AppNew'
import AppProcessing from './pages/AppProcessing'
import AppResults from './pages/AppResults'
import AppSettings from './pages/AppSettings'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="/app/new" element={<AppNew />} />
        <Route path="/app/processing" element={<AppProcessing />} />
        <Route path="/app/results" element={<AppResults />} />
        <Route path="/app/settings" element={<AppSettings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
