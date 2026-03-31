import React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import MainLayout from '@/app/layout/MainLayout';
import { motion } from 'framer-motion';

export const Route = createFileRoute('/about')({
  component: AboutPage,
});

function AboutPage() {
  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto py-24 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black text-[#1D1D1F] tracking-tight mb-12"
        >
          Engineering <br />with Purpose.
        </motion.h1>
        
        <div className="flex flex-col gap-8 text-xl text-[#86868B] font-medium leading-relaxed">
          <p>
            I'm Adedeji, a software engineer dedicated to building high-performance 
            web applications that don't just work—they feel incredible to use.
          </p>
          <p>
            With over 4 years of experience specializing in React, TypeScript, 
            and modern frontend architectures, I've helped scale platforms 
            in fintech, logistics, and edtech.
          </p>
          
          <div className="grid grid-cols-2 gap-8 mt-12">
             <div className="flex flex-col gap-2">
                <span className="text-sm font-black text-[#1D1D1F] uppercase tracking-widest">Focus</span>
                <span>User Experience & Engineering Quality</span>
             </div>
             <div className="flex flex-col gap-2">
                <span className="text-sm font-black text-[#1D1D1F] uppercase tracking-widest">Location</span>
                <span>Lagos, Nigeria (UTC+1)</span>
             </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
