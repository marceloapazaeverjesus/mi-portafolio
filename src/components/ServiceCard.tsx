'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Definimos una interfaz para los datos (Tipado fuerte de Ingeniería)
interface ServiceProps {
  title: string;
  desc: string;
  img: string;
  index: number;
  color: 'blue' | 'purple' | 'emerald';
}

export default function ServiceCard({ title, desc, img, index, color }: ServiceProps) {
  const colors = {
    blue: "group-hover:border-blue-500/50 shadow-blue-500/5",
    purple: "group-hover:border-purple-500/50 shadow-purple-500/5",
    emerald: "group-hover:border-emerald-500/50 shadow-emerald-500/5"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className={`group relative p-8 rounded-[2.5rem] bg-zinc-900/30 border border-white/5 backdrop-blur-sm transition-all duration-500 ${colors[color]} hover:bg-zinc-900/50 shadow-2xl`}
    >
      {/* Contenedor de Imagen */}
      <div className="relative w-full h-40 mb-8 rounded-2xl overflow-hidden bg-black/40 border border-white/5 group-hover:border-white/10 transition-colors">
        <Image 
          src={img} 
          alt={title} 
          fill 
          className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
          // Imagen de respaldo si el path falla
          onError={(e:any) => e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=500"} 
        />
      </div>

      {/* Texto */}
      <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{title}</h3>
      <p className="text-sm text-zinc-400 leading-relaxed mb-6">
        {desc}
      </p>

      {/* Indicador de Acción */}
      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">
        <span>Saber más</span>
        <div className="w-8 h-[1px] bg-zinc-800 group-hover:bg-white transition-all" />
      </div>
    </motion.div>
  );
}