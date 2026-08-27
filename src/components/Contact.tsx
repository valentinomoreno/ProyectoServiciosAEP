'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, PhoneCall, Mail, MapPin, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/constants/data';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!formData.name.trim()) {
      tempErrors.name = 'El nombre es obligatorio.';
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = 'El teléfono es obligatorio.';
    }
    
    // Email regex check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = 'El correo electrónico es obligatorio.';
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = 'El correo electrónico no es válido.';
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'El mensaje no puede estar vacío.';
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'El mensaje debe tener al menos 10 caracteres.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section id="contacto" className="relative py-24 sm:py-32 bg-earth-gray overflow-hidden">
      
      {/* Decorative highlights */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Info Side (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs sm:text-sm font-bold tracking-widest text-brand-yellow uppercase mb-3 block">
                Contacto Directo
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight mb-6 leading-tight">
                ¿Listo para potenciar tu campo?
              </h2>
              <p className="text-gray-300 font-light text-base leading-relaxed mb-8">
                Completa el formulario y responderemos a la brevedad con un presupuesto personalizado para las hectáreas e implementos requeridos. Si lo prefieres, puedes contactarnos de forma inmediata a través de nuestros canales oficiales.
              </p>

              {/* Direct channels links list */}
              <div className="space-y-6">
                <a
                  href={`https://wa.me/${COMPANY_INFO.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green-light border border-brand-green-light/20 group-hover:bg-brand-green/20 group-hover:border-brand-green/30 transition-all duration-300 shadow-md">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider block">
                      Llamada o WhatsApp
                    </span>
                    <span className="text-white group-hover:text-brand-yellow font-bold text-sm sm:text-base font-display transition-colors">
                      {COMPANY_INFO.phoneDisplay}
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green-light border border-brand-green-light/20 group-hover:bg-brand-green/20 group-hover:border-brand-green/30 transition-all duration-300 shadow-md">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider block">
                      Envíenos un Correo
                    </span>
                    <span className="text-white group-hover:text-brand-yellow font-bold text-sm sm:text-base font-display transition-colors">
                      {COMPANY_INFO.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green-light border border-brand-green-light/20 shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider block">
                      Nuestra Administración
                    </span>
                    <span className="text-white font-bold text-sm sm:text-base font-display">
                      Silvio Pellico, Córdoba
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent message */}
            <div className="hidden lg:block border-l-2 border-brand-yellow/30 pl-4 py-2 mt-12 bg-white/[0.01] rounded-r-lg max-w-sm">
              <span className="text-xs italic text-gray-400 font-light leading-relaxed">
                &ldquo;Brindamos soluciones integrales con rapidez logística para cumplir con las fechas óptimas de siembra.&rdquo;
              </span>
            </div>

          </div>

          {/* Form Box (Right) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl border border-white/10 bg-zinc-950/40 backdrop-blur-md shadow-2xl relative min-h-[500px]">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                    noValidate
                  >
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-wide border-b border-white/5 pb-4 mb-4 flex items-center justify-between">
                      <span>Consulta por WhatsApp</span>
                      <MessageCircle className="w-6 h-6 text-[#25D366]" />
                    </h3>

                    {/* Nombre input */}
                    <div className="relative">
                      <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        Nombre Completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full bg-white/[0.03] border rounded-xl px-4 py-3.5 text-sm sm:text-base text-white focus:outline-none focus:ring-1 transition-all ${
                          errors.name
                            ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/30'
                            : 'border-white/10 focus:border-brand-green focus:ring-brand-green/30'
                        }`}
                        placeholder="Ej. Juan Pérez"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.name}</p>
                      )}
                    </div>

                    {/* Teléfono & Email row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Teléfono input */}
                      <div>
                        <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                          Número de Teléfono
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full bg-white/[0.03] border rounded-xl px-4 py-3.5 text-sm sm:text-base text-white focus:outline-none focus:ring-1 transition-all ${
                            errors.phone
                              ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/30'
                              : 'border-white/10 focus:border-brand-green focus:ring-brand-green/30'
                          }`}
                          placeholder="Ej. +54 9 353 456-7890"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.phone}</p>
                        )}
                      </div>

                      {/* Email input */}
                      <div>
                        <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                          Correo Electrónico
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full bg-white/[0.03] border rounded-xl px-4 py-3.5 text-sm sm:text-base text-white focus:outline-none focus:ring-1 transition-all ${
                            errors.email
                              ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/30'
                              : 'border-white/10 focus:border-brand-green focus:ring-brand-green/30'
                          }`}
                          placeholder="Ej. juan@correo.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email}</p>
                        )}
                      </div>

                    </div>

                    {/* Mensaje input */}
                    <div className="relative">
                      <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        Detalle de la consulta / Presupuesto
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full bg-white/[0.03] border rounded-xl px-4 py-3.5 text-sm sm:text-base text-white focus:outline-none focus:ring-1 transition-all resize-none ${
                          errors.message
                            ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/30'
                            : 'border-white/10 focus:border-brand-green focus:ring-brand-green/30'
                        }`}
                        placeholder="Describa el tipo de labor (siembra/labranza), hectáreas aproximadas, zona y fecha estimada..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.message}</p>
                      )}
                    </div>

                    {/* WhatsApp Button */}
                    <a
                      href={`https://wa.me/${COMPANY_INFO.phone}?text=${encodeURIComponent(
                        formData.message ? `Hola, soy ${formData.name}. ${formData.message}` : COMPANY_INFO.whatsappMessage
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-[#25D366]/20 transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                      <div className="relative w-6 h-6">
                        <img src="/whatsapp-logo.png" alt="WhatsApp" className="w-full h-full object-contain" />
                      </div>
                      <span>Enviar Consulta por WhatsApp</span>
                    </a>

                  </motion.form>
                ) : (
                  <motion.div
                    key="success-box"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-16 px-4 absolute inset-0"
                  >
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-brand-green/10 text-brand-green-light border border-brand-green-light/20 mb-6 animate-bounce">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight mb-3">
                      ¡Consulta Recibida!
                    </h3>
                    
                    <p className="text-gray-300 font-light text-sm sm:text-base max-w-md leading-relaxed mb-8">
                      Muchas gracias por contactarse con AEP. Nuestro equipo técnico evaluará las especificaciones de su solicitud y le enviará un presupuesto detallado a la brevedad.
                    </p>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-white/5 hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-xl border border-white/10 transition-colors"
                    >
                      Enviar otra consulta
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
