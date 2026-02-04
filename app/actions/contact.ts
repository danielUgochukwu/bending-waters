'use server'

import { client } from '@/sanity/lib/client'

export async function submitContactForm(formData: FormData) {
    const fullName = formData.get('fullName') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string

    if (!fullName || !email || !message) {
        return { success: false, message: 'Missing required fields' }
    }

    try {
        // We need a client with a token to perform write operations
        // Assuming SANITY_API_TOKEN is set in environment variables
        const token = process.env.NEXT_SANITY_API_TOKEN

        if (!token) {
            console.error('Missing NEXT_SANITY_API_TOKEN')
            return { success: false, message: 'Server configuration error' }
        }

        const clientWithToken = client.withConfig({
            token: token,
            useCdn: false,
            ignoreBrowserTokenWarning: true,
        })

        await clientWithToken.create({
            _type: 'contact',
            fullName,
            email,
            phone,
            subject,
            message,
            submittedAt: new Date().toISOString(),
        })

        return { success: true, message: 'Form submitted successfully' }
    } catch (error) {
        console.error('Error submitting form:', error)
        return { success: false, message: 'Failed to submit form' }
    }
}
