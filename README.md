# PostGenius - AI Marketing Automation Platform

AI-powered social media and email content generation platform for e-commerce businesses.

## Features

✨ **AI Content Generation** - Automatically generate social media posts, email campaigns, and product descriptions
⏰ **Save 10+ Hours Weekly** - Eliminate manual content creation
📊 **Performance Analytics** - Track engagement and ROI
🚀 **One-Click Scheduling** - Schedule posts across all platforms
💳 **Stripe Integration** - Secure payment processing
🔐 **User Authentication** - Secure login system
📱 **Responsive Design** - Works on all devices

## Tech Stack

**Frontend:**
- React 18 + TypeScript
- Vite (build tool)
- React Router (routing)
- Zustand (state management)
- Lucide Icons

**Backend:**
- Node.js + Express
- PostgreSQL (database)
- Stripe API (payments)
- OpenAI API (content generation)
- JWT (authentication)

## Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm
- PostgreSQL (for production)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd postgenius-ai
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. **Start development server**
```bash
pnpm dev
```

The app will be available at `http://localhost:5173` (frontend) and `http://localhost:3001` (backend).

## Project Structure

```
postgenius-ai/
├── src/
│   ├── components/        # Reusable components
│   ├── pages/            # Page components
│   ├── store/            # Zustand stores
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── server/
│   └── index.js          # Express backend
├── public/               # Static assets
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript config
└── package.json          # Dependencies
```

## Key Pages

### Landing Page (`/`)
- Marketing site with features and pricing
- Sign up and login links
- Hero section with CTA

### Dashboard (`/dashboard`)
- Customer content management
- Social media and email content tabs
- Performance analytics
- Content scheduling

### Admin Panel (`/admin`)
- Customer management
- Revenue tracking
- Subscription metrics
- Business analytics

### Authentication (`/login`, `/signup`)
- User registration
- Secure login
- Password management

## API Endpoints

### Authentication
- `POST /auth/signup` - Create new account
- `POST /auth/login` - User login

### Content
- `POST /content/generate` - Generate AI content
- `GET /content` - List generated content
- `PUT /content/:id` - Update content
- `DELETE /content/:id` - Delete content

### Webhooks
- `POST /webhooks/stripe` - Stripe payment webhooks

## Pricing Tiers

| Tier | Price | Features |
|------|-------|----------|
| **Starter** | $299/mo | 5 posts/week, 1 email/week, basic analytics |
| **Growth** | $699/mo | 15 posts/week, 3 emails/week, advanced analytics |
| **Agency** | $1,499/mo | Unlimited content, API access, white-label |

## Setup Guide for Production

### 1. Stripe Integration
1. Create a [Stripe account](https://stripe.com)
2. Get your API keys from the dashboard
3. Add to `.env`:
   ```
   STRIPE_SECRET_KEY=sk_live_...
   STRIPE_PUBLISHABLE_KEY=pk_live_...
   ```

### 2. OpenAI Integration
1. Create an [OpenAI account](https://openai.com)
2. Generate an API key
3. Add to `.env`:
   ```
   OPENAI_API_KEY=sk-...
   ```

### 3. Database Setup
1. Create PostgreSQL database
2. Run migrations (if applicable)
3. Add connection string to `.env`:
   ```
   DATABASE_URL=postgresql://user:password@host:5432/postgenius
   ```

### 4. Email Configuration
1. Set up SMTP credentials (Gmail, SendGrid, etc.)
2. Add to `.env`:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_USER=your_email@gmail.com
   SMTP_PASSWORD=your_app_password
   ```

### 5. Zapier Automation
1. Create Zapier account
2. Set up workflows for content distribution
3. Add webhook URL to `.env`:
   ```
   ZAPIER_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/...
   ```

## Deployment

### Deploy to Vercel (Frontend)
```bash
vercel deploy
```

### Deploy to Railway/Render (Backend)
1. Push code to GitHub
2. Connect repository to Railway/Render
3. Set environment variables
4. Deploy

## Zapier Automation Setup

### Social Media Distribution
1. Create Zapier Zap
2. Trigger: PostGenius content generated
3. Actions:
   - Post to Instagram
   - Post to TikTok
   - Post to Facebook
   - Post to Twitter

### Email Campaign Distribution
1. Trigger: Email content generated
2. Actions:
   - Send via Mailchimp
   - Send via ConvertKit
   - Send via Brevo

## Development

### Add New Features
1. Create component in `src/components/`
2. Create page in `src/pages/`
3. Add routes in `src/App.tsx`
4. Add API endpoints in `server/index.js`

### Testing
```bash
pnpm test
```

### Build for Production
```bash
pnpm build
pnpm start
```

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3001
lsof -ti:3001 | xargs kill -9
```

### Database Connection Error
- Verify PostgreSQL is running
- Check DATABASE_URL in `.env`
- Ensure database exists

### API Not Responding
- Check backend server is running on port 3001
- Verify CORS is enabled
- Check browser console for errors

## Support

Email: support@postgenius-ai.com

## License

MIT License - see LICENSE file for details

## Roadmap

- [ ] Advanced AI customization
- [ ] Team collaboration features
- [ ] Multi-language support
- [ ] Mobile app
- [ ] Advanced analytics dashboard
- [ ] Custom integrations marketplace
