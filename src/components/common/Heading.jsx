import React from 'react';
import { motion } from 'framer-motion';

export const Heading = ({
  eyebrow,
  title,
  description,
  align = 'center', // 'center' | 'left'
  className = '',
}) => {
  const alignClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`max-w-3xl space-y-4 ${alignClasses} ${className}`}
    >
      {eyebrow && (
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#9D9D9D]">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.1]">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-base sm:text-lg text-[#9D9D9D] font-normal leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default Heading;
