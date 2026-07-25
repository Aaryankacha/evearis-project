import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';
import ProductCard from '../components/product/ProductCard';
import { Heading } from '../components/common/Heading';
import { Card } from '../components/common/Card';
import { INITIAL_PRODUCTS } from '../data/mockProducts';
import { Search, SlidersHorizontal } from 'lucide-react';

const categories = ['All Products', 'Graphics Cards', 'Processors', 'Motherboards', 'Memory', 'Storage', 'Cooling', 'Monitors', 'Cases'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let list = [...INITIAL_PRODUCTS];

    if (selectedCategory !== 'All Products') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.description && p.description.toLowerCase().includes(q))
      );
    }

    if (sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <MainLayout>
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 py-12 space-y-12">
        {/* Oversized Background Watermark */}
        <div className="absolute top-0 left-0 right-0 pointer-events-none flex items-start justify-center overflow-hidden select-none h-80">
          <span className="text-[14vw] font-black tracking-tighter text-white/[0.012] font-mono uppercase whitespace-nowrap mt-12">
            CATALOG
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Heading
            eyebrow="ECOSYSTEM CATALOG"
            title="Hardware Architecture"
            description="Browse our precision engineering catalog of graphics processing units, processors, memory, and cases."
          />
        </motion.div>

        {/* Filter Controls Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#242424] border border-white/5 rounded-[24px] p-4 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#9D9D9D] absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Search catalog..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1C1C1C] border border-white/5 rounded-full pl-11 pr-4 py-2.5 text-xs text-white placeholder-[#9D9D9D] focus:outline-none focus:border-white/20 font-mono"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <SlidersHorizontal className="w-4 h-4 text-[#9D9D9D]" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#1C1C1C] border border-white/5 rounded-full px-5 py-2.5 text-xs text-white font-mono focus:outline-none cursor-pointer hover:border-white/20 transition-colors"
            >
              <option value="featured" className="bg-[#1C1C1C]">Sort: Featured</option>
              <option value="price-low" className="bg-[#1C1C1C]">Price: Low to High</option>
              <option value="price-high" className="bg-[#1C1C1C]">Price: High to Low</option>
              <option value="name" className="bg-[#1C1C1C]">Name: A - Z</option>
            </select>
          </div>
        </motion.div>

        {/* Category Pill Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          className="flex flex-wrap justify-center gap-2.5"
        >
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
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

        {/* Result Count */}
        <div className="text-center">
          <span className="text-[11px] font-mono text-[#9D9D9D] uppercase tracking-widest">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'PRODUCT' : 'PRODUCTS'} FOUND
          </span>
        </div>

        {/* Product Grid */}
        <AnimatePresence mode="wait">
          {filteredProducts.length === 0 ? (
            <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Card className="text-center py-20">
                <p className="text-[#9D9D9D] text-xs font-mono uppercase tracking-widest">
                  No hardware matching criteria found.
                </p>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {filteredProducts.map((product) => (
                <motion.div key={product.id} variants={itemVariants}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MainLayout>
  );
};

export default Products;
