import type { CollectionConfig } from 'payload'

export const Campaign: CollectionConfig = {
    slug: 'campaign',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: false,
        },
        {
            name: 'hero_image',
            type: 'upload',
            relationTo: 'media',
            required: false,
        },
        {
            name: 'goal',
            type: 'number',
            min: 0,
            required: false,
        },
        {
            name: 'end_date',
            type: 'date',
            required: false,
        },
        {
            name: 'owner',
            type: 'relationship',
            relationTo: 'users',
            required: false,
        },
        {
            name: 'description',
            type: 'textarea',
            required: false,
        },
        {
            name: 'rewards',
            type: 'relationship',
            relationTo: 'reward',
            hasMany: true,
        },
    ],
}
