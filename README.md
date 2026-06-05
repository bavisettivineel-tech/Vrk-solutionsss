# VRK Digital Compass

A modern, responsive web application built with TanStack Start, React, and Vite.

## Technology Stack

- **Framework**: TanStack Start (React meta-framework)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Form Handling**: React Hook Form
- **Deployment**: Vercel (with SSR)

## Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm or bun package manager

### Installation

```bash
# Install dependencies
npm install
# or
bun install
```

### Development

```bash
# Start development server
npm run dev
# or
bun dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Build

```bash
# Build for production
npm run build
# or
bun build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment

This application is configured for deployment on Vercel with Server-Side Rendering (SSR) support.

### Vercel Configuration Files
- `vercel.json` - Vercel deployment settings
- `.vercelignore` - Files to ignore during deployment
- `nitro.config.ts` - SSR server configuration

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect and build your project
4. Your site will be live at your Vercel domain

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Project Structure

```
src/
├── routes/          # File-based routing (TanStack Start convention)
├── components/      # Reusable React components
├── styles/          # Global styles
└── server.ts        # Server-side entry point
```

## TanStack Start Routing

This project uses TanStack Start's file-based routing system. Every `.tsx` file in `src/routes/` becomes a route.

- `index.tsx` → `/`
- `about.tsx` → `/about`
- `users/$id.tsx` → `/users/:id`

For more details, see [src/routes/README.md](src/routes/README.md)

## License

MIT
