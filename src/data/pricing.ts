export interface PricingTier {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  cta: string;
  ctaLink: string;
  highlighted?: boolean;
  category: 'framework' | 'build' | 'partnership';
}

export const frameworkPricing: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '£497',
    priceNote: 'one-time',
    description: 'Core agent profiles and architecture documentation',
    features: [
      '20+ agent profiles',
      'Architecture documentation',
      'Basic setup guide',
      'Email support',
    ],
    cta: 'Get Started',
    ctaLink: '/contact?interest=framework-starter',
    category: 'framework',
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '£997',
    priceNote: 'one-time',
    description: 'Everything in Starter plus video walkthrough and community',
    features: [
      'Everything in Starter',
      'Video walkthrough',
      'Community access',
      '1 year of updates',
      'Priority email support',
    ],
    cta: 'Get Professional',
    ctaLink: '/contact?interest=framework-professional',
    highlighted: true,
    category: 'framework',
  },
  {
    id: 'tailored',
    name: 'Tailored',
    price: '£1,497',
    priceNote: 'one-time',
    description: 'Industry-specific customisation with your terminology',
    features: [
      'Everything in Professional',
      'Industry-specific agents',
      'Renamed personas',
      'Your terminology encoded',
    ],
    cta: 'Get Tailored',
    ctaLink: '/contact?interest=framework-tailored',
    category: 'framework',
  },
  {
    id: 'bespoke',
    name: 'Bespoke',
    price: '£2,997',
    priceNote: 'one-time',
    description: 'Full customisation with discovery call and workflow encoding',
    features: [
      'Everything in Tailored',
      'Discovery call',
      'Your workflows encoded',
      'Custom SOPs',
      'Video walkthrough',
    ],
    cta: 'Build My Bespoke',
    ctaLink: '/services/framework',
    category: 'framework',
  },
  {
    id: 'bespoke-plus',
    name: 'Bespoke+',
    price: '£4,997',
    priceNote: 'one-time',
    description: 'Everything plus ongoing support and training',
    features: [
      'Everything in Bespoke',
      '90-day support',
      'Quarterly refresh',
      'Training session',
      'Dedicated Slack channel',
    ],
    cta: 'Get Bespoke+',
    ctaLink: '/services/framework',
    category: 'framework',
  },
];

export const buildPricing: PricingTier[] = [
  {
    id: 'launchpad',
    name: 'Launchpad',
    price: '£4,997',
    priceNote: '1-2 weeks',
    description: 'Landing pages, simple MVPs, and single-feature tools',
    features: [
      'Landing pages',
      'Simple MVPs',
      'Single-feature tools',
      'Full source code',
      '30 days support',
    ],
    cta: 'Start Project',
    ctaLink: '/contact?interest=build-launchpad',
    category: 'build',
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '£9,997',
    priceNote: '2-4 weeks',
    description: 'Full web applications with integrations and custom features',
    features: [
      'Full web applications',
      'Third-party integrations',
      'Custom features',
      'Full source code',
      '30 days support',
      'Documentation',
    ],
    cta: 'Start Project',
    ctaLink: '/contact?interest=build-growth',
    highlighted: true,
    category: 'build',
  },
  {
    id: 'enterprise-lite',
    name: 'Enterprise Lite',
    price: '£19,997',
    priceNote: '4-6 weeks',
    description: 'Complex systems, mobile apps, and multi-platform builds',
    features: [
      'Complex systems',
      'Mobile apps (iOS + Android)',
      'Multi-platform builds',
      'Full source code',
      '60 days support',
      'Full documentation',
      'Training session',
    ],
    cta: 'Start Project',
    ctaLink: '/contact?interest=build-enterprise',
    category: 'build',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    description: 'Large-scale development with ongoing partnership',
    features: [
      'Large-scale development',
      'Ongoing partnership',
      'Dedicated team',
      'Custom SLA',
      'Priority support',
      'Quarterly reviews',
    ],
    cta: 'Contact Us',
    ctaLink: '/contact?interest=build-custom',
    category: 'build',
  },
];

export const partnershipTerms = {
  equity: {
    title: 'Equity Partnership',
    range: '15-25%',
    description: 'Ownership stake in your company',
    bestFor: 'High-growth potential, venture-scale ideas',
    example: 'We build your SaaS MVP for 18% equity. In 3 years, you sell for £2M. Our stake is worth £360k.',
  },
  revenueShare: {
    title: 'Revenue Share',
    range: '30-50%',
    description: 'Percentage of revenue until cap reached',
    bestFor: 'Lifestyle businesses, near-term revenue potential',
    example: 'We build for 40% revenue share until £30k received. You generate £8k/month—we get £3,200/month until cap.',
  },
  hybrid: {
    title: 'Hybrid',
    description: 'Small cash component + reduced equity/revenue share',
    bestFor: 'Founders with some capital wanting to reduce risk',
    example: 'Pay £6k upfront (30%), we take 10% equity for the remaining value.',
  },
};

export const addOns = [
  { name: 'SEO Optimization (Goldie)', rate: '£75/hr' },
  { name: 'AI Automation & Gen', rate: '£75/hr' },
  { name: 'Course Creation', rate: '£60/hr' },
  { name: 'Video Editing', rate: '£50/hr' },
  { name: 'Data & Spreadsheets', rate: '£50/hr' },
];

export const retainers = [
  { name: 'Basic Management', price: '£100/mo', description: 'Maintenance and minor updates' },
  { name: 'Full Management', price: '£250/mo', description: 'Active development and support' },
  { name: 'Digital Dominance', price: '£500/mo', description: 'Full-stack growth partner' },
];

// Site configuration
export const siteConfig = {
  calendlyUrl: 'https://calendly.com/jonnyallum',
  email: 'jonny@jonnyai.co.uk',
  linkedin: 'https://linkedin.com/in/jonny-allum-12a757140',
  github: 'https://github.com/jonnyallum',
  location: 'United Kingdom',
  domain: 'www.jonnyai.co.uk',
};
