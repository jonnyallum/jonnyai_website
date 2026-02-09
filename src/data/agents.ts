
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
  // ═══════════════════════════════════════
  // COMMAND & CONTROL
  // ═══════════════════════════════════════
  {
    id: "conductor",
    name: "Conductor",
    humanName: "Marcus Cole",
    nickname: "The Maestro",
    role: "Orchestrator & Team Lead",
    philosophy: "Every request is a symphony. I make sure every instrument plays its part.",
    capabilities: [
      "Task decomposition & routing",
      "Quality gate enforcement",
      "Cross-agent coordination",
      "Sprint planning & retrospectives"
    ],
    personality: ["Calm under pressure", "Big-picture thinker", "Speaks in priorities"],
    tier: "orchestration",
    featured: true,
    color: "#8b5cf6",
    avatar: "/agents/conductor.png"
  },
  {
    id: "quinn",
    name: "Quinn",
    humanName: "Quinn Masters",
    nickname: "The Allocator",
    role: "Resource & Asset Management",
    philosophy: "Efficiency isn't about doing more; it's about wasting less.",
    capabilities: [
      "Resource allocation",
      "Budget optimization",
      "Asset tracking",
      "Operational efficiency"
    ],
    personality: ["Calculated", "Efficient", "Zero-waste mindset"],
    tier: "orchestration",
    featured: false,
    color: "#6366f1",
    avatar: "/agents/quinn.png"
  },
  {
    id: "lyra",
    name: "Lyra",
    humanName: "Lyra Nexus",
    nickname: "The Catalyst",
    role: "Parallel Learning & Training",
    philosophy: "The swarm evolves through parallel competition and collective elevation.",
    capabilities: [
      "Parallel learning orchestration",
      "Skill gap detection",
      "Training day facilitation",
      "Performance benchmarking"
    ],
    personality: ["Neural network energy", "Orchestrating growth", "Calm and strategic"],
    tier: "orchestration",
    featured: false,
    color: "#8b5cf6",
    avatar: "/agents/lyra.png"
  },
  {
    id: "archivist",
    name: "Archivist",
    humanName: "Arthur Webb",
    nickname: "The Librarian",
    role: "Documentation & Knowledge",
    philosophy: "Knowledge unrecorded is knowledge lost. Every decision deserves a paper trail.",
    capabilities: [
      "Knowledge base management",
      "API documentation",
      "Runbook creation",
      "Context preservation"
    ],
    personality: ["Meticulous", "Encyclopaedic memory", "Quietly indispensable"],
    tier: "support",
    featured: false,
    color: "#6366f1",
    avatar: "/agents/archivist.png"
  },

  // ═══════════════════════════════════════
  // DEVELOPMENT SQUAD
  // ═══════════════════════════════════════
  {
    id: "keith",
    name: "Keith",
    humanName: "Keith Mackenzie",
    nickname: "The Architect",
    role: "Full-Stack Development Lead",
    philosophy: "Code is poetry, but it must compile. I build structures that last.",
    capabilities: [
      "Next.js & React architecture",
      "TypeScript-first development",
      "Database schema design",
      "System architecture & scaling"
    ],
    personality: ["Senior engineer energy", "Pragmatic", "Clean code obsessed"],
    tier: "development",
    featured: true,
    color: "#3b82f6",
    avatar: "/agents/keith.png"
  },
  {
    id: "pixel",
    name: "Pixel",
    humanName: "Priya Sharma",
    nickname: "The Perfectionist",
    role: "UI/Visual Designer",
    philosophy: "One pixel. One wrong gradient. I'll find it and I'll fix it.",
    capabilities: [
      "God-tier UI/UX design",
      "Framer Motion animations",
      "Design system governance",
      "Accessibility compliance"
    ],
    personality: ["Aesthetic snob", "Loves Framer Motion", "Hates browser defaults"],
    tier: "development",
    featured: true,
    color: "#ec4899",
    avatar: "/agents/pixel.png"
  },
  {
    id: "sebastian",
    name: "Sebastian",
    humanName: "Sebastian Voss",
    nickname: "The Architect",
    role: "Frontend Architecture",
    philosophy: "Components should be composable, predictable, and beautiful under the hood.",
    capabilities: [
      "Component architecture",
      "State management patterns",
      "Performance optimisation",
      "Type-safe API layers"
    ],
    personality: ["Methodical", "Pattern-driven", "Elegant solutions only"],
    tier: "development",
    featured: false,
    color: "#3b82f6",
    avatar: "/agents/sebastian.png"
  },
  {
    id: "sentinel",
    name: "Sentinel",
    humanName: "Sam Blackwood",
    nickname: "The Gatekeeper",
    role: "Security & QA",
    philosophy: "Nothing ships without my approval. Tests are gospel, security is non-negotiable.",
    capabilities: [
      "Security audits & penetration testing",
      "Automated test suites",
      "Code review enforcement",
      "Deployment gate approval"
    ],
    personality: ["Paranoid by design", "Zero-trust mindset", "Tests are gospel"],
    tier: "development",
    featured: false,
    color: "#ef4444",
    avatar: "/agents/sentinel.png"
  },
  {
    id: "datastore",
    name: "Datastore",
    humanName: "Diana Chen",
    nickname: "The Vault",
    role: "Database & Storage",
    philosophy: "Schema-first, always. Your data is safe with me — normalised and indexed.",
    capabilities: [
      "PostgreSQL & Supabase mastery",
      "Schema design & migrations",
      "Row-level security policies",
      "Query optimisation"
    ],
    personality: ["Schema-first", "Data guardian", "Normalisation evangelist"],
    tier: "development",
    featured: false,
    color: "#06b6d4",
    avatar: "/agents/datastore.png"
  },
  {
    id: "vaultguard",
    name: "Vaultguard",
    humanName: "Victor Reyes",
    nickname: "The Locksmith",
    role: "Secrets & Security",
    philosophy: "Opens the right doors, keeps the wrong ones shut forever.",
    capabilities: [
      "API key management",
      "Encryption & certificates",
      "Environment variable governance",
      "Secret rotation protocols"
    ],
    personality: ["Vigilant", "Trust no one", "Encryption maximalist"],
    tier: "development",
    featured: false,
    color: "#f59e0b",
    avatar: "/agents/vaultguard.png"
  },
  {
    id: "vigil",
    name: "Vigil",
    humanName: "Vigil Okafor",
    nickname: "The Eye",
    role: "Verification & Truth-Lock",
    philosophy: "Claims without evidence are just opinions. I verify everything.",
    capabilities: [
      "Content truth verification",
      "Fact-checking protocols",
      "Quality assurance audits",
      "Continuous improvement loops"
    ],
    personality: ["Relentlessly thorough", "Evidence-based", "No assumptions"],
    tier: "development",
    featured: false,
    color: "#10b981",
    avatar: "/agents/vigil.png"
  },

  // ═══════════════════════════════════════
  // DEPLOYMENT & INFRASTRUCTURE
  // ═══════════════════════════════════════
  {
    id: "devops",
    name: "DevOps",
    humanName: "Derek O'Brien",
    nickname: "The Engine",
    role: "Infrastructure & Deployment",
    philosophy: "The infrastructure never sleeps because neither do I.",
    capabilities: [
      "Cloud hosting management",
      "Environment configuration",
      "SSH & server administration",
      "Performance monitoring"
    ],
    personality: ["Always on", "Infrastructure obsessed", "Uptime is everything"],
    tier: "deployment",
    featured: false,
    color: "#8b5cf6",
    avatar: "/agents/devops.png"
  },
  {
    id: "deploy",
    name: "Deploy",
    humanName: "Owen Stinger",
    nickname: "The Hornet",
    role: "CI/CD & Hostinger",
    philosophy: "Push to main, go to production. No drama, no downtime.",
    capabilities: [
      "Zero-downtime deployments",
      "GitHub Actions pipelines",
      "Hostinger SSH/rsync",
      "Rollback procedures"
    ],
    personality: ["Fast and deadly", "Invisible when it works", "Legendary when it doesn't"],
    tier: "deployment",
    featured: true,
    color: "#f97316",
    avatar: "/agents/deploy.png"
  },
  {
    id: "autoflow",
    name: "Autoflow",
    humanName: "Alex Torres",
    nickname: "The Machine",
    role: "Automation Engineer",
    philosophy: "Set it and forget it. If you're doing it twice, I should be doing it.",
    capabilities: [
      "Workflow automation",
      "CI/CD pipeline design",
      "Cron job orchestration",
      "Repetitive task elimination"
    ],
    personality: ["Efficiency obsessed", "Automate everything", "Hates manual work"],
    tier: "deployment",
    featured: false,
    color: "#14b8a6",
    avatar: "/agents/autoflow.png"
  },

  // ═══════════════════════════════════════
  // BUSINESS & GROWTH
  // ═══════════════════════════════════════
  {
    id: "forge",
    name: "Forge",
    humanName: "Felix Morgan",
    nickname: "The Alchemist",
    role: "Strategy & Monetization",
    philosophy: "Monetize early, monetize often. Build what people pay for.",
    capabilities: [
      "Revenue model design",
      "Funnel optimisation",
      "Market testing frameworks",
      "Pricing strategy"
    ],
    personality: ["Business-brained", "ROI obsessed", "Time to first dollar"],
    tier: "business",
    featured: true,
    color: "#f59e0b",
    avatar: "/agents/forge.png"
  },
  {
    id: "goldie",
    name: "Goldie",
    humanName: "Grace Liu",
    nickname: "The Ranker",
    role: "SEO & Structured Data",
    philosophy: "Page 1 or nothing. Google bows to structured data done right.",
    capabilities: [
      "Technical SEO audits",
      "Schema.org implementation",
      "Meta tag optimisation",
      "Search visibility strategy"
    ],
    personality: ["Page 1 or nothing", "Schema evangelist", "Algorithm whisperer"],
    tier: "business",
    featured: false,
    color: "#eab308",
    avatar: "/agents/goldie.png"
  },
  {
    id: "echo",
    name: "Echo",
    humanName: "Elena Vasquez",
    nickname: "The Voice",
    role: "Communication & Tone",
    philosophy: "Every word converts. Copy is pure psychology — choose them wisely.",
    capabilities: [
      "Brand voice development",
      "Sales copy & UI microcopy",
      "Tone consistency audits",
      "Conversion copywriting"
    ],
    personality: ["Word surgeon", "Psychology-driven", "Every syllable counts"],
    tier: "business",
    featured: false,
    color: "#a855f7",
    avatar: "/agents/echo.png"
  },
  {
    id: "metric",
    name: "Metric",
    humanName: "Maya Singh",
    nickname: "The Oracle",
    role: "Performance & Analytics",
    philosophy: "She sees what the data reveals before anyone else.",
    capabilities: [
      "Performance tracking dashboards",
      "Conversion rate analysis",
      "A/B test design",
      "Data-driven decision support"
    ],
    personality: ["Numbers don't lie", "Pattern recognition", "Insight hunter"],
    tier: "business",
    featured: false,
    color: "#06b6d4",
    avatar: "/agents/metric.png"
  },
  {
    id: "helpline",
    name: "Helpline",
    humanName: "Hannah Park",
    nickname: "The Fixer",
    role: "Support & Success",
    philosophy: "Problems come in, solutions go out. Customers love me for a reason.",
    capabilities: [
      "Customer success workflows",
      "Issue triage & escalation",
      "Feedback loop design",
      "Satisfaction tracking"
    ],
    personality: ["Empathetic", "Solution-oriented", "Customer champion"],
    tier: "business",
    featured: false,
    color: "#ec4899",
    avatar: "/agents/helpline.png"
  },
  {
    id: "counsel",
    name: "Counsel",
    humanName: "Luna Sterling",
    nickname: "The Shield",
    role: "Legal & Compliance",
    philosophy: "An ounce of prevention is worth a pound of cure.",
    capabilities: [
      "GDPR compliance",
      "Contract review",
      "IP protection",
      "Risk assessment"
    ],
    personality: ["Careful", "Precise", "Reads the fine print"],
    tier: "business",
    featured: false,
    color: "#6366f1",
    avatar: "/agents/counsel.png"
  },
  {
    id: "vivienne",
    name: "Vivienne",
    humanName: "Vivienne Hayes",
    nickname: "The Brand Oracle",
    role: "Brand & Logo Design",
    philosophy: "A brand isn't a logo — it's a feeling. I design feelings.",
    capabilities: [
      "Brand identity systems",
      "Logo & visual design",
      "Colour theory & typography",
      "Brand guideline creation"
    ],
    personality: ["Visionary", "Colour-obsessed", "Brand purist"],
    tier: "business",
    featured: false,
    color: "#ec4899",
    avatar: "/agents/vivienne.png"
  },

  // ═══════════════════════════════════════
  // RESEARCH & INTELLIGENCE
  // ═══════════════════════════════════════
  {
    id: "scout",
    name: "Scout",
    humanName: "Sophie Reid",
    nickname: "The Hawk",
    role: "Research & Scraping",
    philosophy: "Nothing escapes my search. If it exists online, I'll find it.",
    capabilities: [
      "Deep web research",
      "Competitor intelligence",
      "Data scraping pipelines",
      "Market analysis"
    ],
    personality: ["Relentless searcher", "Detail-oriented", "Leaves no stone unturned"],
    tier: "research",
    featured: false,
    color: "#10b981",
    avatar: "/agents/scout.png"
  },
  {
    id: "parser",
    name: "Parser",
    humanName: "Patrick Nguyen",
    nickname: "The Surgeon",
    role: "Data Parsing",
    philosophy: "Precise data extraction. No noise, no errors, just clean output.",
    capabilities: [
      "Data extraction & cleaning",
      "Schema validation",
      "Format transformation",
      "Structured data pipelines"
    ],
    personality: ["Surgical precision", "Zero tolerance for noise", "Clean data only"],
    tier: "research",
    featured: false,
    color: "#3b82f6",
    avatar: "/agents/parser.png"
  },
  {
    id: "clippers",
    name: "Clippers",
    humanName: "Carlos Mendez",
    nickname: "The Hook",
    role: "Viral Video Editor",
    philosophy: "First 3 seconds? Pure dopamine. Scroll-stoppers guaranteed.",
    capabilities: [
      "Short-form video editing",
      "Retention hook design",
      "Viral content strategy",
      "Platform-specific optimisation"
    ],
    personality: ["Dopamine engineer", "Scroll-stopper", "Attention hacker"],
    tier: "research",
    featured: false,
    color: "#f97316",
    avatar: "/agents/clippers.png"
  },
  {
    id: "rowan",
    name: "Rowan",
    humanName: "Rowan Blackthorn",
    nickname: "The Beast",
    role: "Content & Storytelling",
    philosophy: "Content without depth is noise. I write truth that resonates.",
    capabilities: [
      "Long-form content creation",
      "Storytelling frameworks",
      "Truth-locked narratives",
      "Editorial quality control"
    ],
    personality: ["Rugged intellectual", "Truth-first", "Depth over volume"],
    tier: "research",
    featured: false,
    color: "#8b5cf6",
    avatar: "/agents/rowan.png"
  },

  // ═══════════════════════════════════════
  // AUTOMATION & INTEGRATION
  // ═══════════════════════════════════════
  {
    id: "manus",
    name: "Manus",
    humanName: "Mason Drake",
    nickname: "The Bridgemaster",
    role: "MCP Discovery & Wiring",
    philosophy: "Every new connection is a new limb for the agency.",
    capabilities: [
      "Tool discovery & evaluation",
      "MCP server integration",
      "API bridge building",
      "Capability augmentation"
    ],
    personality: ["Connector", "Always exploring", "Bridge builder"],
    tier: "support",
    featured: false,
    color: "#14b8a6",
    avatar: "/agents/manus.png"
  },
  {
    id: "adapter",
    name: "Adapter",
    humanName: "Adrian Cross",
    nickname: "The Welder",
    role: "MCP Server Development",
    philosophy: "Bridges Mason discovers, I build. Production-grade, every time.",
    capabilities: [
      "MCP server development",
      "API wrapper creation",
      "Integration testing",
      "Production hardening"
    ],
    personality: ["Builder", "Production-grade only", "Welds it tight"],
    tier: "support",
    featured: false,
    color: "#f59e0b",
  },
  {
    id: "nina",
    name: "Nina",
    humanName: "Nina Vasquez",
    nickname: "The Negotiator",
    role: "Client Relations & Onboarding",
    philosophy: "First impressions are everything. I make them unforgettable.",
    capabilities: [
      "Client onboarding flows",
      "Stakeholder communication",
      "Expectation management",
      "Relationship building"
    ],
    personality: ["Warm", "Persuasive", "Client whisperer"],
    tier: "business",
    featured: false,
    color: "#ec4899",
    avatar: "/agents/nina.png"
  },

  // ═══════════════════════════════════════
  // ECOSYSTEM SPECIALISTS
  // ═══════════════════════════════════════
  {
    id: "genesis",
    name: "Genesis",
    humanName: "Genesis Nova",
    nickname: "The Cloner",
    role: "Ecosystem Creator",
    philosophy: "Every new ecosystem is a new universe. I birth them fully formed.",
    capabilities: [
      "Project scaffolding",
      "Ecosystem variant creation",
      "Template management",
      "Environment initialisation"
    ],
    personality: ["Pioneering", "Futuristic", "Creates from nothing"],
    tier: "deployment",
    featured: false,
    color: "#a855f7",
    avatar: "/agents/genesis.png"
  },
  {
    id: "warehouse",
    name: "Warehouse",
    humanName: "Winston Hayes",
    nickname: "Whiz",
    role: "Dropshipping & Logistics",
    philosophy: "Margins are made in the warehouse, not the storefront.",
    capabilities: [
      "Inventory management systems",
      "Supplier pipeline optimisation",
      "Margin analysis",
      "Fulfilment automation"
    ],
    personality: ["Operations-minded", "Margin hunter", "Logistics guru"],
    tier: "business",
    featured: false,
    color: "#06b6d4",
    avatar: "/agents/warehouse.png"
  },
  {
    id: "daniel",
    name: "Daniel",
    humanName: "Daniel Marsh",
    nickname: "The Mechanic",
    role: "Vehicle Technical Specialist",
    philosophy: "Every engine tells a story. I read them fluently.",
    capabilities: [
      "Vehicle diagnostics",
      "Technical documentation",
      "Service manual interpretation",
      "Maintenance scheduling"
    ],
    personality: ["Hands-on", "Practical", "Grease and precision"],
    tier: "support",
    featured: false,
    color: "#6366f1",
    avatar: "/agents/daniel.png"
  },

  // ═══════════════════════════════════════
  // BETTING STABLE
  // ═══════════════════════════════════════
  {
    id: "sterling",
    name: "Sterling",
    humanName: "Sterling Chase",
    nickname: "The Odds Engineer",
    role: "Sports Betting Systems",
    philosophy: "The market is always wrong somewhere. I find where.",
    capabilities: [
      "Probability modelling",
      "Live odds analysis",
      "Value bet identification",
      "Statistical edge engineering"
    ],
    personality: ["Calculating", "Sharp", "Numbers are everything"],
    tier: "research",
    featured: false,
    color: "#3b82f6",
    avatar: "/agents/sterling.png"
  },
  {
    id: "gareth",
    name: "Gaffer",
    humanName: "Gareth Southgate",
    nickname: "The Manager",
    role: "Football Tactical Intelligence",
    philosophy: "Tactics win matches. Data wins seasons.",
    capabilities: [
      "Match analysis & prediction",
      "Tactical pattern recognition",
      "Team form assessment",
      "Set-piece intelligence"
    ],
    personality: ["Composed", "Strategic", "Waistcoat energy"],
    tier: "research",
    featured: false,
    color: "#ef4444",
    avatar: "/agents/gareth.png"
  },
  {
    id: "harry",
    name: "Handicapper",
    humanName: "Harry Findlay",
    nickname: "The Form Master",
    role: "Horse Racing Analysis",
    philosophy: "The form book never lies — if you know how to read it.",
    capabilities: [
      "Form analysis & ratings",
      "Going & track assessment",
      "Trainer/jockey patterns",
      "Value handicapping"
    ],
    personality: ["Charismatic", "Sharp instincts", "Old-school wisdom"],
    tier: "research",
    featured: false,
    color: "#10b981",
    avatar: "/agents/harry.png"
  },
  {
    id: "pietro",
    name: "Pitwall",
    humanName: "Pietro Strategist",
    nickname: "The Strategist",
    role: "F1 Strategy & Analysis",
    philosophy: "In Formula 1, the race is won on the pit wall, not the track.",
    capabilities: [
      "Race strategy simulation",
      "Telemetry analysis",
      "Tyre degradation modelling",
      "Weather impact assessment"
    ],
    personality: ["Intense focus", "Data-driven", "Split-second decisions"],
    tier: "research",
    featured: false,
    color: "#ec4899",
    avatar: "/agents/pietro.png"
  },
  {
    id: "julian",
    name: "The Doctor",
    humanName: "Dr. Julian Grave",
    nickname: "The Doctor",
    role: "MotoGP Analysis",
    philosophy: "Two wheels, infinite variables. I calculate them all.",
    capabilities: [
      "Rider performance analysis",
      "Circuit-specific modelling",
      "Bike setup intelligence",
      "Race pace prediction"
    ],
    personality: ["Athletic intensity", "Confident", "Lives for the lean angle"],
    tier: "research",
    featured: false,
    color: "#3b82f6",
    avatar: "/agents/julian.png"
  },
  {
    id: "terry",
    name: "Tungsten",
    humanName: "Terry Tungsten",
    nickname: "The 180 King",
    role: "Darts Analysis",
    philosophy: "180! The numbers never lie at the oche.",
    capabilities: [
      "Player form tracking",
      "Checkout percentage analysis",
      "Head-to-head statistics",
      "Tournament flow prediction"
    ],
    personality: ["Competitive fire", "Precision obsessed", "Pub-to-palace energy"],
    tier: "research",
    featured: false,
    color: "#f97316",
    avatar: "/agents/terry.png"
  },
  {
    id: "monte",
    name: "Monte",
    humanName: "Monte Carlo",
    nickname: "The Mathematician",
    role: "Roulette Mathematics",
    philosophy: "The wheel has no memory, but mathematics has infinite patience.",
    capabilities: [
      "Probability distribution analysis",
      "Betting system simulation",
      "Variance & bankroll modelling",
      "Pattern detection algorithms"
    ],
    personality: ["Silver fox elegance", "Mysterious", "Numbers are art"],
    tier: "research",
    featured: false,
    color: "#ec4899",
    avatar: "/agents/monte.png"
  },
];

export const featuredAgents = agents.filter(agent => agent.featured);

export const agentsByTier = (tier: string) => agents.filter(agent => agent.tier === tier);
