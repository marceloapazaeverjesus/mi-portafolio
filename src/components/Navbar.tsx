'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
      <div className="max-w-[1400px] mx-auto px-6 h-20 grid grid-cols-3 items-center">
        
        {/* 1. NOMBRE (Extremo Izquierdo) */}
        <div className="flex justify-start">
          <Link href="/" className="text-sm font-bold tracking-tight text-white whitespace-nowrap">
            Ever Jesus Marcelo Apaza
          </Link>
        </div>

        {/* 2. BLOQUE CENTRAL: PORTAFOLIO + LOGO + ENLACES (Eje X absoluto) */}
        <div className="flex justify-center items-center gap-8"> 
          {/* gap-8 equivale a 2rem de separación entre elementos */}
          
          {/* Portafolio a la izquierda del logo */}
          <Link 
            href="#proyectos" 
            className="hidden lg:block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-blue-400 transition-colors"
          >
            Portafolio
          </Link>

          {/* LOGO (Imagen) */}
          <Link href="/" className="relative w-12 h-12 flex-shrink-0">
            <Image 
              src="/logo.png" // Asegúrate de tener tu logo en la carpeta public
              alt="Logo" 
              fill 
              className="object-contain"
              priority
            />
            {/* Fallback por si no tienes la imagen aún */}
            
          </Link>

          {/* Servicios y Tienda a la derecha del logo */}
          <div className="hidden lg:flex items-center gap-8">
            <Link 
              href="#servicios" 
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-blue-400 transition-colors"
            >
              Servicios
            </Link>
            <Link 
              href="#tienda" 
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-blue-400 transition-colors"
            >
              Tienda
            </Link>
          </div>
        </div>

        {/* 3. COLUMNA DERECHA (Espacio y Botón Mobile) */}
        <div className="flex justify-end">
          {/* Botón Mobile */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d={isOpen ? "M18 6L6 18M6 6l12 12" : "M3 12h18M3 6h18M3 18h18"} strokeLinecap="round"/>
            </svg>
          </button>

          {/* Espacio reservado para mantener el equilibrio en Desktop */}
          <div className="hidden lg:block w-[150px]" /> 
        </div>
      </div>

      {/* MENÚ DESPLEGABLE MOBILE (Opcional) */}
      {isOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-2xl border-b border-white/10 flex flex-col p-6 gap-4 items-center">
          <Link href="#proyectos" onClick={() => setIsOpen(false)} className="text-white font-bold uppercase tracking-widest">Portafolio</Link>
          <Link href="#servicios" onClick={() => setIsOpen(false)} className="text-white font-bold uppercase tracking-widest">Servicios</Link>
          <Link href="#tienda" onClick={() => setIsOpen(false)} className="text-white font-bold uppercase tracking-widest">Tienda</Link>
        </div>
      )}
    </nav>
  );
}