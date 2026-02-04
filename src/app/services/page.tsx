'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code, Wrench, Handshake, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const services = [
  {
    id: 'framework',
    icon: Code,
    title: 'Framework License',
    subtitle: 'Build it yourself, faster',
    description: 'License our battle-tested AgOS framework and build your own products with enterprise-grade architecture from day one.',
    features: [
      'Complete starter kit with authentication, payments, database',
      'Multi-agent AI orchestration built-in',
      'Deployment pipelines and CI/CD configured',
      'Documentation and video tutorials',
      '90 days of Discord support',
    ],
    ideal: 'Technical founders who want to move fast without reinventing the wheel.',
    price: 'From £497',
    href: '/services/framework',
    color: 'bg-blue-500',
  },
  {
    id: 'builds',
    icon: Wrench,
    title: 'Done-For-You Builds',
    subtitle: 'We build, you launch',
    description: 'Hand off your project to the Agent Orchestra. We\'ll design, develop, and deploy a production-ready product.',
    features: [
      'Full-stack development (web, mobile, API)',
      'UI/UX design included',
      'QA and security testing',
      '30-day post-launch support',
      'Source code ownership',
    ],
    ideal: 'Founders with clear requirements who want expert execution.',
    price: 'From £4,997',
    href: '/services/builds',
    color: 'bg-citrus',
  },
  {
    id: 'partnership',
    icon: Handshake,
    title: 'Venture Partnership',
    subtitle: 'Build together, win together',
    description: 'We become your technical co-founder. Equity-aligned partnership for ambitious founders with big ideas.',
    features: [
      'Full product development',
      'Strategic guidance and roadmap planning',
      'Ongoing iteration and scaling support',
      'Access to our network and resources',
      'Skin in the game—we succeed when you succeed',
    ],
    ideal: 'Visionary founders building category-defining companies.',
    price: 'Equity-based',
    href: '/services/partnership',
    color: 'bg-purple-500',
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <p className="text-citrus font-medium mb-4">Our Services</p>
          <h1 className="font-outfit font-bold text-4xl sm:text-5xl text-void mb-6">
            Three Paths to <span className="text-citrus">Launch</span>
          </h1>
          <p className="text-xl text-steel">
            Whether you want to build it yourself, have us build for you, or partner on the journey—we have a path that fits your needs and ambitions.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-ghost overflow-hidden hover:border-citrus/30 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Left: Info */}
                <div className="p-8 lg:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="font-outfit font-bold text-2xl text-void">{service.title}</h2>
                      <p className="text-steel">{service.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-steel mb-6">{service.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-citrus flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-steel">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-steel">
                    <strong>Ideal for:</strong> {service.ideal}
                  </p>
                </div>

                {/* Right: CTA */}
                <div className="bg-ghost p-8 flex flex-col justify-center items-center text-center">
                  <p className="text-sm text-steel mb-2">Starting at</p>
                  <p className="font-outfit font-bold text-3xl text-void mb-6">{service.price}</p>
                  <Button href={service.href} className="w-full">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison Quick View */}
      <section className="bg-ghost py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-outfit font-bold text-3xl text-void mb-4">
              Not Sure Which Path?
            </h2>
            <p className="text-steel max-w-2xl mx-auto">
              Here&apos;s a quick comparison to help you decide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full bg-white rounded-xl overflow-hidden">
              <thead>
                <tr className="border-b border-ghost">
                  <th className="px-6 py-4 text-left text-sm font-medium text-steel"></th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-void">Framework</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-citrus">Builds</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-purple-600">Partnership</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'You build the product', framework: true, builds: false, partnership: false },
                  { label: 'We build the product', framework: false, builds: true, partnership: true },
                  { label: 'Upfront payment', framework: true, builds: true, partnership: false },
                  { label: 'Equity involved', framework: false, builds: false, partnership: true },
                  { label: 'Ongoing support', framework: '90 days', builds: '30 days', partnership: 'Continuous' },
                  { label: 'Strategic guidance', framework: false, builds: false, partnership: true },
                  { label: 'Best for', framework: 'Technical founders', builds: 'Busy founders', partnership: 'Visionaries' },
                ].map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? 'bg-ghost/30' : ''}>
                    <td className="px-6 py-4 text-sm font-medium text-void">{row.label}</td>
                    <td className="px-6 py-4 text-center text-sm">
                      {typeof row.framework === 'boolean' ? (
                        row.framework ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-steel">—</span>
                      ) : (
                        <span className="text-steel">{row.framework}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center text-sm">
                      {typeof row.builds === 'boolean' ? (
                        row.builds ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-steel">—</span>
                      ) : (
                        <span className="text-steel">{row.builds}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center text-sm">
                      {typeof row.partnership === 'boolean' ? (
                        row.partnership ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-steel">—</span>
                      ) : (
                        <span className="text-steel">{row.partnership}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
            Still Have Questions?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Book a free 30-minute discovery call. We&apos;ll help you figure out the best path
            for your specific situation.
          </p>
          <Button href="/contact" size="lg">
            Book Discovery Call
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
