"use client";

import { motion } from "framer-motion";

const NODES = [
    { name: "KLIQT.MEDIA", url: "https://kliqt.media", desc: "AI Infrastructure" },
    { name: "LITTLE JONNYS", url: "https://littlejonnyscatering.co.uk", desc: "Augmented Gastronomy" },
    { name: "INSYDETRADAR", url: "https://insydetradar.com", desc: "Trading Signals" },
    { name: "POUNDTRADES", url: "https://poundtrades.app", desc: "Trade Ecosystem" },
    { name: "VILLAGE BAKERY", url: "#", desc: "Local Scale Engine" },
    { name: "DJ WASTE", url: "#", desc: "Logistics Optimization" }
];

export default function NodeRegistry() {
    return (
        <section className="relative z-10 py-12 border-t border-void/5 bg-ghost/30">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                    <div className="max-w-sm">
                        <p className="text-[10px] font-black tracking-[.5em] text-ember mb-4 uppercase">Operational Ecosystem</p>
                        <h3 className="font-outfit text-2xl font-black uppercase mb-4 tracking-tighter">Active Network Nodes.</h3>
                        <p className="text-[10px] text-steel leading-relaxed font-bold uppercase opacity-60">
                            JAI functions as a central core powering a diverse cluster of high-performance ventures.
                            Cross-pollination of intelligence ensures total dominance in every vertical.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-void/5 border border-void/5">
                        {NODES.map((node, i) => (
                            <a
                                key={i}
                                href={node.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative bg-white p-6 hover:bg-ember transition-all duration-500 overflow-hidden"
                            >
                                <div className="relative z-10">
                                    <div className="text-[10px] font-black tracking-widest text-void group-hover:text-white transition-colors mb-1">
                                        {node.name}
                                    </div>
                                    <div className="text-[8px] font-bold text-void/40 group-hover:text-white/60 transition-colors uppercase">
                                        {node.desc}
                                    </div>
                                </div>
                                {/* Subtle Glitch Effect on Hover */}
                                <motion.div
                                    className="absolute inset-0 bg-void/5 opacity-0 group-hover:opacity-100"
                                    whileHover={{ x: [0, -2, 2, 0], y: [0, 1, -1, 0] }}
                                    transition={{ duration: 0.2, repeat: Infinity }}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
