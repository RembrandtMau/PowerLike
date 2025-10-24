import React from 'react';
import { Truck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-sky-500 rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">GrúasMax</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Líderes en servicios de grúas y transporte de maquinaria pesada. 
              Comprometidos con la excelencia y la seguridad.
            </p>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Servicios</span>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#servicios" className="hover:text-blue-400 transition-colors">Transporte de Maquinaria</a></li>
              <li><a href="#servicios" className="hover:text-blue-400 transition-colors">Montaje Industrial</a></li>
              <li><a href="#servicios" className="hover:text-blue-400 transition-colors">Servicios de Emergencia</a></li>
              <li><a href="#servicios" className="hover:text-blue-400 transition-colors">Alquiler por Horas</a></li>
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Contacto</span>
            <ul className="space-y-2 text-slate-400">
              <li><a href="tel:+15551234567" className="hover:text-blue-400 transition-colors">+1 (555) 123-4567</a></li>
              <li><a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">WhatsApp</a></li>
              <li><a href="mailto:contacto@gruasmax.com" className="hover:text-blue-400 transition-colors">contacto@gruasmax.com</a></li>
              <li>Av. Industrial 123, Ciudad</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} GrúasMax. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;