import S from '@sanity/desk-tool/structure-builder';
import { GoOrganization } from 'react-icons/go';
export default S.listItem()
  .title('Authors')
  .icon(GoOrganization)
  .schemaType('author')
  .child(
    S.documentList('author')
      .title('Author')
      .menuItems(S.documentTypeList('author').getMenuItems())
      .filter('_type == "author"')
  )