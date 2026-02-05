'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Agent } from '@/data/agents';

interface AgentCardProps {
  agent: Agent;
  variant?: 'compact' | 'full';
}

export function AgentCard({ agent, variant = 'compact' }: AgentCardProps) {
  const [imgError, setImgError] = useState(false);

  if (variant === 'compact') {
    return (
      <motion.div
        className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-citrus/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] overflow-hidden"
        whileHover={{ y: -4 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {/* Glow Effect behind */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Avatar */}
        <div className="relative z-10">
          {!imgError && agent.avatar ? (
            <div className="w-16 h-16 rounded-full mb-4 relative overflow-hidden border-2 border-white/20 group-hover:border-citrus/50 transition-colors">
              <Image
                src={agent.avatar || ''}
                alt={agent.name}
                fill
                className="object-cover"
                onError={() => setImgError(true)}
              />
            </div>
          ) : (
            <div
              className="w-16 h-16 rounded-full mb-4 flex items-center justify-center text-white text-xl font-bold border-2 border-white/10"
              style={{ backgroundColor: agent.color }}
            >
              {agent.humanName.split(' ').map(n => n[0]).join('')}
            </div>
          )}

          {/* Name & Role */}
          <h3 className="font-outfit font-bold text-white text-lg group-hover:text-citrus transition-colors">
            {agent.humanName}
          </h3>
          <p className="text-gray-400 text-sm font-medium mb-2">
            &ldquo;{agent.nickname}&rdquo;
          </p>
          <p className="text-gray-500 text-sm mb-4">{agent.role}</p>

          {/* Philosophy quote */}
          <p className="text-gray-400/80 text-sm italic line-clamp-2 border-l-2 border-white/10 pl-3">
            &ldquo;{agent.philosophy}&rdquo;
          </p>
        </div>

        {/* Hover reveal: capabilities (Dark Mode) */}
        <div className="absolute inset-0 bg-[#0a0a0c]/95 backdrop-blur-xl rounded-2xl p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center z-20 translate-y-4 group-hover:translate-y-0">
          <h4 className="font-outfit font-bold text-white mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: agent.color }} />
            {agent.name}
          </h4>
          <ul className="space-y-2">
            {agent.capabilities.slice(0, 4).map((cap, i) => (
              <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                <span className="text-citrus mt-0.5">›</span>
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
      className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-lg hover:bg-white/10 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col sm:flex-row items-start gap-6">
        {/* Avatar */}
        {!imgError && agent.avatar ? (
          <div className="w-24 h-24 rounded-full flex-shrink-0 relative overflow-hidden border-2 border-white/20 shadow-2xl">
            <Image
              src={agent.avatar || ''}
              alt={agent.name}
              fill
              className="object-cover"
              onError={() => setImgError(true)}
            />
          </div>
        ) : (
          <div
            className="w-24 h-24 rounded-full flex-shrink-0 flex items-center justify-center text-white text-3xl font-bold border-4 border-white/10"
            style={{ backgroundColor: agent.color }}
          >
            {agent.humanName.split(' ').map(n => n[0]).join('')}
          </div>
        )}

        <div className="flex-1 w-full">
          {/* Header */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-outfit font-bold text-white text-2xl">
                {agent.humanName}
              </h3>
              <span className="px-3 py-1 rounded-full bg-white/10 text-xs text-citrus font-mono uppercase tracking-wider border border-white/5">
                {agent.tier}
              </span>
            </div>

            <p className="text-gray-400 font-medium text-lg">
              {agent.name} <span className="text-white/20 mx-2">|</span> <span className="text-citrus">&ldquo;{agent.nickname}&rdquo;</span>
            </p>
            <p className="text-gray-500 mt-1">{agent.role}</p>
          </div>

          {/* Philosophy */}
          <blockquote className="border-l-4 border-citrus pl-4 mb-6 text-gray-300 italic bg-white/5 p-4 rounded-r-lg">
            &ldquo;{agent.philosophy}&rdquo;
          </blockquote>

          {/* Capabilities */}
          <div className="mb-6">
            <h4 className="text-xs font-bold text-gray-500 mb-3 uppercase tracking-widest">
              Core Capabilities
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
              {agent.capabilities.map((cap, i) => (
                <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                  <span className="text-citrus">●</span>
                  {cap}
                </li>
              ))}
            </ul>
          </div>

          {/* Personality tags */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
            {agent.personality.map((trait, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/10"
              >
                #{trait}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
