'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/pricing';

export function CTA() {
  return (
    <section className="py-24 bg-void relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(217,119,87,0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(139,92,246,0.3) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6"
        >
          Ready to Build Something?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/70 text-lg mb-10 max-w-2xl mx-auto"
        >
          Book a free 30-minute discovery call. We&apos;ll assess your project, show you how our orchestra would tackle it, and give you a clear path forward—whether that&apos;s licensing, building, or partnering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button href={siteConfig.calendlyUrl} size="lg">
            Book Your Discovery Call
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button href="/contact" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-void">
            Send a Message
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
