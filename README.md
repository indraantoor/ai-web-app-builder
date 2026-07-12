# AI Web App Builder

<img width="1779" height="870" alt="Screenshot 2026-07-12 at 9 44 24 AM" src="https://github.com/user-attachments/assets/0451b0ca-c8a4-40a3-a699-3cc67d8b401b" />


> **An AI powered full stack web application builder inspired by Lovable.**
>
> Generate web applications from natural language, edit them with AI, preview changes live, restore previous versions, export complete projects, and deploy it.


https://github.com/user-attachments/assets/c8b80938-9743-4bab-b724-0742bdb55664


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

## ⚡ Live Development Environment

- Monaco Editor
- Sandpack Live Preview
- Responsive preview
- File explorer
- Hot updates
- VS Code like experience

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

cd worker

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

# Core Features

## AI Chat

Describe an application in plain English.

The selected model generates React code, streams files into the editor, updates the preview, and stores each generation as a new version.

<img width="1779" height="870" alt="Screenshot 2026-07-12 at 9 47 16 AM" src="https://github.com/user-attachments/assets/14d84181-7c64-4f71-adc4-31af6197dece" />

---

## Live Preview

Applications run inside Sandpack allowing instant previews without leaving the browser.

<img width="1779" height="870" alt="Screenshot 2026-07-12 at 9 48 15 AM" src="https://github.com/user-attachments/assets/2c161e81-a0af-4d95-9b44-76b3fbb2357d" />

---

## Monaco Editor

Browse and edit every generated file using Monaco.

<img width="1779" height="870" alt="Screenshot 2026-07-12 at 9 49 43 AM" src="https://github.com/user-attachments/assets/66d0b3cb-2317-4ce5-9e0b-9b134e735307" />


---

## Version History

Every generation creates a snapshot.

- Restore any version
- Compare changes
- View diffs between files
- Track prompts

<img width="1779" height="870" alt="Screenshot 2026-07-12 at 9 50 21 AM" src="https://github.com/user-attachments/assets/5c6d52f7-6005-4fa6-90f0-064d09981028" />


---

## Auto Heal

Compilation errors trigger an automated repair workflow.

Maximum retry attempts: **3**

---

## Image to UI

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

# Contact

**Indraan S Toor**

LinkedIn: https://linkedin.com/in/indraantoor

GitHub: https://github.com/indraantoor
