# AgCluster Marketing Website

The official marketing website for [AgCluster](https://github.com/whiteboardmonk/agcluster-container) - a self-hosted developer platform for Claude Agent SDK.

## Overview

This is a Next.js 15 marketing site showcasing AgCluster's capabilities for building, deploying, and managing Claude Agent SDK applications with integrated Web UI, real-time monitoring, and task tracking.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: Lucide React icons
- **Deployment**: Vercel

## Features

- Responsive design optimized for all devices
- Real-time dashboard screenshot showcase
- Agent deployment patterns and use cases
- Ecosystem roadmap
- Dark mode aesthetic inspired by Profound.com

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the site in development.

### Building

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles and utilities
├── components/
│   ├── Navigation.tsx      # Header navigation
│   ├── Hero.tsx            # Hero section with CTA
│   ├── Features.tsx        # Platform features grid
│   ├── WebUIDashboard.tsx  # Dashboard screenshot and features
│   ├── UseCases.tsx        # Agent deployment patterns
│   ├── Ecosystem.tsx       # Product ecosystem and roadmap
│   ├── CTA.tsx             # Call-to-action section
│   └── Footer.tsx          # Footer with links
├── public/
│   └── screenshots/        # Product screenshots
├── tailwind.config.ts      # Tailwind configuration
└── package.json            # Dependencies and scripts
```

## Design System

The website follows a clean, developer-focused design aesthetic:

- **Colors**: Grayscale palette with dark backgrounds (black, grays)
- **Borders**: Consistent use of `border-gray-800` for card styling
- **Buttons**: White solid for primary actions, bordered for secondary
- **Icons**: Clean border containers instead of gradient effects
- **Typography**: System fonts with clear hierarchy

## Content Sections

1. **Hero** - Main value proposition and quick start
2. **Features** - Core platform capabilities (6 features)
3. **Web UI Dashboard** - Screenshot and monitoring features
4. **Use Cases** - Real-world agent deployment patterns
5. **Ecosystem** - Product components and roadmap
6. **CTA** - Final call-to-action for getting started
7. **Footer** - Links, resources, and community

## Screenshots

The website includes a live dashboard screenshot at `/public/screenshots/dashboard.webp` showing:
- Real-time tool execution monitoring
- Resource usage tracking
- Task progress visualization
- Session management

## Deployment

The site is designed for deployment on [Vercel](https://vercel.com):

### Vercel Configuration

1. Import the repository on Vercel
2. Framework: Next.js
3. Build command: `npm run build`
4. Output directory: `.next`
5. Environment variables: None required

The site will automatically deploy on push to main branch.

## Development

### Making Changes

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make changes to components or content
3. Test locally with `npm run dev`
4. Commit with descriptive messages
5. Push and create a pull request

### Updating Content

- **Headlines**: Edit component JSX directly
- **Features/Use Cases**: Modify data objects at top of component files
- **Colors**: Update `tailwind.config.ts` for design system changes
- **Global styles**: Modify `app/globals.css` for utility classes

## Links

- [AgCluster Repository](https://github.com/whiteboardmonk/agcluster-container)
- [Claude Agent SDK](https://github.com/anthropics/claude-agent-sdk-python)
- [Claude Documentation](https://docs.claude.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Next.js](https://nextjs.org)

## License

This marketing website is part of the AgCluster project and follows the same MIT License.

## Contact

For questions or feedback about AgCluster, visit the [GitHub issues](https://github.com/whiteboardmonk/agcluster-container/issues) or [discussions](https://github.com/whiteboardmonk/agcluster-container/discussions).
