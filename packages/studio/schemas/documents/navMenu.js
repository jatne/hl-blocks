import { GoThreeBars } from "react-icons/go";

export default {
  title: 'Navigation Menu',
  name: 'navMenu',
  type: 'document',
  icon: GoThreeBars,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      type: 'array',
      name: 'items',
      of: [{
        title: "Link",
        name: "link",
        type: 'object',
        fields: [
          {
            title: 'Link Label',
            name: 'label',
            type: 'string',
          },
          {
            title: "Select link type",
            name: 'linkType',
            type: 'string',
            options: {
              list: [
                {title: 'Internal', value: 'internal'},
                {title: 'External', value: 'external'}
              ],
            }
          },
          {
            title: 'Page (internal)',
            name: 'linkInternal',
            type: 'reference',
            to: [{type: 'page'}],
            hidden: ({ parent }) => parent?.linkType === undefined || parent?.linkType === 'external'
          },
          {
            title: 'Page (external)',
            name: 'linkExternal',
            type: 'url',
            hidden: ({ parent }) => parent?.linkType === undefined || parent?.linkType === 'internal'
          },
        ]
      }]
    }
  ],
}