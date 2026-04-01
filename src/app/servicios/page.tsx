'use client';

import { motion } from 'framer-motion';
import { Layout, Smartphone, Database, ChevronRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: "Desarrollo Web Full Stack",
    description: "Plataformas de alto rendimiento, optimizadas para SEO y con enfoque Mobile-First.",
    icon: <Layout className="w-8 h-8 text-blue-400" />,
    stack: ["React", "Next.js", "Laravel", "Tailwind"],
    color: "group-hover:border-blue-500/50",
    bg: "from-blue-500/10"
  },
  {
    title: "Aplicaciones Móviles",
    description: "Experiencias nativas e híbridas para iOS y Android con enfoque en UX intuitiva.",
    icon: <Smartphone className="w-8 h-8 text-purple-400" />,
    stack: ["React Native", "Expo", "Firebase"],
    color: "group-hover:border-purple-500/50",
    bg: "from-purple-500/10"
  },
  {
    title: "Automatización & Data",
    description: "Conversión de datos crudos en dashboards estratégicos y flujos automatizados.",
    icon: <Database className="w-8 h-8 text-emerald-400" />,
    stack: ["SQL", "Power BI", "VBA", "Python"],
    color: "group-hover:border-emerald-500/50",
    bg: "from-emerald-500/10"
  }
];

const steps = [
  { title: "Diagnóstico", desc: "Entiendo tu necesidad técnica." },
  { title: "Desarrollo", desc: "Construyo con código limpio." },
  { title: "Despliegue", desc: "Producto listo para resultados." }
];

export default function ServiciosPage() {
  const sectionHeight = "h-[calc(100vh-80px)]";

  return (
    <main className={`w-full ${sectionHeight} overflow-y-scroll snap-y snap-mandatory bg-[#050505] no-scrollbar`}>
      
      {/* GRUPO 1: GRID DE SERVICIOS */}
      <section className={`${sectionHeight} w-full snap-start snap-always flex items-center justify-center p-6 lg:p-20 border-b border-white/5`}>
        <div className="max-w-7xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12 lg:mb-20"
          >
            <h2 className="text-blue-400 font-mono text-[10px] tracking-[0.5em] uppercase mb-4">Soluciones de Ingeniería</h2>
            <h1 className="text-4xl lg:text-6xl font-black text-white italic uppercase">Mis <span className="text-zinc-700">Servicios</span></h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`group relative p-8 rounded-[2.5rem] border border-white/10 bg-zinc-900/20 backdrop-blur-sm transition-all duration-500 ${service.color} hover:bg-gradient-to-br ${service.bg} to-transparent`}
              >
                <div className="mb-6 p-4 w-fit rounded-2xl bg-black/40 border border-white/5 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.stack.map((tag, i) => (
                    <span key={i} className="text-[9px] font-mono font-bold text-zinc-500 border border-white/5 px-2 py-1 rounded-md uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GRUPO 2: EL PROCESO Y CTA */}
      <section className={`${sectionHeight} w-full snap-start snap-always flex flex-col items-center justify-center p-6 lg:p-20 bg-gradient-to-b from-black to-[#080808]`}>
        <div className="max-w-4xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-white italic uppercase mb-12">Mi <span className="text-blue-500">Proceso</span></h2>
            
            {/* Timeline de Pasos */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
              {/* Línea decorativa (solo desktop) */}
              <div className="hidden lg:block absolute top-10 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent z-0" />
              
              {steps.map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 shadow-xl shadow-blue-500/5 group">
                    <CheckCircle2 className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">{step.title}</h4>
                  <p className="text-gray-500 text-xs px-4">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA FINAL */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 p-[1px] rounded-[3rem]"
          >
            <div className="bg-black rounded-[3rem] p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
              <div>
                <h3 className="text-2xl lg:text-3xl font-black text-white uppercase italic mb-2">¿Tienes un proyecto en mente?</h3>
                <p className="text-gray-400 text-sm">Hablemos sobre cómo puedo ayudarte a escalarlo.</p>
              </div>
              <Link 
                href="https://wa.me/TUNUMERO" // Reemplaza con tu link de WhatsApp
                className="group flex items-center gap-3 px-10 py-5 bg-white text-black font-black rounded-full hover:bg-blue-500 hover:text-white transition-all duration-500 uppercase text-xs tracking-widest"
              >
                Agendar Consulta
                <ChevronRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}