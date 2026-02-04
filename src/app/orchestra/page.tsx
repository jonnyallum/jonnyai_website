'use client';

import { motion } from 'framer-motion';
import { AgentCard } from '@/components/agents/AgentCard';
import { agents, agentsByTier } from '@/data/agents';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/pricing';

const tierInfo = {
  orchestration: { title: 'Orchestration & Leadership', description: 'The command center that keeps everything running smoothly.' },
  development: { title: 'Core Development', description: 'The builders who turn ideas into reality.' },
  deployment: { title: 'Deployment & Infrastructure', description: 'The team that keeps systems running 24/7.' },
  business: { title: 'Business & Growth', description: 'The strategists driving revenue and visibility.' },
  research: { title: 'Research & Discovery', description: 'The intelligence gatherers who uncover insights.' },
  support: { title: 'Support & Knowledge', description: 'The glue that keeps teams informed and customers happy.' },
};

export default function OrchestraPage() {
  const tiers = ['orchestration', 'development', 'deployment', 'business', 'research', 'support'] as const;

  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="font-outfit font-bold text-4xl sm:text-5xl text-void mb-6">
            The <span className="text-citrus">Agent Orchestra</span>
          </h1>
          <p className="text-xl text-steel mb-8">
            Meet the 20+ AI specialists that power every JonnyAi project. Each agent has a
            distinct personality, expertise, and role in delivering enterprise-quality products
            at unprecedented speed.
          </p>
          <Button href={siteConfig.calendlyUrl}>
            See Them in Action — Book a Call
          </Button>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="bg-ghost py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Specialist Agents', value: '20+' },
              { label: 'Core Domains', value: '6' },
              { label: 'Average MVP', value: '3 weeks' },
              { label: 'Human Oversight', value: '100%' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-outfit font-bold text-3xl text-citrus mb-2">{stat.value}</p>
                <p className="text-steel text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agents by Tier */}
      {tiers.map((tier) => {
        const tierAgents = agentsByTier(tier);
        if (tierAgents.length === 0) return null;

        return (
          <section key={tier} className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="font-outfit font-bold text-2xl text-void mb-2">
                  {tierInfo[tier].title}
                </h2>
                <p className="text-steel">{tierInfo[tier].description}</p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {tierAgents.map((agent) => (
                  <AgentCard key={agent.id} agent={agent} variant="full" />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-16 bg-void">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-outfit font-bold text-3xl text-white mb-6">
            Want This Team on Your Project?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Book a discovery call to see how the orchestra can transform your idea into reality.
          </p>
          <Button href={siteConfig.calendlyUrl}>
            Book a Discovery Call
          </Button>
        </div>
      </section>
    </div>
  );
}
