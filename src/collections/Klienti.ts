import { CollectionConfig } from 'payload'

const Klienti: CollectionConfig = {
  slug: 'klienti',
  labels: {
    singular: 'Klients',
    plural: 'Klienti',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'nosaukums',
      label: 'Nosaukums',
      type: 'text',
      required: true,
    },
    {
      name: 'apraksts',
      label: 'Apraksts',
      type: 'textarea',
    },
    {
      name: 'heroVirsraksts',
      label: 'Hero sadaļas virsraksts',
      type: 'text',
    },
    {
      name: 'heroApraksts',
      label: 'Hero sadaļas apraksts',
      type: 'textarea',
    },
  ],
}

export default Klienti
