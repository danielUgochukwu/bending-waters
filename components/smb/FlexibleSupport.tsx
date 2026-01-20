"use client";

import Image from "next/image";

const cards = [
  {
    title: "Launch your Project",
    description:
      "Select the type of project you want to start and get matched with the perfect team instantly.",
    image: "/images/dashboard_launch.png",
  },
  {
    title: "Meet your Project manager",
    description:
      "Get matched with a dedicated project manager who vets top-tier creatives, manages timelines, and ensures your budget is optimized—so you can focus on strategy.",
    image: "/images/dashboard_pm.png",
  },
  {
    title: "Select & Pay Creatives",
    description:
      "Review milestones, approve work, and handle payments securely within the platform.",
    image: "/images/dashboard_pay.png",
  },
  {
    title: "Manage Everything in One Place",
    description:
      "Track progress, communicate with your team, and manage all your creative assets in a single dashboard.",
    image: "/images/dashboard_manage.png",
  },
];

export default function FlexibleSupport() {
  return (
    <section className="py-24 bg-[#020617] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 leading-tight">
            Finally, <span className="font-serif italic">Flexible</span> and{" "}
            <span className="font-serif italic">Affordable</span>
            <br />
            Support That Works For You
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            With flexible monthly creative credits, you gain access to 70,000+
            creative freelancers to support your marketing and creative needs
            seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative h-[400px] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 transition-all duration-300 hover:border-slate-600"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay - Always visible but stronger at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent opacity-90" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-[60px] transition-transform duration-300 ease-in-out group-hover:translate-y-0 bg-gradient-to-t from-[#020617] via-[#020617] to-transparent pt-12">
                <h3 className="text-xl font-semibold mb-3 leading-tight">
                  {card.title.split(" ").map((word, i) =>
                    word.toLowerCase() === "project" ||
                    word.toLowerCase() === "creatives" ||
                    word.toLowerCase() === "one" ? (
                      <span key={i} className="font-serif italic font-normal">
                        {word}{" "}
                      </span>
                    ) : (
                      word + " "
                    )
                  )}
                </h3>
                <p className="text-sm text-slate-300 opacity-0 transition-opacity duration-300 delay-100 group-hover:opacity-100 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-medium mb-8">
            Ready to get <span className="font-serif italic">started?</span>
          </h3>
          <button className="bg-np-orange hover:bg-np-orange-700 text-white rounded-lg px-8 py-3 font-medium transition-colors">
            Read our content
          </button>
        </div>
      </div>
    </section>
  );
}
