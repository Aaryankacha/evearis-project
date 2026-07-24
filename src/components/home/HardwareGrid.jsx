import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../product/ProductCard';
import { Heading } from '../common/Heading';
import { INITIAL_PRODUCTS } from '../../data/mockProducts';

const categories = ['All Products', 'Graphics Cards', 'Processors', 'Motherboards', 'Memory', 'Storage', 'Cooling', 'Monitors', 'Cases'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const HardwareGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All Products');

  const filteredProducts =
    activeCategory === 'All Products'
      ? INITIAL_PRODUCTS
      : INITIAL_PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-12 py-24 lg:py-36">
      {/* Seamless Continuous Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <Heading
          eyebrow="CATALOG ARCHITECTURE"
          title="Hardware Ecosystem"
          description="Explore our modular components engineered for ultra-dense compute rigs."
        />
      </motion.div>

      {/* Category Filter Pills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        className="mt-12 flex flex-wrap justify-center gap-2.5"
      >
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] rounded-full transition-all duration-300 font-mono border ${
                isActive
                  ? 'bg-[#F5F5F5] text-[#1C1C1C] border-[#F5F5F5] shadow-lg'
                  : 'bg-[#242424] text-[#9D9D9D] border-white/5 hover:text-white hover:border-white/20'
              }`}
            >
              {category}
            </button>
          );
        })}
      </motion.div>

      {/* Products Grid with Staggered Entrance */}
      <div className="mt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -15, transition: { duration: 0.25 } }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HardwareGrid;
