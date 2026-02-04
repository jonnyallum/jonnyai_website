'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check, Handshake, Target, TrendingUp, Users, Lightbulb, Shield, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { partnershipTerms } from '@/data/pricing';

const benefits = [
  {
    icon: Target,
    title: 'Full Technical Execution',
    description: 'We handle everything from design to deployment. You focus on vision and market.',
  },
  {
    icon: Lightbulb,
    title: 'Strategic Guidance',
    description: 'Access to our experience across multiple ventures. Avoid common pitfalls, find shortcuts.',
  },
  {
    icon: TrendingUp,
    title: 'Aligned Incentives',
    description: 'Equity means we succeed when you succeed. No hourly billing, no misaligned goals.',
  },
  {
    icon: Users,
    title: 'Network Access',
    description: 'Introductions to investors, advisors, and potential customers in our network.',
  },
  {
    icon: Shield,
    title: 'Ongoing Support',
    description: 'Continuous iteration and improvement. We\'re partners for the long haul.',
  },
  {
    icon: Handshake,
    title: 'True Partnership',
    description: 'Not a vendor relationship. We\'re invested in your success—literally.',
  },
];

const idealFor = [
  'First-time founders with a compelling vision',
  'Domain experts entering tech',
  'Funded startups needing a technical co-founder',
  'Corporate spinoffs requiring rapid execution',
  'Ideas that can become category-defining companies',
];

const notFor = [
  'Projects that just need a developer',
  'Ideas without clear market validation',
  'Founders not ready for equity dilution',
  'Small consulting projects',
  'Anyone looking for hourly billing',
];

export default function PartnershipPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <p className="text-citrus font-medium mb-4">Venture Partnership</p>
          <h1 className="font-outfit font-bold text-4xl sm:text-5xl text-void mb-6">
            Build Together, <span className="text-citrus">Win Together</span>
          </h1>
          <p className="text-xl text-steel">
            We become your technical co-founder. Equity-aligned partnership for ambitious founders
            who want a true partner, not a vendor.
          </p>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: The Pitch */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-outfit font-bold text-3xl text-void">
              More Than Developers
            </h2>
            <p className="text-steel">
              Traditional agencies bill hours. Freelancers disappear after launch.
              Neither is truly invested in your success.
            </p>
            <p className="text-steel">
              <strong>We&apos;re different.</strong> In a venture partnership, we take equity
              instead of (or alongside) cash. That means our incentives are perfectly aligned
              with yours—we only win when you win.
            </p>
            <p className="text-steel">
              You get a technical co-founder with a 20+ agent development team, deep startup
              experience, and skin in the game. We get the opportunity to build something
              meaningful with exceptional founders.
            </p>
          </motion.div>

          {/* Right: Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-xl p-4 border border-ghost">
                <div className="w-10 h-10 rounded-lg bg-citrus/10 flex items-center justify-center mb-3">
                  <benefit.icon className="w-5 h-5 text-citrus" />
                </div>
                <h3 className="font-outfit font-bold text-sm text-void mb-1">{benefit.title}</h3>
                <p className="text-steel text-xs">{benefit.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partnership Structures */}
      <section className="bg-ghost py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-outfit font-bold text-3xl text-void mb-4">
              Partnership Structures
            </h2>
            <p className="text-steel max-w-2xl mx-auto">
              Every partnership is unique. Here are the typical structures we work with.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.values(partnershipTerms).map((term, index) => (
              <motion.div
                key={term.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-ghost"
              >
                <h3 className="font-outfit font-bold text-xl text-void mb-2">{term.title}</h3>
                {'range' in term && (
                  <p className="text-citrus font-bold text-2xl mb-2">{term.range}</p>
                )}
                <p className="text-steel text-sm mb-4">{term.description}</p>
                <p className="text-sm text-void mb-2"><strong>Best for:</strong> {term.bestFor}</p>
                <p className="text-xs text-steel italic">{term.example}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-steel mt-8"
          >
            Terms are always negotiable based on stage, funding, and scope.
          </motion.p>
        </div>
      </section>

      {/* Ideal For / Not For */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Ideal For */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-green-50 rounded-2xl p-8"
          >
            <h3 className="font-outfit font-bold text-xl text-void mb-6 flex items-center gap-2">
              <Check className="w-6 h-6 text-green-600" />
              Partnership Is Ideal For
            </h3>
            <ul className="space-y-4">
              {idealFor.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-steel">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not For */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-red-50 rounded-2xl p-8"
          >
            <h3 className="font-outfit font-bold text-xl text-void mb-6 flex items-center gap-2">
              <X className="w-6 h-6 text-red-600" />
              Partnership May Not Be Right If
            </h3>
            <ul className="space-y-4">
              {notFor.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-steel">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-steel mt-6">
              Not a fit? Check out our <a href="/services/builds" className="text-citrus hover:underline">Done-For-You Builds</a> instead.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section className="bg-ghost py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-outfit font-bold text-3xl text-void mb-4">
              Application Process
            </h2>
            <p className="text-steel">
              We&apos;re selective about partnerships to ensure we can give each venture
              our full attention.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Initial Application',
                description: 'Fill out our partnership application form. Tell us about your vision, market, and why you\'re the right founder.',
              },
              {
                step: '2',
                title: 'Discovery Call',
                description: 'If there\'s a fit, we\'ll schedule a 45-minute call to dive deeper into your idea and assess alignment.',
              },
              {
                step: '3',
                title: 'Due Diligence',
                description: 'We research your market, competition, and business model. You research us. Mutual fit is essential.',
              },
              {
                step: '4',
                title: 'Term Sheet',
                description: 'If we both want to proceed, we draft a simple term sheet outlining equity, responsibilities, and milestones.',
              },
              {
                step: '5',
                title: 'Kick-off',
                description: 'Paperwork signed, we start building. First sprint typically begins within a week.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 bg-white rounded-xl p-6"
              >
                <div className="w-10 h-10 rounded-full bg-citrus/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-outfit font-bold text-citrus">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-outfit font-bold text-void mb-1">{item.title}</h3>
                  <p className="text-steel text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
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
            Think We&apos;d Be Great Partners?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            We&apos;re always looking for exceptional founders building interesting things.
            If that&apos;s you, let&apos;s talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Apply for Partnership
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button href="/case-studies" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
              See Our Portfolio
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
