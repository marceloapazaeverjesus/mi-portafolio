// src/app/layout.tsx
import Navbar from '@/components/Navbar';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {/* Añadimos un padding-top para que el contenido no quede debajo del menú fijo */}
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
