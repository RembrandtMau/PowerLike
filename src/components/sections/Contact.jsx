import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            ¿Listo para <span className="gradient-text">Comenzar?</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Contáctanos hoy mismo y descubre por qué somos la empresa de grúas más confiable
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <a href="tel:+15551234567" className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-sky-500 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 group-hover:gradient-text transition-colors">Teléfono</h3>
                <p className="text-slate-300 group-hover:text-white transition-colors">+1 (555) 123-4567</p>
              </div>
            </a>
            
            <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-sky-500 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                    <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-1 group-hover:gradient-text transition-colors">WhatsApp</h3>
                    <p className="text-slate-300 group-hover:text-white transition-colors">Chatea con nosotros ahora</p>
                </div>
            </a>

            <a href="mailto:contacto@gruasmax.com" className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-sky-500 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 group-hover:gradient-text transition-colors">Email</h3>
                <p className="text-slate-300 group-hover:text-white transition-colors">contacto@gruasmax.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-sky-500 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Ubicación</h3>
                <p className="text-slate-300">Av. Industrial 123, Ciudad</p>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 mt-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Disponibles 24/7</h3>
              <p className="text-slate-300 mb-4">
                Servicios de emergencia disponibles las 24 horas del día, los 7 días de la semana.
              </p>
              <Button asChild className="bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600">
                <a href="tel:+15551234567">Llamar Ahora</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img  
              alt="Equipo profesional de GrúasMax"
              className="w-full h-auto rounded-2xl shadow-2xl"
             src="https://images.unsplash.com/photo-1672881397131-616179f73400" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;