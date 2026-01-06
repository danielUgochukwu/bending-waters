import Header from "@/components/Header";
import Hero from "@/components/landing/Hero";
import ServicesSection from "@/components/landing/Service";
import Storytelling from "@/components/landing/Storytelling";
import Locations from "@/components/landing/Locations";
import ClientResults from "@/components/landing/ClientResults";
import Careers from "@/components/landing/Careers";
import UnlockGrowth from "@/components/landing/UnlockGrowth";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <Hero />
      <ServicesSection />
      <Storytelling />
      <ClientResults />
      <Locations />
      <Careers />
      <UnlockGrowth />
    </main>
  );
}
