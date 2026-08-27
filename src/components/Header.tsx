'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_INFO } from '@/constants/data';

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#galeria', label: 'Trabajos' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <a href="#inicio" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 overflow-hidden rounded-lg bg-white/5 p-1 transition-transform group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="AEP Logo"
                  fill
                  className="object-contain"
                  priority
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

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-brand-yellow transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-yellow after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={`https://wa.me/${COMPANY_INFO.phone}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-bold px-5 py-2.5 rounded-lg shadow-md hover:shadow-[#25D366]/20 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
              >
                <div className="relative w-5 h-5">
                  <Image src="/whatsapp-logo.png" alt="WhatsApp" fill className="object-contain" />
                </div>
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 h-6" /> : <Menu className="h-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[73px] z-30 md:hidden glass-nav shadow-2xl border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-3 bg-earth-gray/95">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg text-base font-semibold text-gray-300 hover:text-white hover:bg-white/5 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
                <a
                  href={`https://wa.me/${COMPANY_INFO.phone}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center bg-[#25D366] hover:bg-[#20ba5a] text-white text-base font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  <div className="relative w-6 h-6">
                    <Image src="/whatsapp-logo.png" alt="WhatsApp" fill className="object-contain" />
                  </div>
                  <span>WhatsApp Directo</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
