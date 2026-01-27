import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import StatsSection from "@/components/StatsSection";
import ValuesSection from "@/components/ValuesSection";
import GlobalSupportSection from "@/components/GlobalSupportSection";
import AnnualRecapSection from "@/components/AnnualRecapSection";

export default function About() {
    return (
        <main className="flex flex-col min-h-screen bg-black text-white">
            <Header />

            {/* Hero Section */}
            <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/images/about-hero-bg.png')" }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 md:px-8 flex flex-col justify-center h-full pt-20">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                            Thought-leadership and digital marketing built our business.
                        </h1>
                        <div className="w-20 h-1 bg-[#FF5722] mb-8"></div>
                        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-10 max-w-3xl leading-relaxed">
                            BendingWaters was co-founded in 2017 – a strategic growth infrastructure firm for real business outcomes.
                        </p>

                        <div className="flex items-center gap-6">
                            <Link
                                href="/contact"
                                className="bg-[#FF5722] hover:bg-[#F4511E] text-white font-semibold py-3 px-8 rounded transition-colors duration-300"
                            >
                                Learn more
                            </Link>
                            <Link
                                href="/careers"
                                className="text-[#FF5722] font-semibold border-b-2 border-[#FF5722] pb-1 hover:text-[#F4511E] hover:border-[#F4511E] transition-colors duration-300"
                            >
                                Hire us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <StatsSection />
            <ValuesSection />
            <GlobalSupportSection />
            <AnnualRecapSection />
            <Footer />
        </main>
    );
}
