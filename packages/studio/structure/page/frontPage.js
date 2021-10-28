import S from '@sanity/desk-tool/structure-builder';
import { GoHome } from 'react-icons/go';

export default S.documentListItem()
  .title('Front Page')
  .icon(GoHome)
  .schemaType('page')
  .child(
    S.document()
      .title('Front Page')
      .schemaType('page')
      .documentId('frontPage')
  )