import React from 'react';

const stats = [
    {
        value: '+9mm',
        description: 'visits to the Neil Patel blog per month – one of the top 100 blog destinations in the world.',
    },
    {
        value: '+1.3mm',
        description: 'subscribers to our YouTube channel – Over 1,000,000 video views each month on average.',
    },
    {
        value: '+4.2mm',
        description: 'users login and use Ubersuggest and ATP each month. Over 950MM monthly queries.',
    },
    {
        value: '+1.2mm',
        description: 'downloads of our podcast each month, +2,300 episodes dropped to date.',
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
