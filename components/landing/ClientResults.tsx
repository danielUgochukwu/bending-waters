import Image from "next/image";
import Link from "next/link";

const ClientResults = () => {
  const clients = [
    { name: "RefiJet", logo: "/images/client-1.png" },
    { name: "ZAGG", logo: "/images/client-2.png" },
    { name: "Adobe", logo: "/images/client-3.png" },
    { name: "Claire's", logo: "/images/client-4.png" },
    {
      name: "Universal Technical Institute",
      logo: "/images/client-5.png",
    },
    { name: "SoFi", logo: "/images/client-6.png" },
    { name: "CNN", logo: "/images/client-7.png" },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-np-grey dark:bg-neutral-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-foreground">
          Client results
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center mb-16 md:mb-24">
          {/* Left Column: Visual Asset */}
          <div className="lg:col-span-7 relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-neutral-200 dark:bg-neutral-800 group">
            <Image
              src="/images/creative.png"
              alt="Client Results"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-5 max-w-3xl flex flex-col justify-center space-y-6">
            <span className="text-np-orange font-bold tracking-wider uppercase text-sm md:text-base">
              REFIJET
            </span>
            <h3 className="text-2xl md:text-4xl font-bold leading-tight text-foreground">
              We've grown communities across niches with a +1,001% increase in 6 months
            </h3>
            <div className="w-12 h-1 bg-np-orange"></div>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
              Want to leverage community-led growth strategies for your business? Lets have a conversation!
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 border-2 border-np-orange text-np-orange font-semibold hover:bg-np-orange hover:text-white transition-colors duration-300"
              >
                Contact us to learn more
              </Link>
            </div>
          </div>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="aspect-square bg-neutral-800 flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 group cursor-pointer relative"
            >
              <div className="relative w-full h-full">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientResults;
