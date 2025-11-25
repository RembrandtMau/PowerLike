import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Truck } from 'lucide-react';
import PrivacyModal from './PrivacyModal';

const Footer = () => {
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

    return (
        <footer id="footer" className="bg-slate-900 text-slate-300 py-16">
            <div className="container-custom">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <a href="#" className="flex items-center gap-2 mb-6 text-white">
                            <div className="bg-blue-600 p-2 rounded-lg">
                                <Truck size={24} />
                            </div>
                            <span className="text-2xl font-bold tracking-tight">
                                Power<span className="text-blue-500">Like</span>
                            </span>
                        </a>
                        <p className="text-slate-400 mb-6 max-w-md">
                            Expertos en traslado de vehículos y mercancías. Servicio profesional, seguro y eficiente las 24 horas del día, los 365 días del año.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Enlaces Rápidos</h4>
                        <ul className="space-y-3">
                            <li><a href="#hero" className="hover:text-blue-400 transition-colors">Inicio</a></li>
                            <li><a href="#services" className="hover:text-blue-400 transition-colors">Servicios</a></li>
                            <li><a href="#about" className="hover:text-blue-400 transition-colors">Nosotros</a></li>
                            <li><a href="#gallery" className="hover:text-blue-400 transition-colors">Galería</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Contacto</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Phone className="text-blue-500 mt-1" size={20} />
                                <span>
                                    <a href="tel:+523320150955" className="hover:text-blue-400 transition-colors block">+52 (33) 2015 0955</a>
                                    <span className="text-sm text-slate-500">Atención 24/7</span>
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="text-blue-500 mt-1" size={20} />
                                <a href="mailto:contacto@powerlike.com" className="hover:text-blue-400 transition-colors">contacto@powerlike.com</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="text-blue-500 mt-1" size={20} />
                                <span>Cobertura en toda la República Mexicana</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} PowerLike. Todos los derechos reservados.</p>
                    <button
                        onClick={() => setIsPrivacyOpen(true)}
                        className="hover:text-blue-400 transition-colors underline decoration-slate-700 underline-offset-4"
                    >
                        Aviso de Privacidad
                    </button>
                </div>
            </div>

            <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
        </footer>
    );
};

export default Footer;
