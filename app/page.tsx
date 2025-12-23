import Header from "@/components/Header";
import Hero from "@/components/landing/Hero";
import Partners from "@/components/landing/Partners";
import ServicesSection from "@/components/landing/Service";
import SocialProof from "@/components/landing/SocialProof";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <Hero />
      <ServicesSection />
      <Partners />
      <SocialProof />
    </main>
  );
}
