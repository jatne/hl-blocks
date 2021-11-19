import {FaLayerGroup} from 'react-icons/fa';

export default {
  title: 'Slices',
  name: 'slices',
  type: 'document',
  icon: FaLayerGroup,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Page Builder',
      name: 'content',
      type: 'pageBuilder',
    },
  ],
}