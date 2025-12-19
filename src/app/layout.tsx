import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Link from 'next/link';
import { Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Luis asociados',
  description: 'Resultados Excepcionales. Defensa Inquebrantable.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <div className="fixed bottom-6 right-6 z-50">
          <Link
            href="https://wa.me/5215512345678"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 flex items-center justify-center shadow-lg transition-transform hover:scale-110"
            aria-label="Contactar por WhatsApp"
          >
            <Scale className="h-8 w-8" />
          </Link>
        </div>
      </body>
    </html>
  );
}
