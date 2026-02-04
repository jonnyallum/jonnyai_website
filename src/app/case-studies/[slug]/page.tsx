import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ExternalLink, Github, Check } from 'lucide-react';
import { caseStudies } from '@/data/case-studies';
import { Button } from '@/components/ui/Button';
import { notFound } from 'next/navigation';
import { CaseStudyContent } from './CaseStudyContent';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find(s => s.slug === slug);

  if (!study) {
    return { title: 'Case Study Not Found' };
  }

  return {
    title: `${study.title} | JonnyAI Case Study`,
    description: study.description,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find(s => s.slug === slug);

  if (!study) {
    notFound();
  }

  const isLive = !!study.liveUrl;
  const currentIndex = caseStudies.findIndex(s => s.slug === slug);
  const prevStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextStudy = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-steel hover:text-citrus transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Case Studies
        </Link>

        <CaseStudyContent study={study} isLive={isLive} />
      </section>

      {/* Hero Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="aspect-video bg-gradient-to-br from-ghost to-citrus/10 rounded-2xl overflow-hidden flex items-center justify-center">
          <span className="text-6xl font-outfit font-bold text-citrus/20">{study.title}</span>
        </div>
      </section>

      {/* Details Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Full Description */}
            <div>
              <h2 className="font-outfit font-bold text-2xl text-void mb-4">About This Project</h2>
              <div className="text-steel leading-relaxed whitespace-pre-line">
                {study.fullDescription}
              </div>
            </div>

            {/* Outcomes */}
            {study.outcomes && study.outcomes.length > 0 && (
              <div>
                <h2 className="font-outfit font-bold text-2xl text-void mb-4">Key Outcomes</h2>
                <div className="grid grid-cols-1 gap-4">
                  {study.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-start gap-3 bg-citrus/5 rounded-lg p-4">
                      <Check className="w-5 h-5 text-citrus flex-shrink-0 mt-0.5" />
                      <span className="text-steel">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <div className="bg-ghost rounded-xl p-6">
              <h3 className="font-outfit font-bold text-lg text-void mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {study.tech.map((tech) => (
                  <span key={tech} className="text-sm text-void bg-white px-3 py-1.5 rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Agents Involved */}
            {study.agents && study.agents.length > 0 && (
              <div className="bg-ghost rounded-xl p-6">
                <h3 className="font-outfit font-bold text-lg text-void mb-4">Agents Involved</h3>
                <div className="space-y-3">
                  {study.agents.map((agent) => (
                    <div key={agent} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-citrus/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-citrus">{agent.charAt(0).toUpperCase()}</span>
                      </div>
                      <span className="text-steel capitalize">{agent.replace('-', ' ')}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/orchestra"
                  className="inline-flex items-center gap-2 text-citrus hover:underline text-sm mt-4"
                >
                  Meet the Orchestra
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}

            {/* Build Time */}
            {study.buildTime && (
              <div className="bg-ghost rounded-xl p-6">
                <h3 className="font-outfit font-bold text-lg text-void mb-4">Build Time</h3>
                <p className="text-2xl font-outfit font-bold text-citrus">{study.buildTime}</p>
                <p className="text-sm text-steel">from kickoff to launch</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-ghost">
        <div className="flex flex-col sm:flex-row justify-between gap-6">
          {prevStudy ? (
            <Link
              href={`/case-studies/${prevStudy.slug}`}
              className="group flex items-center gap-4 p-4 rounded-xl bg-ghost hover:bg-citrus/5 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-steel group-hover:text-citrus transition-colors" />
              <div>
                <p className="text-sm text-steel">Previous</p>
                <p className="font-outfit font-bold text-void group-hover:text-citrus transition-colors">
                  {prevStudy.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextStudy && (
            <Link
              href={`/case-studies/${nextStudy.slug}`}
              className="group flex items-center gap-4 p-4 rounded-xl bg-ghost hover:bg-citrus/5 transition-colors text-right"
            >
              <div>
                <p className="text-sm text-steel">Next</p>
                <p className="font-outfit font-bold text-void group-hover:text-citrus transition-colors">
                  {nextStudy.title}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-steel group-hover:text-citrus transition-colors" />
            </Link>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-void rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="font-outfit font-bold text-3xl text-white mb-4">
            Want Similar Results?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Let&apos;s discuss how the Agent Orchestra can help you build and ship faster.
          </p>
          <Button href="/contact" size="lg">
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
