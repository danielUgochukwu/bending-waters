import Link from "next/link";

const UnlockGrowth = () => {
    return (
        <section className="w-full py-20 md:py-32 bg-white flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-8">
                Ready to <span className="text-np-orange">unlock growth</span>?
            </h2>

            <Link
                href="#"
                className="inline-block px-10 py-4 bg-np-orange text-white font-semibold text-lg hover:bg-orange-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
                Let&apos;s talk
            </Link>
        </section>
    );
};

export default UnlockGrowth;
