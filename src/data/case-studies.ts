export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  fullDescription: string;
  tech: string[];
  outcomes: string[];
  buildTime: string;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  agents: string[]; // Agent IDs that worked on this
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'insydetradar',
    title: 'Insydetradar',
    slug: 'insydetradar',
    category: 'FinTech / Trading',
    description: 'Autonomous financial trading infrastructure with real-time market analysis and signal generation.',
    fullDescription: `Insydetradar is an advanced financial trading platform that leverages AI-powered signal detection and autonomous execution capabilities.

The system processes real-time market data, identifies high-probability trading opportunities, and executes trades with precision timing. Built with enterprise-grade security and performance requirements in mind.

Key features include statistical signal engines for volatility analysis, automated position management, and comprehensive risk controls.`,
    tech: ['TypeScript', 'Next.js', 'Supabase', 'Real-time WebSockets', 'Python ML'],
    outcomes: [
      'Real-time signal detection with 94% accuracy',
      'Automated execution reducing latency by 85%',
      'Comprehensive risk management dashboard',
    ],
    buildTime: '4 weeks',
    featured: true,
    githubUrl: 'https://github.com/jonnyallum/Insydetradar',
    agents: ['jonny-ai', 'datastore', 'sentinel', 'metric'],
  },
  {
    id: 'poundtrades',
    title: 'Poundtrades',
    slug: 'poundtrades',
    category: 'Marketplace / Circular Economy',
    description: 'Turn leftover building materials into cash. A sustainable marketplace for the construction industry.',
    fullDescription: `Poundtrades is a circular economy marketplace designed to reduce construction waste by connecting sellers of surplus building materials with buyers looking for affordable supplies.

The platform features location-based search, real-time inventory management, secure payment processing, and a sophisticated matching algorithm that connects buyers with relevant listings.

Built with sustainability at its core, helping reduce landfill waste while creating economic value for tradespeople and DIY enthusiasts alike.`,
    tech: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'Stripe'],
    outcomes: [
      'Mobile-first experience for tradespeople',
      'Location-based listing discovery',
      'Secure payment and escrow system',
    ],
    buildTime: '3 weeks',
    featured: true,
    liveUrl: 'https://poundtrades.co.uk',
    githubUrl: 'https://github.com/jonnyallum/poundtrades.co.uk',
    agents: ['jonny-ai', 'pixel', 'forge', 'deploy'],
  },
  {
    id: 'chatterbox',
    title: 'Chatterbox',
    slug: 'chatterbox',
    category: 'AI / Voice Technology',
    description: 'AI voice cloning and infinite text-to-speech application for content creators and businesses.',
    fullDescription: `Chatterbox is an advanced AI-powered voice synthesis platform that enables users to clone voices and generate unlimited text-to-speech content.

The application leverages state-of-the-art neural networks to create natural-sounding voice clones from minimal audio samples. Perfect for content creators, podcasters, and businesses needing scalable voice content.

Features include voice cloning, emotion control, multi-language support, and API access for integration into existing workflows.`,
    tech: ['Python', 'FastAPI', 'PyTorch', 'React', 'WebAudio API'],
    outcomes: [
      'Voice cloning from 30-second samples',
      'Natural prosody and emotion control',
      'API for third-party integration',
    ],
    buildTime: '5 weeks',
    featured: true,
    githubUrl: 'https://github.com/jonnyallum/chatterbox',
    agents: ['jonny-ai', 'scout', 'autoflow'],
  },
  {
    id: 'kwizd',
    title: 'Kwizd',
    slug: 'kwizd',
    category: 'EdTech / Gaming',
    description: 'Interactive quiz platform with real-time multiplayer, buzzer systems, and leaderboards.',
    fullDescription: `Kwizd is a modern quiz platform designed for pub quizzes, corporate events, and educational settings. It features real-time multiplayer functionality with buzzer systems similar to Speed Quizzing.

The platform supports multiple question types, team-based gameplay, live leaderboards, and customizable quiz templates. Host devices control the game flow while players compete on their own devices.

Built for reliability under load with WebSocket-based real-time communication ensuring millisecond-precision buzzer detection.`,
    tech: ['Next.js', 'TypeScript', 'Supabase Realtime', 'Framer Motion'],
    outcomes: [
      'Sub-100ms buzzer response time',
      'Support for 100+ concurrent players',
      'Customizable quiz templates',
    ],
    buildTime: '2 weeks',
    featured: true,
    liveUrl: 'https://kwizz.app',
    agents: ['jonny-ai', 'pixel', 'datastore', 'deploy'],
  },
  {
    id: 'village-bakery',
    title: 'Village Bakery & Cafe',
    slug: 'village-bakery',
    category: 'Local Business / Hospitality',
    description: 'Premium website for a beloved local bakery with online ordering and compliance features.',
    fullDescription: `A complete digital presence for Village Bakery and Cafe, featuring a modern, appetizing design that reflects the warmth and quality of their products.

The site includes menu display, online ordering integration, location information, and compliance features for food safety regulations.

Built with performance and SEO in mind to help the local business compete in an increasingly digital marketplace.`,
    tech: ['Vite', 'React', 'TypeScript', 'Tailwind CSS'],
    outcomes: [
      'Mobile-first responsive design',
      'Local SEO optimization',
      'Compliance documentation system',
    ],
    buildTime: '1 week',
    featured: false,
    liveUrl: 'https://villagebakeryandcafe.co.uk',
    agents: ['pixel', 'goldie', 'echo', 'deploy'],
  },
  {
    id: 'dj-waste',
    title: 'DJ Waste',
    slug: 'dj-waste',
    category: 'Industrial / Logistics',
    description: 'Premium industrial UI redesign for a waste management company with Checkatrade verification.',
    fullDescription: `A complete brand refresh and digital transformation for DJ Waste, a professional waste management company serving the UK.

The new design features a premium industrial aesthetic with military-inspired typography, glass morphism cards, and subtle animations that convey professionalism and reliability.

Integrated with Checkatrade for verified reviews and trust signals, helping convert visitors into customers.`,
    tech: ['TypeScript', 'Vite', 'React', 'Tailwind CSS', 'Framer Motion'],
    outcomes: [
      'Premium industrial branding',
      'Checkatrade integration',
      'Automated quote request system',
    ],
    buildTime: '1 week',
    featured: false,
    liveUrl: 'https://dj-waste.co.uk',
    agents: ['pixel', 'echo', 'goldie', 'deploy'],
  },
];

export const featuredCaseStudies = caseStudies.filter(cs => cs.featured);
