# Personal Blog with TinaCMS

A modern personal blog built with [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), and [TinaCMS](https://tina.io/) for content management.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- git

### Installation

1. Clone the repository

```bash
git clone https://github.com/fredrikac/barebones-starter.git
cd barebones-starter
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables
   - Copy `.env.example` to `.env.local`
   ```bash
   cp .env.example .env.local
   ```
   - Configure the following variables:
     - `NEXT_PUBLIC_TINA_CLIENT_ID`: Your TinaCMS client ID (get this from app.tina.io)
     - `TINA_TOKEN`: Your TinaCMS access token (get this from app.tina.io)
     - `NEXT_PUBLIC_TINA_BRANCH`: (Optional) Specify which branch to use for content

### Development

Start the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your blog in action.

### Production Build

Create a production build:

```bash
npm run build
```

## Deployment

This project can be easily deployed on [Vercel](https://vercel.com). Follow our [deployment guide](https://tina.io/guides/tina-cloud/add-tinacms-to-existing-site/deployment/) for detailed instructions.

Important deployment considerations:

1. Configure environment variables in your Vercel dashboard
2. Ensure your TinaCMS project is properly set up at app.tina.io
3. Connect your GitHub repository for automatic deployments

## Resources

- [TinaCMS Documentation](https://tina.io/docs)
- [Getting Started with TinaCMS](https://tina.io/docs/setup-overview/)
- [TinaCMS GitHub Repository](https://github.com/tinacms/tinacms)
