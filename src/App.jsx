import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Fleet from '@/components/sections/Fleet';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>GrúasMax - Servicios Profesionales de Grúas y Transporte</title>
        <meta name="description" content="Empresa líder en servicios de grúas, transporte de maquinaria pesada y montaje industrial. Disponibles 24/7 con la mejor tecnología y personal certificado." />
      </Helmet>

      <div className="min-h-screen bg-slate-50">
        <Header />
        <main>
          <Hero />
          <Services />
          <Fleet />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;