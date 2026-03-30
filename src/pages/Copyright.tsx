import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'

export default function Copyright() {
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
            <h1 className="text-4xl font-bold text-text-primary mb-2">Copyright Notice</h1>
            <p className="text-text-secondary"><strong>Last Updated:</strong> March 29, 2026</p>
          </div>

          <div className="space-y-8 text-text-secondary">
            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">1. Copyright Ownership</h2>
              <p>© 2026 PostGenius. All rights reserved.</p>
              <p className="mt-3">
                PostGenius ("Company," "we," "us," "our") owns and retains all intellectual property rights to the PostGenius website, platform, software, and services, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
                <li>Source code and software</li>
                <li>Design and layout</li>
                <li>Graphics, logos, and branding</li>
                <li>Content and documentation</li>
                <li>Trademarks and service marks</li>
                <li>Databases and data compilations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">2. Intellectual Property Rights</h2>
              <h3 className="text-lg font-semibold text-text-primary mb-2">2.1 Platform and Service</h3>
              <p>
                The PostGenius platform, including all software, code, algorithms, and systems, is protected by copyright law and international intellectual property treaties. Unauthorized reproduction, modification, or distribution is prohibited.
              </p>

              <h3 className="text-lg font-semibold text-text-primary mb-2 mt-4">2.2 Trademarks</h3>
              <p>The following trademarks are owned by PostGenius:</p>
              <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
                <li>PostGenius®</li>
                <li>PostGenius AI™</li>
              </ul>
              <p className="mt-3">These trademarks may not be used without express written permission from PostGenius.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">3. User-Generated Content</h2>
              <h3 className="text-lg font-semibold text-text-primary mb-2">3.1 Your Content Ownership</h3>
              <p>You retain ownership of all content you create and generate through PostGenius ("Your Content"), including:</p>
              <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
                <li>Social media posts</li>
                <li>Email campaigns</li>
                <li>Product descriptions</li>
                <li>Marketing copy</li>
                <li>Any other materials you create</li>
              </ul>

              <h3 className="text-lg font-semibold text-text-primary mb-2 mt-4">3.2 Your Content License to PostGenius</h3>
              <p>By using PostGenius, you grant us a worldwide, royalty-free, perpetual license to:</p>
              <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
                <li>Use Your Content for Service improvement</li>
                <li>Display Your Content in analytics and reports</li>
                <li>Use aggregated, anonymized insights from Your Content</li>
                <li>Use Your Content for marketing purposes (with your consent)</li>
              </ul>

              <h3 className="text-lg font-semibold text-text-primary mb-2 mt-4">3.3 Your Responsibility</h3>
              <p>You represent and warrant that:</p>
              <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
                <li>You own or have the right to use Your Content</li>
                <li>Your Content does not infringe on third-party rights</li>
                <li>Your Content complies with all applicable laws</li>
                <li>You have obtained necessary permissions and licenses</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">4. Limited License to Use Our Service</h2>
              <p>PostGenius grants you a limited, non-exclusive, non-transferable license to use the Service for lawful purposes only. This license does not permit you to:</p>
              <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
                <li>Reproduce or copy the Service (except for personal backup)</li>
                <li>Modify or create derivative works</li>
                <li>Distribute or sell the Service</li>
                <li>Reverse engineer or decompile the Service</li>
                <li>Remove copyright or proprietary notices</li>
                <li>Use the Service for commercial purposes without permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">5. Fair Use</h2>
              <p>
                Nothing in this Copyright Notice restricts your rights under fair use or other applicable copyright exceptions. Fair use may permit limited use of copyrighted material for purposes such as criticism, commentary, news reporting, teaching, scholarship, and parody.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">6. Prohibited Uses</h2>
              <p>You may not use PostGenius to:</p>
              <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
                <li>Infringe on copyrights, trademarks, or other intellectual property rights</li>
                <li>Create content that violates third-party rights</li>
                <li>Plagiarize or copy content without permission</li>
                <li>Violate any applicable copyright laws</li>
                <li>Circumvent copyright protection measures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">7. Contact Information</h2>
              <p>For copyright inquiries or concerns:</p>
              <div className="mt-4 p-4 bg-card-bg rounded-lg border border-border-color">
                <p><strong>Email:</strong> <a href="mailto:support@postgenius-ai.com" className="text-primary hover:text-primary-light">support@postgenius-ai.com</a></p>
                <p><strong>Website:</strong> <a href="https://postgenius-ai.com" className="text-primary hover:text-primary-light">https://postgenius-ai.com</a></p>
              </div>
            </section>

            <p className="text-text-secondary italic mt-8">© 2026 PostGenius. All rights reserved. Unauthorized reproduction or use is prohibited.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
