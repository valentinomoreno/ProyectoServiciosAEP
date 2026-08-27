'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Zap, Award } from 'lucide-react';
import { VALUES } from '@/constants/data';

const iconMap = {
  technology: Cpu,
  efficiency: Zap,
  commitment: ShieldCheck,
  'experience-val': Award,
};

export default function Nosotros() {
  return (
    <section id="nosotros" className="relative py-24 sm:py-32 bg-earth-gray overflow-hidden">
      
      {/* Decorative subtle background highlights */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-green/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Visual Side (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            {/* Background Grid Pattern */}
            <div className="absolute -top-6 -left-6 w-32 h-32 text-white/5 pointer-events-none hidden sm:block">
              <svg width="100%" height="100%" fill="currentColor">
                <defs>
                  <pattern id="dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dots)" />
              </svg>
            </div>

            {/* Main Image Frame */}
            <div className="relative aspect-[4/3] sm:aspect-[1/1] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-950/80 p-8 flex items-center justify-center group">
              <Image
                src="/logo-nosotros.png"
                alt="AEP Servicios Rurales Logo"
                fill
                className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-gray via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>

            {/* Floating Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
              className="absolute -bottom-6 -right-4 sm:right-6 glass-panel py-5 px-6 rounded-2xl flex items-center gap-4 shadow-2xl border border-white/10"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-yellow/10 border border-brand-yellow/20">
                <Award className="w-6 h-6 text-brand-yellow" />
              </div>
              <div>
                <span className="block text-2xl font-black font-display text-white tracking-tight">
                  +15 Años
                </span>
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                  De Experiencia
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Side (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Tag */}
            <span className="text-xs sm:text-sm font-bold tracking-widest text-brand-yellow uppercase mb-3">
              Sobre Nosotros
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight mb-6 leading-tight">
              Eficiencia, tecnología y calidad en cada labor
            </h2>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed mb-8">
              AEP es una empresa dedicada a brindar servicios agropecuarios con maquinaria de última generación para productores rurales. Nos caracterizamos por integrar tecnologías avanzadas de agricultura de precisión para maximizar la productividad y sustentabilidad de su suelo, garantizando una excelente implantación y cuidado del cultivo.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {VALUES.map((val) => {
                const Icon = iconMap[val.id as keyof typeof iconMap] || ShieldCheck;
                return (
                  <div
                    key={val.id}
                    className="p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all hover:border-brand-green/20"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-green/10 text-brand-green-light border border-brand-green-light/10">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-bold text-white text-sm sm:text-base font-display">
                        {val.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
