'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Portafolio() {
  const sectionHeight = "h-[calc(100vh-80px)]";

  const experiencia = [
    {
      año: "2016",
      puesto: "Técnico de Impresoras",
      habilidades: ["Mantenimiento Preventivo", "Mantenimiento Correctivo"],
      proyectos: "Implementación de impresoras con tintas continuas",
      color: "from-blue-500/20"
    },
    {
      año: "2017",
      puesto: "Técnico de Computadoras",
      habilidades: ["Mantenimiento Preventivo","Mantenimiento Correctivo"],
      proyectos: "Repotenciadores de su hardware",
      color: "from-blue-500/20"
    },
    {
      año: "2018",
      puesto: "Auxiliar de Almacén",
      habilidades: ["Gestión Logistica",  "Análisis de Datos"],
      proyectos: "Implementación de una nueva gestión logistica",
      color: "from-blue-500/20"
    },
    {
      año: "2019",
      puesto: "Asistente de Almacén",
      habilidades: ["Excel Avanzado","Gestión de Base de Datos","Análisis de Datos"],
      proyectos: "Desarrollo de sistema gestión logística - VBA",
      color: "from-blue-500/20"
    },
    {
      año: "2023",
      puesto: "Asistente Administrativo",
      habilidades: ["Excel Avanzado", "VBA", "Power BI"],
      proyectos: "Gestión de control de flota de vehículos",
      color: "from-purple-500/20"
    },
    {
      año: "2026",
      puesto: "Practicante de Ingeniería de Sistemas",
      habilidades: ["ERP Epicor", "Power Bi", "BAQ"],
      proyectos: "Gestor del proyecto: Mantenimiento de Planta",
      color: "from-emerald-500/20"
    }
  ];

  return (
    <main className={`w-full ${sectionHeight} overflow-y-scroll snap-y snap-mandatory bg-[#050505] scroll-smooth no-scrollbar`}>
      
      {/* GRUPO 1: PERFIL ACADÉMICO */}
      <section id="perfil" className={`${sectionHeight} w-full snap-start snap-always relative flex flex-col lg:flex-row border-b border-white/5 overflow-hidden`}>
        <div className="flex-1 flex flex-col justify-center p-8 lg:p-20 order-2 lg:order-1">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-blue-400 font-mono text-[10px] tracking-[0.4em] uppercase mb-4">Formación Académica</motion.h2>
          <h1 className="text-3xl lg:text-5xl font-black text-white uppercase italic leading-tight mb-6">
            Ingeniería de Sistemas <br/><span className="text-zinc-500 not-italic">e Informática</span>
          </h1>
          <p className="text-gray-400 text-sm lg:text-base max-w-xl mb-10 leading-relaxed">
            Soy **Egresado 2025 - II**. Mi enfoque está en la optimización de procesos empresariales, combinando el desarrollo tecnológico con la gestión logística estratégica.
          </p>
          <a href="#experiencia" className="w-fit px-8 py-4 bg-white text-black font-black rounded-full text-xs uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all shadow-xl shadow-white/5">
            Ver Experiencia
          </a>
        </div>

        {/* CONTENEDOR DE IMAGEN PROPORCIONAL */}
        <div className="flex-1 relative bg-zinc-900/5 order-1 lg:order-2 flex items-center justify-center p-8 lg:p-12">
          <div className="relative w-[75vw] h-[35vh] lg:w-[80%] lg:h-[75%] max-w-[450px] max-h-[550px]">
            <Image 
              src="/mi-foto.png" 
              alt="Ever Jesus" 
              fill 
              className="object-cover rounded-[40px] border border-white/10 grayscale hover:grayscale-0 transition-all duration-700" 
              priority
            />
          </div>
        </div>
      </section>

      {/* GRUPO 2: LÍNEA DE TIEMPO (HISTORIA) */}
      <section id="experiencia" className="w-full bg-[#050505]">
        {experiencia.map((exp, index) => (
          <div key={index} className={`${sectionHeight} w-full snap-start snap-always flex flex-col items-center justify-center relative border-b border-white/5 p-6`}>
            
            <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`z-10 bg-zinc-900/40 backdrop-blur-3xl p-8 lg:p-12 rounded-[2.5rem] border border-white/10 max-w-3xl w-full bg-gradient-to-br ${exp.color} to-transparent shadow-2xl`}
            >
              <span className="text-5xl lg:text-8xl font-black text-white/5 absolute -top-8 lg:-top-16 left-6 italic pointer-events-none">{exp.año}</span>
              
              <h3 className="text-2xl lg:text-4xl font-black text-white uppercase italic mb-6 mt-4">{exp.puesto}</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.3em] mb-4">Habilidades</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.habilidades.map((skill, sIndex) => (
                      <span key={sIndex} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] text-zinc-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-mono text-purple-400 uppercase tracking-[0.3em] mb-4">Proyecto Clave</h4>
                  <p className="text-gray-400 text-xs lg:text-sm leading-relaxed">{exp.proyectos}</p>
                </div>
              </div>
            </motion.div>

            <div className="absolute bottom-6 animate-bounce opacity-10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}