"use client";

import { motion } from "framer-motion";

export default function BrandLogo({ className = "" }: { className?: string }) {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <div className="relative w-8 h-8">
                {/* The Apex Glyph (CSS Only) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 border-r-2 border-b-2 border-void rotate-[135deg]"
                />
                <motion.div
                    animate={{
                        opacity: [0.3, 1, 0.3],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-ember rounded-full z-10"
                />
            </div>
            <div className="flex flex-col">
                <span className="font-outfit font-black text-xl tracking-tighter leading-none text-void">JAI</span>
                <span className="text-[6px] font-black tracking-[.3em] text-void/40 uppercase">Innovations</span>
            </div>
        </div>
    );
}
