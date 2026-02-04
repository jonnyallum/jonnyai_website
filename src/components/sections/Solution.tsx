'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AgentCard } from '@/components/agents/AgentCard';
import { featuredAgents } from '@/data/agents';
import { Button } from '@/components/ui/Button';

const comparison = [
  { label: 'MVP Timeline', traditional: '3-6 months', jonnyai: '2-4 weeks' },
  { label: 'Build Cost', traditional: '£30-80k', jonnyai: '£5-15k' },
  { label: 'Team Size', traditional: '5-10 people', jonnyai: '1 human + 20 AI' },
  { label: 'Coordination', traditional: 'Overhead', jonnyai: 'Seamless' },
  { label: 'Deliverable', traditional: 'Static', jonnyai: 'Living system' },
];

export function Solution() {
  const topAgents = featuredAgents.slice(0, 6);

  return (
    <section className="py-24 bg-ghost" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-outfit font-bold text-3xl sm:text-4xl text-void mb-4"
          >
            The Antigravity <span className="text-citrus">Agent Orchestra</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-steel text-lg max-w-3xl mx-auto"
          >
            We&apos;ve spent two years building a proprietary multi-agent AI system that functions like a complete development department—without the overhead, delays, or coordination failures.
          </motion.p>
        </div>

        {/* How it works */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left: Steps */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-outfit font-bold text-2xl text-void">How It Works</h3>

            {[
              {
                num: '01',
                title: 'The Conductor Orchestrates',
                desc: 'Every project is managed by our Conductor agent, routing tasks to specialists based on requirements.',
              },
              {
                num: '02',
                title: '20+ Specialist Agents Execute',
                desc: 'Development, design, QA, security, SEO, analytics, automation—each handled by a dedicated expert.',
              },
              {
                num: '03',
                title: 'Self-Improving Systems',
                desc: 'Our agents learn from every project, updating their own procedures and catching mistakes.',
              },
              {
                num: '04',
                title: 'Human Oversight',
                desc: 'Jonny personally reviews all output, ensuring enterprise-grade quality on every delivery.',
              },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-citrus/10 flex items-center justify-center">
                  <span className="font-outfit font-bold text-citrus">{step.num}</span>
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-void mb-1">{step.title}</h4>
                  <p className="text-steel text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Comparison table */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-sm"
          >
            <h3 className="font-outfit font-bold text-2xl text-void mb-6">The Result</h3>

            <div className="overflow-hidden rounded-xl border border-ghost">
              <table className="w-full">
                <thead>
                  <tr className="bg-ghost">
                    <th className="px-4 py-3 text-left text-sm font-medium text-steel"></th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-steel">Traditional</th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-citrus">JonnyAi</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-ghost/50'}>
                      <td className="px-4 py-3 text-sm font-medium text-void">{row.label}</td>
                      <td className="px-4 py-3 text-center text-sm text-steel">{row.traditional}</td>
                      <td className="px-4 py-3 text-center text-sm font-medium text-citrus">{row.jonnyai}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* Featured Agents */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-outfit font-bold text-2xl text-void">Meet The Team</h3>
            <Link
              href="/orchestra"
              className="flex items-center gap-2 text-citrus hover:text-citrus/80 transition-colors"
            >
              View all agents
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          className="mt-16 text-center"
        >
          <Button href="/orchestra" size="lg">
            Explore The Full Orchestra
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
