'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Users, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/pricing';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ghost via-white to-ghost" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-citrus/10 rounded-full text-citrus text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 bg-citrus rounded-full animate-pulse" />
            Agent Orchestra: 20+ AI Specialists
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-outfit font-extrabold text-4xl sm:text-5xl lg:text-6xl text-void leading-tight mb-6"
          >
            We Build Products{' '}
            <span className="text-citrus">10x Faster</span>{' '}
            Than Traditional Development
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-steel max-w-2xl mb-8"
          >
            Our proprietary AI agent orchestra—20+ specialised agents working in concert—turns your ideas into shipped products in weeks, not months.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button href="#how-it-works" size="lg">
              See How It Works
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button href={siteConfig.calendlyUrl} variant="outline" size="lg">
              Book a Discovery Call
            </Button>
          </motion.div>

          {/* Social proof bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-6 text-sm text-steel"
          >
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-citrus" />
              <span>20+ Specialised AI Agents</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-citrus" />
              <span>3-Week Average MVP Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-citrus" />
              <span>UK-Based. Enterprise Quality.</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-gradient-to-l from-citrus/5 to-transparent rounded-l-full blur-3xl" />
    </section>
  );
}
