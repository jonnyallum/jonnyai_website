'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './Button';
import { siteConfig } from '@/data/pricing';

/** The Prism — JonnyAI brand icon. Geometric light refractor. */
function PrismIcon({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="prism-face-left" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="prism-face-right" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        <linearGradient id="prism-face-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="50%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#f472b6" />
        </linearGradient>
        <linearGradient id="prism-refract" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ec4899" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      {/* Left face — deep blue to purple */}
      <polygon points="16,3 4,20 16,28" fill="url(#prism-face-left)" opacity="0.95" />
      {/* Right face — purple to pink */}
      <polygon points="16,3 28,20 16,28" fill="url(#prism-face-right)" opacity="0.9" />
      {/* Top highlight — bright aurora */}
      <polygon points="16,3 10,13 22,13" fill="url(#prism-face-top)" opacity="0.7" />
      {/* Internal refraction line */}
      <line x1="16" y1="6" x2="16" y2="25" stroke="white" strokeWidth="0.5" opacity="0.3" />
      {/* Light beam entering */}
      <line x1="16" y1="0" x2="16" y2="5" stroke="white" strokeWidth="1" opacity="0.5" />
      {/* Refracted spectrum lines exiting */}
      <line x1="8" y1="24" x2="4" y2="30" stroke="#3b82f6" strokeWidth="0.8" opacity="0.6" />
      <line x1="12" y1="26" x2="10" y2="31" stroke="#8b5cf6" strokeWidth="0.8" opacity="0.6" />
      <line x1="20" y1="26" x2="22" y2="31" stroke="#ec4899" strokeWidth="0.8" opacity="0.6" />
      <line x1="24" y1="24" x2="28" y2="30" stroke="#f472b6" strokeWidth="0.8" opacity="0.5" />
    </svg>
  );
}

const navItems = [
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Framework License', href: '/services/framework' },
      { label: 'Done-For-You Builds', href: '/services/builds' },
      { label: 'Venture Partnership', href: '/services/partnership' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'The Orchestra', href: '/orchestra' },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled ? 'py-4 pointer-events-none' : 'py-6 pointer-events-auto'
        }`}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ${scrolled ? 'max-w-5xl px-0' : ''}`}>
        <div className={`
          relative flex items-center justify-between h-16 px-6 transition-all duration-500 pointer-events-auto
          ${scrolled
            ? 'bg-void/60 backdrop-blur-3xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_60px_rgba(232,117,26,0.05)] rounded-full mt-2'
            : 'bg-transparent border-transparent rounded-none'
          }
        `}>
          {/* Logo — The Prism + Wordmark */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <PrismIcon className="w-9 h-9 group-hover:scale-110 transition-transform duration-300" />
              {/* Subtle glow behind icon */}
              <div className="absolute inset-0 bg-ember/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <span className="font-outfit font-black text-xl text-white tracking-tighter">
              Jonny<span className="text-gradient-forge">Ai</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button className={`flex items-center gap-1 text-sm font-medium transition-colors ${servicesOpen ? 'text-ember' : 'text-frost hover:text-white'}`}>
                      {item.label}
                      <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className="absolute top-full left-0 mt-4 w-64 bg-abyss/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-ember/15 py-3 overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-ember/5 to-nebula-rose/5 pointer-events-none" />
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-6 py-3 text-sm text-frost hover:bg-ember/10 hover:text-white transition-all"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-frost hover:text-white transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-ember to-nebula-rose transition-all group-hover:w-full" />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              href={siteConfig.calendlyUrl}
              size="sm"
              className="bg-gradient-to-r from-ember to-nebula-rose text-white rounded-xl px-6 hover:shadow-[0_0_25px_rgba(232,117,26,0.4)] transition-all font-bold border border-white/10"
            >
              Book Call
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 mx-4 mt-2 bg-abyss/95 backdrop-blur-2xl rounded-3xl border border-ember/15 shadow-3xl overflow-hidden"
          >
            <div className="px-6 py-8 space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <p className="text-frost text-xs font-black uppercase tracking-widest mb-4">{item.label}</p>
                      <div className="grid grid-cols-1 gap-2 pl-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block py-2 text-lg text-white font-outfit"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-2 text-xl text-white font-outfit font-bold"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-6">
                <Button href={siteConfig.calendlyUrl} className="w-full btn-forge py-4 rounded-2xl">
                  Book Discovery Call
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
