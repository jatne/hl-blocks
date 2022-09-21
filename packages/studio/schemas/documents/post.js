export default {
  title: 'Post',
  name: 'post',
  type: 'document',
  initialValue: {
    publishDate: new Date().toString(),
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
      name: 'publishDate',
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
        {
      title: 'Excerpt',
      name: 'excerpt',
      type: 'text',
    },
    {
      name: 'content',
      title: 'Post',
      type: 'array',
      of: [
        { type: 'block'},
      ]
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'publishDate',
      media: 'imageFeatured',
    },
  }
}