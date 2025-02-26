# Synapse AI

A modern chat interface built with Next.js, TypeScript, and Tailwind CSS, powered by the DeepSeek API.

## Features

- 🎨 Modern, responsive dark theme interface
- 💬 Real-time chat with AI
- 🔄 Multiple model support (Chat/Reasoner)
- 📝 Pre-built templates for common development tasks
- ✨ ShadCN UI enhancement mode
- 📱 Mobile-friendly design
- ⌨️ Auto-expanding input with code support
- 🎭 Smooth animations and transitions

## Technology Stack

- **Frontend**: Next.js 13+ with App Router
- **Styling**: Tailwind CSS with Typography plugin
- **Language**: TypeScript
- **API**: DeepSeek Chat API
- **State Management**: React Hooks
- **UI Enhancement**: ShadCN-inspired components

## Project Structure

```
├── app/
│   ├── api/
│   │   └── route.ts      # API endpoint handlers
│   └── page.tsx          # Main chat interface
├── tailwind.config.ts    # Tailwind configuration
└── .env.local           # Environment variables
```

## Key Components

### API Routes

- `POST /api`: Handles chat completions
- `GET /api`: Health check endpoint

### Templates

- Clerk Authentication setup
- Stripe payment integration
- Prisma ORM models
- Environment configuration

### UI Features

- Template selection with confirmation
- Model switching (Chat/Reasoner)
- ShadCN UI enhancement mode
- Auto-expanding message input
- Code block formatting
- Loading animations

## Environment Variables

Required environment variables:

```env
DEEPSEEK_API_KEY=your-api-key
DEEPSEEK_ORG_ID=your-org-id
```

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Configure environment variables
4. Run development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000)

## Development Notes

- Uses TypeScript for type safety
- Implements responsive design principles
- Follows modern React best practices
- Includes proper error handling
- Maintains clean code structure

## Security Considerations

- Never commit `.env.local` to version control
- Keep API keys secure
- Rotate credentials regularly
- Use different keys for development/production

## License

MIT