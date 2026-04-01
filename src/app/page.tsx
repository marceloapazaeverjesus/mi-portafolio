'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Importación de datos y componentes
import { technologies } from '../data/technologies';
import { apps } from '../data/products';
import ServiceCard from '@/components/ServiceCard';

export default function Home() {
  const sectionHeight = "h-[calc(100vh-80px)]";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === apps.length - 1 ? 0 : prev + 1));
    }, 3000); 
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev === apps.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? apps.length - 1 : prev - 1));

  return (
    <main id="main-content" className={`w-full ${sectionHeight} overflow-y-scroll snap-y snap-mandatory bg-[#050505] scroll-smooth no-scrollbar`}>

      {/* GRUPO 1: HERO - Slider Horizontal en Mobile (<1024px) */}
      <section id="inicio" className={`${sectionHeight} w-full snap-start snap-always relative border-b border-white/5 overflow-hidden`}>
        <div className="flex lg:flex-row h-full w-full overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory no-scrollbar">
          
          {/* Bloque 1: Ingeniero */}
          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            className="min-w-[85%] lg:min-w-0 lg:flex-1 h-full snap-center flex flex-col justify-center p-8 lg:p-16 border-r border-white/5 bg-gradient-to-br from-blue-900/10 to-transparent"
          >
            <h1 className="text-3xl lg:text-5xl font-black text-white mb-4 uppercase italic leading-tight">
              Ingeniero de <br/><span className="text-blue-400 not-italic">Sistemas</span>
            </h1>
            <p className="text-gray-400 mb-8 max-w-sm text-xs lg:text-sm">
              Especializado en automatización logística con SQL y desarrollo Frontend.
            </p>
            <button className="w-fit px-6 py-3 bg-white text-black font-bold rounded-full text-sm">Descargar CV</button>
          </motion.div>

          {/* Bloque 2: Foto */}
          <div className="min-w-[85%] lg:min-w-0 lg:flex-1 h-full snap-center relative flex items-center justify-center bg-zinc-900/5">
            <div className="relative z-10 w-full h-[70%] lg:h-[80%] p-6 lg:p-10">
              <motion.div initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} className="w-full h-full rounded-[32px] border border-white/10 overflow-hidden bg-zinc-800/20 backdrop-blur-xl relative shadow-2xl">
                <Image src="/mi-foto.png" alt="Jesus Marcelo" fill className="object-cover opacity-90" priority />
              </motion.div>
            </div>
          </div>

          {/* Bloque 3: Software */}
          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            className="min-w-[85%] lg:min-w-0 lg:flex-1 h-full snap-center flex flex-col justify-center p-8 lg:p-16 bg-gradient-to-bl from-purple-900/10 to-transparent"
          >
            <h1 className="text-3xl lg:text-5xl font-black text-white mb-4 uppercase italic leading-tight">
              Software para <br/><span className="text-purple-400 not-italic">Tu Negocio</span>
            </h1>
            <p className="text-gray-400 mb-8 max-w-sm text-xs lg:text-sm">
              Transformo procesos manuales en sistemas automatizados y dashboards.
            </p>
            <button className="w-fit px-6 py-3 border border-purple-500 text-purple-400 font-bold rounded-full text-sm">Cotizar Proyecto</button>
          </motion.div>

        </div>
      </section>

      {/* GRUPO 2: STACK - Grid Responsivo */}
      <section id="proyectos" className={`${sectionHeight} w-full snap-start snap-always bg-[#080808] flex items-center justify-center border-b border-white/5 p-4`}>
        <div className="max-w-6xl mx-auto w-full text-center overflow-hidden">
          <h2 className="text-[10px] font-mono text-blue-500 tracking-[0.5em] uppercase mb-2">Stack Tecnológico</h2>
          <p className="text-3xl lg:text-6xl font-black text-white italic uppercase mb-8 lg:mb-16">Tool<span className="text-zinc-700">kit</span></p>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6 overflow-y-auto max-h-[60vh] lg:max-h-none no-scrollbar">
            {technologies.map((tech, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-14 h-14 lg:w-20 lg:h-20 bg-zinc-900 rounded-2xl lg:rounded-[2rem] border border-white/5 flex items-center justify-center mb-2 lg:mb-4">
                  <img src={tech.img} className="w-7 h-7 lg:w-10 lg:h-10 object-contain grayscale" alt={tech.name} />
                </div>
                <p className="text-[8px] lg:text-[9px] font-mono text-zinc-600 uppercase">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GRUPO 3: SERVICIOS - Scroll Vertical en Mobile */}
      <section id="servicios" className={`${sectionHeight} w-full snap-start snap-always bg-[#050505] flex items-center justify-center border-b border-white/5 p-6`}>
        <div className="max-w-6xl mx-auto w-full text-center h-full flex flex-col justify-center">
          <p className="text-3xl lg:text-6xl font-black text-white italic uppercase mb-8 lg:mb-16">Servi<span className="text-zinc-700">cios</span></p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 overflow-y-auto no-scrollbar py-2">
            <ServiceCard index={0} title="Mobile" color="blue" img="/tech/mobile-service.png" desc="Apps nativas con React Native." />
            <ServiceCard index={1} title="Web" color="purple" img="/tech/web-service.png" desc="Sistemas modernos con Next.js." />
            <ServiceCard index={2} title="Data" color="emerald" img="/tech/data-service.png" desc="Optimización con SQL y Power BI." />
          </div>
        </div>
      </section>

      {/* GRUPO 4: APPS */}
      <section id="tienda" className={`${sectionHeight} w-full snap-start snap-always bg-[#050505] relative overflow-hidden flex flex-col`}>
        <div className="flex-1 w-full flex flex-col items-center justify-between py-8 lg:py-16 relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="h-full w-full flex flex-col items-center justify-center gap-4 lg:gap-6"
            >
              <div className="relative w-[160px] md:w-[320px] h-[50%] lg:h-[65%] max-h-[200px] lg:max-h-[300px] aspect-[9/16] rounded-[2.5rem] lg:rounded-[3rem] border border-white/10 overflow-hidden bg-zinc-900 shadow-2xl">
                {apps.length > 0 && (
                  <Image src={apps[currentIndex].image} alt={apps[currentIndex].name} fill className="object-cover" priority />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="flex flex-col items-center gap-2 lg:gap-4 px-6">
                <h3 className="text-3xl lg:text-6xl font-black text-white italic tracking-tighter uppercase text-center">
                  {apps[currentIndex]?.name}
                </h3>
                <Link 
                  href={apps[currentIndex]?.link || "#"}
                  className="px-8 py-3 bg-white text-black font-black rounded-full text-[10px] uppercase tracking-[0.2em]"
                >
                  Explorar App
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-2 mb-4">
            {apps.map((_, i) => (
              <div key={i} className={`h-1 transition-all duration-700 rounded-full ${i === currentIndex ? 'w-10 lg:w-16 bg-blue-500' : 'w-3 lg:w-4 bg-white/10'}`} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}