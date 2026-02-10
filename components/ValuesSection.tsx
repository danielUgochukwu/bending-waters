import { BrickWall, Settings, Rocket } from 'lucide-react';

const values = [
    {
        icon: BrickWall,
        title: "The Foundation",
        description: "BendingWaters helps you articulate the WHY behind your idea and test its viability. By brainstorming high-level strategies and building the essential support systems, we ensure your startup has the structural integrity to support massive growth"
    },

    {
        icon: Settings,
        title: "The Process",
        description: "BendingWaters implement seamless digital marketing systems and growth workflows to help you beat the \"5-year failure\" statistic, ensuring your business operates with efficiency, clarity, and sustainable structure."
    },
    {
        icon: Rocket,
        title: "The Flight",
        description: "Through data-driven strategies and global positioning, BendingWaters helps your brand take flight - expanding your footprint and evolving your business into the most powerful, influential version of itself."
    }
];

export default function ValuesSection() {
    return (
        <section className="bg-[#f0f2f4] text-black py-20 px-4 md:px-8">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <span className="text-np-orange font-bold tracking-wider uppercase mb-4 block">Values</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Why We Do What We Do.</h2>
                    <div className="w-20 h-1 bg-np-orange mx-auto mb-8"></div>
                    <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
                        BendingWaters exists to bridge the gap between a brilliant idea and a global legacy, guiding your business through three critical stages of evolution.

                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 bg-white">
                            <div className="mb-6 text-np-orange">
                                <value.icon size={64} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-3xl font-bold mb-6">{value.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
