import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const cranes = [
  {
    name: "Grúa Móvil 50T",
    capacity: "50 Toneladas",
    height: "45 metros",
    features: ["Todo terreno", "Cabina climatizada", "Sistema GPS"]
  },
  {
    name: "Grúa Torre 80T",
    capacity: "80 Toneladas",
    height: "60 metros",
    features: ["Alta precisión", "Control remoto", "Certificada"]
  },
  {
    name: "Grúa Telescópica 25T",
    capacity: "25 Toneladas",
    height: "35 metros",
    features: ["Compacta", "Rápido montaje", "Versátil"]
  }
];

const Fleet = () => {
  return (
    <section id="flota" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Nuestra <span className="gradient-text">Flota</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Equipos modernos y certificados para garantizar la máxima seguridad y eficiencia
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cranes.map((crane, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64">
                <img  
                  alt={`${crane.name} - Grúa profesional`}
                  className="w-full h-full object-cover"
                 src="https://images.unsplash.com/photo-1625990699662-35bbb7241a16" />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-sky-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {crane.capacity}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-slate-900">{crane.name}</h3>
                <div className="flex items-center gap-4 mb-4 text-slate-600">
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    Altura: {crane.height}
                  </span>
                </div>
                <div className="space-y-2">
                  {crane.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-600">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button asChild className="w-full mt-6 bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600">
                  <a href="#contacto">Contactar Ahora</a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;