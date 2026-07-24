import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import BuilderSidebar from '../components/builder/BuilderSidebar';
import BuilderSummary from '../components/builder/BuilderSummary';
import { Heading } from '../components/common/Heading';
import { Card } from '../components/common/Card';
import { INITIAL_PRODUCTS } from '../data/mockProducts';
import { useCart } from '../context/CartContext';
import { Cpu, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  { key: 'cpu', label: 'Processor (CPU)', icon: Cpu, filterCategory: 'Processors' },
  { key: 'motherboard', label: 'Motherboard', icon: Layers, filterCategory: 'Motherboards' },
  { key: 'gpu', label: 'Graphics Card (GPU)', icon: Cpu, filterCategory: 'Graphics Cards' },
  { key: 'ram', label: 'System Memory (RAM)', icon: Cpu, filterCategory: 'Memory' },
  { key: 'ssd', label: 'NVMe Storage (SSD)', icon: Cpu, filterCategory: 'Storage' },
  { key: 'psu', label: 'Power Supply (PSU)', icon: Cpu, filterCategory: 'Power Supplies' },
  { key: 'cooling', label: 'Thermal Cooling', icon: Cpu, filterCategory: 'Cooling' },
  { key: 'case', label: 'Chassis Cabinet', icon: Cpu, filterCategory: 'Cases' }
];

export const PCBuilder = () => {
  const { addCustomBuildToCart } = useCart();
  const [build, setBuild] = useState({
    cpu: null,
    motherboard: null,
    gpu: null,
    ram: null,
    ssd: null,
    psu: null,
    cooling: null,
    case: null,
  });

  const [activeCategoryModal, setActiveCategoryModal] = useState(null);

  const selectComponent = (key, item) => {
    setBuild((prev) => ({ ...prev, [key]: item }));
    setActiveCategoryModal(null);
  };

  const removeComponent = (key) => {
    setBuild((prev) => ({ ...prev, [key]: null }));
  };

  const clearBuild = () => {
    setBuild({
      cpu: null,
      motherboard: null,
      gpu: null,
      ram: null,
      ssd: null,
      psu: null,
      cooling: null,
      case: null,
    });
  };

  const totalPrice = Object.values(build).reduce((sum, part) => {
    if (!part) return sum;
    const priceNum = typeof part.price === 'number'
      ? part.price
      : parseFloat(String(part.price).replace(/[^0-9.]/g, '')) || 0;
    return sum + priceNum;
  }, 0);

  const handleAddBuildToCart = () => {
    addCustomBuildToCart(build, totalPrice);
  };

  return (
    <MainLayout>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 space-y-12">
        <Heading
          eyebrow="RIG CONFIGURATOR"
          title="Architect Your Custom System"
          description="Pair silicon, thermal cooling arrays, and minimal chassis options with real-time power telemetry."
        />

        {/* Builder Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Component Selection Slots Sidebar */}
          <div className="lg:col-span-2">
            <BuilderSidebar
              categories={categories}
              build={build}
              onOpenModal={setActiveCategoryModal}
            />
          </div>

          {/* Right Build Summary Panel */}
          <div className="lg:col-span-1 sticky top-28">
            <BuilderSummary
              build={build}
              totalPrice={totalPrice}
              onRemoveComponent={removeComponent}
              onClearBuild={clearBuild}
              onAddToCart={handleAddBuildToCart}
            />
          </div>
        </div>
      </div>

      {/* Component Picker Modal */}
      <AnimatePresence>
        {activeCategoryModal && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-[#242424] border border-white/10 rounded-[24px] p-6 lg:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto space-y-6 shadow-2xl"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/5">
                <h3 className="text-base font-mono uppercase tracking-wider text-white">
                  Select {categories.find((c) => c.key === activeCategoryModal)?.label}
                </h3>
                <button
                  onClick={() => setActiveCategoryModal(null)}
                  className="text-xs font-mono text-[#9D9D9D] hover:text-white px-3 py-1.5 bg-[#1C1C1C] rounded-full border border-white/5"
                >
                  CLOSE [ESC]
                </button>
              </div>

              <div className="space-y-3">
                {INITIAL_PRODUCTS
                  .filter(
                    (p) =>
                      p.category ===
                      categories.find((c) => c.key === activeCategoryModal)?.filterCategory
                  )
                  .map((item) => (
                    <Card
                      key={item.id}
                      onClick={() => selectComponent(activeCategoryModal, item)}
                      className="p-4 bg-[#1C1C1C] border-white/5 hover:border-white/15 cursor-pointer flex items-center justify-between gap-4 group rounded-[16px]"
                    >
                      <div>
                        <span className="text-[10px] text-[#9D9D9D] uppercase tracking-widest block font-mono">
                          {item.badge || item.category}
                        </span>
                        <h4 className="text-sm font-medium text-white">{item.name}</h4>
                        <p className="text-xs text-[#9D9D9D] line-clamp-1 mt-0.5">{item.spec || item.tagline || item.description}</p>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-sm font-mono font-semibold text-white block">
                          ${typeof item.price === 'number' ? item.price.toLocaleString() : item.price}
                        </span>
                        <span className="text-[10px] text-[#9D9D9D] font-mono">{item.power || 0}W</span>
                      </div>
                    </Card>
                  ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </MainLayout>
  );
};

export default PCBuilder;
