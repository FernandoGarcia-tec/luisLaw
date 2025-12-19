import { Scale } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 text-lg font-bold font-headline text-primary mb-4 md:mb-0">
            <Scale className="h-6 w-6" />
            <span>LEX MAGNA</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} LEX MAGNA. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Política de Privacidad
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
