'use client';

import { motion } from 'framer-motion';
import { Clock, DollarSign, Users, AlertTriangle } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: 'Months of waiting',
    description: 'A simple MVP takes 3-6 months. A complex product? A year or more.',
  },
  {
    icon: DollarSign,
    title: 'Ballooning costs',
    description: "You're quoted £30k, then it's £50k, then it's £80k with 'just a few more sprints.'",
  },
  {
    icon: Users,
    title: 'Coordination nightmares',
    description: 'Designers, developers, DevOps, QA—everyone working in silos, dropping balls.',
  },
  {
    icon: AlertTriangle,
    title: 'The result?',
    description: 'Most startups run out of money before they ship. Most businesses abandon projects halfway.',
  },
];

export function Problem() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-outfit font-bold text-3xl sm:text-4xl text-void mb-6"
          >
            Traditional Development Is{' '}
            <span className="text-citrus">Broken</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-steel text-lg"
          >
            Building software the old way means pain at every step.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-red-50 flex items-center justify-center">
                <problem.icon className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="font-outfit font-bold text-lg text-void mb-2">
                {problem.title}
              </h3>
              <p className="text-steel text-sm">
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
          className="mt-16 text-center"
        >
          <p className="text-xl text-void font-medium">
            We built something different.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
