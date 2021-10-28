import S from '@sanity/desk-tool/structure-builder'
import { GoMegaphone } from 'react-icons/go';
import author from './post/author';
import category from './post/category';
import post from './post/post'

export default S.listItem()
  .title('Posts')
  .icon(GoMegaphone)
  .child(
    S.list()
      .title('Posts')
      .items([
        post,
        S.divider(),
        category,
        author,
      ])
  )