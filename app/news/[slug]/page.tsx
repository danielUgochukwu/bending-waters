import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const { data: post } = await sanityFetch({
        query: POST_QUERY,
        params: { slug },
    });

    if (!post) {
        notFound();
    }

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl mt-20">
                <div className="mb-8">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 font-zuume uppercase">{post.title}</h1>
                    <p className="text-gray-500">{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ''}</p>
                </div>

                {post.mainImage && (
                    <div className="relative w-full h-96 mb-12 rounded-2xl overflow-hidden bg-gray-100">
                        <Image
                            src={urlFor(post.mainImage).url()}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                <div className="prose prose-lg max-w-none prose-headings:font-zuume prose-headings:uppercase">
                    {post.body && <PortableText value={post.body} />}
                </div>
            </main>
            <Footer />
        </div>
    );
}
