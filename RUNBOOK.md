# MAINTOR - Complete Runbook

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Local Development Setup](#local-development-setup)
3. [Environment Configuration](#environment-configuration)
4. [Database Setup](#database-setup)
5. [Running the Application](#running-the-application)
6. [Vercel Deployment](#vercel-deployment)
7. [Service Configuration](#service-configuration)
8. [Testing Checklist](#testing-checklist)
9. [Troubleshooting](#troubleshooting)

---

## Prerequisites

### Required Software
- Node.js 20+ (LTS recommended)
- npm 10+ or pnpm 8+
- Git

### Required Accounts
- [Clerk](https://clerk.com) - Authentication
- [Neon](https://neon.tech) - PostgreSQL database
- [Stripe](https://stripe.com) - Payment processing
- [Cloudflare R2](https://cloudflare.com) - File storage
- [UploadThing](https://uploadthing.com) - File uploads
- [Resend](https://resend.com) - Transactional email
- [OpenAI](https://platform.openai.com) - Embeddings API
- [Vercel](https://vercel.com) - Deployment
- [Plausible](https://plausible.io) - Analytics (optional)

---

## Local Development Setup

### 1. Clone and Install

```bash
# Clone the repository
git clone https://github.com/your-org/maintor.git
cd maintor

# Install dependencies
npm install
```

### 2. Environment Setup

```bash
# Copy environment template
cp .env.example .env.local

# Edit with your values
nano .env.local
```

### 3. Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# Seed the database (40 tools, 960 lessons)
npm run db:seed
```

### 4. Start Development Server

```bash
npm run dev
```

Application will be available at `http://localhost:3000`

---

## Environment Configuration

### Required Variables

```env
# Database (Neon)
DATABASE_URL="postgresql://user:pass@host/db?sslmode=require"
DIRECT_URL="postgresql://user:pass@host/db?sslmode=require"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."
CLERK_WEBHOOK_SECRET="whsec_..."

# Stripe Payments
STRIPE_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
STRIPE_PRO_MONTHLY_PRICE_ID="price_..."

# OpenAI (for embeddings)
OPENAI_API_KEY="sk-..."

# Resend Email
RESEND_API_KEY="re_..."
RESEND_FROM_EMAIL="noreply@yourdomain.com"
SUPPORT_EMAIL="support@yourdomain.com"

# UploadThing
UPLOADTHING_SECRET="sk_live_..."
UPLOADTHING_APP_ID="..."

# Cloudflare R2
R2_ACCOUNT_ID="..."
R2_ACCESS_KEY_ID="..."
R2_SECRET_ACCESS_KEY="..."
R2_BUCKET_NAME="maintor-files"
R2_PUBLIC_URL="https://..."

# Application
NEXT_PUBLIC_APP_URL="http://localhost:3000"
ADMIN_EMAILS="admin@yourdomain.com"
```

---

## Database Setup

### Neon Setup

1. Create a Neon project at https://neon.tech
2. Enable the pgvector extension:
   ```sql
   CREATE EXTENSION IF NOT EXISTS vector;
   ```
3. Copy the connection strings to your `.env.local`

### Schema Migration

```bash
# Development: Push schema directly
npx prisma db push

# Production: Use migrations
npx prisma migrate dev --name init
npx prisma migrate deploy
```

### Seeding

```bash
# Seed all data (40 tools, 960 lessons)
npm run db:seed

# Generate FAQ embeddings
npm run generate:embeddings
```

### Prisma Studio

```bash
# View and edit data
npm run db:studio
```

---

## Running the Application

### Development Mode

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm start
```

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

---

## Vercel Deployment

### 1. Connect Repository

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Select "Next.js" framework preset

### 2. Configure Environment Variables

Add all environment variables from `.env.example` to Vercel:
- Go to Project Settings → Environment Variables
- Add each variable for Production, Preview, and Development

### 3. Configure Build Settings

```json
{
  "buildCommand": "prisma generate && next build",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

### 4. Deploy

Vercel will automatically deploy on push to main branch.

### 5. Post-Deployment

```bash
# Run database migrations
npx prisma migrate deploy

# Seed production database (run once)
npm run db:seed
```

---

## Service Configuration

### Clerk Setup

1. Create application at https://dashboard.clerk.com
2. Configure OAuth providers (Google, GitHub)
3. Set up webhook endpoint:
   - URL: `https://yourdomain.com/api/webhooks/clerk`
   - Events: `user.created`, `user.updated`, `user.deleted`
4. Copy webhook secret to `CLERK_WEBHOOK_SECRET`

### Stripe Setup

1. Create products in Stripe Dashboard:
   - **Pro Monthly**: $29/month
   - **Pro Yearly**: $290/year (optional)
2. Copy price IDs to environment variables
3. Set up webhook endpoint:
   - URL: `https://yourdomain.com/api/webhooks/stripe`
   - Events:
     - `checkout.session.completed`
     - `customer.subscription.updated`
     - `customer.subscription.deleted`
     - `invoice.payment_failed`
4. Configure Customer Portal in Stripe Dashboard

### UploadThing Setup

1. Create app at https://uploadthing.com
2. Configure allowed file types and sizes
3. Copy credentials to environment variables

### Resend Setup

1. Create account at https://resend.com
2. Verify your domain
3. Copy API key to `RESEND_API_KEY`

### OpenAI Setup

1. Create API key at https://platform.openai.com
2. Copy to `OPENAI_API_KEY`
3. Generate embeddings:
   ```bash
   npm run generate:embeddings
   ```

---

## Testing Checklist

### Authentication
- [ ] User can sign up with email
- [ ] User can sign in
- [ ] User can sign out
- [ ] OAuth providers work (Google, GitHub)
- [ ] User profile syncs to database

### Learning System
- [ ] Tools page displays all 40 tools
- [ ] Tool detail page shows levels
- [ ] Lessons are accessible
- [ ] Video player works
- [ ] Markdown content renders
- [ ] Quiz component functions
- [ ] Lesson completion saves

### Gamification
- [ ] XP awards on lesson completion (+25)
- [ ] XP awards on level completion (+200/300/500)
- [ ] XP awards on tool completion (+1000)
- [ ] Level thresholds work correctly
- [ ] Medals are awarded for level completion
- [ ] Tool Master medal for completing all levels
- [ ] Achievements track progress

### Subscriptions
- [ ] Free tier limitations work
- [ ] Checkout flow completes
- [ ] Subscription activates after payment
- [ ] Customer portal accessible
- [ ] Cancellation works
- [ ] Webhook events process correctly

### Chatbot
- [ ] FAQ search returns relevant results
- [ ] Support tickets created for unmatched queries
- [ ] Email notifications sent

### Admin CMS
- [ ] Admin access restricted properly
- [ ] Tools can be created/edited
- [ ] Lessons can be managed
- [ ] File uploads work
- [ ] Publishing/unpublishing works

### Performance
- [ ] Pages load under 3 seconds
- [ ] Images optimized
- [ ] No console errors
- [ ] Mobile responsive

---

## Troubleshooting

### Database Connection Issues

```bash
# Test connection
npx prisma db pull

# Reset database (DESTRUCTIVE)
npx prisma migrate reset
```

### Prisma Client Issues

```bash
# Regenerate client
npx prisma generate

# Clear cache
rm -rf node_modules/.prisma
npm install
```

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules
rm -rf node_modules
npm install
```

### Webhook Issues

1. Check webhook endpoint is publicly accessible
2. Verify webhook secrets match
3. Check Vercel logs for errors
4. Use Stripe/Clerk webhook logs for debugging

### pgvector Issues

Ensure extension is enabled in Neon:
```sql
CREATE EXTENSION IF NOT EXISTS vector;
```

### Common Errors

**"Invalid API Key"**
- Verify all API keys are correct
- Check for whitespace in environment variables

**"Webhook signature verification failed"**
- Ensure webhook secret matches
- Check raw body is being passed (not parsed JSON)

**"User not found"**
- Check Clerk webhook is configured
- Verify user sync on sign up

---

## Maintenance

### Database Backups

Neon provides automatic backups. For manual backup:
```bash
pg_dump $DATABASE_URL > backup.sql
```

### Updating Dependencies

```bash
# Check for updates
npm outdated

# Update all
npm update

# Update specific package
npm update package-name
```

### Monitoring

- Use Vercel Analytics for performance
- Use Plausible for user analytics
- Monitor Stripe dashboard for payments
- Check Resend dashboard for email delivery

---

## Support

For issues or questions:
- GitHub Issues: [github.com/your-org/maintor/issues](https://github.com/your-org/maintor/issues)
- Email: support@maintor.ai

---

*Last updated: 2024*
