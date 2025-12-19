import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Luis asociados',
  description: 'Resultados Excepcionales. Defensa Inquebrantable.',
};

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M19.05 4.94A10 10 0 0 0 12 2a10 10 0 0 0-9.94 11.12c0 1.28.25 2.52.71 3.68l-1.6 5.81l5.95-1.56a9.92 9.92 0 0 0 3.88.95h.01a10 10 0 0 0 10-10a9.95 9.95 0 0 0-2.95-7.11zm-3.54 10.99c-.19.29-.69.46-1.14.51c-.45.05-.92.05-1.37-.14c-.45-.19-1.07-.4-1.95-1.12c-1.28-1.06-2.09-2.22-2.39-2.9c-.3-.68-.15-1.11.12-1.48c.27-.37.58-.48.78-.48c.2 0 .4.01.57.01c.17 0 .37-.02.58.28c.21.3.63.98.68 1.05c.05.07.08.15.01.27c-.07.12-.12.19-.24.33c-.12.14-.24.26-.37.37c-.12.12-.24.26-.1.52c.13.26.63.99 1.34 1.63c.96.86 1.76 1.14 2 1.23c.24.09.38.07.51-.05c.13-.12.56-.65.71-.87c.15-.22.3-.27.48-.19c.18.08.94.45 1.1.52c.16.07.27.11.3.18c.03.07.03.41-.16.7z"
    ></path>
  </svg>
);


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
            href="https://wa.me/523122091810"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 flex items-center justify-center shadow-lg transition-transform hover:scale-110"
            aria-label="Contactar por WhatsApp"
          >
            <WhatsAppIcon className="h-8 w-8" />
          </Link>
        </div>
      </body>
    </html>
  );
}
