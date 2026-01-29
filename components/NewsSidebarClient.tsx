"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface NewsSidebarClientProps {
    categories: any[];
    tags: string[];
}

const NewsSidebarClient = ({ categories, tags }: NewsSidebarClientProps) => {
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    const handleSearch = () => {
        if (searchQuery.trim()) {
            router.push(`/news?search=${encodeURIComponent(searchQuery)}`);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <aside className="flex flex-col gap-8">
            {/* Search Widget */}
            <div className="bg-[#1a1a1a] p-8 rounded-2xl">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search Here..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="w-full bg-[#262626] text-gray-300 placeholder-gray-500 py-4 pl-6 pr-14 rounded-lg focus:outline-none focus:ring-1 focus:ring-np-orange"
                    />
                    <button
                        onClick={handleSearch}
                        className="absolute right-0 top-0 h-full w-14 bg-np-orange rounded-r-lg flex items-center justify-center hover:bg-white transition-colors group"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
                            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Categories Widget */}
            <div className="bg-[#1a1a1a] p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
                    Category
                    <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-np-orange rounded-full"></span>
                </h3>
                <ul className="space-y-4">
                    {categories?.map((category, index) => (
                        <li key={index}>
                            <Link
                                href={`/news?category=${encodeURIComponent(category.title)}`}
                                className="flex items-center gap-3 text-gray-400 hover:text-np-orange transition-colors group"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-600 group-hover:text-np-orange transition-colors">
                                    <path d="M3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7M3 7L12 13L21 7M3 7L12 2L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M22 19L12 19L2 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 7L12 13L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 7L12 2L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 7V17C2 18.1046 2.89543 19 4 19H20C21.1046 19 22 18.1046 22 17V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7M3 7L12 13L21 7M3 7L12 2L21 7" stroke="none" />
                                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                                    <path d="M2 9H22" stroke="currentColor" strokeWidth="2" />
                                </svg>
                                <span>{category.title}</span>
                                <span className="ml-auto text-sm bg-[#262626] px-2 py-1 rounded text-gray-500 group-hover:text-np-orange transition-colors">{category.count}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Tags Widget */}
            <div className="bg-[#1a1a1a] p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
                    Tag
                    <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-np-orange rounded-full"></span>
                </h3>
                <div className="flex flex-wrap gap-3">
                    {tags?.map((tag, index) => (
                        <Link
                            key={index}
                            href={`/news?tag=${encodeURIComponent(tag)}`}
                            className="px-4 py-2 bg-[#262626] text-gray-400 text-sm font-medium rounded hover:bg-np-orange hover:text-black transition-all"
                        >
                            {tag}
                        </Link>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default NewsSidebarClient;
