import S from '@sanity/desk-tool/structure-builder';

export default S.documentListItem()
  .schemaType('siteSettings')
  .title('Site settings')
  .child(
    S.document()
      .schemaType('siteSettings')
      .documentId('siteSettings')
  )