import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        // Dynamically import all JPG images from the assets/images directory
        const imageModules = import.meta.glob('../assets/images/*.JPG', { eager: true, query: '?url', import: 'default' });
        const imageList = Object.values(imageModules);
        setImages(imageList);
    }, []);

    return (
        <section id="gallery" className="py-20 bg-slate-50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Nuestra Flota</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">Galería de Trabajo</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Conozca nuestra flota y algunos de los trabajos realizados. Calidad y profesionalismo en cada servicio.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="relative group aspect-square overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-xl transition-all"
                            onClick={() => setSelectedImage(src)}
                        >
                            <img
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <ZoomIn className="text-white" size={32} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={40} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            src={selectedImage}
                            alt="Full size"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
