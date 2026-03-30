import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'

export default function PrivacyPolicy() {
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
            <h1 className="text-4xl font-bold text-text-primary mb-2">Privacy Policy</h1>
            <p className="text-text-secondary"><strong>Last Updated:</strong> March 29, 2026</p>
          </div>

          <div className="space-y-8 text-text-secondary">
            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">1. Introduction</h2>
              <p>
                PostGenius ("Company," "we," "us," or "our") operates the PostGenius website and AI marketing automation platform (the "Service"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
              <p className="mt-3">
                Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">2. Information We Collect</h2>
              <h3 className="text-lg font-semibold text-text-primary mb-2">2.1 Information You Provide Directly</h3>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Account Information:</strong> Name, email address, password, company name, billing address</li>
                <li><strong>Payment Information:</strong> Credit card details (processed securely through Stripe; we do not store full card numbers)</li>
                <li><strong>Content Generated:</strong> Social media posts, email campaigns, product descriptions, and other content you create using our Service</li>
                <li><strong>Communications:</strong> Messages, feedback, support requests, and inquiries</li>
              </ul>

              <h3 className="text-lg font-semibold text-text-primary mb-2 mt-6">2.2 Information Collected Automatically</h3>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Usage Data:</strong> Pages visited, time spent, features used, clicks, and interactions</li>
                <li><strong>Device Information:</strong> Browser type, operating system, device type, IP address</li>
                <li><strong>Cookies and Tracking:</strong> We use cookies to enhance your experience and analyze usage patterns</li>
                <li><strong>Analytics:</strong> Google Analytics and similar tools to understand user behavior</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect for:</p>
              <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
                <li><strong>Service Delivery:</strong> Creating and managing your account, processing payments, generating content</li>
                <li><strong>Communication:</strong> Sending service updates, support responses, promotional emails (with opt-out option)</li>
                <li><strong>Improvement:</strong> Analyzing usage patterns to improve features and user experience</li>
                <li><strong>Security:</strong> Detecting fraud, preventing abuse, and protecting user safety</li>
                <li><strong>Legal Compliance:</strong> Meeting regulatory requirements and legal obligations</li>
                <li><strong>Marketing:</strong> With your consent, sending newsletters and promotional materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">4. Data Security</h2>
              <p>We implement industry-standard security measures including:</p>
              <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
                <li>SSL/TLS encryption for data in transit</li>
                <li>Secure password storage using encryption</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to personal information</li>
                <li>Two-factor authentication options</li>
              </ul>
              <p className="mt-4"><strong>However, no method of transmission over the internet is 100% secure.</strong> We cannot guarantee absolute security.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">5. Your Rights and Choices</h2>
              <h3 className="text-lg font-semibold text-text-primary mb-2">5.1 Access and Correction</h3>
              <p>You can access, update, or correct your personal information through your account settings.</p>

              <h3 className="text-lg font-semibold text-text-primary mb-2 mt-4">5.2 Data Deletion</h3>
              <p>You can request deletion of your account and associated data. We will comply within 30 days, except where legally required to retain data.</p>

              <h3 className="text-lg font-semibold text-text-primary mb-2 mt-4">5.3 Opt-Out</h3>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Email Marketing:</strong> Click "unsubscribe" in any promotional email</li>
                <li><strong>Cookies:</strong> Adjust browser settings to disable cookies</li>
                <li><strong>Analytics:</strong> Opt-out through Google Analytics settings</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">6. Contact Us</h2>
              <p>If you have questions about this Privacy Policy or our privacy practices:</p>
              <div className="mt-4 p-4 bg-card-bg rounded-lg border border-border-color">
                <p><strong>Email:</strong> <a href="mailto:support@postgenius-ai.com" className="text-primary hover:text-primary-light">support@postgenius-ai.com</a></p>
                <p><strong>Website:</strong> <a href="https://postgenius-ai.com" className="text-primary hover:text-primary-light">https://postgenius-ai.com</a></p>
              </div>
            </section>

            <p className="text-text-secondary italic mt-8">Your privacy is important to us. Thank you for trusting PostGenius.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
