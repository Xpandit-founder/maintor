# MAINTOR - Complete File Tree

```
maintor/
├── .env.example
├── .env.local (gitignored)
├── .eslintrc.json
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── prisma/
│   ├── schema.prisma
│   ├── seed.ts
│   └── migrations/
├── public/
│   ├── favicon.ico
│   ├── logo.svg
│   └── images/
│       ├── medals/
│       │   ├── bronze.svg
│       │   ├── silver.svg
│       │   ├── gold.svg
│       │   └── grandmaster.svg
│       └── tools/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── (auth)/
│   │   │   ├── sign-in/[[...sign-in]]/page.tsx
│   │   │   └── sign-up/[[...sign-up]]/page.tsx
│   │   ├── (marketing)/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── tools/
│   │   │       ├── page.tsx
│   │   │       └── [slug]/
│   │   │           └── page.tsx
│   │   ├── (dashboard)/
│   │   │   ├── layout.tsx
│   │   │   ├── dashboard/
│   │   │   │   └── page.tsx
│   │   │   ├── profile/
│   │   │   │   └── page.tsx
│   │   │   ├── settings/
│   │   │   │   └── page.tsx
│   │   │   ├── chatbot/
│   │   │   │   └── page.tsx
│   │   │   └── tool/
│   │   │       └── [slug]/
│   │   │           └── [level]/
│   │   │               └── lesson/
│   │   │                   └── [number]/
│   │   │                       └── page.tsx
│   │   ├── admin/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── tools/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── new/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── [id]/
│   │   │   │       ├── page.tsx
│   │   │   │       └── lessons/
│   │   │   │           ├── page.tsx
│   │   │   │           ├── new/
│   │   │   │           │   └── page.tsx
│   │   │   │           └── [lessonId]/
│   │   │   │               └── page.tsx
│   │   │   ├── lessons/
│   │   │   │   └── page.tsx
│   │   │   ├── users/
│   │   │   │   └── page.tsx
│   │   │   └── settings/
│   │   │       └── page.tsx
│   │   └── api/
│   │       ├── chatbot/
│   │       │   └── route.ts
│   │       ├── lessons/
│   │       │   ├── route.ts
│   │       │   ├── [id]/
│   │       │   │   └── route.ts
│   │       │   └── complete/
│   │       │       └── route.ts
│   │       ├── tools/
│   │       │   ├── route.ts
│   │       │   └── [id]/
│   │       │       └── route.ts
│   │       ├── xp/
│   │       │   └── route.ts
│   │       ├── achievements/
│   │       │   └── route.ts
│   │       ├── webhooks/
│   │       │   ├── stripe/
│   │       │   │   └── route.ts
│   │       │   └── clerk/
│   │       │       └── route.ts
│   │       ├── uploadthing/
│   │       │   └── route.ts
│   │       └── subscription/
│   │           └── route.ts
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── toast.tsx
│   │   │   ├── tooltip.tsx
│   │   │   └── textarea.tsx
│   │   ├── aceternity/
│   │   │   ├── background-beams.tsx
│   │   │   ├── spotlight.tsx
│   │   │   ├── moving-border.tsx
│   │   │   ├── text-generate-effect.tsx
│   │   │   ├── bento-grid.tsx
│   │   │   ├── animated-tooltip.tsx
│   │   │   ├── floating-navbar.tsx
│   │   │   ├── hover-border-gradient.tsx
│   │   │   └── infinite-moving-cards.tsx
│   │   ├── layout/
│   │   │   ├── navbar.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── sidebar.tsx
│   │   │   ├── mobile-nav.tsx
│   │   │   └── dashboard-shell.tsx
│   │   ├── dashboard/
│   │   │   ├── xp-display.tsx
│   │   │   ├── level-badge.tsx
│   │   │   ├── progress-card.tsx
│   │   │   ├── medal-showcase.tsx
│   │   │   ├── recommended-lesson.tsx
│   │   │   ├── stats-grid.tsx
│   │   │   └── activity-feed.tsx
│   │   ├── tools/
│   │   │   ├── tool-card.tsx
│   │   │   ├── tool-grid.tsx
│   │   │   ├── level-selector.tsx
│   │   │   └── tool-progress.tsx
│   │   ├── lessons/
│   │   │   ├── lesson-viewer.tsx
│   │   │   ├── lesson-navigation.tsx
│   │   │   ├── video-player.tsx
│   │   │   ├── markdown-renderer.tsx
│   │   │   ├── quiz-component.tsx
│   │   │   ├── completion-button.tsx
│   │   │   └── resource-list.tsx
│   │   ├── chatbot/
│   │   │   ├── chat-interface.tsx
│   │   │   ├── chat-message.tsx
│   │   │   └── chat-input.tsx
│   │   ├── admin/
│   │   │   ├── tool-form.tsx
│   │   │   ├── lesson-form.tsx
│   │   │   ├── data-table.tsx
│   │   │   ├── file-uploader.tsx
│   │   │   └── admin-sidebar.tsx
│   │   └── shared/
│   │       ├── loading.tsx
│   │       ├── error-boundary.tsx
│   │       ├── empty-state.tsx
│   │       └── confirmation-dialog.tsx
│   ├── lib/
│   │   ├── prisma.ts
│   │   ├── clerk.ts
│   │   ├── stripe.ts
│   │   ├── resend.ts
│   │   ├── uploadthing.ts
│   │   ├── r2.ts
│   │   ├── openai.ts
│   │   ├── utils.ts
│   │   ├── constants.ts
│   │   └── validations.ts
│   ├── services/
│   │   ├── xp-engine.ts
│   │   ├── achievement-engine.ts
│   │   ├── medal-engine.ts
│   │   ├── lesson-service.ts
│   │   ├── tool-service.ts
│   │   ├── chatbot-service.ts
│   │   ├── subscription-service.ts
│   │   └── embedding-service.ts
│   ├── hooks/
│   │   ├── use-xp.ts
│   │   ├── use-progress.ts
│   │   ├── use-lessons.ts
│   │   ├── use-subscription.ts
│   │   └── use-chatbot.ts
│   ├── types/
│   │   ├── index.ts
│   │   ├── database.ts
│   │   ├── api.ts
│   │   └── gamification.ts
│   └── middleware.ts
└── scripts/
    ├── seed-tools.ts
    ├── generate-embeddings.ts
    └── migrate-data.ts
```

## Key Directories

### `/src/app/` - Next.js 15 App Router
- Route groups for organization: `(auth)`, `(marketing)`, `(dashboard)`
- API routes under `/api/`
- Admin routes under `/admin/`

### `/src/components/` - React Components
- `ui/` - Base shadcn/ui components
- `aceternity/` - Aceternity UI animated components
- `layout/` - Layout components (navbar, sidebar, footer)
- `dashboard/` - Dashboard-specific components
- `tools/` - Tool browsing components
- `lessons/` - Lesson viewing components
- `chatbot/` - Chatbot interface components
- `admin/` - Admin CMS components
- `shared/` - Shared utility components

### `/src/lib/` - Core Libraries
- Database, auth, payments, storage, email integrations

### `/src/services/` - Business Logic
- XP, achievements, medals engines
- Lesson, tool, chatbot services

### `/prisma/` - Database
- Schema definition
- Seed script for 960 lessons
