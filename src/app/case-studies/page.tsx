'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Terminal, Cpu, Monitor, Sparkles, Zap, Shield, Rocket } from 'lucide-react';
import { caseStudies, CaseStudy } from '@/data/case-studies';
import { Button } from '@/components/ui/Button';

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const isLive = !!study.liveUrl;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group glass-card border-white/5 overflow-hidden hover:border-ember/30 transition-all duration-500 hover:shadow-[0_0_50px_rgba(232,117,26,0.1)]"
    >
      {/* Visual Header */}
      <div className="aspect-video bg-obsidian-light relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
          <Monitor className="w-20 h-20 text-white opacity-5" />
          <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
            <span className="font-outfit font-black text-2xl text-white/10 uppercase tracking-widest">{study.title}</span>
          </div>
        </div>

        <div className="absolute top-4 left-4 flex gap-2">
          {study.featured && (
            <span className="bg-ember/10 border border-ember/30 text-ember text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest backdrop-blur-md">
              Featured Mission
            </span>
          )}
          <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest backdrop-blur-md border ${isLive ? 'bg-green-500/10 border-green-500/30 text-green-500' : 'bg-yellow-500/10 border-yellow-500/30 text-yellow-500'
            }`}>
            {isLive ? 'Live Deployment' : 'Neural Training'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex items-center gap-2 mb-4">
          <Terminal className="w-3 h-3 text-ember" />
          <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">
            {study.category}
          </span>
        </div>

        <h3 className="font-outfit font-black text-2xl text-white mb-4 group-hover:text-ember transition-colors uppercase tracking-tight">
          {study.title}
        </h3>

        <p className="text-gray-500 text-sm mb-8 line-clamp-2 font-light leading-relaxed italic">
          &ldquo;{study.description}&rdquo;
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {study.tech.slice(0, 4).map((tech) => (
            <span key={tech} className="text-[9px] font-black text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-lg uppercase tracking-wider group-hover:border-ember/20 transition-all">
              {tech}
            </span>
          ))}
          {study.tech.length > 4 && (
            <span className="text-[9px] font-black text-ember py-1 uppercase tracking-widest">+{study.tech.length - 4} Assets</span>
          )}
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-white/5">
          <Link
            href={`/case-studies/${study.slug}`}
            className="flex items-center gap-2 text-ember hover:text-white text-xs font-black uppercase tracking-widest transition-all"
          >
            Mission Debrief
            <ArrowRight className="w-4 h-4" />
          </Link>

          {study.liveUrl && (
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-white text-[10px] font-black uppercase tracking-widest transition-all"
            >
              Access Live
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudiesPage() {
  const featuredStudies = caseStudies.filter(s => s.featured);
  const otherStudies = caseStudies.filter(s => !s.featured);

  return (
    <div className="bg-obsidian min-h-screen text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-[800px] h-[600px] bg-ember/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-ember text-[10px] font-black uppercase tracking-[0.3em] mb-6"
          >
            <Shield className="w-3 h-3" />
            Operational History // Vault
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-outfit font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-8 tracking-tighter"
          >
            Deployments of <br /> <span className="text-ember">High Performance.</span>
          </motion.h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed max-w-3xl">
            Witness the neural output of the Agent Orchestra. Every project is an
            architectural milestone in high-speed digital execution.
          </p>
        </div>
      </section>

      {/* Featured Missions */}
      {featuredStudies.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredStudies.map((study, index) => (
              <CaseStudyCard key={study.slug} study={study} index={index} />
            ))}
          </div>
        </section>
      )}

      {/* Historical Logs */}
      <section className="bg-white/[0.02] py-32 border-y border-white/5 relative">
        <div className="absolute inset-0 bg-grid-white/[0.01]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-outfit font-black text-2xl text-white mb-16 uppercase tracking-widest border-l-4 border-ember pl-6">Archive // <span className="text-gray-500">Declassified Projects</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherStudies.map((study, index) => (
              <CaseStudyCard key={study.slug} study={study} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Global Metrics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel p-16 sm:p-24 border-white/5 relative overflow-hidden group shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-ember/10 to-transparent pointer-events-none" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
            {[
              { value: '24M+', label: 'Neural Inferences', icon: Cpu },
              { value: '43', label: 'Specialized Agents', icon: Zap },
              { value: '0.0ms', label: 'Latency Targeted', icon: Rocket },
              { value: '100%', label: 'IP Retention', icon: Shield },
            ].map((stat) => (
              <div key={stat.label} className="text-center group-hover:scale-105 transition-transform duration-500">
                <stat.icon className="w-8 h-8 text-ember mx-auto mb-6 opacity-40" />
                <p className="font-outfit font-black text-5xl text-gradient-forge mb-2 tracking-tighter shadow-ember/20">{stat.value}</p>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 group-hover:text-white transition-colors">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Portfolio CTA */}
      <section className="py-40 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-500 text-[10px] font-black uppercase tracking-widest mb-10">
            <Sparkles className="w-3 h-3 text-ember" />
            Join the Registry
          </div>
          <h2 className="font-outfit font-black text-5xl text-white mb-8 tracking-tighter">
            Architect Your <span className="text-ember">Case Study.</span>
          </h2>
          <p className="text-gray-400 text-xl mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Whether licensing our framework or partnering for venture scale,
            your product belongs in the registry of high-performance architecture.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button href="/contact" size="lg" className="bg-white text-obsidian px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-ember hover:text-white transition-all shadow-2xl">
              Initiate Discovery
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button href="/services" variant="outline" size="lg" className="border-white/10 text-white bg-white/5 backdrop-blur-md px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">
              Compare Tiers
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
