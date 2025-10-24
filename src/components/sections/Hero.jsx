import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="inicio" className="pt-16 hero-gradient crane-pattern min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight gradient-text">
              Movemos lo
              <span className="block gradient-text">Imposible</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-slate-300 leading-relaxed">
              Servicios profesionales de grúas con más de 15 años de experiencia. 
              Tecnología de punta y personal certificado para tus proyectos más exigentes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-lg px-8 py-4">
                <a href="#contacto">Contactar Ahora</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-4">
                <a href="#flota">Ver Flota</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img  
                alt="Grúa moderna trabajando en construcción"
                className="w-full h-auto rounded-2xl shadow-2xl"
                src="https://images.unsplash.com/photo-1692891321876-8019f757d91f" />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-500/20 to-sky-500/20 rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;