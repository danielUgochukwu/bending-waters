import Image from "next/image";

interface PageHeaderProps {
    title: string;
    image?: string;
}

const PageHeader = ({ title, image = "/images/news_header.png" }: PageHeaderProps) => {
    return (
        <div className="relative w-full h-40 md:h-60 flex-center">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/20" />
            <h1 className="relative z-10 text-white text-3xl sm:text-4xl md:text-5xl tracking-wider uppercase font-medium">
                {title}
            </h1>
        </div>
    );
};

export default PageHeader;
