import Header from "@/components/Header";
import ServicesSection from "@/components/landing/Service";
import Storytelling from "@/components/landing/Storytelling";
import Locations from "@/components/landing/Locations";
import ClientResults from "@/components/landing/ClientResults";
import Careers from "@/components/landing/Careers";
import UnlockGrowth from "@/components/landing/UnlockGrowth";
import Footer from "@/components/Footer";
import SocialProof from "@/components/landing/Community";
import HeroSection from "@/components/landing/BendingWatersHero";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <HeroSection />
      <ServicesSection />
      <SocialProof />
      <Storytelling />
      <ClientResults />
      <Locations />
      <Careers />
      <UnlockGrowth />
      <Footer />
    </main>
  );
}
