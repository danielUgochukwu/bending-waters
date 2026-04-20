import { PortableText } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsSidebar from "@/components/NewsSidebar";
import CommentSection from "@/components/CommentSection";
import LatestNews from "@/components/LatestNews";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: { slug },
  });

  if (!post) return { title: "News Not Found" };

  return {
    title: `${post.title} | BendingWaters`,
    description: post.description,
  };
}

const NewsSlugPage = async ({ params }: Props) => {
  const { slug } = await params;
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: { slug },
  });

  if (!post) notFound();

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <div className="bg-[#080808] min-h-screen flex flex-col font-sans text-gray-300">
      <Header />

      {/* ─── HERO ──────────────────────────────────────────── */}
      <div className="relative w-full h-[55vh] min-h-100 md:h-[70vh] md:min-h-125 overflow-hidden">
        <Image
          src={
            post.mainImage
              ? urlFor(post.mainImage).width(1600).height(900).url()
              : "/images/news_header.png"
          }
          alt={post.title || "Article"}
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-[#080808]/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/30 to-transparent" />

        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#FF5500]/60 via-[#FF5500]/20 to-transparent" />

        {/* Breadcrumb */}
        <div className="absolute top-8 left-6 md:left-12 lg:left-16 flex items-center gap-2 text-gray-400 text-xs tracking-widest uppercase">
          <Link href="/" className="hover:text-[#FF5500] transition-colors">
            Home
          </Link>
          <span className="text-gray-700">/</span>
          <Link href="/news" className="hover:text-[#FF5500] transition-colors">
            News
          </Link>
          <span className="text-gray-700">/</span>
          <span className="text-gray-600 max-w-[200px] truncate">
            {post.title}
          </span>
        </div>

        {/* Title block */}
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 lg:px-16 pb-10 md:pb-14 max-w-7xl mx-auto">
          {(post.category || formattedDate) && (
            <div className="flex items-center gap-4 mb-5">
              {post.category && (
                <span className="inline-block bg-[#FF5500] text-black text-[10px] font-black tracking-[0.3em] uppercase px-3 py-1">
                  {post.category}
                </span>
              )}
              {formattedDate && (
                <span className="text-gray-400 text-xs tracking-widest uppercase">
                  {formattedDate}
                </span>
              )}
            </div>
          )}

          <h1 className="text-white font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.92] uppercase max-w-5xl">
            {post.title}
          </h1>

          <div className="mt-6 flex items-center gap-3">
            <div className="w-12 h-[3px] bg-[#FF5500]" />
            <div className="w-2 h-[3px] bg-[#FF5500]/30" />
          </div>
        </div>
      </div>

      {/* ─── CONTENT ───────────────────────────────────────── */}
      <main className="grow container mx-auto px-6 md:px-12 lg:px-16 py-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16 xl:gap-24">
          {/* Main Article */}
          <article>
            {/* Description / Lede */}
            {post.description && (
              <p className="text-gray-300 text-xl md:text-2xl leading-relaxed font-light border-l-[3px] border-[#FF5500] pl-6 mb-12">
                {post.description}
              </p>
            )}

            {/* Divider */}
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px bg-[#1e1e1e] flex-1" />
              <div className="w-2 h-2 bg-[#FF5500] rotate-45" />
              <div className="h-px bg-[#1e1e1e] flex-1" />
            </div>

            {/* Body */}
            <div className="prose-custom">
              {post.body && (
                <PortableText
                  value={post.body}
                  components={{
                    block: {
                      h1: ({ children }) => (
                        <h1 className="text-white font-black text-3xl md:text-4xl uppercase tracking-tight mt-14 mb-6 leading-[0.95]">
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-white font-black text-2xl md:text-3xl uppercase tracking-tight mt-12 mb-5 leading-tight">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-white font-bold text-xl md:text-2xl mt-10 mb-4">
                          {children}
                        </h3>
                      ),
                      normal: ({ children }) => (
                        <p className="text-gray-400 text-base md:text-lg leading-[1.85] mb-7 text-justify">
                          {children}
                        </p>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="relative my-12 pl-8 py-1">
                          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF5500]" />
                          <div className="text-2xl text-[#FF5500] font-black leading-none mb-3 select-none">
                            &quot;
                          </div>
                          <div className="text-white text-xl md:text-2xl font-light italic leading-relaxed">
                            {children}
                          </div>
                        </blockquote>
                      ),
                    },
                    list: {
                      bullet: ({ children }) => (
                        <ul className="mb-8 space-y-3 pl-0">{children}</ul>
                      ),
                      number: ({ children }) => (
                        <ol className="mb-8 space-y-3 pl-0 counter-reset-[item]">
                          {children}
                        </ol>
                      ),
                    },
                    listItem: {
                      bullet: ({ children }) => (
                        <li className="flex gap-4 text-gray-400 text-base md:text-lg leading-relaxed">
                          <span className="text-[#FF5500] font-black mt-1 flex-shrink-0">
                            —
                          </span>
                          <span>{children}</span>
                        </li>
                      ),
                      number: ({ children }) => (
                        <li className="flex gap-4 text-gray-400 text-base md:text-lg leading-relaxed">
                          <span className="text-[#FF5500] font-black flex-shrink-0">
                            {children}
                          </span>
                        </li>
                      ),
                    },
                    marks: {
                      link: ({ children, value }) => {
                        const rel = !value.href.startsWith("/")
                          ? "noreferrer noopener"
                          : undefined;
                        return (
                          <a
                            href={value.href}
                            rel={rel}
                            className="text-[#FF5500] hover:text-white underline decoration-[#FF5500]/30 hover:decoration-white underline-offset-4 decoration-2 transition-colors font-medium"
                          >
                            {children}
                          </a>
                        );
                      },
                      strong: ({ children }) => (
                        <strong className="text-white font-bold">
                          {children}
                        </strong>
                      ),
                    },
                  }}
                />
              )}
            </div>

            {/* Tags & Category footer */}
            <div className="mt-16 pt-10 border-t border-[#1a1a1a]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
                {post.category && (
                  <div className="flex items-center gap-4">
                    <span className="text-gray-600 text-xs font-bold tracking-[0.2em] uppercase">
                      Filed Under
                    </span>
                    <span className="inline-block bg-[#FF5500] text-black text-xs font-black tracking-[0.2em] uppercase px-4 py-2">
                      {post.category}
                    </span>
                  </div>
                )}

                {post.tags && post.tags.length > 0 && (
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-gray-600 text-xs font-bold tracking-[0.2em] uppercase">
                      Tags
                    </span>
                    {post.tags.map((tag: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-3 py-1 border border-[#2a2a2a] text-gray-400 hover:border-[#FF5500] hover:text-white text-xs font-medium tracking-wider uppercase transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Latest news */}
            <div className="mt-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-5 bg-[#FF5500]" />
                <h2 className="text-white font-black text-xs tracking-[0.3em] uppercase">
                  More Stories
                </h2>
              </div>
              <LatestNews />
            </div>

            {/* Comments */}
            <div className="mt-16 pt-10 border-t border-[#1a1a1a]">
              <CommentSection comments={post.comments} postId={post._id} />
            </div>
          </article>

          {/* ─── SIDEBAR ─────────────────────────────────── */}
          <aside className="lg:border-l lg:border-[#1a1a1a] lg:pl-10">
            <div className="sticky top-8">
              {/* Sidebar header */}
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-[#1a1a1a]">
                <div className="w-1 h-4 bg-[#FF5500]" />
                <span className="text-white font-black text-[10px] tracking-[0.3em] uppercase">
                  From The Feed
                </span>
              </div>
              <NewsSidebar />
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsSlugPage;
