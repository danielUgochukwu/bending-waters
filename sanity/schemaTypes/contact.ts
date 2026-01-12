import { defineField, defineType } from 'sanity'

export const contact = defineType({
    name: 'contact',
    title: 'Contact Submissions',
    type: 'document',
    fields: [
        defineField({
            name: 'firstName',
            title: 'First Name',
            type: 'string',
        }),
        defineField({
            name: 'lastName',
            title: 'Last Name',
            type: 'string',
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
        }),
        defineField({
            name: 'phone',
            title: 'Phone',
            type: 'string',
        }),
        defineField({
            name: 'website',
            title: 'Website URL',
            type: 'url',
        }),
        defineField({
            name: 'budget',
            title: 'Monthly Marketing Budget',
            type: 'string',
            options: {
                list: [
                    { title: 'Less than $5,000', value: '<5k' },
                    { title: '$5,000 - $10,000', value: '5k-10k' },
                    { title: '$10,000 - $50,000', value: '10k-50k' },
                    { title: '$50,000+', value: '50k+' },
                ],
            },
        }),
        defineField({
            name: 'submittedAt',
            title: 'Submitted At',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
    ],
    preview: {
        select: {
            title: 'email',
            subtitle: 'submittedAt',
        },
    },
})
