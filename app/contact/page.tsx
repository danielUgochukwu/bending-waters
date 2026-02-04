'use client'

import React, { useTransition, useState } from 'react'
import { Sparkles } from 'lucide-react'
import { submitContactForm } from '@/app/actions/contact'
import PageHeader from '@/components/PageHeader'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/components/Button'

export default function ContactPage() {
    const [isPending, startTransition] = useTransition()
    const [status, setStatus] = useState<{ success?: boolean; message?: string } | null>(null)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)

        startTransition(async () => {
            const result = await submitContactForm(formData)
            setStatus(result)
            if (result.success) {
                (event.target as HTMLFormElement).reset()
            }
        })
    }

    return (
        <div className="min-h-screen flex flex-col pt-16 md:pt-20">
            <Header />

            <PageHeader title="Contact" />

            <main className="flex-1 w-full bg-[#fcfcfc] text-[#1a1a1a] flex items-center justify-center px-8 py-24">
                <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Left Column: Text Content */}
                    <div className="space-y-8 sticky top-24">
                        <div className="flex items-center gap-2 text-sm font-medium tracking-wide text-gray-700 uppercase">
                            <Sparkles className="w-4 h-4 text-np-orange" />
                            <span>Get In Touch</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            Success is a team effort <br />
                            <span className="text-np-orange">let&apos;s achieve it together</span>
                        </h1>

                        <div className="space-y-4 pt-8">
                            <p className="text-lg font-medium text-gray-700">needhelp@company.com</p>
                            <p className="text-3xl font-bold text-gray-700">(+123) 456789 00</p>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="relative">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2 border-b border-gray-300 focus-within:border-np-orange transition-colors">
                                    <label htmlFor="fullName" className="text-sm text-gray-700 block">Your full name</label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        required
                                        className="w-full bg-transparent py-2 outline-none text-lg text-gray-900 placeholder-gray-300"
                                    />
                                </div>

                                <div className="space-y-2 border-b border-gray-300 focus-within:border-np-orange transition-colors">
                                    <label htmlFor="email" className="text-sm text-gray-700 block">Your email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full bg-transparent py-2 outline-none text-lg text-gray-900 placeholder-gray-300"
                                    />
                                </div>

                                <div className="space-y-2 border-b border-gray-300 focus-within:border-np-orange transition-colors">
                                    <label htmlFor="phone" className="text-sm text-gray-700 block">Phone number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full bg-transparent py-2 outline-none text-lg text-gray-900 placeholder-gray-300"
                                    />
                                </div>

                                <div className="space-y-2 border-b border-gray-300 focus-within:border-np-orange transition-colors">
                                    <label htmlFor="subject" className="text-sm text-gray-700 block">What are your needs</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        className="w-full bg-transparent py-2 outline-none text-lg text-gray-900 placeholder-gray-300"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 border-b border-gray-300 focus-within:border-np-orange transition-colors">
                                <label htmlFor="message" className="text-sm text-gray-700 block">your-message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={1}
                                    className="w-full bg-transparent py-2 outline-none text-lg text-gray-900 placeholder-gray-300 resize-none min-h-[40px]"
                                />
                            </div>

                            <div className="pt-4">
                                <Button
                                    type="submit"
                                    disabled={isPending}
                                    variant="primary"
                                    size="lg"
                                    className="rounded-full px-8 py-4 w-auto flex items-center gap-2"
                                >
                                    {isPending ? 'Sending...' : 'Send your request'}
                                </Button>
                                {status && (
                                    <p className={`mt-4 text-sm ${status.success ? 'text-green-600' : 'text-red-500'}`}>
                                        {status.message}
                                    </p>
                                )}
                            </div>
                        </form>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    )
}
