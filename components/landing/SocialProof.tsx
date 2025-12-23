export default function SocialProof() {
    return (
        <section className="py-12 bg-card-bg border-y border-gray-800">
            <div className="container-custom">
                <p className="text-center text-gray-400 mb-8 text-sm uppercase tracking-widest">
                    Trusted by industry leaders
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholder Logos - In a real app, use next/image */}
                    <div className="text-2xl font-bold text-white">GOOGLE</div>
                    <div className="text-2xl font-bold text-white">FACEBOOK</div>
                    <div className="text-2xl font-bold text-white">LINKEDIN</div>
                    <div className="text-2xl font-bold text-white">INTUIT</div>
                    <div className="text-2xl font-bold text-white">SALESFORCE</div>
                </div>
            </div>
        </section>
    );
}
