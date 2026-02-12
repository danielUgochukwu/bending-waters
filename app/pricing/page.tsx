'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Button from '@/components/Button';
import { Check } from 'lucide-react';

const pricingPlans = [
    {
        name: 'Starter',
        price: '$999',
        period: '/month',
        description: 'Perfect for small businesses and startups looking to establish a digital presence.',
        features: [
            'Basic SEO Optimization',
            '5 Social Media Posts/mo',
            'Monthly Performance Report',
            'Email Support',
            'Basic Website Maintenance'
        ],
        cta: 'Get Started',
        popular: false
    },
    {
        name: 'Growth',
        price: '$2,499',
        period: '/month',
        description: 'Ideal for growing companies that need a comprehensive marketing strategy.',
        features: [
            'Advanced SEO & Content Strategy',
            '12 Social Media Posts/mo',
            'Bi-weekly Performance Meetings',
            'Email & Priority Chat Support',
            'Advanced Website Maintenance',
            'PPC Campaign Management',
            'Conversion Rate Optimization'
        ],
        cta: 'Get Started',
        popular: true
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'Tailored solutions for large organizations with complex requirements.',
        features: [
            'Full-Service Digital Marketing',
            'Daily Social Media Management',
            'Weekly Strategy Calls',
            '24/7 Dedicated Support',
            'Custom Web Development',
            'Global SEO dominance',
            'Brand Identity Development',
            'Dedicated Account Manager'
        ],
        cta: 'Contact Us',
        popular: false
    }
];

export default function PricingPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white text-black">
            <Header />

            <PageHeader title="Pricing Plans" />

            <main className="flex-1 py-20 px-4 md:px-8">
                <div className="container-custom mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Transparent Pricing for <span className="text-np-orange">Measurable Results</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            Choose the plan that best fits your business goals. No hidden fees, just results.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {pricingPlans.map((plan, index) => (
                            <div
                                key={index}
                                className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 flex flex-col ${plan.popular
                                        ? 'bg-black text-white shadow-2xl ring-4 ring-np-orange/20'
                                        : 'bg-gray-50 text-gray-900 border border-gray-100 hover:shadow-xl'
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-np-orange text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                                    <div className="flex items-baseline gap-1">
                                        <span className={`text-4xl md:text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                                        <span className={`text-sm ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>{plan.period}</span>
                                    </div>
                                    <p className={`mt-4 ${plan.popular ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {plan.description}
                                    </p>
                                </div>

                                <div className="flex-1 mb-8">
                                    <ul className="space-y-4">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className={`mt-1 min-w-[18px] w-[18px] h-[18px] rounded-full flex items-center justify-center ${plan.popular ? 'bg-np-orange text-white' : 'bg-green-100 text-green-600'
                                                    }`}>
                                                    <Check size={12} strokeWidth={3} />
                                                </div>
                                                <span className={`text-sm ${plan.popular ? 'text-gray-300' : 'text-gray-700'}`}>
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Button
                                    href="/contact"
                                    variant={plan.popular ? 'primary' : 'outline'}
                                    className={`w-full justify-center ${!plan.popular && 'border-gray-200 hover:border-np-orange hover:bg-np-orange hover:text-white'}`}
                                >
                                    {plan.cta}
                                </Button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center bg-gray-50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Need a Custom Solution?</h3>
                            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                                We understand that every business is unique. Contact us to discuss a bespoke package tailored specifically to your needs and budget.
                            </p>
                            <Button href="/contact" variant="primary">
                                Get a Custom Quote
                            </Button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
