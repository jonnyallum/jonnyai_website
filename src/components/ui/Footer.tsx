import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/data/pricing';

const footerLinks = {
  services: [
    { label: 'Framework License', href: '/services/framework' },
    { label: 'Bespoke Packages', href: '/services/framework#bespoke' },
    { label: 'Done-For-You Builds', href: '/services/builds' },
    { label: 'Venture Partnership', href: '/services/partnership' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'The Orchestra', href: '/orchestra' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-void border-t border-ember/10 relative overflow-hidden">
      {/* Subtle aurora floor glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-ember/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-[40%] h-[200px] bg-nebula-rose/3 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-1 space-y-8">
            <Link href="/" className="font-outfit font-black text-2xl text-white tracking-tighter block">
              Jonny<span className="text-gradient-forge">Ai</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed font-light text-balance">
              UK-based AI studio. We build enterprise-grade prototypes and products at the speed of thought using a multi-agent orchestrated framework.
            </p>
            <div className="flex gap-4">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-nebula-rose hover:bg-nebula-rose/5 hover:border-nebula-rose/20 transition-all duration-300 group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-outfit font-black text-xs uppercase tracking-[0.2em] text-white/40 mb-8 border-b border-white/5 pb-4 inline-block">
              Services
            </h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-frost hover:text-ember transition-colors text-sm flex items-center group font-medium"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-outfit font-black text-xs uppercase tracking-[0.2em] text-white/40 mb-8 border-b border-white/5 pb-4 inline-block">
              Explore
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-outfit font-black text-xs uppercase tracking-[0.2em] text-white/40 mb-8 border-b border-white/5 pb-4 inline-block">
              HQ Location
            </h4>
            <ul className="space-y-6 text-sm text-gray-500">
              <li className="flex flex-col gap-1">
                <div className="text-white font-bold font-outfit">Digital First Studio</div>
                <div className="font-light">{siteConfig.location}</div>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="text-soft-rose hover:text-white transition-colors font-mono text-xs bg-ember/5 border border-ember/10 px-3 py-2 rounded-lg inline-block">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-1">
            <p className="text-gray-600 text-[10px] font-mono tracking-wide">
              // &copy; {new Date().getFullYear()} Jonny Allum Innovations Ltd.
            </p>
            <p className="text-gray-700 text-[10px] font-mono tracking-wide">
              // UK REGISTERED STUDIO No. 15488582
            </p>
          </div>

          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-gray-600">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>

          <div className="flex flex-col items-end text-right">
            <span className="text-ember/60 text-[9px] font-black uppercase tracking-[0.2em] mb-2 font-outfit">
              Neural Build Registry
            </span>
            <div className="flex items-center gap-3 text-[10px] font-bold text-frost/50 uppercase tracking-tighter bg-white/5 px-4 py-2 rounded-full border border-ember/10">
              <span className="w-1.5 h-1.5 rounded-full bg-nebula-rose animate-pulse" />
              <span>Jai.OS 4.0 Active</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
