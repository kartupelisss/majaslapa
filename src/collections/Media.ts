import type { CollectionConfig } from 'payload'

const Media: CollectionConfig = {
  slug: 'media', // var arī 'Media', galvenais lai konsekventi
  access: {
    read: () => true,
  },
  upload: true, // <- tikai true, bez staticURL/staticDir/imageSizes
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}

export default Media
