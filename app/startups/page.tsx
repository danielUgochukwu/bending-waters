import Header from '@/components/Header'
import Hero from '@/components/smb/Hero'
import CreativeServices from '@/components/smb/CreativeServices'
import FractionalTeams from '@/components/smb/FractionalTeams'
import FlexibleSupport from '@/components/smb/FlexibleSupport'
import TalentMarquee from '@/components/smb/TalentMarquee'
import CreativeCTA from '@/components/smb/CreativeCTA'
import SuccessStories from '@/components/smb/SuccessStories'
import Footer from '@/components/Footer'

const Page = () => {
    return (
        <main>
            <Header />
            <Hero />
            <CreativeServices />
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
