import { FaHeading } from "react-icons/fa"

export default {
  name: 'titleWithText',
  title: 'Title with text',
  type: 'object',
  icon: FaHeading,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Text',
      name: 'text',
      type: 'text',
    },
    {
      title: 'Alignment',
      name: 'alignment',
      type: 'string',
      options: {
        list: [
          {
            title: 'left',
            value: 'left',
          },
          {
            title: 'center',
            value: 'center',
          },
          {
            title: 'right',
            value: 'right',
          },
        ]
      }
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'text',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle,
      }
    }
  }
}