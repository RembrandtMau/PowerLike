import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Truck } from 'lucide-react';
import PrivacyModal from './PrivacyModal';

const Footer = () => {
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

    const handleScroll = (e, href) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer id="footer" className="bg-slate-900 text-slate-300 py-16">
            <div className="container-custom">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <a
                            href="#hero"
                            onClick={(e) => handleScroll(e, '#hero')}
                            className="flex items-center gap-2 mb-6 text-white"
                        >
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
                            <li><a href="#hero" onClick={(e) => handleScroll(e, '#hero')} className="hover:text-blue-400 transition-colors">Inicio</a></li>
                            <li><a href="#services" onClick={(e) => handleScroll(e, '#services')} className="hover:text-blue-400 transition-colors">Servicios</a></li>
                            <li><a href="#about" onClick={(e) => handleScroll(e, '#about')} className="hover:text-blue-400 transition-colors">Nosotros</a></li>
                            <li><a href="#gallery" onClick={(e) => handleScroll(e, '#gallery')} className="hover:text-blue-400 transition-colors">Galería</a></li>
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
                                <a href="mailto:servicios@powerlike.mx" className="hover:text-blue-400 transition-colors">servicios@powerlike.mx</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="text-blue-500 mt-1"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                <a href="https://wa.me/523323105555" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                                    +52 (33) 2310 5555
                                </a>
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
