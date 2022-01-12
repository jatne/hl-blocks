export default {
  name: 'columns',
  title: 'Columns',
  type: 'object',
  fields: [
    {
      title: 'How many columns',
      name: 'columnNumber',
      type: 'string',
      options: {
        list: [
          {title: '1: 100%', value: '1_100'},
          {title: '2: 50% 50%', value: '2_50-50'},
          {title: '2: 40% 60%', value: '2_40-60'},
          {title: '3: 33% 33% 33%', value: '3_33-33-33'},
        ],
      }
    },
    {
      title: 'Column #1',
      name: 'column_1',
      type: 'pageBuilder',

    },
    {
      title: 'Column #2',
      name: 'column_2',
      type: 'pageBuilder',
      hidden: ({parent}) => {
        const columnNumber = ~~parent.columnNumber.split('_')[0]
        return columnNumber < 2
      }
    },
    {
      title: 'Column #3',
      name: 'column_3',
      type: 'pageBuilder',
      hidden: ({parent}) => {
        const columnNumber = ~~parent.columnNumber.split('_')[0]
        return columnNumber < 3
      }
    },
  ]
}