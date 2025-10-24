import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-sky-500 rounded-lg flex items-center justify-center">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">GrúasMax</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-slate-700 hover:text-blue-500 transition-colors">Inicio</a>
            <a href="#servicios" className="text-slate-700 hover:text-blue-500 transition-colors">Servicios</a>
            <a href="#flota" className="text-slate-700 hover:text-blue-500 transition-colors">Flota</a>
            <a href="#contacto" className="text-slate-700 hover:text-blue-500 transition-colors">Contacto</a>
            <Button asChild className="bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600">
              <a href="#contacto">Contactar Ahora</a>
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-slate-200"
        >
          <div className="px-4 py-4 space-y-4">
            <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="block text-slate-700 hover:text-blue-500">Inicio</a>
            <a href="#servicios" onClick={() => setIsMenuOpen(false)} className="block text-slate-700 hover:text-blue-500">Servicios</a>
            <a href="#flota" onClick={() => setIsMenuOpen(false)} className="block text-slate-700 hover:text-blue-500">Flota</a>
            <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="block text-slate-700 hover:text-blue-500">Contacto</a>
            <Button asChild className="w-full bg-gradient-to-r from-blue-500 to-sky-500">
              <a href="#contacto" onClick={() => setIsMenuOpen(false)}>Contactar Ahora</a>
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Header;