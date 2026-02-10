import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import StatsSection from "@/components/StatsSection";
import ValuesSection from "@/components/ValuesSection";
import GlobalSupportSection from "@/components/GlobalSupportSection";
import AnnualRecapSection from "@/components/AnnualRecapSection";

export default function About() {
  return (
    <div>
      <Header />
      <main className="flex flex-col min-h-screen bg-black text-white">

        {/* Hero Section */}
        <section className="relative w-full h-[90vh] lg:h-screen flex items-center justify-center overflow-hidden lg:py-16">
          {/* Background Image */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/about-hero-bg.png')" }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 md:px-8 flex flex-col justify-center h-full space-y-8">
            <div className="max-w-5xl">
              <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold leading-tight">
                Built for clarity.
                <br />
                Designed for growth.
              </h1>
              <div className="w-20 h-1 bg-[#FF5722]"></div>
              <div className="text-sm md:text-xl text-gray-200 mb-10 max-w-2xl leading-6 mt-8">
                <p>
                  BendingWaters helps African founders and small business owners
                  who have built something real, but struggle to turn attention
                  into consistent revenue.
                </p>
                <p>
                  We help you achieve predictability based on set systems
                  that&apos;ll help scale your business.
                </p>
                <p>
                  BendingWaters works with you to define who you’re for, what
                  problem you solve, and why customers should choose you, then
                  turn that clarity into marketing systems that drive trust,
                  engagement, and growth.
                </p>
                <p>
                  From positioning and go-to-market strategy to brand, content,
                  and digital execution, we are the Go-to Digital Marketing Brand
                  for your product or business to scale.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <Link
                  href="/contact"
                  className="bg-[#FF5722] hover:bg-[#F4511E] text-white py-2 px-4 rounded transition-colors duration-300"
                >
                  Learn more
                </Link>
                <Link
                  href="/careers"
                  className="text-[#FF5722] border-b-2 border-[#FF5722] pb-1 hover:text-[#F4511E] hover:border-[#F4511E] transition-colors duration-300"
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
      </main>
      <Footer />
    </div>
  );
}
