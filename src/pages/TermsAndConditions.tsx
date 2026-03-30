import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'

export default function TermsAndConditions() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Header */}
      <div className="border-b border-border-color sticky top-0 z-40 bg-card-bg">
        <div className="container py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors"
          >
            <ChevronLeft size={16} />
            Back to Home
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-12 max-w-4xl">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-text-primary mb-2">Terms and Conditions</h1>
            <p className="text-text-secondary"><strong>Last Updated:</strong> March 29, 2026</p>
          </div>

          <div className="space-y-8 text-text-secondary">
            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing and using PostGenius ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">2. Subscription Plans</h2>
              <div className="space-y-3">
                <div className="p-4 bg-card-bg rounded-lg border border-border-color">
                  <p className="font-semibold text-primary">Starter: $299/month</p>
                  <p className="text-sm">50 posts/month, 10 email campaigns, basic analytics</p>
                </div>
                <div className="p-4 bg-card-bg rounded-lg border border-border-color">
                  <p className="font-semibold text-primary">Professional: $699/month</p>
                  <p className="text-sm">200 posts/month, 50 email campaigns, advanced analytics</p>
                </div>
                <div className="p-4 bg-card-bg rounded-lg border border-border-color">
                  <p className="font-semibold text-primary">Enterprise: $1,499/month</p>
                  <p className="text-sm">Unlimited posts, unlimited campaigns, custom analytics</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">3. Billing Terms</h2>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Billing occurs monthly on the anniversary of your subscription start date</li>
                <li>All prices are in USD</li>
                <li>Taxes may be added where applicable</li>
                <li>Invoices are sent to your registered email</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">4. Cancellation</h2>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>You can cancel your subscription at any time</li>
                <li>Cancellation takes effect at the end of your current billing cycle</li>
                <li>No refunds for partial months</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">5. User Responsibility</h2>
              <p>You are responsible for:</p>
              <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
                <li>Maintaining confidentiality of your password and account information</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of unauthorized access</li>
                <li>Complying with all applicable laws</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">6. Intellectual Property Rights</h2>
              <p>
                PostGenius retains all rights to the Service platform, code, and design. You retain ownership of content you create. You grant us a license to use your content for service improvement and analytics.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">7. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, PostGenius shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits or revenue.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">8. Contact Information</h2>
              <p>For questions about these Terms:</p>
              <div className="mt-4 p-4 bg-card-bg rounded-lg border border-border-color">
                <p><strong>Email:</strong> <a href="mailto:support@postgenius-ai.com" className="text-primary hover:text-primary-light">support@postgenius-ai.com</a></p>
                <p><strong>Website:</strong> <a href="https://postgenius-ai.com" className="text-primary hover:text-primary-light">https://postgenius-ai.com</a></p>
              </div>
            </section>

            <p className="text-text-secondary italic mt-8">Thank you for using PostGenius!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
