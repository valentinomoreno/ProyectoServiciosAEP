'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '@/constants/data';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.phone}?text=${encodeURIComponent(
    COMPANY_INFO.whatsappMessage
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20ba5a] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      <span className="absolute right-16 bg-earth-gray text-white text-xs py-1 px-3 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md border border-white/5 font-medium tracking-wide">
        WhatsApp Directo
      </span>
    </motion.a>
  );
}
