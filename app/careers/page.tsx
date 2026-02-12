'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Button from '@/components/Button';
import { Heart, Zap, Users, Globe, ArrowRight } from 'lucide-react';

const benefits = [
    {
        icon: Heart,
        title: "Health & Wellness",
        description: "Comprehensive health coverage including medical, dental, and vision for you and your family."
    },
    {
        icon: Zap,
        title: "Growth Mindset",
        description: "Continuous learning opportunities, conference budgets, and internal workshops to keep you sharp."
    },
    {
        icon: Users,
        title: "Collaborative Culture",
        description: "Work with passionate individuals who challenge and support each other to do their best work."
    },
    {
        icon: Globe,
        title: "Remote Friendly",
        description: "Flexible work arrangements allowing you to work from where you feel most productive."
    }
];

const openPositions = [
    {
        id: 1,
        title: "Senior Frontend Developer",
        department: "Engineering",
        location: "Remote",
        type: "Full-time"
    },
    {
        id: 2,
        title: "Digital Marketing Manager",
        department: "Marketing",
        location: "Lagos, Nigeria",
        type: "Full-time"
    },
    {
        id: 3,
        title: "Product Designer",
        department: "Design",
        location: "Remote",
        type: "Contract"
    },
    {
        id: 4,
        title: "Content Strategist",
        department: "Marketing",
        location: "Cape Town, South Africa",
        type: "Full-time"
    }
];

export default function CareersPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white text-black">
            <Header />

            <PageHeader title="Careers at BendingWaters" />

            <main className="flex-1">
                {/* Intro Section */}
                <section className="py-20 px-4 md:px-8">
                    <div className="container-custom mx-auto max-w-4xl text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Join us in shaping the <span className="text-np-orange">future of digital</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            At BendingWaters, we're not just building campaigns; we're building legacies.
                            We are looking for curious, driven, and innovative minds to join our mission
                            of transforming African businesses into global powerhouses.
                        </p>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="bg-gray-50 py-20 px-4 md:px-8">
                    <div className="container-custom mx-auto max-w-6xl">
                        <div className="text-center mb-16">
                            <h3 className="text-2xl font-bold uppercase tracking-wider text-np-orange mb-4">Why Join Us?</h3>
                            <h2 className="text-4xl font-bold">Perks & Benefits</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-np-orange/10 rounded-full flex items-center justify-center text-np-orange mb-6">
                                        <benefit.icon size={24} />
                                    </div>
                                    <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Open Positions Section */}
                <section className="py-20 px-4 md:px-8">
                    <div className="container-custom mx-auto max-w-5xl">
                        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">Open Positions</h2>
                            <p className="text-gray-600">We are always looking for talent.</p>
                        </div>

                        <div className="flex flex-col gap-4">
                            {openPositions.map((position) => (
                                <div
                                    key={position.id}
                                    className="group flex flex-col md:flex-row items-start md:items-center justify-between p-8 bg-white border border-gray-100 rounded-2xl hover:border-np-orange/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
                                >
                                    <div className="mb-4 md:mb-0">
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-np-orange transition-colors">
                                            {position.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                            <span className="flex items-center gap-1">
                                                <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                                                {position.department}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                                                {position.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                                                {position.type}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-np-orange font-medium opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                        Apply Now <ArrowRight size={18} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 text-center bg-gray-900 text-white rounded-3xl p-10 md:p-16">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Don't see your role?</h3>
                            <p className="max-w-xl mx-auto text-gray-400 mb-8">
                                We are always interested in meeting talented people. Send us your resume and tell us how you can make an impact.
                            </p>
                            <Button href="/contact" variant="primary">
                                Get in Touch
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
