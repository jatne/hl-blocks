import S from '@sanity/desk-tool/structure-builder';

export default S.listItem()
  .title('Pages')
  .schemaType('page')
  .child(
    S.documentList('page')
      .title('Pages')
      .menuItems(S.documentTypeList('page').getMenuItems())
      .filter('_type == "page" && _id != "frontPage"')
  )