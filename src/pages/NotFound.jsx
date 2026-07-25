import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { ShieldAlert, Home } from 'lucide-react';

export const NotFound = () => {
  return (
    <MainLayout>
      <div className="relative max-w-xl mx-auto px-6 py-28 text-center">
        {/* Oversized 404 Watermark */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden select-none">
          <span className="text-[28vw] font-black tracking-tighter text-white/[0.015] font-mono">
            404
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Card className="p-10 space-y-6 relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
              className="w-16 h-16 bg-[#1C1C1C] border border-white/5 text-white rounded-full flex items-center justify-center mx-auto"
            >
              <ShieldAlert className="w-8 h-8" />
            </motion.div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#9D9D9D] block"
            >
              ERROR 404 • ROUTE UNREACHABLE
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-4xl font-light text-white tracking-tight"
            >
              Page Not Found
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[#9D9D9D] text-sm leading-relaxed"
            >
              The requested hardware telemetry endpoint does not exist or has been relocated.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="pt-2"
            >
              <Link to="/">
                <Button variant="primary" size="md" icon={Home}>
                  Return to Home
                </Button>
              </Link>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default NotFound;

