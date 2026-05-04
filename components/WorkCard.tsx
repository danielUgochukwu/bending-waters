import Image from "next/image";
import Link from "next/link";

interface WorkCardProps {
  image: string;
  title: string;
  category: string;
  href: string;
  index: number;
  className?: string;
}

export default function WorkCard({
  image,
  title,
  category,
  href,
  index,
  className,
}: WorkCardProps) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <Link
      href={href}
      className={`group relative block w-full overflow-hidden bg-[#0d0d0d] ${className}`}
    >
      {/* Ghost project number */}
      <div className="absolute top-5 left-6 z-10 font-black text-7xl leading-none text-white/6 select-none pointer-events-none transition-all duration-500 group-hover:text-white/3">
        {num}
      </div>

      {/* Arrow — top right */}
      <div className="absolute top-5 right-5 z-20 w-9 h-9 border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:border-[#FF5500] group-hover:bg-[#FF5500]">
        <svg
          className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          fill="none"
          viewBox="0 0 16 16"
        >
          <path
            d="M3 13L13 3M13 3H6M13 3V10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Image */}
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Content — staggered fade-up */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-3 transition-transform duration-500 ease-out group-hover:translate-y-0">
        <div
          className="flex items-center gap-3 mb-3 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
          style={{ transitionDelay: "40ms" }}
        >
          <div className="w-4 h-px bg-[#FF5500]" />
          <span className="text-[#FF5500] text-[10px] font-bold tracking-[0.3em] uppercase">
            {category}
          </span>
        </div>

        <h3
          className="text-white font-black text-xl md:text-2xl leading-tight tracking-tight opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
          style={{ transitionDelay: "80ms" }}
        >
          {title}
        </h3>

        <div
          className="mt-3 flex items-center gap-2 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
          style={{ transitionDelay: "120ms" }}
        >
          <span className="text-gray-400 text-xs font-medium tracking-widest uppercase">
            View Project
          </span>
        </div>
      </div>

      {/* Bottom orange line */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-[#FF5500] w-0 transition-all duration-500 ease-out group-hover:w-full" />
    </Link>
  );
}
