import S from '@sanity/desk-tool/structure-builder'
import page from './structure/page'
import post from './structure/post'
import siteSettings from './structure/siteSettings'
import navMenu from './structure/navMenu'
import reusableComponent from './structure/reusableComponent'

export default () =>
  S.list()
    .title('Content')
    .items([
      page,
      post,
      S.divider(),
      navMenu,
      reusableComponent,
      S.divider(),
      siteSettings,
    ])
