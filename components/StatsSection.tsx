import React from 'react';

const stats = [
    {
        value: '1000+',
        description: 'Growing business owners communities',
    },
    {
        value: '30+',
        description: 'Enterprise clients trust our solutions worldwide.',
    },
    {
        value: '100+',
        description: 'SMBs leveraging our expertise for growth.',
    },
    {
        value: '5',
        description: 'Countries with our active presence and support.',
    },
];

const StatsSection = () => {
    return (
        <section className="bg-np-orange py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                                {stat.value}
                            </h2>
                            <p className="text-black/90 text-sm md:text-base leading-relaxed max-w-[250px]">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
