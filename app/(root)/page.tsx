import Header from "@/components/Header";
import ServicesSection from "@/components/landing/Service";
import Storytelling from "@/components/landing/Storytelling";
import Locations from "@/components/landing/Locations";
import ClientResults from "@/components/landing/ClientResults";
import UnlockGrowth from "@/components/landing/UnlockGrowth";
import Footer from "@/components/Footer";
import SocialProof from "@/components/landing/Community";
import Hero from "./_components/Hero";
import CareersSection from "./_components/CareerSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <Hero />
      <ServicesSection />
      <SocialProof />
      <Storytelling />
      <ClientResults />
      <Locations />
      <CareersSection />
      <UnlockGrowth />
      <Footer />
    </main>
  );
}
