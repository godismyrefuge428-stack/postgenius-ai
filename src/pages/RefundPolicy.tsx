import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'

export default function RefundPolicy() {
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
            <h1 className="text-4xl font-bold text-text-primary mb-2">Refund and Return Policy</h1>
            <p className="text-text-secondary"><strong>Last Updated:</strong> March 29, 2026</p>
          </div>

          <div className="space-y-8 text-text-secondary">
            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">1. 30-Day Money-Back Guarantee</h2>
              <p>We offer a <strong>30-day money-back guarantee</strong> for new customers:</p>
              <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
                <li>If you subscribe to any PostGenius plan and are not satisfied, you can request a full refund within 30 days of your initial purchase</li>
                <li>Refunds are issued to your original payment method</li>
                <li>No questions asked, we want you to be happy with our Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">2. How to Request a Refund</h2>
              <p>To request a refund:</p>
              <ol className="list-decimal list-inside space-y-2 ml-2 mt-3">
                <li>Email support@postgenius-ai.com with "Refund Request" in the subject line</li>
                <li>Include your account email and subscription plan details</li>
                <li>Provide a brief reason for your request (optional)</li>
                <li>We will process your request within 5-7 business days</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">3. Subscription Cancellation</h2>
              <h3 className="text-lg font-semibold text-text-primary mb-2">3.1 Cancellation Policy</h3>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>You can cancel your subscription at any time through your account dashboard</li>
                <li>Cancellation takes effect at the end of your current billing cycle</li>
                <li>You will not be charged for future billing periods after cancellation</li>
                <li>No refunds are issued for partial months or unused service time</li>
              </ul>

              <h3 className="text-lg font-semibold text-text-primary mb-2 mt-4">3.2 How to Cancel</h3>
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Log in to your PostGenius account</li>
                <li>Navigate to Settings → Billing</li>
                <li>Click "Cancel Subscription"</li>
                <li>Confirm cancellation</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">4. Refund Processing</h2>
              <h3 className="text-lg font-semibold text-text-primary mb-2">4.1 Timeline</h3>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Refund requests are processed within 5-7 business days</li>
                <li>Refunds are issued to your original payment method</li>
                <li>Your bank or credit card company may take an additional 3-5 business days to process the refund</li>
                <li>You will receive a confirmation email when the refund is processed</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">5. Non-Refundable Items</h2>
              <p>The following are non-refundable:</p>
              <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
                <li>Content generated through the Service (you retain ownership; we cannot reverse content creation)</li>
                <li>Setup or onboarding fees (if applicable)</li>
                <li>Custom integrations or professional services</li>
                <li>Promotional or discounted subscription periods</li>
                <li>Charges from third-party integrations (Zapier, email providers, etc.)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">6. Contact Information</h2>
              <p>For refund requests or billing questions:</p>
              <div className="mt-4 p-4 bg-card-bg rounded-lg border border-border-color">
                <p><strong>Email:</strong> <a href="mailto:support@postgenius-ai.com" className="text-primary hover:text-primary-light">support@postgenius-ai.com</a></p>
                <p><strong>Website:</strong> <a href="https://postgenius-ai.com" className="text-primary hover:text-primary-light">https://postgenius-ai.com</a></p>
              </div>
            </section>

            <p className="text-text-secondary italic mt-8">Your satisfaction is important to us. If you have any questions about our refund policy, please don't hesitate to contact us.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
