'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { Brain, Cpu, Network, Database, Code, Zap } from 'lucide-react';

const technologies = [
    {
        icon: Brain,
        title: "Machine Learning",
        description: "Predictive algorithms that adapt and evolve with your data."
    },
    {
        icon: Cpu,
        title: "Neural Networks",
        description: "Deep learning models solving complex, non-linear problems."
    },
    {
        icon: Database,
        title: "Big Data Strategy",
        description: "Transforming massive datasets into actionable business intelligence."
    },
    {
        icon: Network,
        title: "Automation",
        description: "Streamlining workflows to maximize efficiency and reduce error."
    },
    {
        icon: Code,
        title: "Custom AI Models",
        description: "Tailored solutions built specifically for your unique industry challenges."
    },
    {
        icon: Zap,
        title: "Real-time Analytics",
        description: "Instant insights empowering split-second decision making."
    }
];

export default function AiPage() {
    return (
        <div className="min-h-screen flex flex-col bg-black text-white selection:bg-np-orange selection:text-white">
            <Header />

            <PageHeader title="AI & Technology" />

            <main className="flex-1">
                {/* Minimalist Hero */}
                <section className="min-h-[60vh] flex flex-col justify-center px-4 md:px-8 border-b border-white/10">
                    <div className="container-custom mx-auto max-w-6xl">
                        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-tight">
                            Intelligence, <br />
                            <span className="text-np-orange">Simplified.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed">
                            We harness the raw power of artificial intelligence to strip away complexity, revealing the elegant solutions hidden within your data.
                        </p>
                    </div>
                </section>

                {/* Capabilities Grid */}
                <section className="py-32 px-4 md:px-8">
                    <div className="container-custom mx-auto max-w-6xl">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
                            <h2 className="text-3xl font-bold uppercase tracking-widest">Capabilities</h2>
                            <p className="text-gray-500 font-mono mt-4 md:mt-0">EST. 2026 // BENDING WATERS</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
                            {technologies.map((tech, index) => (
                                <div key={index} className="group">
                                    <div className="mb-6 text-gray-500 group-hover:text-np-orange transition-colors duration-500">
                                        <tech.icon size={48} strokeWidth={1} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>
                                    <p className="text-gray-400 leading-relaxed group-hover:text-white transition-colors duration-300">
                                        {tech.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Minimalist CTA */}
                <section className="py-32 px-4 md:px-8 bg-white text-black">
                    <div className="container-custom mx-auto max-w-6xl text-center">
                        <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tight">
                            Ready to evolve?
                        </h2>
                        <a
                            href="/contact"
                            className="inline-block border-b-2 border-black pb-1 text-xl md:text-2xl font-medium hover:text-np-orange hover:border-np-orange transition-all duration-300"
                        >
                            Start the conversation
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
