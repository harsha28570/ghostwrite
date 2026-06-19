# GhostWrite — AI Content Repurposing SaaS Landing Website

A complete, conversion-obsessed landing page and app shell for **GhostWrite**, an AI-powered tool that turns one piece of content into 10 platform-optimized formats instantly.

## 🚀 Live Preview

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## 📦 Build

```bash
npm run build
npm run preview
```

## 🛠 Tech Stack

- **React 18** + **Vite**
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **React Router** for navigation

## 🗂 Project Structure

```
ghostwrite/
├── src/
│   ├── components/     # Landing page sections
│   ├── pages/          # Route pages (landing, app, pricing, blog, etc.)
│   ├── App.jsx         # Router configuration
│   ├── main.jsx        # Entry point
│   └── index.css       # Tailwind + custom styles
├── public/
│   └── logo.svg
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## 🌐 Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page (full conversion funnel) |
| `/pricing` | Dedicated pricing page |
| `/blog` | Content marketing blog |
| `/app` | App dashboard entry |
| `/app/new` | Upload / create new content |
| `/app/processing` | AI processing screen |
| `/app/results` | Generated outputs grid |
| `/app/settings` | Brand voice & billing settings |

## 🎨 Design System

- **Primary:** `#7C3AED` (Violet)
- **Background:** `#FFFFFF` / `#FAFAFA` / `#0F0A1E`
- **Typography:** Inter (all weights) + JetBrains Mono
- **Style:** Notion × Linear × Copy.ai inspired — clean, fast, premium

## ✨ Key Features Implemented

- Animated hero with 3-step product demo loop
- Logo marquee + animated stat counters
- Dark problem section with before/after comparison
- Interactive how-it-works with scroll-synced demo
- 10 platform cards + live output switcher
- Bento-style features grid
- Testimonial masonry grid + marquee
- Pricing toggle with 4 tiers
- FAQ accordion + contact box
- Animated final CTA with particle canvas
- App screens: upload, processing, results, settings

## 📝 Notes

- The app screens are functional UI shells (no backend connection).
- All external images use Unsplash source URLs for demo avatars.
- Payments, AI API, and backend are documented in the design spec but not implemented in this frontend build.
