import Header from "@/components/Header";
import WebDesignHero from "@/components/landing/WebDesignHero";
import WebDesignApproach from "@/components/landing/WebDesignApproach";
import WebDesignPhilosophy from "@/components/landing/WebDesignPhilosophy";
import Footer from "@/components/Footer";

export default function WebDesignPage() {
    return (
        <main className="flex flex-col bg-black overflow-hidden">
            <Header />
            <WebDesignHero />
            <WebDesignApproach />
            <WebDesignPhilosophy />
            <Footer />
        </main>
    );
}
