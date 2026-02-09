'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code, Wrench, Handshake, Check, Terminal, Sparkles, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const services = [
  {
    id: 'framework',
    icon: Code,
    title: 'Framework License',
    subtitle: 'High-Performance Foundation',
    description: 'License the AgOS core. A complete, battle-tested multi-agent architecture with built-in orchestration, authentication, and global state management.',
    features: [
      'Complete AgOS Multi-Agent Starter Kit',
      'Proprietary Orchestration Logic',
      'Deployment-Ready CI/CD Pipelines',
      'Technical Documentation & SOPs',
      '90-Day Developer Support Sink',
    ],
    ideal: 'Technical teams who want to bypass 12 months of R&D.',
    price: 'From £497',
    href: '/services/framework',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'builds',
    icon: Wrench,
    title: 'Done-For-You Builds',
    subtitle: 'Elite Neural Execution',
    description: 'We architect, design, and orchestrate the build. You get a production-ready product in weeks, delivered by our elite Agent Orchestra.',
    features: [
      'End-to-End Product Architecture',
      'Agent-Driven Full Stack Build',
      'Security & Scalability Audits',
      'Source Code & IP Ownership',
      '30-Day Post-Launch Support',
    ],
    ideal: 'Founders requiring enterprise-grade execution at scale.',
    price: 'From £4,997',
    href: '/services/builds',
    color: 'from-ember to-amber',
    highlighted: true,
  },
  {
    id: 'partnership',
    icon: Handshake,
    title: 'Venture Partnership',
    subtitle: 'Strategic Equity Alignment',
    description: 'The ultimate partnership. We become your technical co-founder, building and scaling for equity. Zero upfront cost for validated missions.',
    features: [
      'Full-Life-Cycle CTO Partnership',
      'Agile Iteration & Growth Scaling',
      'Technical Network Access',
      'Strategic Board Guidance',
      'Complete Alignment on Exit',
    ],
    ideal: 'Ambitious visionaries building category-leading brands.',
    price: 'Equity-Based',
    href: '/services/partnership',
    color: 'from-purple-500 to-fuchsia-600',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-obsidian min-h-screen text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-ember/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-ember text-[10px] font-black uppercase tracking-widest mb-6"
          >
            <Cpu className="w-3 h-3" />
            Operational Models
          </motion.div>
          <h1 className="font-outfit font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-8 tracking-tighter">
            Architect Your <span className="text-ember">Velocity</span>
          </h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed max-w-3xl">
            JonnyAi provides three distinct vectors for project execution. Choose the path
            that aligns with your technical capabilities and growth trajectory.
          </p>
        </div>
      </section>

      {/* Services Stack */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-panel border-white/5 overflow-hidden transition-all duration-500 group relative ${service.highlighted ? 'border-ember/40 bg-ember/[0.03]' : 'hover:border-white/20'}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 items-stretch">
                {/* Visual Accent */}
                <div className={`hidden lg:block w-2 bg-gradient-to-b ${service.color}`} />

                {/* Info Container */}
                <div className="p-10 lg:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="font-outfit font-black text-3xl text-white uppercase tracking-tighter">{service.title}</h2>
                      <p className="text-ember font-mono text-[10px] uppercase tracking-[0.2em]">{service.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-8 font-light leading-relaxed">{service.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div className="mt-1 w-4 h-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-2.5 h-2.5 text-ember" />
                        </div>
                        <span className="text-[13px] text-gray-500">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-white/5 flex items-center gap-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-600">Perfect Integration Vector:</span>
                    <span className="text-[10px] text-white font-bold">{service.ideal}</span>
                  </div>
                </div>

                {/* Action Card */}
                <div className="bg-white/[0.02] p-12 flex flex-col justify-center border-l border-white/5 text-center lg:text-left relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                    <Terminal className="w-32 h-32 text-white" />
                  </div>

                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-600 mb-2">Base Investment</p>
                  <p className="font-outfit font-black text-5xl text-white mb-10 tracking-tighter">{service.price}</p>

                  <Button
                    href={service.href}
                    className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all ${service.highlighted ? 'bg-white text-obsidian' : 'bg-white/5 text-white border-white/10 hover:bg-white hover:text-black'}`}
                  >
                    Explore Protocol
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison Protocol */}
      <section className="py-32 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16">
            <h2 className="font-outfit font-black text-4xl text-white mb-6 uppercase tracking-tighter">Engagement <span className="text-gray-500">Comparison</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">Selecting the right operational model is critical for project success.</p>
          </motion.div>

          <motion.div className="overflow-x-auto glass-card border-white/5 p-4 sm:p-8">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-6 py-6 text-xs font-black uppercase tracking-widest text-gray-600">Capability Matrix</th>
                  <th className="px-6 py-6 text-center text-xs font-black uppercase tracking-widest text-white">Framework</th>
                  <th className="px-6 py-6 text-center text-xs font-black uppercase tracking-widest text-ember">Builds</th>
                  <th className="px-6 py-6 text-center text-xs font-black uppercase tracking-widest text-nebula-rose">Partnership</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { label: 'Client Development Ownership', framework: true, builds: false, partnership: false },
                  { label: 'Agent Orchestra Execution', framework: false, builds: true, partnership: true },
                  { label: 'Upfront Capital Required', framework: true, builds: true, partnership: false },
                  { label: 'Equity Stake / Alignment', framework: false, builds: false, partnership: true },
                  { label: 'Active Support Sink', framework: '90 Days', builds: '30 Days', partnership: 'Continuous' },
                  { label: 'Product Architecture Authority', framework: 'Client', builds: 'JonnyAi', partnership: 'Shared' },
                ].map((row, i) => (
                  <tr key={row.label} className="group hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-6 text-sm font-medium text-gray-400">{row.label}</td>
                    <td className="px-6 py-6 text-center">
                      {typeof row.framework === 'boolean' ? (
                        row.framework ? <Check className="w-5 h-5 text-ember mx-auto" /> : <span className="text-gray-800">—</span>
                      ) : (
                        <span className="text-xs font-bold text-white">{row.framework}</span>
                      )}
                    </td>
                    <td className="px-6 py-6 text-center">
                      {typeof row.builds === 'boolean' ? (
                        row.builds ? <Check className="w-5 h-5 text-ember mx-auto" /> : <span className="text-gray-800">—</span>
                      ) : (
                        <span className="text-xs font-bold text-white">{row.builds}</span>
                      )}
                    </td>
                    <td className="px-6 py-6 text-center">
                      {typeof row.partnership === 'boolean' ? (
                        row.partnership ? <Check className="w-5 h-5 text-ember mx-auto" /> : <span className="text-gray-800">—</span>
                      ) : (
                        <span className="text-xs font-bold text-white">{row.partnership}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-40 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-ember/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-outfit font-black text-4xl sm:text-5xl text-white mb-8 tracking-tighter uppercase whitespace-nowrap">
            Unsure of the <span className="text-ember italic">Vector?</span>
          </h2>
          <p className="text-gray-400 text-xl mb-12 font-light max-w-2xl mx-auto">
            Book a discovery call. We&apos;ll assess your mission requirements and determine
            the most efficient operational model for your launch.
          </p>
          <Button href="/contact" size="lg" className="bg-white text-obsidian px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-ember hover:text-white transition-all shadow-2xl">
            Book Technical Audit
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
