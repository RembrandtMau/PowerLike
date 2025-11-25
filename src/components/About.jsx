import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white overflow-hidden">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Sobre Nosotros</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-6">Compromiso y Excelencia</h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Somos una empresa dedicada a brindar soluciones de transporte y asistencia vial con los más altos estándares de calidad. Nuestra prioridad es la seguridad y satisfacción de nuestros clientes.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                                        <Target size={24} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Nuestra Misión</h3>
                                    <p className="text-slate-600">
                                        Que sus automotores y mercancías lleguen Bien y a Tiempo. Nos esforzamos por garantizar la integridad de su patrimonio en cada traslado.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                                        <Eye size={24} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Nuestra Visión</h3>
                                    <p className="text-slate-600">
                                        Llevarles o Entregarles sus automotores y/o mercancías, en condiciones óptimas y en tiempo Récord. Aspiramos a ser líderes en el sector por nuestra eficiencia.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-20 blur-2xl" />
                        <div className="relative bg-slate-900 rounded-2xl p-8 text-white overflow-hidden">
                            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-500 rounded-full opacity-20 blur-3xl" />
                            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-indigo-500 rounded-full opacity-20 blur-3xl" />

                            <h3 className="text-2xl font-bold mb-6 relative z-10">¿Por qué elegirnos?</h3>
                            <ul className="space-y-4 relative z-10">
                                {[
                                    "Atención personalizada 24/7",
                                    "Cobertura en toda la República",
                                    "Unidades modernas y equipadas",
                                    "Personal altamente capacitado",
                                    "Seguimiento en tiempo real"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs">✓</div>
                                        <span className="text-slate-200">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
