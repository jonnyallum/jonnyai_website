'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { AgentCard } from '@/components/agents/AgentCard';
import { featuredAgents } from '@/data/agents';
import { Button } from '@/components/ui/Button';

const comparison = [
  { label: 'MVP Timeline', traditional: '3-6 months', jonnyai: '2-4 weeks' },
  { label: 'Build Cost', traditional: '£30-80k', jonnyai: '£5-15k' },
  { label: 'Team Size', traditional: '5-10 people', jonnyai: '1 human + 40 agents' },
  { label: 'Coordination', traditional: 'Overhead Nightmare', jonnyai: 'Seamless Sync' },
  { label: 'Deliverable', traditional: 'Static Code', jonnyai: 'Living System' },
];

export function Solution() {
  const topAgents = featuredAgents.slice(0, 6);

  return (
    <section className="py-32 bg-obsidian-light relative overflow-hidden" id="how-it-works">
      {/* Background FX */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-outfit font-black text-4xl sm:text-5xl text-white mb-6"
          >
            The Antigravity <span className="text-transparent bg-clip-text bg-gradient-to-r from-citrus to-orange-400">Agent Orchestra</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            We&apos;ve spent two years building a proprietary multi-agent AI system that functions like a complete development department—without the overhead, delays, or coordination failures.
          </motion.p>
        </div>

        {/* How it works */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
          {/* Left: Steps */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="font-outfit font-bold text-3xl text-white mb-8">How It Works</h3>

            {[
              {
                num: '01',
                title: 'The Conductor Orchestrates',
                desc: 'Every project is managed by our Conductor agent, routing tasks to specialists based on requirements in real-time.',
              },
              {
                num: '02',
                title: '40 Specialized Agents Execute',
                desc: 'Development, design, QA, security, SEO, analytics, automation—each specific domain handled by a dedicated expert AI.',
              },
              {
                num: '03',
                title: 'Self-Improving Systems',
                desc: 'Our agents learn from every project, updating their own procedures (SKILL.md) and catching mistakes before they ship.',
              },
              {
                num: '04',
                title: 'Human Oversight',
                desc: 'Jonny personally reviews all output, ensuring "God-Tier" aesthetic and functional quality on every delivery.',
              },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-citrus/20 group-hover:border-citrus/50 transition-all duration-300">
                  <span className="font-outfit font-bold text-lg text-citrus">{step.num}</span>
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-xl text-white mb-2 group-hover:text-citrus transition-colors">{step.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Comparison table */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card transform hover:scale-[1.02] transition-transform duration-500"
          >
            <h3 className="font-outfit font-bold text-2xl text-white mb-8 flex items-center gap-3">
              The Unfair Advantage
              <span className="px-3 py-1 bg-citrus/20 text-citrus text-xs rounded-full border border-citrus/30">10x ROI</span>
            </h3>

            <div className="overflow-hidden rounded-xl border border-white/10">
              <table className="w-full">
                <thead>
                  <tr className="bg-white/5">
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Comparison</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-500">Traditional Agency</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-citrus bg-citrus/5 border-b border-citrus/20">JonnyAi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {comparison.map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]'}>
                      <td className="px-6 py-4 text-sm font-medium text-white">{row.label}</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-500 line-through decoration-red-500/50">{row.traditional}</td>
                      <td className="px-6 py-4 text-center text-sm font-bold text-white bg-citrus/5 border-l border-citrus/10 relative">
                        {/* Highlight marker */}
                        {row.jonnyai}
                        <CheckCircle2 className="w-4 h-4 text-citrus absolute right-2 top-1/2 -translate-y-1/2 opacity-50" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 italic">
                "We stopped hiring junior devs. We just spin up more agents."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Featured Agents */}
        <div>
          <div className="flex items-center justify-between mb-10 border-b border-white/10 pb-6">
            <h3 className="font-outfit font-bold text-3xl text-white">Meet The Core Team</h3>
            <Link
              href="/orchestra"
              className="flex items-center gap-2 text-citrus hover:text-white transition-colors text-sm font-medium uppercase tracking-wider"
            >
              View Full Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {topAgents.map((agent) => (
              // Use a nice staggered entrance for these
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
            Explore All 40 Agents
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
