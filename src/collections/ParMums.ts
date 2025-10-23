import { CollectionConfig } from 'payload'

const ParMums: CollectionConfig = {
  slug: 'par-mums',
  labels: {
    singular: 'Par mums',
    plural: 'Par mums',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'virsraksts',
      label: 'Virsraksts',
      type: 'text',
    },
    {
      name: 'saturs',
      label: 'Saturs',
      type: 'richText',
    },
    {
      name: 'attels',
      label: 'Attēls',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}

export default ParMums
