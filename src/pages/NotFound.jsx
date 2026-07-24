import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { ShieldAlert, Home } from 'lucide-react';

export const NotFound = () => {
  return (
    <MainLayout>
      <div className="max-w-xl mx-auto px-6 py-28 text-center">
        <Card className="p-10 space-y-6">
          <div className="w-16 h-16 bg-[#1C1C1C] border border-white/5 text-white rounded-full flex items-center justify-center mx-auto">
            <ShieldAlert className="w-8 h-8" />
          </div>

          <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#9D9D9D] block">
            ERROR 404 • ROUTE UNREACHABLE
          </span>

          <h1 className="text-4xl font-light text-white tracking-tight">
            Page Not Found
          </h1>

          <p className="text-[#9D9D9D] text-sm leading-relaxed">
            The requested hardware telemetry endpoint does not exist or has been relocated.
          </p>

          <div className="pt-2">
            <Link to="/">
              <Button variant="primary" size="md" icon={Home}>
                Return to Home
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
};

export default NotFound;
