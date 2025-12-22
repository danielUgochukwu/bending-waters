import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Plus, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-16 pt-24 pb-20 lg:pt-32 lg:pb-32 max-sm:mt-20">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text & 3D Element */}
          <div className="relative">
            {/* 3D Ring Placeholder - Positioned behind/around text */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 opacity-80 pointer-events-none z-0">
              {/* Using a simple CSS shape or placeholder for the 3D ring for now */}
              <div className="w-full h-full border-20 border-gray-700 rounded-full transform rotate-45 skew-x-12 shadow-2xl"></div>
            </div>

            <div className="relative z-10">
              {/* Digital Badge */}
              <div className="inline-block bg-np-dark border border-gray-800 rounded-full px-8 py-3 mb-6 shadow-lg">
                <span className="text-np-orange text-3xl font-bold">
                  Digital
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-none tracking-tighter mb-2">
                <span className="relative">
                  DIGITAL
                  {/* Green Sparkle Icon */}
                  <span className="absolute -top-4 -left-8 text-np-orange">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                  </span>
                </span>
              </h1>
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-np-orange italic leading-none tracking-tighter mb-8">
                AGENCY
              </h1>

              {/* Description */}
              <p className="text-gray-400 text-lg max-w-md mb-10 leading-relaxed">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>

              {/* CTA Button */}
              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-np-orange text-black font-bold px-8 py-4 rounded-full hover:bg-white transition-colors duration-300"
              >
                Discover More
                <div className="bg-white rounded-full p-1">
                  <ArrowUpRight className="w-4 h-4 text-black" />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column: Image & Review Card */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
              {/* Main Image */}
              <div className="relative h-[500px] w-full">
                <Image
                  src="/hero1.png"
                  alt="Digital Agency Team"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Review Card Overlay */}
              <div className="absolute bottom-8 right-8 bg-black/90 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 max-w-xs">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-np-orange text-4xl font-bold">4.8</span>
                  <div>
                    <div className="flex text-white mb-1">
                      <Star className="w-4 h-4 fill-white text-white" />
                      <Star className="w-4 h-4 fill-white text-white" />
                      <Star className="w-4 h-4 fill-white text-white" />
                      <Star className="w-4 h-4 fill-white text-white" />
                      <Star className="w-4 h-4 fill-white text-white" />
                    </div>
                    <p className="text-xs text-gray-400">
                      Based on 204 Reviews
                    </p>
                  </div>
                </div>

                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-black bg-gray-300 overflow-hidden">
                    <Image src="/hero1.png" alt="User" width={40} height={40} />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-black bg-gray-400 overflow-hidden">
                    <Image src="/hero2.png" alt="User" width={40} height={40} />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-black bg-gray-500 overflow-hidden">
                    <Image src="/hero2.png" alt="User" width={40} height={40} />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-black bg-np-blue flex items-center justify-center text-white text-xs font-bold bg-blue-600">
                    <Plus className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
