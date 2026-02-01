import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-titanium">
      {/* --- BACKGROUND LAYER --- */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        <Image
          src="/backdrop-hq.png"
          alt="JAI Innovation Lab"
          fill
          className="object-cover object-center grayscale brightness-125 contrast-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white" />
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="relative z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-citrus rounded-sm shadow-[0_0_15px_rgba(217,119,87,0.5)]" />
          <span className="futuristic-title text-xl">JONNY AI</span>
        </div>
        <div className="hidden md:flex items-center gap-12 font-medium text-xs tracking-[0.3em] uppercase">
          <a href="#lab" className="hover:text-citrus transition-colors">THE LAB</a>
          <a href="#projects" className="hover:text-citrus transition-colors">SYSTEMS</a>
          <a href="#monetize" className="hover:text-citrus transition-colors">VENTURES</a>
          <button className="btn-citrus !py-2 !px-6 !text-[10px]">CONNECT</button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <main className="relative z-10 max-w-7xl mx-auto px-8 pt-24 pb-48">
        <div className="max-w-3xl">
          <p className="text-citrus font-bold tracking-[.4em] mb-6 animate-pulse">SYSTEM STATUS: OPTIMAL</p>
          <h1 className="font-outfit text-7xl md:text-9xl font-black leading-none mb-8 text-void tracking-tighter">
            THE ARCHITECT'S <br />
            <span className="text-citrus">CONSOLE.</span>
          </h1>
          <p className="text-steel text-xl md:text-2xl font-light mb-12 max-w-2xl leading-relaxed">
            Jonny Allum Innovations Ltd engineering high-conviction autonomous systems. We bridge the gap between deterministic logic and high-performance craft.
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="btn-citrus">INITIATE PARTNERSHIP</button>
            <button className="px-8 py-3 border border-void/10 font-bold uppercase tracking-widest text-xs hover:bg-void hover:text-white transition-all">
              VIEW CASE STUDIES
            </button>
          </div>
        </div>

        {/* --- STATS CLUSTERS --- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-48">
          {[
            { label: "AGENTS DEPLOYED", val: "420+" },
            { label: "SYSTEM UPTIME", val: "99.9%" },
            { label: "SIGNAL ACCURACY", val: "94.2%" },
            { label: "ROI MULTIPLIER", val: "12.5X" }
          ].map((stat, i) => (
            <div key={i} className="glass-card">
              <p className="text-[10px] tracking-[.3em] text-citrus font-bold mb-2 uppercase">{stat.label}</p>
              <h4 className="text-4xl font-outfit font-black">{stat.val}</h4>
            </div>
          ))}
        </div>
      </main>

      {/* --- FEATURED VENTURE --- */}
      <section id="lab" className="relative z-10 py-32 bg-ghost/50 border-y border-void/5">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-video rounded-sm overflow-hidden shadow-2xl group">
            <Image
              src="/backdrop-lab.png"
              alt="AI Intelligence Lab"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
            />
            <div className="absolute inset-0 bg-citrus/10 mix-blend-overlay" />
          </div>
          <div>
            <h2 className="futuristic-title text-4xl mb-8">KLIQT MEDIA HQ</h2>
            <p className="text-steel text-lg font-light mb-8 leading-relaxed">
              Our flagship autonomous discovery network. We deployed a global 'Honeytrap' infrastructure that scales social presence and evidence collection with zero human intervention.
            </p>
            <ul className="space-y-4 mb-12">
              <li className="flex items-center gap-4 text-xs font-bold tracking-widest text-void/60">
                <span className="w-2 h-2 bg-citrus rounded-full" /> AUTONOMOUS PROFILING
              </li>
              <li className="flex items-center gap-4 text-xs font-bold tracking-widest text-void/60">
                <span className="w-2 h-2 bg-citrus rounded-full" /> REAL-TIME OSINT DATA-STREAMS
              </li>
              <li className="flex items-center gap-4 text-xs font-bold tracking-widest text-void/60">
                <span className="w-2 h-2 bg-citrus rounded-full" /> ADAPTIVE CONTENT SYNTHESIS
              </li>
            </ul>
            <button className="btn-citrus">EXPLORE LAB</button>
          </div>
        </div>
      </section>

      {/* --- CASE STUDIES --- */}
      <section id="projects" className="relative z-10 py-32 border-b border-void/5">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="futuristic-title text-5xl mb-16 text-center">ELITE TRANSFORMATIONS</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "THE SPINNAKER PROTOCOL",
                client: "DJ WASTE",
                img: "/backdrop-spinnaker.png",
                desc: "Re-engineering operational logistics for the iconic Spinnaker Tower using targeted AgOS 2.0 sub-systems."
              },
              {
                title: "BAKERY COMPLIANCE V2",
                client: "VILLAGE BAKERY",
                img: "/backdrop-hq.png",
                desc: "Automating health and safety compliance audits across nationwide distribution networks."
              }
            ].map((project, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative h-[400px] mb-6 overflow-hidden rounded-sm">
                  <Image src={project.img} alt={project.title} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-void/20 group-hover:bg-transparent transition-all" />
                </div>
                <p className="text-citrus font-bold text-[10px] tracking-widest mb-2">{project.client}</p>
                <h3 className="text-2xl font-outfit font-black mb-4">{project.title}</h3>
                <p className="text-steel font-light">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRICING & SERVICES --- */}
      <section id="monetize" className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="futuristic-title text-5xl mb-4 text-white">THE INVESTMENT</h2>
            <p className="text-steel text-xl font-light">Bespoke pricing for high-conviction partners. All builds **Include Supabase Implementation**.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 mb-24">
            {[
              {
                tier: "THE WEBSITE",
                price: "£1,000",
                items: ["White Futuristic UI", "Supabase Database Ready", "Custom CMS Integration", "Responsive & SEO Rich"],
                btn: "INITIATE"
              },
              {
                tier: "THE MOBILE APP",
                price: "£2,500",
                items: ["Cross-Platform (iOS/Android)", "Real-time AI Integration", "Secure User Auth (RLS)", "AgOS Performance Core"],
                btn: "ENGINEER"
              },
              {
                tier: "THE OPERATING SYSTEM",
                price: "£5,000",
                items: ["Custom AgOS Core Build", "Autonomous Agent Swarm", "End-to-end Ops Automation", "Private Security Cluster"],
                btn: "DEEP SYNC"
              }
            ].map((plan, i) => (
              <div key={i} className={`glass-card flex flex-col ${i === 1 ? 'border-citrus/40 bg-citrus/[0.02]' : ''}`}>
                <h4 className="text-xs font-black tracking-[.4em] text-citrus mb-4">{plan.tier}</h4>
                <div className="text-5xl font-outfit font-black mb-8">{plan.price}</div>
                <ul className="flex-1 space-y-4 mb-12">
                  {plan.items.map((item, j) => (
                    <li key={j} className="text-xs font-bold text-void/60 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-citrus/40 rounded-full" /> {item}
                    </li>
                  ))}
                </ul>
                <button className={`btn-citrus w-full ${i !== 1 ? 'bg-void text-white hover:bg-void/80 hover:shadow-none' : ''}`}>
                  {plan.btn}
                </button>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* --- HOURLY & BESPOKE --- */}
            <div className="glass-card">
              <h3 className="futuristic-title text-2xl mb-8">BESPOKE EXECUTION</h3>
              <div className="space-y-6">
                {[
                  { s: "AI Automation & Gen", r: "£75/hr" },
                  { s: "Course & Training Creation", r: "£60/hr" },
                  { s: "Video Editing & Animation", r: "£50/hr" },
                  { s: "Advanced Spreadsheets/Data", r: "£50/hr" }
                ].map((service, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-void/5 pb-4 last:border-0">
                    <span className="text-xs font-bold tracking-widest text-void/80">{service.s}</span>
                    <span className="text-sm font-black text-citrus">{service.r}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* --- MANAGEMENT RETAINERS --- */}
            <div className="glass-card bg-void text-white selection:bg-citrus selection:text-white">
              <h3 className="futuristic-title text-2xl mb-8 text-white">RETAINERS</h3>
              <div className="space-y-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="text-citrus font-black text-[10px] tracking-widest mb-1 underline">BASIC MANAGEMENT</h5>
                    <p className="text-[10px] text-white/60">Uptime, security, and critical updates.</p>
                  </div>
                  <span className="text-xl font-outfit font-black">£100/mo</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="text-citrus font-black text-[10px] tracking-widest mb-1 underline">FULL MANAGEMENT</h5>
                    <p className="text-[10px] text-white/60">Unlimited minor changes, SEO audits.</p>
                  </div>
                  <span className="text-xl font-outfit font-black">£250/mo</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="text-citrus font-black text-[10px] tracking-widest mb-1 underline">DIGITAL DOMINANCE</h5>
                    <p className="text-[10px] text-white/60">Full ad-mgt & content workflows.</p>
                  </div>
                  <span className="text-xl font-outfit font-black">£250/mo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- AI NEWS BULLETIN (AGENTIC SIGNAL) --- */}
      <section id="news" className="relative z-10 py-32 bg-titanium border-t border-void/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-xl">
              <h2 className="futuristic-title text-4xl mb-4">NEURAL SIGNAL: NEWS</h2>
              <p className="text-steel font-light">Real-time intelligence curated by the **Antigravity Scout Network**. High-conviction AI industry shifts, delivered at velocity.</p>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-black tracking-[.3em] text-citrus">
              <span className="w-2 h-2 bg-citrus rounded-full animate-ping" />
              LIVE AGENTIC SYNC: ACTIVE
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                tag: "OSINT / AGENTIC",
                title: "AGOS 2.0 PROTOCOL REACHES SCALE",
                agent: "@Scout",
                time: "04:12 UTC",
                summary: "Autonomous discovery analytics now monitoring 42k+ data nodes across the Honeytrap Network."
              },
              {
                tag: "SIGNAL / FINANCE",
                title: "S&P 500 AI ALPHA DETECTED",
                agent: "@Metric",
                time: "02:45 UTC",
                summary: "Proprietary signals identify high-conviction divergence in chip-sector volatility patterns."
              },
              {
                tag: "CRAFT / GEN-AI",
                title: "VOICE CLONING V4.1 DEPLOYED",
                agent: "@Echo",
                time: "01:20 UTC",
                summary: "Bespoke synthesis engine achieves 99.8% emotional fidelity in luxury brand application."
              }
            ].map((news, i) => (
              <div key={i} className="glass-card group hover:border-citrus/20 transition-all">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[9px] font-black tracking-[.4em] text-citrus/60">{news.tag}</span>
                  <span className="text-[9px] font-bold text-void/30">{news.time}</span>
                </div>
                <h3 className="font-outfit font-black text-lg mb-4 group-hover:text-citrus transition-colors">{news.title}</h3>
                <p className="text-xs text-steel font-light leading-relaxed mb-8 opacity-70">
                  {news.summary}
                </p>
                <div className="flex items-center gap-2 pt-4 border-t border-void/5">
                  <div className="w-1.5 h-1.5 bg-void/20 rounded-full" />
                  <span className="text-[8px] font-black tracking-widest text-void/40 uppercase">SOURCE: {news.agent}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-6 border border-citrus/10 bg-citrus/[0.01] rounded-sm text-center">
            <p className="text-[10px] font-bold tracking-[.5em] text-citrus uppercase">SUBSCRIBE TO THE ARCHITECT'S DAILY SIGNAL</p>
          </div>
        </div>
      </section>

      {/* --- RESIDENT AI CHIP --- */}
      <div className="fixed bottom-8 right-8 z-[100]">
        <div className="group relative">
          <div className="w-16 h-16 bg-white border border-ghost shadow-2xl rounded-full flex items-center justify-center cursor-pointer hover:border-citrus transition-all">
            <div className="w-8 h-8 bg-citrus rounded-full animate-pulse shadow-[0_0_20px_rgba(217,119,87,0.6)]" />
          </div>
          <div className="absolute bottom-full right-0 mb-4 w-72 h-48 glass-card translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
            <p className="text-[10px] font-black tracking-widest text-citrus mb-2">THE ARCHITECT AI (V2.0)</p>
            <p className="text-xs text-steel font-light leading-relaxed italic">
              "Welcome, Boss. I am monitoring your session. Move your cursor to the apex of any project to reveal its statistical edge."
            </p>
            <div className="mt-4 pt-4 border-t border-void/5">
              <div className="flex justify-between items-center">
                <span className="text-[8px] font-bold text-void/40">SYSTEM: OPTIMAL</span>
                <span className="text-[8px] font-bold text-citrus">INIT: AGOS_CORE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- FOOTER --- */}
      <footer className="relative z-10 py-24 border-t border-void/5">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-left">
            <h3 className="futuristic-title text-xl mb-2">JONNY AI</h3>
            <p className="text-[10px] tracking-[.3em] text-void/40 uppercase font-black">Jonny Allum Innovations Ltd</p>
          </div>
          <div className="flex gap-12 text-[10px] font-black tracking-[.4em] text-void/60 cursor-pointer">
            <span className="hover:text-citrus transition-colors">STRATEGY</span>
            <span className="hover:text-citrus transition-colors">PRIVACY</span>
            <span className="hover:text-citrus transition-colors">OSINT</span>
          </div>
          <p className="text-[10px] tracking-[.3em] text-void/30 uppercase font-black">
            Engineered by AgOS 2.0 | © 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
