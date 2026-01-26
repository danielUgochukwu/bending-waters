"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "We have had the pleasure of working with BendingWaters for our video production needs, and we couldn't be happier with the results. BendingWaters truly goes above and beyond to deliver high-quality content that resonates with our audience.",
    author: "Audrey Chancia Meblay",
    role: "Global Head of Communications",
    company: "Arise IIP",
    image: "/images/arise-logo.png", // Placeholder, will need to handle if image missing
  },
  {
    quote:
      "The flexibility and quality of talent we found through BendingWaters has been instrumental in scaling our creative output. It's a game-changer for our marketing team.",
    author: "Sarah Jenkins",
    role: "VP of Marketing",
    company: "TechFlow",
    image: "",
  },
  {
    quote:
      "Finding specialized creative talent used to be a headache. Now, it's the easiest part of our project planning. Highly recommended.",
    author: "Michael Chen",
    role: "Creative Director",
    company: "Studio Sphere",
    image: "",
  },
];

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-12 bg-[#F3F5FF]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-medium text-black mb-6 tracking-tight">
            Don&apos;t just take
            <br />
            <span className="font-serif italic text-np-orange">
              our word
            </span>{" "}
            for it
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Hear from real users who&apos;ve tried it and shared their honest
            experiences—
            <br className="hidden md:block" />
            see what they love about us!
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Content */}
          <div className="text-center max-w-4xl mx-auto px-8 md:px-12">
            <blockquote className="text-xl md:text-[32px] leading-tight md:leading-snug font-medium text-[#1A1A1A] mb-12">
              &quot;
              {currentTestimonial.quote
                .split("BendingWaters")
                .map((part, i, arr) => (
                  <React.Fragment key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span className="font-bold">BendingWaters</span>
                    )}
                  </React.Fragment>
                ))}
              &quot;
            </blockquote>

            <div className="flex flex-col items-center justify-center gap-4">
              {/* Logo/Image Placeholder */}
              <div className="w-12 h-12 relative flex items-center justify-center">
                {currentTestimonial.image ? (
                  <div className="w-10 h-10 relative">
                    {/* Using a generic placeholder if file doesn't exist, but structure is here */}
                    <div className="w-full h-full bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      {/* Simulate the logo from screenshot */}
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-6 h-6"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div className="w-10 h-10 bg-gray-200 rounded-full" />
                )}
              </div>

              <div className="text-center">
                <div className="font-bold text-gray-900 text-lg">
                  {currentTestimonial.author}
                </div>
                <div className="text-gray-500 text-sm">
                  {currentTestimonial.role}, {currentTestimonial.company}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
