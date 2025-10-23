import { CollectionConfig } from 'payload'

const BlogPosts: CollectionConfig = {
  slug: 'insights',
  labels: {
    singular: 'Raksts',
    plural: 'Insights raksti',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'publishedDate', 'slug'],
  },
  access: {
    read: () => true, // ļauj publiski lasīt rakstus
  },
  fields: [
    {
      name: 'title',
      label: 'Virsraksts',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug (URL daļa)',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Tiks izmantots kā URL daļa (piem., /insights/manas-zinas)',
      },
    },
    {
      name: 'publishedDate',
      label: 'Publicēšanas datums',
      type: 'date',
      required: true,
      admin: {
        date: { pickerAppearance: 'dayOnly' },
      },
    },
    {
      name: 'excerpt',
      label: 'Īss ievada teksts',
      type: 'textarea',
      admin: {
        placeholder: 'Īss kopsavilkums vai ievadrinda, kas parādās sarakstā',
      },
    },
    {
      name: 'content',
      label: 'Galvenais saturs (raksta teksts)',
      type: 'richText',
      required: true,
    },
    {
      name: 'summary',
      label: 'Kopsavilkums (bullet punkti)',
      type: 'array',
      admin: {
        description: 'Var izmantot kā izceltos punktus raksta beigās',
      },
      fields: [
        {
          name: 'item',
          label: 'Punkts',
          type: 'text',
        },
      ],
    },
    {
      name: 'featuredImage',
      label: 'Galvenais attēls',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Attēls, kas tiks rādīts raksta virsraksta blokā',
      },
    },
  ],
  timestamps: true,
}

export default BlogPosts
