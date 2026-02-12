
import PageHeader from "@/components/PageHeader";
import Header from "@/components/Header";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import Head from "next/head";
import Footer from "@/components/Footer";
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
    return (
        <div className="relative overflow-hidden min-h-screen">
            <Header />

            <PageHeader title="News & Insights" />

            <section className="py-16 px-4 md:px-8 lg:px-10 xl:px-32 2xl:px-40">
                <NewsGrid />
            </section>

            <Footer />
        </div>
    );
};

export default Page;
