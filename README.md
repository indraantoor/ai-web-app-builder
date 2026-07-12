<center><h1>AI Web App Builder</h1></center>

> **An AI powered full stack web application builder inspired by Lovable.**
>
> Generate React applications from natural language, edit them with AI, preview changes live, restore previous versions, export complete projects, and deploy it.

# Features

## 🤖 AI Code Generation

- Generate complete React applications from prompts
- Streaming AI responses
- Incremental file creation
- Automatic project bootstrapping
- Context-aware follow-up prompts
- Edit existing applications
- AI-powered refactoring

## 🧠 Multiple AI Models

Supports multiple providers including:

- Claude
- GPT-4o
- Gemini
- DeepSeek

Features

- Model switching
- Vision support
- Credit costs
- Different speed tiers

## ⚡ Live Development Environment

- Monaco Editor
- Sandpack Live Preview
- Responsive preview
- File explorer
- Hot updates
- VS Code-like experience

## 📂 Version History

- Automatic snapshots
- Restore versions
- File diff viewer
- Timeline
- AI generations history

## 🛠 Auto Heal

When compilation fails the application automatically

- Detects errors
- Sends repair prompts
- Retries generation
- Restores a working state

## ☁ Cloud Native

- Cloudflare Workers
- Cloudflare R2
- Cloudflare KV
- Edge Runtime
- Zero cold starts

## 💳 SaaS

- Clerk Authentication
- Google Login
- Subscription Plans
- Credits
- Usage Analytics

## 📦 Export

- ZIP Export
- CodeSandbox Export

---

# Architecture

```text
User
   │
   ▼
Next.js Frontend
   │
   ▼
Cloudflare Worker API
   │
   ├────────► AI Providers
   │             ├ Claude
   │             ├ GPT
   │             ├ Gemini
   │             └ DeepSeek
   │
   ├────────► Cloudflare KV
   ├────────► Cloudflare R2
   │
   ▼
Sandpack Preview
```

---

# Tech Stack

## Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui
- Monaco Editor
- Sandpack

## Backend

- Cloudflare Workers
- Hono
- Cloudflare KV
- Cloudflare R2

## Authentication

- Clerk

## AI

- Anthropic
- OpenAI
- Google Gemini
- DeepSeek

## Utilities

- EventSource Parser
- NanoID
- fflate
- JWT

---

# Getting Started

## Prerequisites

- Node.js 20+
- npm
- Cloudflare Account
- Clerk Account

## Installation

```bash
git clone https://github.com/yourusername/ai-web-app-builder.git

cd ai-web-app-builder

npm install
```

Run frontend

```bash
npm run dev
```

Run worker

```bash
cd worker

npm install

npx wrangler dev
```

---

# Environment Variables

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=

CLERK_SECRET_KEY=

NEXT_PUBLIC_WORKER_URL=

OPENAI_API_KEY=

ANTHROPIC_API_KEY=

GEMINI_API_KEY=

DEEPSEEK_API_KEY=

CLOUDFLARE_ACCOUNT_ID=

R2_BUCKET=

KV_NAMESPACE=
```

---

# Core Features

## AI Chat

Describe an application in plain English.

The selected model generates React code, streams files into the editor, updates the preview, and stores each generation as a new version.

---

## Live Preview

Applications run inside Sandpack allowing instant previews without leaving the browser.

---

## Monaco Editor

Browse and edit every generated file using Monaco.

---

## Version History

Every generation creates a snapshot.

- Restore any version
- Compare changes
- View diffs
- Track prompts

---

## Auto Heal

Compilation errors trigger an automated repair workflow.

Maximum retry attempts: **3**

---

## Image-to-UI

Paste screenshots or upload designs.

Vision-enabled models generate matching interfaces.

---

## Analytics

Track

- AI generations
- Projects
- Credits
- Model usage
- Activity history

---

## Billing

### Free

- Monthly credits
- Access to free models

### Pro

- Unlimited usage
- Premium models
- Export features

---

# License

MIT

---

# Contact

**Indraan S Toor**

LinkedIn: https://linkedin.com/in/indraantoor

GitHub: https://github.com/indraantoor
