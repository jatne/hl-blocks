export default {
  name: 'emptySpace',
  title: 'Empty Space',
  type: 'object',
  fields: [
    {
      title: 'Empty Space',
      name: 'value',
      type: 'string',
      options: {
        list: [
          {
            title: 'Small',
            value: 'small',
          },
          {
            title: 'Large',
            value: 'large',
          },
        ]
      }
    }
  ],
  preview: {
    select: {
      title: 'value',
    },
    prepare({ title: subtitle }) {
      return {
        title: 'Empty Space',
        subtitle,
      }
    }
  }
}