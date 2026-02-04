'use client';

import { motion } from 'framer-motion';
import type { Agent } from '@/data/agents';

interface AgentCardProps {
  agent: Agent;
  variant?: 'compact' | 'full';
}

export function AgentCard({ agent, variant = 'compact' }: AgentCardProps) {
  if (variant === 'compact') {
    return (
      <motion.div
        className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-ghost hover:border-citrus/30 transition-all duration-300 hover:shadow-lg"
        whileHover={{ y: -4 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {/* Avatar placeholder */}
        <div
          className="w-16 h-16 rounded-full mb-4 flex items-center justify-center text-white text-xl font-bold"
          style={{ backgroundColor: agent.color }}
        >
          {agent.humanName.split(' ').map(n => n[0]).join('')}
        </div>

        {/* Name & Role */}
        <h3 className="font-outfit font-bold text-void text-lg">
          {agent.humanName}
        </h3>
        <p className="text-citrus text-sm font-medium mb-2">
          &ldquo;{agent.nickname}&rdquo;
        </p>
        <p className="text-steel text-sm mb-4">{agent.role}</p>

        {/* Philosophy quote */}
        <p className="text-steel/70 text-sm italic line-clamp-2">
          &ldquo;{agent.philosophy}&rdquo;
        </p>

        {/* Hover reveal: capabilities */}
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-2xl p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center">
          <h4 className="font-outfit font-bold text-void mb-3">{agent.name}</h4>
          <ul className="space-y-1">
            {agent.capabilities.slice(0, 4).map((cap, i) => (
              <li key={i} className="text-sm text-steel flex items-start gap-2">
                <span className="text-citrus mt-0.5">+</span>
                {cap}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    );
  }

  // Full variant for Orchestra page
  return (
    <motion.div
      className="bg-white rounded-2xl p-8 border border-ghost shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-start gap-6">
        {/* Avatar */}
        <div
          className="w-20 h-20 rounded-full flex-shrink-0 flex items-center justify-center text-white text-2xl font-bold"
          style={{ backgroundColor: agent.color }}
        >
          {agent.humanName.split(' ').map(n => n[0]).join('')}
        </div>

        <div className="flex-1">
          {/* Header */}
          <div className="mb-4">
            <h3 className="font-outfit font-bold text-void text-xl">
              {agent.humanName}
            </h3>
            <p className="text-citrus font-medium">
              {agent.name} &middot; &ldquo;{agent.nickname}&rdquo;
            </p>
            <p className="text-steel">{agent.role}</p>
          </div>

          {/* Philosophy */}
          <blockquote className="border-l-2 border-citrus pl-4 mb-6 text-steel italic">
            &ldquo;{agent.philosophy}&rdquo;
          </blockquote>

          {/* Capabilities */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-void mb-2 uppercase tracking-wide">
              Capabilities
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {agent.capabilities.map((cap, i) => (
                <li key={i} className="text-sm text-steel flex items-start gap-2">
                  <span className="text-citrus">+</span>
                  {cap}
                </li>
              ))}
            </ul>
          </div>

          {/* Personality tags */}
          <div className="flex flex-wrap gap-2">
            {agent.personality.map((trait, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-ghost rounded-full text-xs text-steel"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
