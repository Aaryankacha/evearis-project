import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'ghost' | 'outline'
  size = 'md',        // 'sm' | 'md' | 'lg'
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  icon: Icon,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold tracking-wider uppercase transition-all duration-300 rounded-full focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed';

  const variants = {
    // Accent #F5F5F5 pill with dark text
    primary: 'bg-[#F5F5F5] text-[#1C1C1C] hover:bg-[#EAEAEA] border border-transparent shadow-none',
    // Secondary pill with subtle border
    secondary: 'bg-transparent text-white border border-white/15 hover:bg-white/5 hover:border-white/30',
    // Ghost text button
    ghost: 'bg-transparent text-[#9D9D9D] hover:text-white hover:bg-white/5 border border-transparent',
    // Outline button
    outline: 'bg-transparent text-white border border-white/20 hover:border-white/50 hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-[11px]',
    md: 'px-6 py-3 text-xs',
    lg: 'px-8 py-4 text-xs tracking-widest',
  };

  return (
    <motion.button
      whileHover={disabled ? {} : { y: -4 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-3.5 h-3.5 mr-2 shrink-0" />}
      <span>{children}</span>
    </motion.button>
  );
};

export default Button;
