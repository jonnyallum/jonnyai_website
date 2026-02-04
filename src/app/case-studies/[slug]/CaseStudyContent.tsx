'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CaseStudy } from '@/data/case-studies';

interface CaseStudyContentProps {
  study: CaseStudy;
  isLive: boolean;
}

export function CaseStudyContent({ study, isLive }: CaseStudyContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-sm font-medium text-citrus bg-citrus/10 px-3 py-1 rounded-full">
          {study.category}
        </span>
        <span className={`text-sm font-medium px-3 py-1 rounded-full ${
          isLive ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
        }`}>
          {isLive ? 'Live' : 'In Development'}
        </span>
      </div>

      <h1 className="font-outfit font-bold text-4xl sm:text-5xl text-void mb-6">
        {study.title}
      </h1>

      <p className="text-xl text-steel mb-8">
        {study.description}
      </p>

      <div className="flex flex-wrap gap-4">
        {study.liveUrl && (
          <Button href={study.liveUrl} target="_blank">
            Visit Live Site
            <ExternalLink className="w-4 h-4" />
          </Button>
        )}
        {study.githubUrl && (
          <Button href={study.githubUrl} variant="outline" target="_blank">
            View on GitHub
            <Github className="w-4 h-4" />
          </Button>
        )}
      </div>
    </motion.div>
  );
}
