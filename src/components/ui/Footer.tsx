import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
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
    <footer className="bg-void text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="font-outfit font-bold text-2xl">
              Jonny<span className="text-citrus">Ai</span>
            </Link>
            <p className="mt-4 text-white/60 text-sm">
              AI-powered development studio. Build 10x faster with our Agent Orchestra.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-citrus transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-citrus transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-white/60 hover:text-citrus transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-outfit font-bold text-sm uppercase tracking-wide mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-outfit font-bold text-sm uppercase tracking-wide mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-outfit font-bold text-sm uppercase tracking-wide mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Jonny Allum Innovations Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
