'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function Problem() {
  return (
    <section className="py-32 bg-obsidian relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
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
        </div>

        {/* Marketing Image Grid — 2 column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-white/10 hover:border-ember/30 transition-all duration-500 hover:shadow-[0_0_60px_rgba(232,117,26,0.1)]"
          >
            <Image
              src="/Logo/marketing-idea.png"
              alt="Your Idea Deserves Better — Old Way vs JonnyAI Way"
              width={1024}
              height={1024}
              className="w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl overflow-hidden border border-white/10 hover:border-ember/30 transition-all duration-500 hover:shadow-[0_0_60px_rgba(232,117,26,0.1)]"
          >
            <Image
              src="/Logo/marketing-savings.png"
              alt="Stop Overpaying For Development — Save Up To 80%"
              width={1024}
              height={1024}
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Transition statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-ember/20 blur-2xl rounded-full" />
            <p className="relative text-3xl md:text-4xl text-white font-outfit font-light tracking-wide">
              We built <span className="text-ember font-black border-b-2 border-ember/30 pb-1">The Antigravity Method</span> to fix this.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
