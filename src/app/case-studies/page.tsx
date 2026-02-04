'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { caseStudies, CaseStudy } from '@/data/case-studies';
import { Button } from '@/components/ui/Button';

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const isLive = !!study.liveUrl;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-2xl border border-ghost overflow-hidden hover:border-citrus/30 transition-all hover:shadow-lg"
    >
      {/* Image placeholder */}
      <div className="aspect-video bg-gradient-to-br from-ghost to-citrus/10 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-outfit font-bold text-citrus/20">{study.title}</span>
        </div>
        {study.featured && (
          <span className="absolute top-4 left-4 bg-citrus text-white text-xs font-medium px-3 py-1 rounded-full">
            Featured
          </span>
        )}
        <span className={`absolute top-4 right-4 text-xs font-medium px-3 py-1 rounded-full ${
          isLive ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
        }`}>
          {isLive ? 'Live' : 'In Development'}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium text-citrus bg-citrus/10 px-2 py-1 rounded">
            {study.category}
          </span>
        </div>

        <h3 className="font-outfit font-bold text-xl text-void mb-2 group-hover:text-citrus transition-colors">
          {study.title}
        </h3>

        <p className="text-steel text-sm mb-4 line-clamp-2">
          {study.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {study.tech.slice(0, 4).map((tech) => (
            <span key={tech} className="text-xs text-steel bg-ghost px-2 py-1 rounded">
              {tech}
            </span>
          ))}
          {study.tech.length > 4 && (
            <span className="text-xs text-citrus">+{study.tech.length - 4} more</span>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-ghost">
          <Link
            href={`/case-studies/${study.slug}`}
            className="flex items-center gap-2 text-citrus hover:underline text-sm font-medium"
          >
            View Details
            <ArrowRight className="w-4 h-4" />
          </Link>

          {study.liveUrl && (
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-steel hover:text-citrus text-sm"
            >
              Visit Site
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
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <p className="text-citrus font-medium mb-4">Our Work</p>
          <h1 className="font-outfit font-bold text-4xl sm:text-5xl text-void mb-6">
            Case <span className="text-citrus">Studies</span>
          </h1>
          <p className="text-xl text-steel">
            Real products built by the Agent Orchestra. From fintech platforms to
            e-commerce marketplaces—here&apos;s what we&apos;ve shipped.
          </p>
        </motion.div>
      </section>

      {/* Featured Projects */}
      {featuredStudies.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="font-outfit font-bold text-2xl text-void mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredStudies.map((study, index) => (
              <CaseStudyCard key={study.slug} study={study} index={index} />
            ))}
          </div>
        </section>
      )}

      {/* All Projects */}
      <section className="bg-ghost py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-outfit font-bold text-2xl text-void mb-8">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherStudies.map((study, index) => (
              <CaseStudyCard key={study.slug} study={study} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '6+', label: 'Products Shipped' },
            { value: '20+', label: 'AI Agents' },
            { value: '3', label: 'Industries' },
            { value: '100%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-outfit font-bold text-4xl text-citrus mb-2">{stat.value}</p>
              <p className="text-steel">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-void rounded-2xl p-8 lg:p-12 text-center"
        >
          <h2 className="font-outfit font-bold text-3xl text-white mb-4">
            Ready to Join This Portfolio?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Whether you want a framework, a done-for-you build, or a venture partnership—let&apos;s
            talk about how we can help you ship faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button href="/services" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
              View Services
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
