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
    <footer className="bg-obsidian border-t border-white/5 relative overflow-hidden">
      {/* Subtle floor glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-citrus/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="font-outfit font-black text-2xl text-white tracking-tighter">
              Jonny<span className="text-citrus">Ai</span>
            </Link>
            <p className="mt-6 text-gray-500 text-sm leading-relaxed font-light">
              UK-based AI studio. We build enterprise-grade prototypes and products at the speed of thought using a multi-agent orchestrated framework.
            </p>
            <div className="mt-8 flex gap-6">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-citrus hover:border-citrus/50 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-citrus hover:border-citrus/50 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-outfit font-black text-xs uppercase tracking-[0.2em] text-white mb-8">
              Services
            </h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-outfit font-black text-xs uppercase tracking-[0.2em] text-white mb-8">
              Explore
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-outfit font-black text-xs uppercase tracking-[0.2em] text-white mb-8">
              HQ Location
            </h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <div className="mb-1 text-white font-medium">Digital First Studio</div>
                <div>{siteConfig.location}</div>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="text-citrus hover:text-white transition-colors font-mono">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs font-mono">
            // &copy; {new Date().getFullYear()} Jonny Allum Innovations Ltd.
          // UK REGISTERED STUDIO
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-gray-700">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
          <div className="flex flex-col items-end text-right">
            <span className="text-citrus/40 text-[10px] font-black uppercase tracking-widest mb-1">Neural Build Registry</span>
            <div className="flex gap-3 text-[9px] font-bold text-gray-500 uppercase tracking-tighter">
              <span>@Conductor</span>
              <span>@JonnyAI</span>
              <span>@Pixel</span>
              <span>@Sentinel</span>
              <span className="text-citrus/60">Jai.OS 4.0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
