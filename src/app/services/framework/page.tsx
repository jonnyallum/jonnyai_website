'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check, Code, Zap, Shield, Database, Layers, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { frameworkPricing } from '@/data/pricing';

const features = [
  {
    icon: Layers,
    title: 'Full-Stack Architecture',
    description: 'Next.js 16 + React 19 + TypeScript. Production-ready from the first commit.',
  },
  {
    icon: Database,
    title: 'Database & Auth',
    description: 'Supabase integration with row-level security, auth flows, and real-time subscriptions.',
  },
  {
    icon: Zap,
    title: 'AI Orchestration',
    description: 'Multi-agent system with task routing, memory banks, and self-improving workflows.',
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'OWASP-compliant security practices, input validation, and audit logging.',
  },
  {
    icon: Cloud,
    title: 'Deployment Ready',
    description: 'Vercel/Railway deployment configs, CI/CD pipelines, and environment management.',
  },
  {
    icon: Code,
    title: 'Clean Code',
    description: 'ESLint, Prettier, TypeScript strict mode. Code that scales and maintainability that lasts.',
  },
];

const included = [
  'Complete monorepo structure',
  'Authentication (email, OAuth, magic link)',
  'Database schema and migrations',
  'Payment integration (Stripe)',
  'Email templates (Resend)',
  'Admin dashboard',
  'User management',
  'API route templates',
  'Component library (40+ components)',
  'Form validation (Zod)',
  'Error handling and logging',
  'Analytics integration',
  'SEO optimization',
  'Responsive design',
  'Dark mode support',
  'Accessibility (WCAG 2.1)',
];

export default function FrameworkPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <p className="text-citrus font-medium mb-4">Framework License</p>
          <h1 className="font-outfit font-bold text-4xl sm:text-5xl text-void mb-6">
            Build It Yourself, <span className="text-citrus">10x Faster</span>
          </h1>
          <p className="text-xl text-steel">
            Skip months of boilerplate and architecture decisions. Get a battle-tested foundation
            and start building your unique features from day one.
          </p>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 border border-ghost hover:border-citrus/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-citrus/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-citrus" />
              </div>
              <h3 className="font-outfit font-bold text-lg text-void mb-2">{feature.title}</h3>
              <p className="text-steel text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-ghost py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-outfit font-bold text-3xl text-void mb-4">
              Everything You Need
            </h2>
            <p className="text-steel max-w-2xl mx-auto">
              No more piecing together tutorials and hoping they work together.
              It&apos;s all here, integrated and tested.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {included.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white rounded-lg p-4">
                <Check className="w-5 h-5 text-citrus flex-shrink-0" />
                <span className="text-sm text-void">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-outfit font-bold text-3xl text-void mb-4">
            Choose Your Package
          </h2>
          <p className="text-steel max-w-2xl mx-auto">
            From solo builders to funded startups, we have a package that fits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {frameworkPricing.slice(0, 3).map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-2xl p-8 border ${
                tier.highlighted ? 'border-citrus ring-2 ring-citrus/20' : 'border-ghost'
              }`}
            >
              {tier.highlighted && (
                <span className="inline-block bg-citrus text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="font-outfit font-bold text-xl text-void mb-2">{tier.name}</h3>
              <p className="text-steel text-sm mb-4">{tier.description}</p>
              <p className="font-outfit font-bold text-3xl text-void mb-6">
                {tier.price}
                {tier.price !== 'Custom' && <span className="text-sm font-normal text-steel"> one-time</span>}
              </p>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-citrus flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-steel">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                href="/contact"
                variant={tier.highlighted ? 'primary' : 'outline'}
                className="w-full"
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-steel mt-8"
        >
          Need something custom? <a href="/contact" className="text-citrus hover:underline">Let&apos;s talk</a>
        </motion.p>
      </section>

      {/* FAQ */}
      <section className="bg-ghost py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-outfit font-bold text-3xl text-void mb-4">
              Common Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'Do I need to be technical?',
                a: 'Yes, the framework is designed for developers who can write TypeScript/React code. If you want us to build for you, check out our Done-For-You Builds.',
              },
              {
                q: 'Can I use this for client projects?',
                a: 'Yes! The standard license allows unlimited projects for yourself or your clients. You just can\'t resell the framework itself.',
              },
              {
                q: 'What happens after the support period?',
                a: 'You still have full access to the framework and any updates released during your support period. Extended support is available as an add-on.',
              },
              {
                q: 'Is there a refund policy?',
                a: 'Due to the digital nature of the product, we don\'t offer refunds. But we\'re happy to answer any questions before you purchase.',
              },
            ].map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6"
              >
                <h3 className="font-outfit font-bold text-void mb-2">{faq.q}</h3>
                <p className="text-steel text-sm">{faq.a}</p>
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
            Ready to Build?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Join dozens of founders who&apos;ve shipped faster with our framework.
            Get started today and launch in weeks, not months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Get the Framework
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button href="/services" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
              Compare Options
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
