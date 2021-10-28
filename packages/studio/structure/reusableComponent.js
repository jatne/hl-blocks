import S from '@sanity/desk-tool/structure-builder'
import { GoPackage } from 'react-icons/go';

export default S.listItem()
  .title('Reusable Components')
  .icon(GoPackage)
  .child(
    S.list()
      .title('Modules')
  )