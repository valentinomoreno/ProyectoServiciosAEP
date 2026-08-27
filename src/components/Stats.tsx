'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { STATS } from '@/constants/data';

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if we are running in browser context
    if (typeof window === 'undefined') return;

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const statNumbers = section.querySelectorAll('.stat-number');
    
    const ctx = gsap.context(() => {
      statNumbers.forEach((el) => {
        const targetVal = parseInt(el.getAttribute('data-target') || '0', 10);
        const id = el.getAttribute('data-id') || '';
        const isHectares = id === 'hectares';

        const obj = { val: 0 };
        
        gsap.to(obj, {
          val: targetVal,
          duration: 2.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          onUpdate: () => {
            const currentVal = Math.floor(obj.val);
            if (isHectares) {
              // Format with Spanish dots for thousands: 50.000
              el.textContent = currentVal.toLocaleString('es-AR').replace(/,/g, '.');
            } else {
              el.textContent = currentVal.toString();
            }
          },
          onComplete: () => {
            if (isHectares) {
              el.textContent = targetVal.toLocaleString('es-AR').replace(/,/g, '.');
            } else {
              el.textContent = targetVal.toString();
            }
          }
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative z-10 bg-gradient-to-b from-earth-gray to-zinc-950/80 border-y border-white/5 py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center justify-center text-center p-6 rounded-2xl glass-panel-light hover:border-brand-green/20 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="flex items-baseline justify-center text-4xl sm:text-5xl md:text-6xl font-black font-display text-white tracking-tight mb-2">
                <span className="text-brand-yellow font-extrabold">{stat.suffix}</span>
                <span
                  className="stat-number"
                  data-target={stat.value}
                  data-id={stat.id}
                >
                  0
                </span>
              </div>
              <div className="text-xs sm:text-sm font-semibold tracking-wider text-gray-400 uppercase max-w-[150px] sm:max-w-none">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
