'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check, Handshake, Target, TrendingUp, Users, Lightbulb, Shield, X, Sparkles, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { partnershipTerms } from '@/data/pricing';

const benefits = [
  { icon: Target, title: 'Total Technical Hub', description: 'Design, architecture, and deployment handled. You scale the vision.' },
  { icon: Lightbulb, title: 'Strategic Velocity', description: 'Access to years of startup data. Avoid the "Quiet Failures" of early ventures.' },
  { icon: TrendingUp, title: 'Equity Alignment', description: 'Zero misaligned incentives. We only win when the project hits category dominance.' },
  { icon: Users, title: 'Ecosystem Access', description: 'Introductions to our network of investors, advisors, and technical partners.' },
  { icon: Shield, title: 'Continuous Iteration', description: 'Long-arc partnership. We don\'t leave after launch; we scale with the traffic.' },
  { icon: Handshake, title: 'Skin In The Game', description: 'We aren\'t vendors. We are co-founders with a 21-agent orchestra behind us.' },
];

const idealFor = [
  'First-time founders with high-conviction market data',
  'Domain experts transitioning into technical ventures',
  'Funded startups needing an immediate CTO-level hub',
  'Category-defining ideas requiring rapid neural execution',
];

const notFor = [
  'Founders looking for a cheap development vendor',
  'Ideas without clear market validation/traction',
  'Project owners not prepared for equity dilution',
  'Short-term consulting or minor iterative work',
];

export default function PartnershipPage() {
  return (
    <div className="bg-obsidian min-h-screen text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-[800px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-nebula-rose text-[10px] font-black uppercase tracking-[0.3em] mb-6"
          >
            <Handshake className="w-3 h-3" />
            Venture // Partnership
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-outfit font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-8 tracking-tighter"
          >
            Architecting <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">Shared Destinies.</span>
          </motion.h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed max-w-3xl">
            We don&apos;t bill hours. We build empires. The Venture Partnership is an elite equity-aligned
            model for ambitious founders who need a technical co-founder with rapid velocity.
          </p>
        </div>
      </section>

      {/* The Pitch */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="font-outfit font-black text-4xl text-white uppercase tracking-tighter">Beyond <span className="text-gray-500">Traditional Agency.</span></h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Agencies want to maximize margin. Freelancers want to maximize convenience.
              <span className="text-white font-medium"> We want to maximize equity value.</span>
            </p>
            <div className="space-y-4">
              <p className="text-gray-500 text-sm italic">
                By taking skin in the game, our incentives move from volume to quality.
                Every modular decision, every agent workflow, and every deployment is optimized
                for the long-term success of the venture.
              </p>
              <p className="text-gray-500 text-sm italic">
                You get the full power of the 21-agent orchestra and Jonny&apos;s architectural lead
                for a fraction of the upfront capital.
              </p>
            </div>
            <Button href="/contact" className="bg-white text-obsidian px-10 py-4 font-black uppercase tracking-widest text-xs">
              Request Venture Audit
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-8 border-white/5 hover:bg-white/[0.03] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 border border-purple-500/20 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-5 h-5 text-nebula-rose" />
                </div>
                <h3 className="font-outfit font-bold text-sm text-white mb-2 uppercase tracking-tight">{benefit.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Modules */}
      <section className="bg-white/[0.02] py-32 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="font-outfit font-black text-4xl text-white mb-6 uppercase tracking-tighter">
              Partnership <span className="text-purple-500">Protocols</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-light">Negotiable frameworks balanced for venture stage and technical scope.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.values(partnershipTerms).map((term, index) => (
              <motion.div
                key={term.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-12 border-white/5 hover:border-purple-500/30 transition-all flex flex-col group"
              >
                <h3 className="font-outfit font-black text-2xl text-white mb-4 uppercase tracking-tight">{term.title}</h3>
                {'range' in term && (
                  <p className="text-nebula-rose font-outfit font-black text-3xl mb-4 italic tracking-tighter">{term.range}</p>
                )}
                <p className="text-gray-600 text-sm mb-10 h-16">{term.description}</p>
                <div className="mt-auto pt-8 border-t border-white/5">
                  <p className="text-[10px] font-black tracking-widest text-gray-700 uppercase mb-2">Ideal Vector:</p>
                  <p className="text-xs text-white font-bold leading-relaxed">{term.bestFor}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal / Not Ideal Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Ideal For */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-12 border-green-500/10 bg-green-500/[0.01]"
          >
            <h3 className="font-outfit font-black text-xl text-white mb-10 flex items-center gap-3 uppercase tracking-tighter">
              <Sparkles className="w-6 h-6 text-green-500" />
              Target Ventures
            </h3>
            <ul className="space-y-6">
              {idealFor.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-500" />
                  </div>
                  <span className="text-gray-400 text-sm font-light leading-relaxed italic">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not For */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-12 border-red-500/10 bg-red-500/[0.01]"
          >
            <h3 className="font-outfit font-black text-xl text-white mb-10 flex items-center gap-3 uppercase tracking-tighter">
              <X className="w-6 h-6 text-red-500" />
              Negative Vectors
            </h3>
            <ul className="space-y-6">
              {notFor.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-red-500" />
                  </div>
                  <span className="text-gray-400 text-sm font-light leading-relaxed italic">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Application Sequence */}
      <section className="bg-white/[0.02] py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-outfit font-black text-4xl text-white mb-4 uppercase tracking-tighter">
              Selection <span className="text-purple-500">Pipeline</span>
            </h2>
            <p className="text-gray-500 font-light italic">We accept fewer than 5% of partnership applications per quarter.</p>
          </motion.div>

          <div className="space-y-4">
            {[
              { step: '01', title: 'Directive Application', description: 'Fill out our secure portal form. We require detailed data on market size, vision, and team.' },
              { step: '02', icon: Handshake, title: 'Discovery Sync', description: 'If selected, a 45-minute architectural audit call with Jonny to assess mutual alignment.' },
              { step: '03', title: 'Market Diligence', description: 'Our agents run a 72-hour deep-dive on your market, competition, and technical feasibility.' },
              { step: '04', title: 'Operational Term Sheet', description: 'Drafting of the partnership structure, equity allocation, and technical roadmap.' },
              { step: '05', title: 'Neural Launch', description: 'Infrastructure established. First sprint initiated within 5 operational days.' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-8 glass-card p-10 border-white/5 hover:bg-white/[0.03] transition-all group items-center"
              >
                <div className="w-16 h-16 rounded-3xl bg-purple-500/10 flex items-center justify-center flex-shrink-0 border border-purple-500/20 group-hover:scale-110 transition-transform">
                  <span className="font-outfit font-black text-nebula-rose text-xl">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-outfit font-black text-lg text-white mb-2 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA CLOSER */}
      <section className="py-40 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-20 border-white/5 bg-purple-500/[0.02] shadow-[0_0_100px_rgba(168,85,247,0.05)]"
          >
            <h2 className="font-outfit font-black text-5xl text-white mb-8 tracking-tighter">
              Ready to <span className="text-purple-500 italic">Venture?</span>
            </h2>
            <p className="text-gray-400 text-xl mb-12 font-light max-w-2xl mx-auto leading-relaxed">
              We seek exceptional founders building category-defining ventures.
              If that is you, the Partnership Protocol is your portal to scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button href="/contact" size="lg" className="bg-white text-obsidian px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-purple-500 hover:text-white transition-all shadow-2xl">
                Apply for Partnership
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button href="/case-studies" variant="outline" size="lg" className="border-white/10 text-white bg-white/5 backdrop-blur-md px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">
                Witness Results
                <Cpu className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
