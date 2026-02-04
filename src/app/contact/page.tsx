'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Calendar, Linkedin, Github, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/pricing';
import { submitContactForm } from '@/lib/supabase';

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
      await submitContactForm({
        name: data.name,
        email: data.email,
        company: data.company || undefined,
        interest: data.interest,
        budget: data.budget,
        message: data.message,
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Failed to submit form:', err);
      setError('Failed to send message. Please try again or email us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="font-outfit font-bold text-4xl sm:text-5xl text-void mb-6">
            Let&apos;s Build <span className="text-citrus">Something</span>
          </h1>
          <p className="text-xl text-steel">
            Book a free 30-minute discovery call or send us a message. We respond within 24 hours.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            {submitted ? (
              <div className="bg-green-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="font-outfit font-bold text-2xl text-void mb-4">
                  Message Sent!
                </h2>
                <p className="text-steel mb-6">
                  Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <Button href="/" variant="outline">
                  Back to Home
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-void mb-2">
                    Name *
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-ghost focus:border-citrus focus:ring-1 focus:ring-citrus outline-none transition-colors"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-void mb-2">
                    Email *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-ghost focus:border-citrus focus:ring-1 focus:ring-citrus outline-none transition-colors"
                    placeholder="you@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-void mb-2">
                    Company
                  </label>
                  <input
                    {...register('company')}
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-ghost focus:border-citrus focus:ring-1 focus:ring-citrus outline-none transition-colors"
                    placeholder="Your company (optional)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-void mb-2">
                    What are you interested in? *
                  </label>
                  <select
                    {...register('interest')}
                    className="w-full px-4 py-3 rounded-lg border border-ghost focus:border-citrus focus:ring-1 focus:ring-citrus outline-none transition-colors bg-white"
                  >
                    <option value="">Select an option</option>
                    {interests.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.interest && (
                    <p className="mt-1 text-sm text-red-500">{errors.interest.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-void mb-2">
                    Budget Range *
                  </label>
                  <select
                    {...register('budget')}
                    className="w-full px-4 py-3 rounded-lg border border-ghost focus:border-citrus focus:ring-1 focus:ring-citrus outline-none transition-colors bg-white"
                  >
                    <option value="">Select a range</option>
                    {budgets.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.budget && (
                    <p className="mt-1 text-sm text-red-500">{errors.budget.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-void mb-2">
                    Tell us about your project *
                  </label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-ghost focus:border-citrus focus:ring-1 focus:ring-citrus outline-none transition-colors resize-none"
                    placeholder="What are you looking to build? What's your timeline? Any other details..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>

                {error && (
                  <div className="p-4 bg-red-50 rounded-lg text-red-600 text-sm">
                    {error}
                  </div>
                )}

                <Button type="submit" disabled={submitting} className="w-full">
                  {submitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact Info & Calendly */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Book Directly */}
            <div className="bg-ghost rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-citrus" />
                <h2 className="font-outfit font-bold text-xl text-void">
                  Prefer to Book Directly?
                </h2>
              </div>
              <p className="text-steel mb-6">
                Schedule a 30-minute discovery call at a time that suits you.
              </p>
              <Button href={siteConfig.calendlyUrl} className="w-full">
                Book Discovery Call
              </Button>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-2xl p-8 border border-ghost">
              <h2 className="font-outfit font-bold text-xl text-void mb-6">
                Contact Details
              </h2>
              <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-steel hover:text-citrus transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  {siteConfig.email}
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-steel hover:text-citrus transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-steel hover:text-citrus transition-colors"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <div className="flex items-center gap-3 text-steel">
                  <MapPin className="w-5 h-5" />
                  {siteConfig.location}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
