import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Award, ShieldCheck, TrendingUp } from "lucide-react";
import Link from "next/link";
import heroImage from "@/lib/unnamed.jpg";

const stats = [
	{ value: "20+", label: "Años de Experiencia", icon: Award },
	{ value: "500+", label: "Casos Ganados", icon: ShieldCheck },
	{ value: "98%", label: "Tasa de Éxito", icon: TrendingUp },
];

export default function Hero() {
	return (
		<section className="relative w-full min-h-screen flex items-center bg-background overflow-hidden">
			<div className="absolute inset-0">
				<Image
					src={heroImage}
					alt="Luis Asociados - Abogados"
					fill
					className="object-cover opacity-10"
					priority
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
			</div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className="pt-24 lg:pt-0">
						<h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
							Resultados Excepcionales.
							<br />
							<span className="text-primary">Defensa Inquebrantable.</span>
						</h1>
						<p className="mt-6 text-lg text-muted-foreground max-w-xl">
							En Luis asociados, combinamos décadas de experiencia con una
							dedicación incesante para proteger sus derechos y alcanzar el mejor
							resultado posible para su caso.
						</p>
						<div className="mt-10 flex gap-4">
							<Button size="lg" asChild>
								<Link
									href="https://wa.me/523122091810"
									target="_blank"
									rel="noopener noreferrer"
								>
									Agendar Consulta
								</Link>
							</Button>
						</div>
						<div className="mt-12 border-t border-border/20 pt-8">
							<div className="grid grid-cols-3 gap-4">
								{stats.map((stat, index) => (
									<div key={index} className="flex items-center gap-3">
										<stat.icon className="w-8 h-8 text-primary" />
										<div>
											<p className="text-2xl font-bold">{stat.value}</p>
											<p className="text-sm text-muted-foreground">
												{stat.label}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					<div className="relative hidden lg:block h-[80vh] w-full">
						<Image
							src={heroImage}
							alt="Luis Asociados - Abogados"
							fill
							className="object-cover rounded-lg shadow-2xl"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
