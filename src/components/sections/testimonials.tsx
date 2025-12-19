import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const testimonials = [
  {
    quote: "Luis asociados transformó una situación legal desesperada en una victoria contundente. Su profesionalismo y estrategia son inigualables. No podría estar más agradecido.",
    name: "Carlos Gutiérrez",
    title: "CEO, InnovaTech",
    avatarId: "testimonial-avatar-1"
  },
  {
    quote: "El equipo de Luis asociados me guió a través de un complejo proceso mercantil con una claridad y confianza que superaron todas mis expectativas. Son verdaderos maestros en su campo.",
    name: "Laura Fernández",
    title: "Directora Financiera",
    avatarId: "testimonial-avatar-2"
  },
  {
    quote: "La atención al detalle y la dedicación que mostraron en mi caso de derecho familiar fue excepcional. Sentí que tenía a los mejores de mi lado en todo momento.",
    name: "Alejandro Torres",
    title: "Cliente Satisfecho",
    avatarId: "testimonial-avatar-3"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl lg:text-5xl font-bold">Lo que Dicen Nuestros Clientes</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            La confianza y los resultados hablan por sí mismos.
          </p>
        </div>
        <Carousel opts={{ loop: true }} className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const avatarImage = PlaceHolderImages.find(p => p.id === testimonial.avatarId);
              return (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="bg-card border-border/50">
                      <CardContent className="p-8 text-center flex flex-col items-center">
                        <p className="text-xl italic text-foreground mb-6">"{testimonial.quote}"</p>
                        <div className="flex items-center gap-4">
                          <Avatar>
                            {avatarImage && (
                              <AvatarImage src={avatarImage.imageUrl} alt={testimonial.name} data-ai-hint={avatarImage.imageHint} />
                            )}
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-bold text-lg">{testimonial.name}</p>
                            <p className="text-muted-foreground">{testimonial.title}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="left-[-50px]" />
          <CarouselNext className="right-[-50px]" />
        </Carousel>
      </div>
    </section>
  );
}
