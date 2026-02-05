'use client';

import { motion } from 'framer-motion';
import { AgentCard } from '@/components/agents/AgentCard';
import { agents, agentsByTier } from '@/data/agents';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/pricing';
import { Sparkles, Cpu, Globe, Shield, Terminal, Zap } from 'lucide-react';

const tierInfo = {
  orchestration: { title: 'Orchestration & Leadership', description: 'The command center that keeps everything running smoothly.', icon: Cpu, color: 'text-purple-400' },
  development: { title: 'Core Development', description: 'The builders who turn ideas into reality.', icon: Terminal, color: 'text-blue-400' },
  deployment: { title: 'Deployment & Infrastructure', description: 'The team that keeps systems running 24/7.', icon: Globe, color: 'text-cyan-400' },
  business: { title: 'Business & Growth', description: 'The strategists driving revenue and visibility.', icon: Zap, color: 'text-orange-400' },
  research: { title: 'Research & Discovery', description: 'The intelligence gatherers who uncover insights.', icon: Globe, color: 'text-green-400' },
  support: { title: 'Support & Knowledge', description: 'The glue that keeps teams informed and customers happy.', icon: Shield, color: 'text-gray-400' },
};

export default function OrchestraPage() {
  const tiers = ['orchestration', 'development', 'deployment', 'business', 'research', 'support'] as const;

  return (
    <div className="bg-obsidian min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Abstract FX */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-citrus/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-citrus/10 border border-citrus/20 text-citrus text-xs font-black uppercase tracking-widest mb-6">
              <Sparkles className="w-3 h-3" />
              The Neural Core
            </div>
            <h1 className="font-outfit font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-8 tracking-tighter">
              Meet The <span className="text-citrus">Agent Orchestra</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light">
              Meet the 40 specialized AI agents that power every JonnyAi project. Each agent is a discrete
              intelligence with a custom-engineered human identity, expertise, and operational framework.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href={siteConfig.calendlyUrl} className="bg-white text-obsidian px-10 py-4 rounded-xl font-bold hover:bg-citrus hover:text-white transition-all">
                Hire The Orchestra
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card grid grid-cols-2 md:grid-cols-4 gap-8 py-10 px-6 border-white/5">
            {[
              { label: 'Neural Agents', value: '40' },
              { label: 'Core Tiers', value: '6' },
              { label: 'Avg. Build Speed', value: '3 Weeks' },
              { label: 'Human Logic', value: '100%' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center md:border-r last:border-0 border-white/10"
              >
                <p className="font-outfit font-black text-4xl text-white mb-1">{stat.value}</p>
                <p className="text-gray-500 text-xs uppercase tracking-widest font-black">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agents by Tier */}
      <div className="py-20">
        {tiers.map((tier, tierIdx) => {
          const tierAgents = agentsByTier(tier);
          if (tierAgents.length === 0) return null;
          const info = tierInfo[tier];

          return (
            <section key={tier} className={`py-24 ${tierIdx % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]'}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                  <div className="max-w-3xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg bg-white/5 border border-white/10 ${info.color}`}>
                        <info.icon className="w-6 h-6" />
                      </div>
                      <h2 className="font-outfit font-black text-3xl text-white uppercase tracking-tight">
                        {info.title}
                      </h2>
                    </div>
                    <p className="text-gray-500 text-lg font-light leading-relaxed">{info.description}</p>
                  </div>
                  <div className="text-gray-700 text-xs font-mono uppercase tracking-[0.4em]">
                    Tier Registry // 0{tierIdx + 1}
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {tierAgents.map((agent) => (
                    <AgentCard key={agent.id} agent={agent} variant="full" />
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Global CTA */}
      <section className="py-32 bg-obsidian border-t border-white/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-outfit font-black text-4xl sm:text-5xl text-white mb-8">
              Want This Orchestra on <br /> <span className="text-citrus">Your Project?</span>
            </h2>
            <p className="text-gray-400 text-xl mb-12 font-light">
              Don&apos;t just build a product. Orchestrate a masterpiece. <br />
              Book a call to see how we deploy this framework to your vision.
            </p>
            <Button href={siteConfig.calendlyUrl} className="bg-white text-obsidian px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-citrus hover:text-white transition-all shadow-2xl">
              Initiate Project Protocol
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
