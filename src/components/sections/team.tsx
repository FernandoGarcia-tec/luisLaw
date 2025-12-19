import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const teamMembers = [
  { name: "Lic. Ricardo Vargas", title: "Socio Fundador", imageId: "team-member-1" },
  { name: "Lic. Sofía Mendoza", title: "Socia Directora", imageId: "team-member-2" },
  { name: "Lic. Javier Castillo", title: "Abogado Senior", imageId: "team-member-3" },
];

export default function Team() {
  return (
    <section id="team" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl lg:text-5xl font-bold">Nuestro Equipo de Expertos</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Conozca a los profesionales dedicados a luchar por su causa con integridad y excelencia.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => {
            const memberImage = PlaceHolderImages.find(p => p.id === member.imageId);
            return (
              <Card key={index} className="text-center border-border/50 overflow-hidden">
                <CardHeader className="p-0">
                  {memberImage && (
                    <div className="relative h-80 w-full">
                      <Image
                        src={memberImage.imageUrl}
                        alt={`Retrato de ${member.name}`}
                        fill
                        className="object-cover"
                        data-ai-hint={memberImage.imageHint}
                      />
                    </div>
                  )}
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline text-2xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold mt-1">{member.title}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
