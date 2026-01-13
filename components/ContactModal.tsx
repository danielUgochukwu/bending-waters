"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { submitContactForm } from "@/app/actions/contact";
import { useState, useTransition } from "react";

export default function ContactModal() {
    const { isOpen, closeModal } = useModal();
    const modalRef = useRef<HTMLDivElement>(null);
    const backdropRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [isPending, startTransition] = useTransition();
    const [status, setStatus] = useState<{ success?: boolean; message?: string } | null>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        startTransition(async () => {
            const result = await submitContactForm(formData);
            setStatus(result);
            if (result.success) {
                // Optional: Close modal after success or show success message
                setTimeout(() => {
                    closeModal();
                    setStatus(null); // Reset status for next open
                }, 2000);
            }
        });
    };

    useGSAP(
        () => {
            if (isOpen) {
                gsap.to(backdropRef.current, {
                    opacity: 1,
                    duration: 0.3,
                    ease: "power2.out",
                });
                gsap.fromTo(
                    contentRef.current,
                    { scale: 0.9, opacity: 0, y: 20 },
                    { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.7)" }
                );
            }
        },
        { scope: modalRef, dependencies: [isOpen] }
    );

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            ref={modalRef}
            className="fixed inset-0 z-200 flex items-center justify-center p-4 sm:p-6"
        >
            {/* Backdrop */}
            <div
                ref={backdropRef}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0"
                onClick={closeModal}
            />

            {/* Modal Content */}
            <div
                ref={contentRef}
                className="relative w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh] overflow-y-auto"
            >
                {/* Close Button */}
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
                >
                    <X size={24} />
                </button>

                <div className="p-8 md:p-12 flex flex-col items-center">
                    {/* Logo */}
                    <div className="mb-6">
                        {/* Using the existing logo.svg but we might need a colored version if the svg is white-only. 
                 Checking the logo file previously showed it was 54kb. 
                 Assuming it works on white or we might need a filter. 
                 For now using it as is. */}
                        <div className="relative w-32 h-12">
                            {/* Note: The design shows "NP digital" in orange/black. 
                   If the current logo.svg is white (for dark mode), it might be invisible here.
                   I'll add a filter to invert it if needed, or just assume it handles color.
                   Actually, let's just use the image tag. */}
                            <Image
                                src="/images/logo.png"
                                alt="NP Digital"
                                fill
                                className="object-contain invert" // Inverting because the logo is likely white for the dark theme website
                            />
                        </div>
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
                        Work with us.
                    </h2>
                    <p className="text-gray-600 text-center mb-10">
                        Fill out the form below to speak with someone from our team.
                    </p>

                    {/* Form */}
                    <form className="w-full space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Email */}
                            <div className="bg-gray-50 p-3 rounded-sm border border-gray-100 focus-within:border-gray-300 transition-colors">
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Email"
                                    className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
                                />
                            </div>

                            {/* Phone */}
                            <div className="bg-gray-50 p-3 rounded-sm border border-gray-100 focus-within:border-gray-300 transition-colors flex items-center gap-2">
                                <div className="flex items-center gap-1 border-r border-gray-300 pr-2">
                                    {/* Placeholder flag */}
                                    <div className="w-5 h-3 bg-green-600 relative overflow-hidden">
                                        <div className="absolute left-1/3 right-1/3 top-0 bottom-0 bg-white"></div>
                                    </div>
                                    <span className="text-gray-600 text-sm">+234</span>
                                </div>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder=""
                                    className="w-full bg-transparent outline-none text-gray-700"
                                />
                            </div>

                            {/* First Name */}
                            <div className="bg-gray-50 p-3 rounded-sm border border-gray-100 focus-within:border-gray-300 transition-colors">
                                <input
                                    type="text"
                                    name="firstName"
                                    required
                                    placeholder="First Name"
                                    className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
                                />
                            </div>

                            {/* Last Name */}
                            <div className="bg-gray-50 p-3 rounded-sm border border-gray-100 focus-within:border-gray-300 transition-colors">
                                <input
                                    type="text"
                                    name="lastName"
                                    required
                                    placeholder="Last Name"
                                    className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
                                />
                            </div>

                            {/* Website URL */}
                            <div className="bg-gray-50 p-3 rounded-sm border border-gray-100 focus-within:border-gray-300 transition-colors">
                                <input
                                    type="url"
                                    name="website"
                                    placeholder="Website URL?"
                                    className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
                                />
                            </div>

                            {/* Monthly Marketing Budget */}
                            <div className="bg-gray-50 p-3 rounded-sm border border-gray-100 focus-within:border-gray-300 transition-colors">
                                <label htmlFor="budget" className="sr-only">Monthly Marketing Budget</label>
                                <select
                                    id="budget"
                                    className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400 appearance-none cursor-pointer"
                                    defaultValue=""
                                    name="budget"
                                >
                                    <option value="" disabled>Monthly Marketing Budget</option>
                                    <option value="<5k">Less than $5,000</option>
                                    <option value="5k-10k">$5,000 - $10,000</option>
                                    <option value="10k-50k">$10,000 - $50,000</option>
                                    <option value="50k+">$50,000+</option>
                                </select>
                            </div>
                        </div>

                        {/* Disclaimer */}
                        <p className="text-xs text-gray-500 mt-6 leading-relaxed">
                            By clicking the button below, you consent for BendingWaters and partners to use automated technology, including pre-recorded messages, cell phones and texts, and email to contact you at the number and email address provided. This includes if the number is currently on any Do Not Call Lists. This consent is not required to make a purchase. Privacy Policy.
                        </p>

                        {/* Submit Button */}
                        <div className="flex justify-end mt-8">
                            <button
                                type="submit"
                                disabled={isPending}
                                className="bg-np-orange hover:bg-orange-600 text-white font-medium py-3 px-12 rounded-sm transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isPending ? "Submitting..." : "Submit"}
                            </button>
                        </div>
                        {status && (
                            <div className={`text-center text-sm ${status.success ? "text-green-600" : "text-red-600"}`}>
                                {status.message}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}
