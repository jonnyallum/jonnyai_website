
"use client";

import { news } from "@/data/news";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function Banner() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (news.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % news.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    if (!news || news.length === 0) return null;

    const currentNews = news[currentIndex];

    return (
        <div className="bg-void/80 border-b border-ember/10 backdrop-blur-md py-3 overflow-hidden relative z-50">
            <div className="container mx-auto px-4 text-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-xs md:text-sm font-medium tracking-wide flex items-center justify-center gap-3"
                    >
                        <span className="flex items-center gap-1.5 bg-ember/10 border border-ember/20 px-2 py-0.5 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-nebula-rose animate-pulse" />
                            <span className="text-[10px] uppercase font-black tracking-wider text-soft-rose">
                                Live Update
                            </span>
                        </span>
                        <span className="text-frost/50 font-mono text-[10px]">[{currentNews.date}]</span>
                        <span
                            className="text-ice/70 hover:text-white transition-colors cursor-default"
                            dangerouslySetInnerHTML={{ __html: currentNews.message.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>') }}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
