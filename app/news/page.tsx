
import Header from "@/components/Header";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import Head from "next/head";
import Footer from "@/components/Footer";
import { DUMMY_NEWS } from "@/constants/dummy-news";
import NewsGrid from "@/components/NewsGrid";

export const revalidate = 60;

export async function generateMetadata() {
    return {
        title: "News & Stories | Ifeoluwa Omidiji",
        description:
            "Explore the latest insights, product marketing strategies, and growth initiatives from Ifeoluwa Omidiji.",
    };
}

const Page = async () => {
    // const { data: initialPosts } = await sanityFetch({
    //     query: POSTS_QUERY,
    //     params: { start: 0, end: 6 },
    // });
    const initialPosts = DUMMY_NEWS;

    return (
        <div className="relative overflow-hidden min-h-screen">
            <Header />

            <div className="relative w-full h-50 md:h-90 flex-center">
                <Image
                    src="/images/news_header.png"
                    alt="News Header"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/20" />
                <h1 className="relative z-10 text-white text-3xl sm:text-4xl md:text-5xl tracking-wider uppercase">
                    News & Insights
                </h1>
            </div>

            <section className="py-16 px-4 md:px-8 lg:px-10 xl:px-32 2xl:px-40">
                <NewsGrid />
            </section>

            <Footer />
        </div>
    );
};

export default Page;
