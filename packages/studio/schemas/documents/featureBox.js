import {HiViewBoards} from 'react-icons/hi';

export default {
  title: 'Feature Box',
  name: 'featureBox',
  type: 'document',
  icon: HiViewBoards,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      }
    },
    {
      title: 'Features',
      name: 'features',
      type: 'array',
      of: [
        {
          name: 'feature',
          title: 'Feature',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
          ]
        }
      ]
    },
  ],
}