import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import ContactModal from './ContactModal';
// Importing an image for background - assuming the first one is suitable or we use a placeholder if not
// We will use a direct path string for now as we don't have the import set up for all images yet
// Ideally we should import it, but for dynamic usage we might need to handle it differently.
// Let's try to import one specific image.
import heroBg from '../assets/images/5a4264af-1466-4ee5-9e11-869bd5d59bc8.JPG';

const Hero = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <section id="hero" className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Hero Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30" />
            </div>

            <div className="container-custom relative z-10 pt-20">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 font-medium text-sm mb-6 backdrop-blur-sm">
                            Servicio 24/7 en toda la República Mexicana
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                            Soluciones de <span className="text-blue-500">Grúa y Transporte</span> Profesional
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            Especialistas en rescate, salvamento y traslado de vehículos. Desde autos particulares hasta carga pesada, llegamos a donde nos necesites.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => setIsContactOpen(true)}
                                className="btn-primary flex items-center justify-center gap-2"
                            >
                                Solicitar Servicio
                                <ArrowRight size={20} />
                            </button>
                            <a href="tel:+523320150955" className="btn-secondary flex items-center justify-center gap-2">
                                <Phone size={20} />
                                <span>Llamar Ahora</span>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="mt-12 flex items-center gap-8 text-slate-400 text-sm font-medium"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span>Disponible Ahora</span>
                        </div>
                        <div>•</div>
                        <div>Cobertura Nacional</div>
                        <div>•</div>
                        <div>Atención Inmediata</div>
                    </motion.div>
                </div>
            </div>

            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </section>
    );
};

export default Hero;
