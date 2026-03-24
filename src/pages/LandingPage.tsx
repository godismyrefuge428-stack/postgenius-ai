import { Link } from 'react-router-dom'
import { Zap, BarChart3, Clock, Sparkles, CheckCircle, ArrowRight } from 'lucide-react'

export default function LandingPage() {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'AI Content Generation',
      description: 'Automatically generate social media posts, email campaigns, and product descriptions using advanced AI.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Save 10+ Hours Weekly',
      description: 'Eliminate manual content creation. Let AI handle the heavy lifting while you focus on growth.'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Performance Analytics',
      description: 'Track engagement, reach, and ROI with built-in analytics dashboard.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'One-Click Scheduling',
      description: 'Schedule posts across all platforms instantly from your dashboard.'
    }
  ]

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$299',
      description: 'Perfect for new e-commerce stores',
      features: [
        '5 social posts/week',
        '1 email template/week',
        'Basic analytics',
        'Email support'
      ]
    },
    {
      name: 'Growth',
      price: '$699',
      description: 'For growing online businesses',
      features: [
        '15 social posts/week',
        '3 email templates/week',
        'Advanced analytics',
        'Priority support',
        'Custom brand voice'
      ],
      highlighted: true
    },
    {
      name: 'Agency',
      price: '$1,499',
      description: 'For agencies and enterprises',
      features: [
        'Unlimited content',
        'Unlimited email templates',
        'Custom integrations',
        '24/7 dedicated support',
        'API access',
        'White-label option'
      ]
    }
  ]

  return (
    <div className="bg-dark-bg">
      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-border-color bg-card-bg">
            <span className="text-sm text-accent-blue">🎉 Launch your AI marketing today</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI-Powered Marketing<br />
            <span className="gradient-text">Made Simple</span>
          </h1>
          
          <p className="text-xl text-text-secondary mb-8 max-w-2xl">
            Generate weeks of social media content and email campaigns in minutes. PostGenius automates your marketing so you can focus on selling.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/signup" className="btn-primary flex items-center justify-center gap-2">
              Start Free Trial <ArrowRight size={20} />
            </Link>
            <button className="btn-secondary">
              Watch Demo
            </button>
          </div>

          <p className="text-sm text-text-secondary mt-6">
            ✓ No credit card required • ✓ 14-day free trial • ✓ Cancel anytime
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose PostGenius?</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="card">
              <div className="text-accent-green mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="container py-20">
        <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: '1',
              title: 'Connect Your Store',
              description: 'Link your Shopify store or provide product details'
            },
            {
              step: '2',
              title: 'AI Generates Content',
              description: 'Our AI creates social posts, emails, and product descriptions'
            },
            {
              step: '3',
              title: 'Schedule & Publish',
              description: 'Review, customize, and schedule to your social channels'
            }
          ].map((item, i) => (
            <div key={i} className="relative">
              <div className="card text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-text-secondary">{item.description}</p>
              </div>
              {i < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="text-accent-blue" size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container py-20">
        <h2 className="text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
        <p className="text-center text-text-secondary mb-16 max-w-2xl mx-auto">
          Choose the plan that fits your business. All plans include a 14-day free trial.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, i) => (
            <div key={i} className={`card ${tier.highlighted ? 'ring-2 ring-accent-blue transform md:scale-105' : ''}`}>
              {tier.highlighted && (
                <div className="inline-block mb-4 px-3 py-1 rounded-full bg-accent-blue text-white text-xs font-semibold">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <p className="text-text-secondary text-sm mb-6">{tier.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-text-secondary">/month</span>
              </div>

              <button className={tier.highlighted ? 'btn-primary w-full mb-6' : 'btn-secondary w-full mb-6'}>
                Get Started
              </button>

              <ul className="space-y-3">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-accent-green flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <div className="card text-center py-16 bg-gradient-to-r from-primary-green/10 to-primary-teal/10 border-primary-teal/30">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Marketing?</h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Join hundreds of e-commerce businesses saving time and growing faster with PostGenius.
          </p>
          <Link to="/signup" className="btn-primary inline-block">
            Start Your Free Trial Today
          </Link>
        </div>
      </section>
    </div>
  )
}
