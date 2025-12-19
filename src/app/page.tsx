import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Team from "@/components/sections/team";
import Testimonials from "@/components/sections/testimonials";
import CaseStudies from "@/components/sections/case-studies";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Team />
        <Testimonials />
        <CaseStudies />
      </main>
      <Footer />
    </div>
  );
}