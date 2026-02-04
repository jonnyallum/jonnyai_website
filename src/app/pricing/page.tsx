'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { frameworkPricing, buildPricing, partnershipTerms, addOns, retainers, siteConfig } from '@/data/pricing';

export default function PricingPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-outfit font-bold text-4xl sm:text-5xl text-void mb-6"
        >
          Transparent <span className="text-citrus">Pricing</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-steel max-w-2xl mx-auto"
        >
          No hidden fees. No surprise invoices. Know exactly what you&apos;re paying before we start.
        </motion.p>
      </section>

      {/* Framework Pricing */}
      <section className="py-16 bg-ghost">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-outfit font-bold text-2xl text-void mb-2">Framework License</h2>
          <p className="text-steel mb-8">Deploy our agent architecture in your own projects</p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {frameworkPricing.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-6 ${tier.highlighted ? 'ring-2 ring-citrus shadow-lg' : 'border border-ghost'}`}
              >
                {tier.highlighted && (
                  <p className="text-citrus text-xs font-semibold uppercase mb-2">Most Popular</p>
                )}
                <h3 className="font-outfit font-bold text-lg text-void">{tier.name}</h3>
                <div className="my-4">
                  <span className="font-outfit font-bold text-2xl text-void">{tier.price}</span>
                  {tier.priceNote && (
                    <span className="text-steel text-sm ml-1">{tier.priceNote}</span>
                  )}
                </div>
                <p className="text-steel text-sm mb-4">{tier.description}</p>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-steel">
                      <Check className="w-4 h-4 text-citrus flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  href={tier.ctaLink}
                  variant={tier.highlighted ? 'primary' : 'outline'}
                  size="sm"
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Build Pricing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-outfit font-bold text-2xl text-void mb-2">Done-For-You Builds</h2>
          <p className="text-steel mb-8">We build your product at 10x speed</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {buildPricing.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-6 ${tier.highlighted ? 'ring-2 ring-citrus shadow-lg' : 'border border-ghost'}`}
              >
                {tier.highlighted && (
                  <p className="text-citrus text-xs font-semibold uppercase mb-2">Most Popular</p>
                )}
                <h3 className="font-outfit font-bold text-lg text-void">{tier.name}</h3>
                <div className="my-4">
                  <span className="font-outfit font-bold text-2xl text-void">{tier.price}</span>
                  {tier.priceNote && (
                    <p className="text-steel text-sm">{tier.priceNote}</p>
                  )}
                </div>
                <p className="text-steel text-sm mb-4">{tier.description}</p>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-steel">
                      <Check className="w-4 h-4 text-citrus flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  href={tier.ctaLink}
                  variant={tier.highlighted ? 'primary' : 'outline'}
                  size="sm"
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-steel text-sm mt-6">
            All packages include full source code ownership, documentation, and 30 days post-launch support.
          </p>
        </div>
      </section>

      {/* Venture Partnership */}
      <section className="py-16 bg-ghost">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-outfit font-bold text-2xl text-void mb-2">Venture Partnership</h2>
          <p className="text-steel mb-8">Zero cash upfront—we succeed when you succeed</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {Object.values(partnershipTerms).map((term, index) => (
              <motion.div
                key={term.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-ghost"
              >
                <h3 className="font-outfit font-bold text-lg text-void mb-2">{term.title}</h3>
                {'range' in term && (
                  <p className="font-outfit font-bold text-2xl text-citrus mb-2">{term.range}</p>
                )}
                <p className="text-steel text-sm mb-4">{term.description}</p>
                <p className="text-xs text-steel/70 mb-4">
                  <strong>Best for:</strong> {term.bestFor}
                </p>
                {'example' in term && (
                  <p className="text-xs text-steel italic bg-ghost rounded-lg p-3">
                    {term.example}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button href="/services/partnership">
              Apply for Partnership
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Add-ons & Retainers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Add-ons */}
            <div>
              <h2 className="font-outfit font-bold text-2xl text-void mb-6">Service Add-ons</h2>
              <div className="bg-white rounded-2xl border border-ghost overflow-hidden">
                {addOns.map((addon, i) => (
                  <div
                    key={addon.name}
                    className={`flex justify-between items-center p-4 ${i !== addOns.length - 1 ? 'border-b border-ghost' : ''}`}
                  >
                    <span className="text-steel">{addon.name}</span>
                    <span className="font-outfit font-bold text-void">{addon.rate}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Retainers */}
            <div>
              <h2 className="font-outfit font-bold text-2xl text-void mb-6">Monthly Retainers</h2>
              <div className="space-y-4">
                {retainers.map((retainer) => (
                  <div
                    key={retainer.name}
                    className="bg-white rounded-2xl border border-ghost p-4"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-outfit font-bold text-void">{retainer.name}</span>
                      <span className="font-outfit font-bold text-citrus">{retainer.price}</span>
                    </div>
                    <p className="text-steel text-sm">{retainer.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-ghost">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-outfit font-bold text-2xl text-void mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Do you require deposits?',
                a: 'Yes, we require 50% upfront for Done-For-You builds, with the balance due on delivery. Framework licenses are paid in full upfront.',
              },
              {
                q: 'What if the project scope changes?',
                a: "We define scope clearly in our proposal. If requirements change significantly, we'll provide a change order with updated pricing before proceeding.",
              },
              {
                q: 'Do you offer payment plans?',
                a: 'For builds over £10k, we can discuss milestone-based payments. Contact us to discuss.',
              },
              {
                q: "What's your refund policy?",
                a: "Framework licenses are non-refundable (you receive the materials immediately). For builds, we offer a full refund if you're not satisfied after the first milestone.",
              },
              {
                q: 'Can I hire you on retainer?',
                a: 'Yes. For ongoing development, we offer monthly retainers starting at £100/month. This is ideal for post-launch iteration and maintenance.',
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
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
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-outfit font-bold text-3xl text-void mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-steel text-lg mb-8">
            Book a discovery call to discuss your project and find the right package for you.
          </p>
          <Button href={siteConfig.calendlyUrl} size="lg">
            Book a Discovery Call
          </Button>
        </div>
      </section>
    </div>
  );
}
