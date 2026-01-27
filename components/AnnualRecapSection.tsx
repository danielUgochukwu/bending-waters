import React from 'react';

const AnnualRecapSection = () => {
    return (
        <section className="relative w-full py-24 md:py-32 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/annual-recap-bg.png')" }}
            >
                {/* Overlay for better text readability if needed */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-8 text-center text-white">
                <span className="text-np-orange font-bold tracking-wider uppercase mb-6 block text-sm md:text-base">
                    Annual Recap
                </span>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                    Another year of explosive growth.
                </h2>

                <div className="w-20 h-1 bg-np-orange mx-auto mb-8"></div>

                <p className="max-w-3xl mx-auto text-gray-200 text-lg leading-relaxed mb-16">
                    2024 brought significant technology enhancements to both Ubersuggest and AnswerThePublic, new client growth, industry recognition and another strategic acquisition.
                </p>

                {/* Media Placeholder / Video Container */}
                <div className="max-w-5xl mx-auto border-8 border-white bg-black aspect-video flex items-center justify-center relative overflow-hidden">
                    <video
                        src="/videos/videeo.mp4"
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
            </div>
        </section>
    );
};

export default AnnualRecapSection;
