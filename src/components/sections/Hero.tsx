'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Clock, Shield, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/pricing';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Clean Professional Background — Focus on Brand Logo */}
      <div className="absolute inset-0 z-[1]">
        {/* Deep Void Base */}
        <div className="absolute inset-0 bg-[#020205]" />

        {/* Subtle Static Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020205_90%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-ember/20 rounded-full backdrop-blur-md mb-10 hover:bg-ember/10 transition-colors cursor-default shadow-[0_0_30px_rgba(232,117,26,0.1)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ember opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-ember shadow-[0_0_10px_#e8751a]"></span>
          </span>
          <span className="text-ice/80 text-sm font-medium tracking-wide">
            Jai.OS 4.0: Pioneering AI Architecture
          </span>
        </motion.div>

        {/* Hero Brand Logo — Programmatic God-Tier Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mb-14 max-w-4xl"
        >
          {/* Enhanced Aura Projection */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(232,117,26,0.2)_0%,rgba(232,117,26,0.05)_50%,transparent_80%)] blur-[120px] animate-pulse"
            />
          </div>

          <Image
            src="/Logo/jonnyai-hero-transparent.png"
            alt="JonnyAi — Jonny Allum Innovations Ltd"
            width={1200}
            height={480}
            className="relative w-full h-auto drop-shadow-[0_0_80px_rgba(232,117,26,0.4)]"
            priority
          />
        </motion.div>

        {/* Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-outfit font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[0.95] mb-6 tracking-tighter"
        >
          An AI Architecture Studio <br className="hidden md:block" />
          That Builds {' '}
          <span className="text-gradient-forge">10x Faster</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-frost max-w-2xl mx-auto mb-12 leading-relaxed font-light text-balance"
        >
          Stop waiting months for developers. Our proprietary{' '}
          <span className="text-white font-medium border-b border-ember/40">44-Agent Orchestra</span>{' '}
          turns your vision into production-ready software in weeks.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-5 justify-center mb-16"
        >
          <Button href="/orchestra" size="lg" className="btn-forge text-lg px-10 py-6">
            <Cpu className="w-5 h-5 mr-2" />
            Meet The Orchestra
          </Button>
          <Button href={siteConfig.calendlyUrl} variant="outline" size="lg" className="btn-glow text-lg px-10 py-6">
            Book Discovery Call
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>

        {/* Social Proof — glass strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="inline-flex flex-wrap justify-center gap-8 sm:gap-12 py-6 px-8 bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl"
        >
          <div className="flex items-center gap-3 group cursor-default">
            <div className="p-2.5 bg-white/5 rounded-xl border border-white/5 group-hover:border-ember/30 group-hover:bg-ember/10 transition-all duration-300">
              <Users className="w-5 h-5 text-frost group-hover:text-ember transition-colors" />
            </div>
            <div className="text-left">
              <div className="text-white font-bold font-outfit text-xl leading-none tracking-tight">44</div>
              <div className="text-steel text-[10px] font-bold uppercase tracking-widest mt-0.5">Specialised Agents</div>
            </div>
          </div>

          <div className="flex items-center gap-3 group cursor-default">
            <div className="p-2.5 bg-white/5 rounded-xl border border-white/5 group-hover:border-electric-blue/30 group-hover:bg-electric-blue/10 transition-all duration-300">
              <Clock className="w-5 h-5 text-frost group-hover:text-electric-blue transition-colors" />
            </div>
            <div className="text-left">
              <div className="text-white font-bold font-outfit text-xl leading-none tracking-tight">3 Weeks</div>
              <div className="text-steel text-[10px] font-bold uppercase tracking-widest mt-0.5">Avg. Delivery</div>
            </div>
          </div>

          <div className="flex items-center gap-3 group cursor-default">
            <div className="p-2.5 bg-white/5 rounded-xl border border-white/5 group-hover:border-nebula-rose/30 group-hover:bg-nebula-rose/10 transition-all duration-300">
              <Shield className="w-5 h-5 text-frost group-hover:text-nebula-rose transition-colors" />
            </div>
            <div className="text-left">
              <div className="text-white font-bold font-outfit text-xl leading-none tracking-tight">Enterprise</div>
              <div className="text-steel text-[10px] font-bold uppercase tracking-widest mt-0.5">Quality Standards</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void to-transparent z-10" />
    </section>
  );
}
