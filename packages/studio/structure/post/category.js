import S from '@sanity/desk-tool/structure-builder';
import {AiFillTags} from 'react-icons/ai';

export default S.listItem()
  .title('Category')
  .icon(AiFillTags)
  .schemaType('author')
  .child(
    S.documentList('category')
      .title('Category')
      .menuItems(S.documentTypeList('category').getMenuItems())
      .filter('_type == "category"')
  )
