import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Settings, Shield, Clock } from 'lucide-react';

const services = [
  {
    icon: <Truck className="w-8 h-8 text-blue-500" />,
    title: "Transporte de Maquinaria",
    description: "Movemos equipos pesados con total seguridad y precisión"
  },
  {
    icon: <Settings className="w-8 h-8 text-sky-500" />,
    title: "Montaje Industrial",
    description: "Instalación y montaje de estructuras industriales complejas"
  },
  {
    icon: <Shield className="w-8 h-8 text-cyan-500" />,
    title: "Servicios de Emergencia",
    description: "Disponibles 24/7 para situaciones críticas y urgentes"
  },
  {
    icon: <Clock className="w-8 h-8 text-indigo-500" />,
    title: "Alquiler por Horas",
    description: "Flexibilidad total con tarifas competitivas por tiempo"
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales para todas tus necesidades de elevación y transporte
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="service-card group"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;