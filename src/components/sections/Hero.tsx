'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Users, Clock, Shield, Sparkles, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/pricing';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-obsidian">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        {/* Deep Obsidian Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-[#0a0a0c] to-obsidian" />

        {/* Animated Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-electric-purple/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neon-cyan/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"
        />

        {/* Tech Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-citrus opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-citrus"></span>
              </span>
              <span className="text-gray-300 text-sm font-medium tracking-wide">
                Jai.OS 4.0: Pioneering AI Architecture
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-outfit font-black text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] mb-8 tracking-tight"
            >
              We Build Products <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-citrus via-[#ff8f6b] to-electric-purple animate-pulse-slow">
                10x Faster
              </span> <br />
              with Artificial Intelligence.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-400 max-w-xl mb-10 leading-relaxed font-light"
            >
              Stop waiting months for developers. Our proprietary <span className="text-white font-medium">40-Agent Orchestra</span> turns your vision into production-ready software in weeks.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-5 mb-14"
            >
              <Button href="#how-it-works" size="lg" className="bg-citrus hover:bg-citrus/90 text-white shadow-lg shadow-citrus/20 border-none">
                <Cpu className="w-5 h-5 mr-2" />
                Meet The Orchestra
              </Button>
              <Button href={siteConfig.calendlyUrl} variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 hover:border-white/40">
                Book Discovery Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-8 py-6 border-t border-white/10"
            >
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-electric-purple/20 transition-colors">
                  <Users className="w-5 h-5 text-gray-400 group-hover:text-electric-purple transition-colors" />
                </div>
                <div>
                  <div className="text-white font-bold font-outfit text-lg leading-none">40</div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider mt-1">Specialised Agents</div>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-neon-cyan/20 transition-colors">
                  <Clock className="w-5 h-5 text-gray-400 group-hover:text-neon-cyan transition-colors" />
                </div>
                <div>
                  <div className="text-white font-bold font-outfit text-lg leading-none">3 Weeks</div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider mt-1">Avg. Delivery</div>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-citrus/20 transition-colors">
                  <Shield className="w-5 h-5 text-gray-400 group-hover:text-citrus transition-colors" />
                </div>
                <div>
                  <div className="text-white font-bold font-outfit text-lg leading-none">Enterprise</div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider mt-1">Quality Standards</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual (Abstract Representation of Orchestra) */}
          <div className="hidden lg:block relative h-[600px] w-full">
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent z-20" />

            {/* Abstract Code/Agent Visualization would go here - for now using a glowing orbital effect */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-citrus rounded-full blur-[2px] shadow-[0_0_15px_rgba(217,119,87,0.8)]" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-electric-purple rounded-full blur-[2px]" />
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-white/10 rounded-full"
            >
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-neon-cyan rounded-full blur-[2px]" />
            </motion.div>

            {/* Central Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="relative">
                <div className="w-32 h-32 bg-white/5 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.05)] relative z-10">
                  <Sparkles className="w-12 h-12 text-white/80" />
                </div>
                {/* Core Pulse */}
                <div className="absolute inset-0 bg-white/10 rounded-full animate-ping z-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
