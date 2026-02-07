'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/pricing';

export function CTA() {
  return (
    <section className="py-40 bg-obsidian relative overflow-hidden">
      {/* Intense Background FX */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian opacity-90" />
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-citrus/10 rounded-full blur-[150px] mix-blend-screen"
        />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-12 sm:p-24 text-center border-white/5 relative overflow-hidden group shadow-2xl"
        >
          {/* Subtle light sweep animation */}
          <motion.div
            animate={{
              left: ['-100%', '200%']
            }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
            className="absolute top-0 w-32 h-full bg-white/5 skew-x-12 blur-3xl pointer-events-none mix-blend-overlay"
          />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-citrus/5 border border-citrus/20 text-citrus text-xs font-black uppercase tracking-[0.3em] mb-12 shadow-[0_0_20px_rgba(217,119,87,0.1)] backdrop-blur-md"
            >
              <Terminal className="w-4 h-4" />
              Finalize Initiative
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-outfit font-black text-5xl sm:text-7xl text-white mb-8 leading-[0.9] tracking-tight text-balance"
            >
              Ready to <span className="text-gradient-citrus inline-block">Initiate</span> <br />
              Your Project?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-xl md:text-2xl mb-16 max-w-2xl mx-auto font-light leading-relaxed text-balance"
            >
              Book a free 30-minute Discovery Call. We&apos;ll audit your vision, show you exactly how our Agent Orchestra will execute it, and provide a clear timeline for your launch.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Button
                href={siteConfig.calendlyUrl}
                size="lg"
                className="btn-citrus px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs"
              >
                Book Discovery Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="btn-glow px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs"
              >
                Send Message
                <Sparkles className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer Link check marker */}
        <div className="mt-24 text-center flex flex-col items-center">
          <div className="w-12 h-[1px] bg-white/10 mb-8" />
          <p className="text-[10px] text-gray-600 uppercase tracking-[0.4em] font-black font-mono">
            Agency Operating System v4.0 // Authorized Access Only
          </p>
        </div>
      </div>
    </section>
  );
}
