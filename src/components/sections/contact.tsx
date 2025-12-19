"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send data to an API
    toast({
      title: "Mensaje Enviado",
      description: "Gracias por contactarnos. Nos pondremos en contacto con usted en breve.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-headline text-4xl lg:text-5xl font-bold">Solicite una Consulta</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Dé el primer paso para resolver su situación legal. Contáctenos para una evaluación confidencial de su caso.
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Nuestra Oficina</h3>
                  <p className="text-muted-foreground">Av. Reforma 222, Piso 10, Ciudad de México</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Teléfono</h3>
                  <p className="text-muted-foreground">(55) 1234 5678</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">contacto@lexmagna.com</p>
                </div>
              </div>
            </div>
          </div>
          <Card className="bg-card border-border/50">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Formulario de Contacto</CardTitle>
              <CardDescription>Rellene el formulario y nuestro equipo le contactará.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input type="text" placeholder="Nombre Completo" required />
                <Input type="email" placeholder="Correo Electrónico" required />
                <Input type="tel" placeholder="Número de Teléfono" />
                <Textarea placeholder="Describa brevemente su caso..." rows={5} required />
                <Button type="submit" className="w-full" size="lg">Enviar Mensaje</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
