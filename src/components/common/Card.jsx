import React from 'react';
import { motion } from 'framer-motion';

export const Card = ({
  children,
  className = '',
  hoverEffect = true,
  onClick,
  ...props
}) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -8 } : {}}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className={`bg-[#242424] border border-white/5 rounded-[24px] p-6 lg:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-400 ${
        hoverEffect ? 'hover:border-white/20 hover:shadow-[0_24px_50px_rgba(0,0,0,0.6)]' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
