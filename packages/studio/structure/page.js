import S from '@sanity/desk-tool/structure-builder'
import { GoBook } from 'react-icons/go';
import frontPage from './page/frontPage';
import page from './page/page';

export default S.listItem()
  .title('Pages')
  .icon(GoBook)
  .child(
    S.list()
      .title('Page')
      .items([
        frontPage,
        S.divider(),
        page
      ])
  )