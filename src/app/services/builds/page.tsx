'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check, Wrench, Palette, Code, Shield, Rocket, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { buildPricing } from '@/data/pricing';

const process = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Discovery Call',
    description: 'We dive deep into your vision, requirements, and goals. You leave with a clear project scope.',
  },
  {
    step: '02',
    icon: Palette,
    title: 'Design Sprint',
    description: 'Pixel (our design agent) creates wireframes and mockups. You approve before any code is written.',
  },
  {
    step: '03',
    icon: Code,
    title: 'Build Phase',
    description: 'The Agent Orchestra executes. You get weekly demos and can provide feedback throughout.',
  },
  {
    step: '04',
    icon: Shield,
    title: 'QA & Security',
    description: 'Sentinel runs comprehensive testing. Every feature is verified, every vulnerability addressed.',
  },
  {
    step: '05',
    icon: Rocket,
    title: 'Launch',
    description: 'Deploy goes live. We handle DNS, SSL, monitoring setup. You\'re live and ready for users.',
  },
  {
    step: '06',
    icon: Wrench,
    title: 'Support',
    description: '30 days of post-launch support included. Bug fixes, minor adjustments, peace of mind.',
  },
];

const deliverables = [
  'Complete source code (you own it)',
  'Admin dashboard',
  'User authentication flows',
  'Database with migrations',
  'API documentation',
  'Deployment to your hosting',
  'SSL certificate setup',
  'Basic analytics integration',
  'SEO optimization',
  'Mobile-responsive design',
  'Performance optimization',
  'Security audit report',
];

export default function BuildsPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <p className="text-citrus font-medium mb-4">Done-For-You Builds</p>
          <h1 className="font-outfit font-bold text-4xl sm:text-5xl text-void mb-6">
            We Build, <span className="text-citrus">You Launch</span>
          </h1>
          <p className="text-xl text-steel">
            Hand off your project to the Agent Orchestra. 20+ AI specialists work in parallel
            to deliver your product faster than any traditional team—at a fraction of the cost.
          </p>
        </motion.div>
      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-outfit font-bold text-3xl text-void mb-4">
            Our Process
          </h2>
          <p className="text-steel max-w-2xl mx-auto">
            Transparent, collaborative, and designed to get you from idea to launch
            with minimal friction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {process.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 border border-ghost hover:border-citrus/30 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-citrus/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-citrus" />
                </div>
                <span className="font-outfit font-bold text-citrus/50 text-2xl">{item.step}</span>
              </div>
              <h3 className="font-outfit font-bold text-lg text-void mb-2">{item.title}</h3>
              <p className="text-steel text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-ghost py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-outfit font-bold text-3xl text-void mb-4">
                What You Get
              </h2>
              <p className="text-steel mb-8">
                Every build includes everything you need to launch and grow.
                No hidden costs, no surprise fees.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-citrus flex-shrink-0" />
                    <span className="text-sm text-void">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-ghost"
            >
              <h3 className="font-outfit font-bold text-xl text-void mb-6">
                Typical Timeline
              </h3>
              <div className="space-y-4">
                {[
                  { phase: 'Discovery & Scoping', duration: '1-2 days' },
                  { phase: 'Design Phase', duration: '3-5 days' },
                  { phase: 'Development', duration: '2-3 weeks' },
                  { phase: 'QA & Testing', duration: '3-5 days' },
                  { phase: 'Launch & Handoff', duration: '1-2 days' },
                ].map((item, i) => (
                  <div key={item.phase} className="flex items-center justify-between py-3 border-b border-ghost last:border-0">
                    <span className="text-void">{item.phase}</span>
                    <span className="text-citrus font-medium">{item.duration}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-steel mt-6">
                * Timelines vary based on project complexity. We&apos;ll provide exact estimates
                during the discovery call.
              </p>
            </motion.div>
          </div>
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
            Build Packages
          </h2>
          <p className="text-steel max-w-2xl mx-auto">
            From MVPs to enterprise applications, we have a package that fits your scope and budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {buildPricing.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-2xl p-6 border ${
                tier.highlighted ? 'border-citrus ring-2 ring-citrus/20' : 'border-ghost'
              }`}
            >
              {tier.highlighted && (
                <span className="inline-block bg-citrus text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="font-outfit font-bold text-lg text-void mb-2">{tier.name}</h3>
              <p className="text-steel text-sm mb-4 h-12">{tier.description}</p>
              <p className="font-outfit font-bold text-2xl text-void mb-4">
                {tier.price}
              </p>

              <ul className="space-y-2 mb-6">
                {tier.features.slice(0, 5).map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-citrus flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-steel">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                href="/contact"
                variant={tier.highlighted ? 'primary' : 'outline'}
                className="w-full"
                size="sm"
              >
                Get Quote
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Guarantee */}
      <section className="bg-citrus/5 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-full bg-citrus/20 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-citrus" />
            </div>
            <h2 className="font-outfit font-bold text-3xl text-void mb-4">
              Our Guarantee
            </h2>
            <p className="text-steel text-lg mb-8">
              We don&apos;t consider a project done until you&apos;re completely satisfied.
              If something isn&apos;t right, we fix it—no questions asked, no extra charges.
            </p>
            <p className="text-void font-medium">
              30-day post-launch support included with every build.
            </p>
          </motion.div>
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
            Ready to Build Your Product?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Book a free discovery call. We&apos;ll discuss your project, provide a timeline estimate,
            and answer any questions you have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Book Discovery Call
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button href="/case-studies" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
              View Our Work
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
