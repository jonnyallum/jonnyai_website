'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  target?: '_blank' | '_self' | '_parent' | '_top';
}

const variants = {
  primary: 'bg-citrus text-white hover:bg-citrus/90 shadow-lg shadow-citrus/20',
  secondary: 'bg-void text-white hover:bg-void/90',
  outline: 'border-2 border-citrus text-citrus hover:bg-citrus hover:text-white',
  ghost: 'text-steel hover:text-void hover:bg-ghost',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'md', href, onClick, disabled, className = '', type = 'button', target }, ref) => {
    const baseStyles = `
      inline-flex items-center justify-center gap-2
      font-medium rounded-lg
      transition-all duration-300
      disabled:opacity-50 disabled:cursor-not-allowed
      ${variants[variant]}
      ${sizes[size]}
      ${className}
    `;

    if (href) {
      const isExternal = target === '_blank';

      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.span
              className={baseStyles}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {children}
            </motion.span>
          </a>
        );
      }

      return (
        <Link href={href}>
          <motion.span
            className={baseStyles}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {children}
          </motion.span>
        </Link>
      );
    }

    return (
      <motion.button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={baseStyles}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
