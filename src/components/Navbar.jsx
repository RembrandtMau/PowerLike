import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Truck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/GRUAS LIKE_page-0001.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '#hero' },
        { name: 'Servicios', href: '#services' },
        { name: 'Nosotros', href: '#about' },
        { name: 'Galería', href: '#gallery' },
    ];

    const handleScroll = (e, href) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
            <div className="container-custom flex justify-between items-center">
                {/* Logo */}
                <a
                    href="#hero"
                    onClick={(e) => handleScroll(e, '#hero')}
                    className="flex items-center gap-2"
                >
                    <img src={logo} alt="PowerLike Logo" className="h-12 object-contain" />
                    <span className={`text-2xl font-bold tracking-tight font-heading ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                        Power<span className="text-blue-500">Like</span>
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleScroll(e, link.href)}
                            className={`font-medium transition-colors hover:text-blue-600 ${scrolled ? 'text-slate-600' : 'text-white/90 hover:text-white'}`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="tel:+523320150955" className="btn-primary flex items-center gap-2 !py-2 !px-4">
                        <Phone size={18} />
                        <span>Llamar Ahora</span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-slate-900' : 'text-white'}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-slate-200 overflow-hidden"
                    >
                        <div className="container-custom py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-slate-700 hover:text-blue-600"
                                    onClick={(e) => handleScroll(e, link.href)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a href="tel:+523320150955" className="btn-primary w-full flex justify-center items-center gap-2">
                                <Phone size={18} />
                                <span>Llamar Ahora</span>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
