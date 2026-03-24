import { useState } from 'react'
import { useAuthStore } from '../store/authStore'
import { Loader } from 'lucide-react'

interface StripeCheckoutProps {
  tier: 'starter' | 'growth' | 'agency'
  onSuccess?: () => void
}

export default function StripeCheckout({ tier, onSuccess }: StripeCheckoutProps) {
  const { user } = useAuthStore()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleCheckout = async () => {
    if (!user?.email) {
      setError('Please log in first')
      return
    }

    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/stripe/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tier,
          email: user.email,
          userId: user.id
        })
      })

      if (!response.ok) {
        throw new Error('Checkout creation failed')
      }

      const data = await response.json()

      if (data.url) {
        // Redirect to Stripe checkout
        window.location.href = data.url
      } else {
        setError('Failed to create checkout session')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Checkout failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {error && (
        <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
          {error}
        </div>
      )}
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="btn-primary w-full flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader size={18} className="animate-spin" /> Processing...
          </>
        ) : (
          'Subscribe Now'
        )}
      </button>
    </div>
  )
}
