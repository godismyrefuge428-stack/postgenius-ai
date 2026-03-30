import { Mail, Linkedin, Twitter } from 'lucide-react'
// Force rebuild v2 - Legal links added

export default function Footer() {
  return (
    <footer className="bg-card-bg border-t border-border-color mt-20">
      <div className="container py-12">
        <div className="bg-red-600 text-white p-4 mb-8 text-center font-bold text-2xl">
          🔴 TEST BANNER - LEGAL PAGES SECTION BELOW 🔴
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h4 className="font-bold mb-4">PostGenius</h4>
            <p className="text-text-secondary text-sm">AI-powered social media and email content generation for e-commerce businesses.</p>
          </div>

          {/* Product */}
          <div>
            <h5 className="font-semibold mb-4">Product</h5>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><a href="#features" className="hover:text-text-primary">Features</a></li>
              <li><a href="#pricing" className="hover:text-text-primary">Pricing</a></li>
              <li><a href="#" className="hover:text-text-primary">Documentation</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-semibold mb-4">Company</h5>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-text-primary">About</a></li>
              <li><a href="#" className="hover:text-text-primary">Blog</a></li>
              <li><a href="#" className="hover:text-text-primary">Careers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-semibold mb-4">Contact</h5>
            <div className="flex gap-4">
              <a href="mailto:support@postgenius-ai.com" className="text-text-secondary hover:text-text-primary">
                <Mail size={20} />
              </a>
              <a href="#" className="text-text-secondary hover:text-text-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-text-secondary hover:text-text-primary">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border-color pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-text-secondary">© 2026 PostGenius. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-text-secondary mt-4 md:mt-0 flex-wrap justify-center md:justify-end">
            <a href="/privacy" className="hover:text-text-primary">Privacy Policy</a>
            <a href="/terms" className="hover:text-text-primary">Terms of Service</a>
            <a href="/disclaimer" className="hover:text-text-primary">Disclaimer</a>
            <a href="/refund" className="hover:text-text-primary">Refund Policy</a>
            <a href="/cookies" className="hover:text-text-primary">Cookie Policy</a>
            <a href="/copyright" className="hover:text-text-primary">Copyright</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
