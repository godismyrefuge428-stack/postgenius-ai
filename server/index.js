import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import Stripe from 'stripe'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001
const stripeKey = process.env.STRIPE_SECRET_KEY || 'sk_test_51TEVOLB3CBhpw6YEXny0EGAeUFrpbJMuWERF6BLAlfZD7vg5sVxPwOjhtzUeFwQJKrdZ4raKrmYSrpnfQwSGeL8F00FHOYgDfh'
const stripe = new Stripe(stripeKey)

// Middleware
app.use(cors())
app.use(express.json())

// Mock database (replace with PostgreSQL in production)
const users = new Map()
const subscriptions = new Map()
const contentItems = new Map()
let contentIdCounter = 1

// ============ AUTHENTICATION ROUTES ============

app.post('/auth/signup', async (req, res) => {
  try {
    const { email, password, name } = req.body

    if (users.has(email)) {
      return res.status(400).json({ error: 'User already exists' })
    }

    const user = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
      role: 'customer',
      createdAt: new Date().toISOString(),
      subscription: {
        tier: 'starter',
        status: 'active',
        stripeCustomerId: null,
        renewalDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
      }
    }

    users.set(email, { ...user, password })
    subscriptions.set(user.id, user.subscription)

    const token = Buffer.from(JSON.stringify({ email, id: user.id })).toString('base64')

    res.json({
      token,
      user: { ...user, subscription: user.subscription }
    })
  } catch (error) {
    res.status(500).json({ error: 'Signup failed' })
  }
})

app.post('/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body

    const user = users.get(email)
    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const token = Buffer.from(JSON.stringify({ email, id: user.id })).toString('base64')

    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        subscription: subscriptions.get(user.id)
      }
    })
  } catch (error) {
    res.status(500).json({ error: 'Login failed' })
  }
})

// ============ STRIPE PAYMENT ROUTES ============

app.post('/stripe/create-checkout', async (req, res) => {
  try {
    const { tier, email, userId } = req.body

    const priceMap = {
      starter: 29900,
      growth: 69900,
      agency: 149900
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `PostGenius ${tier.charAt(0).toUpperCase() + tier.slice(1)} Plan`,
              description: 'Monthly subscription for AI content generation'
            },
            unit_amount: priceMap[tier],
            recurring: {
              interval: 'month',
              interval_count: 1
            }
          },
          quantity: 1
        }
      ],
      mode: 'subscription',
      success_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/pricing`,
      customer_email: email,
      metadata: { userId, tier }
    })

    res.json({ sessionId: session.id, url: session.url })
  } catch (error) {
    console.error('Stripe error:', error)
    res.status(500).json({ error: 'Payment session creation failed' })
  }
})

app.post('/stripe/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature']

  try {
    const event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET || 'whsec_test'
    )

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object
      const userId = session.metadata.userId
      const tier = session.metadata.tier

      if (subscriptions.has(userId)) {
        subscriptions.set(userId, {
          ...subscriptions.get(userId),
          tier,
          status: 'active',
          stripeCustomerId: session.customer,
          renewalDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
        })
      }

      console.log(`Subscription activated for user ${userId}: ${tier}`)
    }

    res.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    res.status(400).send(`Webhook Error: ${error.message}`)
  }
})

// ============ CONTENT GENERATION ROUTES ============

app.post('/content/generate', async (req, res) => {
  try {
    const { type, topic, count = 3, userId } = req.body

    // Mock AI content generation (replace with OpenAI API in production)
    const socialTemplates = [
      `🎉 New ${topic} just dropped! Limited time offer - 30% off. Shop now →`,
      `✨ Check out our latest ${topic}! Customers are loving it. #PostGenius`,
      `🚀 ${topic} alert! Don't miss out on this exclusive deal. Link in bio →`,
      `💎 Premium quality ${topic} at unbeatable prices. Your next favorite find! 🛍️`,
      `⏰ Flash sale on ${topic}! Only 24 hours left. Grab yours now!`
    ]

    const emailTemplates = [
      {
        subject: `Exclusive: New ${topic} Collection Inside`,
        body: `Hi there! We just launched our new ${topic} collection. Our customers are already loving it. Check it out and get 20% off your first order with code WELCOME20.`
      },
      {
        subject: `You won't believe what we just added...`,
        body: `We've been working on something special, and we think you'll love it. Introducing our new ${topic} line. Limited quantities available.`
      },
      {
        subject: `Last chance: ${topic} sale ends tonight`,
        body: `The clock is ticking! Our ${topic} sale ends at midnight. Grab your favorites before they're gone.`
      }
    ]

    const content = []
    for (let i = 0; i < count; i++) {
      if (type === 'social') {
        content.push(socialTemplates[i % socialTemplates.length])
      } else if (type === 'email') {
        content.push(emailTemplates[i % emailTemplates.length])
      }
    }

    // Save content items
    const contentIds = []
    content.forEach(item => {
      const id = `content_${contentIdCounter++}`
      contentItems.set(id, {
        id,
        userId,
        type,
        content: typeof item === 'string' ? item : JSON.stringify(item),
        status: 'draft',
        createdAt: new Date().toISOString()
      })
      contentIds.push(id)
    })

    res.json({
      success: true,
      content,
      contentIds,
      message: `Generated ${count} ${type} content items`
    })
  } catch (error) {
    console.error('Content generation error:', error)
    res.status(500).json({ error: 'Content generation failed' })
  }
})

app.get('/content/:userId', async (req, res) => {
  try {
    const { userId } = req.params
    const userContent = Array.from(contentItems.values()).filter(item => item.userId === userId)
    res.json({ content: userContent })
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch content' })
  }
})

app.put('/content/:contentId', async (req, res) => {
  try {
    const { contentId } = req.params
    const { status, content } = req.body

    if (contentItems.has(contentId)) {
      const item = contentItems.get(contentId)
      contentItems.set(contentId, {
        ...item,
        status: status || item.status,
        content: content || item.content,
        updatedAt: new Date().toISOString()
      })
      res.json({ success: true, item: contentItems.get(contentId) })
    } else {
      res.status(404).json({ error: 'Content not found' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Update failed' })
  }
})

app.delete('/content/:contentId', async (req, res) => {
  try {
    const { contentId } = req.params
    if (contentItems.has(contentId)) {
      contentItems.delete(contentId)
      res.json({ success: true })
    } else {
      res.status(404).json({ error: 'Content not found' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Deletion failed' })
  }
})

// ============ ZAPIER WEBHOOK ROUTES ============

app.post('/zapier/schedule-post', async (req, res) => {
  try {
    const { contentId, platforms, scheduledTime } = req.body

    // This would trigger Zapier automation
    console.log(`Scheduled post ${contentId} to ${platforms.join(', ')} at ${scheduledTime}`)

    res.json({
      success: true,
      message: `Post scheduled for ${scheduledTime}`,
      zapierWebhookId: `zap_${Math.random().toString(36).substr(2, 9)}`
    })
  } catch (error) {
    res.status(500).json({ error: 'Scheduling failed' })
  }
})

app.post('/zapier/send-email', async (req, res) => {
  try {
    const { contentId, recipientList, sendTime } = req.body

    console.log(`Email campaign ${contentId} scheduled for ${sendTime}`)

    res.json({
      success: true,
      message: `Email campaign scheduled`,
      campaignId: `camp_${Math.random().toString(36).substr(2, 9)}`
    })
  } catch (error) {
    res.status(500).json({ error: 'Email scheduling failed' })
  }
})

// ============ ADMIN ROUTES ============

app.get('/admin/stats', async (req, res) => {
  try {
    const totalCustomers = users.size
    const mrr = Array.from(subscriptions.values()).reduce((sum, sub) => {
      const tierPrices = { starter: 299, growth: 699, agency: 1499 }
      return sum + (tierPrices[sub.tier] || 0)
    }, 0)

    const activeSubscriptions = Array.from(subscriptions.values()).filter(
      sub => sub.status === 'active'
    ).length

    res.json({
      totalCustomers,
      mrr,
      activeSubscriptions,
      churnRate: 0,
      growthRate: 25
    })
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch stats' })
  }
})

app.get('/admin/customers', async (req, res) => {
  try {
    const customerList = Array.from(users.values()).map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
      subscription: subscriptions.get(user.id),
      createdAt: user.createdAt
    }))

    res.json({ customers: customerList })
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch customers' })
  }
})

// ============ HEALTH CHECK ============

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Internal server error' })
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 PostGenius server running on http://localhost:${PORT}`)
  console.log(`📊 Health check: http://localhost:${PORT}/health`)
})
