'use client';

import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  glow: string;
  pulsePhase: number;
  pulseSpeed: number;
}

const COLORS = {
  ember: { r: 232, g: 117, b: 26 },
  amber: { r: 245, g: 158, b: 11 },
  rose: { r: 232, g: 67, b: 147 },
  blue: { r: 59, g: 130, b: 246 },
};

function createNode(w: number, h: number): Node {
  const colorKeys = Object.keys(COLORS) as (keyof typeof COLORS)[];
  // Weight towards ember/amber (70% warm, 20% rose, 10% blue)
  const rand = Math.random();
  const colorKey = rand < 0.4 ? 'ember' : rand < 0.7 ? 'amber' : rand < 0.9 ? 'rose' : 'blue';
  const c = COLORS[colorKey];

  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    radius: Math.random() * 2 + 1,
    color: `rgb(${c.r}, ${c.g}, ${c.b})`,
    glow: `rgba(${c.r}, ${c.g}, ${c.b}, 0.6)`,
    pulsePhase: Math.random() * Math.PI * 2,
    pulseSpeed: 0.005 + Math.random() * 0.01,
  };
}

export function NeuralNetwork({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const CONNECTION_DISTANCE = 150;
    const NODE_COUNT_BASE = 80;

    function resize() {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Scale node count with screen size, but cap it
      const area = window.innerWidth * window.innerHeight;
      const targetCount = Math.min(Math.floor(area / 12000), 120);

      while (nodesRef.current.length < targetCount) {
        nodesRef.current.push(createNode(window.innerWidth, window.innerHeight));
      }
      while (nodesRef.current.length > targetCount) {
        nodesRef.current.pop();
      }
    }

    resize();
    window.addEventListener('resize', resize);

    function animate() {
      if (!canvas || !ctx) return;

      const w = window.innerWidth;
      const h = window.innerHeight;
      timeRef.current++;

      ctx.clearRect(0, 0, w, h);

      const nodes = nodesRef.current;

      // Update positions
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        // Wrap around edges
        if (node.x < -20) node.x = w + 20;
        if (node.x > w + 20) node.x = -20;
        if (node.y < -20) node.y = h + 20;
        if (node.y > h + 20) node.y = -20;
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.15;
            // Shimmer effect
            const shimmer = Math.sin(timeRef.current * 0.02 + i * 0.5) * 0.05 + 0.05;

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(232, 117, 26, ${opacity + shimmer})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        const pulse = Math.sin(timeRef.current * node.pulseSpeed + node.pulsePhase);
        const currentRadius = node.radius + pulse * 0.5;
        const glowSize = currentRadius * 4;

        // Outer glow
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, glowSize
        );
        gradient.addColorStop(0, node.glow);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.beginPath();
        ctx.arc(node.x, node.y, glowSize, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(animate);
    }

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 z-0 pointer-events-none ${className}`}
      style={{ opacity: 0.6 }}
    />
  );
}
