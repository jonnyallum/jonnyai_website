'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Zap, Users, Target, Rocket, Brain, Shield, Terminal, Cpu, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { AgentCard } from '@/components/agents/AgentCard';
import { featuredAgents } from '@/data/agents';

const timeline = [
  { year: '2024', title: 'The Spark', description: 'Jonny discovered the power of AI tools, using them to navigate a complex personal challenge. The experience revealed what was possible.' },
  { year: 'Jan 2025', title: 'The Leap', description: 'Left a decade-long career as General Manager to pursue a vision: an AI-powered agency that could outpace traditional development.' },
  { year: '2025', title: 'The Orchestra Forms', description: 'Built the agent framework from scratch—43 specialized AI agents, each with defined human identities and elite skills.' },
  { year: '2026', title: 'Jai.OS 4.0', description: 'The Antigravity Operating System reaches maturity. Multi-AI Shared Brain, real-time orchestration, and enterprise deployments go live.' },
];

const values = [
  { icon: Zap, title: 'Speed Without Sacrifice', description: 'We move fast, but never at the cost of quality. Our agents ensure every detail is perfect.' },
  { icon: Brain, title: 'Human + AI Synergy', description: 'AI amplifies human creativity. Every project has Jonny\'s personal oversight and strategic direction.' },
  { icon: Shield, title: 'Enterprise-Grade Quality', description: '@Sam and @Vigil ensure security, QA, and architectural integrity on every single deliverable.' },
  { icon: Target, title: 'Outcome-Focused', description: 'We don\'t bill hours. We deliver results. Your success is how we measure ours.' },
  { icon: Users, title: 'True Partnership', description: 'We\'re not vendors—we\'re partners. Your wins are our wins, literally through equity alignment.' },
  { icon: Rocket, title: 'Continuous Innovation', description: 'Our agents learn from every project, constantly improving their capabilities and processes.' },
];

export default function AboutPage() {
  const topAgents = featuredAgents.slice(0, 4);

  return (
    <div className="bg-obsidian min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-ember/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-ember text-[10px] font-black uppercase tracking-widest mb-6">
              <Terminal className="w-3 h-3" />
              Manifesto // v4.0
            </div>
            <h1 className="font-outfit font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-8 tracking-tighter">
              The Architecture of <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-ember to-amber">High-Velocity Intelligence</span>
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-3xl">
              JonnyAi isn&apos;t just an agency—it&apos;s a stateful Hive Mind. One human architect orchestrating
              43 specialized AI agents to deliver enterprise-grade software at the speed of thought.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-ember to-nebula-rose blur-3xl opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="glass-panel p-10 lg:p-16 border-white/10 text-center relative z-10 overflow-hidden">
                <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-white/10 to-transparent mx-auto mb-10 flex items-center justify-center border border-white/10 group-hover:rotate-6 transition-transform">
                  <span className="text-6xl font-outfit font-black text-white">JA</span>
                </div>
                <h3 className="font-outfit font-black text-3xl text-white mb-2 uppercase tracking-tight">Jonny Allum</h3>
                <p className="text-ember font-mono text-xs uppercase tracking-widest mb-8">Founder & Chief Architect</p>
                <blockquote className="text-gray-400 italic leading-relaxed font-light">
                  &ldquo;The best code is the code you don&apos;t have to write manually.
                  Let AI handle the structure so humans can focus on the soul of the product.&rdquo;
                </blockquote>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="font-outfit font-black text-4xl text-white tracking-tight">The Vision</h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                Based in <span className="text-white font-medium">Emsworth, Hampshire</span>, Jonny Allum Innovations Ltd was founded on a singular obsession: decentralising elite engineering. After years in enterprise development, watching talented teams burn out on repetitive tasks while innovation stalled, Jonny asked a simple question: <span className="text-white font-medium italic">What if AI could handle everything except the creative decisions?</span>
              </p>

              <h2 className="font-outfit font-black text-3xl text-white tracking-tight pt-8 border-t border-white/5">The Remote Freedom</h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                By building the Antigravity Orchestra, Jonny has enabled a new paradigm of work—one where a single architect can deliver global-scale products from a quiet corner of the UK south coast. This isn&apos;t just about automation; it&apos;s about <span className="text-white font-medium">total remote freedom</span> for founders who want to build the future without the overhead of traditional offices.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl">
                  <Cpu className="w-8 h-8 text-ember mb-4" />
                  <h4 className="text-white font-bold mb-2">Technical Mastery</h4>
                  <p className="text-gray-500 text-xs">Full ownership of every line of code generated.</p>
                </div>
                <div className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl">
                  <Sparkles className="w-8 h-8 text-nebula-rose mb-4" />
                  <h4 className="text-white font-bold mb-2">Neural Speed</h4>
                  <p className="text-gray-500 text-xs">Deliveries measured in weeks, not business quarters.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 bg-white/[0.02] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-24">
            <h2 className="font-outfit font-black text-4xl text-white mb-6 uppercase tracking-tight tracking-tighter">Our Neural <span className="text-gray-500">Timeline</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">From experimental automation scripts to an enterprise-grade multi-agent studio.</p>
          </motion.div>

          <div className="relative space-y-24">
            {/* The glowing line */}
            <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-ember via-purple-500 to-transparent opacity-20" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="flex-1 w-full flex md:block items-center gap-6">
                  <div className="md:hidden w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 z-20">
                    <span className="text-ember font-black">{item.year}</span>
                  </div>
                  <div className={`flex-1 glass-card p-10 border-white/5 hover:border-ember/20 transition-all ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="hidden md:block text-ember font-outfit font-black text-2xl mb-2">{item.year}</span>
                    <h3 className="font-outfit font-bold text-xl text-white mb-4 italic tracking-tight uppercase">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>

                <div className="hidden md:flex w-12 h-12 rounded-full bg-obsidian border-4 border-ember shadow-[0_0_20px_rgba(232,117,26,0.4)] items-center justify-center z-20">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="font-outfit font-black text-4xl text-white mb-6 uppercase tracking-tighter">Operating <span className="text-ember">Principles</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">The high-frequency directives that guide every agent and human decision in the studio.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-10 border-white/5 hover:bg-white/[0.04] transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <value.icon className="w-6 h-6 text-ember" />
                </div>
                <h3 className="font-outfit font-bold text-lg text-white mb-4 uppercase tracking-tight">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agency Orchestra Preview */}
      <section className="py-32 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16 border-b border-white/10 pb-10">
            <div>
              <h2 className="font-outfit font-black text-4xl text-white mb-2 tracking-tighter uppercase">The Human + AI <span className="text-gray-500">Hybrid</span></h2>
              <p className="text-gray-500 pt-2 font-light italic leading-relaxed">Every project is powered by these specialized agents under Jonny&apos;s architectural lead.</p>
            </div>
            <Link href="/orchestra" className="hidden sm:flex items-center gap-2 text-ember font-black text-xs uppercase tracking-widest hover:text-white transition-all">
              Registry Hub <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {topAgents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} variant="compact" />
            ))}
          </div>

          <div className="text-center sm:hidden">
            <Button href="/orchestra" variant="outline" className="w-full">
              Full Team Registry
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-16 sm:p-24 text-center border-white/10 relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-ember/5 to-transparent pointer-events-none" />

            <h2 className="font-outfit font-black text-4xl sm:text-5xl text-white mb-10 tracking-tighter leading-tight relative z-10">
              Ready to <span className="text-ember">Architect</span> <br /> Your Vision?
            </h2>

            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <Button href="/contact" size="lg" className="bg-white text-obsidian px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-ember hover:text-white transition-all">
                Initiate Conversation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button href="/services" variant="outline" size="lg" className="border-white/10 text-white bg-white/5 backdrop-blur-md px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black">
                Explore Services Hub
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
