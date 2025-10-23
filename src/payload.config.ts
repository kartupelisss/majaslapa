import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

// ===== Kolekciju importi =====
import { Users } from './collections/Users'
import Media from './collections/Media'
import Pages from './collections/Pages'
import BlogPosts from './collections/BlogPosts'
import Pakalpojumi from './collections/Pakalpojumi'
import Klienti from './collections/Klienti'
import ParMums from './collections/ParMums'
import Kontakti from './collections/Kontakti'
import GlobalieIestatijumi from './collections/GlobalieIestatijumi'

// ===== Faila setup =====
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  // ===== Admin panelis =====
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },
  },

  // ===== Lexical redaktors =====
  editor: lexicalEditor(),

  // ===== Kolekcijas =====
  collections: [Users, Media, Pages, BlogPosts, Pakalpojumi, Klienti, ParMums, Kontakti],

  // ===== Globālie iestatījumi =====
  globals: [GlobalieIestatijumi],

  // ===== Bāzes konfigurācija =====
  secret: process.env.PAYLOAD_SECRET || 'dev-secret',

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),

  sharp,

  // ===== Pluginu saraksts =====
  plugins: [
    payloadCloudPlugin(), // ✅ Cloud integrācija (Render, Netlify u.c.)
  ],
})
