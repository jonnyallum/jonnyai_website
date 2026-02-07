'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { Button } from './Button';
import { siteConfig } from '@/data/pricing';

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
            ? 'bg-obsidian/60 backdrop-blur-3xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] rounded-full mt-2'
            : 'bg-transparent border-transparent rounded-none'
          }
        `}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-citrus rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-citrus/20">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-outfit font-black text-xl text-white tracking-tighter">
              Jonny<span className="text-citrus">Ai</span>
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
                    <button className={`flex items-center gap-1 text-sm font-medium transition-colors ${servicesOpen ? 'text-citrus' : 'text-gray-400 hover:text-white'}`}>
                      {item.label}
                      <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className="absolute top-full left-0 mt-4 w-64 bg-black/90 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/10 py-3 overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-citrus/5 to-transparent pointer-events-none" />
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-6 py-3 text-sm text-gray-400 hover:bg-white/5 hover:text-citrus transition-all"
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
                    className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-citrus transition-all group-hover:w-full" />
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
              className="bg-white text-obsidian rounded-xl px-6 hover:bg-citrus hover:text-white transition-all font-bold"
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
            className="md:hidden absolute top-full left-0 right-0 mx-4 mt-2 bg-obsidian-light/95 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-3xl overflow-hidden"
          >
            <div className="px-6 py-8 space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <p className="text-gray-500 text-xs font-black uppercase tracking-widest mb-4">{item.label}</p>
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
                <Button href={siteConfig.calendlyUrl} className="w-full bg-citrus text-white py-4 rounded-2xl">
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
