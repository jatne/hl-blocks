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
      title: 'Page Sections',
      name: 'content',
      type: 'array',
      of: [
        { type: 'emptySpace' },
        { type: 'image' },
        { type: 'richEditor' },
        {
          name: 'featureBox',
          title: 'Feature Box',
          type: 'reference',
          to: [{type: 'featureBox'}]
        },
      ]
    },
  ],
}