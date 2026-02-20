import Header from "@/components/Header";
import SolutionHero from "@/components/landing/SolutionHero";
import SolutionApproach from "@/components/landing/SolutionApproach";
import SolutionPhilosophy from "@/components/landing/SolutionPhilosophy";
import Footer from "@/components/Footer";
import { getSolutionData } from "@/constants/solution-data";

export default function Page() {
    const data = getSolutionData("dashboard-development");
    return (
        <main className="flex flex-col bg-black overflow-hidden">
            <Header />
            <SolutionHero 
                {...data}
                backgroundImage="/images/web-design/background.png"
                profileImage="/images/web-design/profile.png"
            />
            <SolutionApproach {...data.approach} />
            <SolutionPhilosophy label="Our Philosophy" items={data.philosophies} />
            <Footer />
        </main>
    );
}
