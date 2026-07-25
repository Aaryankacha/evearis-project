import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../common/Card';
import { Heading } from '../common/Heading';

const chooseCards = [
  {
    title: 'Precision Silicon',
    description: 'Every component is tested for voltage stability, heat dissipation, and continuous high-load throughput.',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
    size: 'large',
  },
  {
    title: 'Purpose-Built Workflows',
    description: 'Engineered for high-frame gaming, 3D rendering pipelines, local AI inference, and compilation.',
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800&q=80',
    size: 'medium',
  },
  {
    title: 'Acoustic & Thermal Balance',
    description: 'Subtle fan curves and vapor chamber cooling deliver silent compute performance.',
    image: 'https://images.unsplash.com/photo-1587202372616-b43abea06c2a?auto=format&fit=crop&w=800&q=80',
    size: 'medium',
  },
  {
    title: 'Ecosystem Longevity',
    description: 'Standardized architecture ensures simple component upgrades for future GPU and CPU generations.',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80',
    size: 'small',
  },
  {
    title: 'Architectural Blueprint',
    description: 'Minimalist physical aesthetics paired with clean internal cable pathways and concealed structural mounts.',
    image: 'https://images.unsplash.com/photo-1587202372583-49330a15584d?auto=format&fit=crop&w=800&q=80',
    size: 'wide',
  },
];

const CardImage = ({ src, alt }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="overflow-hidden rounded-[16px] bg-[#181818] border border-white/5 mb-6 relative group/img">
      <div className="h-48 w-full overflow-hidden">
        {!imageError ? (
          <motion.img
            src={src}
            alt={alt}
            onError={() => setImageError(true)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full h-full object-cover object-center filter grayscale contrast-[1.1] opacity-90 group-hover/img:opacity-100 group-hover/img:grayscale-0 transition-all duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-mono text-xs text-[#9D9D9D] tracking-widest uppercase">NEXUS CORE</span>
          </div>
        )}
      </div>
      {/* Stage Lighting Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(24,24,24,0.6)_100%)]" />
    </div>
  );
};

export const WhyChooseUs = () => {
  return (
    <section id="why-nexus-core" className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-12 py-24 lg:py-36">
      {/* Oversized Background Watermark */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden select-none">
        <span className="text-[14vw] font-black tracking-tighter text-white/[0.012] font-mono uppercase whitespace-nowrap">
          PRECISION
        </span>
      </div>

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
                <CardImage src={card.image} alt={card.title} />
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

