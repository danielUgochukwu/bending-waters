import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CreativeCTA = () => {
    return (
        <section className="py-20 px-4 md:px-8 bg-white">
            <div className="container mx-auto max-w-6xl">
                <div className="relative bg-white rounded-[32px] overflow-hidden shadow-lg border border-gray-100 flex flex-col md:flex-row min-h-[400px]">
                    {/* Content Side */}
                    <div className="flex-1 p-8 md:p-16 flex flex-col justify-center z-10 relative">
                        <h2 className="text-4xl md:text-5xl font-medium text-black mb-6">
                            Are you a <span className="font-serif italic text-np-orange">creative</span>?
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 max-w-md">
                            Turn your creativity into income! Connect with brands, grow your audience, and get paid for your work.
                        </p>
                        <Link
                            href="/news"
                            className="bg-np-orange text-white font-medium py-3 px-8 rounded-lg w-fit transition-colors"
                        >
                            Read our content
                        </Link>
                    </div>

                    {/* Image Side */}
                    <div className="relative w-full md:w-1/2 min-h-[300px] md:min-h-full">
                        <Image
                            src="/images/creative.png"
                            alt="Creative professional"
                            fill
                            className="object-cover object-center"
                        />
                        {/* Gradient Fade Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent md:via-white/20" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent md:hidden" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CreativeCTA
