'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY, GalleryItem } from '@/constants/data';

const categories = [
  { id: 'todos', label: 'Todos' },
  { id: 'siembra', label: 'Siembra' },
  { id: 'labranza', label: 'Labranza' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'todos'
    ? GALLERY
    : GALLERY.filter(item => item.category === activeCategory);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="galeria" className="relative py-24 sm:py-32 bg-earth-gray overflow-hidden">
      
      {/* Decorative grids */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-brand-green/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-brand-yellow uppercase mb-3 block">
            Nuestra Galería
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight mb-4">
            Trabajos Realizados
          </h2>
          <p className="text-gray-400 font-light text-base sm:text-lg">
            Fotografías reales de nuestras maquinarias trabajando en el campo de nuestros clientes, demostrando precisión y cuidado del cultivo.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setLightboxIndex(null); // Reset lightbox references
              }}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 uppercase ${
                activeCategory === cat.id
                  ? 'bg-brand-yellow text-earth-gray border border-brand-yellow font-bold shadow-md shadow-brand-yellow/10'
                  : 'text-gray-400 hover:text-white bg-white/[0.02] border border-white/5 hover:bg-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Layout Grid */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className="break-inside-avoid relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-900 group cursor-pointer shadow-lg hover:border-brand-green/20 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative w-full h-auto overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-gray via-earth-gray/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-[10px] text-brand-yellow uppercase tracking-widest font-bold mb-1.5">
                      {item.category}
                    </span>
                    <h3 className="text-white text-base sm:text-lg font-bold font-display tracking-wide mb-3">
                      {item.title}
                    </h3>
                    <div className="inline-flex items-center gap-1.5 text-xs text-white/80 font-medium">
                      <ZoomIn className="w-4 h-4 text-brand-yellow" />
                      Ampliar imagen
                    </div>
                  </div>

                  {/* Absolute Zoom Icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100 duration-300">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Interactive Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />

            {/* Navigation Controls */}
            <button
              onClick={handlePrev}
              className="absolute left-4 z-10 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-colors focus:outline-none"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 z-10 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-colors focus:outline-none"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 z-10 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-colors focus:outline-none"
              aria-label="Cerrar vista"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Active Image Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-5xl max-h-[85vh] z-10 flex flex-col items-center select-none"
            >
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-w-full max-h-[75vh] object-contain rounded-xl border border-white/10"
              />
              
              {/* Caption */}
              <div className="text-center mt-4">
                <span className="text-xs uppercase tracking-widest text-brand-yellow font-bold">
                  {filteredItems[lightboxIndex].category}
                </span>
                <h3 className="text-white text-base sm:text-lg font-bold font-display mt-1">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <span className="text-xs text-gray-500 mt-0.5 block">
                  {lightboxIndex + 1} de {filteredItems.length}
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
