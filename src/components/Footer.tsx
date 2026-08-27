'use client';

import React from 'react';
import Image from 'next/image';
import { Mail, MapPin, Phone, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '@/constants/data';

const quickLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#galeria', label: 'Trabajos' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-zinc-950 text-gray-400 border-t border-white/5 overflow-hidden">
      
      {/* Decorative Line Top */}
      <div className="h-1 w-full bg-gradient-to-r from-brand-green via-brand-yellow to-brand-green-light" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <a href="#inicio" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 overflow-hidden rounded-lg bg-white/5 p-1 transition-transform group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="AEP Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-display tracking-wider text-white group-hover:text-brand-yellow transition-colors duration-300">
                  AEP
                </span>
                <span className="text-[10px] uppercase tracking-widest text-brand-green font-semibold">
                  Servicios Agropecuarios
                </span>
              </div>
            </a>
            <p className="text-sm font-light leading-relaxed max-w-sm">
              Brindamos soluciones integrales de siembra y labranza con maquinaria de última generación y agricultura de precisión para maximizar la rentabilidad de su campo.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-yellow/30 hover:bg-brand-yellow/10 hover:text-brand-yellow flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-yellow/30 hover:bg-brand-yellow/10 hover:text-brand-yellow flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Navigation Column (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h3 className="text-white font-bold font-display text-sm uppercase tracking-wider border-l-2 border-brand-green pl-3">
              Enlaces Rápidos
            </h3>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-light hover:text-brand-yellow transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contacts Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="text-white font-bold font-display text-sm uppercase tracking-wider border-l-2 border-brand-green pl-3">
              Contacto y Oficinas
            </h3>
            <ul className="flex flex-col gap-4">
              
              {/* Phone contact */}
              <li className="flex items-start gap-3.5">
                <Phone className="w-4 h-4 text-brand-yellow shrink-0 mt-1" />
                <div className="text-sm font-light">
                  <span className="block text-white font-semibold">Teléfono / WhatsApp</span>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="hover:text-brand-yellow transition-colors font-medium"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                </div>
              </li>

              {/* Email contact */}
              <li className="flex items-start gap-3.5">
                <Mail className="w-4 h-4 text-brand-yellow shrink-0 mt-1" />
                <div className="text-sm font-light">
                  <span className="block text-white font-semibold">Correo Electrónico</span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="hover:text-brand-yellow transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </li>

              {/* Address contact */}
              <li className="flex items-start gap-3.5">
                <MapPin className="w-4 h-4 text-brand-yellow shrink-0 mt-1" />
                <div className="text-sm font-light">
                  <span className="block text-white font-semibold">Ubicación</span>
                  <a
                    href={COMPANY_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-yellow transition-colors"
                  >
                    {COMPANY_INFO.address}
                  </a>
                </div>
              </li>

            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/5 my-12" />

        {/* Bottom copyright & scroll-up */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs font-light text-center sm:text-left text-gray-500">
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. Todos los derechos reservados.
            <span className="block sm:inline sm:ml-2 text-[10px] text-gray-600 uppercase tracking-widest font-semibold mt-1 sm:mt-0">
              Desarrollado con Precisión Tecnológica
            </span>
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-green/30 hover:bg-brand-green/10 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 focus:outline-none"
            aria-label="Subir al inicio"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
