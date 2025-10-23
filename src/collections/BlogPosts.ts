import { CollectionConfig } from 'payload'

const BlogPosts: CollectionConfig = {
  slug: 'blog-posts',
  labels: {
    singular: 'Raksts',
    plural: 'Insights raksti',
  },
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
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
      fields: [
        {
          name: 'item',
          label: 'Punkts',
          type: 'text',
        },
      ],
    },
  ],
}

export default BlogPosts
