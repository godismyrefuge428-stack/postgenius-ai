import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'

export default function CookiePolicy() {
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
            <h1 className="text-4xl font-bold text-text-primary mb-2">Cookie Policy</h1>
            <p className="text-text-secondary"><strong>Last Updated:</strong> March 29, 2026</p>
          </div>

          <div className="space-y-8 text-text-secondary">
            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files stored on your device (computer, tablet, or mobile phone) when you visit our website. They help us recognize you, remember your preferences, and improve your experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">2. Types of Cookies We Use</h2>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Essential/Functional Cookies</h3>
              <p>These cookies are necessary for the Service to function properly:</p>
              <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
                <li><strong>session_id:</strong> Maintain your login session</li>
                <li><strong>auth_token:</strong> Authenticate your identity</li>
                <li><strong>csrf_token:</strong> Prevent cross-site request forgery attacks</li>
                <li><strong>preferences:</strong> Remember your language and display preferences</li>
              </ul>
              <p className="mt-3"><strong>These cookies cannot be disabled</strong> as they are essential for the Service to function.</p>

              <h3 className="text-lg font-semibold text-text-primary mb-2 mt-6">Analytics Cookies</h3>
              <p>We use Google Analytics to understand how users interact with our Service:</p>
              <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
                <li><strong>_ga:</strong> Track unique users and sessions</li>
                <li><strong>_gid:</strong> Track sessions</li>
                <li><strong>_gat:</strong> Throttle request rate</li>
              </ul>
              <p className="mt-3"><strong>Purpose:</strong> Analyze user behavior, identify popular features, and improve the Service.</p>

              <h3 className="text-lg font-semibold text-text-primary mb-2 mt-6">Marketing and Advertising Cookies</h3>
              <p>We may use cookies for marketing purposes to measure marketing effectiveness and improve targeting.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">3. Third-Party Services</h2>
              <p>We use the following third-party services that may set cookies:</p>
              <div className="space-y-3 mt-3">
                <div className="p-3 bg-card-bg rounded border border-border-color">
                  <p className="font-semibold text-primary">Google Analytics</p>
                  <p className="text-sm">Analyze website traffic and user behavior</p>
                  <p className="text-sm"><a href="https://policies.google.com/privacy" className="text-primary hover:text-primary-light">Privacy Policy</a></p>
                </div>
                <div className="p-3 bg-card-bg rounded border border-border-color">
                  <p className="font-semibold text-primary">Stripe</p>
                  <p className="text-sm">Payment processing and fraud prevention</p>
                  <p className="text-sm"><a href="https://stripe.com/privacy" className="text-primary hover:text-primary-light">Privacy Policy</a></p>
                </div>
                <div className="p-3 bg-card-bg rounded border border-border-color">
                  <p className="font-semibold text-primary">Google Workspace</p>
                  <p className="text-sm">Email and authentication</p>
                  <p className="text-sm"><a href="https://policies.google.com/privacy" className="text-primary hover:text-primary-light">Privacy Policy</a></p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">4. Your Cookie Choices</h2>
              <h3 className="text-lg font-semibold text-text-primary mb-2">4.1 Browser Controls</h3>
              <p>Most browsers allow you to control cookies through settings:</p>
              <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
                <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Preferences → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                <li><strong>Edge:</strong> Settings → Privacy, search, and services → Clear browsing data</li>
              </ul>

              <h3 className="text-lg font-semibold text-text-primary mb-2 mt-4">4.2 Disabling Cookies</h3>
              <p>If you disable cookies:</p>
              <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
                <li>Essential cookies cannot be disabled (Service may not function)</li>
                <li>You may not be able to access certain features</li>
                <li>Your experience may be degraded</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">5. Contact Us</h2>
              <p>If you have questions about our use of cookies:</p>
              <div className="mt-4 p-4 bg-card-bg rounded-lg border border-border-color">
                <p><strong>Email:</strong> <a href="mailto:support@postgenius-ai.com" className="text-primary hover:text-primary-light">support@postgenius-ai.com</a></p>
                <p><strong>Website:</strong> <a href="https://postgenius-ai.com" className="text-primary hover:text-primary-light">https://postgenius-ai.com</a></p>
              </div>
            </section>

            <p className="text-text-secondary italic mt-8">Thank you for understanding how we use cookies to improve your experience with PostGenius.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
