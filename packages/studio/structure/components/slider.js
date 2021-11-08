import S from '@sanity/desk-tool/structure-builder';

export default S.listItem()
  .title('Slider')
  .schemaType('slider')
  .child(
    S.documentList('slider')
      .title('Slider')
      .menuItems(S.documentTypeList('slider').getMenuItems())
      .filter('_type == "slider"')
  );