import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

import { Users } from './collections/Users'
import Media from './collections/Media'
import Pages from './collections/Pages'
import BlogPosts from './collections/BlogPosts'
import Pakalpojumi from './collections/Pakalpojumi'
import Klienti from './collections/Klienti'
import ParMums from './collections/ParMums'
import Kontakti from './collections/Kontakti'
import GlobalieIestatijumi from './collections/GlobalieIestatijumi'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },
  },
  editor: lexicalEditor(),
  collections: [Users, Media, Pages, BlogPosts, Pakalpojumi, Klienti, ParMums, Kontakti],
  globals: [GlobalieIestatijumi],
  secret: process.env.PAYLOAD_SECRET || 'dev-secret',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [payloadCloudPlugin()],
})
