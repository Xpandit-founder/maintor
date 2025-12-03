// prisma/seed.ts
// MAINTOR - Complete Seed Script
// Generates 40 tools × 3 levels × 8 lessons = 960 lessons

import { PrismaClient, ToolCategory, LevelName, MedalType } from '@prisma/client';
import { CHATGPT_BEGINNER_LESSONS } from './lesson-content/chatgpt-beginner';
import { CHATGPT_PRO_LESSONS } from './lesson-content/chatgpt-pro';
import { CHATGPT_MASTER_LESSONS } from './lesson-content/chatgpt-master';

const prisma = new PrismaClient();

// ============================================
// TOOL DEFINITIONS - 40 AI Tools (Official List)
// ============================================

const TOOLS_DATA = [
  // TEXT AI / CHATBOTS (5 tools)
  { name: 'ChatGPT', slug: 'chatgpt', category: ToolCategory.TEXT_AI, color: '#10A37F', description: 'Master OpenAI\'s revolutionary conversational AI for text generation and problem-solving', isFree: true },
  { name: 'Claude', slug: 'claude', category: ToolCategory.TEXT_AI, color: '#D97706', description: 'Learn Anthropic\'s helpful, harmless, and honest AI assistant', isFree: true },
  { name: 'Gemini', slug: 'gemini', category: ToolCategory.TEXT_AI, color: '#4285F4', description: 'Explore Google\'s multimodal AI capabilities and integration', isFree: true },
  { name: 'Microsoft Copilot', slug: 'microsoft-copilot', category: ToolCategory.TEXT_AI, color: '#0078D4', description: 'Master Microsoft\'s AI assistant integrated across Office and Windows', isFree: true },
  { name: 'Perplexity', slug: 'perplexity', category: ToolCategory.RESEARCH, color: '#1FB8CD', description: 'AI-powered search and research assistant with real-time citations', isFree: true },

  // MEMORY & PRODUCTIVITY AI (1 tool)
  { name: 'Rewind AI', slug: 'rewind-ai', category: ToolCategory.PRODUCTIVITY, color: '#000000', description: 'AI-powered memory assistant that captures and recalls everything you\'ve seen' },

  // IMAGE AI (5 tools)
  { name: 'Midjourney', slug: 'midjourney', category: ToolCategory.IMAGE_AI, color: '#000000', description: 'Create stunning AI art and imagery with the most popular image generator' },
  { name: 'DALL·E', slug: 'dalle', category: ToolCategory.IMAGE_AI, color: '#10A37F', description: 'OpenAI\'s powerful text-to-image generation model' },
  { name: 'Leonardo', slug: 'leonardo', category: ToolCategory.IMAGE_AI, color: '#7C3AED', description: 'Professional AI art creation platform with fine-tuned models' },
  { name: 'Ideogram', slug: 'ideogram', category: ToolCategory.IMAGE_AI, color: '#EC4899', description: 'AI images with perfect text rendering and typography' },
  { name: 'Stable Diffusion', slug: 'stable-diffusion', category: ToolCategory.IMAGE_AI, color: '#A855F7', description: 'Open-source image generation powerhouse for local and cloud use', isFree: true },

  // VIDEO AI (5 tools)
  { name: 'Sora', slug: 'sora', category: ToolCategory.VIDEO_AI, color: '#10A37F', description: 'OpenAI\'s groundbreaking text-to-video generation model' },
  { name: 'Pika', slug: 'pika', category: ToolCategory.VIDEO_AI, color: '#FF6B6B', description: 'Create and edit videos with AI using simple text prompts' },
  { name: 'Runway', slug: 'runway', category: ToolCategory.VIDEO_AI, color: '#00D1FF', description: 'Professional AI video generation and editing suite' },
  { name: 'Higgsfield', slug: 'higgsfield', category: ToolCategory.VIDEO_AI, color: '#8B5CF6', description: 'AI-powered video creation for social media and marketing' },
  { name: 'Krea', slug: 'krea', category: ToolCategory.VIDEO_AI, color: '#FF4D4D', description: 'Real-time AI image and video generation platform' },

  // AUTOMATION & AGENTS (6 tools)
  { name: 'n8n', slug: 'n8n', category: ToolCategory.PRODUCTIVITY, color: '#FF6D5A', description: 'Open-source workflow automation with AI integrations', isFree: true },
  { name: 'Make', slug: 'make', category: ToolCategory.PRODUCTIVITY, color: '#6B46C1', description: 'Visual automation platform connecting apps with AI workflows' },
  { name: 'Zapier AI', slug: 'zapier-ai', category: ToolCategory.PRODUCTIVITY, color: '#FF4A00', description: 'AI-enhanced automation connecting 5000+ apps' },
  { name: 'CrewAI', slug: 'crewai', category: ToolCategory.CODE_AI, color: '#2563EB', description: 'Framework for orchestrating AI agents to work together' },
  { name: 'AutoGPT', slug: 'autogpt', category: ToolCategory.CODE_AI, color: '#000000', description: 'Autonomous AI agent that breaks down and executes complex tasks' },
  { name: 'Devin', slug: 'devin', category: ToolCategory.CODE_AI, color: '#1E40AF', description: 'The first AI software engineer that can build entire projects' },

  // CODE AI / DEV TOOLS (5 tools)
  { name: 'Lovable', slug: 'lovable', category: ToolCategory.CODE_AI, color: '#F472B6', description: 'AI-powered app builder that creates full-stack applications' },
  { name: 'GitHub Copilot', slug: 'github-copilot', category: ToolCategory.CODE_AI, color: '#000000', description: 'AI pair programmer that suggests code in real-time' },
  { name: 'Cursor', slug: 'cursor', category: ToolCategory.CODE_AI, color: '#000000', description: 'AI-first code editor built for pair programming with AI' },
  { name: 'Windsurf', slug: 'windsurf', category: ToolCategory.CODE_AI, color: '#06B6D4', description: 'AI-powered IDE for seamless coding workflows' },
  { name: 'Dev-Agent Tools', slug: 'dev-agent-tools', category: ToolCategory.CODE_AI, color: '#10B981', description: 'Collection of AI development agents and coding assistants' },

  // AUDIO AI (4 tools)
  { name: 'Suno', slug: 'suno', category: ToolCategory.AUDIO_AI, color: '#FF4D4D', description: 'Create complete songs with AI - vocals, instruments, and lyrics' },
  { name: 'Udio', slug: 'udio', category: ToolCategory.AUDIO_AI, color: '#6366F1', description: 'Professional AI music generation platform' },
  { name: 'ElevenLabs', slug: 'elevenlabs', category: ToolCategory.AUDIO_AI, color: '#000000', description: 'Premier AI voice synthesis and cloning technology' },
  { name: 'Voicify', slug: 'voicify', category: ToolCategory.AUDIO_AI, color: '#8B5CF6', description: 'AI voice platform for music covers and voice conversion' },

  // NO-CODE AI PLATFORMS (2 tools)
  { name: 'Base44 / BaseAI', slug: 'base44', category: ToolCategory.PRODUCTIVITY, color: '#3B82F6', description: 'No-code AI application builder and hub platform' },
  { name: 'Chatbase', slug: 'chatbase', category: ToolCategory.PRODUCTIVITY, color: '#000000', description: 'Build custom AI chatbots trained on your data' },

  // BROWSER & SCRAPING AI (2 tools)
  { name: 'Bardeen', slug: 'bardeen', category: ToolCategory.PRODUCTIVITY, color: '#7C3AED', description: 'AI-powered browser automation and workflow tool' },
  { name: 'BrowseAI', slug: 'browseai', category: ToolCategory.PRODUCTIVITY, color: '#2563EB', description: 'Train AI robots to scrape and monitor websites' },

  // UNIQUE/OTHER (1 tool)
  { name: 'Nano Banana', slug: 'nano-banana', category: ToolCategory.OTHER, color: '#FBBF24', description: 'AI-powered creative tool for unique content generation' },

  // DESIGN & PRODUCTIVITY AI (3 tools)
  { name: 'Canva AI', slug: 'canva-ai', category: ToolCategory.IMAGE_AI, color: '#00C4CC', description: 'AI-powered design tools integrated into Canva\'s platform', isFree: true },
  { name: 'Notion AI', slug: 'notion-ai', category: ToolCategory.PRODUCTIVITY, color: '#000000', description: 'AI writing and productivity assistant within Notion workspace' },
  { name: 'Figma AI', slug: 'figma-ai', category: ToolCategory.PRODUCTIVITY, color: '#F24E1E', description: 'AI-powered design features for Figma workflows' },
];

// ============================================
// LESSON TEMPLATES BY LEVEL
// ============================================

const LESSON_TEMPLATES = {
  [LevelName.BEGINNER]: [
    { title: 'Introduction & Getting Started', description: 'Learn what {tool} is and how to create your account' },
    { title: 'Understanding the Interface', description: 'Navigate the {tool} dashboard and key features' },
    { title: 'Your First Project', description: 'Create your first output with {tool} step by step' },
    { title: 'Basic Prompting Techniques', description: 'Learn fundamental prompts that work every time' },
    { title: 'Common Use Cases', description: 'Discover the most popular ways people use {tool}' },
    { title: 'Saving and Organizing Work', description: 'Manage your projects and outputs efficiently' },
    { title: 'Troubleshooting Common Issues', description: 'Fix frequent problems beginners encounter' },
    { title: 'Best Practices for Beginners', description: 'Essential tips to accelerate your learning' },
  ],
  [LevelName.PRO]: [
    { title: 'Advanced Prompt Engineering', description: 'Master sophisticated prompting strategies' },
    { title: 'Workflow Optimization', description: 'Build efficient workflows for productivity' },
    { title: 'API Integration Basics', description: 'Connect {tool} with other applications' },
    { title: 'Customization & Settings', description: 'Tailor {tool} to your specific needs' },
    { title: 'Collaboration Features', description: 'Work with teams using {tool} effectively' },
    { title: 'Quality Control Techniques', description: 'Ensure consistent, high-quality outputs' },
    { title: 'Cost Optimization', description: 'Get maximum value from your subscription' },
    { title: 'Industry-Specific Applications', description: 'Apply {tool} to your professional domain' },
  ],
  [LevelName.MASTER]: [
    { title: 'Expert Prompt Architectures', description: 'Design complex multi-step prompt systems' },
    { title: 'Advanced API & Automation', description: 'Build sophisticated automated workflows' },
    { title: 'Custom Model Fine-tuning', description: 'Customize {tool} for specialized tasks' },
    { title: 'Enterprise Deployment', description: 'Scale {tool} across your organization' },
    { title: 'Security & Compliance', description: 'Implement safe AI practices at scale' },
    { title: 'Performance Optimization', description: 'Maximize speed and quality of outputs' },
    { title: 'Advanced Integrations', description: 'Build complex multi-tool workflows' },
    { title: 'Becoming a {tool} Expert', description: 'Final project and mastery assessment' },
  ],
};

// ============================================
// CONTENT GENERATORS (Professional Format)
// ============================================

function generateLessonContent(toolName: string, toolSlug: string, level: LevelName, lessonIndex: number): string {
  // Use professional content for ChatGPT Beginner
  if (toolSlug === 'chatgpt' && level === LevelName.BEGINNER && CHATGPT_BEGINNER_LESSONS[lessonIndex]) {
    return CHATGPT_BEGINNER_LESSONS[lessonIndex].content;
  }
  
  // Use professional content for ChatGPT Pro
  if (toolSlug === 'chatgpt' && level === LevelName.PRO && CHATGPT_PRO_LESSONS[lessonIndex]) {
    return CHATGPT_PRO_LESSONS[lessonIndex].content;
  }
  
  // Use professional content for ChatGPT Master
  if (toolSlug === 'chatgpt' && level === LevelName.MASTER && CHATGPT_MASTER_LESSONS[lessonIndex]) {
    return CHATGPT_MASTER_LESSONS[lessonIndex].content;
  }

  // Generate professional-style content for other tools
  const levelDescriptions = {
    [LevelName.BEGINNER]: { adj: 'fundamental', focus: 'building a strong foundation' },
    [LevelName.PRO]: { adj: 'intermediate', focus: 'optimizing workflows and techniques' },
    [LevelName.MASTER]: { adj: 'advanced', focus: 'achieving expert-level mastery' },
  };

  const lessonTemplate = LESSON_TEMPLATES[level][lessonIndex];
  const title = lessonTemplate.title.replace('{tool}', toolName);
  const levelInfo = levelDescriptions[level];

  return `# ${title}

## Learning Objectives

By the end of this lesson, you will be able to:
- Understand the core concepts of ${title.toLowerCase()}
- Apply practical ${toolName} techniques in real scenarios
- Build upon your existing knowledge with hands-on practice
- Create professional-quality outputs independently

## Overview

Welcome to this ${levelInfo.adj} lesson focused on ${levelInfo.focus} with ${toolName}. This comprehensive guide will take you step-by-step through everything you need to know.

**Why This Matters:**

${toolName} is transforming how professionals work. Understanding ${title.toLowerCase()} will give you a significant advantage in:
- Content creation and productivity
- Problem-solving and analysis
- Creative projects and ideation
- Workflow automation

## Core Concepts

### The Foundation

Before diving into techniques, let's establish the key principles:

1. **Clarity leads to quality** — The clearer your inputs, the better your outputs
2. **Iteration is essential** — First attempts are starting points, not endpoints
3. **Context matters** — Background information dramatically improves results
4. **Practice builds mastery** — Consistent application solidifies skills

### Practical Framework

Think of ${toolName} as a highly capable assistant. To get the best results:

- **Be specific** about what you want
- **Provide context** about your situation
- **Specify format** for how you want outputs
- **Iterate and refine** until it's perfect

## Step-by-Step Guide

### Step 1: Preparation

Before you begin:
- Ensure you have an active ${toolName} account
- Complete all previous lessons in this level
- Have your practice materials ready
- Set aside 20-30 minutes of focused time

### Step 2: Core Technique

The main technique covered in this lesson:

**The Process:**
1. Start with a clear objective
2. Structure your approach using best practices
3. Execute with attention to detail
4. Review and refine your results
5. Document what works for future reference

### Step 3: Hands-On Practice

Now it's your turn. Apply what you've learned:

**Exercise:** Create a real output using ${toolName} that you can use in your work or life.

**Tips for success:**
- Start simple, then add complexity
- Don't aim for perfection on the first try
- Experiment with different approaches
- Take notes on what works best

## Pro Tips from Experts

> 💡 **Tip 1:** Always iterate. The first output is your rough draft — not the final product.

> 💡 **Tip 2:** Save your successful approaches. Build a personal library of what works.

> 💡 **Tip 3:** Learn from the community. Join forums and groups to discover new techniques.

> 💡 **Tip 4:** Apply immediately. Use what you learn today in a real task within 24 hours.

## Common Mistakes to Avoid

❌ **Rushing through basics** — Fundamentals matter at every level

❌ **Not experimenting** — Try variations to find what works best for you

❌ **Ignoring documentation** — Official resources contain valuable insights

❌ **One-and-done mindset** — Great results come from iteration

❌ **Working in isolation** — Community knowledge accelerates learning

## Practice Exercise

**Your Assignment:**

1. Apply the main technique from this lesson to a real task
2. Iterate at least 3 times to improve your result
3. Document what worked and what didn't
4. Share your experience (optional but recommended)

**Reflection Questions:**
- What was the most valuable insight from this lesson?
- How will you apply this in your daily work?
- What would you like to explore further?

## Summary

In this lesson, you've learned:
- The core principles of ${title.toLowerCase()}
- A practical step-by-step framework
- Pro tips for getting better results
- Common mistakes to avoid

## Next Steps

Continue to the next lesson to build upon these foundations. Remember: mastery comes from consistent practice and real-world application.

---

*Estimated completion time: 20-30 minutes*
*XP Reward: 25 points*
`;
}

function generateQuizData(toolName: string, toolSlug: string, level: LevelName, lessonIndex: number): object {
  // Use professional content for ChatGPT Beginner
  if (toolSlug === 'chatgpt' && level === LevelName.BEGINNER && CHATGPT_BEGINNER_LESSONS[lessonIndex]) {
    return CHATGPT_BEGINNER_LESSONS[lessonIndex].quizData;
  }
  
  // Use professional content for ChatGPT Pro
  if (toolSlug === 'chatgpt' && level === LevelName.PRO && CHATGPT_PRO_LESSONS[lessonIndex]) {
    return CHATGPT_PRO_LESSONS[lessonIndex].quizData;
  }
  
  // Use professional content for ChatGPT Master
  if (toolSlug === 'chatgpt' && level === LevelName.MASTER && CHATGPT_MASTER_LESSONS[lessonIndex]) {
    return CHATGPT_MASTER_LESSONS[lessonIndex].quizData;
  }

  return {
    questions: [
      {
        id: 1,
        question: `What is the primary purpose of ${toolName}?`,
        options: [
          'General-purpose computing',
          `AI-powered ${toolName.includes('Image') ? 'image generation' : toolName.includes('Video') ? 'video creation' : 'content creation'}`,
          'Traditional software development',
          'Hardware management',
        ],
        correctAnswer: 1,
        explanation: `${toolName} is specifically designed for AI-powered tasks and workflows.`,
      },
      {
        id: 2,
        question: 'Which of the following is a best practice covered in this lesson?',
        options: [
          'Skip the documentation',
          'Never iterate on results',
          'Save successful configurations for future use',
          'Avoid experimenting',
        ],
        correctAnswer: 2,
        explanation: 'Saving successful prompts and configurations helps build an efficient workflow.',
      },
      {
        id: 3,
        question: 'What should you do before starting the practical exercises?',
        options: [
          'Skip previous lessons',
          'Complete all previous lessons in this level',
          'Ignore the setup requirements',
          'Start with the most advanced techniques',
        ],
        correctAnswer: 1,
        explanation: 'Building a solid foundation by completing previous lessons ensures better understanding.',
      },
    ],
  };
}

function generateResources(toolName: string, toolSlug: string, level: LevelName, lessonIndex: number): object {
  // Use professional content for ChatGPT Beginner
  if (toolSlug === 'chatgpt' && level === LevelName.BEGINNER && CHATGPT_BEGINNER_LESSONS[lessonIndex]) {
    return CHATGPT_BEGINNER_LESSONS[lessonIndex].resources;
  }
  
  // Use professional content for ChatGPT Pro
  if (toolSlug === 'chatgpt' && level === LevelName.PRO && CHATGPT_PRO_LESSONS[lessonIndex]) {
    return CHATGPT_PRO_LESSONS[lessonIndex].resources;
  }
  
  // Use professional content for ChatGPT Master
  if (toolSlug === 'chatgpt' && level === LevelName.MASTER && CHATGPT_MASTER_LESSONS[lessonIndex]) {
    return CHATGPT_MASTER_LESSONS[lessonIndex].resources;
  }

  return [
    {
      title: `Official ${toolName} Documentation`,
      url: '#',
      type: 'documentation',
    },
    {
      title: `${toolName} Community Forum`,
      url: '#',
      type: 'community',
    },
    {
      title: 'Downloadable Cheat Sheet',
      url: '#',
      type: 'download',
    },
    {
      title: 'Practice Files',
      url: '#',
      type: 'resource',
    },
  ];
}

function getLessonTitle(toolName: string, toolSlug: string, level: LevelName, lessonIndex: number): string {
  if (toolSlug === 'chatgpt' && level === LevelName.BEGINNER && CHATGPT_BEGINNER_LESSONS[lessonIndex]) {
    return CHATGPT_BEGINNER_LESSONS[lessonIndex].title;
  }
  if (toolSlug === 'chatgpt' && level === LevelName.PRO && CHATGPT_PRO_LESSONS[lessonIndex]) {
    return CHATGPT_PRO_LESSONS[lessonIndex].title;
  }
  if (toolSlug === 'chatgpt' && level === LevelName.MASTER && CHATGPT_MASTER_LESSONS[lessonIndex]) {
    return CHATGPT_MASTER_LESSONS[lessonIndex].title;
  }
  return LESSON_TEMPLATES[level][lessonIndex].title.replace('{tool}', toolName);
}

function getLessonDescription(toolName: string, toolSlug: string, level: LevelName, lessonIndex: number): string {
  if (toolSlug === 'chatgpt' && level === LevelName.BEGINNER && CHATGPT_BEGINNER_LESSONS[lessonIndex]) {
    return CHATGPT_BEGINNER_LESSONS[lessonIndex].description;
  }
  if (toolSlug === 'chatgpt' && level === LevelName.PRO && CHATGPT_PRO_LESSONS[lessonIndex]) {
    return CHATGPT_PRO_LESSONS[lessonIndex].description;
  }
  if (toolSlug === 'chatgpt' && level === LevelName.MASTER && CHATGPT_MASTER_LESSONS[lessonIndex]) {
    return CHATGPT_MASTER_LESSONS[lessonIndex].description;
  }
  return LESSON_TEMPLATES[level][lessonIndex].description.replace('{tool}', toolName);
}

// ============================================
// MEDALS DATA
// ============================================

const MEDALS_DATA = [
  {
    name: 'Bronze Apprentice',
    description: 'Complete any Beginner level',
    type: MedalType.BRONZE,
    xpBonus: 50,
  },
  {
    name: 'Silver Expert',
    description: 'Complete any Pro level',
    type: MedalType.SILVER,
    xpBonus: 100,
  },
  {
    name: 'Gold Master',
    description: 'Complete any Master level',
    type: MedalType.GOLD,
    xpBonus: 200,
  },
  {
    name: 'Tool Virtuoso',
    description: 'Complete all levels of any tool',
    type: MedalType.TOOL_MASTER,
    xpBonus: 500,
  },
  {
    name: 'Maintor Grandmaster',
    description: 'Complete all 40 tools at Master level',
    type: MedalType.GRANDMASTER,
    xpBonus: 5000,
  },
];

// ============================================
// LEVEL THRESHOLDS
// ============================================

const LEVEL_THRESHOLDS = [
  { level: 1, xpRequired: 0, title: 'Novice' },
  { level: 2, xpRequired: 500, title: 'Apprentice' },
  { level: 3, xpRequired: 1200, title: 'Practitioner' },
  { level: 4, xpRequired: 2500, title: 'Specialist' },
  { level: 5, xpRequired: 5000, title: 'Expert' },
  { level: 6, xpRequired: 8000, title: 'Master' },
  { level: 7, xpRequired: 12000, title: 'Virtuoso' },
  { level: 8, xpRequired: 18000, title: 'Sage' },
  { level: 9, xpRequired: 25000, title: 'Legend' },
  { level: 10, xpRequired: 35000, title: 'Grandmaster' },
];

// ============================================
// ACHIEVEMENTS DATA
// ============================================

const ACHIEVEMENTS_DATA = [
  {
    name: 'First Steps',
    description: 'Complete your first lesson',
    xpReward: 50,
    criteria: { type: 'lessons_completed', count: 1 },
  },
  {
    name: 'Quick Learner',
    description: 'Complete 10 lessons',
    xpReward: 100,
    criteria: { type: 'lessons_completed', count: 10 },
  },
  {
    name: 'Dedicated Student',
    description: 'Complete 50 lessons',
    xpReward: 250,
    criteria: { type: 'lessons_completed', count: 50 },
  },
  {
    name: 'Knowledge Seeker',
    description: 'Complete 100 lessons',
    xpReward: 500,
    criteria: { type: 'lessons_completed', count: 100 },
  },
  {
    name: 'AI Pioneer',
    description: 'Complete all lessons across all tools',
    xpReward: 2000,
    criteria: { type: 'lessons_completed', count: 960 },
  },
  {
    name: 'Tool Explorer',
    description: 'Start learning 5 different tools',
    xpReward: 100,
    criteria: { type: 'tools_started', count: 5 },
  },
  {
    name: 'Versatile Learner',
    description: 'Complete at least one level in 10 different tools',
    xpReward: 300,
    criteria: { type: 'levels_completed_unique_tools', count: 10 },
  },
  {
    name: 'Perfect Score',
    description: 'Get 100% on any quiz',
    xpReward: 75,
    criteria: { type: 'perfect_quiz', count: 1 },
  },
  {
    name: 'Quiz Master',
    description: 'Get 100% on 10 quizzes',
    xpReward: 200,
    criteria: { type: 'perfect_quiz', count: 10 },
  },
  {
    name: 'Week Warrior',
    description: 'Complete lessons for 7 consecutive days',
    xpReward: 150,
    criteria: { type: 'streak_days', count: 7 },
  },
  {
    name: 'Month Master',
    description: 'Complete lessons for 30 consecutive days',
    xpReward: 500,
    criteria: { type: 'streak_days', count: 30 },
  },
];

// ============================================
// FAQ DATA FOR CHATBOT
// ============================================

const FAQ_DATA = [
  {
    question: 'How do I reset my password?',
    answer: 'To reset your password, click on "Forgot Password" on the login page, enter your email address, and follow the instructions sent to your inbox.',
    category: 'Account',
  },
  {
    question: 'What subscription plans are available?',
    answer: 'We offer two main plans: Free (access to selected tools) and Pro ($29/month for full access to all 40 AI tools and premium features).',
    category: 'Billing',
  },
  {
    question: 'How do I cancel my subscription?',
    answer: 'You can cancel your subscription anytime from Settings > Billing > Cancel Subscription. Your access will continue until the end of your billing period.',
    category: 'Billing',
  },
  {
    question: 'Can I download the lesson videos?',
    answer: 'Lesson videos are available for streaming only to protect our content. However, Pro subscribers can access lessons offline through our mobile app.',
    category: 'Content',
  },
  {
    question: 'How does the XP system work?',
    answer: 'You earn XP by completing lessons (25 XP each), finishing levels (200 XP), and mastering entire tools (1000 XP). XP determines your overall level and unlocks achievements.',
    category: 'Gamification',
  },
  {
    question: 'What are medals and how do I earn them?',
    answer: 'Medals are awarded for completing skill levels: Bronze for Beginner, Silver for Pro, and Gold for Master. Complete all levels of a tool to earn the Tool Mastery medal.',
    category: 'Gamification',
  },
  {
    question: 'How do I track my progress?',
    answer: 'Your dashboard shows your current XP, level, completed lessons, earned medals, and progress across all tools. You can also see your learning streak and recommended next lessons.',
    category: 'Features',
  },
  {
    question: 'Is there a mobile app?',
    answer: 'Yes! Maintor is available on iOS and Android. Download from the App Store or Google Play to learn on the go.',
    category: 'Platform',
  },
  {
    question: 'How often is new content added?',
    answer: 'We add new lessons and tools monthly. Follow our changelog and newsletter to stay updated on new content releases.',
    category: 'Content',
  },
  {
    question: 'Can I suggest new AI tools to add?',
    answer: 'Absolutely! Use the feedback form in Settings or email us at suggestions@maintor.ai. We prioritize tools based on user demand.',
    category: 'Features',
  },
];

// ============================================
// MAIN SEED FUNCTION
// ============================================

async function main() {
  console.log('🌱 Starting MAINTOR database seed...\n');

  // Clear existing data
  console.log('🗑️  Clearing existing data...');
  await prisma.xPHistory.deleteMany();
  await prisma.lessonProgress.deleteMany();
  await prisma.userAchievement.deleteMany();
  await prisma.userMedal.deleteMany();
  await prisma.userXP.deleteMany();
  await prisma.fileUpload.deleteMany();
  await prisma.lesson.deleteMany();
  await prisma.level.deleteMany();
  await prisma.tool.deleteMany();
  await prisma.medal.deleteMany();
  await prisma.achievement.deleteMany();
  await prisma.levelThreshold.deleteMany();
  await prisma.fAQEmbedding.deleteMany();
  await prisma.fAQEntry.deleteMany();
  await prisma.supportRequest.deleteMany();

  // Seed Level Thresholds
  console.log('📊 Seeding level thresholds...');
  await prisma.levelThreshold.createMany({
    data: LEVEL_THRESHOLDS,
  });

  // Seed Medals
  console.log('🏅 Seeding medals...');
  await prisma.medal.createMany({
    data: MEDALS_DATA,
  });

  // Seed Achievements
  console.log('🏆 Seeding achievements...');
  await prisma.achievement.createMany({
    data: ACHIEVEMENTS_DATA,
  });

  // Seed FAQ Entries
  console.log('❓ Seeding FAQ entries...');
  await prisma.fAQEntry.createMany({
    data: FAQ_DATA,
  });

  // Seed Tools, Levels, and Lessons
  console.log('🔧 Seeding tools, levels, and lessons...');
  
  let totalLessons = 0;
  
  for (let toolIndex = 0; toolIndex < TOOLS_DATA.length; toolIndex++) {
    const toolData = TOOLS_DATA[toolIndex];
    
    console.log(`  📦 Creating tool ${toolIndex + 1}/${TOOLS_DATA.length}: ${toolData.name}`);
    
    const tool = await prisma.tool.create({
      data: {
        name: toolData.name,
        slug: toolData.slug,
        category: toolData.category,
        color: toolData.color,
        description: toolData.description,
        longDescription: `${toolData.description}. Master this powerful AI tool through our comprehensive curriculum spanning beginner to expert levels. Each level contains 8 carefully crafted lessons with video tutorials, practice exercises, and quizzes to reinforce your learning.`,
        isFree: toolData.isFree || false,
        isPublished: true,
        sortOrder: toolIndex,
      },
    });

    // Create 3 levels for each tool
    const levels = [LevelName.BEGINNER, LevelName.PRO, LevelName.MASTER];
    
    for (let levelIndex = 0; levelIndex < levels.length; levelIndex++) {
      const levelName = levels[levelIndex];
      const xpBonus = levelName === LevelName.BEGINNER ? 200 : levelName === LevelName.PRO ? 300 : 500;
      
      const level = await prisma.level.create({
        data: {
          toolId: tool.id,
          name: levelName,
          description: `${levelName.charAt(0) + levelName.slice(1).toLowerCase()} level curriculum for ${tool.name}`,
          sortOrder: levelIndex,
          xpBonus,
        },
      });

      // Create 8 lessons for each level
      const lessonTemplates = LESSON_TEMPLATES[levelName];
      
      for (let lessonIndex = 0; lessonIndex < lessonTemplates.length; lessonIndex++) {
        const lessonTitle = getLessonTitle(tool.name, tool.slug, levelName, lessonIndex);
        const lessonDescription = getLessonDescription(tool.name, tool.slug, levelName, lessonIndex);
        
        await prisma.lesson.create({
          data: {
            levelId: level.id,
            title: lessonTitle,
            slug: lessonTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            description: lessonDescription,
            content: generateLessonContent(tool.name, tool.slug, levelName, lessonIndex),
            videoUrl: `https://videos.maintor.ai/${tool.slug}/${levelName.toLowerCase()}/lesson-${lessonIndex + 1}.mp4`,
            videoDuration: 600 + Math.floor(Math.random() * 900), // 10-25 minutes
            resources: generateResources(tool.name, tool.slug, levelName, lessonIndex),
            quizData: generateQuizData(tool.name, tool.slug, levelName, lessonIndex),
            xpReward: 25,
            sortOrder: lessonIndex,
            isPublished: true,
          },
        });
        
        totalLessons++;
      }
    }
  }

  console.log(`\n✅ Seed completed successfully!`);
  console.log(`   📦 ${TOOLS_DATA.length} tools created`);
  console.log(`   📚 ${TOOLS_DATA.length * 3} levels created`);
  console.log(`   📝 ${totalLessons} lessons created`);
  console.log(`   🏅 ${MEDALS_DATA.length} medals created`);
  console.log(`   🏆 ${ACHIEVEMENTS_DATA.length} achievements created`);
  console.log(`   📊 ${LEVEL_THRESHOLDS.length} level thresholds created`);
  console.log(`   ❓ ${FAQ_DATA.length} FAQ entries created`);
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
