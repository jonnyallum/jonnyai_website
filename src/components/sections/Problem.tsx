'use client';

import { motion } from 'framer-motion';
import { Clock, DollarSign, Users, AlertTriangle, XCircle } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: 'Months of waiting',
    description: 'A traditional MVP takes 3-6 months. In the AI era, that is an eternity for your competitors to overtake you.',
    color: 'text-red-400',
    bg: 'bg-red-500/10'
  },
  {
    icon: DollarSign,
    title: 'Ballooning costs',
    description: "Traditional agencies quote £30k, but scope creep and 'sprint extensions' often double that before launch.",
    color: 'text-orange-400',
    bg: 'bg-orange-500/10'
  },
  {
    icon: Users,
    title: 'Coordination nightmares',
    description: 'Designers, devs, and QA working in silos. Miscommunications lead to "spaghetti code" and broken features.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10'
  },
  {
    icon: AlertTriangle,
    title: 'The Result?',
    description: '90% of startups fail before they ship because they ran out of cash waiting for a basic prototype.',
    color: 'text-red-500',
    bg: 'bg-red-600/20'
  },
];

export function Problem() {
  return (
    <section className="py-32 bg-obsidian relative">
      {/* Decorative vertical lines */}
      <div className="absolute inset-0 flex justify-around opacity-5 pointer-events-none">
        <div className="w-px h-full bg-white" />
        <div className="w-px h-full bg-white" />
        <div className="w-px h-full bg-white" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md"
          >
            <XCircle className="w-3 h-3 text-red-500" />
            The Status Quo
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-outfit font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-8 tracking-tight"
          >
            Traditional Development <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-red-400">
              Is Fundamentally Broken
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-xl leading-relaxed font-light text-balance"
          >
            Stop burning runway on slow, manual processes. The "Old Way" is the fastest way to kill your business.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative p-8 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 group"
            >
              <div className={`w-14 h-14 mb-8 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 ring-1 ring-white/10 group-hover:ring-white/20`}>
                <problem.icon className={`w-6 h-6 ${problem.color} transition-colors duration-300`} />
              </div>
              <h3 className="font-outfit font-bold text-xl text-white mb-4 group-hover:text-gray-200 transition-colors">
                {problem.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-32 text-center"
        >
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-citrus/20 blur-2xl rounded-full" />
            <p className="relative text-3xl md:text-4xl text-white font-outfit font-light tracking-wide">
              We built <span className="text-citrus font-black border-b-2 border-citrus/30 pb-1">The Antigravity Method</span> to fix this.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
