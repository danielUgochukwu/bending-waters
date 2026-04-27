import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

import { client } from "@/sanity/lib/client";
import { PROJECT_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { Project } from "@/types";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PortableText } from "next-sanity";

export const revalidate = 60;

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!slug) {
    return <div className="text-white">Invalid slug</div>;
  }

  const project = await client.fetch<Project | null>(
    PROJECT_QUERY,
    { slug }
  );

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center text-white">
        <div>
          <h1 className="text-3xl font-bold">Project Not Found</h1>
          <Link href="/work" className="text-gray-400">
            Back to Work
          </Link>
        </div>
      </div>
    );
  }

  const imageUrl = project.mainImage
    ? urlFor(project.mainImage).width(1920).url()
    : null;

  return (
    <div className="bg-black text-white">
      <PageHeader title={project.title} />

      <main className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <Link href="/work" className="text-gray-400 flex items-center gap-2">
            <ArrowLeft size={16} />
            Back
          </Link>

          <h1 className="mt-6 text-5xl font-bold">{project.title}</h1>
          <p className="text-gray-400">{project.category}</p>

          {imageUrl && (
            <div className="relative mt-10 h-[500px] w-full">
              <Image
                src={imageUrl}
                alt={project.title}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          )}

          {project.body && (
            <div className="prose prose-invert mt-10 max-w-none">
              <PortableText value={project.body} />
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
