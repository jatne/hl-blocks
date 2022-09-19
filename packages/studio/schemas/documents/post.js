export default {
  title: 'Post',
  name: 'post',
  type: 'document',
  initialValue: {
    date: new Date(),
  },
  fields: [
    {
      title: 'Title',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
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
      title: 'Post date',
      name: 'date',
      type: 'datetime',
    },
    {
      title: 'Author',
      name: 'author',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'author'}]
        }
      ]
    },
    {
      title: 'Category',
      name: 'category',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'category'}]
        }
      ]
    },
  ],
}