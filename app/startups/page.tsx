import Header from '@/components/Header'
import PageHero from '@/components/PageHero'
import ServicesCarousel from '@/components/ServicesCarousel'
import Footer from '@/components/Footer'
import TalentMarquee from '@/components/smb/TalentMarquee' // Assuming logos are generic

const startupServices = [
    {
        title: "MVP Development",
        image: "/images/design_service.png", // Reuse for now
    },
    {
        title: "Pitch Deck Design",
        image: "/images/writing_service.png",
    },
    {
        title: "Growth Hacking",
        image: "/images/social_media_service.png",
    },
    {
        title: "Product Strategy",
        image: "/images/videography_service.png",
    },
];

const Page = () => {
    return (
        <main>
            <Header />
            <PageHero
                badgeText="Accelerate Your Startup"
                title="From Idea to Unicorn. Faster."
                description="Launch your MVP, find product-market fit, and scale with speed using our expert growth teams and rapid development cycles."
                imageSrc="/images/sm-hero.png" // Fallback
                imageAlt="Startup launch concept"
                ctaText="Start Building"
                ctaLink="/contact"
            />
            <ServicesCarousel
                title={
                    <>
                        Rapid execution for <br />
                        <span className="font-serif italic text-np-orange">disruptive startups</span>
                    </>
                }
                services={startupServices}
                ctaText="Launch Now"
            />

            {/* Reuse generic components or add startup specific ones later */}
            <TalentMarquee />

            <Footer />
        </main>
    )
}

export default Page
