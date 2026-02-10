'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Code, Wrench, Handshake, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const services = [
  {
    icon: Code,
    title: 'License The Framework',
    subtitle: 'For technical founders and AI-forward teams',
    description: 'Get access to the same multi-agent system we use internally. Complete agent definitions, SOPs, and architecture documentation.',
    price: 'From £497',
    features: [
      'Complete agent definitions and SOPs',
      'Architecture documentation',
      'Setup guides for Claude, GPT, or Google ADK',
      'Community access and updates',
    ],
    cta: 'Get The Framework',
    href: '/services/framework',
    color: 'from-blue-500 to-indigo-600',
    border: 'border-blue-500/20',
  },
  {
    icon: Wrench,
    title: 'Done-For-You Builds',
    subtitle: 'We build your product at 10x speed',
    description: 'We build your product using our agent orchestra. You get enterprise-quality software in a fraction of the time and cost.',
    price: 'From £4,997',
    features: [
      'Full-stack web and mobile applications',
      'AI-powered features and integrations',
      'Ongoing support and iteration',
      'Delivered in weeks, not months',
    ],
    cta: 'Start Your Build',
    href: '/services/builds',
    color: 'from-ember to-amber',
    border: 'border-ember/30',
    highlighted: true,
  },
  {
    icon: Handshake,
    title: 'Venture Partnership',
    subtitle: 'We build for equity',
    description: 'We believe in your idea enough to build it for equity. Zero upfront cost—we succeed when you succeed.',
    price: 'Equity-based',
    features: [
      'Full product build at no cash cost',
      'Equity stake (typically 15-25%)',
      'Ongoing technical partnership',
      'Ideal for validated ideas',
    ],
    cta: 'Pitch Your Idea',
    href: '/services/partnership',
    color: 'from-purple-500 to-fuchsia-600',
    border: 'border-purple-500/20',
  },
];

export function ServiceCards() {
  return (
    <section className="py-32 bg-obsidian-light relative overflow-hidden" id="services">
      {/* Background glow for the whole section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-ember/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-ember font-mono text-sm tracking-[0.2em] uppercase mb-4"
          >
            Engagement Models
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-outfit font-black text-4xl sm:text-5xl text-white mb-6"
          >
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Acceleration Path</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Whether you want our tools, our team, or our partnership—we have a path that fits your current stage.
          </motion.p>
        </div>

        {/* Marketing Visual Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-all duration-500"
          >
            <Image src="/Logo/marketing-framework.png" alt="Build Your Own Agent Team — License The Framework" width={1024} height={1024} className="w-full h-auto" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl overflow-hidden border border-white/10 hover:border-ember/30 transition-all duration-500"
          >
            <Image src="/Logo/marketing-founders.png" alt="Built For Founders By A Founder Who Gets It" width={1024} height={1024} className="w-full h-auto" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-500"
          >
            <Image src="/Logo/marketing-equity.png" alt="We Build For Equity — Your Technical Co-Founder" width={1024} height={1024} className="w-full h-auto" />
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
              }}
              className={`
                group relative overflow-hidden rounded-[2.5rem] p-10 
                border transition-all duration-500 glass-card
                ${service.highlighted
                  ? 'border-ember/40 bg-ember/[0.03] shadow-[0_20px_60px_-15px_rgba(232,117,26,0.15)]'
                  : 'border-white/10 hover:border-white/20'
                }
              `}
            >
              {/* Spotlight Effect */}
              <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(255,255,255,0.06), transparent 40%)`,
                }}
              />

              {service.highlighted && (
                <div className="absolute -top-1 px-8 py-2 bg-ember text-white text-[10px] font-black uppercase tracking-widest rounded-b-xl left-10 shadow-[0_5px_15px_rgba(232,117,26,0.4)] z-20">
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-10 shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 relative z-10 ring-4 ring-white/5`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title & Sub */}
              <div className="mb-8 relative z-10">
                <h3 className="font-outfit font-black text-2xl text-white mb-2 uppercase tracking-tight group-hover:text-ember transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  {service.subtitle}
                </p>
              </div>

              {/* Price */}
              <div className="mb-10 flex items-baseline gap-1 relative z-10">
                <span className="font-outfit font-black text-4xl text-white tracking-tight">{service.price}</span>
                <span className="text-gray-600 text-sm">/ start</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-12 relative z-10">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    <div className="mt-1 w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-ember/50 group-hover:bg-ember/10 transition-all">
                      <Check className="w-3 h-3 text-ember" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="relative z-10">
                <Button
                  href={service.href}
                  className={`
                    w-full py-6 rounded-2xl font-black uppercase tracking-widest text-xs transition-all duration-300
                    ${service.highlighted
                      ? 'btn-forge'
                      : 'btn-glow'
                    }
                  `}
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
