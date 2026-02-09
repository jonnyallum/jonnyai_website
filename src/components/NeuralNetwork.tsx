'use client';

import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  colorIdx: number;
  pulsePhase: number;
  pulseSpeed: number;
}

const PALETTE = [
  { r: 232, g: 117, b: 26 },  // ember
  { r: 245, g: 158, b: 11 },  // amber
  { r: 251, g: 191, b: 36 },  // forge-gold
  { r: 232, g: 67, b: 147 },  // nebula-rose
  { r: 244, g: 114, b: 182 }, // soft-rose
  { r: 59, g: 130, b: 246 },  // electric-blue
];

// Weighted distribution: 60% warm (ember/amber/gold), 25% rose, 15% blue
function pickColor(): number {
  const r = Math.random();
  if (r < 0.25) return 0; // ember
  if (r < 0.45) return 1; // amber
  if (r < 0.60) return 2; // forge-gold
  if (r < 0.75) return 3; // nebula-rose
  if (r < 0.85) return 4; // soft-rose
  return 5; // electric-blue
}

function createNode(w: number, h: number): Node {
  const ci = pickColor();
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    radius: Math.random() * 2.5 + 1.5,
    colorIdx: ci,
    pulsePhase: Math.random() * Math.PI * 2,
    pulseSpeed: 0.008 + Math.random() * 0.015,
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

    const CONNECTION_DISTANCE = 180;

    function resize() {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      // More nodes for denser network
      const area = window.innerWidth * window.innerHeight;
      const targetCount = Math.min(Math.floor(area / 6000), 200);

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
      const t = timeRef.current;

      // Update positions
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < -30) node.x = w + 30;
        if (node.x > w + 30) node.x = -30;
        if (node.y < -30) node.y = h + 30;
        if (node.y > h + 30) node.y = -30;
      }

      // Draw connections with colour blending
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < CONNECTION_DISTANCE * CONNECTION_DISTANCE) {
            const dist = Math.sqrt(distSq);
            const strength = 1 - dist / CONNECTION_DISTANCE;
            // Shimmer pulse
            const shimmer = Math.sin(t * 0.015 + i * 0.3 + j * 0.2) * 0.3 + 0.7;
            const opacity = strength * 0.35 * shimmer;

            // Blend the two node colours for the connection
            const c1 = PALETTE[nodes[i].colorIdx];
            const c2 = PALETTE[nodes[j].colorIdx];
            const mr = (c1.r + c2.r) >> 1;
            const mg = (c1.g + c2.g) >> 1;
            const mb = (c1.b + c2.b) >> 1;

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${mr}, ${mg}, ${mb}, ${opacity})`;
            ctx.lineWidth = strength * 1.5;
            ctx.stroke();
          }
        }
      }

      // Draw nodes with glow
      for (const node of nodes) {
        const pulse = Math.sin(t * node.pulseSpeed + node.pulsePhase);
        const currentRadius = node.radius + pulse * 0.8;
        const c = PALETTE[node.colorIdx];
        const glowSize = currentRadius * 6;

        // Outer glow halo
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, glowSize
        );
        gradient.addColorStop(0, `rgba(${c.r}, ${c.g}, ${c.b}, 0.7)`);
        gradient.addColorStop(0.3, `rgba(${c.r}, ${c.g}, ${c.b}, 0.2)`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.beginPath();
        ctx.arc(node.x, node.y, glowSize, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Bright core
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgb(${c.r}, ${c.g}, ${c.b})`;
        ctx.fill();

        // White-hot centre on larger nodes
        if (node.radius > 2.5) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, currentRadius * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${0.4 + pulse * 0.2})`;
          ctx.fill();
        }
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
      style={{ opacity: 0.75 }}
    />
  );
}
