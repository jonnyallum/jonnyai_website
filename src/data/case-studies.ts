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
    id: 'jonnyai',
    title: 'JonnyAI Website',
    slug: 'jonnyai',
    category: 'Agency / Portfolio',
    description: 'The website you\'re viewing now - built with Next.js 16 and our multi-agent framework.',
    fullDescription: `This very website serves as a living demonstration of what JonnyAI can deliver. Built using Next.js 16 with App Router, TypeScript, and Tailwind CSS.

The site showcases our agent orchestra, case studies, service offerings, and partnership model. Every page was crafted using our multi-agent workflow with human architectural oversight.

Features include smooth animations, responsive design, and SEO optimization - all delivered in under 2 weeks.`,
    tech: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    outcomes: [
      'Full agency website in 2 weeks',
      'Multi-agent orchestration showcase',
      'Responsive design across all devices',
    ],
    buildTime: '2 weeks',
    featured: true,
    liveUrl: 'https://jonnyai.co.uk',
    githubUrl: 'https://github.com/jonnyallum/jonnyai.website',
    agents: ['sebastian', 'priya', 'elena', 'grace', 'owen'],
  },
  {
    id: 'dj-waste',
    title: 'DJ Waste',
    slug: 'dj-waste',
    category: 'Industrial / Logistics',
    description: 'Professional website for a waste management company with Checkatrade verification.',
    fullDescription: `A complete digital presence for DJ Waste, a professional waste management company serving the UK.

The design features a professional industrial aesthetic with clear service information, pricing transparency, and trust signals including Checkatrade verification.

Built to convert visitors into customers with clear calls-to-action and easy quote request functionality.`,
    tech: ['TypeScript', 'Vite', 'React', 'Tailwind CSS', 'Framer Motion'],
    outcomes: [
      'Professional industrial branding',
      'Checkatrade integration',
      'Quote request system',
    ],
    buildTime: '1 week',
    featured: true,
    liveUrl: 'https://dj-waste.co.uk',
    agents: ['priya', 'elena', 'grace', 'owen'],
  },
  {
    id: 'cd-waste',
    title: 'CD Waste',
    slug: 'cd-waste',
    category: 'Industrial / Logistics',
    description: 'Professional website for a waste removal and recycling company.',
    fullDescription: `A professional website for CD Waste, providing waste removal and recycling services.

The site features clear service descriptions, service area information, and easy contact options for potential customers.

Built with the same reliable tech stack as our other industrial clients, ensuring fast performance and mobile responsiveness.`,
    tech: ['TypeScript', 'Vite', 'React', 'Tailwind CSS'],
    outcomes: [
      'Clear service presentation',
      'Mobile-responsive design',
      'Easy contact integration',
    ],
    buildTime: '1 week',
    featured: true,
    liveUrl: 'https://cd-waste.co.uk',
    agents: ['priya', 'elena', 'owen'],
  },
  {
    id: 'kwizz',
    title: 'Kwizz',
    slug: 'kwizz',
    category: 'EdTech / Gaming',
    description: 'Interactive quiz platform with real-time multiplayer and buzzer systems.',
    fullDescription: `Kwizz is a modern quiz platform designed for pub quizzes, corporate events, and educational settings. It features real-time multiplayer functionality with buzzer systems.

The platform supports multiple question types, team-based gameplay, live leaderboards, and customizable quiz templates. Host devices control the game flow while players compete on their own devices.

Built for reliability with WebSocket-based real-time communication for responsive buzzer detection.`,
    tech: ['Next.js', 'TypeScript', 'Supabase Realtime', 'Framer Motion'],
    outcomes: [
      'Real-time buzzer system',
      'Support for concurrent players',
      'Customizable quiz templates',
    ],
    buildTime: '2 weeks',
    featured: true,
    liveUrl: 'https://kwizz.co.uk',
    agents: ['sebastian', 'priya', 'diana', 'owen'],
  },
  {
    id: 'insydetradar',
    title: 'Insydetradar',
    slug: 'insydetradar',
    category: 'FinTech / Trading',
    description: 'Financial trading platform with real-time market analysis and signal generation.',
    fullDescription: `Insydetradar is a financial trading platform that provides signal detection and analysis capabilities.

The system processes real-time market data and identifies trading opportunities. Built with security and performance requirements in mind.

Features include statistical signal analysis, position management tools, and risk controls.`,
    tech: ['TypeScript', 'Next.js', 'Supabase', 'Real-time WebSockets', 'Python'],
    outcomes: [
      'Real-time signal detection',
      'Automated analysis tools',
      'Risk management dashboard',
    ],
    buildTime: '4 weeks',
    featured: true,
    liveUrl: 'https://insydetradar.com',
    githubUrl: 'https://github.com/jonnyallum/Insydetradar',
    agents: ['sebastian', 'diana', 'sam', 'maya'],
  },
  {
    id: 'poundtrades',
    title: 'Poundtrades',
    slug: 'poundtrades',
    category: 'Marketplace / Mobile App',
    description: 'Mobile marketplace for surplus building materials. Circular economy for construction.',
    fullDescription: `Poundtrades is a circular economy marketplace mobile app designed to reduce construction waste by connecting sellers of surplus building materials with buyers.

The platform features location-based search, inventory management, secure payment processing, and a matching system that connects buyers with relevant listings.

Built mobile-first for tradespeople who need to list and buy materials on the go.`,
    tech: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'Stripe'],
    outcomes: [
      'Mobile-first experience',
      'Location-based discovery',
      'Secure payment system',
    ],
    buildTime: '3 weeks',
    featured: true,
    liveUrl: 'https://poundtrades.co.uk',
    githubUrl: 'https://github.com/jonnyallum/poundtrades.co.uk',
    agents: ['sebastian', 'priya', 'felix', 'owen'],
  },
  {
    id: 'dudley-motors',
    title: 'Dudley Motors',
    slug: 'dudley-motors',
    category: 'Automotive / Local Business',
    description: 'Professional website for an automotive garage and MOT centre.',
    fullDescription: `A professional digital presence for Dudley Motors, providing MOT testing, servicing, and repairs.

The site features service listings, online booking capabilities, and clear pricing information to help customers make informed decisions.

Built with local SEO in mind to help the business reach customers in their service area.`,
    tech: ['TypeScript', 'Vite', 'React', 'Tailwind CSS'],
    outcomes: [
      'Professional automotive branding',
      'Online booking system',
      'Local SEO optimization',
    ],
    buildTime: '1 week',
    featured: true,
    liveUrl: 'https://dudleymotors.co.uk',
    agents: ['priya', 'elena', 'grace', 'owen'],
  },
  {
    id: 'little-jonnys',
    title: 'Little Jonnys',
    slug: 'little-jonnys',
    category: 'E-commerce / Local Business',
    description: 'E-commerce website for a local retail business.',
    fullDescription: `Little Jonnys is an e-commerce platform for a local retail business, featuring product catalogues and online purchasing.

The site provides a clean shopping experience with easy navigation, product filtering, and secure checkout.

Built as a demonstration of rapid e-commerce deployment capabilities.`,
    tech: ['TypeScript', 'React', 'Tailwind CSS'],
    outcomes: [
      'E-commerce functionality',
      'Product catalogue system',
      'Responsive shopping experience',
    ],
    buildTime: '1 week',
    featured: true,
    liveUrl: 'https://littlejonnys.co.uk',
    githubUrl: 'https://github.com/jonnyallum/manus-test-repo',
    agents: ['sebastian', 'priya', 'owen'],
  },
  {
    id: 'village-bakery',
    title: 'Village Bakery & Cafe',
    slug: 'village-bakery',
    category: 'Local Business / Hospitality',
    description: 'Website for a local bakery with menu display and compliance features.',
    fullDescription: `A complete digital presence for Village Bakery and Cafe in Purbrook, featuring a warm design that reflects the quality of their products.

The site includes menu display, location information, and allergen compliance features for food safety regulations.

Built with performance and local SEO in mind to help the bakery reach customers in their area.`,
    tech: ['Vite', 'React', 'TypeScript', 'Tailwind CSS'],
    outcomes: [
      'Mobile-first responsive design',
      'Local SEO optimization',
      'Allergen compliance system',
    ],
    buildTime: '1 week',
    featured: true,
    liveUrl: 'https://villagebakeryandcafe.co.uk',
    agents: ['priya', 'grace', 'elena', 'owen'],
  },
  {
    id: 'bl-motorcycles',
    title: 'BL Motorcycles',
    slug: 'bl-motorcycles',
    category: 'Automotive / Local Business',
    description: 'Professional website for a motorcycle garage and repair specialist.',
    fullDescription: `A professional website for BL Motorcycles, providing motorcycle servicing, repairs, and MOT testing.

The site showcases their services, expertise, and makes it easy for riders to get in touch for bookings and enquiries.

Built with a focus on the motorcycle community and local search visibility.`,
    tech: ['TypeScript', 'Vite', 'React', 'Tailwind CSS'],
    outcomes: [
      'Professional motorcycle branding',
      'Service showcase',
      'Easy contact options',
    ],
    buildTime: '1 week',
    featured: true,
    liveUrl: 'https://blmotorcycles.co.uk',
    agents: ['priya', 'elena', 'grace', 'owen'],
  },
];

export const featuredCaseStudies = caseStudies.filter(cs => cs.featured);
