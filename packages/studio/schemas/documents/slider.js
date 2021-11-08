import {MdViewCarousel} from 'react-icons/md';

export default {
  title: 'Slider',
  name: 'slider',
  type: 'document',
  icon: MdViewCarousel,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Slides',
      name: 'slides',
      type: 'array',
      of: [
        {
          title: 'Slide',
          name: 'slide',
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Text',
              type: 'string',
            },
            {
              name: 'image',
              title: 'image',
              type: 'image',
              options: {
                hotspot: true,
              }
            },
          ]
        }
      ]
    },
  ],
}