export default {
  title: 'Page Builder',
  name: 'pageBuilder',
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
    {
      name: 'slider',
      title: 'Slider',
      type: 'reference',
      to: [{type: 'slider'}]
    },
    {
      name: 'slice',
      title: 'Slice',
      type: 'reference',
      to: [{type: 'slices'}],
      options: {
        filter: ({document}) => {
          return {
            filter: '_id != $id',
            params: {
              id: document._id.replace('drafts.', '')
            }
          }
        }
      }
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'object',
      preview: {
        select: {
          status: 'isActive'
        },
        prepare({status}) {
          return {
            title: 'Testimonials',
            subtitle: status ? '✔️ Active' : '❌ Not Active',
          }
        }
      },
      fields: [
        {
          name: 'isActive',
          title: 'Testimonials: is active',
          type: 'boolean',
        }
      ]
    },
  ]
}
