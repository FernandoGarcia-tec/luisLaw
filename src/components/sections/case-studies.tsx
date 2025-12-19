import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '../ui/button';

const caseStudies = [
  {
    title: "Absolución en Caso Penal de Alto Perfil",
    category: "Derecho Penal",
    description: "Logramos la exoneración total de un cliente falsamente acusado, desmontando la evidencia de la fiscalía con una investigación forense superior.",
    imageId: "case-study-1",
    result: "Veredicto de no culpabilidad"
  },
  {
    title: "Reestructuración Corporativa Exitosa",
    category: "Derecho Mercantil",
    description: "Asesoramos una compleja fusión empresarial, navegando regulaciones y asegurando una transición fluida que maximizó el valor para los accionistas.",
    imageId: "case-study-2",
    result: "+40% Valor accionario"
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl lg:text-5xl font-bold">Casos de Éxito Destacados</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestra trayectoria de victorias es el mejor testimonio de nuestra capacidad y compromiso.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => {
            const studyImage = PlaceHolderImages.find(p => p.id === study.imageId);
            return (
              <Card key={index} className="overflow-hidden border-border/50 hover:border-primary transition-colors">
                {studyImage && (
                  <div className="relative h-64 w-full">
                    <Image
                      src={studyImage.imageUrl}
                      alt={study.title}
                      fill
                      className="object-cover"
                      data-ai-hint={studyImage.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">{study.category}</Badge>
                  <CardTitle className="font-headline text-2xl">{study.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{study.description}</CardDescription>
                  <div className="mt-4 pt-4 border-t border-border/20 flex justify-between items-center">
                    <p className="font-bold text-primary">{study.result}</p>
                    <Button variant="link">Leer más &rarr;</Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
