# BubbleZone Laundromat — Setup Guide

## Prerequisites
- Node.js 18+
- npm 9+
- Git
- GitHub account

## Local Development

1. Clone the repo:
   ```bash
   git clone <your-github-repo-url>
   cd bubblezone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file from the example:
   ```bash
   cp .env.example .env
   ```

4. Fill in your EmailJS credentials in `.env`:
   ```
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   ```

   > **EmailJS Setup:**
   > 1. Sign up at https://www.emailjs.com/
   > 2. Create an Email Service (e.g., Gmail)
   > 3. Create an Email Template with variables: `{{name}}`, `{{phone}}`, `{{email}}`, `{{service}}`, `{{message}}`
   > 4. Copy your Public Key, Service ID, and Template ID into `.env`

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Build for production:
   ```bash
   npm run build
   ```

## GitHub Setup

```bash
git init
git checkout -b main
git add .
git commit -m "Initial project setup — BubbleZone Laundromat Website"
git remote add origin https://github.com/<your-username>/bubblezone-laundromat.git
git push -u origin main

git checkout -b develop
git push -u origin develop
```

## Vercel Deployment

1. Push code to GitHub (main branch)
2. Log in to https://vercel.com/
3. Click **Add New > Project**
4. Import your `bubblezone-laundromat` repository
5. Configure:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Add Environment Variables (same as `.env`):
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
7. Click **Deploy**
8. Every push to `main` will auto-deploy

## Project Structure

```
bubblezone/
├── public/              # Static assets (robots.txt, sitemap.xml)
├── src/
│   ├── assets/          # Images and logos
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page-level components
│   ├── hooks/           # Custom React hooks
│   ├── App.jsx          # Root app with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Tailwind + custom styles
├── .env.example         # Environment variable template
├── vercel.json          # Vercel config + security headers
├── tailwind.config.js   # Tailwind theme configuration
└── vite.config.js       # Vite configuration
```
