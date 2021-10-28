import { GoSettings } from 'react-icons/go';

export default {
  title: 'Site Settings',
  name: 'siteSettings',
  type: 'document',
  icon: GoSettings,
  fields: [
    {
      title: 'Page Title',
      name: 'title',
      type: 'string',
    },
    {
      name: 'navMenuHeader',
      type: 'reference',
      to: [{type: 'navMenu'}]
    },
    {
      name: 'navMenuFooter',
      type: 'reference',
      to: [{type: 'navMenu'}]
    },
  ]
}