import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { Menu, X, LogOut } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuthStore()
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className="bg-card-bg border-b border-border-color sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #059669 0%, #06b6d4 100%)' }}>
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <span className="font-bold text-lg hidden sm:inline">PostGenius</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {!isAuthenticated ? (
            <>
              <Link to="/#features" className="text-text-secondary hover:text-text-primary">Features</Link>
              <Link to="/#pricing" className="text-text-secondary hover:text-text-primary">Pricing</Link>
              <Link to="/login" className="btn-secondary">Login</Link>
              <Link to="/signup" className="btn-primary">Get Started</Link>
            </>
          ) : (
            <>
              {user?.role === 'admin' && (
                <Link to="/admin" className="text-text-secondary hover:text-text-primary">Admin</Link>
              )}
              {user?.role === 'customer' && (
                <Link to="/dashboard" className="text-text-secondary hover:text-text-primary">Dashboard</Link>
              )}
              <div className="flex items-center gap-3">
                <span className="text-sm text-text-secondary">{user?.email}</span>
                <button onClick={handleLogout} className="flex items-center gap-2 text-text-secondary hover:text-text-primary">
                  <LogOut size={18} />
                </button>
              </div>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-bg border-t border-border-color p-4 space-y-3">
          {!isAuthenticated ? (
            <>
              <Link to="/#features" className="block text-text-secondary hover:text-text-primary">Features</Link>
              <Link to="/#pricing" className="block text-text-secondary hover:text-text-primary">Pricing</Link>
              <Link to="/login" className="block btn-secondary w-full text-center">Login</Link>
              <Link to="/signup" className="block btn-primary w-full text-center">Get Started</Link>
            </>
          ) : (
            <>
              <span className="block text-sm text-text-secondary">{user?.email}</span>
              <button onClick={handleLogout} className="block w-full text-left text-text-secondary hover:text-text-primary">
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  )
}
