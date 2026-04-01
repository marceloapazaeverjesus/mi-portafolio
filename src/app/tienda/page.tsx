'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, ExternalLink, ShieldCheck, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { apps } from '@/data/products'; // Usamos tus datos existentes

export default function TiendaPage() {
  const sectionHeight = "min-h-[calc(100vh-80px)]";

  return (
    <main className={`w-full bg-[#050505] scroll-smooth no-scrollbar pt-20`}>
      
      {/* HEADER DE TIENDA */}
      <section className="w-full py-12 lg:py-20 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            className="text-blue-500 font-mono text-[10px] tracking-[0.5em] uppercase mb-4"
          >
            Soluciones Listas
          </motion.h2>
          <h1 className="text-4xl lg:text-7xl font-black text-white italic uppercase mb-6">
            Digital <span className="text-zinc-700">Store</span>
          </h1>
          <p className="text-gray-400 text-sm lg:text-base max-w-2xl mx-auto leading-relaxed">
            Adquiere licencias de software pre-construido, plantillas de alto rendimiento y herramientas de automatización diseñadas para escalar tu negocio.
          </p>
        </div>
      </section>

      {/* GRID DE PRODUCTOS */}
      <section className={`${sectionHeight} w-full p-6 lg:p-20`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {apps.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-zinc-900/20 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-blue-500/30 transition-all duration-500"
            >
              {/* Preview del Producto (Mockup) */}
              <div className="relative h-[300px] w-full bg-zinc-950 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Tu imagen de 200px max-height adaptada */}
                <div className="relative w-[160px] h-[200px] shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden border border-white/10 group-hover:scale-110 transition-transform duration-700">
                  <Image 
                    src={app.image} 
                    alt={app.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Detalles del Producto */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-black text-white uppercase italic tracking-tighter">{app.name}</h3>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-bold rounded-full border border-blue-500/20">
                    V1.0
                  </span>
                </div>
                
                <p className="text-gray-500 text-xs mb-6 line-clamp-2">
                  Software optimizado para dispositivos móviles con integración de base de datos en tiempo real.
                </p>

                {/* Características rápidas */}
                <div className="flex gap-4 mb-8">
                  <div className="flex items-center gap-1 text-[10px] text-zinc-400 uppercase font-bold">
                    <ShieldCheck className="w-3 h-3 text-emerald-500" /> Seguro
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-zinc-400 uppercase font-bold">
                    <Clock className="w-3 h-3 text-blue-500" /> Soporte
                  </div>
                </div>

                {/* Botón de Acción */}
                <Link 
                  href={app.link || "#"}
                  className="w-full flex items-center justify-center gap-3 py-4 bg-white text-black font-extrabold rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-500 uppercase text-[10px] tracking-widest"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver Detalles
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER DE CONFIANZA (Power-ups) */}
      <section className="w-full py-12 border-t border-white/5 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start gap-3">
            <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">⚡</div>
            <h4 className="text-white font-bold text-sm uppercase">Entrega Inmediata</h4>
            <p className="text-gray-500 text-xs">Acceso instantáneo a los archivos tras la confirmación.</p>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-3">
            <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">🛠️</div>
            <h4 className="text-white font-bold text-sm uppercase">Código Limpio</h4>
            <p className="text-gray-500 text-xs">Arquitectura escalable y fácil de personalizar.</p>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-3">
            <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">🛡️</div>
            <h4 className="text-white font-bold text-sm uppercase">Garantía Técnica</h4>
            <p className="text-gray-500 text-xs">Soporte técnico directo para la implementación inicial.</p>
          </div>
        </div>
      </section>
    </main>
  );
}