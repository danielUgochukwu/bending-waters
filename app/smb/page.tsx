import Header from '@/components/Header'
import PageHero from '@/components/PageHero'
import ServicesCarousel from '@/components/ServicesCarousel'
import FractionalTeams from '@/components/smb/FractionalTeams'
import FlexibleSupport from '@/components/smb/FlexibleSupport'
import TalentMarquee from '@/components/smb/TalentMarquee'
import CreativeCTA from '@/components/smb/CreativeCTA'
import SuccessStories from '@/components/smb/SuccessStories'
import Footer from '@/components/Footer'

const smbServices = [
    {
        title: "Videography",
        image: "/images/videography_service.png",
    },
    {
        title: "Content Writing",
        image: "/images/writing_service.png",
    },
    {
        title: "Creative & Design",
        image: "/images/design_service.png",
    },
    {
        title: "Social Media",
        image: "/images/social_media_service.png",
    },
    {
        title: "Photography",
        image: "/images/photography_service.png",
    },
];

const Page = () => {
    return (
        <main>
            <Header />
            <PageHero
                badgeText="Join our growing community"
                title="Build, grow, and scale your business — without doing it alone"
                description="BendingWaters supports small business owners, creatives, and founders with the tools, guidance, and digital support needed to grow sustainably — from idea to income."
                imageSrc="/images/sm-hero.png" // Fallback to existing if generation failed
                imageAlt="Small business team collaborating"
                ctaText="Learn more"
                ctaLink="/contact"
            />
            <ServicesCarousel
                title={
                    <>
                        Built for business owners building <br />
                        <span className="font-serif italic text-np-orange">real businesses</span>
                    </>
                }
                services={smbServices}
                ctaText="Hire us"
            />
            <FractionalTeams />
            <FlexibleSupport />
            <TalentMarquee />
            <CreativeCTA />
            <SuccessStories />
            <Footer />
        </main>
    )
}

export default Page