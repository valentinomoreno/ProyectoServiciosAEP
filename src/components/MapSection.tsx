'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '@/constants/data';

export default function MapSection() {
  return (
    <section className="relative py-24 bg-zinc-950/40 overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-green/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-brand-yellow uppercase mb-3 block">
            Ubicación Estratégica
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight">
            Nuestra Base Operativa
          </h2>
          <p className="text-gray-400 font-light mt-2 max-w-2xl text-sm sm:text-base">
            Prestamos servicios en Silvio Pellico, Córdoba y zonas de influencia, desplazando nuestros equipos directamente hacia tu establecimiento rural.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Panels (Left) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl border border-white/5 bg-zinc-950/60 flex flex-col justify-between"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-green/10 text-brand-green-light border border-brand-green-light/10 mb-6">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider block mb-1">
                  Teléfono
                </span>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-white hover:text-brand-yellow font-bold text-sm sm:text-base font-display transition-colors"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl border border-white/5 bg-zinc-950/60 flex flex-col justify-between"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-green/10 text-brand-green-light border border-brand-green-light/10 mb-6">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider block mb-1">
                  Correo Electrónico
                </span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-white hover:text-brand-yellow font-bold text-sm sm:text-base font-display transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl border border-white/5 bg-zinc-950/60 flex flex-col justify-between"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-green/10 text-brand-green-light border border-brand-green-light/10 mb-6">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider block mb-1">
                  Ubicación
                </span>
                <span className="text-white font-bold text-sm sm:text-base font-display block">
                  Silvio Pellico, Córdoba
                </span>
                <span className="text-xs text-gray-400 font-light block">
                  República Argentina
                </span>
              </div>
            </motion.div>

            {/* Hours Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-2xl border border-white/5 bg-zinc-950/60 flex flex-col justify-between"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-green/10 text-brand-green-light border border-brand-green-light/10 mb-6">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider block mb-1">
                  Horarios de Atención
                </span>
                <span className="text-white font-bold text-sm sm:text-base font-display block">
                  Lunes a Viernes
                </span>
                <span className="text-xs text-gray-400 font-light block">
                  08:00 - 19:00
                </span>
                <span className="text-xs text-gray-400 font-light block">
                  Sábados: 09:00 - 14:00
                </span>
              </div>
            </motion.div>

          </div>

          {/* Interactive Map (Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative min-h-[350px] bg-zinc-900 group"
          >
            {/* Google Map iframe */}
            <iframe
              src={COMPANY_INFO.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AEP Ubicación Google Maps"
              className="grayscale invert opacity-80 group-hover:opacity-90 transition-opacity duration-300 min-h-[350px] h-full"
            />
            
            {/* Dark Card Overlay on top of Map */}
            <div className="absolute bottom-6 left-6 right-6 sm:left-8 bg-earth-gray/90 backdrop-blur-md p-4 rounded-xl border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
              <div>
                <h4 className="text-white font-bold font-display text-sm tracking-wide">
                  Silvio Pellico, Córdoba
                </h4>
                <p className="text-xs text-gray-400 font-light mt-0.5">
                  Establecimiento central y galpones operativos.
                </p>
              </div>
              <a
                href={COMPANY_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-brand-green hover:bg-brand-green-light text-white text-xs font-bold px-4 py-2.5 rounded-lg border border-brand-green-light/20 shadow-md transition-colors whitespace-nowrap"
              >
                Cómo Llegar
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
