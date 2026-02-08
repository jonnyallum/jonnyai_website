'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Users, Clock, Shield, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/pricing';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-void">
      {/* Dynamic Aurora Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-void via-[#050510] to-void" />

        {/* Aurora Orbs — Blue, Purple, Pink */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.45, 0.25],
            rotate: [0, 120, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 right-0 w-[900px] h-[900px] bg-vivid-purple/15 rounded-full blur-[150px] -translate-y-1/3 translate-x-1/4"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.35, 0.15],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-electric-blue/12 rounded-full blur-[130px] translate-y-1/3 -translate-x-1/4"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-hot-pink/10 rounded-full blur-[120px]"
        />

        {/* Tech Grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.08) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="max-w-4xl relative z-20">
            {/* Spotlight Glow */}
            <div className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-vivid-purple/8 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-vivid-purple/20 rounded-full backdrop-blur-md mb-10 hover:bg-vivid-purple/10 transition-colors cursor-default shadow-[0_0_20px_rgba(139,92,246,0.1)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hot-pink opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-hot-pink shadow-[0_0_10px_#ec4899]"></span>
              </span>
              <span className="text-ice/80 text-sm font-medium tracking-wide flex items-center gap-2">
                Jai.OS 4.0: Pioneering AI Architecture
                <span className="w-1 h-1 bg-vivid-purple rounded-full animate-pulse mx-1" />
                <span className="text-[10px] text-aurora-pink font-mono uppercase tracking-tighter">Live Pulse Active</span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-outfit font-black text-6xl sm:text-7xl lg:text-8xl text-white leading-[0.95] mb-8 tracking-tighter relative z-10"
            >
              We Build Products <br />
              <span className="text-gradient-aurora animate-pulse-slow relative inline-block">
                10x Faster
                <span className="absolute inset-0 bg-gradient-to-r from-vivid-purple/20 to-hot-pink/20 blur-3xl -z-10" />
              </span> <br />
              with Artificial Intelligence.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl text-frost max-w-2xl mb-12 leading-relaxed font-light text-balance"
            >
              Stop waiting months for developers. Our proprietary <span className="text-white font-medium border-b border-vivid-purple/40">42-Agent Orchestra</span> turns your vision into production-ready software in weeks.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-5 mb-16"
            >
              <Button href="#how-it-works" size="lg" className="btn-aurora text-lg px-10 py-6">
                <Cpu className="w-5 h-5 mr-2" />
                Meet The Orchestra
              </Button>
              <Button href={siteConfig.calendlyUrl} variant="outline" size="lg" className="btn-glow text-lg px-10 py-6">
                Book Discovery Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-10 py-8 border-t border-white/10 relative"
            >
              <div className="absolute top-0 left-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-vivid-purple/30 to-transparent" />

              <div className="flex items-center gap-4 group cursor-default">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:border-vivid-purple/30 group-hover:bg-vivid-purple/10 transition-all duration-300">
                  <Users className="w-6 h-6 text-frost group-hover:text-vivid-purple transition-colors" />
                </div>
                <div>
                  <div className="text-white font-bold font-outfit text-2xl leading-none tracking-tight">42</div>
                  <div className="text-steel text-[10px] mobile:text-xs font-bold uppercase tracking-widest mt-1">Specialised Agents</div>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-default">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:border-electric-blue/30 group-hover:bg-electric-blue/10 transition-all duration-300">
                  <Clock className="w-6 h-6 text-frost group-hover:text-electric-blue transition-colors" />
                </div>
                <div>
                  <div className="text-white font-bold font-outfit text-2xl leading-none tracking-tight">3 Weeks</div>
                  <div className="text-steel text-[10px] mobile:text-xs font-bold uppercase tracking-widest mt-1">Avg. Delivery</div>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-default">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:border-hot-pink/30 group-hover:bg-hot-pink/10 transition-all duration-300">
                  <Shield className="w-6 h-6 text-frost group-hover:text-hot-pink transition-colors" />
                </div>
                <div>
                  <div className="text-white font-bold font-outfit text-2xl leading-none tracking-tight">Enterprise</div>
                  <div className="text-steel text-[10px] mobile:text-xs font-bold uppercase tracking-widest mt-1">Quality Standards</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual — The Prism Constellation */}
          <div className="hidden lg:block relative h-[600px] w-full">
            <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent z-20" />

            {/* Outer orbit — Blue */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-electric-blue/10 rounded-full"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-electric-blue rounded-full blur-[2px] shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-vivid-purple rounded-full blur-[2px] shadow-[0_0_12px_rgba(139,92,246,0.6)]" />
            </motion.div>

            {/* Inner orbit — Pink */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-hot-pink/10 rounded-full"
            >
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-hot-pink rounded-full blur-[2px] shadow-[0_0_12px_rgba(236,72,153,0.6)]" />
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-aurora-pink rounded-full blur-[1px] shadow-[0_0_8px_rgba(244,114,182,0.5)]" />
            </motion.div>

            {/* Innermost orbit — Purple */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-vivid-purple/15 rounded-full"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-vivid-purple rounded-full blur-[1px]" />
            </motion.div>

            {/* Central Core — The Prism */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="relative">
                <div className="w-32 h-32 backdrop-blur-xl rounded-full border border-vivid-purple/30 flex items-center justify-center shadow-[0_0_60px_rgba(139,92,246,0.15),0_0_120px_rgba(236,72,153,0.08)] relative z-10"
                  style={{ background: 'linear-gradient(135deg, rgba(15,16,41,0.8) 0%, rgba(10,11,20,0.9) 100%)' }}
                >
                  {/* Inline Prism SVG — large version */}
                  <svg viewBox="0 0 32 32" fill="none" className="w-16 h-16">
                    <defs>
                      <linearGradient id="hero-prism-l" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                      <linearGradient id="hero-prism-r" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                      <linearGradient id="hero-prism-t" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#a78bfa" />
                        <stop offset="50%" stopColor="#c084fc" />
                        <stop offset="100%" stopColor="#f472b6" />
                      </linearGradient>
                    </defs>
                    <polygon points="16,3 4,20 16,28" fill="url(#hero-prism-l)" opacity="0.95" />
                    <polygon points="16,3 28,20 16,28" fill="url(#hero-prism-r)" opacity="0.9" />
                    <polygon points="16,3 10,13 22,13" fill="url(#hero-prism-t)" opacity="0.7" />
                    <line x1="16" y1="6" x2="16" y2="25" stroke="white" strokeWidth="0.5" opacity="0.3" />
                    <line x1="16" y1="0" x2="16" y2="5" stroke="white" strokeWidth="1" opacity="0.5" />
                    <line x1="8" y1="24" x2="4" y2="30" stroke="#3b82f6" strokeWidth="0.8" opacity="0.6" />
                    <line x1="12" y1="26" x2="10" y2="31" stroke="#8b5cf6" strokeWidth="0.8" opacity="0.6" />
                    <line x1="20" y1="26" x2="22" y2="31" stroke="#ec4899" strokeWidth="0.8" opacity="0.6" />
                    <line x1="24" y1="24" x2="28" y2="30" stroke="#f472b6" strokeWidth="0.8" opacity="0.5" />
                  </svg>
                </div>
                {/* Core Pulse — aurora gradient */}
                <div className="absolute inset-0 rounded-full animate-ping z-0"
                  style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(236,72,153,0.1) 100%)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
