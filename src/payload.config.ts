import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

// Esošās kolekcijas
import BlogPosts from './collections/BlogPosts'
import Pages from './collections/Pages'
import Media from './collections/Media'
import { Users } from './collections/Users'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },
  },

  editor: lexicalEditor(),

  collections: [
    Users,
    Media,
    Pages,
    BlogPosts,

    // ===== Services kolekcija =====
    {
      slug: 'services',
      labels: { singular: 'Pakalpojums', plural: 'Pakalpojumi' },
      admin: { useAsTitle: 'title' },
      fields: [
        { name: 'title', type: 'text', required: true, label: 'Nosaukums' },
        { name: 'slug', type: 'text', required: true, unique: true, label: 'Slug (URL daļa)' },
        {
          name: 'hero',
          type: 'group',
          label: 'Hero sadaļa',
          fields: [
            { name: 'title', type: 'text', label: 'Virsraksts' },
            { name: 'subtitle', type: 'textarea', label: 'Apraksts' },
          ],
        },
        {
          name: 'sections',
          type: 'blocks',
          label: 'Satura bloki',
          blocks: [
            {
              slug: 'textBlock',
              labels: { singular: 'Teksta bloks', plural: 'Teksta bloki' },
              fields: [
                { name: 'title', type: 'text', label: 'Virsraksts' },
                { name: 'content', type: 'richText', editor: lexicalEditor(), label: 'Saturs' },
              ],
            },
            {
              slug: 'cardGrid',
              labels: { singular: 'Kartīšu režģis', plural: 'Kartīšu režģi' },
              fields: [
                {
                  name: 'cards',
                  type: 'array',
                  label: 'Kartītes',
                  fields: [
                    { name: 'title', type: 'text', label: 'Virsraksts' },
                    { name: 'text', type: 'textarea', label: 'Apraksts' },
                    {
                      name: 'bullets',
                      type: 'array',
                      label: 'Punkti',
                      fields: [{ name: 'item', type: 'text', label: 'Punkta teksts' }],
                    },
                  ],
                },
              ],
            },
            {
              slug: 'highlightBox',
              labels: { singular: 'Uzceltā sadaļa', plural: 'Uzceltās sadaļas' },
              fields: [
                { name: 'title', type: 'text', label: 'Virsraksts' },
                {
                  name: 'bullets',
                  type: 'array',
                  label: 'Punkti',
                  fields: [{ name: 'item', type: 'text', label: 'Punkta teksts' }],
                },
              ],
            },
            {
              slug: 'ctaSection',
              labels: { singular: 'CTA sadaļa', plural: 'CTA sadaļas' },
              fields: [
                { name: 'title', type: 'text', label: 'Virsraksts' },
                { name: 'text', type: 'textarea', label: 'Apraksts' },
                { name: 'ctaText', type: 'text', label: 'Pogas teksts' },
                { name: 'ctaLink', type: 'text', label: 'Pogas saite' },
              ],
            },
          ],
        },
      ],
    },

    // ===== Clients kolekcija =====
    {
      slug: 'clients',
      labels: { singular: 'Klients', plural: 'Klienti' },
      admin: { useAsTitle: 'title' },
      fields: [
        { name: 'title', type: 'text', required: true, label: 'Nosaukums' },
        { name: 'slug', type: 'text', required: true, unique: true, label: 'Slug (URL daļa)' },
        {
          name: 'hero',
          type: 'group',
          label: 'Hero sadaļa',
          fields: [
            { name: 'title', type: 'text', label: 'Virsraksts' },
            { name: 'subtitle', type: 'textarea', label: 'Apraksts' },
          ],
        },
        {
          name: 'sections',
          type: 'blocks',
          label: 'Satura bloki',
          blocks: [
            {
              slug: 'textBlock',
              labels: { singular: 'Teksta bloks', plural: 'Teksta bloki' },
              fields: [
                { name: 'title', type: 'text', label: 'Virsraksts' },
                { name: 'content', type: 'richText', editor: lexicalEditor(), label: 'Saturs' },
              ],
            },
            {
              slug: 'cardGrid',
              labels: { singular: 'Kartīšu režģis', plural: 'Kartīšu režģi' },
              fields: [
                {
                  name: 'cards',
                  type: 'array',
                  label: 'Kartītes',
                  fields: [
                    { name: 'title', type: 'text', label: 'Virsraksts' },
                    { name: 'text', type: 'textarea', label: 'Apraksts' },
                    {
                      name: 'bullets',
                      type: 'array',
                      label: 'Punkti',
                      fields: [{ name: 'item', type: 'text', label: 'Punkta teksts' }],
                    },
                  ],
                },
              ],
            },
            {
              slug: 'highlightBox',
              labels: { singular: 'Uzceltā sadaļa', plural: 'Uzceltās sadaļas' },
              fields: [
                { name: 'title', type: 'text', label: 'Virsraksts' },
                {
                  name: 'bullets',
                  type: 'array',
                  label: 'Punkti',
                  fields: [{ name: 'item', type: 'text', label: 'Punkta teksts' }],
                },
              ],
            },
            {
              slug: 'ctaSection',
              labels: { singular: 'CTA sadaļa', plural: 'CTA sadaļas' },
              fields: [
                { name: 'title', type: 'text', label: 'Virsraksts' },
                { name: 'text', type: 'textarea', label: 'Apraksts' },
                { name: 'ctaText', type: 'text', label: 'Pogas teksts' },
                { name: 'ctaLink', type: 'text', label: 'Pogas saite' },
              ],
            },
          ],
        },
      ],
    },

    // ===== About =====
    {
      slug: 'about',
      labels: { singular: 'Par mums', plural: 'Par mums' },
      admin: { useAsTitle: 'title' },
      fields: [
        { name: 'title', type: 'text', required: true, label: 'Nosaukums' },
        { name: 'content', type: 'richText', editor: lexicalEditor(), label: 'Saturs' },
      ],
    },

    // ===== Contact =====
    {
      slug: 'contact',
      labels: { singular: 'Kontakti', plural: 'Kontakti' },
      admin: { useAsTitle: 'email' },
      fields: [
        { name: 'email', type: 'email', label: 'E-pasts' },
        { name: 'phone', type: 'text', label: 'Telefons' },
        { name: 'address', type: 'text', label: 'Adrese' },
        { name: 'mapLink', type: 'text', label: 'Google Maps saite' },
      ],
    },

    // ===== Globals =====
    {
      slug: 'globals',
      labels: { singular: 'Globālie iestatījumi', plural: 'Globālie iestatījumi' },
      fields: [
        { name: 'siteTitle', type: 'text', label: 'Vietnes nosaukums' },
        { name: 'logo', type: 'upload', relationTo: 'media', label: 'Logo' },
        { name: 'footerText', type: 'textarea', label: 'Kājene (footer)' },
      ],
    },
  ],

  secret: process.env.PAYLOAD_SECRET || 'dev-secret',
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },
  db: mongooseAdapter({ url: process.env.DATABASE_URI || '' }),
  sharp,
  plugins: [payloadCloudPlugin()],
})
