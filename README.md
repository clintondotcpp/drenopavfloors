# Drenopav Luxury Floors - Next.js

A premium website for Drenopav Floors Nigeria, built with Next.js and deployed on Cloudflare Pages.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** components
- **Static export** for Cloudflare Pages compatibility
- **Responsive design** for all devices
- **SEO optimized** with proper meta tags

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
```

This creates a static export in the `dist` directory, ready for deployment to Cloudflare Pages.

## Deployment to Cloudflare Pages

### Option 1: Git Integration (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Connect your repository
4. Configure build settings:
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: 18.x or higher

### Option 2: Direct Upload

1. Build the project locally:
```bash
npm run build
```

2. Upload the `dist` directory to Cloudflare Pages

### Build Configuration

The project is configured for static export with these key files:
- `next.config.mjs` - Next.js configuration with static export
- `public/_routes.json` - Cloudflare Pages routing configuration

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── not-found.tsx      # 404 page
│   └── globals.css        # Global styles
├── src/
│   ├── components/        # React components
│   ├── hooks/            # Custom hooks
│   └── lib/              # Utility functions
├── public/               # Static assets
└── next.config.mjs       # Next.js configuration
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **shadcn/ui** - Component library
- **Radix UI** - Accessible components
- **React Hook Form** - Form handling
- **TanStack Query** - Data fetching
- **Lucide React** - Icons

## License

Private - Duruco Concept Limited