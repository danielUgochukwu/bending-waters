import React from 'react'
import Image from 'next/image'

const SuccessStories = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-medium text-black mb-6">
                        What <span className="font-serif italic text-np-orange">success</span> on BendingWaters
                        <br className="hidden md:block" /> looks like
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
                        Achieving growth, visibility, and meaningful collaborations with top creative talents on BendingWaters.
                    </p>
                </div>

                <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[32px] overflow-hidden">
                    <Image
                        src="/images/career-7.png"
                        alt="Success story on BendingWaters"
                        fill
                        className="object-cover"
                    />
                    {/* Optional overlay if needed for text readability or style */}
                    <div className="absolute inset-0 bg-black/10" />
                </div>
            </div>
        </section>
    )
}

export default SuccessStories
