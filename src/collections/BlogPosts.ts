import { CollectionConfig } from 'payload'

const BlogPosts: CollectionConfig = {
  slug: 'blog-posts',
  admin: { useAsTitle: 'title' },
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'excerpt', type: 'textarea' },
    { name: 'content', type: 'richText', required: true },
    { name: 'publishedDate', type: 'date', required: true },
  ],
}

export default BlogPosts
