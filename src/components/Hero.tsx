'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, ArrowRight, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/constants/data';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.phone}?text=${encodeURIComponent(
    COMPANY_INFO.whatsappMessage
  )}`;

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-earth-gray"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center select-none"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          y: backgroundY,
          scale: 1.1 // Slightly scaled to avoid edges during parallax
        }}
      />

      {/* Radial and Linear Overlays for Premium Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-earth-gray via-earth-gray/60 to-earth-gray/30" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-earth-gray/90" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="flex flex-col items-center"
        >


          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 font-display"
          >
            AEP
            <span className="block text-brand-yellow font-black mt-2">
              Servicios Agropecuarios
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10"
          >
            Maquinaria de última generación para maximizar la productividad y eficiencia de tu campo.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex justify-center items-center w-full"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-base sm:text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-[#25D366]/20 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <div className="relative w-7 h-7">
                <img src="/whatsapp-logo.png" alt="WhatsApp" className="w-full h-full object-contain" />
              </div>
              <span>Contactar por WhatsApp</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Mouse Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        onClick={() => {
          document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] text-gray-400 tracking-widest uppercase font-medium">Descubre Más</span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full p-1 flex justify-center">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 bg-brand-yellow rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
