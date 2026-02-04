'use client';

import { motion } from 'framer-motion';
import { Code, Wrench, Handshake, ArrowRight } from 'lucide-react';
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
    color: 'from-blue-500 to-cyan-500',
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
    cta: 'Start Your Project',
    href: '/services/builds',
    color: 'from-citrus to-orange-500',
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
    color: 'from-purple-500 to-pink-500',
  },
];

export function ServiceCards() {
  return (
    <section className="py-24 bg-ghost" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-outfit font-bold text-3xl sm:text-4xl text-void mb-4"
          >
            Choose Your Path
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-steel text-lg max-w-2xl mx-auto"
          >
            Whether you want our tools, our team, or our partnership—we have a path that fits.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`
                relative bg-white rounded-2xl p-8
                ${service.highlighted ? 'ring-2 ring-citrus shadow-xl shadow-citrus/10' : 'border border-ghost shadow-sm'}
              `}
            >
              {service.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-citrus text-white text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-outfit font-bold text-xl text-void mb-1">
                {service.title}
              </h3>
              <p className="text-citrus text-sm font-medium mb-4">
                {service.subtitle}
              </p>
              <p className="text-steel text-sm mb-6">
                {service.description}
              </p>

              {/* Price */}
              <p className="font-outfit font-bold text-2xl text-void mb-6">
                {service.price}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-steel">
                    <span className="text-citrus mt-0.5">+</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                href={service.href}
                variant={service.highlighted ? 'primary' : 'outline'}
                className="w-full"
              >
                {service.cta}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
