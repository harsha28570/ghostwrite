import LegalPages from "./pages/LegalPages";
import AdminPanel from "./pages/AdminPanel";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import LandingPage from "./pages/LandingPage";
import SignUpPage from "./pages/SignUp";
import LoginPage from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Pricing from "./pages/Pricing";
import BlogPage from "./pages/BlogPage";
import AppPage from "./pages/AppPage";
import AppNew from "./pages/AppNew";
import AppProcessing from "./pages/AppProcessing";
import AppResults from "./pages/AppResults";
import AppSettings from "./pages/AppSettings";
import NotFound from "./pages/NotFound";

// Protected Route Component
function ProtectedRoute({ children }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/privacy" element={<LegalPages />} />
        <Route path="/terms" element={<LegalPages />} />
        <Route path="/refund" element={<LegalPages />} />
        <Route path="/refund-policy" element={<LegalPages />} />

        {/* Protected Routes - Need Login */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <AppPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/app/new"
          element={
            <ProtectedRoute>
              <AppNew />
            </ProtectedRoute>
          }
        />
        <Route
          path="/app/processing"
          element={
            <ProtectedRoute>
              <AppProcessing />
            </ProtectedRoute>
          }
        />
        <Route
          path="/app/results"
          element={
            <ProtectedRoute>
              <AppResults />
            </ProtectedRoute>
          }
        />
        <Route
          path="/app/settings"
          element={
            <ProtectedRoute>
              <AppSettings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminPanel />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Analytics />
      <SpeedInsights />
    </Router>
  );
}

export default App;
