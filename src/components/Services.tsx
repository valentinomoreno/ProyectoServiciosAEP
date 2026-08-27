'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Phone, ArrowUpRight } from 'lucide-react';
import { SERVICES, ServiceItem, COMPANY_INFO } from '@/constants/data';

export default function Services() {
  const [filter, setFilter] = useState<'Todos' | 'Siembra' | 'Labranza'>('Todos');
  const [activeModal, setActiveModal] = useState<ServiceItem | null>(null);

  const filteredServices = SERVICES.filter((service) => {
    if (filter === 'Todos') return true;
    return service.category === filter;
  });

  const getWhatsAppMachineUrl = (machineName: string) => {
    const text = `Hola, me gustaría solicitar presupuesto e información sobre: ${machineName}`;
    return `https://wa.me/${COMPANY_INFO.phone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="servicios" className="relative py-24 sm:py-32 bg-zinc-950/40">
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-brand-green/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-brand-yellow uppercase mb-3 block">
            Nuestros Equipos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight mb-4">
            Servicios y Maquinaria
          </h2>
          <p className="text-gray-400 font-light text-base sm:text-lg">
            Contamos con equipos modernos de agricultura de precisión de marcas líderes para asegurar la máxima calidad de implantación y labranza.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-3 mb-12 sm:mb-16">
          {(['Todos', 'Siembra', 'Labranza'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 ${
                filter === tab
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white bg-white/[0.02] border border-white/5 hover:bg-white/5'
              }`}
            >
              {filter === tab && (
                <motion.span
                  layoutId="active-tab"
                  className="absolute inset-0 bg-brand-green rounded-full border border-brand-green-light/20 -z-10"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              {tab}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={service.id}
                onClick={() => setActiveModal(service)}
                className="group cursor-pointer flex flex-col justify-between h-full rounded-2xl overflow-hidden border border-white/5 bg-zinc-950/60 hover:bg-white/[0.03] hover:border-brand-green/20 shadow-xl transition-all duration-300"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900 border-b border-white/5">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/10 to-transparent opacity-60" />
                    
                    {/* Category Label */}
                    <span className="absolute top-4 left-4 bg-brand-green/80 border border-brand-green-light/20 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-md">
                      {service.category}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold font-display text-white mb-2 group-hover:text-brand-yellow transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm font-light leading-relaxed mb-6 line-clamp-2">
                      {service.shortDesc}
                    </p>

                    {/* Feature bullets (first 3 only for card preview) */}
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300 font-light">
                          <Check className="w-3.5 h-3.5 text-brand-green-light shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-[11px] font-semibold text-brand-green-light uppercase tracking-wider pl-6">
                          + Ver {service.features.length - 3} características más
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-white/5 mt-auto">
                  <span className="text-xs font-semibold text-gray-400 group-hover:text-white transition-colors uppercase tracking-widest">
                    Ver Detalles
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-brand-yellow group-hover:bg-brand-yellow/10 group-hover:border-brand-yellow/20 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Interactive Modal Portal overlay */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-4xl bg-earth-gray rounded-3xl border border-white/10 overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible"
            >
              
              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/80 text-gray-300 hover:text-white border border-white/10 focus:outline-none transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: Large Image */}
              <div className="relative w-full md:w-1/2 aspect-[16/10] md:aspect-auto md:min-h-[500px] bg-zinc-900">
                <Image
                  src={activeModal.image}
                  alt={activeModal.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-earth-gray via-transparent to-transparent" />
                <span className="absolute bottom-6 left-6 bg-brand-green border border-brand-green-light/20 backdrop-blur-md text-white text-xs uppercase font-bold tracking-widest px-4 py-1.5 rounded-lg shadow-md">
                  {activeModal.category}
                </span>
              </div>

              {/* Right Side: Details */}
              <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-[600px]">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight leading-tight mb-4">
                    {activeModal.title}
                  </h3>
                  <p className="text-gray-300 font-light text-sm sm:text-base leading-relaxed mb-6">
                    {activeModal.longDesc}
                  </p>

                  <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-yellow mb-3 font-display">
                    Especificaciones Técnicas:
                  </h4>
                  <ul className="grid grid-cols-1 gap-2.5 mb-8">
                    {activeModal.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-300 font-light">
                        <Check className="w-4 h-4 text-brand-green-light shrink-0 mt-0.5 border border-brand-green-light/10 rounded bg-brand-green/5 p-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Modal CTA */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                  <a
                    href={getWhatsAppMachineUrl(activeModal.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-light text-white font-bold py-3.5 px-6 rounded-xl border border-brand-green-light/20 shadow-lg transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    Consultar Presupuesto
                  </a>
                  <button
                    onClick={() => setActiveModal(null)}
                    className="w-full sm:w-auto inline-flex items-center justify-center bg-white/5 hover:bg-white/10 text-white font-semibold py-3.5 px-6 rounded-xl border border-white/10 transition-all"
                  >
                    Cerrar
                  </button>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
