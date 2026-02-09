"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface BrandLogoProps {
    className?: string;
    variant?: "full" | "icon" | "alt";
    size?: "sm" | "md" | "lg" | "xl";
}

const sizeMap = {
    sm: { width: 120, height: 30, className: "h-7" },
    md: { width: 160, height: 40, className: "h-9" },
    lg: { width: 220, height: 55, className: "h-12" },
    xl: { width: 320, height: 80, className: "h-16" },
};

const srcMap = {
    full: "/Logo/JonnyAI full logo.png",
    icon: "/Logo/Jonny Ai - Icon.png",
    alt: "/Logo/JonnyAI logo alt.png",
};

export default function BrandLogo({ className = "", variant = "full", size = "md" }: BrandLogoProps) {
    const dimensions = sizeMap[size];
    const src = srcMap[variant];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className={`relative inline-flex items-center ${className}`}
        >
            <Image
                src={src}
                alt="JonnyAI — Jonny Allum Innovations Ltd"
                width={dimensions.width}
                height={dimensions.height}
                className={`${dimensions.className} w-auto`}
                priority
            />
        </motion.div>
    );
}
