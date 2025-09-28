'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  className,
  onClick,
  disabled = false,
  loading = false,
}: ButtonProps) {
  const baseClasses = "relative inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-obsidian-black text-pearl-white hover:bg-royal-gold hover:text-obsidian-black focus:ring-royal-gold shadow-luxury-sm hover:shadow-luxury",
    secondary: "bg-royal-gold text-obsidian-black hover:bg-royal-gold/90 focus:ring-royal-gold shadow-luxury-sm hover:shadow-luxury",
    outline: "border-2 border-obsidian-black text-obsidian-black hover:bg-obsidian-black hover:text-pearl-white focus:ring-obsidian-black",
    ghost: "text-obsidian-black hover:bg-royal-gold/10 hover:text-royal-gold focus:ring-royal-gold",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl",
  };

  return (
    <motion.button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {loading && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </motion.div>
      )}
      
      <div className={cn("flex items-center gap-2", loading && "opacity-0")}>
        {Icon && iconPosition === 'left' && <Icon size={20} />}
        {children}
        {Icon && iconPosition === 'right' && <Icon size={20} />}
      </div>
    </motion.button>
  );
}
