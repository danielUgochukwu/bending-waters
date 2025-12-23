import React from 'react';
import Marquee from '@/components/ui/Marquee';

const companies = [
    "Circle",
    "nirastat",
    "Quantum",
    "Apex",
    "Zenith",
    "Evolve"
];

const Partners = () => {
    return (
        <section className="w-full bg-np-orange py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-2xl font-semibold text-gray-300 text-center mb-12">
                    Trusted by 1600+ of the world's most popular companies
                </h2>

                <div className="w-full mask-image-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]">
                    <Marquee speed={40} pauseOnHover>
                        <ul className="flex items-center justify-center space-x-16 px-8">
                            {companies.map((company, index) => (
                                <li key={`list-${index}`}>
                                    <span className="text-2xl font-medium text-gray-400 whitespace-nowrap">
                                        {company}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default Partners;