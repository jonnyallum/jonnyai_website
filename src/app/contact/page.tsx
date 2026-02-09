'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Calendar, Linkedin, Github, Mail, MapPin, Terminal, Cpu, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/pricing';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  company: z.string().optional(),
  interest: z.string().min(1, 'Please select an interest'),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().min(10, 'Please tell us about your project'),
});

type ContactForm = z.infer<typeof contactSchema>;

const interests = [
  { value: 'framework', label: 'Framework License' },
  { value: 'build', label: 'Done-For-You Build' },
  { value: 'partnership', label: 'Venture Partnership' },
  { value: 'other', label: 'Other' },
];

const budgets = [
  { value: 'under-1k', label: 'Under £1,000' },
  { value: '1k-5k', label: '£1,000 - £5,000' },
  { value: '5k-10k', label: '£5,000 - £10,000' },
  { value: '10k-25k', label: '£10,000 - £25,000' },
  { value: '25k+', label: '£25,000+' },
  { value: 'equity', label: 'Equity / Partnership' },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setSubmitting(true);
    setError(null);

    try {
      const subject = encodeURIComponent(`[JonnyAI] ${data.interest} enquiry from ${data.name}`);
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || 'N/A'}\nInterest: ${data.interest}\nBudget: ${data.budget}\n\n${data.message}`
      );
      window.open(`mailto:${siteConfig.email}?subject=${subject}&body=${body}`, '_self');
      setSubmitted(true);
    } catch (err) {
      console.error('Failed to open mail client:', err);
      setError('Failed to open email. Please email us directly at ' + siteConfig.email);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-obsidian min-h-screen text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-ember/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] mb-8"
          >
            <Terminal className="w-3 h-3 text-ember" />
            Establish Comms
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-outfit font-black text-5xl sm:text-6xl text-white mb-8 tracking-tighter"
          >
            Initiate <span className="text-ember">Contact</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto font-light"
          >
            Secure line established. Send your project directives or book a direct technical audit below.
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-panel p-8 sm:p-12 border-white/5 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <Cpu className="w-24 h-24 text-white" />
            </div>

            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-20 h-20 bg-ember/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-ember/30 animate-pulse">
                  <Send className="w-10 h-10 text-ember" />
                </div>
                <h2 className="font-outfit font-black text-3xl text-white mb-4 uppercase">
                  Data Transmitted
                </h2>
                <p className="text-gray-400 mb-10 font-light">
                  Directives received. Our Chief Architect will review and respond within 24 operational hours.
                </p>
                <Button href="/" className="bg-white text-obsidian px-10 py-4 font-black uppercase tracking-widest text-xs">
                  Return to Dashboard
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">
                      Full Name
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-700 focus:border-ember/50 focus:bg-white/[0.05] outline-none transition-all"
                      placeholder="Your identification"
                    />
                    {errors.name && (
                      <p className="mt-1 text-[10px] font-bold text-red-500 uppercase tracking-tighter">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">
                      Email Address
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-700 focus:border-ember/50 focus:bg-white/[0.05] outline-none transition-all"
                      placeholder="Transmission target"
                    />
                    {errors.email && (
                      <p className="mt-1 text-[10px] font-bold text-red-500 uppercase tracking-tighter">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">
                    Company / Organization
                  </label>
                  <input
                    {...register('company')}
                    type="text"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-700 focus:border-ember/50 focus:bg-white/[0.05] outline-none transition-all"
                    placeholder="Entity name (optional)"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">
                      Project Intent
                    </label>
                    <select
                      {...register('interest')}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white focus:border-ember/50 focus:bg-white/[0.05] outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-obsidian">Select Vector</option>
                      {interests.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-obsidian">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {errors.interest && (
                      <p className="mt-1 text-[10px] font-bold text-red-500 uppercase tracking-tighter">{errors.interest.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">
                      Allocated Capital
                    </label>
                    <select
                      {...register('budget')}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white focus:border-ember/50 focus:bg-white/[0.05] outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-obsidian">Select Range</option>
                      {budgets.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-obsidian">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {errors.budget && (
                      <p className="mt-1 text-[10px] font-bold text-red-500 uppercase tracking-tighter">{errors.budget.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">
                    Project Directives
                  </label>
                  <textarea
                    {...register('message')}
                    rows={6}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-700 focus:border-ember/50 focus:bg-white/[0.05] outline-none transition-all resize-none"
                    placeholder="Describe your vision, timeline, and core requirements..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-[10px] font-bold text-red-500 uppercase tracking-tighter">{errors.message.message}</p>
                  )}
                </div>

                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-xs font-bold uppercase tracking-widest">
                    {error}
                  </div>
                )}

                <Button type="submit" disabled={submitting} className="w-full py-6 rounded-2xl bg-white text-obsidian font-black uppercase tracking-[0.2em] text-xs hover:bg-ember hover:text-white transition-all shadow-xl shadow-white/5">
                  {submitting ? 'Transmitting...' : 'Initiate Transmission'}
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact Info & Calendly */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-12"
          >
            {/* Book Directly */}
            <div className="glass-card p-10 border-ember/20 bg-ember/[0.02] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Calendar className="w-20 h-20 text-white" />
              </div>
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <Sparkles className="w-6 h-6 text-ember animate-pulse" />
                <h2 className="font-outfit font-black text-2xl text-white uppercase tracking-tight">
                  Direct Neural Sync
                </h2>
              </div>
              <p className="text-gray-400 mb-10 font-light leading-relaxed relative z-10">
                Prefer a high-bandwidth discussion? Schedule a 30-minute discovery call directly with our core engineering team.
              </p>
              <Button
                href={siteConfig.calendlyUrl}
                className="w-full py-5 rounded-2xl bg-ember text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-obsidian transition-all shadow-lg shadow-ember/20 relative z-10"
              >
                Book Technical Audit
              </Button>
            </div>

            {/* Contact Details */}
            <div className="glass-panel p-10 border-white/5">
              <h2 className="font-outfit font-black text-xl text-white mb-8 uppercase tracking-widest">
                Support Hub
              </h2>
              <div className="space-y-6">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 text-gray-500 hover:text-ember transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-ember/30">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-mono tracking-tighter">{siteConfig.email}</span>
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-500 hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/30">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <span className="text-sm uppercase font-black tracking-widest">LinkedIn Network</span>
                </a>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-500 hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/30">
                    <Github className="w-4 h-4" />
                  </div>
                  <span className="text-sm uppercase font-black tracking-widest">GitHub Repository</span>
                </a>
                <div className="flex items-center gap-4 text-gray-500 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-xs uppercase font-black tracking-widest">{siteConfig.location}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
