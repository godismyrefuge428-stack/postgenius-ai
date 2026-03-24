import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-bg py-12 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-text-secondary mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center gap-2">
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>
    </div>
  )
}
