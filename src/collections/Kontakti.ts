import { CollectionConfig } from 'payload'

const Kontakti: CollectionConfig = {
  slug: 'kontakti',
  labels: {
    singular: 'Kontakts',
    plural: 'Kontakti',
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
      name: 'adrese',
      label: 'Adrese',
      type: 'text',
    },
    {
      name: 'epasts',
      label: 'E-pasts',
      type: 'email',
    },
    {
      name: 'talrunis',
      label: 'Tālrunis',
      type: 'text',
    },
    {
      name: 'karte',
      label: 'Google Maps URL',
      type: 'text',
    },
  ],
}

export default Kontakti
