import type { CollectionConfig } from 'payload'

export const Reward: CollectionConfig = {
  slug: 'reward',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: false,
    },
    {
      name: 'media',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
    },
  ],
}
