import Header from "@/components/Header";
import WebDesignHero from "@/components/landing/WebDesignHero";
import Footer from "@/components/Footer";
import About from "@/components/landing/About";
import WebDesignApproach from "@/components/landing/WebDesignApproach";

export default function WebDesignPage() {
    return (
        <main className="flex flex-col bg-black overflow-hidden">
            <Header />
            <WebDesignHero />
          <WebDesignApproach/>
            <Footer />
        </main>
    );
}
