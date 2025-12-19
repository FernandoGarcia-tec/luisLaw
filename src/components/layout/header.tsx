"use client";

import { Scale, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "#services", label: "Servicios" },
  { href: "#team", label: "Equipo" },
  { href: "#testimonials", label: "Testimonios" },
  { href: "#case-studies", label: "Casos de Éxito" },
  { href: "#contact", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-card/80 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 text-xl md:text-2xl font-bold font-headline text-primary shrink-0">
            <Scale className="h-7 w-7" />
            <span className="truncate">Luis asociados</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-semibold text-foreground/80 hover:text-foreground transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Button asChild size="sm">
                <Link href="#contact">Consulta Gratuita</Link>
              </Button>
            </div>
            <div className="md:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu />
                    <span className="sr-only">Abrir menú</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-card">
                  <div className="flex flex-col h-full p-4">
                  <div className="flex items-center justify-between mb-8">
                    <Link href="/" className="flex items-center gap-2 text-2xl font-bold font-headline text-primary" onClick={() => setMobileMenuOpen(false)}>
                      <Scale className="h-7 w-7" />
                      <span>Luis asociados</span>
                    </Link>
                  </div>
                    <nav className="flex flex-col space-y-4">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-lg font-semibold text-foreground/80 hover:text-foreground transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                    <Button asChild className="mt-8">
                      <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>Consulta Gratuita</Link>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
