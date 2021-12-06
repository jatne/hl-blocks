import S from '@sanity/desk-tool/structure-builder';

export default S.listItem()
  .title('Testimonial')
  .schemaType('testimonial')
  .child(
    S.documentList('testimonial')
      .title('Testimonial')
      .menuItems(S.documentTypeList('testimonial').getMenuItems())
      .filter('_type == "testimonial"')
  );