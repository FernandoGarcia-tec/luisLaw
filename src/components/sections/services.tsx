import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gavel, Landmark, Briefcase, Shield, Users, Building } from 'lucide-react';

const services = [
  {
    icon: Gavel,
    title: "Derecho Penal",
    description: "Defensa experta en todas las etapas del proceso penal, protegiendo sus derechos y su libertad."
  },
  {
    icon: Landmark,
    title: "Derecho Civil",
    description: "Resolución de disputas contractuales, reclamaciones de daños y perjuicios, y litigios de propiedad."
  },
  {
    icon: Briefcase,
    title: "Derecho Mercantil",
    description: "Asesoramiento integral para empresas, desde la constitución hasta la resolución de conflictos societarios."
  },
  {
    icon: Users,
    title: "Derecho de Familia",
    description: "Manejo sensible y eficaz de casos de divorcio, custodia, pensiones alimenticias y más."
  },
  {
    icon: Shield,
    title: "Amparo y Constitucional",
    description: "Protección de sus garantías individuales frente a actos de autoridad inconstitucionales."
  },
  {
    icon: Building,
    title: "Derecho Inmobiliario",
    description: "Asesoría en transacciones, litigios de arrendamiento y desarrollo de proyectos inmobiliarios."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl lg:text-5xl font-bold">Nuestras Áreas de Práctica</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una defensa legal excepcional en una amplia gama de especialidades jurídicas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border/50 hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
