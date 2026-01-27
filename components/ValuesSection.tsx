import { Lightbulb, Flag, Smile } from 'lucide-react';

const values = [
    {
        icon: Lightbulb,
        title: "Think Big",
        description: "\"Think Big\" challenges our teams in all aspects of the business. For our clients, it requires that we expand their vision beyond what's expected, while pushing us to become a committed partner who provides strategic recommendations and measurable business outcomes."
    },
    {
        icon: Flag,
        title: "Own It",
        description: "\"Own It\" plays a key role in encouraging employee autonomy. We believe owning it inspires employees to build skillsets within their roles, carve out career paths, and gain valuable leadership tools. \"Own It\" highlights the need to exercise responsibility and accountability."
    },
    {
        icon: Smile,
        title: "Have Fun",
        description: "\"Have Fun\" means we enjoy working together and cultivating an enjoyable work environment for all. Our passion for what we do is visible throughout the organization. Anything we enjoy, we're naturally going to do better, so we make our job something we look forward to, rather than simply a responsibility."
    }
];

export default function ValuesSection() {
    return (
        <section className="bg-[#f0f2f4] text-black py-20 px-4 md:px-8">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <span className="text-np-orange font-bold tracking-wider uppercase mb-4 block">Values</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">What we believe, and live by.</h2>
                    <div className="w-20 h-1 bg-np-orange mx-auto mb-8"></div>
                    <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
                        We're client partners first, committed to paving the way for growth. We're focused on helping brands disrupt their industry through digital marketing. We're also big on a work life balance. We've built a team of fun, driven, and motivated specialists who are encouraged to live our company values.
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
