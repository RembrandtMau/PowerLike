import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                        <h2 className="text-xl font-bold text-slate-900">Elige una opción</h2>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500 hover:text-slate-700"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col gap-4">
                        <a
                            href="tel:+523320150955"
                            className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-all group"
                        >
                            <div className="bg-blue-100 p-3 rounded-full text-blue-600 group-hover:scale-110 transition-transform">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900">Llamar por Teléfono</h3>
                                <p className="text-slate-500 text-sm">+52 (33) 2015 0955</p>
                            </div>
                        </a>

                        <a
                            href="mailto:servicios@powerlike.mx"
                            className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-all group"
                        >
                            <div className="bg-blue-100 p-3 rounded-full text-blue-600 group-hover:scale-110 transition-transform">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900">Enviar Correo</h3>
                                <p className="text-slate-500 text-sm">servicios@powerlike.mx</p>
                            </div>
                        </a>

                        <a
                            href="https://wa.me/523323105555"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-green-500 hover:bg-green-50 transition-all group"
                        >
                            <div className="bg-green-100 p-3 rounded-full text-green-600 group-hover:scale-110 transition-transform">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-message-circle"
                                >
                                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900">WhatsApp</h3>
                                <p className="text-slate-500 text-sm">33 2310 5555</p>
                            </div>
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ContactModal;
