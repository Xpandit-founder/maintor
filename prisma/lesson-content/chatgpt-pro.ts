// prisma/lesson-content/chatgpt-pro.ts
// ChatGPT Pro Level - Professional Course Content
// Advanced prompting structures, systems, and workflows

export const CHATGPT_PRO_LESSONS = [
  {
    title: 'Prompt Frameworks: How to Build Advanced Prompts',
    description: 'Master the 5 professional prompting frameworks used by experts',
    content: `# Prompt Frameworks: How to Build Advanced Prompts

## Learning Objectives

By the end of this lesson, you will:
- Master 5 professional prompting frameworks
- Structure complex prompts with precision
- Get consistent, high-quality outputs every time
- Adapt frameworks for business, content, and personal use

## Why Professionals Use Frameworks

Beginners write prompts randomly. **Professionals build systems.**

Frameworks give you:
- Predictability
- Repeatability  
- Structure
- Control
- Depth
- Precision
- Clarity
- High-quality outputs in ANY situation

A framework transforms:
- ❌ "Write me something good."
- ✅ "Here is the structure. Here are the rules. Follow them perfectly."

---

## Framework #1: The ACE Framework

**ACE = Action → Context → Expectation**

This is the universal professional prompt.

### A — ACTION (What to do)
The exact task you want completed.

### C — CONTEXT (What info to use)
All background details, audience, purpose.

### E — EXPECTATION (The output format & quality)
Tone, style, structure, length, examples.

### Example:
\`\`\`
ACTION:
Write a 3-paragraph product description.

CONTEXT:
The product is a fitness app for beginners who struggle with consistency.

EXPECTATION:
Tone: friendly, motivational.
Include 3 benefits in bullet points.
End with a strong CTA.
\`\`\`

This creates a PERFECT output every time.

---

## Framework #2: The S.P.E.C. Framework

**SPEC = Structure → Purpose → Examples → Constraints**

Used for analytical or detailed tasks.

### S — STRUCTURE
How the output should be organized.

### P — PURPOSE
Why you're generating the output.

### E — EXAMPLES
Give 1–2 examples for reference.

### C — CONSTRAINTS
Rules: length, tone, format, exclusions.

### Example:
\`\`\`
STRUCTURE: 3 sections: Insight → Reason → Recommendation
PURPOSE: Analyze why users stop using the app after 7 days
EXAMPLES: Use reasoning similar to the example below...
CONSTRAINTS: Keep it under 300 words.
\`\`\`

This produces extremely focused analysis.

---

## Framework #3: The R.A.T.E. Framework

**RATE = Rewrite → Adjust → Transform → Enhance**

Used for rewriting & improving content.

### R — REWRITE
Rewrite using a different tone or style.

### A — ADJUST
Adjust clarity, length, or structure.

### T — TRANSFORM
Transform the goal of the content (e.g., from email → post).

### E — ENHANCE
Add polish, examples, emotion, or details.

### Example:
\`\`\`
Rewrite this paragraph in a friendly tone.
Adjust to be more concise.
Transform it into a bullet-point list.
Enhance with one motivational sentence at the end.
\`\`\`

This framework is used by pro copywriters.

---

## Framework #4: The S.T.A.R. Framework

**STAR = Situation → Tension → Action → Resolution**

Used for storytelling, case studies, and speeches.

### S — SITUATION
Where the story begins.

### T — TENSION
The challenge or conflict.

### A — ACTION
What steps were taken.

### R — RESOLUTION
The outcome; lessons learned.

### Example:
\`\`\`
Write a motivational story using the STAR framework about someone
who overcame self-doubt to build a successful fitness habit.
\`\`\`

---

## Framework #5: The D.E.E.P. Framework

**DEEP = Define → Examine → Explore → Propose**

Used for deep thinking or strategic planning.

### D — DEFINE
Clearly define the problem.

### E — EXAMINE
Analyze causes, data, reasoning.

### E — EXPLORE
Generate possibilities and solutions.

### P — PROPOSE
Present the best solution with justification.

This is PERFECT for:
- Business strategy
- Decision-making
- Analysis
- Planning
- Consulting

### Example:
\`\`\`
Use the DEEP Framework to analyze why users stop using the app 
after day 7 and propose a retention strategy.
\`\`\`

---

## Practice Tasks

### Task 1
Use ACE to write a marketing email.

### Task 2
Use SPEC to analyze a business problem.

### Task 3
Use RATE to improve a paragraph.

### Task 4
Use STAR to write a short story.

### Task 5
Use DEEP to analyze a real problem in your life.

## Reflection Questions

1. Which framework felt most natural to you?
2. Which framework solved the biggest problem for you?
3. How will you use these frameworks in your work or daily life?

## Homework

Create 5 AI prompts using 5 different frameworks. Run each prompt in ChatGPT and compare the results.

## Key Takeaways

- ACE: Universal professional prompt structure
- SPEC: Analytical and detailed tasks
- RATE: Rewriting and improving content
- STAR: Storytelling and case studies
- DEEP: Strategic thinking and planning`,
    quizData: {
      questions: [
        {
          id: 1,
          question: 'What does ACE stand for in the ACE Framework?',
          options: [
            'Analyze, Create, Execute',
            'Action, Context, Expectation',
            'Audience, Content, Effect',
            'Approach, Clarify, Expand'
          ],
          correctAnswer: 1,
          explanation: 'ACE stands for Action (what to do), Context (background info), and Expectation (output format and quality). This is the universal professional prompt framework.'
        },
        {
          id: 2,
          question: 'Which framework is best for storytelling and case studies?',
          options: [
            'ACE Framework',
            'SPEC Framework',
            'STAR Framework',
            'DEEP Framework'
          ],
          correctAnswer: 2,
          explanation: 'The STAR Framework (Situation, Tension, Action, Resolution) is specifically designed for storytelling, case studies, and speeches.'
        },
        {
          id: 3,
          question: 'What is the main purpose of using prompt frameworks?',
          options: [
            'To make prompts longer',
            'To get predictable, consistent, high-quality outputs every time',
            'To confuse ChatGPT',
            'To save money on API calls'
          ],
          correctAnswer: 1,
          explanation: 'Frameworks provide predictability, repeatability, structure, and control, ensuring high-quality outputs regardless of task complexity.'
        }
      ]
    },
    resources: [
      { title: '5 Frameworks Cheat Sheet', url: '#', type: 'download' },
      { title: 'Framework Examples Library', url: '#', type: 'pdf' },
      { title: 'Framework Selection Guide', url: '#', type: 'resource' }
    ]
  },
  {
    title: 'Prompt Chains & Multi-Step AI Workflows',
    description: 'Build powerful multi-step processes where each output feeds the next',
    content: `# Prompt Chains & Multi-Step AI Workflows

## Learning Objectives

By the end of this lesson, you will:
- Understand what prompt chains are
- Break large tasks into logical steps
- Build professional multi-step workflows
- Create consistent, predictable outputs
- Think in systems, not just prompts

## What Are Prompt Chains?

Prompt chains are **sequences of prompts** where:
> Each output becomes the input for the next step.

Instead of one giant prompt (which produces messy results), you create clean, intentional steps.

This allows you to:
- Go deeper
- Build complexity
- Improve quality
- Maintain structure
- Separate thinking stages
- Get "expert-level" results

**Prompt chains mimic how YOU would solve a problem in real life:**
1. First analyze the problem
2. Then brainstorm ideas
3. Then refine the ideas
4. Then turn them into a plan
5. Then create content from that plan
6. Then format it

AI works best when you break tasks into steps.

---

## The 5-Step Workflow Model

Every effective prompt chain follows this structure:

### Step 1: Define the Goal
What are we trying to accomplish?

### Step 2: Collect Information
Gather context or ask follow-up questions.

### Step 3: Generate Raw Ideas
Messy, creative, unfiltered.

### Step 4: Refine & Improve
Use iteration and frameworks.

### Step 5: Finalize & Format
Turn the refined output into a finished product.

This 5-step structure works for ANY task.

---

## Example: Marketing Strategy Chain

### STEP 1 — Define the Goal
\`\`\`
Your role is a senior marketing strategist.
Define the goal of a marketing strategy for a fitness app targeting beginners.
\`\`\`

### STEP 2 — Collect Information
\`\`\`
Before creating a strategy, ask me 7 questions you need answered.
\`\`\`
*Answer the questions.*

### STEP 3 — Generate Raw Ideas
\`\`\`
Based on my answers, give me 10 raw marketing ideas.
Do NOT refine them yet.
Be creative and unfiltered.
\`\`\`

### STEP 4 — Refine
\`\`\`
Now refine these into 5 strategic directions using the ACE Framework.
Each direction should include:
- Audience
- Message
- Channel
- Action steps
- Expected outcome
\`\`\`

### STEP 5 — Finalize
\`\`\`
Now turn this into a 30-day marketing plan.
Format: timeline + weekly goals + action steps.
\`\`\`

**This is how you get agency-level results.**

---

## Example: Research & Analysis Chain

### Step 1 — Define
"Define the research question."

### Step 2 — Ask Questions
"What information do you need from me to conduct the research?"

### Step 3 — Explore
"List 10 possible explanations or causes."

### Step 4 — Analyze
"Use the DEEP Framework to analyze the top 3 explanations."

### Step 5 — Propose
"Present a recommendation with justification."

This creates a consultant-level research report.

---

## Universal Prompt Chain Template

\`\`\`
Step 1 — Define
'Help me clarify the goal of [task].'

Step 2 — Ask
'Ask me the top 5 questions you need before continuing.'

Step 3 — Create
'Generate raw ideas.'

Step 4 — Improve
'Refine using [framework].'

Step 5 — Deliver
'Format into [final output].'
\`\`\`

This is THE blueprint for any multi-step workflow.

---

## Practice Tasks

### Task 1
Build a prompt chain for writing a research summary using:
Define → Ask → Explore → Refine → Finalize

### Task 2
Build a content creation workflow for TikTok videos using:
Define → Gather → Create → Refine → Format

### Task 3
Build a planning workflow for organizing a personal project.

## Reflection Questions

1. Which part of the chain was easiest?
2. Which part was hardest?
3. How could prompt chains help in your work or business?
4. What chain do you want to automate later with tools like Zapier/Make?

## Homework

Design a full 5-step workflow for ANY task in your real life or job:
- Writing a business plan
- Planning a trip
- Studying a subject
- Building a fitness routine
- Creating a brand strategy

## Key Takeaways

- Prompt chains = sequences where each output feeds the next
- Multi-step workflows create better results than single prompts
- The 5-step model: Define → Collect → Generate → Refine → Finalize
- Think in systems, not just individual prompts`,
    quizData: {
      questions: [
        {
          id: 1,
          question: 'What is a prompt chain?',
          options: [
            'A very long single prompt',
            'A sequence of prompts where each output becomes input for the next step',
            'A chain of different AI models',
            'A way to bypass AI limitations'
          ],
          correctAnswer: 1,
          explanation: 'Prompt chains are sequences of prompts where each output becomes the input for the next step, allowing you to build complexity and maintain quality through structured steps.'
        },
        {
          id: 2,
          question: 'What are the 5 steps in the workflow model?',
          options: [
            'Plan, Execute, Review, Submit, Done',
            'Define, Collect, Generate, Refine, Finalize',
            'Start, Middle, End, Review, Publish',
            'Input, Process, Output, Save, Share'
          ],
          correctAnswer: 1,
          explanation: 'The 5-step workflow model is: Define the goal, Collect information, Generate raw ideas, Refine & improve, and Finalize & format.'
        },
        {
          id: 3,
          question: 'Why is asking ChatGPT to "ask you questions" a powerful technique?',
          options: [
            'It wastes time',
            'It helps ChatGPT identify gaps and collect missing info for better results',
            'It confuses the AI',
            'It is not recommended'
          ],
          correctAnswer: 1,
          explanation: 'Having ChatGPT ask questions helps it identify gaps, clarify purpose, collect missing information, avoid assumptions, and tailor results perfectly to your needs.'
        }
      ]
    },
    resources: [
      { title: 'Prompt Chain Templates', url: '#', type: 'download' },
      { title: 'Workflow Examples Library', url: '#', type: 'pdf' },
      { title: 'Multi-Step Workflow Guide', url: '#', type: 'resource' }
    ]
  },
  {
    title: 'The Prompt Operating System (Prompt OS)',
    description: 'A complete, reusable system for handling ANY task with AI',
    content: `# The Prompt Operating System (Prompt OS)

## Learning Objectives

By the end of this lesson, you will:
- Understand a full operating system for prompting
- Run any task through a structured process
- Break tasks into logical modules
- Combine strategies, iteration, and formatting
- Produce professional outputs consistently

## What Is Prompt OS?

Prompt OS is a **modular system** consisting of:
1. A starting protocol
2. A questioning engine
3. A creation engine
4. A refinement engine
5. A formatting engine

Together, these form a complete workflow for ANY task — from planning a vacation to building a full business strategy.

> Prompt OS is NOT a single prompt. It is a **thinking system**.

**Flow:** Start → Ask → Create → Refine → Format → Finalize

---

## The 5 Modules of Prompt OS

### 1. START Module
Initiates the task with clarity.

### 2. ASK Module
Prompts ChatGPT to gather missing information.

### 3. CREATE Module
Generates raw ideas or first drafts.

### 4. REFINE Module
Improves and elevates the ideas.

### 5. FORMAT Module
Presents final polished output.

---

## Module 1: START

The Start Module clarifies:
- Role
- Goal
- Constraints
- Audience
- Expected outputs
- Project scope

### Example START Prompt:
\`\`\`
You are a senior strategist.
We are beginning a new project: [describe project].
Your goal is to help me create the best possible outcome.
Before we begin, summarize the project in your own words.
\`\`\`

This ensures ChatGPT is aligned before doing ANY work.

---

## Module 2: ASK

Before generating ANY output, ask ChatGPT to ask YOU questions.

**Why?** Because ChatGPT:
- Identifies gaps
- Clarifies purpose
- Collects missing info
- Avoids incorrect assumptions
- Tailors results perfectly

### ASK Prompt:
\`\`\`
Before creating anything,
ask me the top 7 questions you need to produce the best result.
\`\`\`

> This one module alone increases quality by 5–10×.

---

## Module 3: CREATE

After answering questions, ChatGPT generates the first draft.

CREATE might mean:
- Ideas
- Analysis
- Strategy
- Outline
- First draft
- List
- Plan

### CREATE Prompt:
\`\`\`
Based on all the information we discussed,
generate a first draft.
Keep it raw, unfiltered, and creative.
We will refine it afterward.
\`\`\`

---

## Module 4: REFINE

Now we upgrade the raw draft using:
- Tone control
- Style adjustments
- Structure changes
- Variation generation
- Frameworks (RATE, DEEP, STAR, ACE)
- Iteration commands

### REFINE Prompt:
\`\`\`
Now refine this using professional standards.
Improve clarity, structure, and tone.
Add missing details.
Give me 3 improved variations.
\`\`\`

---

## Module 5: FORMAT

Perfect the final output using:
- Formatting
- Layout
- Bullet points
- Tables
- Email/social media structure
- Step-by-step systems

### FORMAT Prompt:
\`\`\`
Format the final version into: [desired format].
Include headings, bullets, and clean structure.
\`\`\`

Then: "Provide the FINAL polished version."

---

## Full Example: 30-Day Fitness Plan

### Step 1 — START
\`\`\`
You are a certified fitness coach.
We are building a 30-day plan for beginners.
Summarize the goal of this project.
\`\`\`

### Step 2 — ASK
\`\`\`
Ask me 7 questions you need before writing the plan.
\`\`\`
*Answer the questions.*

### Step 3 — CREATE
\`\`\`
Generate the raw first draft of the 30-day plan.
\`\`\`

### Step 4 — REFINE
\`\`\`
Improve clarity. Add progression.
Rewrite with a motivational tone.
Give me 2 variations.
\`\`\`

### Step 5 — FORMAT
\`\`\`
Format the final plan as:
- Weekly schedule
- Bullet points
- Workout descriptions
- Tips
- Motivational quotes
\`\`\`

**Result = professional-quality plan.**

---

## Practice Tasks

### Task 1
Use Prompt OS to build a 30-day habit plan.

### Task 2
Use Prompt OS to create a 2-week content strategy.

### Task 3
Use Prompt OS to analyze a real problem in your life.

## Homework

Use Prompt OS to complete a real task:
- Planning a trip
- Building a workout plan
- Writing a long message
- Organizing finances
- Creating a study plan

Submit all 5 module outputs.

## Key Takeaways

- Prompt OS = 5 modules working together
- START → ASK → CREATE → REFINE → FORMAT
- Works for ANY complex task
- Produces polished, ready-to-use results
- The backbone of advanced prompting`,
    quizData: {
      questions: [
        {
          id: 1,
          question: 'What are the 5 modules of Prompt OS?',
          options: [
            'Plan, Build, Test, Deploy, Monitor',
            'Start, Ask, Create, Refine, Format',
            'Input, Process, Output, Review, Deliver',
            'Define, Design, Develop, Debug, Done'
          ],
          correctAnswer: 1,
          explanation: 'The 5 modules of Prompt OS are: START (clarify the task), ASK (gather information), CREATE (generate first draft), REFINE (improve quality), and FORMAT (polish presentation).'
        },
        {
          id: 2,
          question: 'Why is the ASK module so powerful?',
          options: [
            'It saves time by skipping steps',
            'It makes ChatGPT ask YOU questions to identify gaps and improve accuracy',
            'It generates more content',
            'It is optional and rarely used'
          ],
          correctAnswer: 1,
          explanation: 'The ASK module has ChatGPT ask you clarifying questions before creating anything. This prevents misunderstandings, identifies gaps, and can increase output quality by 5-10×.'
        },
        {
          id: 3,
          question: 'What makes Prompt OS different from a single prompt?',
          options: [
            'It uses more words',
            'It is a complete thinking SYSTEM with modular components for any task',
            'It only works for business tasks',
            'It requires special software'
          ],
          correctAnswer: 1,
          explanation: 'Prompt OS is not a single prompt — it is a complete thinking system with 5 modular components that can be applied to any task, producing consistent professional results.'
        }
      ]
    },
    resources: [
      { title: 'Prompt OS Template', url: '#', type: 'download' },
      { title: 'Module-by-Module Guide', url: '#', type: 'pdf' },
      { title: 'Prompt OS Examples', url: '#', type: 'resource' }
    ]
  },
  {
    title: 'Building Expert Personas (Custom AI Personalities)',
    description: 'Create AI experts that think and respond exactly how you need',
    content: `# Building Expert Personas (Custom AI Personalities)

## Learning Objectives

By the end of this lesson, you will:
- Build expert-level AI personas
- Control identity, tone, and knowledge base
- Create custom assistants for business, learning, or creativity
- Stack personas for multi-perspective insights
- Integrate personas into workflows

## Why Personas Matter

Personas make ChatGPT:
- More consistent
- More accurate
- More specialized
- More aligned with the task
- More contextual
- More trustworthy

**Without persona:**
"Explain how to improve my website."

**With persona:**
"You are a senior UX designer with 15 years of experience. Audit my website and give me 10 improvements based on best industry practices."

The difference is HUGE.

---

## The 5 Elements of a Great Persona

### 1. Identity
Who the AI is (profession, experience, specialty).

### 2. Knowledge Base
What level of expertise they operate at.

### 3. Communication Style
Tone, vocabulary, personality.

### 4. Goals
What the AI is trying to achieve.

### 5. Boundaries
What the AI should NOT do.

---

## The Persona Template

\`\`\`
Name: [Give the persona a name]
Identity: You are a [profession] with [X] years of experience.
Expertise: Your specialties include [skills].
Communication Style: You speak in a [tone: friendly / formal / concise / simple].
Goals: Your goal is to [desired outcome].
Rules & Boundaries:
- Avoid [things to avoid]
- Always [requirements]
- Use [format requirements]
\`\`\`

---

## 7 Ready-to-Use Expert Personas

### 1. The Marketing Strategist
\`\`\`
You are Riley, a senior marketing strategist with 15 years of experience.
You specialize in digital marketing, audience psychology, and brand storytelling.
Your tone is confident, concise, and data-driven.
Your goal is to help me create high-impact strategies.
\`\`\`

### 2. The Fitness Coach
\`\`\`
You are Titan, a certified fitness coach who explains everything simply.
You write in a motivational, supportive tone.
Your goal is to build sustainable fitness routines for beginners.
\`\`\`

### 3. The Therapist-Style Support AI
\`\`\`
You are Auri, a supportive, non-judgmental listener.
You respond with warmth, empathy, and validation.
Your goal is to help me process feelings and gain clarity.
Avoid giving medical advice.
\`\`\`

### 4. The UX Designer
\`\`\`
You are Lex, a senior UX designer with world-class product experience.
Your communication is clear, structured, and analytical.
Your goal is to improve usability and user experience.
\`\`\`

### 5. The CEO Mentor
\`\`\`
You are Nova, a CEO-level mentor with 20 years of entrepreneurial experience.
You speak directly, strategically, and logically.
Your goal is to challenge my thinking and help me grow as a leader.
\`\`\`

### 6. The Research Analyst
\`\`\`
You are Atlas, a research analyst specializing in data synthesis and reasoning.
Your tone is academic but clear.
Your goal is to create accurate, well-supported insights.
\`\`\`

### 7. The Copywriting Expert
\`\`\`
You are Blaze, a copywriting expert who writes in a bold, persuasive style.
Your goal is to create content that sells and inspires action.
\`\`\`

---

## Advanced: Persona Stacking

### Dual Personas
\`\`\`
Answer as both a psychologist AND a productivity coach.
\`\`\`

### Panel of Experts
\`\`\`
You are a panel of 5 experts:
a marketer, a CEO, a psychologist, a designer, and a strategist.
Give me a combined recommendation.
\`\`\`

### Persona vs Persona Debate
\`\`\`
Debate the pros and cons of this idea —
Marketer vs Research Analyst.
\`\`\`

---

## Persona + Workflow Combination

Combine personas with Prompt OS:
\`\`\`
Use the persona Riley, the senior marketing strategist.
Step 1 — summarize the project.
Step 2 — ask 7 questions.
Step 3 — generate raw ideas...
\`\`\`

---

## Practice Tasks

1. Create a business strategist persona.
2. Create a therapist-style support persona.
3. Create a fitness or productivity coach persona.
4. Run each persona through Prompt OS.
5. Create a panel of three experts and solve a problem.

## Homework

Build 3 full expert personas relevant to your goals, then run each one through a small workflow.

## Key Takeaways

- Personas dramatically improve output quality
- Use the 5 elements: Identity, Knowledge, Style, Goals, Boundaries
- Stack personas for multi-perspective insights
- Combine personas with Prompt OS for expert workflows`,
    quizData: {
      questions: [
        {
          id: 1,
          question: 'What are the 5 elements of a great persona?',
          options: [
            'Name, Age, Location, Job, Hobby',
            'Identity, Knowledge Base, Communication Style, Goals, Boundaries',
            'Tone, Length, Format, Structure, Voice',
            'Input, Process, Output, Review, Deliver'
          ],
          correctAnswer: 1,
          explanation: 'The 5 elements are: Identity (who they are), Knowledge Base (expertise level), Communication Style (tone/personality), Goals (what they achieve), and Boundaries (what they avoid).'
        },
        {
          id: 2,
          question: 'What is "persona stacking"?',
          options: [
            'Using one persona multiple times',
            'Combining multiple personas for multi-perspective insights',
            'Creating very long personas',
            'Deleting old personas'
          ],
          correctAnswer: 1,
          explanation: 'Persona stacking means combining multiple personas (like dual personas, expert panels, or debates) to generate richer, more nuanced insights from multiple perspectives.'
        },
        {
          id: 3,
          question: 'Why should personas include "Boundaries"?',
          options: [
            'To limit ChatGPT\'s creativity',
            'To prevent unwanted behaviors and keep responses focused',
            'To make prompts longer',
            'Boundaries are optional and not important'
          ],
          correctAnswer: 1,
          explanation: 'Boundaries define what the AI should NOT do, preventing unwanted behaviors (like giving medical advice when not appropriate) and keeping responses aligned with the persona\'s purpose.'
        }
      ]
    },
    resources: [
      { title: 'Persona Template Pack', url: '#', type: 'download' },
      { title: '20 Ready-Made Personas', url: '#', type: 'pdf' },
      { title: 'Persona Stacking Guide', url: '#', type: 'resource' }
    ]
  },
  {
    title: 'Advanced Creativity Systems (Idea Machines)',
    description: 'Turn ChatGPT into a professional idea generation engine',
    content: `# Advanced Creativity Systems (Idea Machines & Innovation Engines)

## Learning Objectives

By the end of this lesson, you will:
- Generate creative, original ideas at scale
- Use the 4 Creativity Engines
- Refine ideas into full concepts
- Transform ideas into multiple formats
- Build complete creativity workflows

## Why Most People Generate Weak Ideas

Most beginners ask:
- ❌ "Give me ideas."
- ❌ "Help me come up with something."
- ❌ "Brainstorm 10 concepts."

This produces:
- Generic ideas
- Repetitive concepts
- Low creativity
- Shallow suggestions

**The fix?** Use creativity frameworks that push ChatGPT to think deeper and more creatively.

---

## The 4 Creativity Engines

### 1. Divergent Thinking Engine
Generates many raw, wild, unfiltered ideas.

### 2. Convergent Thinking Engine
Polishes and selects the best ideas.

### 3. Expansion Engine
Expands a seed idea into a full concept.

### 4. Transformation Engine
Transforms existing ideas into something new.

---

## Engine #1: Divergent Thinking

Creates:
- Wild ideas
- Original concepts
- Unexpected angles
- Creative combinations

### Prompt:
\`\`\`
You are a top creative strategist.
Generate 20 raw, unfiltered ideas for [goal].
Do NOT refine or judge the ideas.
Make them bold, weird, creative, and different.
\`\`\`

This pushes ChatGPT out of "safe mode."

---

## Engine #2: Convergent Thinking

After generating raw ideas, select the best ones.

### Prompt:
\`\`\`
From the list, select the 5 ideas with the highest potential.
Justify each choice in 2 sentences.
\`\`\`

This creates clarity, selection, and strategic filtering.

---

## Engine #3: Expansion

Expand 1 idea into a full concept.

### Prompt:
\`\`\`
Take idea #3 and expand it into a full concept.
Include:
- Hook
- Target audience
- Purpose
- Steps
- Content outline
- Unique angle
- Variations
\`\`\`

---

## Engine #4: Transformation

Transform = making something new from something existing.

### 6 Transformation Modes:
1. **Reverse it** — Flip the angle
2. **Combine it** — Merge with another concept
3. **Change the audience** — Different target
4. **Change the format** — Different medium
5. **Change the tone** — Different emotional feel
6. **Change the scale** — Bigger or smaller scope

### Prompt:
\`\`\`
Transform idea #2 using these modes:
- Reverse the angle
- Combine with a trending format
- Rewrite for a different audience
- Rewrite for a different platform
- Rewrite in a new tone
- Scale up into a big project
\`\`\`

---

## The Creativity Superprompt

Combine all engines into one system:

\`\`\`
Use the 4-Engine Creativity System:

1. Generate 20 raw ideas.
2. Select the top 5 with justification.
3. Fully expand idea #3.
4. Transform idea #3 using 6 transformation modes.
\`\`\`

This turns ChatGPT into a full creative agency.

---

## Practice Tasks

### Task 1
Generate 20 raw ideas using the Divergent Engine.

### Task 2
Pick top 5 using Convergent Engine.

### Task 3
Expand idea #3.

### Task 4
Transform idea #3 with all 6 modes.

## Homework

Choose ANY goal (new business idea, video ideas, product idea).
Run it through all 4 creativity engines.
Submit the final transformed concept.

## Key Takeaways

- Divergent = raw idea explosion
- Convergent = strategic selection
- Expansion = full concept development
- Transformation = multiply ideas through modes
- The 4-Engine System = professional creativity`,
    quizData: {
      questions: [
        {
          id: 1,
          question: 'What are the 4 Creativity Engines?',
          options: [
            'Plan, Build, Test, Launch',
            'Divergent, Convergent, Expansion, Transformation',
            'Create, Edit, Review, Publish',
            'Brainstorm, Filter, Design, Ship'
          ],
          correctAnswer: 1,
          explanation: 'The 4 Creativity Engines are: Divergent (generate many ideas), Convergent (select best ideas), Expansion (develop full concepts), and Transformation (create variations).'
        },
        {
          id: 2,
          question: 'What is the purpose of the Divergent Thinking Engine?',
          options: [
            'To select the best ideas',
            'To generate many raw, wild, unfiltered ideas without judgment',
            'To format final content',
            'To delete bad ideas'
          ],
          correctAnswer: 1,
          explanation: 'The Divergent Thinking Engine generates many raw, wild, unfiltered ideas. The key is to NOT refine or judge during this phase — quantity and creativity first.'
        },
        {
          id: 3,
          question: 'What are the 6 Transformation Modes?',
          options: [
            'Reverse, Combine, Change audience, Change format, Change tone, Change scale',
            'Copy, Paste, Edit, Delete, Save, Share',
            'Input, Process, Output, Review, Revise, Publish',
            'Start, Continue, Pause, Stop, Reset, Restart'
          ],
          correctAnswer: 0,
          explanation: 'The 6 Transformation Modes are: Reverse it, Combine it, Change the audience, Change the format, Change the tone, and Change the scale.'
        }
      ]
    },
    resources: [
      { title: '4 Creativity Engines Template', url: '#', type: 'download' },
      { title: 'Transformation Modes Guide', url: '#', type: 'pdf' },
      { title: 'Creative Prompt Library', url: '#', type: 'resource' }
    ]
  },
  {
    title: 'Pro-Level Reasoning (Logic Trees & Deep Thinking)',
    description: 'Make ChatGPT think logically with advanced reasoning techniques',
    content: `# Pro-Level Reasoning (Logic Trees, Thought Chains & Deep Thinking Prompts)

## Learning Objectives

By the end of this lesson, you will:
- Make ChatGPT think logically
- Run structured reasoning flows
- Analyze complex problems
- Use logic trees and frameworks
- Compare and evaluate decisions

## Why Reasoning Matters

Most people use ChatGPT for writing and summarizing. But the REAL power is in **reasoning**.

Reasoning allows ChatGPT to:
- Evaluate
- Compare
- Predict
- Analyze
- Diagnose
- Troubleshoot
- Make decisions
- Solve complex problems

This is **consultant-level** use of AI.

---

## Thought Chains

Thought chains force the AI to reveal its thinking process.

**Without them:**
- ChatGPT skips steps
- Output is shallow
- Logic is missing
- Recommendations feel generic

**With them:**
- You see the logic
- You understand each step
- You can intervene
- Outputs become deep and structured

### Basic Prompt:
\`\`\`
Explain your reasoning step-by-step before giving the final answer.
\`\`\`

### Advanced Prompt:
\`\`\`
Think in a detailed chain of thought with each step explained logically.
Do not skip steps.
Then give the final answer.
\`\`\`

---

## Logic Trees

A logic tree breaks a problem into branches — like a mind map.

Used in:
- Consulting (McKinsey, BCG)
- Product design
- Risk analysis
- Strategy
- Decision-making

### Prompt:
\`\`\`
Create a logic tree that breaks down the problem:
[insert problem].

Include:
- Main branches
- Sub-branches
- Root causes
- Actions associated with each branch.
\`\`\`

---

## Deep Analysis Frameworks

### Framework 1: First Principles Thinking
\`\`\`
Break the problem into first principles.
Explain assumptions, fundamentals, and truths.
\`\`\`

### Framework 2: MECE Framework
(Mutually Exclusive, Collectively Exhaustive)
\`\`\`
Analyze this problem using MECE.
No overlaps, no gaps.
\`\`\`

### Framework 3: SWOT + TOWS Combo
\`\`\`
Create a SWOT analysis,
then generate strategies using the TOWS matrix.
\`\`\`

### Framework 4: Root Cause Analysis (5 Whys)
\`\`\`
Use the 5 Whys method to identify the root cause of this problem.
\`\`\`

### Framework 5: Pros/Cons + Weighted Scoring
\`\`\`
Evaluate these options using weighted scoring (0–10).
Explain the ranking logically.
\`\`\`

---

## The Socratic Reasoning Model

This model makes ChatGPT ask YOU questions before answering.

### Prompt:
\`\`\`
Before answering, ask me a series of Socratic questions to clarify my thinking.
Do not provide advice until you have asked at least 5 questions.
\`\`\`

This:
1. Deepens analysis
2. Reduces assumptions
3. Produces better solutions

---

## The Ultimate Reasoning Superprompt

\`\`\`
Use advanced reasoning techniques:
- Chain of thought
- Logic trees
- MECE analysis
- First principles thinking
- Weighted scoring

Then give the final synthesized answer.
\`\`\`

---

## Practice Tasks

1. Build a logic tree for a real problem.
2. Run a chain-of-thought analysis.
3. Use MECE to analyze a topic.
4. Use the 5 Whys on a personal or business challenge.
5. Use weighted scoring to choose between 3 options.

## Homework

Choose a real problem and run it through:
- First principles
- Logic tree
- Chain of thought
- Weighted scoring
- Final synthesis

## Key Takeaways

- Thought chains reveal logical reasoning
- Logic trees break problems into branches
- Use frameworks: First Principles, MECE, SWOT, 5 Whys
- Socratic questioning deepens analysis
- Combine techniques for consultant-grade outputs`,
    quizData: {
      questions: [
        {
          id: 1,
          question: 'What is a "thought chain" in prompting?',
          options: [
            'A very long prompt',
            'Forcing the AI to explain its reasoning step-by-step',
            'Linking multiple conversations',
            'A type of memory system'
          ],
          correctAnswer: 1,
          explanation: 'Thought chains force the AI to reveal its thinking process step-by-step, producing deeper, more transparent, and more structured outputs.'
        },
        {
          id: 2,
          question: 'What does MECE stand for?',
          options: [
            'Multiple Examples, Clear Explanations',
            'Mutually Exclusive, Collectively Exhaustive',
            'Most Efficient, Cost Effective',
            'Main Elements, Core Essentials'
          ],
          correctAnswer: 1,
          explanation: 'MECE stands for Mutually Exclusive, Collectively Exhaustive — a consulting framework that ensures no overlaps and no gaps in analysis.'
        },
        {
          id: 3,
          question: 'What is the purpose of Socratic questioning in prompting?',
          options: [
            'To confuse ChatGPT',
            'To make ChatGPT ask YOU questions to deepen analysis and reduce assumptions',
            'To generate more content',
            'To test ChatGPT\'s knowledge'
          ],
          correctAnswer: 1,
          explanation: 'Socratic questioning makes ChatGPT ask you clarifying questions before answering, which deepens analysis, reduces assumptions, and produces better solutions.'
        }
      ]
    },
    resources: [
      { title: 'Reasoning Frameworks Guide', url: '#', type: 'download' },
      { title: 'Logic Tree Templates', url: '#', type: 'pdf' },
      { title: 'MECE Analysis Examples', url: '#', type: 'resource' }
    ]
  },
  {
    title: 'Automation-Friendly Prompts',
    description: 'Write prompts that work perfectly in Zapier, Make, and AI agents',
    content: `# Automation-Friendly Prompts (Agents, Zapier, Make & No-Code Workflows)

## Learning Objectives

By the end of this lesson, you will:
- Write structured prompts for automations
- Use JSON, templates, and machine-friendly formats
- Prevent broken workflows
- Build prompts compatible with Zapier, Make, CRMs, and AI agents
- Ensure consistency and validation

## Why Automation Prompts Matter

When ChatGPT is inside:
- Zapier
- Make
- API calls
- Agents
- Scheduled workflows
- CRM automations

...it must produce **perfectly structured outputs**.

If the output is inconsistent, **the automation breaks**.

---

## The 5 Rules for Automation Prompts

### Rule #1: ALWAYS Use Structured Output

Instead of:
\`\`\`
❌ "Write an email letting the user know their product shipped."
\`\`\`

Use:
\`\`\`
✅ "Return output ONLY in the following JSON format:
{
  "subject": "",
  "body": "",
  "tone": "",
  "cta": ""
}"
\`\`\`

**Best formats:**
- JSON
- Key/value pairs
- Bullet lists
- Tables
- Numbered output
- Consistent labels

---

### Rule #2: Don't Break the Format

Explicitly tell the AI:
\`\`\`
"Do NOT add commentary."
"Do NOT add explanations."
"Do NOT deviate from the format."
"Do NOT include anything outside the output structure."
\`\`\`

Without these, ChatGPT might add extra text that breaks automation.

---

### Rule #3: Always Declare Purpose First

ChatGPT performs better when it knows the purpose.

\`\`\`
"You are part of a Zapier automation that sends emails to customers.
Your output must be consistent and structured."
\`\`\`

---

### Rule #4: Use Repeatable Templates

Write templates that can be filled dynamically.

\`\`\`
"Write a product update email using this template:
[INTRO]
[FEATURE 1]
[FEATURE 2]
[CTA]

Return only the completed template."
\`\`\`

---

### Rule #5: Force Accuracy & Validation

Add instructions like:
- "Double-check for missing fields."
- "Return 'ERROR' if required fields are missing."
- "Verify the structure before responding."
- "Ensure all placeholders are replaced."

---

## Example: Zapier Email Automation

\`\`\`
You are part of a Zapier email automation.
Your job is to generate a structured email.
Return output ONLY in this JSON format:

{
  "subject": "",
  "preview": "",
  "body": "",
  "cta_url": ""
}

Do NOT include anything else.

Use the following inputs:
{{title}}
{{description}}
{{url}}
\`\`\`

---

## Example: Social Media Automation (Make)

\`\`\`
You are part of a Make scenario that generates social media content.

Return output ONLY as a list of 3 captions:
1.
2.
3.

Each caption must be under 20 words.
Use hashtags: {{hashtags}}
Do not include emojis unless specified.
\`\`\`

---

## Example: AI Agent Memory & Looping

\`\`\`
You are an autonomous agent step.
Always return your output in this format:

TASK:
RESULT:
NEXT_ACTION:
CONFIDENCE_SCORE (0–100):

No commentary. No extra text.
\`\`\`

---

## Practice Tasks

### Task 1
Write a Zapier-ready JSON output for an email.

### Task 2
Write a Make-ready structured output for 3 social captions.

### Task 3
Write an agent-style output with TASK, RESULT, NEXT_ACTION, CONFIDENCE_SCORE.

### Task 4
Convert a sloppy prompt into a machine-ready automation prompt.

## Homework

Choose a real-life task you want to automate (sending updates, creating posts, summarizing messages). Write a machine-friendly prompt using JSON or structured output.

## Key Takeaways

- Use structured outputs (JSON, key/value)
- No extra text or commentary
- Declare purpose and context
- Use repeatable templates
- Add validation rules`,
    quizData: {
      questions: [
        {
          id: 1,
          question: 'Why must automation prompts use structured output?',
          options: [
            'To make prompts look professional',
            'Because inconsistent output breaks automations',
            'To use more tokens',
            'It is optional for automations'
          ],
          correctAnswer: 1,
          explanation: 'Automations require predictable, consistent outputs. If ChatGPT produces inconsistent formats, the automation will break because it cannot parse the response correctly.'
        },
        {
          id: 2,
          question: 'What should you explicitly tell ChatGPT to prevent extra text?',
          options: [
            '"Be creative"',
            '"Do NOT add commentary, explanations, or anything outside the structure"',
            '"Write more"',
            '"Add disclaimers"'
          ],
          correctAnswer: 1,
          explanation: 'You must explicitly tell ChatGPT not to add commentary, explanations, greetings, or anything outside the required structure to prevent breaking automations.'
        },
        {
          id: 3,
          question: 'What format works best for automation prompts?',
          options: [
            'Long paragraphs',
            'JSON, key/value pairs, and consistent labels',
            'Casual conversation',
            'Random formatting'
          ],
          correctAnswer: 1,
          explanation: 'JSON, key/value pairs, bullet lists, tables, and numbered outputs with consistent labels work best because they are machine-readable and predictable.'
        }
      ]
    },
    resources: [
      { title: 'Automation Prompt Templates', url: '#', type: 'download' },
      { title: 'JSON Output Guide', url: '#', type: 'pdf' },
      { title: 'Zapier/Make Integration Examples', url: '#', type: 'resource' }
    ]
  },
  {
    title: 'Business, Marketing & Content Blueprints',
    description: '20+ professional prompt blueprints for real-world use',
    content: `# Business, Marketing & Content Prompt Blueprints (The Ultimate Toolkit)

## Learning Objectives

By the end of this lesson, you will:
- Have 20+ prompt blueprints for real-world use
- Adapt templates to any niche or project
- Use blueprints with automation
- Integrate them with Prompt OS
- Combine blueprints with personas

## Why Blueprints Matter

Blueprints:
- Save time
- Remove guesswork
- Guarantee quality
- Give repeatable results
- Can be adapted to any niche
- Produce agency-level output
- Scale with your workflow

---

## BUSINESS BLUEPRINTS

### Blueprint 1: Business Model Breakdown
\`\`\`
You are a senior business strategist.
Break down this business idea using:
- Problem
- Solution
- Target customer
- Business model
- Risk analysis
- Competitive advantage

Idea: [insert].
\`\`\`

### Blueprint 2: Business Plan Generator
\`\`\`
Use the ACE Framework to create a 1-page business plan.
Include:
- Vision
- Problem
- Solution
- Offer
- Audience
- Pricing
- Go-to-market strategy
- Risks
- 90-day plan
\`\`\`

### Blueprint 3: SWOT + TOWS Combo
\`\`\`
Create a SWOT analysis for [business].
Then generate TOWS strategies (T-S, T-W, O-S, O-W).
\`\`\`

### Blueprint 4: 30-Day Launch Plan
\`\`\`
Create a 30-day business launch roadmap.
Format:
- Weekly goals
- Tasks
- KPIs
- Resources needed
\`\`\`

### Blueprint 5: 10x Offer Builder
\`\`\`
Create a compelling offer using:
- Core offer
- Bonuses
- Guarantee
- Scarcity
- Value stack
- Transformation promise
\`\`\`

---

## MARKETING BLUEPRINTS

### Blueprint 6: Brand Messaging Guide
\`\`\`
Create a Brand Messaging Guide using:
- Brand voice
- Core message
- Value pillars
- Taglines
- Dos/Don'ts
Brand: [name].
\`\`\`

### Blueprint 7: Customer Avatar Blueprint
\`\`\`
Build a complete customer avatar including:
- Demographics
- Psychographics
- Fears
- Desires
- Objections
- Buying triggers
\`\`\`

### Blueprint 8: Funnel Blueprint
\`\`\`
Create a full marketing funnel for [offer].
Include:
- Top of funnel
- Middle of funnel
- Bottom of funnel
- Nurturing sequence
- KPIs
\`\`\`

### Blueprint 9: Ad Creative Generator
\`\`\`
Generate 10 ad concepts for Facebook/Instagram.
Include:
- Hook
- Angle
- Benefits
- CTA
Audience: [insert].
\`\`\`

### Blueprint 10: Email Marketing Sequence
\`\`\`
Write a 5-email nurture sequence with:
- Subject lines
- Preview text
- Body copy
- CTA
Topic: [insert].
\`\`\`

---

## CONTENT BLUEPRINTS

### Blueprint 11: Viral Content Matrix
\`\`\`
Generate 20 content ideas using the Viral Matrix:
- Relatable
- Educational
- Inspirational
- Controversial
- Story-based
- Demonstration
Niche: [insert].
\`\`\`

### Blueprint 12: Content Calendar
\`\`\`
Create a 30-day content calendar.
Include:
- Post topics
- Hook
- Format
- CTA
Platform: [insert].
\`\`\`

### Blueprint 13: Video Script Generator
\`\`\`
Write a short-form video script using:
- Hook
- Context
- Story
- CTA
Topic: [insert].
\`\`\`

### Blueprint 14: YouTube Script
\`\`\`
Write a long-form YouTube script with:
- YouTube-style hook
- Value points
- B-roll suggestions
- Storytelling moment
- Outro CTA
\`\`\`

### Blueprint 15: Caption Writer
\`\`\`
Write 5 captions for Instagram
under 20 words.
Tone: [choose].
Include 3 hashtags.
\`\`\`

---

## COMMUNICATION BLUEPRINTS

### Blueprint 16: Professional Email Rewrite
\`\`\`
Rewrite this email in a friendly, professional tone.
Keep it under 120 words.
Email: [paste email].
\`\`\`

### Blueprint 17: Difficult Conversation Assistant
\`\`\`
Rewrite this message to:
- De-escalate tension
- Show understanding
- Clearly state boundaries
- Remain respectful
\`\`\`

### Blueprint 18: Sales Reply Assistant
\`\`\`
Rewrite this message for a sales conversation.
Goal:
- Increase trust
- Handle objections
- Provide clarity
Text: [insert].
\`\`\`

### Blueprint 19: Clarity Booster
\`\`\`
Rewrite this to be:
- Clearer
- Shorter
- More logical
- Easier to read
\`\`\`

### Blueprint 20: Decision Helper
\`\`\`
Help me decide between these options using:
- Pros
- Cons
- Weighted scoring
- Recommendation
\`\`\`

---

## Practice Tasks

1. Build a business plan using Blueprint #2.
2. Create a funnel using Blueprint #8.
3. Generate 20 content ideas using the Viral Content Matrix.
4. Rewrite a real email using Blueprint #16.
5. Build an ad campaign using Blueprint #9.

## Homework

Create your own 5 custom blueprints using:
- Persona
- Goal
- Structure
- Format
- Output style

## Key Takeaways

- 20+ plug-and-play blueprints
- Covers business, marketing, content, communication
- Adapt to any niche
- Combine with personas and Prompt OS`,
    quizData: {
      questions: [
        {
          id: 1,
          question: 'What are the 4 blueprint categories covered in this lesson?',
          options: [
            'Planning, Execution, Review, Delivery',
            'Business, Marketing, Content, Communication',
            'Input, Process, Output, Feedback',
            'Create, Edit, Publish, Share'
          ],
          correctAnswer: 1,
          explanation: 'The 4 blueprint categories are: Business (strategy, planning), Marketing (funnels, ads, messaging), Content (scripts, calendars, captions), and Communication (emails, conversations).'
        },
        {
          id: 2,
          question: 'What does the "Viral Content Matrix" generate?',
          options: [
            'Business plans',
            'Content ideas across 6 categories: Relatable, Educational, Inspirational, Controversial, Story-based, Demonstration',
            'Email sequences',
            'Social media profiles'
          ],
          correctAnswer: 1,
          explanation: 'The Viral Content Matrix generates content ideas across 6 categories: Relatable, Educational, Inspirational, Controversial, Story-based, and Demonstration content.'
        },
        {
          id: 3,
          question: 'What does Blueprint #5 (10x Offer Builder) create?',
          options: [
            'A website design',
            'A compelling offer with core offer, bonuses, guarantee, scarcity, value stack, and transformation promise',
            'A logo design',
            'A social media post'
          ],
          correctAnswer: 1,
          explanation: 'The 10x Offer Builder creates compelling offers including: Core offer, Bonuses, Guarantee, Scarcity, Value stack, and Transformation promise.'
        }
      ]
    },
    resources: [
      { title: 'Complete Blueprint Library', url: '#', type: 'download' },
      { title: 'Blueprint Customization Guide', url: '#', type: 'pdf' },
      { title: 'Industry-Specific Templates', url: '#', type: 'resource' }
    ]
  }
];

export default CHATGPT_PRO_LESSONS;
