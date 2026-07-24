import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import SplineErrorBoundary from './SplineErrorBoundary';
import { Button } from '../common/Button';

const checkWebGLSupport = () => {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
};

const HeroFallbackGraphic = () => (
  <div className="relative flex h-full w-full items-center justify-center bg-[#1C1C1C] overflow-hidden">
    <motion.div
      animate={{ scale: [1, 1.02, 1] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      className="relative flex h-80 w-80 items-center justify-center rounded-[24px] border border-white/5 bg-[#242424] shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
    >
      <div className="h-64 w-64 rounded-full border border-dashed border-white/10 p-8 flex items-center justify-center">
        <div className="h-44 w-44 rounded-[20px] bg-[#1C1C1C] border border-white/10 flex flex-col items-center justify-center relative">
          <span className="font-mono text-xl font-light tracking-[0.4em] text-white">NEXUS</span>
          <span className="font-mono text-[9px] tracking-[0.3em] text-[#9D9D9D] mt-2">QUANTUM DIE</span>
        </div>
      </div>
    </motion.div>
  </div>
);

export const Hero = () => {
  const containerRef = useRef(null);
  const [sceneLoaded, setSceneLoaded] = useState(false);
  const [uiReady, setUiReady] = useState(false);
  const [webglFailed, setWebglFailed] = useState(false);
  const [canvasTransform, setCanvasTransform] = useState('perspective(1800px) rotateX(0deg) rotateY(0deg)');

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -30]);

  const isWebGLSupported = useMemo(() => checkWebGLSupport(), []);

  useEffect(() => {
    const timer = window.setTimeout(() => setUiReady(true), 400);
    return () => window.clearTimeout(timer);
  }, [sceneLoaded]);

  const handlePointerMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
    const rotateY = ((x / bounds.width) - 0.5) * 4;
    const rotateX = -((y / bounds.height) - 0.5) * 4;
    setCanvasTransform(`perspective(1800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handlePointerLeave = () => {
    setCanvasTransform('perspective(1800px) rotateX(0deg) rotateY(0deg)');
  };

  return (
    <section ref={containerRef} className="relative min-h-[90vh] lg:min-h-screen w-full overflow-hidden bg-[#1C1C1C] flex flex-col justify-start">
      {/* Oversized Background Watermark Typography */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden select-none">
        <span className="text-[18vw] font-black tracking-tighter text-white/[0.015] font-mono uppercase whitespace-nowrap">
          NEXUS CORE
        </span>
      </div>

      <div
        className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing overflow-hidden"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <div
          className="h-full w-full transition-transform duration-700 ease-out origin-center scale-[1.15] translate-x-4 sm:translate-x-8 lg:translate-x-16"
          style={{ transform: `${canvasTransform} scale(1.15)` }}
        >
          {!isWebGLSupported || webglFailed ? (
            <HeroFallbackGraphic />
          ) : (
            <SplineErrorBoundary
              onError={() => setWebglFailed(true)}
              fallback={<HeroFallbackGraphic />}
            >
              <Spline
                scene="https://prod.spline.design/naw28P9AHb6G-heB/scene.splinecode"
                onLoad={() => setSceneLoaded(true)}
                onError={() => setWebglFailed(true)}
                className="h-full w-full opacity-80"
              />
            </SplineErrorBoundary>
          )}
        </div>
      </div>

      {/* Hero Content Overlay (Small, Compact, Top Left Corner) */}
      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="absolute z-10 top-[80px] sm:top-[90px] lg:top-[96px] left-6 sm:left-10 lg:left-[56px] w-full max-w-[320px] sm:max-w-[340px] pointer-events-none pr-6 sm:pr-0"
      >
        <div className="w-full space-y-3.5 pointer-events-auto">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={uiReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#9D9D9D]"
          >
            NEXUS CORE ARCHITECTURE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={uiReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
            className="text-2xl sm:text-3xl font-light tracking-tight text-white leading-tight"
          >
            Precision Silicon.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={uiReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="text-xs text-[#9D9D9D] font-normal leading-relaxed"
          >
            Engineered with quiet thermal dynamics and raw compute power.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={uiReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="pt-1.5 flex items-center gap-2.5"
          >
            <Link to="/products">
              <Button variant="primary" size="sm">
                Explore Hardware
              </Button>
            </Link>
            <Link to="/pc-builder">
              <Button variant="secondary" size="sm">
                Build Custom PC
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Subtle fade to bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-[#1C1C1C] to-transparent" />
    </section>
  );
};

export default Hero;
