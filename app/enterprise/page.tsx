import Header from '@/components/Header'
import PageHero from '@/components/PageHero'
import ServicesCarousel from '@/components/ServicesCarousel'
import Footer from '@/components/Footer'
import TalentMarquee from '@/components/smb/TalentMarquee'

const enterpriseServices = [
    {
        title: "Digital Transformation",
        image: "/images/design_service.png",
    },
    {
        title: "Cloud Migration",
        image: "/images/social_media_service.png",
    },
    {
        title: "Enterprise Security",
        image: "/images/writing_service.png",
    },
    {
        title: "Data Analytics",
        image: "/images/videography_service.png",
    },
];

const Page = () => {
    return (
        <main>
            <Header />
            <PageHero
                badgeText="Enterprise Solutions"
                title="Digital Transformation at Scale"
                description="Modernize legacy systems, innovate without risk, and scale globally with our enterprise-grade consulting and development teams."
                imageSrc="/images/sm-hero.png" // Fallback
                imageAlt="Enterprise digital network"
                ctaText="Contact Sales"
                ctaLink="/contact"
            />
            <ServicesCarousel
                title={
                    <>
                        Robust solutions for <br />
                        <span className="font-serif italic text-np-orange">global enterprises</span>
                    </>
                }
                services={enterpriseServices}
                ctaText="Partner with Us"
            />

            {/* Reuse generic components */}
            <TalentMarquee />

            <Footer />
        </main>
    )
}

export default Page
