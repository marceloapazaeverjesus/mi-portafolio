'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Detecta en qué página estamos

  // Función para volver al inicio suavemente
  const scrollToTop = (e: React.MouseEvent) => {
    // Si no estamos en el Home (/), dejamos que el enlace actúe normal hacia "/"
    if (pathname === '/') {
      e.preventDefault();
      const mainElement = document.querySelector('main');
      if (mainElement) {
        mainElement.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
      <div className="max-w-[1400px] mx-auto px-6 h-20 grid grid-cols-3 items-center">
        
        {/* 1. NOMBRE (Home) */}
        <div className="flex justify-start">
          <Link 
            href="/" 
            onClick={scrollToTop}
            className="text-lg font-bold tracking-tight text-white whitespace-nowrap hover:text-blue-400 transition-colors cursor-pointer"
          >
            Ever Jesus Marcelo Apaza
          </Link>
        </div>

        {/* 2. MENU CENTRAL */}
        <div className="flex justify-center items-center gap-4 lg:gap-8"> 
          {/* Este ahora lleva a tu nueva página de trayectoria */}
          <Link 
            href="/portafolio" 
            className="hidden lg:block text-sm font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-blue-400 transition-colors"
          >
            Portafolio
          </Link>

          {/* LOGO: Siempre vuelve al Home */}
          <Link href="/" className="relative w-[6rem] h-[4rem] lg:w-[8rem] lg:h-[6rem] flex-shrink-0">
            <Image src="/logoprincipal.png" alt="Logo" fill className="object-contain" priority />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {/* Agregamos "/" antes del # para que funcione desde cualquier página */}
            <Link href="/servicios" className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-blue-400">Servicios</Link>
            <Link href="/tienda" className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-blue-400">Tienda</Link>
          </div>
        </div>

        {/* 3. MOBILE & ESPACIADOR */}
        <div className="flex justify-end">
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d={isOpen ? "M18 6L6 18M6 6l12 12" : "M3 12h18M3 6h18M3 18h18"} />
            </svg>
          </button>
          <div className="hidden lg:block w-[150px]" /> 
        </div>
      </div>

      {/* MENU MOBILE (Opcional) */}
      {isOpen && (
        <div className="lg:hidden bg-black border-b border-white/5 flex flex-col p-6 gap-4">
            <Link href="/portafolio" onClick={() => setIsOpen(false)} className="text-white font-bold uppercase text-xs">Portafolio</Link>
            <Link href="/#servicios" onClick={() => setIsOpen(false)} className="text-white font-bold uppercase text-xs">Servicios</Link>
            <Link href="/#tienda" onClick={() => setIsOpen(false)} className="text-white font-bold uppercase text-xs">Tienda</Link>
        </div>
      )}
    </nav>
  );
}