import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import LoadMorePosts from "@/components/LoadMorePost";
import Head from "next/head";

export const revalidate = 60;

export async function generateMetadata() {
    return {
        title: "News & Stories | Ifeoluwa Omidiji",
        description:
            "Explore the latest insights, product marketing strategies, and growth initiatives from Ifeoluwa Omidiji.",
    };
}

const Page = async () => {
    const { data: initialPosts } = await sanityFetch({
        query: POSTS_QUERY,
        params: { start: 0, end: 6 },
    });

    return (
        <div>
            <Header />

            <div className="bg-np-orange w-full h-50 md:h-110 flex-center">
                <h1 className="text-black text-4xl sm:text-6xl md:text-9xl tracking-wider font-black font-zuume uppercase">
                    News & stories
                </h1>
            </div>

            <div className="bg-white py-16 md:px-8 lg:px-10 xl:px-32 2xl:px-40">
                <div className="px-4 sm:px-6 md:px-16 lg:px-8">
                    <h2 className="text-center text-black text-2xl sm:text-4xl lg:text-6xl md:font-normal font-zuume ">
                        Discover the latest insights from Ifeoluwa Omidiji—uncovering his
                        product marketing strategies, growth initiatives, and innovative
                        projects designed to inspire and deliver real results.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
                    <LoadMorePosts initialPosts={initialPosts} />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Page;
