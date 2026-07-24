import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card } from '../common/Card';
import { Heading } from '../common/Heading';
import { Button } from '../common/Button';

const performanceData = [
  {
    title: 'Gaming Frame Rates',
    rows: [
      { label: 'RTX 5090 Ultra', value: 320, unit: 'FPS' },
      { label: 'RTX 5080 Pro', value: 278, unit: 'FPS' },
      { label: 'RTX 5070 Slim', value: 198, unit: 'FPS' },
    ],
  },
  {
    title: '3D & Compute Throughput',
    rows: [
      { label: 'Ray Tracing Render', value: 94, unit: '%' },
      { label: '8K Video Pipeline', value: 89, unit: '%' },
      { label: 'Physics Simulation', value: 86, unit: '%' },
    ],
  },
  {
    title: 'AI & Code Compilation',
    rows: [
      { label: 'Local LLM Inference', value: 92, unit: '%' },
      { label: 'Parallel Compile', value: 88, unit: '%' },
      { label: 'Encoding Density', value: 85, unit: '%' },
    ],
  },
];

export const Performance = () => {
  return (
    <section id="performance" className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-12 py-24 lg:py-36">
      {/* Seamless Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <Heading
          eyebrow="BENCHMARK TELEMETRY"
          title="Uncompromised Compute"
          description="Empirical benchmark results across graphics, ray tracing, parallel compilation, and local AI workloads."
        />
      </motion.div>

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {performanceData.map((card, cardIndex) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: cardIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card className="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-light text-white tracking-tight">{card.title}</h3>
                <div className="mt-8 space-y-6">
                  {card.rows.map((row, index) => (
                    <div key={row.label} className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-[#9D9D9D]">{row.label}</span>
                        <span className="text-white font-semibold">
                          {row.value} {row.unit}
                        </span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-[#181818]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${Math.min(row.value, 100)}%` }}
                          viewport={{ once: true, amount: 0.4 }}
                          transition={{ duration: 0.8, delay: cardIndex * 0.08 + index * 0.06, ease: 'easeOut' }}
                          className="h-full rounded-full bg-[#F5F5F5]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* CTA Box */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-16"
      >
        <Card className="text-center py-16 px-6 sm:px-12 relative overflow-hidden">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#9D9D9D]">
            CONFIGURATOR DISPATCH
          </p>
          <h3 className="mt-4 text-3xl sm:text-4xl font-light tracking-tight text-white max-w-xl mx-auto">
            Ready to Configure Your Rig?
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#9D9D9D] font-normal leading-relaxed">
            Select silicon, thermals, and chassis options using our interactive configurator.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/pc-builder">
              <Button variant="primary" size="lg">
                Launch Configurator
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="secondary" size="lg">
                Explore Catalog
              </Button>
            </Link>
          </div>
        </Card>
      </motion.div>
    </section>
  );
};

export default Performance;
