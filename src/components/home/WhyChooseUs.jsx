import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../common/Card';
import { Heading } from '../common/Heading';

const chooseCards = [
  {
    title: 'Precision Silicon',
    description: 'Every component is tested for voltage stability, heat dissipation, and continuous high-load throughput.',
    variant: 'gpu',
    size: 'large',
  },
  {
    title: 'Purpose-Built Workflows',
    description: 'Engineered for high-frame gaming, 3D rendering pipelines, local AI inference, and compilation.',
    variant: 'workflow',
    size: 'medium',
  },
  {
    title: 'Acoustic & Thermal Balance',
    description: 'Subtle fan curves and vapor chamber cooling deliver silent compute performance.',
    variant: 'performance',
    size: 'medium',
  },
  {
    title: 'Ecosystem Longevity',
    description: 'Standardized architecture ensures simple component upgrades for future GPU and CPU generations.',
    variant: 'future',
    size: 'small',
  },
  {
    title: 'Architectural Blueprint',
    description: 'Minimalist physical aesthetics paired with clean internal cable pathways and concealed structural mounts.',
    variant: 'blueprint',
    size: 'wide',
  },
];

const renderMonochromeIllustration = (variant) => {
  switch (variant) {
    case 'gpu':
      return (
        <svg viewBox="0 0 240 140" className="h-full w-full">
          <rect x="30" y="30" width="180" height="80" rx="12" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.4" />
          <circle cx="80" cy="70" r="22" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.6" />
          <circle cx="160" cy="70" r="22" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.6" />
          <path d="M 80 52 L 80 88 M 62 70 L 98 70" stroke="#9D9D9D" strokeWidth="1.5" />
          <path d="M 160 52 L 160 88 M 142 70 L 178 70" stroke="#9D9D9D" strokeWidth="1.5" />
        </svg>
      );
    case 'workflow':
      return (
        <svg viewBox="0 0 240 140" className="h-full w-full">
          <rect x="40" y="30" width="70" height="80" rx="10" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.5" />
          <rect x="130" y="30" width="70" height="80" rx="10" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.5" />
          <line x1="110" y1="70" x2="130" y2="70" stroke="#9D9D9D" strokeWidth="1.5" />
        </svg>
      );
    case 'performance':
      return (
        <svg viewBox="0 0 240 140" className="h-full w-full">
          <path d="M 40 100 Q 120 20 200 100" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.5" />
          <line x1="120" y1="90" x2="165" y2="45" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <circle cx="120" cy="90" r="5" fill="#FFFFFF" />
        </svg>
      );
    case 'future':
      return (
        <svg viewBox="0 0 240 140" className="h-full w-full">
          <circle cx="120" cy="70" r="38" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.4" />
          <circle cx="120" cy="70" r="18" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.6" />
          <circle cx="120" cy="70" r="5" fill="#FFFFFF" />
        </svg>
      );
    case 'blueprint':
      return (
        <svg viewBox="0 0 240 140" className="h-full w-full">
          <rect x="30" y="20" width="180" height="100" rx="8" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="6 6" strokeOpacity="0.4" />
          <line x1="30" y1="70" x2="210" y2="70" stroke="#9D9D9D" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="120" y1="20" x2="120" y2="120" stroke="#9D9D9D" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      );
    default:
      return null;
  }
};

export const WhyChooseUs = () => {
  return (
    <section id="why-nexus-core" className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-12 py-24 lg:py-36">
      {/* Seamless Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <Heading
          eyebrow="ENGINEERING PHILOSOPHY"
          title="Minimal Form. Maximal Compute."
          description="Every component is crafted to eliminate visual clutter while offering uncompromised thermal efficiency and sustained speed."
        />
      </motion.div>

      <div className="mt-16 grid gap-6 md:grid-cols-12">
        {chooseCards.map((card, index) => {
          const sizeClasses =
            card.size === 'large'
              ? 'md:col-span-7 md:row-span-2'
              : card.size === 'wide'
                ? 'md:col-span-8'
                : card.size === 'small'
                  ? 'md:col-span-4'
                  : 'md:col-span-5';

          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={sizeClasses}
            >
              <Card className="flex flex-col justify-between h-full">
                <div className="overflow-hidden rounded-[16px] bg-[#181818] border border-white/5 p-4 mb-6">
                  <div className="flex h-40 items-center justify-center rounded-[12px] bg-[#181818]">
                    {renderMonochromeIllustration(card.variant)}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-light text-white tracking-tight">{card.title}</h3>
                  <p className="text-sm text-[#9D9D9D] font-normal leading-relaxed">{card.description}</p>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUs;
