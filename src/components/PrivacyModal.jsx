import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield } from 'lucide-react';

const PrivacyModal = ({ isOpen, onClose }) => {
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
                    className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                        <div className="flex items-center gap-3">
                            <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                                <Shield size={24} />
                            </div>
                            <h2 className="text-xl font-bold text-slate-900">Aviso de Privacidad</h2>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500 hover:text-slate-700"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-6 overflow-y-auto text-slate-600 leading-relaxed space-y-4">
                        <p className="font-semibold text-slate-900">GRUAS POWER LIKE SA DE CV</p>
                        <p>
                            Con domicilio en calle Concordia 877, colonia La Federacha en Guadalajara, Jalisco, CP 44300.
                        </p>
                        <p>
                            No compartirá los datos personales proporcionados. Solo se utilizarán para:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Identificación de clientes al momento de realizar un servicio.</li>
                            <li>Facturación.</li>
                            <li>Mantener contacto antes y durante el trayecto de un servicio.</li>
                        </ul>
                        <p>
                            Estos datos solo se recaban por medio de los canales oficiales de Grúas Power Like (internet, WhatsApp o vía telefónica).
                        </p>
                        <p>
                            <strong>Datos solicitados:</strong> Nombre, ubicación del vehículo, ubicación de destino, número telefónico principal y accesorio, y datos de facturación (constancia de situación fiscal u otros).
                        </p>
                        <p>
                            <strong>Contacto para privacidad:</strong> El correo electrónico para resolver alguna solicitud con este tema es <a href="mailto:servicios@powerlike.mx" className="text-blue-600 hover:underline">servicios@powerlike.mx</a>. La persona responsable es la encargada de servicio al cliente.
                        </p>
                        <p>
                            También se atenderán solicitudes en el domicilio de la empresa o en el teléfono: <a href="tel:3320150955" className="text-blue-600 hover:underline">33 2015 0955</a>.
                        </p>
                        <p className="text-sm text-slate-400 mt-6 pt-4 border-t border-slate-100">
                            Fecha de publicación: 1 de Noviembre del año 2025.
                        </p>
                    </div>

                    {/* Footer */}
                    <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end">
                        <button
                            onClick={onClose}
                            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                        >
                            Entendido
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default PrivacyModal;
