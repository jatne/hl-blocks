import S from '@sanity/desk-tool/structure-builder'

export default S.listItem()
  .title('Navigation')
  .schemaType('navMenu')
  .child(
    S.documentList('navMenu')
      .title('Navigation')
      .menuItems(S.documentTypeList('navMenu').getMenuItems())
      .filter('_type == "navMenu"')
  )