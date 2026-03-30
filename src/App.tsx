import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from './store/authStore'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import AdminPanel from './pages/AdminPanel'
import Login from './pages/Login'
import Signup from './pages/Signup'
import NotFound from './pages/NotFound'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import Disclaimer from './pages/Disclaimer'
import RefundPolicy from './pages/RefundPolicy'
import CookiePolicy from './pages/CookiePolicy'
import Copyright from './pages/Copyright'

function App() {
  const { isAuthenticated, user } = useAuthStore()

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-dark-bg">
        <Navbar />
        <main className="flex-1">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
            <Route path="/signup" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Signup />} />

            {/* Legal Pages */}
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/refund" element={<RefundPolicy />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/copyright" element={<Copyright />} />

            {/* Protected Routes - Customer Dashboard */}
            <Route 
              path="/dashboard" 
              element={isAuthenticated && user?.role === 'customer' ? <Dashboard /> : <Navigate to="/login" />} 
            />

            {/* Protected Routes - Admin Panel */}
            <Route 
              path="/admin" 
              element={isAuthenticated && user?.role === 'admin' ? <AdminPanel /> : <Navigate to="/login" />} 
            />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
