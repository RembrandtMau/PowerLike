import React from 'react';
import { Truck, Car, Shield, Clock, MapPin, Package } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
            title: "Grúa y Rescate",
            description: "Servicio especializado de grúa, rescate, salvamento y traslado de vehículos.",
            icon: <Truck size={40} />,
            features: [
                "Camiones de Carga",
                "Camiones Medianos y Chicos",
                "Vehículos Utilitarios",
                "Uso Personal"
            ]
        },
        {
            title: "Traslado de Mercancía",
            description: "Transporte seguro y eficiente para su carga a cualquier destino.",
            icon: <Package size={40} />,
            features: [
                "Servicio de Torton (hasta 20 ton)",
                "Servicio de Rabón (hasta 10 ton)",
                "Logística Integral",
                "Rastreo Satelital"
            ]
        },
        {
            title: "Cobertura Total",
            description: "Estamos donde nos necesitas, cuando nos necesitas.",
            icon: <MapPin size={40} />,
            features: [
                "Servicio a toda la República Mexicana",
                "Atención 24 Horas",
                "365 Días al Año",
                "Respuesta Inmediata"
            ]
        }
    ];

    return (
        <section id="services" className="py-20 bg-slate-50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Nuestros Servicios</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">Soluciones Integrales</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Ofrecemos una amplia gama de servicios de transporte y asistencia vial diseñados para cubrir todas sus necesidades.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100 group"
                        >
                            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                            <p className="text-slate-600 mb-6">{service.description}</p>
                            <ul className="space-y-3">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-slate-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
