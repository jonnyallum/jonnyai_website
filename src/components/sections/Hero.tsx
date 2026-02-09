'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Users, Clock, Shield, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/pricing';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-void">
      {/* Dynamic Nebula Forge Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-void via-[#050510] to-void" />

        {/* Forge Orbs — Ember, Rose, Blue */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.45, 0.25],
            rotate: [0, 120, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 right-0 w-[900px] h-[900px] rounded-full blur-[150px] -translate-y-1/3 translate-x-1/4"
          style={{ background: 'rgba(232, 117, 26, 0.15)' }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.35, 0.15],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full blur-[130px] translate-y-1/3 -translate-x-1/4"
          style={{ background: 'rgba(59, 130, 246, 0.12)' }}
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: 'rgba(232, 67, 147, 0.10)' }}
        />

        {/* Polygonal Grid — ember-tinted */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'linear-gradient(rgba(232, 117, 26, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(232, 117, 26, 0.08) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="max-w-4xl relative z-20">
            {/* Spotlight Glow */}
            <div className="absolute -top-40 -left-20 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none mix-blend-screen" style={{ background: 'rgba(232, 117, 26, 0.08)' }} />

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-ember/20 rounded-full backdrop-blur-md mb-10 hover:bg-ember/10 transition-colors cursor-default shadow-[0_0_20px_rgba(232,117,26,0.1)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ember opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-ember shadow-[0_0_10px_#e8751a]"></span>
              </span>
              <span className="text-ice/80 text-sm font-medium tracking-wide flex items-center gap-2">
                Jai.OS 4.0: Pioneering AI Architecture
                <span className="w-1 h-1 bg-ember rounded-full animate-pulse mx-1" />
                <span className="text-[10px] text-amber font-mono uppercase tracking-tighter">Live Pulse Active</span>
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
              <span className="text-gradient-forge animate-pulse-slow relative inline-block">
                10x Faster
                <span className="absolute inset-0 blur-3xl -z-10" style={{ background: 'linear-gradient(to right, rgba(232,117,26,0.2), rgba(245,158,11,0.2))' }} />
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
              Stop waiting months for developers. Our proprietary <span className="text-white font-medium border-b border-ember/40">39-Agent Orchestra</span> turns your vision into production-ready software in weeks.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-5 mb-16"
            >
              <Button href="#how-it-works" size="lg" className="btn-forge text-lg px-10 py-6">
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
              <div className="absolute top-0 left-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-ember/30 to-transparent" />

              <div className="flex items-center gap-4 group cursor-default">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:border-ember/30 group-hover:bg-ember/10 transition-all duration-300">
                  <Users className="w-6 h-6 text-frost group-hover:text-ember transition-colors" />
                </div>
                <div>
                  <div className="text-white font-bold font-outfit text-2xl leading-none tracking-tight">39</div>
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
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:border-nebula-rose/30 group-hover:bg-nebula-rose/10 transition-all duration-300">
                  <Shield className="w-6 h-6 text-frost group-hover:text-nebula-rose transition-colors" />
                </div>
                <div>
                  <div className="text-white font-bold font-outfit text-2xl leading-none tracking-tight">Enterprise</div>
                  <div className="text-steel text-[10px] mobile:text-xs font-bold uppercase tracking-widest mt-1">Quality Standards</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual — The Forge Constellation */}
          <div className="hidden lg:block relative h-[600px] w-full">
            <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent z-20" />

            {/* Outer orbit — Ember */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-ember/10 rounded-full"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-ember rounded-full blur-[2px] shadow-[0_0_15px_rgba(232,117,26,0.8)]" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-amber rounded-full blur-[2px] shadow-[0_0_12px_rgba(245,158,11,0.6)]" />
            </motion.div>

            {/* Inner orbit — Rose */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-nebula-rose/10 rounded-full"
            >
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-nebula-rose rounded-full blur-[2px] shadow-[0_0_12px_rgba(232,67,147,0.6)]" />
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-soft-rose rounded-full blur-[1px] shadow-[0_0_8px_rgba(244,114,182,0.5)]" />
            </motion.div>

            {/* Innermost orbit — Blue */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-electric-blue/15 rounded-full"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-electric-blue rounded-full blur-[1px]" />
            </motion.div>

            {/* Central Core — The Forge Prism */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="relative">
                <div className="w-32 h-32 backdrop-blur-xl rounded-full border border-ember/30 flex items-center justify-center shadow-[0_0_60px_rgba(232,117,26,0.15),0_0_120px_rgba(232,67,147,0.08)] relative z-10"
                  style={{ background: 'linear-gradient(135deg, rgba(12,18,37,0.8) 0%, rgba(8,11,22,0.9) 100%)' }}
                >
                  {/* Inline Prism SVG — Nebula Forge colors */}
                  <svg viewBox="0 0 32 32" fill="none" className="w-16 h-16">
                    <defs>
                      <linearGradient id="hero-prism-l" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#e8751a" />
                        <stop offset="100%" stopColor="#f59e0b" />
                      </linearGradient>
                      <linearGradient id="hero-prism-r" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#f59e0b" />
                        <stop offset="100%" stopColor="#e84393" />
                      </linearGradient>
                      <linearGradient id="hero-prism-t" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#fbbf24" />
                        <stop offset="50%" stopColor="#f59e0b" />
                        <stop offset="100%" stopColor="#e8751a" />
                      </linearGradient>
                    </defs>
                    <polygon points="16,3 4,20 16,28" fill="url(#hero-prism-l)" opacity="0.95" />
                    <polygon points="16,3 28,20 16,28" fill="url(#hero-prism-r)" opacity="0.9" />
                    <polygon points="16,3 10,13 22,13" fill="url(#hero-prism-t)" opacity="0.7" />
                    <line x1="16" y1="6" x2="16" y2="25" stroke="white" strokeWidth="0.5" opacity="0.3" />
                    <line x1="16" y1="0" x2="16" y2="5" stroke="white" strokeWidth="1" opacity="0.5" />
                    <line x1="8" y1="24" x2="4" y2="30" stroke="#e8751a" strokeWidth="0.8" opacity="0.6" />
                    <line x1="12" y1="26" x2="10" y2="31" stroke="#f59e0b" strokeWidth="0.8" opacity="0.6" />
                    <line x1="20" y1="26" x2="22" y2="31" stroke="#e84393" strokeWidth="0.8" opacity="0.6" />
                    <line x1="24" y1="24" x2="28" y2="30" stroke="#3b82f6" strokeWidth="0.8" opacity="0.5" />
                  </svg>
                </div>
                {/* Core Pulse — forge gradient */}
                <div className="absolute inset-0 rounded-full animate-ping z-0"
                  style={{ background: 'linear-gradient(135deg, rgba(232,117,26,0.1) 0%, rgba(245,158,11,0.1) 100%)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
