'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AgentCard } from '@/components/agents/AgentCard';
import { featuredAgents } from '@/data/agents';
import { Button } from '@/components/ui/Button';

export function Solution() {
  const topAgents = featuredAgents.slice(0, 6);

  return (
    <section className="py-32 bg-obsidian-light relative overflow-hidden" id="how-it-works">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-outfit font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-8 tracking-tight"
          >
            The Antigravity <span className="text-transparent bg-clip-text bg-gradient-to-r from-ember via-amber to-amber">Agent Orchestra</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed font-light text-balance"
          >
            We&apos;ve spent two years building a proprietary multi-agent AI system that functions like a complete development department.
          </motion.p>
        </div>

        {/* Marketing Images — 3 column showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-white/10 hover:border-ember/30 transition-all duration-500 hover:shadow-[0_0_60px_rgba(232,117,26,0.1)]"
          >
            <Image
              src="/Logo/marketing-system.png"
              alt="A Proven System — The Antigravity Method"
              width={1024}
              height={1024}
              className="w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl overflow-hidden border border-white/10 hover:border-ember/30 transition-all duration-500 hover:shadow-[0_0_60px_rgba(232,117,26,0.1)]"
          >
            <Image
              src="/Logo/marketing-agents.png"
              alt="Meet Your New Development Team — 43 AI Agents"
              width={1024}
              height={1024}
              className="w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl overflow-hidden border border-white/10 hover:border-ember/30 transition-all duration-500 hover:shadow-[0_0_60px_rgba(232,117,26,0.1)]"
          >
            <Image
              src="/Logo/marketing-vision.png"
              alt="From Vision to Reality — We Turn Ideas Into Production-Ready Software"
              width={1024}
              height={1024}
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Quality + Speed row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-white/10 hover:border-ember/30 transition-all duration-500 hover:shadow-[0_0_60px_rgba(232,117,26,0.1)]"
          >
            <Image
              src="/Logo/marketing-quality.png"
              alt="Enterprise-Grade Quality Without the Enterprise Price Tag"
              width={1024}
              height={1024}
              className="w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl overflow-hidden border border-white/10 hover:border-ember/30 transition-all duration-500 hover:shadow-[0_0_60px_rgba(232,117,26,0.1)]"
          >
            <Image
              src="/Logo/marketing-speed.png"
              alt="No More Waiting — Start Building Today"
              width={1024}
              height={1024}
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Featured Agents */}
        <div>
          <div className="flex items-center justify-between mb-10 border-b border-white/10 pb-6">
            <h3 className="font-outfit font-bold text-3xl text-white">Meet The Core Team</h3>
            <Link
              href="/orchestra"
              className="flex items-center gap-2 text-ember hover:text-white transition-colors text-sm font-medium uppercase tracking-wider"
            >
              View Full Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {topAgents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} variant="compact" />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Button href="/orchestra" size="lg" className="btn-glow text-white text-lg px-10 py-5">
            Explore All 43 Agents
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
