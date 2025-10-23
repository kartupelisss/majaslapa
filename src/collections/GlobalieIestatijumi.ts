import { GlobalConfig } from 'payload'

const GlobalieIestatijumi: GlobalConfig = {
  slug: 'globalie-ieraksti',
  label: 'Globālie iestatījumi',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'lapasNosaukums',
      label: 'Lapas nosaukums (title tag)',
      type: 'text',
    },
    {
      name: 'metaApraksts',
      label: 'Meta apraksts (SEO)',
      type: 'textarea',
    },
    {
      name: 'logo',
      label: 'Logo attēls',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}

export default GlobalieIestatijumi
