'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Función para volver al inicio suavemente
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
      <div className="max-w-[1400px] mx-auto px-6 h-20 grid grid-cols-3 items-center">
        
        {/* 1. NOMBRE (Extremo Izquierdo) */}
        <div className="flex justify-start">
          <a 
            href="#inicio" 
            onClick={scrollToTop}
            className="text-lg font-bold tracking-tight text-white whitespace-nowrap hover:text-blue-400 transition-colors cursor-pointer"
          >
            Ever Jesus Marcelo Apaza
          </a>
        </div>

        {/* ... Resto de tu código del Navbar igual ... */}
        <div className="flex justify-center items-center gap-8"> 
          <Link href="#proyectos" className="hidden lg:block text-sm font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-blue-400">Portafolio</Link>
          <Link href="/" className="relative w-[8rem] h-[6rem] flex-shrink-0">
            <Image src="/logoprincipal.png" alt="Logo" fill className="object-contain" priority />
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            <Link href="#servicios" className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-blue-400">Servicios</Link>
            <Link href="#tienda" className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-blue-400">Tienda</Link>
          </div>
        </div>

        <div className="flex justify-end">
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d={isOpen ? "M18 6L6 18M6 6l12 12" : "M3 12h18M3 6h18M3 18h18"} />
            </svg>
          </button>
          <div className="hidden lg:block w-[150px]" /> 
        </div>
      </div>
    </nav>
  );
}