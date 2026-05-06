import PageHeader from "@/components/PageHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsGrid from "@/components/NewsGrid";

const Page = async () => {
  return (
    <div className="relative bg-[#080808] min-h-screen overflow-hidden">
      <Header />

      <PageHeader title="News & Insights" />

      {/* Section intro */}
      <div className="px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <div className="flex items-center justify-between py-8 border-b border-[#1a1a1a]">
          <div className="flex items-center gap-4">
            <div className="w-1 h-5 bg-[#FF5500]" />
            <span className="text-white font-bold text-xs tracking-[0.3em] uppercase">
              Latest Stories
            </span>
          </div>
          <span className="text-gray-600 text-xs tracking-widest uppercase hidden md:block">
            Marketing / Strategy / Insights
          </span>
        </div>
      </div>

      <section className="px-6 md:px-12 lg:px-16 max-w-7xl mx-auto pb-24">
        <NewsGrid />
      </section>

      <Footer />
    </div>
  );
};

export default Page;
