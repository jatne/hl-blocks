import S from '@sanity/desk-tool/structure-builder';
import {IoIosCopy} from 'react-icons/io';

export default S.listItem()
  .title('Posts')
  .icon(IoIosCopy)
  .schemaType('post')
  .child(
    S.documentList('post')
      .title('Post')
      .menuItems(S.documentTypeList('post').getMenuItems())
      .filter('_type == "post"')
  )