import Image from "next/image";

interface PageHeaderProps {
  title: string;
  image?: string;
  subtitle?: string;
  category?: string;
  date?: string;
}

const PageHeader = ({
  title,
  image = "/images/news_header.png",
  subtitle,
  category,
  date,
}: PageHeaderProps) => {
  return (
    <div className="relative w-full h-[45vh] min-h-[300px] md:h-[55vh] md:min-h-[420px] overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover scale-105"
        priority
      />

      {/* Layered gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/40 to-transparent" />

      {/* Decorative top bar */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#FF5500]/60 via-[#FF5500]/20 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-10 md:pb-14 max-w-7xl mx-auto">
        {(category || date) && (
          <div className="flex items-center gap-4 mb-4">
            {category && (
              <span className="text-[#FF5500] text-xs font-bold tracking-[0.2em] uppercase">
                {category}
              </span>
            )}
            {category && date && <span className="w-4 h-px bg-[#FF5500]/50" />}
            {date && (
              <span className="text-gray-400 text-xs tracking-widest uppercase">
                {date}
              </span>
            )}
          </div>
        )}

        <h1 className="text-white font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.9] uppercase max-w-4xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 text-gray-400 text-base md:text-lg max-w-xl leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Bottom accent line */}
        <div className="mt-6 flex items-center gap-3">
          <div className="w-12 h-[3px] bg-[#FF5500]" />
          <div className="w-2 h-[3px] bg-[#FF5500]/40" />
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
