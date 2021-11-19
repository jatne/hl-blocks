import S from '@sanity/desk-tool/structure-builder';

export default S.listItem()
  .title('Slices')
  .schemaType('slices')
  .child(
    S.documentList('slices')
      .title('Slices')
      .menuItems(S.documentTypeList('slices').getMenuItems())
      .filter('_type == "slices"')
  );