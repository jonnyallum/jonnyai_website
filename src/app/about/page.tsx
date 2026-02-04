'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Users, Target, Rocket, Brain, Shield } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { AgentCard } from '@/components/agents/AgentCard';
import { featuredAgents } from '@/data/agents';

const timeline = [
  {
    year: '2018',
    title: 'The Spark',
    description: 'Jonny began experimenting with automation and AI, frustrated by the inefficiencies he saw in traditional development.',
  },
  {
    year: '2020',
    title: 'First Agents',
    description: 'Built the first specialized AI agents to handle repetitive tasks, freeing up time for creative problem-solving.',
  },
  {
    year: '2022',
    title: 'The Orchestra Forms',
    description: 'Developed the multi-agent orchestration system—20+ specialized agents working in harmony.',
  },
  {
    year: '2024',
    title: 'AgOS Launches',
    description: 'The Antigravity Operating System goes live, enabling 10x faster development for clients worldwide.',
  },
  {
    year: '2026',
    title: 'Venture Studio',
    description: 'Evolved into a full venture studio—building, partnering, and licensing our technology to ambitious founders.',
  },
];

const values = [
  {
    icon: Zap,
    title: 'Speed Without Sacrifice',
    description: 'We move fast, but never at the cost of quality. Our agents ensure every detail is perfect.',
  },
  {
    icon: Brain,
    title: 'Human + AI Synergy',
    description: 'AI amplifies human creativity. Every project has Jonny\'s personal oversight and strategic direction.',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Quality',
    description: 'Sentinel agent ensures security, QA, and compliance on every single deliverable.',
  },
  {
    icon: Target,
    title: 'Outcome-Focused',
    description: 'We don\'t bill hours. We deliver results. Your success is how we measure ours.',
  },
  {
    icon: Users,
    title: 'True Partnership',
    description: 'We\'re not vendors—we\'re partners. Your wins are our wins, literally through equity alignment.',
  },
  {
    icon: Rocket,
    title: 'Continuous Innovation',
    description: 'Our agents learn from every project, constantly improving their capabilities and processes.',
  },
];

export default function AboutPage() {
  const topAgents = featuredAgents.slice(0, 4);

  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <p className="text-citrus font-medium mb-4">Our Story</p>
          <h1 className="font-outfit font-bold text-4xl sm:text-5xl text-void mb-6">
            Building the Future of <span className="text-citrus">Software Development</span>
          </h1>
          <p className="text-xl text-steel">
            JonnyAi isn&apos;t just an agency—it&apos;s a new paradigm. One human architect orchestrating
            20+ AI specialists to deliver enterprise-grade software at startup speed.
          </p>
        </motion.div>
      </section>

      {/* Jonny's Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-citrus/20 to-citrus/5 rounded-2xl p-8 lg:p-12">
              <div className="w-32 h-32 rounded-full bg-citrus/20 mx-auto mb-6 flex items-center justify-center">
                <span className="text-5xl font-outfit font-bold text-citrus">JA</span>
              </div>
              <h3 className="font-outfit font-bold text-2xl text-void text-center mb-2">
                Jonny Allum
              </h3>
              <p className="text-citrus text-center mb-4">Founder & Chief Architect</p>
              <p className="text-steel text-center italic">
                &ldquo;The best code is the code you don&apos;t have to write.
                Let AI handle the mundane so humans can focus on the meaningful.&rdquo;
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-outfit font-bold text-3xl text-void">
              The Vision
            </h2>
            <p className="text-steel">
              After years in enterprise development, watching talented teams burn out on repetitive
              tasks while innovation stalled, Jonny asked a simple question: <em>What if AI could
              handle everything except the creative decisions?</em>
            </p>
            <p className="text-steel">
              The answer became the <strong>Antigravity Agent Orchestra</strong>—a proprietary
              multi-agent system where each AI specialist handles a specific domain: design,
              development, QA, security, SEO, analytics, and more.
            </p>
            <p className="text-steel">
              The result? Enterprise-grade software delivered in weeks, not months. At a fraction
              of the cost. With one human architect ensuring every pixel and line of code meets
              the highest standards.
            </p>
            <p className="text-steel font-medium">
              This isn&apos;t outsourcing. This isn&apos;t a chatbot. This is the future of
              software development—and it&apos;s available today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-ghost py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-outfit font-bold text-3xl text-void mb-4">
              Our Journey
            </h2>
            <p className="text-steel max-w-2xl mx-auto">
              From a solo developer&apos;s experiment to a full venture studio powering the next
              generation of startups.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-citrus/20 hidden lg:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <span className="text-citrus font-outfit font-bold text-xl">{item.year}</span>
                      <h3 className="font-outfit font-bold text-lg text-void mt-2">{item.title}</h3>
                      <p className="text-steel text-sm mt-2">{item.description}</p>
                    </div>
                  </div>

                  <div className="w-4 h-4 rounded-full bg-citrus flex-shrink-0 z-10" />

                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-outfit font-bold text-3xl text-void mb-4">
            What We Stand For
          </h2>
          <p className="text-steel max-w-2xl mx-auto">
            Our principles guide every decision, every line of code, and every partnership we form.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 border border-ghost hover:border-citrus/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-citrus/10 flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-citrus" />
              </div>
              <h3 className="font-outfit font-bold text-lg text-void mb-2">{value.title}</h3>
              <p className="text-steel text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Meet the Orchestra Preview */}
      <section className="bg-ghost py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-outfit font-bold text-3xl text-void mb-4">
              Meet the Orchestra
            </h2>
            <p className="text-steel max-w-2xl mx-auto">
              Every project is powered by our team of 20+ specialized AI agents, each an expert
              in their domain.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {topAgents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} variant="compact" />
            ))}
          </div>

          <div className="text-center">
            <Button href="/orchestra" variant="outline">
              View Full Orchestra
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-void rounded-2xl p-8 lg:p-12 text-center"
        >
          <h2 className="font-outfit font-bold text-3xl text-white mb-4">
            Ready to Build Something Extraordinary?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Whether you want to license our framework, have us build for you, or partner on your
            next venture—let&apos;s talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Start a Conversation
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button href="/services" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
              Explore Services
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
