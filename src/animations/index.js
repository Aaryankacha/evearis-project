export const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } 
  },
  exit: { 
    opacity: 0, 
    y: -8, 
    transition: { duration: 0.25, ease: [0.7, 0, 0.84, 0] } 
  }
};

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] } 
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
  }
};

export const cardHoverVariants = {
  initial: { scale: 1, y: 0 },
  hover: { 
    scale: 1.015, 
    y: -4, 
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } 
  }
};

export const buttonHoverVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.03, transition: { duration: 0.2, ease: 'easeOut' } },
  tap: { scale: 0.97 }
};
