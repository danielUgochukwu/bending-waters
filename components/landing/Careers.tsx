import Image from "next/image";
import Link from "next/link";

const Careers = () => {
    // Using existing assets to simulate the grid. In a real scenario, these would be distinct team photos.
    const images = [
        "/hero1.png",
        "/hero2.png",
        "/story-bg.png",
        "/hero1.png",
        "/hero2.png",
        "/story-bg.png",
        "/hero1.png",
        "/hero2.png",
    ];

    return (
        <section className="relative w-full py-24 md:py-32 flex items-center justify-center overflow-hidden bg-black">
            {/* Background Grid */}
            <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-0 opacity-40 pointer-events-none">
                {images.map((src, index) => (
                    <div key={index} className="relative w-full h-full min-h-[200px] md:min-h-[300px]">
                        <Image
                            src={src}
                            alt={`Team member ${index + 1}`}
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                        />
                    </div>
                ))}
            </div>

            {/* Dark Overlay Gradient for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-0"></div>

            {/* Content Overlay */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <div className="max-w-3xl mx-auto flex flex-col items-center space-y-6">
                    <span className="text-np-orange font-bold tracking-widest uppercase text-sm md:text-base">
                        CAREERS
                    </span>

                    <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        Join an award winning digital marketing team.
                    </h2>

                    <div className="w-16 h-1 bg-np-orange my-4"></div>

                    <p className="text-neutral-200 text-lg md:text-xl leading-relaxed max-w-2xl">
                        Beer and ping-pong are fun, but we prioritize employee growth and impact.
                        Think big, own it, and have fun — earning recognition from "Ad Age" and "Inc." as a Best Place to Work.
                    </p>

                    <div className="pt-8">
                        <Link
                            href="#"
                            className="inline-block px-10 py-4 border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-colors duration-300 uppercase tracking-wide"
                        >
                            Search and apply
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Careers;
