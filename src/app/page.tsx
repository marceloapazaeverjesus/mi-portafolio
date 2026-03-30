'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { technologies } from '../data/technologies';

export default function Home() {
  // Definimos la altura del banner para restarla (80px es el estándar de nuestro Navbar)
  const sectionHeight = "h-[calc(100vh-80px)]";

  return (
    /* MAIN: 
       - h-[calc(100vh-80px)]: Ajusta el contenedor al espacio restante bajo el banner.
       - snap-y snap-mandatory: Mantiene el efecto magnético.
       - no-scrollbar: Mantiene la estética limpia.
    */
    <main className={`w-full ${sectionHeight} overflow-y-scroll snap-y snap-mandatory bg-[#050505] scroll-smooth no-scrollbar`}>
      
      {/* ---------------------------------------------------------
          GRUPO 1: HERO SECTION (TRIPLE BLOQUE)
          --------------------------------------------------------- */}
      <section className={`${sectionHeight} w-full snap-start snap-always relative flex flex-col lg:flex-row border-b border-white/5`}>
        
        {/* BLOQUE 1: MODO FREELANCER */}
        <motion.div 
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex-1 flex flex-col justify-center p-10 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/5 bg-gradient-to-br from-blue-900/10 to-transparent"
        >
          <span className="text-blue-500 font-mono text-[10px] mb-3 tracking-[0.3em]">01. TALENT HUB</span>
          <h1 className="text-3xl lg:text-5xl font-black text-white mb-4 uppercase italic leading-tight">
            Ingeniero de <br/>
            <span className="text-blue-400 not-italic">Sistemas</span>
          </h1>
          <p className="text-gray-400 mb-8 max-w-sm leading-relaxed text-xs lg:text-sm">
            Especializado en automatización logística con SQL y desarrollo Frontend. 
          </p>
          <button className="w-fit px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all text-sm">
            Descargar CV
          </button>
        </motion.div>

        {/* BLOQUE 2: VISUAL CENTRAL */}
        <div className="flex-1 relative flex items-center justify-center bg-zinc-900/5 min-h-[300px] lg:min-h-0">
          <div className="relative z-10 w-full h-[80%] p-6 lg:p-10">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="w-full h-full rounded-[32px] border border-white/10 overflow-hidden bg-zinc-800/20 backdrop-blur-xl relative shadow-2xl"
            >
              <Image 
                src="/mi-foto.png" 
                alt="Jesus Marcelo" 
                fill 
                className="object-cover opacity-90" 
                priority
              />
            </motion.div>
          </div>
        </div>

        {/* BLOQUE 3: MODO EMPRESA */}
        <motion.div 
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex-1 flex flex-col justify-center p-10 lg:p-16 bg-gradient-to-bl from-purple-900/10 to-transparent text-right lg:text-left"
        >
          <span className="text-purple-500 font-mono text-[10px] mb-3 tracking-[0.3em]">02. SOLUTIONS</span>
          <h1 className="text-3xl lg:text-5xl font-black text-white mb-4 uppercase italic leading-tight">
            Software para <br/>
            <span className="text-purple-400 not-italic">Tu Negocio</span>
          </h1>
          <p className="text-gray-400 mb-8 max-w-sm leading-relaxed text-xs lg:text-sm ml-auto lg:ml-0">
            Transformo procesos manuales en sistemas automatizados y dashboards.
          </p>
          <button className="ml-auto lg:ml-0 w-fit px-6 py-3 border border-purple-500 text-purple-400 font-bold rounded-full hover:bg-purple-600 hover:text-white transition-all text-sm">
            Cotizar Proyecto
          </button>
        </motion.div>
      </section>

      {/* ---------------------------------------------------------
          GRUPO 2: STACK TECNOLÓGICO
          --------------------------------------------------------- */}
      <section className={`${sectionHeight} w-full snap-start snap-always bg-[#080808] flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-8 w-full relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-xs font-mono text-blue-500 tracking-[0.5em] uppercase mb-2">Stack Tecnológico</h2>
            <p className="text-4xl lg:text-6xl font-black text-white italic tracking-tighter uppercase">
              Tool<span className="text-zinc-700">kit</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-10">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center group cursor-crosshair"
              >
                <div className="w-20 h-20 lg:w-24 lg:h-24 mb-4 relative flex items-center justify-center bg-zinc-900/80 rounded-[2rem] border border-white/5 group-hover:border-blue-500/50 transition-all shadow-inner overflow-hidden">
                  <img 
                    src={tech.img} 
                    alt={tech.name} 
                    className="w-10 h-10 lg:w-12 lg:h-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <span className="absolute text-[7px] text-zinc-800 font-mono uppercase group-hover:text-blue-400 transition-colors">
                    {tech.name.split(' ')[0]}
                  </span>
                </div>
                <p className="text-[9px] font-mono text-zinc-600 group-hover:text-blue-400 uppercase tracking-widest transition-colors">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}