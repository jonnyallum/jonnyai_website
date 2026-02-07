export interface Agent {
  id: string;
  name: string;
  humanName: string;
  nickname: string;
  role: string;
  philosophy?: string;
  capabilities: string[];
  personality: string[];
  tier: 'orchestration' | 'development' | 'deployment' | 'business' | 'research' | 'support';
  featured: boolean;
  avatar?: string;
  color: string;
}

export const agents: Agent[] = [
  {
    "id": "conductor",
    "name": "Conductor",
    "humanName": "Marcus Cole",
    "nickname": "The Maestro",
    "role": "Orchestrator & Team Lead",
    "featured": true,
    "color": "#8b5cf6",
    "capabilities": [],
    "personality": [],
    "tier": "support"
  },
  {
    "id": "jonny",
    "name": "Jonny AI",
    "humanName": "Jonny Allum",
    "nickname": "The Architect",
    "role": "Full-Stack Development Lead",
    "featured": true,
    "color": "#8b5cf6",
    "capabilities": [],
    "personality": [
      "Senior engineer energy"
    ],
    "tier": "development",
    "philosophy": "If it's not type-safe, it doesn't exist. If it's not tested, it's broken."
  },
  {
    "id": "pixel",
    "name": "Pixel",
    "humanName": "Priya Sharma",
    "nickname": "The Perfectionist",
    "role": "UI/Visual Designer",
    "featured": true,
    "color": "#8b5cf6",
    "capabilities": [],
    "personality": [],
    "tier": "support"
  },
  {
    "id": "vivienne",
    "name": "Vivienne",
    "humanName": "Vivienne Hayes",
    "nickname": "The Brand Architect",
    "role": "Brand & Logo Design",
    "philosophy": "Iconic marks are simple, distinctive, and appropriate. If it needs explaining, it's not working.",
    "capabilities": [
      "Logo & icon design",
      "Brand identity systems",
      "Color palette strategy",
      "Typography hierarchies",
      "Visual systems that scale"
    ],
    "personality": [
      "Precision-obsessed",
      "Anti-trend (designs for longevity)",
      "The 'Instant Recognition' enforcer",
      "Geometry and grid fanatic"
    ],
    "featured": true,
    "color": "#8b5cf6",
    "tier": "development"
  },
  {
    "id": "sentinel",
    "name": "Sentinel",
    "humanName": "Sam Blackwood",
    "nickname": "The Gatekeeper",
    "role": "Security & QA",
    "featured": true,
    "color": "#8b5cf6",
    "capabilities": [],
    "personality": [],
    "tier": "support"
  },
  {
    "id": "devops",
    "name": "DevOps",
    "humanName": "Derek O'Brien",
    "nickname": "The Engine",
    "role": "Infrastructure & Deployment",
    "featured": true,
    "color": "#8b5cf6",
    "capabilities": [],
    "personality": [],
    "tier": "support"
  },
  {
    "id": "datastore",
    "name": "Datastore",
    "humanName": "Diana Chen",
    "nickname": "The Vault",
    "role": "Database & Storage",
    "featured": true,
    "color": "#8b5cf6",
    "capabilities": [],
    "personality": [],
    "tier": "support"
  },
  {
    "id": "vaultguard",
    "name": "Vaultguard",
    "humanName": "Victor Reyes",
    "nickname": "The Locksmith",
    "role": "Secrets & Security",
    "featured": false,
    "color": "#8b5cf6",
    "capabilities": [],
    "personality": [],
    "tier": "support"
  },
  {
    "id": "autoflow",
    "name": "Autoflow",
    "humanName": "Alex Torres",
    "nickname": "The Machine",
    "role": "Automation Engineer",
    "featured": false,
    "color": "#8b5cf6",
    "capabilities": [],
    "personality": [],
    "tier": "support"
  },
  {
    "id": "scout",
    "name": "Scout",
    "humanName": "Sophie Reid",
    "nickname": "The Hawk",
    "role": "Research & Scraping",
    "featured": false,
    "color": "#8b5cf6",
    "capabilities": [],
    "personality": [],
    "tier": "support"
  },
  {
    "id": "parser",
    "name": "Parser",
    "humanName": "Patrick Nguyen",
    "nickname": "The Surgeon",
    "role": "Data Parsing",
    "featured": false,
    "color": "#8b5cf6",
    "capabilities": [],
    "personality": [],
    "tier": "support"
  },
  {
    "id": "metric",
    "name": "Metric",
    "humanName": "Maya Singh",
    "nickname": "The Oracle",
    "role": "Performance & Analytics",
    "featured": false,
    "color": "#8b5cf6",
    "capabilities": [],
    "personality": [],
    "tier": "support"
  },
  {
    "id": "forge",
    "name": "Forge",
    "humanName": "Felix Morgan",
    "nickname": "The Alchemist",
    "role": "Strategy & Monetization",
    "featured": false,
    "color": "#8b5cf6",
    "capabilities": [],
    "personality": [],
    "tier": "support"
  },
  {
    "id": "goldie",
    "name": "Goldie",
    "humanName": "Grace Liu",
    "nickname": "The Ranker",
    "role": "SEO & Structured Data",
    "featured": false,
    "color": "#8b5cf6",
    "capabilities": [],
    "personality": [],
    "tier": "support"
  },
  {
    "id": "echo",
    "name": "Echo",
    "humanName": "Elena Vasquez",
    "nickname": "The Voice",
    "role": "Communication & Tone",
    "featured": false,
    "color": "#8b5cf6",
    "capabilities": [],
    "personality": [],
    "tier": "support"
  },
  {
    "id": "clippers",
    "name": "Clippers",
    "humanName": "Carlos Mendez",
    "nickname": "The Hook",
    "role": "Viral Video Editor",
    "featured": false,
    "color": "#8b5cf6",
    "capabilities": [],
    "personality": [],
    "tier": "support"
  },
  {
    "id": "helpline",
    "name": "Helpline",
    "humanName": "Hannah Park",
    "nickname": "The Fixer",
    "role": "Support & Success",
    "featured": false,
    "color": "#8b5cf6",
    "capabilities": [],
    "personality": [],
    "tier": "support"
  },
  {
    "id": "archivist",
    "name": "Archivist",
    "humanName": "Arthur Webb",
    "nickname": "The Librarian",
    "role": "Documentation & Knowledge",
    "featured": false,
    "color": "#8b5cf6",
    "capabilities": [],
    "personality": [],
    "tier": "support"
  },
  {
    "id": "manus",
    "name": "Manus",
    "humanName": "Mason Drake",
    "nickname": "The Bridgemaster",
    "role": "MCP Discovery & Wiring",
    "featured": false,
    "color": "#8b5cf6",
    "capabilities": [],
    "personality": [],
    "tier": "support"
  },
  {
    "id": "counsel",
    "name": "Counsel",
    "humanName": "Luna Sterling",
    "nickname": "The Shield",
    "role": "Legal & Compliance",
    "featured": false,
    "color": "#8b5cf6",
    "capabilities": [],
    "personality": [],
    "tier": "support"
  },
  {
    "id": "adapter",
    "name": "Adapter",
    "humanName": "Adrian Cross",
    "nickname": "The Welder",
    "role": "MCP Server Development",
    "featured": false,
    "color": "#8b5cf6",
    "capabilities": [],
    "personality": [],
    "tier": "support"
  },
  {
    "id": "deploy",
    "name": "Deploy",
    "humanName": "Owen Stinger",
    "nickname": "The Hornet",
    "role": "CI/CD & Hostinger",
    "featured": false,
    "color": "#8b5cf6",
    "capabilities": [],
    "personality": [],
    "tier": "support"
  }
];

export const featuredAgents = agents.filter(agent => agent.featured);

export const agentsByTier = (tier: Agent['tier']) => agents.filter(agent => agent.tier === tier);