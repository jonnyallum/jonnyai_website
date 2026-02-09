'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check, Wrench, Palette, Code, Shield, Rocket, MessageSquare, Cpu, Sparkles, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { buildPricing } from '@/data/pricing';

const process = [
  { step: '01', icon: MessageSquare, title: 'Neural Discovery', description: 'We dive deep into your vision, requirements, and project directives. You leave with a clear operational scope.' },
  { step: '02', icon: Palette, title: 'Design Sprint', description: 'Pixel (our design agent) architects the visual language and interaction core. Approved before code execution.' },
  { step: '03', icon: Code, title: 'Orchestrated Build', description: 'The Agent Orchestra executes in parallel. High-fidelity development monitored by Jonny for architectural integrity.' },
  { step: '04', icon: Shield, title: 'QA & Hardening', description: 'Sentinel runs comprehensive stress tests and security audits. Every dependency and route is verified.' },
  { step: '05', icon: Rocket, title: 'Operational Launch', description: 'Deploy pushes your product live. DNS, SSL, and monitoring infrastructure are established for scale.' },
  { step: '06', icon: Wrench, title: 'Post-Launch Sink', description: '30 days of high-priority support. Monitoring, bug fixes, and minor iterative adjustments.' },
];

const deliverables = [
  'Bespoke Source Code Repository',
  'Admin Control Dashboard',
  'Technical Documentation',
  'Automated CI/CD Pipelines',
  'Integrated Security Layer',
  'Responsive Native Viewports',
  'Global Database Migration',
  'Performance-First UI Core',
  'Search Engine Optimization',
  'Scalable API Scaffolding',
  'User Traffic Analytics',
  'Security Audit Registry',
];

export default function BuildsPage() {
  return (
    <div className="bg-obsidian min-h-screen text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-ember/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ember/10 border border-ember/20 text-ember text-[10px] font-black uppercase tracking-[0.3em] mb-6"
          >
            <Cpu className="w-3 h-3 animate-pulse" />
            Execution // Builds
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-outfit font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-8 tracking-tighter"
          >
            We Architect. <br /> <span className="text-ember">You Dominance.</span>
          </motion.h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed max-w-3xl">
            Pass your directives to the Agent Orchestra. 21+ AI specialists work in precise
            harmony to deliver production-grade software at the speed of thought.
          </p>
        </div>
      </section>

      {/* Process Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <motion.div className="mb-16">
          <h2 className="font-outfit font-black text-3xl text-white uppercase tracking-tighter">Operational <span className="text-gray-500">Lifecycle</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {process.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-10 border-white/5 hover:border-ember/30 transition-all group"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-ember/10 transition-all">
                  <item.icon className="w-6 h-6 text-ember" />
                </div>
                <span className="font-outfit font-black text-gray-800 text-3xl group-hover:text-ember/20 transition-all">{item.step}</span>
              </div>
              <h3 className="font-outfit font-bold text-xl text-white mb-4 uppercase tracking-tight">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Handoff Assets */}
      <section className="bg-white/[0.02] py-32 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-outfit font-black text-4xl text-white mb-6 uppercase tracking-tighter">
                Asset <span className="text-ember">Directives</span>
              </h2>
              <p className="text-gray-400 mb-12 font-light leading-relaxed">
                Every build deployment includes a complete neural handoff. You receive
                full IP ownership and the documentation required for infinite scaling.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {deliverables.map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-ember/50 transition-all">
                      <Check className="w-3 h-3 text-ember" />
                    </div>
                    <span className="text-xs font-bold text-gray-500 group-hover:text-white transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-12 border-white/5 relative bg-obsidian-light/50 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <Terminal className="w-32 h-32 text-white" />
              </div>
              <h3 className="font-outfit font-black text-2xl text-white mb-8 uppercase tracking-tight italic">
                Velocity Timeline
              </h3>
              <div className="space-y-6">
                {[
                  { phase: 'Discovery & Directives', duration: '1-2 Days', icon: MessageSquare },
                  { phase: 'Visual Architecture', duration: '3-5 Days', icon: Palette },
                  { phase: 'Neural Execution', duration: '2-3 Weeks', icon: Cpu },
                  { phase: 'Hardening & QA', duration: '3-5 Days', icon: Shield },
                  { phase: 'Final Deployment', duration: '1-2 Days', icon: Rocket },
                ].map((item, i) => (
                  <div key={item.phase} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0 group">
                    <div className="flex items-center gap-4">
                      <item.icon className="w-4 h-4 text-gray-700 group-hover:text-ember transition-colors" />
                      <span className="text-gray-400 text-sm font-medium">{item.phase}</span>
                    </div>
                    <span className="text-ember font-mono text-xs font-bold">{item.duration}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Modules */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="font-outfit font-black text-4xl text-white mb-6 uppercase tracking-tighter">
            Execution <span className="text-ember">Tiers</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-light">Engineered for projects ranging from prototype to enterprise scale.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-0">
          {buildPricing.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`glass-panel p-10 border transition-all duration-300 relative ${tier.highlighted ? 'border-ember/40 bg-ember/[0.03] ring-1 ring-ember/20 shadow-2xl shadow-ember/5' : 'border-white/5'
                }`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 left-10 -translate-y-1/2 px-4 py-1 bg-ember text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                  High Performance
                </div>
              )}
              <h3 className="font-outfit font-black text-2xl text-white mb-2 uppercase tracking-tight">{tier.name}</h3>
              <p className="text-gray-600 text-xs mb-8 italic">{tier.description}</p>
              <div className="mb-10 flex flex-col">
                <span className="font-outfit font-black text-4xl text-white">{tier.price}</span>
                <span className="text-gray-700 text-[10px] font-black uppercase mt-1">Starting Allocation</span>
              </div>

              <ul className="space-y-4 mb-12">
                {tier.features.slice(0, 5).map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-ember flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-500 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                href="/contact"
                className={`w-full py-5 rounded-2xl text-xs font-black uppercase tracking-widest ${tier.highlighted ? 'bg-white text-obsidian' : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white hover:text-black'}`}
              >
                Estimate Build
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quality Shield */}
      <section className="py-32 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-16 border-white/5 bg-ember/[0.02]"
          >
            <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-10 group-hover:rotate-12 transition-transform">
              <Shield className="w-10 h-10 text-ember" />
            </div>
            <h2 className="font-outfit font-black text-4xl text-white mb-6 uppercase tracking-tighter">
              The Neural Guarantee
            </h2>
            <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed">
              We stand by every deployment. If a module fails to meet our high architectural
              standards, we resolve it within one support cycle—at no additional capital cost.
            </p>
            <p className="text-gray-600 font-mono text-[10px] uppercase tracking-[0.5em]">
              30-Day Post-Launch Support Sink Active
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Closer */}
      <section className="py-40 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-outfit font-black text-5xl text-white mb-8 tracking-tighter">
            Ready to <span className="text-ember">Execute?</span>
          </h2>
          <p className="text-gray-400 text-xl mb-12 font-light max-w-2xl mx-auto">
            Book a Technical Directive. We&apos;ll audit your scope and provide a precise
            deployment roadmap for your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button href="/contact" size="lg" className="bg-white text-obsidian px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-ember hover:text-white transition-all shadow-2xl shadow-white/5">
              Initiate Discovery
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button href="/case-studies" variant="outline" size="lg" className="border-white/10 text-white bg-white/5 backdrop-blur-md px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">
              View Work Gallery
              <Sparkles className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
