import Header from "@/components/Header";
import Hero from "@/components/landing/Hero";
import ServicesSection from "@/components/landing/Service";
import Storytelling from "@/components/landing/Storytelling";
import Locations from "@/components/landing/Locations";
import SocialProof from "@/components/landing/SocialProof";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <Hero />
      <Storytelling />
      <Locations />
      <ServicesSection />
      <SocialProof />
    </main>
  );
}
