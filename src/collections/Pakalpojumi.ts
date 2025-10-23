import { CollectionConfig } from 'payload'

const Pakalpojumi: CollectionConfig = {
  slug: 'pakalpojumi',
  labels: {
    singular: 'Pakalpojums',
    plural: 'Pakalpojumi',
  },
  access: {
    read: () => true, // ļauj frontendam publiski lasīt saturu
  },
  fields: [
    {
      name: 'nosaukums',
      label: 'Nosaukums',
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
      name: 'heroVirsraksts',
      label: 'Hero sadaļas virsraksts',
      type: 'text',
    },
    {
      name: 'heroApraksts',
      label: 'Hero sadaļas apraksts',
      type: 'textarea',
    },

    // ========= Satura bloki =========
    {
      name: 'saturaBloki',
      label: 'Satura bloki',
      type: 'blocks',
      blocks: [
        // --- Teksta bloks ---
        {
          slug: 'teksta-bloks',
          labels: { singular: 'Teksta bloks', plural: 'Teksta bloki' },
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
          ],
        },

        // --- Kartīšu režģis ---
        {
          slug: 'kartisu-rezigs',
          labels: { singular: 'Kartīšu režģis', plural: 'Kartīšu režģi' },
          fields: [
            {
              name: 'kartites',
              label: 'Kartītes',
              type: 'array',
              fields: [
                {
                  name: 'virsraksts',
                  label: 'Virsraksts',
                  type: 'text',
                },
                {
                  name: 'apraksts',
                  label: 'Apraksts',
                  type: 'textarea',
                },
                {
                  name: 'punkti',
                  label: 'Punkti',
                  type: 'array',
                  fields: [
                    {
                      name: 'teksts',
                      label: 'Punkta teksts',
                      type: 'text',
                    },
                  ],
                },
                {
                  name: 'pogasTeksts',
                  label: 'Pogas teksts',
                  type: 'text',
                },
                {
                  name: 'pogasSaite',
                  label: 'Pogas saite (URL)',
                  type: 'text',
                },
              ],
            },
          ],
        },

        // --- CTA sadaļa (ja vēlēsies izmantot nākotnē) ---
        {
          slug: 'cta-sadala',
          labels: { singular: 'CTA sadaļa', plural: 'CTA sadaļas' },
          fields: [
            {
              name: 'virsraksts',
              label: 'Virsraksts',
              type: 'text',
            },
            {
              name: 'apraksts',
              label: 'Apraksts',
              type: 'textarea',
            },
            {
              name: 'pogasTeksts',
              label: 'Pogas teksts',
              type: 'text',
            },
            {
              name: 'pogasSaite',
              label: 'Pogas saite (URL)',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}

export default Pakalpojumi
