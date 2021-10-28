export default {
  name: 'richEditor',
  title: 'Rich Editor',
  type: 'object',
  fields: [
    {
      name: 'content',
      title: 'Rich Editor',
      type: 'array',
      of: [
        { type: 'block'},
      ]
    },
  ]
}