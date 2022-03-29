export default {
  title: 'Post',
  name: 'post',
  type: 'document',
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
      title: 'Date',
      name: 'date',
      type: 'date',
      initialValue: (new Date()).toISOString()
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
  preview: {
    select: {
      title: 'name',
      subtitle: 'date'
    }
  }
}