export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'name',
      type: 'string',
      hidden: ({document}) => document._id === 'frontPage'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      hidden: ({document}) => document._id === 'frontPage'
    },
    {
      title: 'Image featured',
      name: 'imageFeatured',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Page Builder',
      name: 'content',
      type: 'pageBuilder',
    },
  ],
}