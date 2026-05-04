import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MarketHero from "@/components/MarketHero";
import MarketServiceSection from "./MarketServiceSection";
import MarketFeaturePanel from "./MarketFeaturePanel";
import { marketPages, type MarketPageKey } from "@/constants/market-pages";

type MarketPageProps = {
  page: MarketPageKey;
};

export default function MarketPage({ page }: MarketPageProps) {
  const data = marketPages[page];

  return (
    <main>
      <Header />

      <MarketHero
        badgeText={data.badgeText}
        eyebrow={data.eyebrow}
        title={data.title}
        description={data.description}
        ctaText={data.ctaText}
      />

      <MarketServiceSection
        title={data.servicesTitle}
        accent={data.servicesAccent}
        services={data.services}
        ctaText={data.ctaText}
        theme={data.theme}
      />

      <MarketFeaturePanel
        eyebrow={data.eyebrow}
        title={data.featureTitle}
        description={data.featureDescription}
        features={data.features}
        ctaText={data.ctaText}
        theme={data.theme}
      />

      <Footer />
    </main>
  );
}
