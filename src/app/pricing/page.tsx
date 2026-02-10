'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight, ShieldCheck, Zap, TrendingUp, HelpCircle, Server, Settings, Plus } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { frameworkPricing, buildPricing, partnershipTerms, websiteManagement, hosting, addOns, siteConfig } from '@/data/pricing';

export default function PricingPage() {
  return (
    <div className="bg-obsidian min-h-screen text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-electric-purple/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-black uppercase tracking-widest mb-8"
          >
            <ShieldCheck className="w-3 h-3 text-ember" />
            Transparent Investment Tiers
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-outfit font-black text-5xl sm:text-6xl text-white mb-8 tracking-tighter"
          >
            Transparent <span className="text-ember">Investment</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed"
          >
            No hidden fees. No legacy overhead. You pay for the results our Agent Orchestra delivers, not for junior developer training hours.
          </motion.p>
        </div>
      </section>

      {/* Framework Pricing */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-outfit font-black text-3xl text-white mb-4 uppercase tracking-tight">Framework License</h2>
            <p className="text-gray-500 max-w-2xl">Deploy our proprietary multi-agent architecture within your own projects or internal teams.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {frameworkPricing.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`glass-panel p-8 relative transition-all duration-300 ${tier.highlighted ? 'border-ember/40 bg-ember/5' : 'border-white/5 hover:border-white/20'}`}
              >
                {tier.highlighted && (
                  <div className="absolute top-0 right-10 -translate-y-1/2 px-3 py-1 bg-ember text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                    Recommended
                  </div>
                )}
                <h3 className="font-outfit font-bold text-lg text-white mb-2">{tier.name}</h3>
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="font-outfit font-black text-3xl text-white">{tier.price}</span>
                  {tier.priceNote && <span className="text-gray-600 text-[10px] uppercase font-bold">{tier.priceNote}</span>}
                </div>
                <p className="text-gray-500 text-xs leading-relaxed mb-6 h-12 overflow-hidden">{tier.description}</p>
                <ul className="space-y-3 mb-8 h-48 overflow-y-auto custom-scrollbar">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
                      <Check className="w-3 h-3 text-ember flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  href={tier.ctaLink}
                  className={`w-full py-4 rounded-xl text-[10px] font-black uppercase tracking-widest ${tier.highlighted ? 'bg-ember text-white' : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white hover:text-black'}`}
                >
                  {tier.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Build Pricing */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-outfit font-black text-3xl text-white mb-4 uppercase tracking-tight">Done-For-You Builds</h2>
            <p className="text-gray-500 max-w-2xl">We execute the build using our orchestra. You own the code, the IP, and the competitive advantage.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {buildPricing.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass-card p-10 relative transition-all duration-300 ${tier.highlighted ? 'border-ember/40 bg-ember/5 ring-1 ring-ember/20' : 'border-white/5'}`}
              >
                {tier.highlighted && (
                  <div className="absolute top-0 left-10 -translate-y-1/2 px-4 py-1 bg-ember text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                    High Demand
                  </div>
                )}
                <h3 className="font-outfit font-bold text-xl text-white mb-2">{tier.name}</h3>
                <div className="mb-6 flex flex-col">
                  <span className="font-outfit font-black text-4xl text-white">{tier.price}</span>
                  {tier.priceNote && <span className="text-gray-600 text-[10px] uppercase font-bold mt-1">{tier.priceNote}</span>}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">{tier.description}</p>
                <ul className="space-y-4 mb-10">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <Zap className="w-4 h-4 text-ember flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  href={tier.ctaLink}
                  className={`w-full py-5 rounded-2xl text-xs font-black uppercase tracking-widest ${tier.highlighted ? 'bg-white text-obsidian shadow-xl shadow-white/5' : 'bg-white/5 text-white border-white/10 hover:bg-white hover:text-black'}`}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex items-center justify-center gap-8 py-6 bg-white/[0.02] border border-white/10 rounded-2xl">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <ShieldCheck className="w-4 h-4 text-ember" /> Full Source IP Ownership
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <ShieldCheck className="w-4 h-4 text-ember" /> Technical Documentation
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <ShieldCheck className="w-4 h-4 text-ember" /> 30-Day Launch Support
            </div>
          </div>
        </div>
      </section>

      {/* Venture Partnership */}
      <section className="py-32 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-outfit font-black text-4xl text-white mb-4 italic uppercase tracking-tighter">Venture <span className="text-ember">Partnership</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">High-stakes collaboration for validated ideas. We build for equity when the mission is worth the risk.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 px-4 sm:px-0">
            {Object.values(partnershipTerms).map((term, index) => (
              <motion.div
                key={(term as any).title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-10 border-white/5 flex flex-col items-center text-center group hover:bg-white/[0.05] transition-all"
              >
                <TrendingUp className="w-10 h-10 text-ember mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-outfit font-black text-xl text-white mb-4 uppercase tracking-tight">{(term as any).title}</h3>
                {'range' in term && (
                  <p className="font-outfit font-black text-4xl text-white mb-4 tracking-tighter">{(term as any).range}</p>
                )}
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">{(term as any).description}</p>
                <div className="mt-auto pt-6 border-t border-white/5 w-full">
                  <p className="text-[10px] text-gray-600 uppercase font-black mb-1 tracking-widest">Ideal Target</p>
                  <p className="text-white text-xs font-bold">{(term as any).bestFor}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button href="/services/partnership" className="btn-glow text-white px-12 py-5 rounded-2xl text-xs font-black uppercase tracking-widest">
              Apply for Partnership Support
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Website Management */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <Settings className="w-8 h-8 text-ember" />
              <h2 className="font-outfit font-black text-3xl text-white uppercase tracking-tight">Website Management</h2>
            </div>
            <p className="text-gray-500 max-w-2xl">Ongoing support and development to keep your site running smoothly and evolving with your business.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {websiteManagement.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass-card p-10 relative transition-all duration-300 ${tier.highlighted ? 'border-ember/40 bg-ember/5 ring-1 ring-ember/20' : 'border-white/5'}`}
              >
                {tier.highlighted && (
                  <div className="absolute top-0 left-10 -translate-y-1/2 px-4 py-1 bg-ember text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                    Popular
                  </div>
                )}
                <h3 className="font-outfit font-bold text-xl text-white mb-2">{tier.name}</h3>
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="font-outfit font-black text-4xl text-white">{tier.price}</span>
                  <span className="text-gray-600 text-sm">{tier.period}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">{tier.description}</p>
                <ul className="space-y-3 mb-10">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <Check className="w-4 h-4 text-ember flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  href={`/contact?interest=management-${tier.id}`}
                  className={`w-full py-4 rounded-xl text-xs font-black uppercase tracking-widest ${tier.highlighted ? 'bg-white text-obsidian' : 'bg-white/5 text-white border-white/10 hover:bg-white hover:text-black'}`}
                >
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hosting */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <Server className="w-8 h-8 text-ember" />
              <h2 className="font-outfit font-black text-3xl text-white uppercase tracking-tight">Hosting</h2>
            </div>
            <p className="text-gray-500 max-w-2xl">Reliable, fast hosting with the infrastructure your project needs. All plans include SSL and CDN.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hosting.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass-card p-10 relative transition-all duration-300 ${tier.highlighted ? 'border-ember/40 bg-ember/5 ring-1 ring-ember/20' : 'border-white/5'}`}
              >
                {tier.highlighted && (
                  <div className="absolute top-0 left-10 -translate-y-1/2 px-4 py-1 bg-ember text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="font-outfit font-bold text-xl text-white mb-2">{tier.name}</h3>
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="font-outfit font-black text-4xl text-white">{tier.price}</span>
                  <span className="text-gray-600 text-sm">{tier.period}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">{tier.description}</p>
                <ul className="space-y-3 mb-10">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <Check className="w-4 h-4 text-ember flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  href={`/contact?interest=hosting-${tier.id}`}
                  className={`w-full py-4 rounded-xl text-xs font-black uppercase tracking-widest ${tier.highlighted ? 'bg-white text-obsidian' : 'bg-white/5 text-white border-white/10 hover:bg-white hover:text-black'}`}
                >
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <Plus className="w-8 h-8 text-ember" />
              <h2 className="font-outfit font-black text-3xl text-white uppercase tracking-tight">Add-Ons</h2>
            </div>
            <p className="text-gray-500 max-w-2xl">Enhance your project with these one-time services or ongoing extras.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-panel p-6 border-white/5 hover:border-ember/30 transition-all group"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-outfit font-bold text-white group-hover:text-ember transition-colors">{addon.name}</h3>
                  <span className="font-outfit font-black text-ember text-lg">{addon.price}</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-obsidian border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-16">
            <HelpCircle className="w-8 h-8 text-ember" />
            <h2 className="font-outfit font-black text-4xl text-white tracking-tighter">
              Common <span className="text-gray-500">Queries</span>
            </h2>
          </div>

          <div className="space-y-4">
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
              {
                q: 'Do you work with international clients?',
                a: 'Absolutely. We are based in Emsworth, Hampshire, but our workforce is 100% remote-first. We support clients globally across all time zones using high-velocity asynchronous communication.',
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card p-8 border-white/5 hover:bg-white/5 group transition-all"
              >
                <h3 className="font-outfit font-bold text-white mb-3 group-hover:text-ember transition-colors">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Closer */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-ember/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-outfit font-black text-4xl sm:text-5xl text-white mb-8 tracking-tighter">
            Ready to <span className="text-ember">Initiate</span> Your Project?
          </h2>
          <p className="text-gray-400 text-xl mb-12 font-light max-w-2xl mx-auto">
            Book a discovery call to discuss your vision and find the right investment package for your launch.
          </p>
          <Button href={siteConfig.calendlyUrl} className="bg-white text-obsidian px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-ember hover:text-white transition-all shadow-2xl">
            Book Discovery Call
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
