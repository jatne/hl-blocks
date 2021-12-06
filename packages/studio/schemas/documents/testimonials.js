import {RiChatSmile2Fill} from 'react-icons/ri';

export default {
  title: 'Testimonial',
  name: 'testimonial',
  type: 'document',
  icon: RiChatSmile2Fill,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Company',
      name: 'company',
      type: 'string',
    },
    {
      title: 'Text',
      name: 'text',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
  ],
}